using backend.Features.Playlists;
using backend.Infrastructure.YouTube;

var builder = WebApplication.CreateBuilder(args);

// Core Services
builder.Services.AddOpenApi();
builder.Services.AddScoped<IYouTubeService, YouTubeService>();

// Security
builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendClient", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("FrontendClient");

// Endpoints
app.MapCheckPlaylistStatus();

app.Run();

