import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'yt-vcheck-theme';
  private readonly platformId = inject(PLATFORM_ID);

  isDarkMode = signal<boolean>(this.loadTheme());

  constructor() {
    effect(() => {
      const dark = this.isDarkMode();
      if (!isPlatformBrowser(this.platformId)) return;

      if (dark) {
        document.documentElement.classList.remove('light-theme');
      } else {
        document.documentElement.classList.add('light-theme');
      }
      localStorage.setItem(this.THEME_KEY, dark ? 'dark' : 'light');
    });
  }

  toggleTheme() {
    this.isDarkMode.update((dark) => !dark);
  }

  private loadTheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) return true;

    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
