import { Clipboard } from '@angular/cdk/clipboard';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Track } from '../../models/track.model';

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrl: './track-table.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    ScrollingModule,
  ],
})
export class TrackTableComponent {
  private clipboard = inject(Clipboard);

  tracks = input.required<Track[]>();
  playlistId = input<string | null>(null);
  openSearch = output<Track>();
  displayedColumns: string[] = ['thumbnail', 'details', 'status', 'actions'];

  copyVideoId(videoId: string): void {
    this.clipboard.copy(videoId);
  }

  viewInPlaylist(track: Track): void {
    const pId = this.playlistId();
    if (!pId) return;

    window.open(
      `https://www.youtube.com/watch?v=${track.videoId}&list=${pId}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  searchYouTube(track: Track): void {
    const query = encodeURIComponent(`${track.title} ${track.channelTitle}`);
    window.open(
      `https://www.youtube.com/results?search_query=${query}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  searchGoogle(track: Track): void {
    const query = encodeURIComponent(`${track.title} ${track.channelTitle}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank', 'noopener,noreferrer');
  }
}
