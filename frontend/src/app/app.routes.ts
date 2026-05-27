import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/playlist-checker/playlist-checker.component').then(
        (m) => m.PlaylistCheckerComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
