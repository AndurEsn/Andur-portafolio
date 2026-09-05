import { BadgeCheck, CodeXml, Eye, PenLine, ScanSearch, Waypoints } from 'lucide-react';
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
        <ol className="flex flex-col items-center md:min-w-full md:flex-row md:items-stretch">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.number} className="flex w-full max-w-xs flex-col items-center md:contents">
                <article className="flex w-full flex-col items-center rounded-xl border border-border bg-surface-lowest px-3 py-4 text-center md:min-w-0 md:flex-1">
                  <BrandGlyph icon={STEP_ICONS[step.icon]} />
                  <span className="mt-3 text-[11px] font-bold tracking-widest text-primary">{step.number}</span>
                  <h3 className="text-sm font-black tracking-tight text-on-surface sm:text-base">
                    {step.title}
                  </h3>
                </article>

                {isLast ? null : (
                  <div
                    aria-hidden="true"
                    className="h-8 w-px shrink-0 bg-border md:h-px md:w-3 md:self-center"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
