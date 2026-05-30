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
import { CheckerService } from './services/checker.service';
import { parsePlaylistId } from './utils/playlist-id-parser';

const STORAGE_KEYS = {
  PLAYLIST_ID: 'yt_vcheck_playlist_id',
  API_KEY: 'yt_vcheck_api_key',
  COUNTRY_CODE: 'yt_vcheck_country_code',
  CUSTOM_COUNTRY_CODE: 'yt_vcheck_custom_country_code',
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
  selectedCountry = signal(this.getInitialValue(STORAGE_KEYS.COUNTRY_CODE) || 'US');
  customCountryCode = signal(this.getInitialValue(STORAGE_KEYS.CUSTOM_COUNTRY_CODE));
  idError = signal<string | null>(null);

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
      this.checkerService.checkPlaylist(parsedId, this.apiKey().trim(), this.activeCountryCode());
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
