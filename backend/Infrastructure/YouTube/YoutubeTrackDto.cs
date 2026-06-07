namespace backend.Infrastructure.YouTube;

public record YoutubeTrackDto(
    string VideoId,
    string Title,
    string ChannelTitle,
    string ThumbnailUrl,
    bool IsUnavailable,
    string? UnavailableReason,
    string? PlaylistItemId = null,
    long? Position = null,
    string? StatusDetails = null,
    bool IsSafeToRemove = false
);
