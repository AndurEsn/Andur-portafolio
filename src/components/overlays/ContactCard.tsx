import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import { CONTACT_EMAIL, CONTACT_LINKEDIN, CONTACT_WHATSAPP } from '../../config/contact';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import useModalDismiss from '../../hooks/useModalDismiss';
import ModalCloseButton from '../ui/ModalCloseButton';
import linkedinIcon from '../../assets/icons/social-linkedin.svg';
import emailIcon from '../../assets/icons/social-email.svg';
import whatsappIcon from '../../assets/icons/social-whatsapp.svg';

interface ContactCardProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactCard({ language, isOpen, onClose }: ContactCardProps) {
  const t = TRANSLATIONS[language];
  useBodyScrollLock(isOpen);
  const requestClose = useModalDismiss(isOpen, onClose);

  const links = [
    {
      href: CONTACT_LINKEDIN,
      icon: linkedinIcon,
      label: language === 'es' ? 'LinkedIn, se abre en una pestaña nueva' : 'LinkedIn, opens in a new tab',
      external: true,
    },
    {
      href: `mailto:${CONTACT_EMAIL}`,
      icon: emailIcon,
      label: language === 'es' ? 'Enviar correo' : 'Send email',
      external: false,
    },
    {
      href: CONTACT_WHATSAPP,
      icon: whatsappIcon,
      label: language === 'es' ? 'WhatsApp, se abre en una pestaña nueva' : 'WhatsApp, opens in a new tab',
      external: true,
    },
  ];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={requestClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-none cursor-pointer sm:pointer-events-auto"
            aria-label={language === 'es' ? 'Cerrar tarjeta de contacto' : 'Close contact card'}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-card-name"
            className="relative z-10 w-full max-w-sm rounded-3xl border border-border bg-card-bg px-8 py-12 text-center shadow-lg"
          >
            <p id="contact-card-name" className="text-3xl font-bold tracking-tight text-on-surface">
              Andur
            </p>
            <p className="mt-2 text-base font-medium text-on-surface-variant sm:text-lg">
              {t.heroContactRole}
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-transparent transition-all hover:border-border hover:bg-surface-high hover:scale-105 active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={link.label}
                >
                  <img src={link.icon} alt="" className="h-8 w-8" aria-hidden="true" />
                </a>
              ))}
            </div>
            <ModalCloseButton
              onClick={requestClose}
              label={language === 'es' ? 'Cerrar tarjeta de contacto' : 'Close contact card'}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
