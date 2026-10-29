import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme, AppState, Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { PAGE_NAV } from '../../config/nav';
import AndurBrand from '../ui/AndurBrand';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  appState: AppState;
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigateToHero: () => void;
}

export default function Header({
  theme,
  setTheme,
  appState,
  language,
  setLanguage,
  onNavigateToHero
}: HeaderProps) {
  const t = TRANSLATIONS[language];
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = PAGE_NAV.map((item) => item.id);
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 200;
      let next = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            next = section;
            break;
          }
        }
      }
      setActiveSection(next);
    };
    window.addEventListener('scroll', handleScrollActive, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navTabs = PAGE_NAV.map((item) => ({ id: item.id, label: t[item.titleKey] }));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="pointer-events-auto flex h-14 w-full max-w-7xl items-center gap-1 rounded-full border border-border bg-surface-lowest/90 px-2 shadow-lg backdrop-blur-md sm:h-[3.75rem] sm:gap-2 sm:px-3">
        <button
          type="button"
          onClick={onNavigateToHero}
          className="flex h-10 shrink-0 items-center rounded-full px-2 text-on-surface-variant transition-colors duration-200 hover:bg-surface-container hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-3 cursor-pointer"
          id="header-brand"
          aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
        >
          <AndurBrand theme={theme} decorative className="h-6 w-auto sm:h-7" />
        </button>

        {appState === 'normal' ? (
          <nav
            id="section-tabs"
            className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto hide-scrollbar sm:gap-1"
            aria-label={language === 'es' ? 'Secciones' : 'Sections'}
          >
            {navTabs.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => scrollToSection(tab.id)}
                  className={`shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:px-3.5 sm:text-sm ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-on-surface-variant hover:bg-surface-low hover:text-on-surface'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        ) : (
          <div className="min-w-0 flex-1" />
        )}

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface cursor-pointer active:scale-95"
            title={t.langSelect}
            aria-label={t.langSelect}
          >
            <span className="text-base leading-none" aria-hidden="true">{language === 'es' ? '🇲🇽' : '🇺🇸'}</span>
          </button>

          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface cursor-pointer active:scale-95"
            aria-label="Toggle theme"
            title={theme === 'light' ? t.toastThemeDark : t.toastThemeLight}
          >
            {theme === 'light' ? (
              <Moon className="h-[18px] w-[18px] text-secondary" strokeWidth={1.75} />
            ) : (
              <Sun className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
