import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, TRANSLATIONS } from '../../content/data';
import { Project, ProjectCategory, Language } from '../../types';
import { ExternalLink, Calendar, Shield, Cpu, Sparkles } from 'lucide-react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';

interface PortfolioProps {
  language: Language;
}

export default function Portfolio({ language }: PortfolioProps) {
  const t = TRANSLATIONS[language];
  const list = PROJECTS(language);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  useBodyScrollLock(Boolean(activeProject));
  const closeProject = useModalDismiss(Boolean(activeProject), () => setActiveProject(null));

  // Filter projects based on selected chip (by Category or by Company)
  const filteredProjects = selectedFilter === 'All'
    ? list
    : list.filter(p => {
        if (p.category === selectedFilter) return true;
        if (p.company) {
          const companyNormalized = p.company.toLowerCase();
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

  const filterOptions = [
    'All',
    'Website',
    'Product',
    'UX Research',
    'Leracom',
    'Yaydoo',
    language === 'es' ? 'Independiente' : 'Independent'
  ];

  return (
    <section 
      id="tour-step-projects"
      className="px-4 py-section max-w-7xl mx-auto w-full transition-all duration-300"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 id="tour-title-projects" className="text-2xl sm:text-4xl font-black text-on-surface tracking-tight mb-3">
          {t.portfolioTitle}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
          {t.portfolioDesc}
        </p>
      </div>

      {/* Categories / Filter Chips */}
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

      {/* Projects Single-Column/Grid List */}
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
            {/* Project Image Panel */}
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-low">
              <img 
                src={project.image} 
                alt={project.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-background/90 dark:bg-surface-container/90 backdrop-blur-md text-xs font-bold text-primary rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Copy Panel */}
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

              {/* Card Action */}
              <span className="w-full h-12 bg-primary-bg/40 text-primary border border-primary/20 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all group-hover:bg-primary group-hover:text-white group-hover:border-transparent duration-200">
                {t.viewProject}
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Scrollable Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[80] flex items-stretch justify-center sm:items-center sm:p-4">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none sm:pointer-events-auto"
            />

            {/* Modal Body: Slide Up Animation */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative z-10 flex h-dvh w-full max-h-dvh flex-col overflow-hidden rounded-none border-0 bg-surface-lowest shadow-2xl sm:h-auto sm:max-h-[85vh] sm:max-w-2xl sm:rounded-3xl sm:border sm:border-border"
            >
              {/* Image banner inside modal */}
              <div className="relative h-48 sm:h-64 overflow-hidden bg-surface-low shrink-0">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider mb-2 inline-block">
                    {activeProject.category}
                  </span>
                  <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activeProject.title}
                  </h3>
                </div>

                {/* Close Button */}
                <ModalCloseButton onClick={closeProject} label={t.modalClose} />
              </div>

              {/* Scrollable Project Reading Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6 hide-scrollbar">
                {/* Project Specs */}
                <div className="grid grid-cols-2 gap-4 bg-surface-low border border-border rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-muted block">
                        {t.modalRole}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-on-surface">{activeProject.role}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-muted block">
                        {t.modalDuration}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-on-surface">{activeProject.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Impact Highlight */}
                <div className="border border-primary/20 bg-primary-bg/10 rounded-2xl p-5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-1">
                      {t.modalImpact}
                    </h4>
                    <p className="text-sm font-semibold text-on-surface leading-normal">
                      {activeProject.impact}
                    </p>
                  </div>
                </div>

                {/* Deep Dive Description */}
                <div>
                  <h4 className="text-sm font-black text-on-surface uppercase tracking-wider mb-2">
                    {t.modalSummary}
                  </h4>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {activeProject.fullDescription}
                  </p>
                </div>

                {/* Technical stack / Tools */}
                <div>
                  <h4 className="text-sm font-black text-on-surface uppercase tracking-wider mb-2">
                    {t.modalTools}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3.5 py-1.5 bg-surface-low border border-border rounded-xl text-xs font-semibold text-on-surface-variant flex items-center gap-1.5"
                      >
                        <Cpu className="w-3.5 h-3.5 text-primary" />
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
