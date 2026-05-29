namespace backend.Infrastructure.YouTube;

public record YoutubeTrackDto(
    string VideoId,
    string Title,
    string ChannelTitle,
    string ThumbnailUrl,
    bool IsUnavailable,
    string? UnavailableReason,
    string? StatusDetails = null,
    bool IsSafeToRemove = false
);
