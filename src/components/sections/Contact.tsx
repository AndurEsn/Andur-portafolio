import { Linkedin, Mail } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { CONTACT_EMAIL, CONTACT_LINKEDIN } from '../../config/contact';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = TRANSLATIONS[language];

  return (
    <section id="contact-section" className="mx-auto w-full max-w-7xl px-4 py-section transition-all duration-300">
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card-bg p-6 text-center sm:p-8 md:p-10">
        <h2 id="tour-title-contact" className="mb-4 text-2xl font-black tracking-tight text-on-surface sm:text-4xl">
          {t.contactTitle}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">{t.contactDesc}</p>
        <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={CONTACT_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full min-w-[240px] max-w-sm cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98] sm:w-[240px]"
          >
            <Linkedin className="h-4 w-4" />
            {t.contactLinkedin}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex h-12 w-full min-w-[240px] max-w-sm cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-surface-lowest text-sm font-bold text-on-surface transition-all hover:bg-surface-high active:scale-[0.98] sm:w-[240px]"
          >
            <Mail className="h-4 w-4" />
            {t.contactEmailCta}
          </a>
        </div>
      </div>
    </section>
  );
}
