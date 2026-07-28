import React, { useState } from 'react';
import { FAQS, TRANSLATIONS } from '../data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';

interface FAQProps {
  language: Language;
}

export default function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[language];
  const list = FAQS(language);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section"
      className="px-4 py-16 max-w-4xl mx-auto w-full transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <h2 id="tour-title-faq" className="text-2xl sm:text-4xl font-black text-on-surface tracking-tight mb-3">
          {t.faqTitle}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
          {t.faqDesc}
        </p>
      </div>

      <div className="space-y-4">
        {list.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="bg-card-bg border border-border rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-sm sm:text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <span className="text-muted p-1 bg-surface rounded-lg">
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-border/40">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
