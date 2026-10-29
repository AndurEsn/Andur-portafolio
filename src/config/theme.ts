import { Theme, ThemePreference } from '../types';

export const THEME_STORAGE_KEY = 'andur-theme';

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function readStoredThemePreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {
    return 'system';
  }
  return 'system';
}

export function readStoredTheme(): Theme | null {
  const preference = readStoredThemePreference();
  if (preference === 'light' || preference === 'dark') return preference;
  return null;
}

export function resolveTheme(preference: ThemePreference = readStoredThemePreference()): Theme {
  if (preference === 'light' || preference === 'dark') return preference;
  return getSystemTheme();
}

export function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.backgroundColor = theme === 'dark' ? '#10131a' : '#F7F9FF';
  root.style.colorScheme = theme;
}

export function persistThemePreference(preference: ThemePreference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Ignore quota / private-mode failures; the in-session theme still applies.
  }
}

export function persistTheme(theme: Theme) {
  persistThemePreference(theme);
}
