import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import yaydooLogo from '../../assets/logos/yaydoo.svg';
import porCobrarLogo from '../../assets/logos/porcobrar.png';
import vendorPlaceLogo from '../../assets/logos/vendorplace.png';
import supervisorLogo from '../../assets/logos/supervisor-ai.png';
import leracomLogo from '../../assets/logos/leracom-ai.png';
import oysterLogo from '../../assets/logos/oyster-light.svg';
import buyerLogo from '../../assets/logos/buyer.svg';
import sendaMonarcaLogo from '../../assets/logos/senda-monarca.svg';
import { Language } from '../../types';

const logos = [
  { name: 'Yaydoo', src: yaydooLogo },
  { name: 'PorCobrar', src: porCobrarLogo },
  { name: 'VendorPlace', src: vendorPlaceLogo },
  { name: 'Supervisor AI', src: supervisorLogo },
  { name: 'Leracom AI', src: leracomLogo },
  { name: 'Oyster', src: oysterLogo },
  { name: 'Buyer', src: buyerLogo },
  { name: 'Senda Monarca', src: sendaMonarcaLogo },
];

interface LogoCarouselProps {
  language: Language;
}

interface LogoGroupProps {
  duplicate?: boolean;
  onImageError: (name: string) => void;
}

function LogoGroup({ duplicate = false, onImageError }: LogoGroupProps) {
  return (
    <div className="logo-marquee-group" aria-hidden={duplicate || undefined}>
      {logos.map((logo) => (
        <div
          key={`${duplicate ? 'duplicate-' : ''}${logo.name}`}
          className="w-40 sm:w-48 h-20 px-5 flex items-center justify-center shrink-0"
        >
          <img
            src={logo.src}
            alt={duplicate ? '' : logo.name}
            className="brand-logo max-w-full max-h-12 object-contain"
            draggable={false}
            onError={() => onImageError(logo.name)}
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoCarousel({ language }: LogoCarouselProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startOffset: 0, moved: false, wasPaused: false });
  const resumeTimerRef = useRef<number | undefined>(undefined);
  const [isPaused, setIsPaused] = useState(false);
  const [failedLogos, setFailedLogos] = useState<string[]>([]);

  const applyOffset = (offset: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  };

  const setPaused = (paused: boolean) => {
    pausedRef.current = paused;
    setIsPaused(paused);
  };

  const clearResumeTimer = () => {
    if (resumeTimerRef.current !== undefined) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = undefined;
    }
  };

  const scheduleResume = () => {
    clearResumeTimer();
    if (!pausedRef.current) return;
    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = undefined;
    }, 1000);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let previousTime = performance.now();

    const tick = (time: number) => {
      const elapsed = time - previousTime;
      previousTime = time;
      const cycleWidth = track.scrollWidth / 2;

      if (!reduceMotion && !pausedRef.current && !dragRef.current.active && cycleWidth > 0) {
        offsetRef.current -= (elapsed * cycleWidth) / 28000;
        if (offsetRef.current <= -cycleWidth) offsetRef.current += cycleWidth;
        applyOffset(offsetRef.current);
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      clearResumeTimer();
    };
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    clearResumeTimer();
    const marquee = marqueeRef.current;
    if (!marquee) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startOffset: offsetRef.current,
      moved: false,
      wasPaused: pausedRef.current,
    };
    setPaused(true);
    marquee.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 4) drag.moved = true;
    const cycleWidth = (trackRef.current?.scrollWidth ?? 0) / 2;
    let nextOffset = drag.startOffset + delta;
    if (cycleWidth > 0) {
      while (nextOffset > 0) nextOffset -= cycleWidth;
      while (nextOffset <= -cycleWidth) nextOffset += cycleWidth;
    }
    offsetRef.current = nextOffset;
    applyOffset(nextOffset);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const marquee = marqueeRef.current;
    const wasDrag = dragRef.current.moved;
    dragRef.current.active = false;
    if (marquee?.hasPointerCapture(event.pointerId)) marquee.releasePointerCapture(event.pointerId);
    if (!wasDrag) setPaused(!dragRef.current.wasPaused);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    clearResumeTimer();
    setPaused(!pausedRef.current);
  };

  const handleImageError = (name: string) => {
    setFailedLogos((current) => (current.includes(name) ? current : [...current, name]));
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-labelledby="trusted-brands-title"
    >
      <h2 id="trusted-brands-title" className="sr-only">
        {language === 'es' ? 'Marcas con las que he colaborado' : 'Brands I have worked with'}
      </h2>
      <div
        ref={marqueeRef}
        className={`logo-marquee overflow-hidden rounded-2xl border border-border bg-surface-lowest py-2 cursor-grab ${dragRef.current.active ? 'cursor-grabbing' : ''}`}
        tabIndex={0}
        role="button"
        aria-pressed={isPaused}
        aria-label={
          language === 'es'
            ? isPaused
              ? 'Carrusel pausado. Haz clic para reanudar o arrastra para moverlo'
              : 'Carrusel de logotipos. Haz clic para pausar o arrastra para moverlo'
            : isPaused
              ? 'Logo carousel paused. Click to resume or drag to move it'
              : 'Logo carousel. Click to pause or drag to move it'
        }
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={clearResumeTimer}
        onPointerLeave={scheduleResume}
        onKeyDown={handleKeyDown}
        style={{ touchAction: 'pan-y' }}
      >
        <div ref={trackRef} className="logo-marquee-track">
          <LogoGroup onImageError={handleImageError} />
          <LogoGroup duplicate onImageError={handleImageError} />
        </div>
      </div>
      {failedLogos.length > 0 && (
        <span className="sr-only" role="status">
          {language === 'es'
            ? `No se pudieron cargar: ${failedLogos.join(', ')}`
            : `Unable to load: ${failedLogos.join(', ')}`}
        </span>
      )}
    </section>
  );
}
