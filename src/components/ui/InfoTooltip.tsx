import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  label: string;
  children: string;
  placement?: 'top' | 'bottom';
  align?: 'left' | 'right';
}

const TOOLTIP_MAX_WIDTH = 256;
const VIEWPORT_GAP = 12;

function canHover() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

export default function InfoTooltip({ label, children, placement = 'bottom', align = 'right' }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, maxWidth: TOOLTIP_MAX_WIDTH });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const place = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const maxWidth = Math.min(TOOLTIP_MAX_WIDTH, window.innerWidth - VIEWPORT_GAP * 2);
      const tooltipWidth = tooltipRef.current?.offsetWidth || Math.min(rect.width, maxWidth);
      const preferredLeft = align === 'right' ? rect.right - tooltipWidth : rect.left;
      const maxLeft = window.innerWidth - tooltipWidth - VIEWPORT_GAP;
      const left = Math.min(Math.max(VIEWPORT_GAP, preferredLeft), Math.max(VIEWPORT_GAP, maxLeft));
      const top = placement === 'top' ? rect.top - VIEWPORT_GAP : rect.bottom + VIEWPORT_GAP;
      setCoords({ top, left, maxWidth });
    };

    place();
    if (!tooltipRef.current || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(place);
    observer.observe(tooltipRef.current);
    return () => observer.disconnect();
  }, [isOpen, placement, align, children]);

  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || tooltipRef.current?.contains(target)) return;
      close();
    };

    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen]);

  return (
    <span
      ref={triggerRef}
      className="relative inline-flex"
      onMouseEnter={() => {
        if (canHover()) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (canHover()) setIsOpen(false);
      }}
    >
      <button
        type="button"
        onClick={(event) => {
          if (canHover()) return;
          event.preventDefault();
          event.stopPropagation();
          setIsOpen((open) => !open);
        }}
        onFocus={() => {
          if (canHover()) setIsOpen(true);
        }}
        onBlur={() => {
          if (canHover()) setIsOpen(false);
        }}
        aria-label={label}
        aria-describedby={isOpen ? tooltipId : undefined}
        aria-expanded={isOpen}
        className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/10 hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Info className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
      </button>
      {isOpen &&
        createPortal(
          <span
            ref={tooltipRef}
            id={tooltipId}
            role="tooltip"
            style={{
              top: coords.top,
              left: coords.left,
              maxWidth: coords.maxWidth,
              transform: placement === 'top' ? 'translateY(-100%)' : undefined,
            }}
            className="fixed z-[200] w-max rounded-xl border border-border bg-surface-lowest px-3 py-2 text-[11px] font-medium leading-relaxed text-on-surface shadow-xl break-words whitespace-normal"
          >
            {children}
          </span>,
          document.body
        )}
    </span>
  );
}
