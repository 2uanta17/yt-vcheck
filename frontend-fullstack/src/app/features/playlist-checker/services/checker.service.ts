import { Injectable, computed, effect, signal } from '@angular/core';
import { Track } from '../models/track.model';

const CACHE_KEY = 'yt_vcheck_last_results';
const TOGGLE_KEY = 'yt_vcheck_toggle_state';
const DUPE_TOGGLE_KEY = 'yt_vcheck_dupe_toggle_state';

@Injectable({
  providedIn: 'root',
})
export class CheckerService {
  private tracksSignal = signal<Track[]>(this.loadCache());
  private loading = signal<boolean>(false);
  private error = signal<string | null>(null);
  currentPlaylistId = signal<string | null>(this.getInitialPlaylistId());

  /**
   * Computed signal that applies duplicate detection logic to the tracks
   */
  processedTracks = computed(() => {
    const rawTracks = this.tracksSignal();
    const healthyTracks = new Set(
      rawTracks
        .filter((t) => !t.isUnavailable)
        .map((t) => `${t.title.toLowerCase()}|${t.channelTitle.toLowerCase()}`),
    );

    return rawTracks.map((track) => {
      const trackKey = `${track.title.toLowerCase()}|${track.channelTitle.toLowerCase()}`;
      if (track.isUnavailable && healthyTracks.has(trackKey)) {
        return {
          ...track,
          isSafeToRemove: true,
          statusDetails: 'Duplicate - Safe to Remove',
        };
      }
      return track;
    });
  });

  /**
   * Read-only signal of all tracks (with duplicate info)
   */
  tracks = computed(() => this.processedTracks());

  /**
   * Read-only signal for loading state
   */
  isLoading = this.loading.asReadonly();

  /**
   * Read-only signal for error messages
   */
  errorMessage = this.error.asReadonly();

  /**
   * Filter toggle to show only unavailable tracks
   */
  showUnavailableOnly = signal<boolean>(this.getInitialToggle());

  /**
   * Filter toggle to show only duplicate tracks
   */
  showDuplicatesOnly = signal<boolean>(this.getInitialDupeToggle());

  /**
   * Search term for filtering the grid
   */
  searchTerm = signal<string>('');

  private getInitialToggle(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(TOGGLE_KEY) === 'true';
    }
    return false;
  }

  private getInitialDupeToggle(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(DUPE_TOGGLE_KEY) === 'true';
    }
    return false;
  }

  private getInitialPlaylistId(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('yt_vcheck_playlist_id_last_success') || null;
    }
    return null;
  }

  /**
   * Total number of tracks processed so far
   */
  totalTracks = computed(() => this.tracksSignal().length);

  /**
   * Total number of unavailable tracks found
   */
  unavailableTracksCount = computed(
    () => this.tracksSignal().filter((track) => track.isUnavailable).length,
  );

  /**
   * Total number of duplicate tracks found
   */
  duplicateTracksCount = computed(
    () => this.processedTracks().filter((track) => track.isSafeToRemove).length,
  );

  /**
   * Computed signal that returns filtered tracks based on the toggle status and search term
   */
  filteredTracks = computed(() => {
    const tracks = this.processedTracks();
    const showUnavailable = this.showUnavailableOnly();
    const showDuplicates = this.showDuplicatesOnly();
    const searchTerm = this.searchTerm().toLowerCase();

    let filtered = tracks;

    if (showDuplicates) {
      filtered = filtered.filter((track) => track.isSafeToRemove);
    } else if (showUnavailable) {
      filtered = filtered.filter((track) => track.isUnavailable);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (track) =>
          track.title.toLowerCase().includes(searchTerm) ||
          track.channelTitle.toLowerCase().includes(searchTerm),
      );
    }

    return filtered;
  });

  private loadCache(): Track[] {
    if (typeof window === 'undefined') return [];
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  }

  private saveCache(tracks: Track[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(tracks));
    } catch (e) {
      console.error('Failed to save to cache', e);
    }
  }

  constructor() {
    effect(() => {
      const val = this.showUnavailableOnly();
      if (typeof window !== 'undefined') {
        localStorage.setItem(TOGGLE_KEY, String(val));
      }
    });

    effect(() => {
      const val = this.showDuplicatesOnly();
      if (typeof window !== 'undefined') {
        localStorage.setItem(DUPE_TOGGLE_KEY, String(val));
      }
    });
  }

  /**
   * Triggers the playlist check process using a streaming approach
   * @param playlistId The ID of the YouTube playlist
   * @param apiKey Optional API key for restricted content
   * @param countryCode Optional ISO country code for region checks
   */
  async checkPlaylist(
    playlistId: string,
    apiKey?: string,
    countryCode: string = 'US',
  ): Promise<void> {
    if (!playlistId) return;

    this.loading.set(true);
    this.error.set(null);
    this.tracksSignal.set([]);
    this.currentPlaylistId.set(playlistId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('yt_vcheck_playlist_id_last_success', playlistId);
    }
    this.saveCache([]); // Clear cache on new scan

    try {
      const response = await fetch('/api/playlists/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playlistId, apiKey, countryCode }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to check playlist: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is null');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          // Final save on completion
          this.saveCache(this.tracksSignal());
          break;
        }

        buffer += decoder.decode(value, { stream: true });

        // SSE format chunks are separated by double newlines
        const parts = buffer.split('\n\n');
        // Keep the last part in the buffer if it's incomplete
        buffer = parts.pop() || '';

        const newTracks: Track[] = [];

        for (const part of parts) {
          const lines = part.split('\n');
          let currentEvent = 'message';

          for (const line of lines) {
            if (line.startsWith('event: ')) {
              currentEvent = line.replace('event: ', '').trim();
            } else if (line.startsWith('data: ')) {
              try {
                const jsonStr = line.replace('data: ', '').trim();
                const data = JSON.parse(jsonStr);

                if (currentEvent === 'error') {
                  this.error.set(data.Error || data.error || 'An unknown error occurred');
                  continue;
                }

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
    } catch (error: any) {
      console.error('Streaming error:', error);
      this.error.set(error.message || 'An error occurred while scanning the playlist.');
    } finally {
      this.loading.set(false);
    }
  }
}
