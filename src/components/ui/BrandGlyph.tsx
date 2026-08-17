import type { LucideIcon } from 'lucide-react';

interface BrandGlyphProps {
  icon: LucideIcon;
  label?: string;
  iconClassName?: string;
}

export default function BrandGlyph({ icon: Icon, label, iconClassName }: BrandGlyphProps) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-icon-well">
      <Icon
        className={`h-6 w-6 ${iconClassName ?? ''}`}
        strokeWidth={1.6}
        aria-hidden="true"
        style={{ stroke: 'url(#brand-icon-gradient)' }}
      />
      {label ? <span className="sr-only">{label}</span> : null}
    </span>
  );
}

export function BrandGlyphDefs() {
  return (
    <svg width="0" height="0" className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="brand-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--icon-gradient-from)" />
          <stop offset="100%" stopColor="var(--icon-gradient-to)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
