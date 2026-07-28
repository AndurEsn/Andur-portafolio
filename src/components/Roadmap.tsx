import React from 'react';
import { ROADMAP, TRANSLATIONS } from '../data';
import { Briefcase, Calendar, Laptop, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface RoadmapProps {
  language: Language;
}

export default function Roadmap({ language }: RoadmapProps) {
  const t = TRANSLATIONS[language];
  const list = ROADMAP(language);

  // Map each company to their design variables
  const getCompanyDesign = (company: string) => {
    const isEn = language === 'en';
    const compLower = company.toLowerCase();

    if (compLower.includes('yaydoo')) {
      return {
        icon: <Briefcase className="w-5 h-5 text-blue-500" />,
        iconBg: 'bg-blue-500/10 border-blue-500/20',
        barColor: 'bg-blue-600 dark:bg-blue-500',
        barStyle: { left: '0%', width: '70%' },
        subtitle: 'UX/UI Designer',
        dates: isEn ? '2019 to 2024' : '2019 a 2024'
      };
    } else if (compLower.includes('leracom')) {
      return {
        icon: <Laptop className="w-5 h-5 text-sky-500" />,
        iconBg: 'bg-sky-500/10 border-sky-500/20',
        barColor: 'bg-sky-500 dark:bg-sky-400',
        barStyle: { left: '55%', width: '25%' },
        subtitle: 'Product Designer',
        dates: '2023 - 2026'
      };
    } else {
      // Freelance
      return {
        icon: <Sparkles className="w-5 h-5 text-teal-500" />,
        iconBg: 'bg-teal-500/10 border-teal-500/20',
        barColor: 'bg-teal-600 dark:bg-teal-500',
        barStyle: { left: '78%', width: '22%' },
        subtitle: 'Product Designer',
        dates: isEn ? '2026 - Present' : '2026 - Presente',
        isActive: true
      };
    }
  };

  return (
    <section 
      id="roadmap-section"
      className="px-4 py-16 max-w-5xl mx-auto w-full transition-all duration-300 scroll-mt-28"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 id="tour-title-roadmap" className="text-2xl sm:text-4xl font-black text-on-surface tracking-tight mb-3">
          {t.roadmapTitle}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
          {t.roadmapDesc}
        </p>
      </div>

      {/* Gantt Timeline Container */}
      <div className="bg-card-bg border border-border rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="relative space-y-12">
          {list.map((item, idx) => {
            const design = getCompanyDesign(item.company);
            return (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-2 relative group"
              >
                {/* 1. Left side: Icon, Company and Role */}
                <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                  <div className={`p-3 rounded-2xl border ${design.iconBg} shrink-0 shadow-sm transition-transform group-hover:scale-110 duration-300`}>
                    {design.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-on-surface tracking-tight">
                      {item.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                      {design.subtitle}
                    </p>
                  </div>
                </div>

                {/* 2. Right side: Interactive Gantt track */}
                <div className="col-span-12 md:col-span-8 flex flex-col justify-center relative min-h-[5rem]">
                  {/* Gray background track line for desktop */}
                  <div className="hidden md:block w-full h-1.5 bg-border/40 dark:bg-border/20 rounded-full absolute top-[26px]" />

                  {/* Desktop Layout Container (absolute positioned horizontally based on dates) */}
                  <div 
                    className="hidden md:block absolute"
                    style={design.barStyle}
                  >
                    <div 
                      className={`flex items-center justify-between h-14 rounded-2xl px-5 text-white font-bold text-sm shadow-md transition-all duration-300 hover:scale-[1.02] cursor-default relative overflow-hidden ${design.barColor}`}
                    >
                      {/* Company Name inside the bar */}
                      <span className="truncate font-sans font-black tracking-wide">
                        {item.company}
                      </span>

                      {/* White dot or pulsing active indicator */}
                      <div className="flex items-center justify-center shrink-0">
                        {design.isActive ? (
                          <span className="relative flex h-3.5 w-3.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
                          </span>
                        ) : (
                          <span className="h-3 w-3 rounded-full bg-white opacity-90" />
                        )}
                      </div>
                    </div>

                    {/* Desktop Dates label right under it */}
                    <div className="mt-2 text-[11px] font-mono text-muted flex items-center gap-1 px-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-primary" />
                      <span>{design.dates}</span>
                    </div>
                  </div>

                  {/* Mobile Layout Container (fully responsive stacked) */}
                  <div className="md:hidden space-y-2 mt-1">
                    <div 
                      className={`flex items-center justify-between h-12 rounded-xl px-4 text-white font-bold text-xs shadow-sm ${design.barColor}`}
                    >
                      <span className="truncate font-sans font-black">
                        {item.company}
                      </span>
                      <div>
                        {design.isActive ? (
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                          </span>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-white opacity-90" />
                        )}
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-muted flex items-center gap-1 px-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0 text-primary" />
                      <span>{design.dates}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
