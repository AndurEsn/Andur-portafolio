import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, TRANSLATIONS } from '../../content/data';
import { Language, Project, ProjectImpactStat, ProjectProcessStep, ProjectSection } from '../../types';
import { ExternalLink, Calendar, Shield, Cpu } from 'lucide-react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';

interface PortfolioProps {
  language: Language;
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

function ProcessStep({ step }: { step: ProjectProcessStep }): React.ReactElement {
  return (
    <article className="relative pl-12">
      <span className="absolute left-0 top-0 text-sm font-black tracking-widest text-primary">
        {step.number}
      </span>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h5 className="text-base font-black tracking-tight text-on-surface">{step.title}</h5>
        {step.duration ? (
          <span className="text-xs font-bold uppercase tracking-wider text-muted">{step.duration}</span>
        ) : null}
      </div>
      <div className="mt-3 space-y-3">
        <RichText text={step.body} />
        {step.items ? <BulletList items={step.items} /> : null}
        {step.closing ? <RichText text={step.closing} /> : null}
      </div>
    </article>
  );
}

function CaseSection({ section }: { section: ProjectSection }): React.ReactElement {
  const isProductList = section.id === 'products';

  return (
    <section className="space-y-4">
      <div>
        <h4 className="text-lg font-black tracking-tight text-on-surface sm:text-xl">{section.title}</h4>
        {section.subtitle ? (
          <p className="mt-1 text-sm font-bold text-primary">{section.subtitle}</p>
        ) : null}
      </div>
      {section.body ? <RichText text={section.body} /> : null}
      {section.stats ? <ImpactStats stats={section.stats} /> : null}
      {section.items ? (
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
      {section.closing ? <RichText text={section.closing} /> : null}
      {section.steps ? (
        <div className="space-y-8">
          {section.steps.map((step) => (
            <div key={step.number}>
              <ProcessStep step={step} />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function Portfolio({ language }: PortfolioProps) {
  const t = TRANSLATIONS[language];
  const list = PROJECTS(language);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  useBodyScrollLock(Boolean(activeProject));
  const closeProject = useModalDismiss(Boolean(activeProject), () => setActiveProject(null));

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
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            role="button"
            tabIndex={0}
            onClick={() => setActiveProject(project)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setActiveProject(project);
              }
            }}
            className="flex flex-col bg-surface-lowest rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:border-primary/40 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-low">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-background/90 dark:bg-surface-container/90 backdrop-blur-md text-xs font-bold text-primary rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <div className="mb-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                  {project.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
              </div>

              <span className="w-full h-12 bg-primary-bg/40 text-primary border border-primary/20 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all group-hover:bg-primary group-hover:text-white group-hover:border-transparent duration-200">
                {t.viewProject}
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
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
              <div className="relative h-52 shrink-0 overflow-hidden bg-surface-low sm:h-72">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full w-full object-contain object-center"
                />
                <ModalCloseButton onClick={closeProject} label={t.modalClose} />
              </div>

              <div className="flex-grow space-y-8 overflow-y-auto p-6 hide-scrollbar sm:p-8">
                <header className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {activeProject.eyebrow}
                  </p>
                  <h3 id="project-modal-title" className="text-2xl font-black tracking-tight text-on-surface sm:text-3xl">
                    {activeProject.title}
                  </h3>
                  <p className="text-base font-semibold leading-snug text-on-surface sm:text-lg">
                    {activeProject.subtitle}
                  </p>
                  <RichText text={activeProject.intro} />
                </header>

                <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-surface-low p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted">
                        {t.modalRole}
                      </span>
                      <span className="text-xs font-bold text-on-surface sm:text-sm">{activeProject.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-muted">
                        {t.modalDuration}
                      </span>
                      <span className="text-xs font-bold text-on-surface sm:text-sm">{activeProject.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary">
                    {t.modalImpact}
                  </h4>
                  <ImpactStats stats={activeProject.impactStats} />
                </div>

                {activeProject.sections.map((section) => (
                  <div key={section.id}>
                    <CaseSection section={section} />
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
