import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

export const PHRASE_MS = 4000;

interface RotatingPhrasesProps {
  phrases: string[];
  pause?: boolean;
  align?: 'center' | 'start';
}

export default function RotatingPhrases({ phrases, pause = false, align = 'center' }: RotatingPhrasesProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (pause || phrases.length < 2) return;
    const interval = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, PHRASE_MS);
    return () => window.clearInterval(interval);
  }, [pause, phrases.length]);

  return (
    <div
      className={`mt-4 flex min-h-[calc(2.25rem*3)] w-auto max-w-3xl sm:mt-5 sm:min-h-[calc(2.25rem*2)] ${
        align === 'start' ? 'justify-start text-left' : 'justify-center text-center'
      }`}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={phrases[phraseIndex]}
          className={`w-auto max-w-full text-balance text-3xl font-black leading-9 tracking-tight text-on-surface ${
            align === 'start' ? 'text-left' : 'text-center'
          }`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
        >
          {phrases[phraseIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
