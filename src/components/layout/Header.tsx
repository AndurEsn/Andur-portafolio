import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, FlaskConical, Layers, Tag } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Theme, AppState, EntranceAnimation, Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { APP_VERSION } from '../../config/version';
import { CV_HREF } from '../../config/cv';
import InfoTooltip from '../ui/InfoTooltip';
import andurMark from '../../assets/images/andur-mark.png';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  appState: AppState;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenDesignSystem: () => void;
  entranceAnimation: EntranceAnimation;
  setEntranceAnimation: (animation: EntranceAnimation) => void;
  onNavigateToHero: () => void;
}

function LabAnimationPreview({ type, active }: { type: EntranceAnimation; active: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const shapeClass = `block h-8 w-8 rounded-lg ${active ? 'bg-white/90' : 'bg-primary'}`;

  if (shouldReduceMotion) {
    return <span className={shapeClass} aria-hidden="true" />;
  }

  const animate =
    type === 'move'
      ? { y: [8, 0, 0, 8], opacity: [0.25, 1, 1, 0.25] }
      : type === 'fade'
        ? { opacity: [0.15, 1, 1, 0.15] }
        : { scale: [0.55, 1, 1, 0.55], opacity: [0.35, 1, 1, 0.35] };

  return (
    <motion.span
      className={shapeClass}
      aria-hidden="true"
      animate={animate}
      transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut', times: [0, 0.35, 0.7, 1] }}
    />
  );
}

export default function Header({
  theme,
  setTheme,
  appState,
  language,
  setLanguage,
  onOpenDesignSystem,
  entranceAnimation,
  setEntranceAnimation,
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
        setIsVisible(false);
        setIsLabOpen(false);
        setIsLangOpen(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for the floating tab bar
  const [activeSection, setActiveSection] = useState('tour-step-hero');

  useEffect(() => {
    const sections = ['tour-step-hero', 'tour-step-projects', 'contact-section', 'faq-section'];
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 200; // offset
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
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

  useEffect(() => {
    function handlePointerOutside(event: PointerEvent) {
      const target = event.target as Node;
      if (labRef.current && !labRef.current.contains(target)) {
        setIsLabOpen(false);
      }
      if (langRef.current && !langRef.current.contains(target)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('pointerdown', handlePointerOutside);
    return () => document.removeEventListener('pointerdown', handlePointerOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const navTabs = [
    { id: 'tour-step-hero', label: t.navAbout },
    { id: 'tour-step-projects', label: t.navProjects },
    { id: 'contact-section', label: t.navContact },
    { id: 'faq-section', label: t.navFaq },
  ];
  const animationOptions: { value: EntranceAnimation; label: string }[] = [
    { value: 'move', label: 'Move In' },
    { value: 'fade', label: 'Fade In' },
    { value: 'scale', label: 'Scale In' },
  ];
  const dropdownPanelClass = 'fixed left-3 right-3 top-[calc(var(--header-row)+0.5rem)] z-50 flex max-h-[min(70dvh,calc(100dvh-5.5rem))] w-auto flex-col gap-2 overflow-y-auto rounded-2xl border border-border bg-surface-lowest p-3 shadow-2xl animate-[fadeIn_0.2s_ease-out] sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-2 sm:max-h-[min(70dvh,calc(100dvh-5.5rem))] sm:w-[min(22rem,calc(100vw-1.5rem))]';
  const languageDropdownPanelClass = 'absolute right-0 mt-2 w-32 max-w-[calc(100vw-1.5rem)] bg-surface-lowest border border-border rounded-2xl p-2.5 shadow-2xl z-50 flex flex-col gap-1.5 animate-[fadeIn_0.2s_ease-out]';
  const dropdownItemClass = 'w-full h-10 px-3 rounded-xl text-xs font-bold text-left text-on-surface-variant hover:bg-surface-low hover:text-on-surface transition-all flex items-center gap-2 cursor-pointer';

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
      <header className={`fixed left-0 right-0 top-0 z-40 h-16 border-b border-border bg-surface-lowest transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Avatar */}
        <button type="button" onClick={handleBrandClick} className="relative z-10 flex h-10 items-center gap-2 rounded-xl px-2 text-on-surface-variant transition-colors duration-200 hover:bg-surface-container hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:px-3 cursor-pointer" id="header-brand" aria-label={language === 'es' ? 'Ir al inicio' : 'Go to home'}>
          <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
            <img
              src={andurMark}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-xs font-black tracking-tight sm:text-sm">Portafolio</span>
        </button>

        {/* Action Blocks */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          
          {/* 1. LANGUAGE SELECTOR WITH FLAGS */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setIsLangOpen((open) => !open);
                setIsLabOpen(false);
              }}
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

          <a
            href={CV_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center rounded-xl px-3 text-xs font-bold text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface active:scale-95 cursor-pointer"
            aria-label={language === 'es' ? 'Ver CV, se abre en una pestaña nueva' : 'View resume, opens in a new tab'}
          >
            {t.navCv}
          </a>

          {/* 2. LABORATORIO DROPDOWN MENU */}
          <div ref={labRef} className="relative" id="lab-menu-btn">
            <button
              onClick={() => {
                setIsLabOpen((open) => !open);
                setIsLangOpen(false);
              }}
              className="h-10 px-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-1.5 active:scale-95 text-xs font-bold cursor-pointer"
              title={t.labTitle}
              aria-expanded={isLabOpen}
            >
              <FlaskConical className="h-[18px] w-[18px]" strokeWidth={1.75} />
              <span className="hidden md:inline">{t.labTitle}</span>
            </button>

            {isLabOpen && (
              <div className={dropdownPanelClass} tabIndex={-1}>
                <div className="border-b border-border/60 px-2 pb-3">
                  <h4 className="typo-overlay-heading">{t.labTitle}</h4>
                  <p className="mt-1 typo-overlay-body">{t.labDescription}</p>
                </div>

                <div className="border-b border-border/60 px-2 py-3">
                  <div className="mb-2 flex items-center gap-1">
                    <p className="typo-overlay-heading">{t.labAnimation}</p>
                    <InfoTooltip label={t.labAnimationHelpLabel} placement="top">{t.labAnimationHelp}</InfoTooltip>
                  </div>
                  <div className="grid grid-cols-3 gap-2" role="group" aria-label={t.labAnimation}>
                    {animationOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setEntranceAnimation(option.value)}
                        aria-pressed={entranceAnimation === option.value}
                        className={`flex h-[5.75rem] flex-col items-center justify-center gap-1.5 rounded-xl px-1 text-xs font-bold transition-colors cursor-pointer ${
                          entranceAnimation === option.value
                            ? 'bg-primary text-white'
                            : 'bg-surface-low text-on-surface-variant hover:bg-surface-high hover:text-on-surface'
                        }`}
                      >
                        <LabAnimationPreview type={option.value} active={entranceAnimation === option.value} />
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-b border-border/60 py-2">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsLabOpen(false);
                      onOpenDesignSystem();
                    }}
                    className={dropdownItemClass}
                  >
                    <Layers className="w-3.5 h-3.5 text-primary" />
                    <span className="typo-overlay-heading">{t.labDesignSystem}</span>
                  </button>
                </div>

                <div className="px-2 pt-3 pb-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="typo-overlay-heading">{t.labVersion}</p>
                    <a
                      href="https://github.com/AndurEsn/Andur-portafolio/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-black text-primary hover:bg-primary/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={`${t.labVersion} v${APP_VERSION}. ${t.labVersionLink}`}
                    >
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      v{APP_VERSION}
                    </a>
                  </div>
                </div>
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
        </div>
      </div>
    </header>

    {/* 5. FLOATING SECTION TABS - Visible on tablet/desktop, hidden on mobile */}
    {appState === 'normal' && <div 
      className={`fixed left-0 right-0 z-30 hidden h-12 items-center justify-center border-b border-border bg-surface-lowest/90 backdrop-blur-md transition-all duration-300 sm:flex ${
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
