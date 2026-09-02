import { RefreshCw, Search, UsersRound } from 'lucide-react';
import BrandGlyph from '../ui/BrandGlyph';
import { Language, ApproachStageIcon } from '../../types';
import { APPROACH_STAGES, TRANSLATIONS } from '../../content/data';

interface ApproachProps {
  language: Language;
}

const STAGE_ICONS = {
  understand: Search,
  collaborate: UsersRound,
  iterate: RefreshCw,
} as const satisfies Record<ApproachStageIcon, typeof Search>;

export default function Approach({ language }: ApproachProps) {
  const t = TRANSLATIONS[language];
  const stages = APPROACH_STAGES(language);

  return (
    <section
      id="approach-section"
      className="mx-auto w-full max-w-7xl px-4 py-section transition-all duration-300"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 id="tour-title-approach" className="text-2xl font-black tracking-tight text-on-surface sm:text-4xl">
          {t.approachTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-balance text-sm leading-relaxed text-on-surface-variant sm:text-base">
          {t.approachIntro}
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stages.map((stage) => (
          <li
            key={stage.number}
            className="flex flex-col rounded-2xl border border-border bg-surface-lowest p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-bold tracking-widest text-primary">{stage.number} ·</span>
              <BrandGlyph icon={STAGE_ICONS[stage.icon]} />
            </div>
            <h3 className="mt-4 text-lg font-black tracking-tight text-on-surface">
              {stage.title}
            </h3>
            <p className="mt-1 text-sm leading-snug text-on-surface-variant">
              {stage.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
