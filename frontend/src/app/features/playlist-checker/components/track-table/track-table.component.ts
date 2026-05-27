import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
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
  imports: [CommonModule, MatTableModule, MatChipsModule, MatButtonModule, MatIconModule],
})
export class TrackTableComponent {
  tracks = input.required<Track[]>();
  displayedColumns: string[] = ['thumbnail', 'details', 'status', 'actions'];
}
