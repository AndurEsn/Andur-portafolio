import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { TOUR_STEPS } from '../data';
import { ArrowRight, Check, X } from 'lucide-react';
import { Language, ToastVariant } from '../types';

interface TourOverlayProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isActive: boolean;
  onClose: () => void;
  onShowToast: (msg: string, variant?: ToastVariant) => void;
  language: Language;
}

interface SpotlightCoords {
  top: number;
  left: number;
  width: number;
  height: number;
}

const SPOTLIGHT_MARGIN = 12;

export default function TourOverlay({
  currentStep,
  setCurrentStep,
  isActive,
  onClose,
  onShowToast,
  language
}: TourOverlayProps) {
  const [highlightCoords, setHighlightCoords] = useState<SpotlightCoords | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const scrollLockFrameRef = useRef<number | undefined>(undefined);

  const steps = useMemo(() => TOUR_STEPS(language), [language]);
  const step = steps[currentStep];

  const getActiveElements = () => {
    if (!step) return { target: null, section: null, focus: null };
    const target = document.getElementById(step.targetId);
    const section = target?.closest('section') ?? null;
    const focus = target?.parentElement ?? target;
    return { target, section, focus };
  };

  const getSpotlightCoords = (focus: HTMLElement, section: HTMLElement | null): SpotlightCoords => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const focusRect = focus.getBoundingClientRect();
    const sectionRect = section?.getBoundingClientRect();
    const focusIsVisible = focusRect.bottom > SPOTLIGHT_MARGIN && focusRect.top < viewportHeight - SPOTLIGHT_MARGIN;
    const sourceRect = focusIsVisible || !sectionRect
      ? focusRect
      : {
          top: Math.max(SPOTLIGHT_MARGIN, sectionRect.top),
          left: Math.max(SPOTLIGHT_MARGIN, sectionRect.left),
          right: Math.min(viewportWidth - SPOTLIGHT_MARGIN, sectionRect.right),
          bottom: Math.min(viewportHeight - SPOTLIGHT_MARGIN, sectionRect.bottom),
        };

    const left = Math.max(SPOTLIGHT_MARGIN, sourceRect.left - SPOTLIGHT_MARGIN);
    const top = Math.max(SPOTLIGHT_MARGIN, sourceRect.top - SPOTLIGHT_MARGIN);
    const right = Math.min(viewportWidth - SPOTLIGHT_MARGIN, sourceRect.right + SPOTLIGHT_MARGIN);
    const bottom = Math.min(viewportHeight - SPOTLIGHT_MARGIN, sourceRect.bottom + SPOTLIGHT_MARGIN);

    return {
      top,
      left,
      width: Math.max(0, right - left),
      height: Math.max(0, bottom - top),
    };
  };

  useLayoutEffect(() => {
    if (!isActive || !step) return;

    const { section, focus } = getActiveElements();
    if (!focus) return;

    if (section) {
      const headerOffset = window.innerWidth >= 640 ? 112 : 72;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, sectionTop), behavior: 'auto' });
    }
    const updateCoords = () => setHighlightCoords(getSpotlightCoords(focus, section));
    updateCoords();

    const resizeObserver = new ResizeObserver(updateCoords);
    resizeObserver.observe(focus);
    if (section) resizeObserver.observe(section);

    let updateFrame = 0;
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(updateFrame);
      updateFrame = window.requestAnimationFrame(updateCoords);
    };

    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(updateFrame);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('scroll', scheduleUpdate);
    };
  }, [isActive, currentStep, language, step]);

  useEffect(() => {
    if (!isActive || !step) return;

    const { section } = getActiveElements();
    if (!section) return;

    const getBounds = () => {
      const headerOffset = window.innerWidth >= 640 ? 112 : 72;
      const top = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerOffset);
      const bottom = Math.max(top, top + section.offsetHeight - window.innerHeight + headerOffset);
      return { top, bottom };
    };

    const clampScroll = (requestedTop: number) => {
      const { top, bottom } = getBounds();
      return Math.min(Math.max(requestedTop, top), bottom);
    };

    const moveWithinSection = (delta: number) => {
      window.scrollTo({ top: clampScroll(window.scrollY + delta), behavior: 'auto' });
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      if (event.cancelable) event.preventDefault();
      moveWithinSection(event.deltaY);
    };

    let touchY: number | null = null;
    const handleTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? null;
    };
    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      if (touchY === null || currentY === undefined) return;
      if (event.cancelable) event.preventDefault();
      moveWithinSection(touchY - currentY);
      touchY = currentY;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const interactiveTarget = event.target instanceof HTMLElement && event.target.closest('button, input, textarea, select, a');
      if (interactiveTarget) return;

      const pageStep = window.innerHeight * 0.8;
      const keyDeltas: Record<string, number> = {
        ArrowDown: 56,
        ArrowUp: -56,
        PageDown: pageStep,
        PageUp: -pageStep,
        ' ': event.shiftKey ? -pageStep : pageStep,
      };

      if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const bounds = getBounds();
        window.scrollTo({ top: event.key === 'Home' ? bounds.top : bounds.bottom, behavior: 'auto' });
        return;
      }

      if (keyDeltas[event.key] !== undefined) {
        event.preventDefault();
        moveWithinSection(keyDeltas[event.key]);
      }
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(scrollLockFrameRef.current);
      scrollLockFrameRef.current = window.requestAnimationFrame(() => {
        const clampedTop = clampScroll(window.scrollY);
        if (Math.abs(window.scrollY - clampedTop) > 1) window.scrollTo({ top: clampedTop, behavior: 'auto' });
      });
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const focusTimer = window.setTimeout(() => nextButtonRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(focusTimer);
      window.cancelAnimationFrame(scrollLockFrameRef.current);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, currentStep, language, onClose, step]);

  useEffect(() => {
    if (!isActive) setHighlightCoords(null);
  }, [isActive]);

  if (!isActive || !step || !highlightCoords) return null;

  const spotlightRight = highlightCoords.left + highlightCoords.width;
  const spotlightBottom = highlightCoords.top + highlightCoords.height;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }

    onClose();
    onShowToast(language === 'es' ? '¡El recorrido ha concluido correctamente!' : 'The tour has concluded successfully!', 'success');
  };

  return (
    <div className="fixed inset-0 z-[210]" aria-live="polite">
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 bg-black/60 backdrop-blur-[1px] transition-all duration-300"
        style={{ width: '100%', height: highlightCoords.top }}
      />
      <div
        aria-hidden="true"
        className="fixed left-0 bg-black/60 backdrop-blur-[1px] transition-all duration-300"
        style={{ top: highlightCoords.top, width: highlightCoords.left, height: highlightCoords.height }}
      />
      <div
        aria-hidden="true"
        className="fixed bg-black/60 backdrop-blur-[1px] transition-all duration-300"
        style={{ top: highlightCoords.top, left: spotlightRight, right: 0, height: highlightCoords.height }}
      />
      <div
        aria-hidden="true"
        className="fixed bottom-0 left-0 bg-black/60 backdrop-blur-[1px] transition-all duration-300"
        style={{ top: spotlightBottom, width: '100%' }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-[211] rounded-3xl border-2 border-primary shadow-[0_0_0_1px_rgb(255_255_255_/_0.24),0_0_36px_rgb(64_144_254_/_0.25)] transition-all duration-300"
        style={highlightCoords}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={language === 'es' ? 'Recorrido del portafolio' : 'Portfolio tour'}
        className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[212] max-h-[calc(100svh-2rem)] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-3xl border-2 border-primary/50 bg-surface-lowest p-5 shadow-2xl sm:inset-x-auto sm:right-6 sm:w-[340px]"
      >
        <div className="flex items-center justify-between border-b border-border/40 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-ping rounded-full bg-primary" />
            <h4 className="text-xs font-black uppercase tracking-wider text-primary">{step.title}</h4>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-md bg-surface-low px-2 py-0.5 text-[10px] font-bold text-muted">
              {currentStep + 1} / {steps.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={language === 'es' ? 'Cerrar recorrido' : 'Close tour'}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface-high cursor-pointer"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <p className="text-xs font-normal leading-relaxed text-on-surface-variant sm:text-sm">{step.text}</p>

        <div className="mt-1 flex items-center justify-between border-t border-border/40 pt-3">
          <button
            onClick={onClose}
            className="h-9 rounded-lg px-3 text-[11px] font-bold text-muted transition-all hover:bg-surface-high hover:text-on-surface cursor-pointer"
          >
            {language === 'es' ? 'Omitir' : 'Skip'}
          </button>

          <div className="flex gap-1.5">
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="h-9 rounded-lg border border-border bg-surface-low px-3 text-[11px] font-bold text-on-surface-variant transition-all hover:bg-surface-high cursor-pointer"
              >
                {language === 'es' ? 'Atrás' : 'Back'}
              </button>
            )}

            <button
              ref={nextButtonRef}
              onClick={handleNext}
              className="flex h-9 items-center gap-1 rounded-lg bg-primary px-4 text-[11px] font-bold text-white shadow-md transition-all duration-150 hover:bg-primary-hover hover:shadow-primary/20 active:scale-95 cursor-pointer"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  {language === 'es' ? 'Finalizar' : 'Finish'}
                  <Check className="h-3 w-3" />
                </>
              ) : (
                <>
                  {language === 'es' ? 'Siguiente' : 'Next'}
                  <ArrowRight className="h-3 w-3" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
