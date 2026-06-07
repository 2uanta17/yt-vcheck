using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Runtime.CompilerServices;

namespace backend.Infrastructure.YouTube;

public class YouTubeService : IYouTubeService
{
    private readonly ILogger<YouTubeService> _logger;

    public YouTubeService(ILogger<YouTubeService> logger)
    {
        _logger = logger;
    }

    public async IAsyncEnumerable<YoutubeTrackDto> StreamPlaylistTracksAsync(
        string playlistId, 
        string apiKey,
        string? countryCode = null,
        [EnumeratorCancellation] CancellationToken cancellationToken = default)
    {
        // Default to US if not provided
        countryCode = countryCode?.ToUpperInvariant() ?? "US";

        using var service = new Google.Apis.YouTube.v3.YouTubeService(new BaseClientService.Initializer
        {
            ApiKey = apiKey,
            ApplicationName = "yt-vcheck"
        });

        string? nextPageToken = null;

        do
        {
            var playlistRequest = service.PlaylistItems.List("snippet,contentDetails");
            playlistRequest.PlaylistId = playlistId;
            playlistRequest.MaxResults = 50;
            playlistRequest.PageToken = nextPageToken;

            PlaylistItemListResponse playlistResponse;
            try
            {
                playlistResponse = await playlistRequest.ExecuteAsync(cancellationToken);
            }
            catch (Google.GoogleApiException ex)
            {
                if (ex.Error.Code == 404)
                {
                    throw new Exception("Playlist not found. Please check the ID.");
                }
                if (ex.Error.Code == 403)
                {
                    throw new Exception("Access denied. The playlist might be private or the API key is invalid.");
                }
                throw new Exception($"YouTube API error: {ex.Error.Message}");
            }
            catch (OperationCanceledException)
            {
                _logger.LogInformation("Streaming playlist tracks was cancelled.");
                yield break;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An unexpected error occurred while streaming playlist tracks for PlaylistId: {PlaylistId}", playlistId);
                throw;
            }

            if (playlistResponse.Items == null || playlistResponse.Items.Count == 0)
                yield break;

            var videoIds = playlistResponse.Items
                .Select(i => i.ContentDetails.VideoId)
                .Where(id => !string.IsNullOrEmpty(id))
                .ToList();

            // Fetch explicit status and content details for these videos
            var videoRequest = service.Videos.List("status,contentDetails,snippet");
            videoRequest.Id = string.Join(",", videoIds);
            
            var videoResponse = await videoRequest.ExecuteAsync(cancellationToken);
            var videoMap = (videoResponse.Items ?? new List<Video>()).ToDictionary(v => v.Id);

            foreach (var item in playlistResponse.Items)
            {
                var videoId = item.ContentDetails.VideoId;
                videoMap.TryGetValue(videoId, out var videoDetails);

                bool isUnavailable = false;
                string? reason = null;

                if (videoDetails == null)
                {
                    isUnavailable = true;
                    reason = "Deleted or Private";
                }
                else
                {
                    if (videoDetails.Status.PrivacyStatus == "private")
                    {
                        isUnavailable = true;
                        reason = "Private";
                    }
                    else if (videoDetails.Status.UploadStatus == "deleted")
                    {
                        isUnavailable = true;
                        reason = "Deleted";
                    }
                    else if (IsRegionLocked(videoDetails.ContentDetails.RegionRestriction, countryCode))
                    {
                        isUnavailable = true;
                        reason = "Region Locked";
                    }
                }

                yield return new YoutubeTrackDto(
                    VideoId: videoId,
                    Title: item.Snippet.Title ?? "Unknown Title",
                    ChannelTitle: item.Snippet.VideoOwnerChannelTitle ?? item.Snippet.ChannelTitle ?? "Unknown Channel",
                    ThumbnailUrl: item.Snippet.Thumbnails?.Maxres?.Url ?? item.Snippet.Thumbnails?.Medium?.Url ?? item.Snippet.Thumbnails?.Default__?.Url ?? "",
                    IsUnavailable: isUnavailable,
                    UnavailableReason: reason,
                    PlaylistItemId: item.Id,
                    Position: item.Snippet.Position
                );
            }

            nextPageToken = playlistResponse.NextPageToken;

        } while (!string.IsNullOrEmpty(nextPageToken));
    }

    private static bool IsRegionLocked(VideoContentDetailsRegionRestriction? restriction, string countryCode)
    {
        if (restriction == null) return false;

        // If Allowed is populated, target must be in it
        if (restriction.Allowed != null && restriction.Allowed.Any())
        {
            return !restriction.Allowed.Contains(countryCode, StringComparer.OrdinalIgnoreCase);
        }

        // If Blocked is populated, target must NOT be in it
        if (restriction.Blocked != null && restriction.Blocked.Any())
        {
            return restriction.Blocked.Contains(countryCode, StringComparer.OrdinalIgnoreCase);
        }

        return false;
    }
}
