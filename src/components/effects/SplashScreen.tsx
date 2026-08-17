import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';

interface SplashScreenProps {
  language: Language;
  onComplete: () => void;
}

const MIN_VISIBLE_MS = 2000;
const ZOOM_MS = 700;

function AnimatedLine({
  text,
  className,
  delay = 0,
  reduceMotion,
}: {
  text: string;
  className: string;
  delay?: number;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p className={className}>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.28em] inline-block last:mr-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export default function SplashScreen({ language, onComplete }: SplashScreenProps) {
  const t = TRANSLATIONS[language];
  const shouldReduceMotion = useReducedMotion();
  const [canDismiss, setCanDismiss] = useState(Boolean(shouldReduceMotion));
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setCanDismiss(true), shouldReduceMotion ? 0 : MIN_VISIBLE_MS);
    return () => window.clearTimeout(timeout);
  }, [shouldReduceMotion]);

  const dismiss = useCallback(() => {
    if (!canDismiss || isExiting) return;
    if (shouldReduceMotion) {
      onComplete();
      return;
    }
    setIsExiting(true);
  }, [canDismiss, isExiting, onComplete, shouldReduceMotion]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) return;
      dismiss();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape' || event.key === 'ArrowDown') {
        event.preventDefault();
        dismiss();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [dismiss]);

  return (
    <div
      className="splash-bg fixed inset-0 z-[300] flex cursor-pointer items-center justify-center overflow-hidden px-6"
      role="dialog"
      aria-label={t.splashLine}
      aria-modal="true"
      onClick={dismiss}
    >
      <div className="splash-liquid" aria-hidden="true">
        <span className="splash-blob splash-blob-a" />
        <span className="splash-blob splash-blob-b" />
        <span className="splash-blob splash-blob-c" />
      </div>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={
          isExiting
            ? { opacity: 0, scale: 8 }
            : shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, -6, 0] }
        }
        transition={
          isExiting
            ? { duration: ZOOM_MS / 1000, ease: [0.22, 1, 0.36, 1] }
            : shouldReduceMotion
              ? { duration: 0.3 }
              : { y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.45 }, scale: { duration: 0.45 } }
        }
        onAnimationComplete={() => {
          if (isExiting) onComplete();
        }}
      >
        <AnimatedLine
          text={t.splashLine}
          className="text-3xl font-black leading-tight tracking-tight text-on-surface sm:text-5xl lg:text-6xl"
          reduceMotion={Boolean(shouldReduceMotion)}
        />
        <AnimatedLine
          text={t.splashYear}
          className="mt-3 text-3xl font-black tracking-tight text-primary sm:mt-4 sm:text-5xl lg:text-6xl"
          delay={0.28}
          reduceMotion={Boolean(shouldReduceMotion)}
        />
        <p
          className={`mt-10 text-sm font-semibold text-on-surface-variant transition-opacity duration-500 sm:text-base ${
            canDismiss ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {t.splashHint}
        </p>
      </motion.div>
    </div>
  );
}
