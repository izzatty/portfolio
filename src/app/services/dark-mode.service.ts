import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') ?? '"null"')
  );

  updateDarkMode() {
    const newMode = this.darkModeSignal() === 'dark' ? 'null' : 'dark';
    this.darkModeSignal.set(newMode);
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
      // Update the body class globally to reflect the mode change.
      if (this.darkModeSignal() === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }
}