import React, { useEffect, useRef, type MutableRefObject, type PointerEvent } from 'react';
import { useReducedMotion } from 'motion/react';
import {
  Compass,
  Layers,
  LayoutGrid,
  MessageCircle,
  MousePointerClick,
  PenLine,
  Rocket,
  ScanSearch,
  Smartphone,
  Sparkles,
  Waypoints,
  type LucideIcon,
} from 'lucide-react';
import { Language, Skill, SkillIcon } from '../../types';
import { SKILLS, TRANSLATIONS } from '../../content/data';

const SKILL_ICONS = {
  layers: Layers,
  compass: Compass,
  users: ScanSearch,
  pen: PenLine,
  message: MessageCircle,
  waypoints: Waypoints,
  rocket: Rocket,
  smartphone: Smartphone,
  layout: LayoutGrid,
  prototype: MousePointerClick,
  sparkles: Sparkles,
} as const satisfies Record<SkillIcon, LucideIcon>;

const CYCLE_MS = 28000;

interface SkillsCarouselProps {
  language: Language;
}

function renderSkillChip(skill: Skill, key: string, duplicate = false) {
  const Icon = SKILL_ICONS[skill.icon];

  return (
    <div
      key={key}
      className="skill-chip inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface-lowest px-4 py-2.5 text-sm font-semibold text-on-surface"
      aria-hidden={duplicate || undefined}
    >
      <Icon className="h-4 w-4 shrink-0 text-on-surface-variant" strokeWidth={1.6} aria-hidden="true" />
      <span className="whitespace-nowrap">{skill.label}</span>
    </div>
  );
}

interface SkillMarqueeRowProps {
  items: Skill[];
  direction: 'left' | 'right';
  pausedRef: MutableRefObject<boolean>;
  onDragChange: (active: boolean) => void;
  reduceMotion: boolean;
}

function SkillMarqueeRow({
  items,
  direction,
  pausedRef,
  onDragChange,
  reduceMotion,
}: SkillMarqueeRowProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const dragRef = useRef({ active: false, startX: 0, startOffset: 0 });

  const applyOffset = (offset: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  };

  const wrapOffset = (offset: number, cycleWidth: number) => {
    if (cycleWidth <= 0) return offset;
    let next = offset;
    while (next <= -cycleWidth) next += cycleWidth;
    while (next > 0) next -= cycleWidth;
    return next;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return undefined;

    let frame = 0;
    let previousTime = performance.now();
    let primed = false;

    const tick = (time: number) => {
      const elapsed = time - previousTime;
      previousTime = time;
      const cycleWidth = track.scrollWidth / 2;

      if (!primed && cycleWidth > 0) {
        offsetRef.current = direction === 'right' ? -cycleWidth : 0;
        applyOffset(offsetRef.current);
        primed = true;
      }

      if (!pausedRef.current && !dragRef.current.active && cycleWidth > 0) {
        const delta = (elapsed * cycleWidth) / CYCLE_MS;
        offsetRef.current += direction === 'right' ? delta : -delta;
        offsetRef.current = wrapOffset(offsetRef.current, cycleWidth);
        applyOffset(offsetRef.current);
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [direction, pausedRef, reduceMotion]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    dragRef.current = { active: true, startX: event.clientX, startOffset: offsetRef.current };
    marquee.classList.add('cursor-grabbing');
    onDragChange(true);
    marquee.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    const cycleWidth = (trackRef.current?.scrollWidth ?? 0) / 2;
    const nextOffset = wrapOffset(drag.startOffset + (event.clientX - drag.startX), cycleWidth);
    offsetRef.current = nextOffset;
    applyOffset(nextOffset);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;
    dragRef.current.active = false;
    marquee?.classList.remove('cursor-grabbing');
    if (marquee?.hasPointerCapture(event.pointerId)) marquee.releasePointerCapture(event.pointerId);
    onDragChange(false);
  };

  if (reduceMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-2 py-1">
        {items.map((skill) => renderSkillChip(skill, skill.id))}
      </div>
    );
  }

  return (
    <div
      ref={marqueeRef}
      className="skill-marquee cursor-grab overflow-hidden py-1"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ touchAction: 'pan-y' }}
    >
      <div ref={trackRef} className="skill-marquee-track">
        <div className="skill-marquee-group">
          {items.map((skill) => renderSkillChip(skill, skill.id))}
        </div>
        <div className="skill-marquee-group" aria-hidden="true">
          {items.map((skill) => renderSkillChip(skill, `dup-${skill.id}`, true))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsCarousel({ language }: SkillsCarouselProps) {
  const t = TRANSLATIONS[language];
  const skills = SKILLS(language);
  const topRow = skills.slice(0, 6);
  const bottomRow = skills.slice(6);
  const pausedRef = useRef(false);
  const hoverRef = useRef(false);
  const dragCountRef = useRef(0);
  const reduceMotion = Boolean(useReducedMotion());

  const syncPaused = () => {
    pausedRef.current = hoverRef.current || dragCountRef.current > 0;
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-section pt-8" aria-label={t.skillsTitle}>
      <div
        className="logo-carousel-fade relative overflow-hidden"
        onPointerEnter={() => {
          hoverRef.current = true;
          syncPaused();
        }}
        onPointerLeave={() => {
          hoverRef.current = false;
          syncPaused();
        }}
      >
        <div className="flex flex-col gap-2">
          <SkillMarqueeRow
            items={topRow}
            direction="right"
            pausedRef={pausedRef}
            onDragChange={(active) => {
              dragCountRef.current = Math.max(0, dragCountRef.current + (active ? 1 : -1));
              syncPaused();
            }}
            reduceMotion={reduceMotion}
          />
          <SkillMarqueeRow
            items={bottomRow}
            direction="left"
            pausedRef={pausedRef}
            onDragChange={(active) => {
              dragCountRef.current = Math.max(0, dragCountRef.current + (active ? 1 : -1));
              syncPaused();
            }}
            reduceMotion={reduceMotion}
          />
        </div>
        <div className="logo-carousel-fade-edge logo-carousel-fade-edge-start" aria-hidden="true" />
        <div className="logo-carousel-fade-edge logo-carousel-fade-edge-end" aria-hidden="true" />
      </div>
    </section>
  );
}
