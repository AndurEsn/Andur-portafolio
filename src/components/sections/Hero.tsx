import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { HeroContent, Language, Metric } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';
import RotatingPhrases from '../effects/RotatingPhrases';

interface HeroProps {
  language: Language;
  content: HeroContent;
  metrics: Metric[];
}

export default function Hero({ language, content, metrics }: HeroProps) {
  const t = TRANSLATIONS[language];
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
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
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
        <div className="flex max-w-xl flex-col text-left lg:max-w-none">
          <h1 id="tour-title-hero" className="text-base font-semibold leading-snug tracking-tight text-on-surface-variant sm:text-xl">
            {t.splashLine}
          </h1>
          <RotatingPhrases phrases={t.splashPhrases} align="start" />

          <div
            id="tour-step-metrics"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
                  {metric.value}
                </span>
                <span className="mt-1 text-sm font-semibold leading-snug text-on-surface-variant">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsPhotoOpen(true)}
          className="relative mx-auto w-full max-w-md cursor-zoom-in justify-self-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:max-w-none lg:justify-self-end"
          aria-label={language === 'es' ? 'Ampliar fotografía de perfil' : 'Enlarge profile photo'}
        >
          <span className="relative block aspect-[3/4] w-full overflow-hidden rounded-[2.5rem] bg-surface-low sm:aspect-[4/5] lg:aspect-[3/4] lg:max-h-[36rem]">
            <img
              src={content.avatar}
              alt={content.name}
              className="h-full w-full object-cover object-center"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
    </section>
  );
}
