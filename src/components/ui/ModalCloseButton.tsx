import { X } from 'lucide-react';

interface ModalCloseButtonProps {
  onClick: () => void;
  label: string;
}

export const modalPrimaryCloseButtonClass = 'h-12 w-full rounded-2xl bg-primary text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98] cursor-pointer';

export default function ModalCloseButton({ onClick, label }: ModalCloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-lowest text-on-surface-variant transition-all hover:bg-surface-high hover:text-on-surface active:scale-95 cursor-pointer"
      aria-label={label}
    >
      <X className="h-4 w-4" />
    </button>
  );
}
