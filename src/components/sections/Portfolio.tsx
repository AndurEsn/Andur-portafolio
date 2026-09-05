import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, TRANSLATIONS } from '../../content/data';
import { Language, Project, ProjectImpactStat, ProjectProcessStep, ProjectSection, Theme } from '../../types';
import { Calendar, Shield, Cpu, Maximize2 } from 'lucide-react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';

interface PortfolioProps {
  language: Language;
  theme: Theme;
}

function RichInline({ text }: { text: string }): React.ReactElement {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={index} className="font-semibold text-on-surface">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

function RichText({ text, className }: { text: string; className?: string }): React.ReactElement {
  return (
    <div className={`space-y-3 ${className ?? ''}`}>
      {text.split('\n\n').map((paragraph) => (
        <p key={paragraph} className="text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <RichInline text={paragraph} />
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }): React.ReactElement {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm sm:text-base leading-relaxed text-on-surface-variant">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>
            <RichInline text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function ImpactStats({ stats }: { stats: ProjectImpactStat[] }): React.ReactElement {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={`${stat.value}-${stat.label}`}
          className="rounded-2xl border border-primary/20 bg-primary-bg/10 px-4 py-4"
        >
          <p className="text-2xl font-black tracking-tight text-primary">{stat.value}</p>
          <p className="mt-1 text-xs font-semibold leading-snug text-on-surface-variant">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function CaseProcessStep({
  step,
  detailed,
  isLast,
  theme,
}: {
  step: ProjectProcessStep;
  detailed: boolean;
  isLast: boolean;
  theme: Theme;
}) {
  const numeral = step.number.replace(/^0/, '');
  const stepImage = theme === 'dark' && step.imageDark ? step.imageDark : step.image;

  return (
    <article className="relative flex gap-4">
      <div className="flex w-10 shrink-0 flex-col items-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-surface-lowest text-sm font-black text-primary">
          {numeral}
        </span>
        {isLast ? null : <span aria-hidden="true" className="w-px min-h-8 flex-1 bg-primary" />}
      </div>
      <div className="min-w-0 flex-1 pb-8">
        <h5 className="text-base font-black tracking-tight text-on-surface">{step.title}</h5>
        {step.duration ? (
          <span className="text-xs font-bold uppercase tracking-wider text-muted">{step.duration}</span>
        ) : null}
        <div className="mt-3 space-y-3">
          {detailed ? <RichText text={step.body} /> : <RichText text={step.body.split('\n\n')[0]} />}
          {detailed && step.items ? <BulletList items={step.items} /> : null}
          {detailed && step.closing ? <RichText text={step.closing} /> : null}
          {stepImage ? (
            <img
              src={stepImage}
              alt={step.imageAlt ?? ''}
              className="mt-1 w-full rounded-xl border border-border object-contain"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

function CaseSection({
  section,
  detailed,
  theme,
}: {
  section: ProjectSection;
  detailed: boolean;
  theme: Theme;
}): React.ReactElement | null {
  if (!detailed && section.detailOnly) return null;

  const isProductList = section.id === 'products';

  return (
    <section className="space-y-4">
      <div>
        <h4 className="text-lg font-black tracking-tight text-on-surface sm:text-xl">{section.title}</h4>
        {section.subtitle ? (
          <p className="mt-1 text-sm font-bold text-primary">{section.subtitle}</p>
        ) : null}
      </div>
      {detailed && section.detailBody ? <RichText text={section.detailBody} /> : null}
      {section.body ? (
        <RichText text={detailed || section.detailBody ? section.body : section.body.split('\n\n')[0]} />
      ) : null}
      {section.stats ? <ImpactStats stats={section.stats} /> : null}
      {detailed && section.items ? (
        isProductList ? (
          <div className="flex flex-wrap gap-2">
            {section.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface-low px-3.5 py-1.5 text-xs font-semibold text-on-surface"
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <BulletList items={section.items} />
        )
      ) : null}
      {detailed && section.closing ? <RichText text={section.closing} /> : null}
      {section.steps ? (
        <div className="mt-2">
          {section.steps.map((step, index, allSteps) => (
            <div key={step.number}>
              <CaseProcessStep
                step={step}
                detailed={detailed}
                isLast={index === allSteps.length - 1}
                theme={theme}
              />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function Portfolio({ language, theme }: PortfolioProps) {
  const t = TRANSLATIONS[language];
  const list = PROJECTS(language);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [detailed, setDetailed] = useState(true);
  useBodyScrollLock(Boolean(activeProject));
  const closeProject = useModalDismiss(Boolean(activeProject), () => setActiveProject(null));

  useEffect(() => {
    const root = document.documentElement;
    if (!activeProject) return;
    root.classList.add('project-modal-open');
    return () => root.classList.remove('project-modal-open');
  }, [activeProject]);

  const openProject = (project: Project) => {
    setDetailed(true);
    setActiveProject(project);
  };

  useEffect(() => {
    if (activeProject) setDetailed(true);
  }, [activeProject]);

  const filterOptions = useMemo(() => {
    const categories = [...new Set(list.map((project) => project.category))];
    const companies = [...new Set(list.map((project) => project.company).filter(Boolean))] as string[];
    return ['All', ...categories, ...companies];
  }, [list]);

  const filteredProjects = selectedFilter === 'All'
    ? list
    : list.filter((project) => {
        if (project.category === selectedFilter) return true;
        if (project.company) {
          const companyNormalized = project.company.toLowerCase();
          const filterNormalized = selectedFilter.toLowerCase();
          if (companyNormalized === filterNormalized) return true;
          if (
            (filterNormalized === 'independent' || filterNormalized === 'independiente') &&
            (companyNormalized === 'independent' || companyNormalized === 'independiente')
          ) {
            return true;
          }
        }
        return false;
      });

  return (
    <section
      id="tour-step-projects"
      className="px-4 py-section max-w-7xl mx-auto w-full transition-all duration-300"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 id="tour-title-projects" className="text-2xl font-black tracking-tight text-on-surface sm:text-4xl">
          {t.portfolioTitle}
        </h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2 lg:flex-nowrap lg:overflow-x-auto lg:pb-6 lg:snap-x lg:hide-scrollbar">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setSelectedFilter(option)}
            className={`h-10 rounded-full px-6 text-xs font-bold transition-all duration-200 cursor-pointer sm:text-sm lg:snap-start lg:shrink-0 ${
              selectedFilter === option
                ? 'bg-primary text-white shadow-md scale-105'
                : 'bg-surface-low border border-border text-on-surface-variant hover:text-on-surface hover:bg-surface-high'
            }`}
          >
            {option === 'All' ? t.portfolioAll : option}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => {
          const cardLabel = project.cardTitle ?? project.title;
          return (
          <article
            key={project.id}
            role="button"
            tabIndex={0}
            aria-label={`${/[.!?…]$/.test(cardLabel) ? cardLabel : `${cardLabel}.`} ${t.viewProject}`}
            onClick={() => openProject(project)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openProject(project);
              }
            }}
            className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-2xl border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <img
              src={project.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </article>
          );
        })}
      </div>

      {createPortal(
        <AnimatePresence>
          {activeProject ? (
          <div className="fixed inset-0 z-[80] flex items-stretch justify-center sm:items-center sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none sm:pointer-events-auto"
            />

            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative z-10 flex h-dvh w-full max-h-dvh flex-col overflow-hidden rounded-none border-0 bg-surface-lowest shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-3xl sm:border sm:border-border"
            >
              <ModalCloseButton onClick={closeProject} label={t.modalClose} icon="collapse" />

              <div className="min-h-0 flex-1 overflow-y-auto hide-scrollbar" data-modal-scroll>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-low">
                  <img
                    src={activeProject.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="sticky top-0 z-10 flex justify-center bg-surface-lowest/95 py-3 backdrop-blur-md">
                  <div
                    className="flex w-[240px] rounded-full border border-border bg-surface-low p-1"
                    role="group"
                    aria-label={`${t.modalDetail} / ${t.modalBrief}`}
                  >
                    <button
                      type="button"
                      onClick={() => setDetailed(true)}
                      className={`h-9 min-w-0 flex-1 rounded-full text-xs font-bold transition-colors ${
                        detailed ? 'bg-primary text-white' : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {t.modalDetail}
                    </button>
                    <button
                      type="button"
                      onClick={() => setDetailed(false)}
                      className={`h-9 min-w-0 flex-1 rounded-full text-xs font-bold transition-colors ${
                        detailed ? 'text-on-surface-variant hover:text-on-surface' : 'bg-primary text-white'
                      }`}
                    >
                      {t.modalBrief}
                    </button>
                  </div>
                </div>

                <div className="space-y-8 px-6 pt-6 pb-6 sm:px-8 sm:pb-8">
                <header className="space-y-3">
                  <h3 id="project-modal-title" className="text-2xl font-black tracking-tight text-on-surface sm:text-3xl">
                    {activeProject.title}
                  </h3>
                  {activeProject.eyebrow ? (
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {activeProject.eyebrow}
                    </p>
                  ) : null}
                  {activeProject.subtitle ? (
                    <p className="text-base font-semibold leading-snug text-on-surface sm:text-lg">
                      {activeProject.subtitle}
                    </p>
                  ) : null}
                  {detailed && activeProject.intro ? <RichText text={activeProject.intro} /> : null}
                </header>

                <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-surface-low p-4">
                  {activeProject.logo ? (
                    <div className="flex h-8 w-[calc((100%-2rem)/3)] min-w-[11rem] max-w-full shrink-0 items-center">
                      <img
                        src={activeProject.logo}
                        alt={activeProject.company ?? ''}
                        className="brand-logo h-8 w-full object-contain object-left"
                      />
                    </div>
                  ) : null}
                  <div className="flex w-[calc((100%-2rem)/3)] min-w-[11rem] max-w-full shrink-0 items-start gap-3">
                    <div className="shrink-0 rounded-xl bg-primary/10 p-2">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase text-muted">
                        {t.modalRole}
                      </span>
                      <span className="block text-xs font-bold break-words text-on-surface sm:text-sm">{activeProject.role}</span>
                    </div>
                  </div>

                  <div className="flex w-[calc((100%-2rem)/3)] min-w-[11rem] max-w-full shrink-0 items-start gap-3">
                    <div className="shrink-0 rounded-xl bg-primary/10 p-2">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase text-muted">
                        {t.modalDuration}
                      </span>
                      <span className="block text-xs font-bold break-words text-on-surface sm:text-sm">{activeProject.duration}</span>
                    </div>
                  </div>
                </div>

                {activeProject.sections.map((section) => (
                  <div key={section.id}>
                    <CaseSection section={section} detailed={detailed} theme={theme} />
                  </div>
                ))}

                <div>
                  <h4 className="mb-3 text-sm font-black uppercase tracking-wider text-on-surface">
                    {t.modalTools}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="flex items-center gap-1.5 rounded-xl border border-border bg-surface-low px-3.5 py-1.5 text-xs font-semibold text-on-surface-variant"
                      >
                        <Cpu className="h-3.5 w-3.5 text-primary" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
          ) : null}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
