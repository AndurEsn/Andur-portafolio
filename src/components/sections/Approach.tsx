import { BriefcaseBusiness, CodeXml, Component, PenLine, Search, UsersRound, Waypoints } from 'lucide-react';
import BrandGlyph from '../ui/BrandGlyph';
import { Language, ApproachPartnerIcon, ApproachStageIcon } from '../../types';
import { APPROACH_PARTNERS, APPROACH_STAGES, TRANSLATIONS } from '../../content/data';

interface ApproachProps {
  language: Language;
}

const STAGE_ICONS = {
  discover: Search,
  define: Waypoints,
  design: PenLine,
  build: CodeXml,
} as const satisfies Record<ApproachStageIcon, typeof Search>;

const PARTNER_ICONS = {
  users: UsersRound,
  product: BriefcaseBusiness,
  delivery: Component,
} as const satisfies Record<ApproachPartnerIcon, typeof Search>;

export default function Approach({ language }: ApproachProps) {
  const t = TRANSLATIONS[language];
  const stages = APPROACH_STAGES(language);
  const partners = APPROACH_PARTNERS(language);

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

      <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => (
          <li
            key={stage.number}
            className="flex flex-col rounded-2xl border border-border bg-surface-lowest p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs font-bold tracking-widest text-primary">{stage.number}</span>
              <BrandGlyph icon={STAGE_ICONS[stage.icon]} />
            </div>
            <h3 className="mt-4 text-lg font-black tracking-tight text-on-surface">
              {stage.title}
            </h3>
            <p className="mt-1 text-sm leading-snug text-on-surface-variant">
              {stage.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {stage.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="rounded-full border border-border bg-surface-low px-2.5 py-1 text-[11px] font-semibold leading-none text-on-surface-variant"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          {t.approachCollabLabel}
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <li
              key={partner.title}
              className="flex gap-3 rounded-2xl border border-border bg-surface-lowest p-5"
            >
              <BrandGlyph icon={PARTNER_ICONS[partner.icon]} />
              <div className="min-w-0">
                <h3 className="text-sm font-black tracking-tight text-on-surface">
                  {partner.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-on-surface-variant">
                  {partner.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
