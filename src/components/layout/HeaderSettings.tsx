import React, { useEffect, useRef, useState } from 'react';
import { Moon, Settings, Sun } from 'lucide-react';
import { Language, ThemePreference } from '../../types';
import { TRANSLATIONS } from '../../content/data';

interface HeaderSettingsProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  themePreference: ThemePreference;
  setThemePreference: (preference: ThemePreference) => void;
}

const optionClass = (active: boolean) =>
  `flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
    active
      ? 'border-primary bg-primary-bg/40 text-on-surface'
      : 'border-border bg-surface-lowest text-on-surface-variant hover:bg-surface-high hover:text-on-surface'
  }`;

export default function HeaderSettings({
  language,
  setLanguage,
  themePreference,
  setThemePreference,
}: HeaderSettingsProps) {
  const t = TRANSLATIONS[language];
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        id="theme-toggle-btn"
        onClick={() => setOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={t.settingsAria}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Settings className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label={t.settingsAria}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(20rem,calc(100vw-1.5rem))] rounded-2xl border border-border bg-surface-lowest p-4 shadow-lg"
        >
          <p className="text-sm font-black tracking-tight text-on-surface">{t.settingsThemeTitle}</p>
          <p className="mt-0.5 text-xs font-medium text-on-surface-variant">{t.settingsThemeDesc}</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <button
              type="button"
              className={optionClass(themePreference === 'light')}
              aria-pressed={themePreference === 'light'}
              onClick={() => setThemePreference('light')}
            >
              <Sun className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-[11px] font-bold leading-tight">{t.settingsThemeLight}</span>
            </button>
            <button
              type="button"
              className={optionClass(themePreference === 'dark')}
              aria-pressed={themePreference === 'dark'}
              onClick={() => setThemePreference('dark')}
            >
              <Moon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-[11px] font-bold leading-tight">{t.settingsThemeDark}</span>
            </button>
            <button
              type="button"
              className={optionClass(themePreference === 'system')}
              aria-pressed={themePreference === 'system'}
              onClick={() => setThemePreference('system')}
            >
              <Settings className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              <span className="text-[11px] font-bold leading-tight">{t.settingsThemeAuto}</span>
            </button>
          </div>

          <p className="mt-4 text-sm font-black tracking-tight text-on-surface">{t.settingsLangTitle}</p>
          <p className="mt-0.5 text-xs font-medium text-on-surface-variant">{t.settingsLangDesc}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              className={optionClass(language === 'es')}
              aria-pressed={language === 'es'}
              onClick={() => setLanguage('es')}
            >
              <span className="text-lg leading-none" aria-hidden="true">🇲🇽</span>
              <span className="text-[11px] font-bold leading-tight">{t.settingsLangEs}</span>
            </button>
            <button
              type="button"
              className={optionClass(language === 'en')}
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
            >
              <span className="text-lg leading-none" aria-hidden="true">🇺🇸</span>
              <span className="text-[11px] font-bold leading-tight">{t.settingsLangEn}</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
