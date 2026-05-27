import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TrackTableComponent } from './components/track-table/track-table.component';
import { CheckerService } from './services/checker.service';

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
    TrackTableComponent,
  ],
})
export class PlaylistCheckerComponent {
  checkerService = inject(CheckerService);

  // Local signals for form inputs
  playlistId = signal('');
  apiKey = signal('');

  /**
   * Executes the playlist scan using the service
   */
  onScan(): void {
    const id = this.playlistId().trim();
    if (id) {
      this.checkerService.checkPlaylist(id, this.apiKey().trim());
    }
  }

  /**
   * Toggles the filter state in the service
   */
  onToggleFilter(checked: boolean): void {
    this.checkerService.showUnavailableOnly.set(checked);
  }
}
