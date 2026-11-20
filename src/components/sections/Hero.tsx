import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, IdCard, ZoomIn, ZoomOut } from 'lucide-react';
import { HeroContent, Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { CV_HREF } from '../../config/cv';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';
import ContactCard from '../overlays/ContactCard';

interface HeroProps {
  language: Language;
  content: HeroContent;
}

export default function Hero({ language, content }: HeroProps) {
  const t = TRANSLATIONS[language];
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  useBodyScrollLock(isPhotoOpen);

  const closePhoto = () => {
    setIsPhotoOpen(false);
    setZoom(1);
  };
  const requestClosePhoto = useModalDismiss(isPhotoOpen, closePhoto);

  return (
    <section
      id="tour-step-hero"
      className="relative isolate w-full overflow-hidden pt-16 pb-8 transition-all duration-300"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 [grid-template-areas:'copy'_'photo'] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-6 lg:[grid-template-areas:'copy_photo']">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center [grid-area:copy] lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-lowest px-3 py-1 text-sm font-medium text-on-surface">
              <span className="availability-dot" aria-hidden="true" />
              {t.heroAvailable}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-lowest px-3 py-1 text-sm font-medium text-on-surface">
              <span className="text-base leading-none" aria-hidden="true">🇲🇽</span>
              {t.heroLocation}
            </span>
          </div>
          <h1 id="tour-title-hero" className="typo-display-large mt-5 w-auto max-w-3xl text-balance">
            {t.splashLine}
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">
            {t.heroContactRole}
          </p>
          <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-on-surface-variant sm:text-lg">
            {t.heroIntro}
          </p>
          <div className="mt-6 flex w-full flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-w-[11rem] items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98] cursor-pointer"
              aria-label={language === 'es' ? 'Ver CV, se abre en una pestaña nueva' : 'View CV, opens in a new tab'}
            >
              {t.heroCvCta}
              <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex h-12 min-w-[11rem] items-center justify-center gap-2 rounded-xl border border-border bg-surface-lowest px-5 text-sm font-bold text-on-surface transition-all hover:bg-surface-high active:scale-[0.98] cursor-pointer"
            >
              <IdCard className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              {t.heroContactCta}
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsPhotoOpen(true)}
          className="relative mx-auto cursor-zoom-in justify-self-center [grid-area:photo] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:justify-self-end"
          aria-label={language === 'es' ? 'Ampliar fotografía de perfil' : 'Enlarge profile photo'}
        >
          <span className="relative mx-auto block aspect-[3/4] h-[clamp(20rem,42vw,28rem)] min-h-[20rem] max-h-[28rem] w-auto overflow-hidden rounded-[80rem] bg-transparent">
            <img
              src={content.avatar}
              alt={content.name}
              className="h-full w-full rounded-[80rem] object-contain object-center"
            />
          </span>
        </button>
      </div>

      {createPortal(
        <AnimatePresence>
          {isPhotoOpen && (
            <div className="fixed inset-0 z-[120] flex items-stretch justify-center sm:items-center sm:p-4">
              <motion.button
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={requestClosePhoto}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-none cursor-zoom-out sm:pointer-events-auto"
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
                className="relative z-10 h-dvh w-full max-h-dvh overflow-auto hide-scrollbar rounded-none sm:h-auto sm:max-h-[85vh] sm:max-w-4xl sm:rounded-2xl"
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
                <ModalCloseButton onClick={requestClosePhoto} label={language === 'es' ? 'Cerrar visor de imagen' : 'Close image viewer'} />
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
      <ContactCard
        language={language}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}
