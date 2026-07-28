import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Compass, AlertCircle, RefreshCw, FlaskConical, Layers, Star } from 'lucide-react';
import { Theme, AppState, EntranceAnimation, Language } from '../types';
import { TRANSLATIONS } from '../data';
import InfoTooltip from './InfoTooltip';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  appState: AppState;
  setAppState: (state: AppState) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onStartTour: () => void;
  isTourActive: boolean;
  onOpenDesignSystem: () => void;
  onOpenNps: () => void;
  entranceAnimation: EntranceAnimation;
  setEntranceAnimation: (animation: EntranceAnimation) => void;
  avatarSrc: string;
  onNavigateToHero: () => void;
}

export default function Header({
  theme,
  setTheme,
  appState,
  setAppState,
  language,
  setLanguage,
  onStartTour,
  isTourActive,
  onOpenDesignSystem,
  onOpenNps,
  entranceAnimation,
  setEntranceAnimation,
  avatarSrc,
  onNavigateToHero
}: HeaderProps) {
  const t = TRANSLATIONS[language];
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const labRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Scroll to hide/show header
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for the floating tab bar
  const [activeSection, setActiveSection] = useState('tour-step-hero');

  useEffect(() => {
    const sections = ['tour-step-hero', 'tour-step-metrics', 'roadmap-section', 'tour-step-projects', 'contact-section', 'faq-section'];
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 200; // offset
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollActive, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (labRef.current && !labRef.current.contains(event.target as Node)) {
        setIsLabOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const navTabs = [
    { id: 'tour-step-hero', label: language === 'es' ? 'Sobre mí' : 'About me' },
    { id: 'tour-step-metrics', label: language === 'es' ? 'Métricas' : 'Metrics' },
    { id: 'roadmap-section', label: language === 'es' ? 'Trayectoria' : 'Roadmap' },
    { id: 'tour-step-projects', label: language === 'es' ? 'Proyectos' : 'Projects' },
    { id: 'contact-section', label: language === 'es' ? 'Contacto' : 'Contact' },
    { id: 'faq-section', label: language === 'es' ? 'FAQ' : 'FAQ' },
  ];
  const animationOptions: { value: EntranceAnimation; label: string }[] = [
    { value: 'move', label: 'Move In' },
    { value: 'fade', label: 'Fade In' },
    { value: 'scale', label: 'Scale In' },
  ];
  const dropdownPanelClass = 'absolute right-0 mt-2 w-64 bg-surface-lowest border border-border rounded-2xl p-2.5 shadow-2xl z-50 flex flex-col gap-1.5 animate-[fadeIn_0.2s_ease-out]';
  const languageDropdownPanelClass = 'absolute right-0 mt-2 w-32 bg-surface-lowest border border-border rounded-2xl p-2.5 shadow-2xl z-50 flex flex-col gap-1.5 animate-[fadeIn_0.2s_ease-out]';
  const dropdownItemClass = 'w-full h-10 px-3 rounded-xl text-xs font-bold text-left text-on-surface-variant hover:bg-surface-low hover:text-on-surface transition-all flex items-center gap-2';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBrandClick = () => {
    setIsLabOpen(false);
    setIsLangOpen(false);
    onNavigateToHero();
  };

  return (
    <>
      <header className={`fixed left-0 right-0 h-16 bg-surface-lowest border-b border-border z-40 transition-all duration-300 ${appState !== 'normal' ? 'top-10' : 'top-0'} ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand & Avatar */}
        <button type="button" onClick={handleBrandClick} className="relative z-10 flex h-10 items-center gap-2 rounded-xl px-2 text-on-surface-variant transition-colors duration-200 hover:bg-surface-container hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-3 cursor-pointer" id="header-brand" aria-label="Portafolio">
          <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
            <img 
              src={avatarSrc}
              alt="Andur" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </span>
          <span className="text-xs font-black tracking-tight sm:text-sm">Portafolio</span>
        </button>

        {/* Action Blocks */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          
          {/* 1. LANGUAGE SELECTOR WITH FLAGS */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 h-10 w-10 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center cursor-pointer active:scale-95"
              title={t.langSelect}
              aria-label={t.langSelect}
              aria-expanded={isLangOpen}
            >
              <span className="text-base leading-none" aria-hidden="true">{language === 'es' ? '🇲🇽' : '🇺🇸'}</span>
            </button>

            {isLangOpen && (
              <div className={languageDropdownPanelClass}>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`${dropdownItemClass} ${
                    language === 'es' ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  <span className="text-base">🇲🇽</span>
                  <span>Español</span>
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`${dropdownItemClass} ${
                    language === 'en' ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  <span className="text-base">🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          {/* 2. LABORATORIO DROPDOWN MENU */}
          <div ref={labRef} className="relative" id="lab-menu-btn">
            <button
              onClick={() => setIsLabOpen(!isLabOpen)}
              className="h-10 px-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-1.5 active:scale-95 text-xs font-bold cursor-pointer"
              title={t.labTitle}
              aria-expanded={isLabOpen}
            >
              <FlaskConical className="h-[18px] w-[18px]" strokeWidth={1.75} />
              <span className="hidden md:inline">{t.labTitle}</span>
            </button>

            {isLabOpen && (
              <div className={dropdownPanelClass}>
                <div className="px-2.5 py-1.5 border-b border-border/60 pb-2 mb-1 shrink-0">
                  <h4 className="text-xs font-black text-primary tracking-wide">{t.labTitle}</h4>
                  <p className="text-[10px] text-muted leading-tight mt-0.5">{t.labDescription}</p>
                </div>

                {/* Simulated Loading Mode */}
                <button
                  onClick={() => {
                    setAppState(appState === 'loading' ? 'normal' : 'loading');
                    setIsLabOpen(false);
                  }}
                  className={`${dropdownItemClass} justify-between ${
                    appState === 'loading' ? 'bg-primary text-white' : ''
                  }`}
                  id="tour-lab-loading"
                >
                  <span className="flex items-center gap-2">
                    <RefreshCw className={`w-3.5 h-3.5 ${appState === 'loading' ? 'animate-spin' : ''}`} />
                    {t.labLoading}
                  </span>
                  {appState === 'loading' && <span className="text-[9px] uppercase font-black tracking-widest">ON</span>}
                </button>

                {/* Simulated Error 404 Mode */}
                <button
                  onClick={() => {
                    setAppState(appState === 'error' ? 'normal' : 'error');
                    setIsLabOpen(false);
                  }}
                  className={`${dropdownItemClass} justify-between ${
                    appState === 'error' ? 'bg-error-container text-on-error-container' : ''
                  }`}
                  id="tour-lab-error"
                >
                  <span className="flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {t.labError}
                  </span>
                  {appState === 'error' && <span className="text-[9px] uppercase font-black tracking-widest">ON</span>}
                </button>

                <div className="border-t border-border/60 px-2.5 pb-1 pt-3">
                  <div className="mb-2 flex items-center gap-1">
                    <p className="text-[10px] font-black tracking-wide text-on-surface-variant">{t.labAnimation}</p>
                    <InfoTooltip label={t.labAnimationHelpLabel}>{t.labAnimationHelp}</InfoTooltip>
                  </div>
                  <div className="grid grid-cols-3 gap-1" role="group" aria-label={t.labAnimation}>
                    {animationOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setEntranceAnimation(option.value)}
                        aria-pressed={entranceAnimation === option.value}
                        className={`h-9 rounded-lg px-1 text-[9px] font-bold transition-colors cursor-pointer ${
                          entranceAnimation === option.value
                            ? 'bg-primary text-white'
                            : 'bg-surface-low text-on-surface-variant hover:bg-surface-high hover:text-on-surface'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <span className="h-px bg-border/60 my-1 block"></span>

                {/* Design System Documentation Modal Option */}
                <button
                  onClick={() => {
                    onOpenDesignSystem();
                    setIsLabOpen(false);
                  }}
                  className={dropdownItemClass}
                >
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  <span>{t.labDesignSystem}</span>
                </button>

                {/* Manual NPS registration always starts a new blank response. */}
                <button
                  onClick={() => {
                    onOpenNps();
                    setIsLabOpen(false);
                  }}
                  className={dropdownItemClass}
                >
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span>{t.labNps}</span>
                </button>
              </div>
            )}
          </div>

          <span className="w-px h-6 bg-border hidden sm:block"></span>

          {/* 3. THEME TOGGLE BUTTON */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 h-10 w-10 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Toggle theme"
            title={theme === 'light' ? t.toastThemeDark : t.toastThemeLight}
          >
            {theme === 'light' ? (
              <Moon className="h-[18px] w-[18px] text-secondary" strokeWidth={1.75} />
            ) : (
              <Sun className="h-[18px] w-[18px] text-primary" strokeWidth={1.75} />
            )}
          </button>

          {/* 4. PRODUCT TOUR COMPACT ON MOBILE */}
          <button
            onClick={onStartTour}
            disabled={isTourActive || appState !== 'normal'}
            className={`flex items-center justify-center gap-2 h-10 rounded-xl font-bold transition-all active:scale-95 duration-150 cursor-pointer ${
              isTourActive
                ? 'bg-primary/50 text-white/80 cursor-not-allowed px-3'
                : 'bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md px-3 sm:px-4'
            }`}
          >
            <Compass className="w-4 h-4 animate-pulse" />
            <span className="hidden sm:inline text-xs sm:text-sm">{t.startTour}</span>
            <span className="inline sm:hidden text-xs">{t.tour}</span>
          </button>

        </div>
      </div>
    </header>

    {/* 5. FLOATING SECTION TABS - Visible on tablet/desktop, hidden on mobile */}
    {appState === 'normal' && <div 
      className={`fixed left-0 right-0 h-12 bg-surface-lowest/90 backdrop-blur-md border-b border-border z-30 transition-all duration-300 hidden sm:flex items-center justify-center ${
        isVisible ? 'top-16' : 'top-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-1 sm:gap-3 md:gap-5 text-xs sm:text-sm font-bold">
        {navTabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-3 py-1.5 rounded-full transition-colors text-xs sm:text-sm font-bold cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                isActive 
                  ? 'text-primary bg-primary-bg/50' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-low'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>}
    </>
  );
}
