using System.Collections.Generic;

namespace backend.Infrastructure.YouTube;

public interface IYouTubeService
{
    IAsyncEnumerable<List<YoutubeTrackDto>> StreamPlaylistTracksAsync(string playlistId, string apiKey);
}
