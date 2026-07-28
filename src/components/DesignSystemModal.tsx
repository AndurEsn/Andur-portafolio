import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Language, Theme } from '../types';
import { TRANSLATIONS } from '../data';
import useBodyScrollLock from '../hooks/useBodyScrollLock';
import ModalCloseButton, { modalPrimaryCloseButtonClass } from './ModalCloseButton';
import InfoTooltip from './InfoTooltip';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: Theme;
}

export default function DesignSystemModal({ isOpen, onClose, language, theme }: DesignSystemModalProps) {
  const t = TRANSLATIONS[language];
  const [testInput, setTestInput] = useState('');
  const [demoAccordionOpen, setDemoAccordionOpen] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<Theme>(theme);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) setPreviewTheme(theme);
  }, [isOpen, theme]);

  if (!isOpen) return null;

  const isDarkPreview = previewTheme === 'dark';
  const palette = isDarkPreview
    ? [
        { name: 'Primary', value: '#4090FE', className: 'bg-primary text-white border-primary/20' },
        { name: 'Secondary', value: '#AEC7F7', className: 'bg-secondary text-background border-border/20' },
        { name: 'Background', value: '#10131A', className: 'bg-background text-on-surface border-border' },
        { name: 'Surface low', value: '#0B0E14', className: 'bg-surface-lowest text-on-surface border-border' },
      ]
    : [
        { name: 'Primary', value: '#4C63F6', className: 'bg-primary text-white border-primary/20' },
        { name: 'Secondary', value: '#13193E', className: 'bg-secondary text-white border-border/20' },
        { name: 'Background', value: '#F7F9FF', className: 'bg-background text-on-surface border-border' },
        { name: 'Surface low', value: '#FFFFFF', className: 'bg-surface-lowest text-on-surface border-border' },
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="design-system-title"
        className={`relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border bg-surface-lowest shadow-2xl ${
          isDarkPreview ? 'dark theme-preview-dark' : 'theme-preview-light'
        }`}
      >
        <div className="relative shrink-0 border-b border-border bg-surface-low p-6 pr-16 sm:p-8 sm:pr-20">
          <ModalCloseButton onClick={onClose} label={t.modalClose} />
          <h3 id="design-system-title" className="text-xl font-black tracking-tight text-on-surface sm:text-2xl">
            {t.dsModalTitle}
          </h3>
          <p className="mt-1 text-xs font-medium text-on-surface-variant sm:text-sm">
            {t.dsModalSubtitle}
          </p>

          <div className="mt-5 inline-flex rounded-xl border border-border bg-surface-lowest p-1" aria-label={language === 'es' ? 'Modo de la documentación' : 'Documentation mode'}>
            <button
              onClick={() => setPreviewTheme('light')}
              aria-pressed={previewTheme === 'light'}
              className={`h-8 rounded-lg px-3 text-[11px] font-bold transition-colors ${
                previewTheme === 'light' ? 'bg-primary text-white hover:bg-primary-hover' : 'text-on-surface-variant hover:bg-surface-high'
              }`}
            >
              Light mode
            </button>
            <button
              onClick={() => setPreviewTheme('dark')}
              aria-pressed={previewTheme === 'dark'}
              className={`h-8 rounded-lg px-3 text-[11px] font-bold transition-colors ${
                previewTheme === 'dark' ? 'bg-primary text-white hover:bg-primary-hover' : 'text-on-surface-variant hover:bg-surface-high'
              }`}
            >
              Dark mode
            </button>
          </div>
        </div>

        <div className="hide-scrollbar flex-grow space-y-8 overflow-y-auto p-6 sm:p-8">
          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{t.dsPaletteTitle}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">{t.dsPaletteDesc}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {palette.map((color) => (
                <div key={color.name} className={`flex h-24 flex-col justify-between rounded-2xl border p-4 ${color.className}`}>
                  <span className="text-xs font-bold">{color.name}</span>
                  <span className="select-all font-mono text-[10px]">{color.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{t.dsTypographyTitle}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">{t.dsTypographyDesc}</p>
            <div className="space-y-4 rounded-2xl border border-border bg-surface-low p-5">
              <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                <span className="font-mono text-[10px] text-muted">display large</span>
                <span className="text-3xl font-black tracking-tight text-on-surface">Aa Bb Cc</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border/40 pb-2">
                <span className="font-mono text-[10px] text-muted">heading medium</span>
                <span className="text-xl font-extrabold text-on-surface">Typography scale</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] text-muted">body standard</span>
                <span className="max-w-sm text-right text-sm leading-relaxed text-on-surface-variant">Lorem ipsum dolor sit amet.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{t.dsShapesTitle}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">{t.dsShapesDesc}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {['rounded-xl', 'rounded-2xl', 'rounded-3xl'].map((shape) => (
                <div key={shape} className={`border border-border bg-surface-lowest p-4 text-center ${shape}`}>
                  <span className="mb-1 block text-xs font-bold text-on-surface">{shape}</span>
                  <span className="text-[10px] text-muted">{shape === 'rounded-xl' ? '12px' : shape === 'rounded-2xl' ? '16px' : '24px'}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{t.dsComponentsTitle}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">{t.dsComponentsDesc}</p>
            <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface-low p-6 md:grid-cols-2">
              <div className="space-y-4">
                <h5 className="text-xs font-black text-on-surface">Buttons</h5>
                <div className="flex flex-col gap-3">
                  <button className="flex h-12 items-center justify-center rounded-xl bg-primary px-6 font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98]">
                    {t.dsBtnPrimary}
                  </button>
                  <button className="flex h-12 items-center justify-center rounded-xl border border-border bg-surface-lowest px-6 font-bold text-on-surface transition-all hover:bg-surface-high active:scale-[0.98]">
                    {t.dsBtnSecondary}
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-xs font-black text-on-surface">Inputs and badges</h5>
                <div className="space-y-1.5">
                  <input
                    type="text"
                    value={testInput}
                    onChange={(event) => setTestInput(event.target.value)}
                    placeholder={t.dsInputPlaceholder}
                    aria-invalid="true"
                    className="h-12 w-full rounded-xl border border-error bg-error-container/30 px-4 text-xs text-on-surface transition-all placeholder:text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-error"
                  />
                  <p className="text-[11px] font-medium text-error">{language === 'es' ? 'Este campo es obligatorio.' : 'This field is required.'}</p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">{t.dsBadge}</span>
                  <span className="rounded-full border border-border bg-surface-lowest px-3.5 py-1 text-xs font-bold text-on-surface-variant">Figma</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{language === 'es' ? 'Alertas' : 'Alerts'}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              {language === 'es' ? 'Mensajes breves para confirmar acciones, informar una carga o señalar un error.' : 'Brief messages that confirm actions, communicate loading, or flag an error.'}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl border border-success/30 bg-success-container p-3 text-on-success-container">
                <CheckCircle className="h-4 w-4 shrink-0 text-success" />
                <span className="text-[11px] font-bold">{language === 'es' ? 'Acción completada' : 'Action completed'}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary-bg p-3 text-on-surface">
                <Info className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-[11px] font-bold">{language === 'es' ? 'Cargando contenido' : 'Loading content'}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-error/30 bg-error-container p-3 text-on-error-container">
                <AlertTriangle className="h-4 w-4 shrink-0 text-error" />
                <span className="text-[11px] font-bold">{language === 'es' ? 'Ocurrió un error' : 'An error occurred'}</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{t.dsAccordion}</h4>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface-lowest">
              <button
                onClick={() => setDemoAccordionOpen((open) => !open)}
                aria-expanded={demoAccordionOpen}
                className="flex w-full items-center justify-between gap-4 p-4 text-left text-xs font-bold text-on-surface transition-colors hover:bg-surface-low"
              >
                <span>{language === 'es' ? '¿Cómo funciona este componente?' : 'How does this component work?'}</span>
                {demoAccordionOpen ? <ChevronUp className="h-4 w-4 text-primary" /> : <ChevronDown className="h-4 w-4 text-primary" />}
              </button>
              {demoAccordionOpen && <p className="px-4 pb-4 pt-1 text-xs leading-relaxed text-on-surface-variant">{t.dsAccordionText}</p>}
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">{t.dsTooltipTitle}</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">{t.dsTooltipDesc}</p>
            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-low p-3 text-xs font-bold text-on-surface">
              <span>{t.labAnimation}</span>
              <InfoTooltip label={t.labAnimationHelpLabel} placement="top" align="left">{t.dsTooltipExample}</InfoTooltip>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="text-sm font-black text-on-surface">Modal</h4>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              {language === 'es' ? 'Una ventana enfocada: el fondo queda inmóvil y solo su contenido puede desplazarse.' : 'A focused window: the page behind stays still and only its content can scroll.'}
            </p>
            <div className="rounded-2xl border border-border bg-surface-low p-4 sm:p-6">
              <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-lowest shadow-lg">
                <div className="border-b border-border p-4">
                  <span className="text-xs font-black text-on-surface">{language === 'es' ? 'Título del modal' : 'Modal title'}</span>
                </div>
                <p className="p-4 text-xs leading-relaxed text-on-surface-variant">{language === 'es' ? 'Contenido desplazable y acciones claras.' : 'Scrollable content with clear actions.'}</p>
                <div className="border-t border-border bg-surface-low p-3">
                  <div className="flex h-9 items-center justify-center rounded-xl bg-primary text-[11px] font-bold text-white">{t.modalClose}</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-surface-low p-4 sm:p-6">
              <p className="mb-3 text-xs font-black text-on-surface">{language === 'es' ? 'Tour flotante' : 'Floating tour'}</p>
              <div className="mx-auto max-w-sm rounded-2xl border-2 border-primary/50 bg-surface-lowest p-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-border/40 pb-2">
                  <span className="text-[11px] font-black text-primary">{language === 'es' ? 'Recorrido guiado' : 'Guided tour'}</span>
                  <span className="rounded-md bg-surface-low px-2 py-0.5 text-[10px] font-bold text-muted">1 / 4</span>
                </div>
                <p className="py-3 text-xs leading-relaxed text-on-surface-variant">
                  {language === 'es' ? 'Permanece visible mientras puedes seguir recorriendo la página.' : 'It stays visible while you keep exploring the page.'}
                </p>
                <div className="flex justify-end border-t border-border/40 pt-3">
                  <span className="rounded-lg bg-primary px-3 py-2 text-[10px] font-bold text-white">{language === 'es' ? 'Siguiente' : 'Next'}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex shrink-0 gap-3 border-t border-border bg-surface-low p-4">
          <button onClick={onClose} className={modalPrimaryCloseButtonClass}>
            {t.modalClose}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
