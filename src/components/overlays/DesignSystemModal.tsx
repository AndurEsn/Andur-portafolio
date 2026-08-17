import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Briefcase, CheckCircle, ChevronDown, ChevronUp, Clock3, FolderKanban, Info, Laptop, Smartphone, Sparkles, Tablet, Workflow } from 'lucide-react';
import BrandGlyph from '../ui/BrandGlyph';
import { Language, Theme } from '../../types';
import { DESIGN_BREAKPOINTS, TRANSLATIONS } from '../../content/data';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';
import InfoTooltip from '../ui/InfoTooltip';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: Theme;
}

export default function DesignSystemModal({ isOpen, onClose, language, theme }: DesignSystemModalProps) {
  const t = TRANSLATIONS[language];
  const [demoAccordionOpen, setDemoAccordionOpen] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<Theme>(theme);

  useBodyScrollLock(isOpen);
  const requestClose = useModalDismiss(isOpen, onClose);

  useEffect(() => {
    if (isOpen) setPreviewTheme(theme);
  }, [isOpen, theme]);

  if (!isOpen) return null;

  const isDarkPreview = previewTheme === 'dark';
  const breakpointIcons = {
    laptop: Laptop,
    tablet: Tablet,
    phone: Smartphone,
  } as const;
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
    <div className="fixed inset-0 z-[80] flex items-stretch justify-center sm:items-center sm:p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={requestClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none sm:pointer-events-auto"
      />

      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="design-system-title"
        className={`relative z-10 flex h-dvh w-full max-h-dvh flex-col overflow-hidden rounded-none border-0 bg-surface-lowest shadow-2xl sm:h-auto sm:max-h-[85vh] sm:max-w-3xl sm:rounded-3xl sm:border sm:border-border ${
          isDarkPreview ? 'dark theme-preview-dark' : 'theme-preview-light'
        }`}
      >
        <div className="relative shrink-0 border-b border-border bg-surface-low p-6 pr-16 sm:p-8 sm:pr-20">
          <ModalCloseButton onClick={requestClose} label={t.modalClose} />
          <h3 id="design-system-title" className="typo-modal-title">
            {t.dsModalTitle}
          </h3>
          <p className="typo-modal-subtitle">
            {t.dsModalSubtitle}
          </p>

          <div className="mt-5 inline-flex gap-1.5 rounded-xl border border-border bg-surface-lowest p-1" aria-label={language === 'es' ? 'Modo de la documentación' : 'Documentation mode'}>
            <button
              onClick={() => setPreviewTheme('light')}
              aria-pressed={previewTheme === 'light'}
              className={`h-8 cursor-pointer rounded-lg px-3 text-[11px] font-bold transition-colors ${
                previewTheme === 'light' ? 'bg-primary text-white hover:bg-primary-hover' : 'text-on-surface-variant hover:bg-surface-high'
              }`}
            >
              Light mode
            </button>
            <button
              onClick={() => setPreviewTheme('dark')}
              aria-pressed={previewTheme === 'dark'}
              className={`h-8 cursor-pointer rounded-lg px-3 text-[11px] font-bold transition-colors ${
                previewTheme === 'dark' ? 'bg-primary text-white hover:bg-primary-hover' : 'text-on-surface-variant hover:bg-surface-high'
              }`}
            >
              Dark mode
            </button>
          </div>
        </div>

        <div className="hide-scrollbar flex-grow space-y-8 overflow-y-auto p-6 sm:p-8">
          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{t.dsPaletteTitle}</h4>
            <p className="typo-overlay-body">{t.dsPaletteDesc}</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {palette.map((color) => (
                <div key={color.name} className={`flex h-24 flex-col justify-between rounded-2xl border p-4 ${color.className}`}>
                  <span className="text-xs font-bold">{color.name}</span>
                  <span className="select-all font-mono text-[10px]">{color.value}</span>
                </div>
              ))}
            </div>
            <div className="splash-bg flex h-24 flex-col justify-between rounded-2xl border border-border p-4 text-on-surface">
              <span className="text-xs font-bold">{t.dsPaletteSplash}</span>
              <span className="font-mono text-[10px] text-on-surface-variant">165deg · primary → primary-bg → background</span>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{t.dsTypographyTitle}</h4>
            <p className="typo-overlay-body">{t.dsTypographyDesc}</p>
            <div className="space-y-4 rounded-2xl border border-border bg-surface-low p-5">
              {[
                { token: 'display large', className: 'text-3xl font-black tracking-tight text-on-surface', sample: 'Aa Bb Cc' },
                { token: 'heading medium', className: 'text-xl font-extrabold text-on-surface', sample: 'Typography scale' },
                { token: 'body standard', className: 'text-sm leading-relaxed text-on-surface-variant', sample: 'Lorem ipsum dolor sit amet.' },
                { token: 'modal title', className: 'typo-modal-title', sample: 'Aa Bb Cc' },
                { token: 'modal subtitle', className: 'typo-modal-subtitle mt-0', sample: 'Subtitle copy' },
                { token: 'overlay heading', className: 'typo-overlay-heading', sample: 'Section title' },
                { token: 'overlay body', className: 'typo-overlay-body', sample: 'Lorem ipsum dolor sit amet.' },
              ].map((row) => (
                <div key={row.token} className="flex flex-col gap-1 border-b border-border/40 pb-2 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <span className="shrink-0 font-mono text-[10px] text-muted">{row.token}</span>
                  <span className={`min-w-0 break-words sm:text-right ${row.className}`}>{row.sample}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{t.dsShapesTitle}</h4>
            <p className="typo-overlay-body">{t.dsShapesDesc}</p>
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
            <h4 className="typo-overlay-heading">{t.dsIconsTitle}</h4>
            <p className="typo-overlay-body">{t.dsIconsDesc}</p>
            <div className="flex flex-wrap gap-4 rounded-2xl border border-border bg-surface-low p-5">
              <BrandGlyph icon={FolderKanban} label={language === 'es' ? 'Proyectos' : 'Projects'} />
              <BrandGlyph icon={Workflow} label={language === 'es' ? 'Flujos' : 'Flows'} />
              <BrandGlyph icon={Clock3} label={language === 'es' ? 'Horas' : 'Hours'} />
              <BrandGlyph icon={Briefcase} label="Yaydoo" />
              <BrandGlyph icon={Laptop} label="Leracom AI" />
              <BrandGlyph icon={Sparkles} label="Freelance" />
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{t.dsBreakpointsTitle}</h4>
            <div className="space-y-3">
              {DESIGN_BREAKPOINTS(language).map((breakpoint) => (
                <div
                  key={breakpoint.id}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface-lowest p-4"
                >
                  <BrandGlyph
                    icon={breakpointIcons[breakpoint.icon]}
                    label={breakpoint.title}
                  />
                  <div className="min-w-0">
                    <p className="typo-overlay-heading">{breakpoint.title}</p>
                    <p className="typo-overlay-body">{breakpoint.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{t.dsComponentsTitle}</h4>
            <p className="typo-overlay-body">{t.dsComponentsDesc}</p>
            <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface-low p-6 md:grid-cols-2">
              <div className="space-y-4">
                <h5 className="text-xs font-black text-on-surface">Buttons</h5>
                <div className="flex flex-col gap-3">
                  <button className="flex h-12 cursor-pointer items-center justify-center rounded-xl bg-primary px-6 font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98]">
                    {t.dsBtnPrimary}
                  </button>
                  <button className="flex h-12 cursor-pointer items-center justify-center rounded-xl border border-border bg-surface-lowest px-6 font-bold text-on-surface transition-all hover:bg-surface-high active:scale-[0.98]">
                    {t.dsBtnSecondary}
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-xs font-black text-on-surface">{language === 'es' ? 'Insignias' : 'Badges'}</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">{t.dsBadge}</span>
                  <span className="rounded-full border border-border bg-surface-lowest px-3.5 py-1 text-xs font-bold text-on-surface-variant">Figma</span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{language === 'es' ? 'Alertas' : 'Alerts'}</h4>
            <p className="typo-overlay-body">
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
            <h4 className="typo-overlay-heading">{t.dsAccordion}</h4>
            <div className="overflow-hidden rounded-2xl border border-border bg-card-bg transition-all duration-300">
              <button
                onClick={() => setDemoAccordionOpen((open) => !open)}
                aria-expanded={demoAccordionOpen}
                className="group flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-sm font-bold text-on-surface transition-colors group-hover:text-primary sm:text-base">
                  {language === 'es' ? '¿Cómo funciona este componente?' : 'How does this component work?'}
                </span>
                <span className="rounded-lg bg-surface p-1 text-muted">
                  {demoAccordionOpen ? (
                    <ChevronUp className="h-4 w-4 text-primary" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </span>
              </button>
              {demoAccordionOpen && (
                <div className="border-t border-border/40 px-6 py-6 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                  {t.dsAccordionText}
                </div>
              )}
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{t.dsTooltipTitle}</h4>
            <p className="typo-overlay-body">{t.dsTooltipDesc}</p>
            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-low p-3 text-xs font-bold text-on-surface">
              <span>{t.labAnimation}</span>
              <InfoTooltip label={t.labAnimationHelpLabel} placement="top" align="left">{t.dsTooltipExample}</InfoTooltip>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">Modal</h4>
            <p className="typo-overlay-body">
              {language === 'es'
                ? 'En móvil ocupa toda la pantalla. Se cierra con el icono o con atrás. En escritorio también puedes pulsar fuera.'
                : 'On mobile it fills the screen. Close with the icon or Back. On desktop you can also press outside.'}
            </p>
            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="bg-black/60 p-6 backdrop-blur-sm sm:p-8">
                <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-lowest shadow-2xl">
                  <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-low px-4 py-3">
                    <span className="text-xs font-black text-on-surface">{language === 'es' ? 'Título del modal' : 'Modal title'}</span>
                    <ModalCloseButton placement="inline" onClick={() => undefined} label={t.modalClose} />
                  </div>
                  <p className="p-4 text-xs leading-relaxed text-on-surface-variant">
                    {language === 'es'
                      ? 'Contenido desplazable. En móvil cierra con el icono o con atrás.'
                      : 'Scrollable content. On mobile, close with the icon or Back.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h4 className="typo-overlay-heading">{language === 'es' ? 'Tarjeta de proyecto' : 'Project card'}</h4>
            <p className="typo-overlay-body">
              {language === 'es'
                ? 'Toda la tarjeta es clicable. Abre el detalle sin depender solo del botón.'
                : 'The whole card is clickable. It opens the detail without relying only on the button.'}
            </p>
            <button
              type="button"
              className="w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface-lowest text-left transition-all hover:border-primary/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="h-24 bg-primary-bg" />
              <div className="space-y-2 p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{language === 'es' ? 'Producto' : 'Product'}</span>
                <p className="typo-overlay-heading">{language === 'es' ? 'Nombre del proyecto' : 'Project name'}</p>
                <p className="typo-overlay-body">{language === 'es' ? 'Resumen breve del caso de estudio.' : 'Short case study summary.'}</p>
                <span className="mt-2 flex h-10 items-center justify-center rounded-xl border border-primary/20 bg-primary-bg/40 text-xs font-bold text-primary">
                  {t.viewProject}
                </span>
              </div>
            </button>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
