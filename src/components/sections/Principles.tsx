import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { FlaskConical, RefreshCw, ScanSearch, Users, type LucideIcon } from 'lucide-react';
import { Language, Principle, PrincipleIcon } from '../../types';
import { PRINCIPLES, TRANSLATIONS } from '../../content/data';

interface PrinciplesProps {
  language: Language;
}

const TITLE_PEEK = 56;
const INCOMING_TRAVEL = 280;
const OPAQUE_FROM_DELTA = 0.2;

const PRINCIPLE_ICONS = {
  discovery: ScanSearch,
  definition: Users,
  validation: FlaskConical,
  evolution: RefreshCw,
} as const satisfies Record<PrincipleIcon, LucideIcon>;

function StackedCard({
  stage,
  index,
  count,
  progress,
  reduceMotion,
  matchedHeight,
  onContentNode,
}: {
  stage: Principle;
  index: number;
  count: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  reduceMotion: boolean;
  matchedHeight: number;
  onContentNode: (index: number, node: HTMLDivElement | null) => void;
}) {
  const Icon = PRINCIPLE_ICONS[stage.icon];
  const y = useTransform(progress, (p) => {
    const active = p * (count - 1);
    const delta = index - active;
    const rest = index * TITLE_PEEK;
    if (delta <= 0) return rest;
    return rest + delta * INCOMING_TRAVEL;
  });
  const opacity = useTransform(progress, (p) => {
    const active = p * (count - 1);
    const delta = index - active;
    if (delta >= 1) return 0;
    if (delta <= OPAQUE_FROM_DELTA) return 1;
    return (1 - delta) / (1 - OPAQUE_FROM_DELTA);
  });

  const sizeStyle = matchedHeight > 0 ? { height: matchedHeight } : { height: 'fit-content' as const };

  return (
    <motion.article
      style={
        reduceMotion
          ? sizeStyle
          : { top: 0, y, opacity, zIndex: index + 1, ...sizeStyle }
      }
      className={`flex w-full flex-col rounded-2xl border border-border bg-surface-lowest shadow-lg ${
        reduceMotion ? 'relative' : 'absolute inset-x-0'
      }`}
    >
      <div
        ref={(node) => onContentNode(index, node)}
        className="flex h-fit w-full flex-col px-5 pb-8 pt-0 sm:px-8 sm:pb-10"
      >
        <header className="grid h-14 w-full shrink-0 grid-cols-[2.5rem_1fr_2.5rem] items-center gap-2">
          <span className="text-left text-xs font-bold tabular-nums tracking-[0.14em] text-on-surface-variant">
            {stage.number}
          </span>
          <h3 className="text-center text-sm font-bold text-on-surface sm:text-base">
            {stage.title}
          </h3>
          <Icon
            aria-hidden="true"
            className="h-5 w-5 justify-self-end text-on-surface-variant"
            strokeWidth={1.6}
          />
        </header>
        <p className="mt-1 text-center text-sm leading-relaxed text-on-surface-variant sm:text-base">
          {stage.description}
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {stage.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-on-surface sm:text-sm"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Principles({ language }: PrinciplesProps) {
  const t = TRANSLATIONS[language];
  const stages = PRINCIPLES(language);
  const reduceMotion = Boolean(useReducedMotion());
  const trackRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const contentNodes = useRef<(HTMLDivElement | null)[]>([]);
  const [matchedHeight, setMatchedHeight] = useState(0);
  const [blockHeight, setBlockHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start center', 'end end'],
  });

  const onContentNode = (index: number, node: HTMLDivElement | null) => {
    contentNodes.current[index] = node;
  };

  useLayoutEffect(() => {
    const measure = () => {
      const max = Math.max(0, ...contentNodes.current.map((node) => node?.offsetHeight ?? 0));
      setMatchedHeight((current) => (current === max ? current : max));
    };

    measure();
    const observers = contentNodes.current.flatMap((node) => {
      if (!node) return [];
      const observer = new ResizeObserver(measure);
      observer.observe(node);
      return [observer];
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [language, stages]);

  useLayoutEffect(() => {
    const block = blockRef.current;
    if (!block) return undefined;

    const measureBlock = () => {
      const next = Math.round(block.getBoundingClientRect().height);
      setBlockHeight((current) => (current === next ? current : next));
    };

    measureBlock();
    const observer = new ResizeObserver(measureBlock);
    observer.observe(block);
    return () => observer.disconnect();
  }, [language, matchedHeight, reduceMotion]);

  const stackHeight = (stages.length - 1) * TITLE_PEEK + matchedHeight;

  const cards = stages.map((stage, index) => (
    <Fragment key={stage.number}>
      <StackedCard
        stage={stage}
        index={index}
        count={stages.length}
        progress={scrollYProgress}
        reduceMotion={reduceMotion}
        matchedHeight={matchedHeight}
        onContentNode={onContentNode}
      />
    </Fragment>
  ));

  const heading = (
    <>
      <h2 id="tour-title-principles" className="text-2xl font-black tracking-tight text-on-surface sm:text-4xl">
        {t.principlesTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-center text-base leading-relaxed text-on-surface-variant sm:text-lg">
        {t.principlesIntro}
      </p>
    </>
  );

  if (reduceMotion) {
    return (
      <section
        id="principles-section"
        className="mx-auto w-full max-w-3xl px-4 py-section text-center transition-all duration-300"
      >
        {heading}
        <div className="mt-8 flex flex-col gap-4">{cards}</div>
      </section>
    );
  }

  const stickyTop =
    blockHeight > 0
      ? `max(calc(var(--header-row) + var(--tabs-h) + 12px), calc(50dvh - ${blockHeight / 2}px))`
      : 'calc(var(--header-row) + var(--tabs-h) + 12px)';

  return (
    <section id="principles-section" className="relative w-full pt-section pb-section">
      <div ref={trackRef} className="h-[420vh]">
        <div
          ref={blockRef}
          className="sticky z-10 w-full bg-background px-4"
          style={{ top: stickyTop }}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            {heading}
            <div
              className="relative mx-auto mt-8 w-full max-w-3xl"
              style={{ height: stackHeight > TITLE_PEEK ? stackHeight : undefined }}
            >
              {cards}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
