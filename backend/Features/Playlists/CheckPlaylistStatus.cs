using backend.Infrastructure.YouTube;
using Microsoft.AspNetCore.Mvc;

namespace backend.Features.Playlists;

public static class CheckPlaylistStatus
{
    public static IEndpointRouteBuilder MapCheckPlaylistStatus(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/playlists/check", (
            [FromBody] CheckPlaylistRequest request,
            [FromServices] IYouTubeService youtubeService) =>
        {
            if (string.IsNullOrWhiteSpace(request.PlaylistId))
            {
                return Results.BadRequest(ApiResponse<object>.Failure("Playlist ID is required."));
            }

            if (string.IsNullOrWhiteSpace(request.ApiKey))
            {
                return Results.BadRequest(ApiResponse<object>.Failure("API Key is required."));
            }

            try
            {
                // We return the IAsyncEnumerable directly. 
                // ASP.NET Core handles streaming this as a chunked JSON array.
                var stream = youtubeService.StreamPlaylistTracksAsync(request.PlaylistId, request.ApiKey);
                
                // Note: To return a wrapped stream while still streaming, 
                // we'd need a more complex setup. For now, we return the stream 
                // directly as per modern Minimal API standards for IAsyncEnumerable.
                return Results.Ok(stream);
            }
            catch (Exception ex)
            {
                return Results.Json(
                    ApiResponse<object>.Failure($"An error occurred: {ex.Message}"), 
                    statusCode: StatusCodes.Status500InternalServerError
                );
            }
        })
        .WithName("CheckPlaylistStatus")
        .WithOpenApi();

        return app;
    }
}

public record CheckPlaylistRequest(string PlaylistId, string ApiKey);

public record ApiResponse<T>(T? Data, string? Error, bool Success)
{
    public static ApiResponse<T> Successful(T data) => new(data, null, true);
    public static ApiResponse<T> Failure(string error) => new(default, error, false);
}
