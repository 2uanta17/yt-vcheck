import { Clipboard } from '@angular/cdk/clipboard';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
    MatMenuModule,
    ScrollingModule,
  ],
})
export class TrackTableComponent {
  private clipboard = inject(Clipboard);

  tracks = input.required<Track[]>();
  displayedColumns: string[] = ['thumbnail', 'details', 'status', 'actions'];

  copyVideoId(videoId: string): void {
    this.clipboard.copy(videoId);
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
