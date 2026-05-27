using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using System.Linq;
using System.Runtime.CompilerServices;

namespace backend.Infrastructure.YouTube;

public class YouTubeService : IYouTubeService
{
    public async IAsyncEnumerable<List<YoutubeTrackDto>> StreamPlaylistTracksAsync(
        string playlistId, 
        string apiKey)
    {
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
                playlistResponse = await playlistRequest.ExecuteAsync();
            }
            catch (Google.GoogleApiException ex) when (ex.Error.Code == 404 || ex.Error.Code == 403)
            {
                // Playlist not found or private
                yield break;
            }
            catch (Exception)
            {
                // In a real app, log the error here
                throw;
            }

            if (playlistResponse.Items == null || playlistResponse.Items.Count == 0)
                yield break;

            var videoIds = playlistResponse.Items
                .Select(i => i.ContentDetails.VideoId)
                .ToList();

            // Fetch explicit status and content details for these videos
            var videoRequest = service.Videos.List("status,contentDetails,snippet");
            videoRequest.Id = string.Join(",", videoIds);
            
            var videoResponse = await videoRequest.ExecuteAsync();
            var videoMap = videoResponse.Items.ToDictionary(v => v.Id);

            var batch = new List<YoutubeTrackDto>();

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
                    else if (videoDetails.ContentDetails.RegionRestriction != null && 
                             videoDetails.ContentDetails.RegionRestriction.Blocked != null && 
                             videoDetails.ContentDetails.RegionRestriction.Blocked.Any())
                    {
                        isUnavailable = true;
                        reason = "Region Locked";
                    }
                }

                batch.Add(new YoutubeTrackDto(
                    VideoId: videoId,
                    Title: item.Snippet.Title ?? "Unknown Title",
                    ChannelTitle: item.Snippet.VideoOwnerChannelTitle ?? item.Snippet.ChannelTitle ?? "Unknown Channel",
                    ThumbnailUrl: item.Snippet.Thumbnails?.Maxres?.Url ?? item.Snippet.Thumbnails?.Medium?.Url ?? item.Snippet.Thumbnails?.Default__?.Url ?? "",
                    IsUnavailable: isUnavailable,
                    UnavailableReason: reason
                ));
            }

            yield return batch;
            nextPageToken = playlistResponse.NextPageToken;

        } while (!string.IsNullOrEmpty(nextPageToken));
    }
}
