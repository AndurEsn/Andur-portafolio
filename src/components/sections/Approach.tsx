import { Language } from '../../types';
import { ABOUT_COMPETENCIES, ABOUT_TOOL_GROUPS, TRANSLATIONS } from '../../content/data';
import { SKILL_ICONS } from '../../content/skillIcons';

interface ApproachProps {
  language: Language;
}

export default function Approach({ language }: ApproachProps) {
  const t = TRANSLATIONS[language];
  const competencies = ABOUT_COMPETENCIES(language);
  const toolGroups = ABOUT_TOOL_GROUPS(language);

  return (
    <section
      id="about-section"
      className="mx-auto w-full max-w-7xl px-4 py-section transition-all duration-300"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 id="tour-title-approach" className="text-2xl font-black tracking-tight text-on-surface sm:text-4xl">
          {t.approachTitle}
        </h2>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-12 lg:mx-0 lg:max-w-none">
        <p className="max-w-3xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
          {t.approachIntro}
        </p>

        <div className="grid gap-6 lg:grid-cols-[minmax(12rem,16rem)_1fr] lg:items-start lg:gap-10">
          <h3 className="text-lg font-black tracking-tight text-on-surface sm:text-xl">
            {t.aboutExpertiseTitle}
          </h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-5">
            {competencies.map((item) => {
              const Icon = SKILL_ICONS[item.icon];
              return (
                <li key={item.id} className="flex items-center gap-2.5 text-sm text-on-surface sm:text-base">
                  <Icon className="h-4 w-4 shrink-0 text-on-surface-variant" strokeWidth={1.6} aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(12rem,16rem)_1fr] lg:items-start lg:gap-10">
          <h3 className="text-lg font-black tracking-tight text-on-surface sm:text-xl">
            {t.aboutToolsTitle}
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div key={group.id}>
                <h4 className="text-sm font-bold text-on-surface sm:text-base">{group.title}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.tools.map((tool) => (
                    <li key={tool.id} className="flex items-center gap-3 text-sm text-on-surface sm:text-base">
                      <span
                        className="h-8 w-8 shrink-0 rounded-lg border border-border bg-icon-well"
                        aria-hidden="true"
                      />
                      <span>{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
