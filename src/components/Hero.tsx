import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, ZoomIn, ZoomOut } from 'lucide-react';
import { HeroContent, Language } from '../types';
import { TRANSLATIONS } from '../data';
import useBodyScrollLock from '../hooks/useBodyScrollLock';
import ModalCloseButton from './ModalCloseButton';

interface HeroProps {
  onStartTour: () => void;
  onViewProjects: () => void;
  isTourActive: boolean;
  language: Language;
  content: HeroContent;
}

export default function Hero({ onStartTour, onViewProjects, isTourActive, language, content }: HeroProps) {
  const t = TRANSLATIONS[language];
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  useBodyScrollLock(isPhotoOpen);

  const closePhoto = () => {
    setIsPhotoOpen(false);
    setZoom(1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePhoto();
    };
    if (isPhotoOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPhotoOpen]);

  return (
    <section 
      id="tour-step-hero"
      className="relative isolate w-full overflow-hidden py-16 transition-all duration-300 sm:py-24"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
        <button
        type="button"
        onClick={() => setIsPhotoOpen(true)}
        className="mb-6 rounded-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={language === 'es' ? 'Ampliar fotografía de perfil' : 'Enlarge profile photo'}
      >
        <img
          src={content.avatar}
          alt={content.name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
        />
        </button>

        {/* Designer Name (Eyebrow text) */}
        <span className="mb-3 text-xs font-black uppercase tracking-widest text-primary sm:text-sm">
          {content.name} · {content.role}
        </span>

        {/* Headline */}
        <h1 id="tour-title-hero" className="mb-6 max-w-3xl text-3xl font-black leading-tight tracking-tight text-on-surface sm:text-5xl sm:leading-none lg:text-6xl">
          {content.title}
        </h1>

        {/* Supporting context */}
        <p className="mb-8 max-w-2xl text-base font-normal leading-relaxed text-on-surface-variant sm:text-lg">
          {content.subtitle}
        </p>

        <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <button 
            id="hero-tour-btn"
            onClick={onStartTour}
            disabled={isTourActive}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary px-8 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-primary-hover hover:shadow-primary/20 active:scale-95 disabled:opacity-50 sm:w-auto cursor-pointer"
          >
            <Compass className="h-5 w-5 animate-pulse" />
            {t.heroBtn}
          </button>
          <button
            type="button"
            onClick={onViewProjects}
            className="flex h-14 w-full items-center justify-center rounded-2xl border border-border bg-surface-lowest px-8 text-base font-bold text-on-surface transition-all duration-200 hover:bg-surface-high active:scale-95 sm:w-auto cursor-pointer"
          >
            {t.heroProjectsBtn}
          </button>
        </div>

        <AnimatePresence>
        {isPhotoOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePhoto}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
              aria-label={language === 'es' ? 'Cerrar visor de imagen' : 'Close image viewer'}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={language === 'es' ? 'Fotografía de perfil ampliada' : 'Enlarged profile photo'}
              className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-auto hide-scrollbar rounded-2xl"
            >
              <img
                src={content.avatar}
                alt={content.name}
                className="block max-w-none h-auto transition-[width] duration-200"
                style={{ width: `${zoom * 100}%` }}
              />
              <div className="absolute right-16 top-4 z-20 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((current) => Math.max(1, current - 0.25))}
                  disabled={zoom === 1}
                  className="h-10 w-10 rounded-xl bg-surface-lowest text-on-surface hover:bg-surface-high disabled:opacity-50 transition-colors"
                  aria-label={language === 'es' ? 'Alejar imagen' : 'Zoom out'}
                >
                  <ZoomOut className="mx-auto w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((current) => Math.min(2, current + 0.25))}
                  disabled={zoom === 2}
                  className="h-10 w-10 rounded-xl bg-surface-lowest text-on-surface hover:bg-surface-high disabled:opacity-50 transition-colors"
                  aria-label={language === 'es' ? 'Acercar imagen' : 'Zoom in'}
                >
                  <ZoomIn className="mx-auto w-4 h-4" />
                </button>
              </div>
              <ModalCloseButton onClick={closePhoto} label={language === 'es' ? 'Cerrar visor de imagen' : 'Close image viewer'} />
            </motion.div>
          </div>
        )}
        </AnimatePresence>
      </div>
    </section>
  );
}
