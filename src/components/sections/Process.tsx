import { ArrowDown, ArrowRight, BadgeCheck, CodeXml, Eye, PenLine, ScanSearch, Waypoints } from 'lucide-react';
import BrandGlyph from '../ui/BrandGlyph';
import { Language, ProcessStepIcon } from '../../types';
import { PROCESS_STEPS, TRANSLATIONS } from '../../content/data';

interface ProcessProps {
  language: Language;
}

const STEP_ICONS = {
  understand: Eye,
  research: ScanSearch,
  define: Waypoints,
  sketch: PenLine,
  validate: BadgeCheck,
  build: CodeXml,
} as const satisfies Record<ProcessStepIcon, typeof Eye>;

export default function Process({ language }: ProcessProps) {
  const t = TRANSLATIONS[language];
  const steps = PROCESS_STEPS(language);

  return (
    <section
      id="process-section"
      className="mx-auto w-full max-w-7xl px-4 py-section transition-all duration-300"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 id="tour-title-process" className="text-2xl font-black tracking-tight text-on-surface sm:text-4xl">
          {t.processTitle}
        </h2>
      </div>

      <div
        className="md:overflow-x-auto md:hide-scrollbar md:focus-visible:outline-none md:focus-visible:ring-2 md:focus-visible:ring-primary"
        tabIndex={0}
        role="region"
        aria-labelledby="tour-title-process"
      >
        <ol className="flex flex-col md:w-max md:min-w-full md:flex-row md:items-start">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li
                key={step.number}
                className={`flex flex-col md:flex-row md:items-start ${isLast ? 'md:flex-none' : 'md:flex-1'}`}
              >
                <div className="flex items-center gap-4 md:w-24 md:shrink-0 md:flex-col md:items-center md:gap-3 md:text-center">
                  <BrandGlyph icon={STEP_ICONS[step.icon]} shape="circle" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold tracking-widest text-primary">{step.number}</span>
                    <h3 className="text-sm font-black tracking-tight text-on-surface sm:text-base">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {isLast ? null : (
                  <div
                    aria-hidden="true"
                    className="relative ml-6 h-10 w-px bg-border md:ml-0 md:mt-6 md:h-px md:min-w-8 md:flex-1 md:self-start"
                  >
                    <ArrowDown className="absolute -bottom-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 bg-background text-on-surface-variant md:hidden" />
                    <ArrowRight className="absolute -right-1.5 top-1/2 hidden h-3.5 w-3.5 -translate-y-1/2 bg-background text-on-surface-variant md:block" />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
