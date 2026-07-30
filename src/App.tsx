import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Roadmap from './components/Roadmap';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import SkeletonLoader from './components/SkeletonLoader';
import ErrorState from './components/ErrorState';
import TourOverlay from './components/TourOverlay';
import NpsSurvey from './components/NpsSurvey';
import DesignSystemModal from './components/DesignSystemModal';
import LogoCarousel from './components/LogoCarousel';
import LandingParticleField from './components/LandingParticleField';
import andurProfile from './assets/images/andur-profile.jpg';
import { Theme, AppState, EntranceAnimation, HeroContent, Language, NpsFeedback, ToastVariant } from './types';
import { AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import { METRICS, TRANSLATIONS } from './data';

const avatarPath = andurProfile;
const NPS_STORAGE_KEY = 'portfolio-nps-feedback-v1';

interface ToastState {
  message: string;
  variant: ToastVariant;
  title?: string;
}

interface LandingRevealProps {
  animation: EntranceAnimation;
  scrollDirection: 'up' | 'down' | 'idle';
  children: React.ReactNode;
}

function LandingReveal({ animation, scrollDirection, children }: LandingRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(revealRef, { amount: 0.18 });

  const hidden = shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : animation === 'move'
      ? { opacity: 0, y: 32, scale: 1 }
      : animation === 'scale'
        ? { opacity: 0, y: 0, scale: 0.94 }
        : { opacity: 0, y: 0, scale: 1 };
  const visible = { opacity: 1, y: 0, scale: 1 };
  const shouldAnimate = !shouldReduceMotion && isInView && scrollDirection === 'down';
  const shouldStayVisible = shouldReduceMotion || scrollDirection !== 'down' || isInView;

  return (
    <motion.div
      ref={revealRef}
      variants={{ hidden, visible }}
      initial={scrollDirection === 'down' && !shouldReduceMotion ? 'hidden' : false}
      animate={shouldStayVisible ? 'visible' : 'hidden'}
      transition={shouldAnimate
        ? { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        : { duration: 0 }}
    >
      {children}
    </motion.div>
  );
}

function readStoredNpsFeedback(): NpsFeedback | null {
  try {
    const storedValue = window.localStorage.getItem(NPS_STORAGE_KEY);
    if (!storedValue) return null;

    const parsed = JSON.parse(storedValue) as Partial<NpsFeedback>;
    const hasValidStatus = parsed.status === 'dismissed' || parsed.status === 'submitted';
    const hasValidRating = parsed.rating === null || (
      typeof parsed.rating === 'number' &&
      parsed.rating >= 1 &&
      parsed.rating <= 5
    );

    if (!hasValidStatus || !hasValidRating || typeof parsed.comment !== 'string') return null;
    return parsed as NpsFeedback;
  } catch {
    return null;
  }
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
  const [theme, setTheme] = useState<Theme>('light');
  const [appState, setAppState] = useState<AppState>('normal');
  const [language, setLanguage] = useState<Language>('es');
  const [entranceAnimation, setEntranceAnimation] = useState<EntranceAnimation>('move');
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'idle'>('idle');
  
  const [isTourActive, setIsTourActive] = useState(false);
  const [currentTourStep, setCurrentTourStep] = useState(0);
  
  const [isNpsOpen, setIsNpsOpen] = useState(false);
  const [npsFeedback, setNpsFeedback] = useState<NpsFeedback | null>(readStoredNpsFeedback);
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  const t = TRANSLATIONS[language];
  const heroContent = defaultHeroContent[language];
  const metrics = METRICS(language);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;

    const updateScrollDirection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY !== lastScrollY) {
          setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
          lastScrollY = currentScrollY;
        }
      });
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  // Sync theme class to HTML root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#10131a';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#F7F9FF';
    }
  }, [theme]);

  // Show the survey once, after one minute, while no local decision exists.
  useEffect(() => {
    if (npsFeedback) return;

    const timer = setTimeout(() => {
      setIsNpsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, [npsFeedback]);

  // Handle toast notifications helper
  const triggerToast = (message: string, variant: ToastVariant = 'default', title?: string) => {
    setToast({ message, variant, title });
    const id = setTimeout(() => {
      setToast((current) => current?.message === message ? null : current);
    }, 4000);
    return () => clearTimeout(id);
  };

  const persistNpsFeedback = (feedback: NpsFeedback) => {
    setNpsFeedback(feedback);
    try {
      window.localStorage.setItem(NPS_STORAGE_KEY, JSON.stringify(feedback));
    } catch {
      // The in-memory state still prevents another prompt during this visit.
    }
  };

  const handleCloseNps = () => {
    if (!npsFeedback) {
      persistNpsFeedback({ status: 'dismissed', rating: null, comment: '' });
    }
    setIsNpsOpen(false);
  };

  const handleSubmitNps = (feedback: NpsFeedback) => {
    persistNpsFeedback(feedback);
    setIsNpsOpen(false);
  };

  const handleStartTour = () => {
    if (appState !== 'normal') {
      triggerToast(language === 'es' ? 'Cambia al modo Normal para iniciar el tour.' : 'Switch to Normal mode to start the tour.');
      return;
    }
    setIsTourActive(true);
    setCurrentTourStep(0);
  };

  const handleCloseTour = () => {
    setIsTourActive(false);
  };

  const scrollToProjects = () => {
    document.getElementById('tour-step-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAppStateChange = (newState: AppState) => {
    const previousState = appState;
    setAppState(newState);
    setIsTourActive(false);

    if (newState === 'normal' && previousState === 'loading') {
      triggerToast(t.toastLoadingDisabled, 'success');
      return;
    }

    if (newState === 'normal' && previousState === 'error') {
      triggerToast(t.toastErrorDisabled, 'success');
      return;
    }

    triggerToast(
      newState === 'normal'
        ? t.toastNormal
        : newState === 'loading'
          ? t.toastLoading
          : t.toastError,
      newState === 'loading' ? 'info' : newState === 'error' ? 'error' : 'default'
    );
  };

  const navigateToHero = () => {
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

    if (appState !== 'normal') handleAppStateChange('normal');
    scrollToHeroWhenReady();
  };

  return (
    <div className="relative isolate min-h-screen bg-background pb-12 font-sans text-on-surface antialiased transition-colors duration-300">
      
      {/* 1. FIXED HEADER */}
      <Header
        theme={theme}
        setTheme={(newTheme) => {
          setTheme(newTheme);
          triggerToast(newTheme === 'dark' ? t.toastThemeDark : t.toastThemeLight, 'success');
        }}
        appState={appState}
        setAppState={handleAppStateChange}
        language={language}
        setLanguage={(lang) => {
          setLanguage(lang);
          triggerToast(TRANSLATIONS[lang].toastLanguageChanged);
        }}
        onStartTour={handleStartTour}
        isTourActive={isTourActive}
        onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
        onOpenNps={() => setIsNpsOpen(true)}
        entranceAnimation={entranceAnimation}
        setEntranceAnimation={setEntranceAnimation}
        avatarSrc={heroContent.avatar}
        onNavigateToHero={navigateToHero}
      />

      {appState === 'normal' && <LandingParticleField theme={theme} />}

      {/* 1.5 ACTIVE SIMULATION BANNER */}
      {appState !== 'normal' && (
        <div className="fixed top-0 left-0 right-0 h-10 bg-amber-500 dark:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center justify-between px-4 z-[100] shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
            <span className="truncate">
              {appState === 'loading' ? t.bannerLoadingActive : t.bannerErrorActive}
            </span>
          </div>
          <button
            onClick={() => {
              setAppState('normal');
              triggerToast(language === 'es' ? 'Regresaste a modo normal' : 'Returned to normal mode');
            }}
            className="px-3 py-1 bg-white hover:bg-white/90 text-amber-600 dark:text-amber-700 rounded-lg active:scale-95 transition-all text-[11px] uppercase font-black tracking-wider cursor-pointer shadow-sm shrink-0"
          >
            {t.bannerDeactivateBtn}
          </button>
        </div>
      )}

      {/* 2. MAIN LAYOUT SECTIONS */}
      <div className={`relative z-10 transition-all duration-300 ${appState !== 'normal' ? 'pt-[104px]' : 'pt-16'}`}>
        <AnimatePresence mode="wait">
          {appState === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <SkeletonLoader language={language} />
            </motion.div>
          )}

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
                onRecover={() => {
                  setAppState('normal');
                  triggerToast(language === 'es' ? '¡Regresaste a la página de inicio!' : 'Welcome back to the homepage!');
                }} 
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
              className="space-y-4"
            >
              {/* Hero */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}>
                <Hero 
                  onViewProjects={scrollToProjects}
                  language={language} 
                  content={heroContent}
                />
              </LandingReveal>

              {/* Collaborating brands */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}><LogoCarousel language={language} /></LandingReveal>

              {/* Metrics stack */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}><Metrics language={language} metrics={metrics} /></LandingReveal>

              {/* Career Roadmap */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}><Roadmap language={language} /></LandingReveal>

              {/* Portfolio section with filters & modal */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}><Portfolio language={language} /></LandingReveal>

              {/* Contact section */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}><Contact onShowToast={triggerToast} language={language} /></LandingReveal>

              {/* Accordion FAQ */}
              <LandingReveal animation={entranceAnimation} scrollDirection={scrollDirection}><FAQ language={language} /></LandingReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. FOOTER */}
      <footer className="relative z-10 mx-auto mt-16 max-w-7xl border-t border-border px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-muted text-center md:text-left">
              {t.footerCopyright}
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#tour-step-hero" className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              {t.navAbout}
            </a>
            <a href="#tour-step-metrics" className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              {t.navMetrics}
            </a>
            <a href="#roadmap-section" className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              {t.navRoadmap}
            </a>
            <a href="#tour-step-projects" className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              {t.navProjects}
            </a>
            <a href="#contact-section" className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              {t.navContact}
            </a>
            <a href="#faq-section" className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">
              {t.navFaq}
            </a>
          </nav>
        </div>
      </footer>

      {/* 4. PRODUCT TOUR POPUP OVERLAY */}
      <TourOverlay
        currentStep={currentTourStep}
        setCurrentStep={setCurrentTourStep}
        isActive={isTourActive}
        onClose={handleCloseTour}
        onShowToast={triggerToast}
        language={language}
      />

      {/* 5. DYNAMIC DESIGN SYSTEM DOCUMENTATION MODAL */}
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

      {/* 6. FLOATING NPS SURVEY POPUP */}
      <NpsSurvey
        isOpen={isNpsOpen}
        onClose={handleCloseNps}
        onSubmit={handleSubmitNps}
        language={language}
        onShowToast={triggerToast}
      />

      {/* 7. FLOATING TOAST NOTIFICATION */}
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
