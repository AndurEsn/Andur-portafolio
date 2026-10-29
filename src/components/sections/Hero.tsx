import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Linkedin, Mail, ZoomIn, ZoomOut } from 'lucide-react';
import { HeroContent, Language, Metric } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { CONTACT_EMAIL, CONTACT_LINKEDIN, CONTACT_WHATSAPP } from '../../config/contact';
import { CV_HREF } from '../../config/cv';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';

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
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
          <h1 id="tour-title-hero" className="text-balance text-base font-semibold leading-snug tracking-tight text-on-surface-variant sm:text-xl">
            {t.splashLine}
          </h1>
          <p className="typo-display-large mt-4 w-auto max-w-3xl text-balance sm:mt-5">
            {t.heroTagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98] cursor-pointer"
              aria-label={language === 'es' ? 'Descargar CV, se abre en una pestaña nueva' : 'Download resume, opens in a new tab'}
            >
              <Download className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              {t.heroCvCta}
            </a>
            <div className="flex items-center gap-2">
              <a
                href={CONTACT_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-lowest text-on-surface transition-all hover:bg-surface-high hover:text-primary active:scale-[0.98] cursor-pointer"
                aria-label={language === 'es' ? 'LinkedIn, se abre en una pestaña nueva' : 'LinkedIn, opens in a new tab'}
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-lowest text-on-surface transition-all hover:bg-surface-high hover:text-primary active:scale-[0.98] cursor-pointer"
                aria-label={language === 'es' ? 'Enviar correo' : 'Send email'}
              >
                <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={CONTACT_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface-lowest text-on-surface transition-all hover:bg-surface-high hover:text-primary active:scale-[0.98] cursor-pointer"
                aria-label={language === 'es' ? 'WhatsApp, se abre en una pestaña nueva' : 'WhatsApp, opens in a new tab'}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m-5.46 4.27c-.17 0-.45.06-.68.31-.24.24-.9.88-.9 2.15s.92 2.5 1.05 2.67c.12.17 1.81 2.76 4.37 3.87 2.13.92 2.56.74 3.03.69.46-.05 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.07-.11-.24-.17-.5-.3-.27-.12-1.57-.78-1.81-.86-.24-.09-.42-.13-.59.13-.17.25-.67.86-.82 1.03-.15.17-.3.2-.56.07-.27-.13-1.12-.41-2.14-1.32-.79-.7-1.32-1.57-1.48-1.84-.15-.26-.02-.4.12-.53.12-.12.27-.31.4-.46.13-.15.17-.26.27-.43.09-.17.04-.32-.02-.45-.07-.12-.59-1.43-.81-1.96-.21-.51-.43-.44-.59-.45h-.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            id="tour-step-metrics"
            className="mt-10 grid w-full grid-cols-3 gap-3 sm:gap-4"
          >
            {metrics.map((metric) => (
              <div key={metric.value} className="flex min-w-0 flex-col items-center lg:items-start">
                <span className="text-balance text-2xl font-black tracking-tight text-primary sm:text-3xl lg:text-4xl">
                  {metric.value}
                </span>
                <span className="mt-1 min-h-[2lh] whitespace-pre-line text-balance text-xs font-semibold leading-snug text-on-surface-variant sm:text-sm">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsPhotoOpen(true)}
          className="relative mx-auto cursor-zoom-in justify-self-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:justify-self-end"
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
    </section>
  );
}
