import { useId, useState } from 'react';
import { Info } from 'lucide-react';

interface InfoTooltipProps {
  label: string;
  children: string;
  placement?: 'top' | 'bottom';
  align?: 'left' | 'right';
}

export default function InfoTooltip({ label, children, placement = 'bottom', align = 'right' }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useId();

  return (
    <span
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
        className="flex h-5 w-5 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-high hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <Info className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
      </button>
      {isOpen && (
        <span
          id={tooltipId}
          role="tooltip"
          className={`absolute z-[60] w-64 rounded-xl border border-border bg-surface-lowest px-3 py-2 text-[11px] font-medium leading-relaxed text-on-surface shadow-xl ${
            placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
          } ${align === 'left' ? 'left-0' : 'right-0'}`}
        >
          {children}
        </span>
      )}
    </span>
  );
}
