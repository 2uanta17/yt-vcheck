import { Injectable, computed, signal } from '@angular/core';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root',
})
export class CheckerService {
  private tracksSignal = signal<Track[]>([]);
  private loading = signal<boolean>(false);

  /**
   * Read-only signal of all tracks
   */
  tracks = this.tracksSignal.asReadonly();

  /**
   * Read-only signal for loading state
   */
  isLoading = this.loading.asReadonly();

  /**
   * Filter toggle to show only unavailable tracks
   */
  showUnavailableOnly = signal<boolean>(false);

  /**
   * Computed signal that returns filtered tracks based on the toggle status
   */
  filteredTracks = computed(() => {
    const tracks = this.tracksSignal();
    const filter = this.showUnavailableOnly();

    if (filter) {
      return tracks.filter((track) => track.isUnavailable);
    }

    return tracks;
  });

  constructor() {}

  /**
   * Triggers the playlist check process using a streaming approach
   * @param playlistId The ID of the YouTube playlist
   * @param apiKey Optional API key for restricted content
   */
  async checkPlaylist(playlistId: string, apiKey?: string): Promise<void> {
    if (!playlistId) return;

    this.loading.set(true);
    this.tracksSignal.set([]);

    try {
      const response = await fetch('/api/playlists/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playlistId, apiKey }),
      });

      if (!response.ok) {
        throw new Error(`Failed to check playlist: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is null');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        // SSE format chunks are separated by double newlines
        const parts = buffer.split('\n\n');
        // Keep the last part in the buffer if it's incomplete
        buffer = parts.pop() || '';

        const newTracks: Track[] = [];

        for (const part of parts) {
          const lines = part.split('\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const jsonStr = line.replace('data: ', '').trim();
                const data = JSON.parse(jsonStr);

                // If it looks like a track, add it
                if (data.videoId || data.VideoId) {
                  const track: Track = {
                    videoId: data.videoId || data.VideoId,
                    title: data.title || data.Title,
                    channelTitle: data.channelTitle || data.ChannelTitle,
                    thumbnailUrl: data.thumbnailUrl || data.ThumbnailUrl,
                    isUnavailable: data.isUnavailable ?? data.IsUnavailable,
                    unavailableReason: data.unavailableReason || data.UnavailableReason || '',
                  };
                  newTracks.push(track);
                }
              } catch (e) {
                console.error('Error parsing track data', e, line);
              }
            }
          }
        }

        if (newTracks.length > 0) {
          this.tracksSignal.update((tracks) => [...tracks, ...newTracks]);
        }
      }
    } catch (error) {
      console.error('Streaming error:', error);
    } finally {
      this.loading.set(false);
    }
  }
}
