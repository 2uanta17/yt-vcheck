import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TrackTableComponent } from './components/track-table/track-table.component';
import { COMMON_COUNTRIES } from './models/country.model';
import { Track } from './models/track.model';
import { CheckerService } from './services/checker.service';
import { parsePlaylistId } from './utils/playlist-id-parser';

const STORAGE_KEYS = {
  PLAYLIST_ID: 'yt_vcheck_playlist_id',
  API_KEY: 'yt_vcheck_api_key',
  COUNTRY_CODE: 'yt_vcheck_country_code',
  CUSTOM_COUNTRY_CODE: 'yt_vcheck_custom_country_code',
  OAUTH_CLIENT_ID: 'yt_vcheck_oauth_client_id',
  SETTINGS_COLLAPSED: 'yt_vcheck_settings_collapsed',
};

@Component({
  selector: 'app-playlist-checker',
  templateUrl: './playlist-checker.component.html',
  styleUrl: './playlist-checker.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatDividerModule,
    TrackTableComponent,
  ],
})
export class PlaylistCheckerComponent {
  checkerService = inject(CheckerService);

  // Constants
  countries = COMMON_COUNTRIES;

  // Local signals for form inputs
  playlistId = signal(this.getInitialValue(STORAGE_KEYS.PLAYLIST_ID));
  apiKey = signal(this.getInitialValue(STORAGE_KEYS.API_KEY));
  oauthClientId = signal(this.getInitialValue(STORAGE_KEYS.OAUTH_CLIENT_ID));
  selectedCountry = signal(this.getInitialValue(STORAGE_KEYS.COUNTRY_CODE) || 'US');
  customCountryCode = signal(this.getInitialValue(STORAGE_KEYS.CUSTOM_COUNTRY_CODE));
  idError = signal<string | null>(null);

  // OAuth states
  oauthToken = signal<string | null>(null);

  // UI States
  isSettingsCollapsed = signal<boolean>(this.getInitialCollapsedState());
  isDeleting = signal<boolean>(false);
  deletionProgress = signal<{ current: number; total: number } | null>(null);

  // Search and replace states
  activeSearchTrack = signal<Track | null>(null);
  replacementSearchQuery = signal<string>('');
  isSearchingReplacements = signal<boolean>(false);
  searchResults = signal<any[]>([]);
  isSwapping = signal<boolean>(false);

  // Search logic
  countrySearch = signal('');
  filteredCountries = computed(() => {
    const term = this.countrySearch().toLowerCase().trim();
    return this.countries.filter(
      (c) => c.name.toLowerCase().includes(term) || c.code.toLowerCase().includes(term),
    );
  });

  /**
   * Final resolved country code logic:
   * 1. If 'CUSTOM' is selected, use customCountryCode if valid (2 letters), else fallback to US.
   * 2. Else use selectedCountry.
   */
  activeCountryCode = computed(() => {
    const selected = this.selectedCountry();
    if (selected === 'CUSTOM') {
      const custom = this.customCountryCode().trim().toUpperCase();
      // Valid ISO code is usually 2 letters
      if (/^[A-Z]{2}$/.test(custom)) {
        return custom;
      }
      return 'US'; // Defensive fallback
    }
    return selected;
  });

  constructor() {
    // Automatically save to localStorage when signals change
    effect(() => {
      const pId = this.playlistId();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.PLAYLIST_ID, pId);
      }
    });
    effect(() => {
      const key = this.apiKey();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.API_KEY, key);
      }
    });
    effect(() => {
      const client = this.oauthClientId();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.OAUTH_CLIENT_ID, client);
      }
    });
    effect(() => {
      const code = this.selectedCountry();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.COUNTRY_CODE, code);
      }
    });
    effect(() => {
      const custom = this.customCountryCode();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.CUSTOM_COUNTRY_CODE, custom);
      }
    });
    effect(() => {
      const collapsed = this.isSettingsCollapsed();
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.SETTINGS_COLLAPSED, String(collapsed));
      }
    });

    // Listen to messages from the OAuth popup
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (event) => {
        if (event.origin !== window.location.origin) return;
        if (event.data && event.data.type === 'oauth_token') {
          this.oauthToken.set(event.data.token);
        }
      });

      // Handle OAuth response if this page loaded inside the popup
      const hash = window.location.hash;
      if (hash && hash.includes('access_token=')) {
        const urlParams = new URLSearchParams(hash.substring(1));
        const token = urlParams.get('access_token');
        if (token && window.opener) {
          window.opener.postMessage({ type: 'oauth_token', token }, window.location.origin);
          window.close();
        }
      }
    }
  }

  private getInitialValue(key: string): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) || '';
    }
    return '';
  }

  private getInitialCollapsedState(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.SETTINGS_COLLAPSED) === 'true';
    }
    return false;
  }

  /**
   * Executes the playlist scan using the service
   */
  onScan(): void {
    const rawValue = this.playlistId().trim();
    if (!rawValue) return;

    const parsedId = parsePlaylistId(rawValue);

    if (parsedId) {
      this.idError.set(null);
      this.checkerService.checkPlaylist(parsedId, this.apiKey().trim(), this.activeCountryCode());
      // Auto collapse settings on scan to focus on results
      this.isSettingsCollapsed.set(true);
    } else {
      this.idError.set('Invalid Playlist ID or URL');
    }
  }

  /**
   * Triggers the Google OAuth 2.0 implicit authentication flow
   */
  onAuthorize(): void {
    const clientId = this.oauthClientId().trim();
    if (!clientId) {
      alert('Please enter a valid Google OAuth Client ID first.');
      return;
    }

    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: window.location.origin + window.location.pathname,
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/youtube',
      include_granted_scopes: 'true',
      state: 'oauth2_callback',
    });

    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      `${authUrl}?${params.toString()}`,
      'oauth2_popup',
      `width=${width},height=${height},left=${left},top=${top},status=no,resizable=yes,scrollbars=yes`
    );
  }

  /**
   * Loops through and deletes all duplicate tracks in the playlist
   */
  async onRemoveDuplicates(): Promise<void> {
    const token = this.oauthToken();
    if (!token) {
      alert('Please click "Authorize" to sign in first.');
      return;
    }

    const duplicates = this.checkerService.processedTracks().filter((t) => t.isSafeToRemove);
    if (duplicates.length === 0) {
      alert('No duplicate tracks to remove.');
      return;
    }

    const confirmMsg = `Are you sure you want to delete ${duplicates.length} duplicate tracks from this playlist? This will consume approximately ${duplicates.length * 50} units of your YouTube API quota.`;
    if (!confirm(confirmMsg)) return;

    this.isDeleting.set(true);
    this.deletionProgress.set({ current: 0, total: duplicates.length });

    let count = 0;
    try {
      for (const track of duplicates) {
        if (!track.playlistItemId) continue;

        // Mark track as deleting in local state
        this.checkerService.updateTrackStatus(track.playlistItemId, {
          isDeleting: true,
          statusDetails: 'Deleting...',
        });

        try {
          await this.checkerService.deletePlaylistItem(track.playlistItemId, token);
          
          // Mark track as deleted successfully
          this.checkerService.updateTrackStatus(track.playlistItemId, {
            isDeleting: false,
            isDeleted: true,
            isSafeToRemove: false,
            statusDetails: 'Deleted',
          });

          // Wait 150ms to prevent flooding API
          await new Promise((resolve) => setTimeout(resolve, 150));
        } catch (err: any) {
          if (err.message === 'QUOTA_EXCEEDED') {
            alert('YouTube API Quota exceeded. Deletion process paused. You can resume tomorrow!');
            break;
          } else {
            console.error(`Failed to delete track ${track.playlistItemId}:`, err);
            this.checkerService.updateTrackStatus(track.playlistItemId, {
              isDeleting: false,
              statusDetails: 'Delete Failed',
            });
          }
        }

        count++;
        this.deletionProgress.set({ current: count, total: duplicates.length });
      }
    } finally {
      this.isDeleting.set(false);
      this.deletionProgress.set(null);
    }
  }

  /**
   * Toggles the filter state in the service
   */
  onToggleFilter(checked: boolean): void {
    this.checkerService.showUnavailableOnly.set(checked);
    if (checked) {
      this.checkerService.showDuplicatesOnly.set(false);
    }
  }

  /**
   * Toggles the duplicate filter state in the service
   */
  onToggleDuplicates(checked: boolean): void {
    this.checkerService.showDuplicatesOnly.set(checked);
    if (checked) {
      this.checkerService.showUnavailableOnly.set(false);
    }
  }

  /**
   * Opens the search dialog overlay for finding replacements
   */
  onOpenSearch(track: Track): void {
    this.activeSearchTrack.set(track);
    this.replacementSearchQuery.set(`${track.title} ${track.channelTitle}`);
    this.searchResults.set([]);
    this.executeReplacementSearch();
  }

  /**
   * Closes the search dialog overlay
   */
  onCloseSearch(): void {
    this.activeSearchTrack.set(null);
    this.replacementSearchQuery.set('');
    this.searchResults.set([]);
    this.isSearchingReplacements.set(false);
  }

  /**
   * Executes a YouTube search for replacement videos
   */
  async executeReplacementSearch(): Promise<void> {
    const query = this.replacementSearchQuery().trim();
    if (!query) return;

    this.isSearchingReplacements.set(true);
    try {
      const results = await this.checkerService.searchReplacements(
        query,
        this.apiKey().trim(),
        this.oauthToken() || undefined,
        this.activeCountryCode()
      );
      this.searchResults.set(results);
    } catch (err: any) {
      console.error('Failed to search replacements:', err);
      alert(err.message || 'An error occurred while searching.');
    } finally {
      this.isSearchingReplacements.set(false);
    }
  }

  /**
   * Swaps the old unavailable track with the new selected video
   */
  async onSwap(newVideo: any): Promise<void> {
    const token = this.oauthToken();
    if (!token) {
      alert('Please authorize YouTube write access first.');
      return;
    }

    const oldTrack = this.activeSearchTrack();
    if (!oldTrack) return;

    const playlistId = this.checkerService.currentPlaylistId();
    if (!playlistId) return;

    const position = oldTrack.position ?? 0;
    const oldPlaylistItemId = oldTrack.playlistItemId;
    if (!oldPlaylistItemId) return;

    const confirmMsg = `Are you sure you want to replace this video?\n\nThis will insert "${newVideo.title}" at index ${position + 1} and delete the old video.\nThis operation will consume 100 quota units.`;
    if (!confirm(confirmMsg)) return;

    this.isSwapping.set(true);
    try {
      console.log(`[Swap] Starting swap: replacing old track ID ${oldPlaylistItemId} at position ${position} with new video ${newVideo.videoId}`);

      // 1. Insert the new video at the exact position
      const newPlaylistItemId = await this.checkerService.insertPlaylistItem(
        playlistId,
        newVideo.videoId,
        position,
        token
      );
      console.log(`[Swap] Successfully inserted new video. New playlistItemId: ${newPlaylistItemId}`);

      // Wait 1000ms to allow YouTube backend to process the insertion and settle index positions
      console.log(`[Swap] Waiting 1000ms before deletion to prevent API race conditions...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 2. Delete the old playlistItem
      console.log(`[Swap] Attempting to delete old playlistItem: ${oldPlaylistItemId}`);
      await this.checkerService.deletePlaylistItem(oldPlaylistItemId, token);
      console.log(`[Swap] Successfully deleted old playlistItem.`);

      // 3. Construct the new track and replace it locally
      const newTrack: Track = {
        playlistItemId: newPlaylistItemId,
        videoId: newVideo.videoId,
        title: newVideo.title,
        channelTitle: newVideo.channelTitle,
        thumbnailUrl: newVideo.thumbnailUrl,
        isUnavailable: false,
        unavailableReason: '',
        position: position,
      };

      this.checkerService.replaceTrackInLocalList(oldPlaylistItemId, newTrack);
      this.onCloseSearch();
    } catch (err: any) {
      console.error('[Swap] Swap operation failed:', err);
      alert(err.message || 'Swap operation failed.');
    } finally {
      this.isSwapping.set(false);
    }
  }
}
