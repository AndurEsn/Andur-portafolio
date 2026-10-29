import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import SkillsCarousel from '../components/sections/SkillsCarousel';
import Portfolio from '../components/sections/Portfolio';
import Approach from '../components/sections/Approach';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import ErrorState from '../components/feedback/ErrorState';
import DesignSystemModal from '../components/overlays/DesignSystemModal';
import LandingParticleField from '../components/effects/LandingParticleField';
import { BrandGlyphDefs } from '../components/ui/BrandGlyph';
import andurHero from '../assets/images/andur-hero.png';
import { Theme, ThemePreference, AppState, HeroContent, Language, ToastVariant } from '../types';
import { AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import { METRICS, TRANSLATIONS } from '../content/data';
import { goHome, isHomePath } from '../config/routes';
import {
  applyThemeClass,
  getSystemTheme,
  persistThemePreference,
  readStoredThemePreference,
  resolveTheme,
} from '../config/theme';
import { CV_HREF } from '../config/cv';
import { PAGE_NAV } from '../config/nav';
import { APP_VERSION } from '../config/version';
import AndurBrand from '../components/ui/AndurBrand';

const avatarPath = andurHero;
const INITIAL_LOADING_MS = 1000;

interface ToastState {
  message: string;
  variant: ToastVariant;
  title?: string;
}

interface LandingRevealProps {
  children: React.ReactNode;
}

function LandingReveal({ children }: LandingRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(revealRef, { amount: 0.2, once: true, margin: '0px 0px -12% 0px' });

  const hidden = shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 32, scale: 1 };
  const visible = { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      ref={revealRef}
      initial={shouldReduceMotion ? visible : hidden}
      animate={shouldReduceMotion || isInView ? visible : hidden}
      transition={shouldReduceMotion
        ? { duration: 0 }
        : { delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const defaultHeroContent: Record<Language, HeroContent> = {
  es: {
    avatar: avatarPath,
    name: 'Andur',
    role: 'Product Designer',
    title: TRANSLATIONS.es.heroTitle,
    subtitle: TRANSLATIONS.es.heroDesc,
  },
  en: {
    avatar: avatarPath,
    name: 'Andur',
    role: 'Product Designer',
    title: TRANSLATIONS.en.heroTitle,
    subtitle: TRANSLATIONS.en.heroDesc,
  },
};

export default function App() {
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => readStoredThemePreference());
  const [theme, setTheme] = useState<Theme>(() => {
    const initial = resolveTheme();
    applyThemeClass(initial);
    return initial;
  });
  const [appState, setAppState] = useState<AppState>(() => (isHomePath() ? 'loading' : 'error'));
  const [language, setLanguage] = useState<Language>('es');
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const t = TRANSLATIONS[language];
  const heroContent = defaultHeroContent[language];
  const metrics = METRICS(language);

  useEffect(() => {
    persistThemePreference(themePreference);
    const resolved = resolveTheme(themePreference);
    setTheme(resolved);
    applyThemeClass(resolved);
  }, [themePreference]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncWithSystem = () => {
      if (readStoredThemePreference() !== 'system') return;
      const resolved = getSystemTheme();
      setTheme(resolved);
      applyThemeClass(resolved);
    };

    media.addEventListener('change', syncWithSystem);
    return () => media.removeEventListener('change', syncWithSystem);
  }, []);

  useEffect(() => {
    const syncRoute = () => {
      setAppState(isHomePath() ? 'normal' : 'error');
    };

    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  useEffect(() => {
    if (appState !== 'loading') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minMs = prefersReducedMotion ? 0 : INITIAL_LOADING_MS;
    const timer = window.setTimeout(() => setAppState('normal'), minMs);
    return () => window.clearTimeout(timer);
  }, [appState]);

  // Handle toast notifications helper
  const triggerToast = (message: string, variant: ToastVariant = 'default', title?: string) => {
    setToast({ message, variant, title });
    const id = setTimeout(() => {
      setToast((current) => current?.message === message ? null : current);
    }, 4000);
    return () => clearTimeout(id);
  };

  const recoverHome = () => {
    goHome();
    setAppState('normal');
  };

  const navigateToHero = () => {
    recoverHome();
    const scrollToHeroWhenReady = () => {
      const deadline = window.performance.now() + 1000;
      const attemptScroll = () => {
        const hero = document.getElementById('tour-step-hero');
        if (hero) {
          hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        if (window.performance.now() < deadline) window.requestAnimationFrame(attemptScroll);
      };
      window.requestAnimationFrame(attemptScroll);
    };
    scrollToHeroWhenReady();
  };

  return (
    <div className="relative isolate min-h-screen bg-background pb-12 font-sans text-on-surface antialiased transition-colors duration-300">
      <BrandGlyphDefs />
      
      <Header
        theme={theme}
        themePreference={themePreference}
        setThemePreference={(preference) => {
          if (preference === themePreference) return;
          setThemePreference(preference);
          const toast =
            preference === 'system'
              ? t.toastThemeAuto
              : preference === 'dark'
                ? t.toastThemeDark
                : t.toastThemeLight;
          triggerToast(toast, 'success');
        }}
        appState={appState}
        language={language}
        setLanguage={(lang) => {
          if (lang === language) return;
          setLanguage(lang);
          triggerToast(TRANSLATIONS[lang].toastLanguageChanged);
        }}
        onNavigateToHero={navigateToHero}
      />

      {appState !== 'error' && (
        <LandingParticleField theme={theme} waveActive={appState === 'loading'} />
      )}

      {appState === 'loading' && (
        <div className="fixed inset-0 z-20 flex items-center justify-center px-6" role="status" aria-live="polite">
          <div className="flex flex-col items-center gap-3 text-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true" />
            <p className="text-sm font-bold tracking-tight text-on-surface sm:text-base">{t.loadingLabel}</p>
          </div>
        </div>
      )}

      {/* 2. MAIN LAYOUT SECTIONS */}
      <div className="relative z-10 pt-chrome">
        <AnimatePresence mode="wait">
          {appState === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <ErrorState 
                language={language}
                onRecover={recoverHome} 
              />
            </motion.div>
          )}

          {appState === 'normal' && (
            <motion.div
              key="normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Hero */}
              <LandingReveal>
                <Hero 
                  language={language} 
                  content={heroContent}
                  metrics={metrics}
                />
              </LandingReveal>

              <LandingReveal><SkillsCarousel language={language} /></LandingReveal>
              <LandingReveal><Portfolio language={language} theme={theme} /></LandingReveal>
              <LandingReveal><Approach language={language} /></LandingReveal>
              <LandingReveal><Process language={language} /></LandingReveal>
              <LandingReveal><FAQ language={language} /></LandingReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. FOOTER */}
      {appState === 'normal' && (
      <footer className="relative z-10 mx-auto max-w-7xl border-t border-border px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 pb-8">
          <AndurBrand theme={theme} className="h-7 w-auto" />

          <nav className="flex flex-wrap justify-center gap-6">
            {PAGE_NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
              >
                {t[item.titleKey]}
              </a>
            ))}
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
              aria-label={language === 'es' ? 'Ver CV, se abre en una pestaña nueva' : 'View resume, opens in a new tab'}
            >
              {t.navCv}
            </a>
            <button
              type="button"
              onClick={() => setIsDesignSystemOpen(true)}
              className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              {t.labDesignSystem}
            </button>
            <a
              href="https://github.com/AndurEsn/Andur-portafolio/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-primary hover:text-primary-hover transition-colors"
              aria-label={`${t.labVersion} v${APP_VERSION}. ${t.labVersionLink}`}
            >
              v{APP_VERSION}
            </a>
          </nav>

          <p className="text-xs text-muted text-center">
            {t.footerCopyright}
          </p>
        </div>
      </footer>
      )}

      {/* 4. DYNAMIC DESIGN SYSTEM DOCUMENTATION MODAL */}
      <AnimatePresence>
        {isDesignSystemOpen && (
          <DesignSystemModal
            isOpen={isDesignSystemOpen}
            onClose={() => {
              setIsDesignSystemOpen(false);
            }}
            language={language}
            theme={theme}
          />
        )}
      </AnimatePresence>

      {/* 5. FLOATING TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 220 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] max-w-sm w-[90vw] p-4 rounded-2xl shadow-2xl flex items-center gap-3 border ${
              toast.variant === 'error'
                ? 'bg-error-container text-on-error-container border-error/30'
                : toast.variant === 'info'
                  ? 'bg-primary-bg text-on-surface border-primary/30'
                  : toast.variant === 'success'
                    ? 'bg-success-container text-on-success-container border-success/30'
                  : 'bg-on-surface text-background border-border/10'
            }`}
          >
            <div className={`p-1 rounded-lg shrink-0 ${
              toast.variant === 'error'
                ? 'bg-error/10 text-error'
                : toast.variant === 'success'
                  ? 'bg-success/10 text-success'
                : 'bg-primary/10 text-primary'
            }`}>
              {toast.variant === 'error' ? (
                <AlertTriangle className="w-5 h-5" />
              ) : toast.variant === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : toast.variant === 'info' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <CheckCircle className="w-5 h-5" />
              )}
            </div>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-widest leading-none mb-0.5 ${
                toast.variant === 'error' ? 'text-error' : toast.variant === 'success' ? 'text-success' : 'text-primary'
              }`}>
                {toast.title ?? (toast.variant === 'error'
                  ? (language === 'es' ? 'Error' : 'Error')
                  : toast.variant === 'info'
                    ? (language === 'es' ? 'Carga' : 'Loading')
                    : toast.variant === 'success'
                      ? (language === 'es' ? 'Acción completada' : 'Action completed')
                    : t.toastToastLabel)}
              </p>
              <p className="text-xs font-bold tracking-tight">
                {toast.message}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
