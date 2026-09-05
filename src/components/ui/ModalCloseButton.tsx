import { Minimize2, X } from 'lucide-react';

interface ModalCloseButtonProps {
  onClick: () => void;
  label: string;
  placement?: 'overlay' | 'inline';
  icon?: 'close' | 'collapse';
}

export const modalPrimaryCloseButtonClass = 'h-12 w-full rounded-2xl bg-primary text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98] cursor-pointer';

export default function ModalCloseButton({
  onClick,
  label,
  placement = 'overlay',
  icon = 'close',
}: ModalCloseButtonProps) {
  const positionClass = placement === 'inline'
    ? 'relative shrink-0'
    : 'absolute right-4 top-[max(1rem,env(safe-area-inset-top))] sm:top-4';
  const Icon = icon === 'collapse' ? Minimize2 : X;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${positionClass} z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-lowest text-on-surface-variant transition-all hover:bg-surface-high hover:text-on-surface active:scale-95 cursor-pointer`}
      aria-label={label}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
