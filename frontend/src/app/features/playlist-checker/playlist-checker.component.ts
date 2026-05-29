import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TrackTableComponent } from './components/track-table/track-table.component';
import { CheckerService } from './services/checker.service';
import { parsePlaylistId } from './utils/playlist-id-parser';

const STORAGE_KEYS = {
  PLAYLIST_ID: 'yt_vcheck_playlist_id',
  API_KEY: 'yt_vcheck_api_key',
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
    TrackTableComponent,
  ],
})
export class PlaylistCheckerComponent {
  checkerService = inject(CheckerService);

  // Local signals for form inputs
  playlistId = signal(this.getInitialValue(STORAGE_KEYS.PLAYLIST_ID));
  apiKey = signal(this.getInitialValue(STORAGE_KEYS.API_KEY));
  idError = signal<string | null>(null);

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
  }

  private getInitialValue(key: string): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key) || '';
    }
    return '';
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
      this.checkerService.checkPlaylist(parsedId, this.apiKey().trim());
    } else {
      this.idError.set('Invalid Playlist ID or URL');
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
}
