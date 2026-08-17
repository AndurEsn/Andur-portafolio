import React from 'react';
import { ROADMAP, TRANSLATIONS } from '../../content/data';
import { Briefcase, Laptop, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import BrandGlyph from '../ui/BrandGlyph';

interface RoadmapProps {
  language: Language;
}

export default function Roadmap({ language }: RoadmapProps) {
  const t = TRANSLATIONS[language];
  const list = ROADMAP(language);

  const getCompanyDesign = (company: string) => {
    const compLower = company.toLowerCase();

    if (compLower.includes('yaydoo')) {
      return {
        icon: Briefcase,
        barColor: 'bg-blue-600 dark:bg-blue-500',
        barStyle: { left: '0%', width: '79%' },
      };
    }

    if (compLower.includes('leracom')) {
      return {
        icon: Laptop,
        barColor: 'bg-sky-500 dark:bg-sky-400',
        barStyle: { left: '57%', width: '35%' },
      };
    }

    return {
      icon: Sparkles,
      barColor: 'bg-teal-600 dark:bg-teal-500',
      barStyle: { left: '86%', width: '14%' },
      isActive: true,
    };
  };

  return (
    <section 
      id="roadmap-section"
      className="px-4 py-section max-w-7xl mx-auto w-full transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <h2 id="tour-title-roadmap" className="text-2xl sm:text-4xl font-black text-on-surface tracking-tight mb-3">
          {t.roadmapTitle}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
          {t.roadmapDesc}
        </p>
      </div>

      <div className="bg-card-bg border border-border rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <div className="relative space-y-12">
          {list.map((item, idx) => {
            const design = getCompanyDesign(item.company);
            const timeLabel = item.years;
            return (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-2 relative group"
              >
                <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <BrandGlyph icon={design.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-on-surface tracking-tight">
                      {item.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-8 flex flex-col justify-center relative min-h-[5rem]">
                  <div className="hidden md:block w-full h-1.5 bg-border/40 dark:bg-border/20 rounded-full absolute top-[26px]" />

                  <div 
                    className="hidden md:block absolute"
                    style={design.barStyle}
                  >
                    <div 
                      className={`flex items-center justify-between h-14 rounded-2xl px-5 text-white font-bold text-sm shadow-md transition-all duration-300 hover:scale-[1.02] cursor-default relative overflow-hidden ${design.barColor}`}
                    >
                      <span className="truncate font-sans font-black tracking-wide">
                        {item.company}
                      </span>

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

                    <div className="mt-2 text-[11px] font-mono text-muted px-1">
                      <span>{timeLabel}</span>
                    </div>
                  </div>

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

                    <div className="text-[11px] font-mono text-muted px-1">
                      <span>{timeLabel}</span>
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
