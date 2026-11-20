import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { AppState, Language, Theme } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { PAGE_NAV } from '../../config/nav';
import AndurBrand from '../ui/AndurBrand';

type BrandFit = 'lockup' | 'symbol' | 'scroll';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  appState: AppState;
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigateToHero: () => void;
}

const langChipClass = (active: boolean) =>
  `inline-flex h-8 items-center gap-1 rounded-full px-2 text-[11px] font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
    active
      ? 'bg-surface-lowest text-on-surface shadow-sm'
      : 'text-on-surface-variant hover:text-on-surface'
  }`;

export default function Header({
  theme,
  setTheme,
  appState,
  language,
  setLanguage,
  onNavigateToHero,
}: HeaderProps) {
  const t = TRANSLATIONS[language];
  const [activeSection, setActiveSection] = useState('');
  const [brandFit, setBrandFit] = useState<BrandFit>('lockup');
  const pillRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const lockupMeasureRef = useRef<HTMLSpanElement>(null);
  const symbolMeasureRef = useRef<HTMLSpanElement>(null);
  const tabsMeasureRef = useRef<HTMLDivElement>(null);

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

  const navTabs = PAGE_NAV.map((item) => ({ id: item.id, label: t[item.titleKey] }));

  useLayoutEffect(() => {
    const pill = pillRef.current;
    const actions = actionsRef.current;
    const lockup = lockupMeasureRef.current;
    const symbol = symbolMeasureRef.current;
    const tabs = tabsMeasureRef.current;
    if (!pill || !actions || !lockup || !symbol || !tabs) return undefined;

    const update = () => {
      const styles = getComputedStyle(pill);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 8;
      const pad =
        (Number.parseFloat(styles.paddingLeft) || 0) + (Number.parseFloat(styles.paddingRight) || 0);
      const available = pill.clientWidth - pad - actions.offsetWidth - gap * 2;
      const tabsWidth = tabs.scrollWidth;
      const lockupWidth = lockup.offsetWidth;
      const symbolWidth = symbol.offsetWidth;

      if (lockupWidth + tabsWidth <= available) setBrandFit('lockup');
      else if (symbolWidth + tabsWidth <= available) setBrandFit('symbol');
      else setBrandFit('scroll');
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(pill);
    observer.observe(actions);
    observer.observe(lockup);
    observer.observe(symbol);
    observer.observe(tabs);
    return () => observer.disconnect();
  }, [language, appState, navTabs.map((tab) => tab.label).join('|')]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const brandButton = (variant: 'lockup' | 'symbol') => (
    <button
      type="button"
      onClick={onNavigateToHero}
      className="flex h-10 shrink-0 items-center rounded-full px-2 text-on-surface-variant transition-colors duration-200 hover:bg-surface-container hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-3 cursor-pointer"
      id="header-brand"
      aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}
    >
      <AndurBrand theme={theme} variant={variant} decorative className="h-6 w-auto sm:h-7" />
    </button>
  );

  const tabs = navTabs.map((tab) => {
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
  });

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        ref={pillRef}
        className="pointer-events-auto relative flex h-14 w-full max-w-7xl items-center gap-1 rounded-full border border-border bg-surface-lowest/90 px-2 shadow-lg backdrop-blur-md sm:h-[3.75rem] sm:gap-2 sm:px-3"
      >
        <div
          className="pointer-events-none absolute -left-[100vw] top-0 flex items-center gap-1 whitespace-nowrap opacity-0"
          aria-hidden="true"
        >
          <span ref={lockupMeasureRef} className="inline-flex h-10 items-center px-2 sm:px-3">
            <AndurBrand theme={theme} variant="lockup" decorative className="h-6 w-auto sm:h-7" />
          </span>
          <span ref={symbolMeasureRef} className="inline-flex h-10 items-center px-2 sm:px-3">
            <AndurBrand theme={theme} variant="symbol" decorative className="h-6 w-auto sm:h-7" />
          </span>
          <div ref={tabsMeasureRef} className="inline-flex items-center gap-0.5 sm:gap-1">
            {navTabs.map((tab) => (
              <span
                key={`measure-${tab.id}`}
                className="shrink-0 rounded-full px-2.5 py-1.5 text-[11px] font-bold sm:px-3.5 sm:text-sm"
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>

        {brandFit !== 'scroll' || appState !== 'normal'
          ? brandButton(brandFit === 'lockup' ? 'lockup' : 'symbol')
          : null}

        {appState === 'normal' ? (
          <nav
            id="section-tabs"
            className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto hide-scrollbar sm:gap-1"
            aria-label={language === 'es' ? 'Secciones' : 'Sections'}
          >
            {brandFit === 'scroll' ? brandButton('symbol') : <div className="min-w-0 flex-1" />}
            {tabs}
            {brandFit === 'scroll' ? null : <div className="min-w-0 flex-1" />}
          </nav>
        ) : (
          <div className="min-w-0 flex-1" />
        )}

        <div ref={actionsRef} className="flex shrink-0 items-center gap-1">
          <div
            className="flex items-center rounded-full bg-surface-container p-0.5"
            role="group"
            aria-label={t.langAria}
          >
            <button
              type="button"
              className={langChipClass(language === 'es')}
              aria-pressed={language === 'es'}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={langChipClass(language === 'en')}
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            id="theme-toggle-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark}
          >
            {theme === 'dark' ? (
              <Sun className="h-[18px] w-[18px]" strokeWidth={1.75} />
            ) : (
              <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
