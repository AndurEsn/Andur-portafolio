import { Theme } from '../types';

export const THEME_STORAGE_KEY = 'andur-theme';

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    return null;
  }
  return null;
}

export function resolveTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme();
}

export function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.backgroundColor = theme === 'dark' ? '#10131a' : '#F7F9FF';
  root.style.colorScheme = theme;
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore quota / private-mode failures; the in-session theme still applies.
  }
}
