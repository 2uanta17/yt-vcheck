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
   * Triggers the playlist check process by calling YouTube API directly (GitHub Pages / Standalone version)
   * @param playlistId The ID of the YouTube playlist
   * @param apiKey API key for YouTube Data API v3
   * @param countryCode Optional ISO country code for region checks
   */
  async checkPlaylist(
    playlistId: string,
    apiKey?: string,
    countryCode: string = 'US',
  ): Promise<void> {
    if (!playlistId) return;
    if (!apiKey) {
      this.error.set('API Key is required for standalone mode.');
      return;
    }

    this.loading.set(true);
    this.error.set(null);
    this.tracksSignal.set([]);
    this.currentPlaylistId.set(playlistId);

    if (typeof window !== 'undefined') {
      localStorage.setItem('yt_vcheck_playlist_id_last_success', playlistId);
    }
    this.saveCache([]);

    try {
      let nextPageToken: string | undefined = undefined;

      do {
        // 1. Fetch playlist items (50 at a time)
        const playlistUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
        playlistUrl.searchParams.append('part', 'snippet,contentDetails');
        playlistUrl.searchParams.append('playlistId', playlistId);
        playlistUrl.searchParams.append('maxResults', '50');
        playlistUrl.searchParams.append('key', apiKey);
        if (nextPageToken) {
          playlistUrl.searchParams.append('pageToken', nextPageToken);
        }

        const playlistRes = await fetch(playlistUrl.toString());
        if (!playlistRes.ok) {
          const err = await playlistRes.json();
          if (err.error?.code === 404) throw new Error('Playlist not found. Please check the ID.');
          if (err.error?.code === 403)
            throw new Error(
              'Access denied. The playlist might be private or the API key is invalid.',
            );
          throw new Error(err.error?.message || 'Failed to fetch playlist items');
        }

        const playlistData = await playlistRes.json();
        const items = playlistData.items || [];
        if (items.length === 0) break;

        const videoIds = items
          .map((item: any) => item.contentDetails.videoId)
          .filter((id: string) => !!id);

        // 2. Fetch video details for validation (50 at a time)
        // This replicates the backend's "Batching" logic
        const videoUrl = new URL('https://www.googleapis.com/youtube/v3/videos');
        videoUrl.searchParams.append('part', 'status,contentDetails,snippet');
        videoUrl.searchParams.append('id', videoIds.join(','));
        videoUrl.searchParams.append('key', apiKey);

        const videoRes = await fetch(videoUrl.toString());
        if (!videoRes.ok) {
          throw new Error('Failed to fetch video details for validation');
        }

        const videoData = await videoRes.json();
        const videoMap = new Map<string, any>();
        (videoData.items || []).forEach((v: any) => videoMap.set(v.id, v));

        // 3. Process and match items (Replicating exact backend availability logic)
        const batchTracks: Track[] = items.map((item: any) => {
          const videoId = item.contentDetails.videoId;
          const videoDetails = videoMap.get(videoId);

          let isUnavailable = false;
          let reason: string | null = null;

          if (!videoDetails) {
            isUnavailable = true;
            reason = 'Deleted or Private';
          } else {
            if (videoDetails.status.privacyStatus === 'private') {
              isUnavailable = true;
              reason = 'Private';
            } else if (videoDetails.status.uploadStatus === 'deleted') {
              isUnavailable = true;
              reason = 'Deleted';
            } else if (
              this.isRegionLocked(videoDetails.contentDetails.regionRestriction, countryCode)
            ) {
              isUnavailable = true;
              reason = 'Region Locked';
            }
          }

          return {
            videoId,
            title: item.snippet.title || 'Unknown Title',
            channelTitle:
              item.snippet.videoOwnerChannelTitle || item.snippet.channelTitle || 'Unknown Channel',
            thumbnailUrl:
              item.snippet.thumbnails?.maxres?.url ||
              item.snippet.thumbnails?.medium?.url ||
              item.snippet.thumbnails?.default?.url ||
              '',
            isUnavailable,
            unavailableReason: reason || '',
          };
        });

        // 4. Update state incrementally to provide "streaming-like" feedback
        this.tracksSignal.update((prev) => [...prev, ...batchTracks]);
        nextPageToken = playlistData.nextPageToken;
      } while (nextPageToken);

      this.saveCache(this.tracksSignal());
    } catch (e: any) {
      console.error('Error scanning playlist:', e);
      this.error.set(e.message || 'An unexpected error occurred while scanning.');
    } finally {
      this.loading.set(false);
    }
  }

  /**
   * Replicates backend logic for region restriction checking
   */
  private isRegionLocked(restriction: any, countryCode: string): boolean {
    if (!restriction) return false;

    // If Allowed is populated, target must be in it
    if (restriction.allowed && restriction.allowed.length > 0) {
      return !restriction.allowed.some(
        (c: string) => c.toUpperCase() === countryCode.toUpperCase(),
      );
    }

    // If Blocked is populated, target must NOT be in it
    if (restriction.blocked && restriction.blocked.length > 0) {
      return restriction.blocked.some((c: string) => c.toUpperCase() === countryCode.toUpperCase());
    }

    return false;
  }
}
