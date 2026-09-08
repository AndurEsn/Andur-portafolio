import { useCallback, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { useReducedMotion } from 'motion/react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
  caption?: string;
  beforeLabel: string;
  afterLabel: string;
}

const DEFAULT_SPLIT = 50;

export default function BeforeAfterSlider({
  before,
  after,
  alt,
  caption,
  beforeLabel,
  afterLabel,
}: BeforeAfterSliderProps) {
  const labelId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [split, setSplit] = useState(DEFAULT_SPLIT);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const { left, width } = frame.getBoundingClientRect();
    if (width <= 0) return;
    setSplit(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion && !draggingRef.current) return;
    if (event.pointerType === 'mouse' || draggingRef.current) {
      setFromClientX(event.clientX);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerLeave = () => {
    if (draggingRef.current || shouldReduceMotion) return;
    setSplit(DEFAULT_SPLIT);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const step = event.shiftKey ? 10 : 5;
    setSplit((current) =>
      Math.min(100, Math.max(0, current + (event.key === 'ArrowRight' ? step : -step)))
    );
  };

  return (
    <figure className="mt-1 space-y-2">
      {caption ? (
        <figcaption id={labelId} className="text-xs font-semibold text-on-surface-variant">
          {caption}
        </figcaption>
      ) : null}
      <div
        ref={frameRef}
        role="slider"
        tabIndex={0}
        aria-labelledby={caption ? labelId : undefined}
        aria-label={caption ? undefined : alt}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        aria-valuetext={`${beforeLabel} ${Math.round(split)}%, ${afterLabel} ${Math.round(100 - split)}%`}
        className="relative cursor-ew-resize overflow-hidden rounded-xl border border-border select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        onKeyDown={handleKeyDown}
        style={{ touchAction: 'pan-y' }}
      >
        <img src={after} alt="" draggable={false} className="block w-full" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${split}%` }}>
          <img
            src={before}
            alt=""
            draggable={false}
            className="block h-full max-w-none object-cover object-left"
            style={{ width: `${100 / Math.max(split, 0.001) * 100}%` }}
          />
        </div>
        <span className="sr-only">{alt}</span>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-px bg-primary"
          style={{ left: `${split}%` }}
        >
          <span className="absolute top-[calc(50%-22px)] left-[-22px] flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-primary text-white">
            <ChevronsLeftRight className="h-4 w-4" strokeWidth={1.6} />
          </span>
        </div>
        <span className="pointer-events-none absolute left-2 top-2 rounded-md bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-2 top-2 rounded-md bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {afterLabel}
        </span>
      </div>
    </figure>
  );
}
