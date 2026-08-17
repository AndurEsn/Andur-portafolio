import React, { useState } from 'react';
import { FAQS, TRANSLATIONS } from '../../content/data';
import { ChevronDown, ChevronUp, Download, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem, Language } from '../../types';

interface FAQProps {
  language: Language;
}

export default function FAQ({ language }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FAQItem['category']>('design');
  const t = TRANSLATIONS[language];
  const list = FAQS(language);
  const categories: { id: FAQItem['category']; label: string }[] = [
    { id: 'design', label: t.faqCategoryDesign },
    { id: 'collaboration', label: t.faqCategoryCollaboration },
    { id: 'profile', label: t.faqCategoryProfile },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const categoryFaqs = list
    .map((faq, index) => ({ faq, index }))
    .filter(({ faq }) => faq.category === selectedCategory);

  return (
    <section 
      id="faq-section"
      className="mx-auto w-full max-w-3xl px-4 py-section transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <h2 id="tour-title-faq" className="text-2xl sm:text-4xl font-black text-on-surface tracking-tight mb-3">
          {t.faqTitle}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
          {t.faqDesc}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => {
              setSelectedCategory(id);
              setOpenIndex(null);
            }}
            aria-pressed={selectedCategory === id}
            className={`h-10 rounded-full px-6 text-xs font-bold transition-all duration-200 cursor-pointer sm:text-sm ${
              selectedCategory === id
                ? 'scale-105 bg-primary text-white shadow-md'
                : 'border border-border bg-surface-low text-on-surface-variant hover:bg-surface-high hover:text-on-surface'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {categoryFaqs.map(({ faq, index }) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-border bg-card-bg transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="group flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-sm font-bold text-on-surface transition-colors group-hover:text-primary sm:text-base">
                  {faq.question}
                </span>
                <span className="rounded-lg bg-surface p-1 text-muted">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-primary" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
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
                    <div className="border-t border-border/40 px-6 py-6 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                      <p className="whitespace-pre-line">{faq.answer}</p>
                      {faq.link && (
                        <div className="mt-5">
                          <a
                            href={faq.link.href}
                            download={faq.link.download}
                            target={faq.link.external ? '_blank' : undefined}
                            rel={faq.link.external ? 'noopener noreferrer' : undefined}
                            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98]"
                          >
                            {faq.link.download ? (
                              <Download className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                            ) : (
                              <Github className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                            )}
                            {faq.link.label}
                          </a>
                        </div>
                      )}
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
