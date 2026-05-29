using System.Collections.Generic;

namespace backend.Infrastructure.YouTube;

public interface IYouTubeService
{
    IAsyncEnumerable<YoutubeTrackDto> StreamPlaylistTracksAsync(
        string playlistId, 
        string apiKey, 
        string? countryCode = null,
        CancellationToken cancellationToken = default);
}
