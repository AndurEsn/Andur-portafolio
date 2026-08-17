import { useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  label: string;
  children: string;
  placement?: 'top' | 'bottom';
  align?: 'left' | 'right';
}

const TOOLTIP_WIDTH = 256;
const VIEWPORT_GAP = 12;

export default function InfoTooltip({ label, children, placement = 'bottom', align = 'right' }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipId = useId();

  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const maxLeft = window.innerWidth - TOOLTIP_WIDTH - VIEWPORT_GAP;
    const left = Math.min(
      Math.max(VIEWPORT_GAP, align === 'right' ? rect.right - TOOLTIP_WIDTH : rect.left),
      Math.max(VIEWPORT_GAP, maxLeft)
    );
    const top = placement === 'top' ? rect.top - VIEWPORT_GAP : rect.bottom + VIEWPORT_GAP;

    setCoords({ top, left });
  }, [isOpen, placement, align]);

  return (
    <span
      ref={triggerRef}
      className="relative inline-flex"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
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
            id={tooltipId}
            role="tooltip"
            style={{
              top: coords.top,
              left: coords.left,
              width: TOOLTIP_WIDTH,
              transform: placement === 'top' ? 'translateY(-100%)' : undefined,
            }}
            className="pointer-events-none fixed z-[200] rounded-xl border border-border bg-surface-lowest px-3 py-2 text-[11px] font-medium leading-relaxed text-on-surface shadow-xl break-words whitespace-normal"
          >
            {children}
          </span>,
          document.body
        )}
    </span>
  );
}
