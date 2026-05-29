/**
 * Utility function to parse a YouTube Playlist ID from various input formats.
 * Handles:
 * 1. Full browser URLs (e.g., https://www.youtube.com/playlist?list=PL...)
 * 2. Share links or video playback URLs (e.g., https://youtu.be/...&list=PL...)
 * 3. Clean raw IDs (e.g., PL...)
 *
 * @param input The raw input string from the user
 * @returns The extracted Playlist ID or null if invalid
 */
export function parsePlaylistId(input: string): string | null {
  if (!input) return null;

  const trimmed = input.trim();

  // Pattern 1: Look for 'list=' parameter in URLs
  // This handles most YouTube URLs (search, watch, playlist)
  const listParamMatch = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (listParamMatch && listParamMatch[1]) {
    return listParamMatch[1];
  }

  // Pattern 2: Raw Playlist IDs
  // YouTube Playlist IDs are typically 34 characters and start with 'PL'
  // but can also be 12-13 characters (e.g. 'UU...', 'LL...')
  // We'll allow a reasonably broad range of alphanumeric characters and symbols used by YouTube
  const rawIdPattern = /^[a-zA-Z0-9_-]{12,}$/;
  if (rawIdPattern.test(trimmed)) {
    return trimmed;
  }

  return null;
}
