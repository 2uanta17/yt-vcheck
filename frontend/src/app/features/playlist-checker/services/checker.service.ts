import { Injectable, computed, signal } from '@angular/core';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root',
})
export class CheckerService {
  private tracksSignal = signal<Track[]>([]);

  /**
   * Read-only signal of all tracks
   */
  tracks = this.tracksSignal.asReadonly();

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
   * Triggers the playlist check process
   * @param playlistId The ID of the YouTube playlist
   * @param apiKey Optional API key for restricted content
   */
  checkPlaylist(playlistId: string, apiKey?: string): void {
    console.log(`Checking playlist: ${playlistId}`);

    // Placeholder mock data
    const mockTracks: Track[] = [
      {
        videoId: 'dQw4w9WgXcQ',
        title: 'Never Gonna Give You Up',
        channelTitle: 'Rick Astley',
        thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        isUnavailable: false,
        unavailableReason: '',
      },
      {
        videoId: 'deleted-id',
        title: '[Deleted Video]',
        channelTitle: 'Unknown',
        thumbnailUrl: '',
        isUnavailable: true,
        unavailableReason:
          'This video is no longer available because the YouTube account associated with this video has been terminated.',
      },
    ];

    // Simulate API call delay
    setTimeout(() => {
      this.tracksSignal.set(mockTracks);
    }, 500);
  }
}
