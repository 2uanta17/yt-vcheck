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

  // Quota properties
  quotaUsed = signal<number>(this.getQuotaUsed());
  quotaLimit = 10000;
  quotaPercentage = computed(() =>
    Math.min(Math.round((this.quotaUsed() / this.quotaLimit) * 100), 100),
  );

  /**
   * Computed signal that applies duplicate detection logic to the tracks
   */
  processedTracks = computed(() => {
    const rawTracks = this.tracksSignal();
    
    // Gather all healthy tracks' identifiers
    const healthyKeys = new Set<string>();
    const healthyVideoIds = new Set<string>();
    rawTracks.forEach((t) => {
      if (!t.isUnavailable && !t.isDeleted) {
        healthyKeys.add(`${t.title.toLowerCase()}|${t.channelTitle.toLowerCase()}`);
        healthyVideoIds.add(t.videoId);
      }
    });

    const seenHealthyKeys = new Set<string>();
    const seenHealthyVideoIds = new Set<string>();

    return rawTracks.map((track) => {
      if (track.isDeleted) {
        return track;
      }

      const trackKey = `${track.title.toLowerCase()}|${track.channelTitle.toLowerCase()}`;
      
      if (track.isUnavailable) {
        // Unavailable duplicates are safe to remove if a healthy version exists
        if (healthyKeys.has(trackKey) || healthyVideoIds.has(track.videoId)) {
          return {
            ...track,
            isSafeToRemove: true,
            statusDetails: 'Duplicate - Safe to Remove',
          };
        }
      } else {
        // Healthy duplicates are safe to remove if we have already seen an identical one earlier
        const isDuplicate = seenHealthyKeys.has(trackKey) || seenHealthyVideoIds.has(track.videoId);
        if (isDuplicate) {
          return {
            ...track,
            isSafeToRemove: true,
            statusDetails: 'Duplicate - Safe to Remove',
          };
        }
        seenHealthyKeys.add(trackKey);
        seenHealthyVideoIds.add(track.videoId);
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

          // Estimate quota for scanning (each page of 50 items costs 2 units: 1 list + 1 details query)
          const totalScanned = this.tracksSignal().length;
          const pagesCount = Math.max(1, Math.ceil(totalScanned / 50));
          this.incrementQuota(pagesCount * 2);

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
                    playlistItemId: data.playlistItemId || data.PlaylistItemId,
                    position: data.position ?? data.Position,
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

  /**
   * Deletes a single item from the playlist via YouTube Data API v3
   * Requires a valid OAuth 2.0 Access Token
   */
  async deletePlaylistItem(playlistItemId: string, accessToken: string): Promise<void> {
    const deleteUrl = `https://www.googleapis.com/youtube/v3/playlistItems?id=${encodeURIComponent(playlistItemId)}`;
    const res = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    this.incrementQuota(50); // Deleting a playlistItem costs 50 units

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      if (err.error?.code === 403 && err.error?.message?.includes('quota')) {
        throw new Error('QUOTA_EXCEEDED');
      }
      throw new Error(err.error?.message || 'Failed to delete playlist item.');
    }
  }

  /**
   * Updates track state locally during bulk deletion flow
   */
  updateTrackStatus(playlistItemId: string, updates: Partial<Track>): void {
    this.tracksSignal.update((prev) =>
      prev.map((t) => (t.playlistItemId === playlistItemId ? { ...t, ...updates } : t)),
    );
  }

  /**
   * Removes a track from the local list permanently (after deletion)
   */
  removeTrackFromLocalList(playlistItemId: string): void {
    this.tracksSignal.update((prev) => prev.filter((t) => t.playlistItemId !== playlistItemId));
    this.saveCache(this.tracksSignal());
  }

  /**
   * Searches YouTube for matching videos (costs 100 quota units)
   */
  async searchReplacements(
    query: string,
    apiKey: string,
    accessToken?: string,
    regionCode?: string,
  ): Promise<any[]> {
    const searchUrl = new URL('https://www.googleapis.com/youtube/v3/search');
    searchUrl.searchParams.append('part', 'snippet');
    searchUrl.searchParams.append('type', 'video');
    searchUrl.searchParams.append('maxResults', '5');
    searchUrl.searchParams.append('q', query);

    if (regionCode) {
      searchUrl.searchParams.append('regionCode', regionCode);
      const langMap: Record<string, string> = {
        JP: 'ja',
        KR: 'ko',
        TW: 'zh-Hant',
        CN: 'zh-Hans',
        FR: 'fr',
        DE: 'de',
        ES: 'es',
        IT: 'it',
        BR: 'pt',
        RU: 'ru',
      };
      const lang = langMap[regionCode.toUpperCase()];
      if (lang) {
        searchUrl.searchParams.append('relevanceLanguage', lang);
      }
    }

    const headers: HeadersInit = {};
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      searchUrl.searchParams.append('key', apiKey);
    }

    const res = await fetch(searchUrl.toString(), { headers });
    this.incrementQuota(100); // search.list costs 100 units

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      if (err.error?.code === 403 && err.error?.message?.includes('quota')) {
        throw new Error('QUOTA_EXCEEDED');
      }
      throw new Error(err.error?.message || 'Failed to search YouTube.');
    }

    const data = await res.json();
    return (data.items || []).map((item: any) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnailUrl: item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || '',
      publishedAt: item.snippet.publishedAt,
    }));
  }

  /**
   * Inserts a video into the playlist at a specific position (costs 50 quota units)
   * Requires OAuth 2.0 Access Token
   */
  async insertPlaylistItem(
    playlistId: string,
    videoId: string,
    position: number,
    accessToken: string,
  ): Promise<string> {
    const insertUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet';
    const body = {
      snippet: {
        playlistId,
        position,
        resourceId: {
          kind: 'youtube#video',
          videoId,
        },
      },
    };

    const res = await fetch(insertUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    this.incrementQuota(50); // playlistItems.insert costs 50 units

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      if (err.error?.code === 403 && err.error?.message?.includes('quota')) {
        throw new Error('QUOTA_EXCEEDED');
      }
      throw new Error(err.error?.message || 'Failed to insert playlist item.');
    }

    const data = await res.json();
    return data.id; // Returns the new playlistItemId
  }

  /**
   * Replaces a track in the local state with a new healthy track
   */
  replaceTrackInLocalList(oldPlaylistItemId: string, newTrack: Track): void {
    this.tracksSignal.update((prev) =>
      prev.map((t) => (t.playlistItemId === oldPlaylistItemId ? newTrack : t)),
    );
    this.saveCache(this.tracksSignal());
  }

  private getQuotaTodayKey(): string {
    const pstDate = new Date().toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
    return `yt_vcheck_quota_${pstDate}`;
  }

  private getQuotaUsed(): number {
    if (typeof window === 'undefined') return 0;
    return parseInt(localStorage.getItem(this.getQuotaTodayKey()) || '0', 10);
  }

  incrementQuota(amount: number): void {
    if (typeof window === 'undefined') return;
    const current = this.getQuotaUsed();
    const nextVal = current + amount;
    localStorage.setItem(this.getQuotaTodayKey(), String(nextVal));
    this.quotaUsed.set(nextVal);
  }
}
