using backend.Infrastructure.YouTube;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace backend.Features.Playlists;

public static class CheckPlaylistStatus
{
    public static IEndpointRouteBuilder MapCheckPlaylistStatus(this IEndpointRouteBuilder app)
    {
        app.MapPost("/api/playlists/check", async (
            HttpContext context,
            [FromBody] CheckPlaylistRequest request,
            [FromServices] IYouTubeService youtubeService,
            CancellationToken ct) =>
        {
            if (string.IsNullOrWhiteSpace(request.PlaylistId))
            {
                return Results.BadRequest(ApiResponse<object>.Failure("Playlist ID is required."));
            }

            if (string.IsNullOrWhiteSpace(request.ApiKey))
            {
                return Results.BadRequest(new { error = "API Key is required. Please provide a valid YouTube Data API v3 key." });
            }

            context.Response.ContentType = "text/event-stream";
            context.Response.Headers.CacheControl = "no-cache";
            context.Response.Headers.Connection = "keep-alive";

            try
            {
                await foreach (var track in youtubeService.StreamPlaylistTracksAsync(request.PlaylistId, request.ApiKey, ct))
                {
                    var json = JsonSerializer.Serialize(track);
                    await context.Response.WriteAsync($"data: {json}\n\n", ct);
                    await context.Response.Body.FlushAsync(ct);
                }
            }
            catch (OperationCanceledException)
            {
                // Client disconnected
            }
            catch (Exception ex)
            {
                var errorJson = JsonSerializer.Serialize(ApiResponse<object>.Failure($"An error occurred: {ex.Message}"));
                await context.Response.WriteAsync($"event: error\ndata: {errorJson}\n\n", ct);
            }

            return Results.Empty;
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
