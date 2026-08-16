import React, { useState } from 'react';
import { ChevronLeft, Mail, MessageCircle, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, ToastVariant } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import ModalCloseButton, { modalPrimaryCloseButtonClass } from '../ui/ModalCloseButton';

interface ContactProps { onShowToast: (message: string, variant?: ToastVariant) => void; language: Language; }
type ContactModal = 'email' | 'whatsapp' | null;
interface EmailForm { name: string; company: string; phone: string; email: string; reason: string; otherReason: string; }

const emptyEmailForm: EmailForm = { name: '', company: '', phone: '', email: '', reason: '', otherReason: '' };
const whatsappNumber = '5211234567890';
const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;
const inputClass = 'h-12 w-full rounded-xl border border-border bg-surface-low px-4 text-sm text-on-surface transition-all placeholder:text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary';
const inputErrorClass = 'border-error bg-error-container/30 focus:ring-error';
const modalFooterClass = 'flex shrink-0 gap-3 border-t border-border bg-surface-low p-4';
const whatsappPromptClass = 'mb-3 text-base font-bold leading-relaxed text-on-surface';

export default function Contact({ onShowToast, language }: ContactProps) {
  const t = TRANSLATIONS[language];
  const [activeModal, setActiveModal] = useState<ContactModal>(null);
  const [emailForm, setEmailForm] = useState<EmailForm>(emptyEmailForm);
  const [emailErrors, setEmailErrors] = useState<Partial<Record<keyof EmailForm, string>>>({});
  const [whatsappStep, setWhatsappStep] = useState<1 | 2>(1);
  const [whatsappName, setWhatsappName] = useState('');
  const [whatsappReason, setWhatsappReason] = useState('');
  const [whatsappOtherReason, setWhatsappOtherReason] = useState('');
  const [whatsappNameError, setWhatsappNameError] = useState(false);
  useBodyScrollLock(activeModal !== null);

  const isSpanish = language === 'es';
  const otherLabel = isSpanish ? 'Otro' : 'Other';
  const emailReasons = isSpanish
    ? ['Tengo una oferta de trabajo y considero que tu experiencia y portafolio se alinean con nuestros requerimientos. ¿Te interesaría conversar?', 'Me gustaría platicar sobre una posible colaboración.', 'Quiero conocer más sobre tu experiencia y proyectos.', otherLabel]
    : ['I have a job opportunity and believe your experience and portfolio align with our needs. Would you be interested in talking?', 'I would like to talk about a possible collaboration.', 'I would like to learn more about your experience and projects.', otherLabel];
  const whatsappReasons = isSpanish
    ? ['He visto tu portafolio y me gustaría charlar.', '¿Estás abierto a nuevas oportunidades laborales?', otherLabel]
    : ['I have seen your portfolio and would like to chat.', 'Are you open to new job opportunities?', otherLabel];

  const closeModal = () => setActiveModal(null);
  const updateEmailField = (field: keyof EmailForm, value: string) => {
    setEmailForm((current) => ({ ...current, [field]: value }));
    setEmailErrors((current) => ({ ...current, [field]: undefined }));
  };
  const openEmail = () => { setEmailForm(emptyEmailForm); setEmailErrors({}); setActiveModal('email'); };
  const openWhatsapp = () => { setWhatsappStep(1); setWhatsappName(''); setWhatsappReason(''); setWhatsappOtherReason(''); setWhatsappNameError(false); setActiveModal('whatsapp'); };

  const handleEmailSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof EmailForm, string>> = {};
    const requiredMessage = isSpanish ? 'Este campo es obligatorio.' : 'This field is required.';
    if (!emailForm.name.trim()) nextErrors.name = requiredMessage;
    if (!emailForm.email.trim()) nextErrors.email = requiredMessage;
    if (!emailForm.reason) nextErrors.reason = requiredMessage;
    if (emailForm.reason === otherLabel && !emailForm.otherReason.trim()) nextErrors.otherReason = requiredMessage;
    if (Object.keys(nextErrors).length > 0) {
      setEmailErrors(nextErrors);
      onShowToast(isSpanish ? 'Completa los campos obligatorios para enviar el correo.' : 'Complete the required fields to send the email.', 'error');
      return;
    }
    if (!recipientEmail) {
      onShowToast(isSpanish ? 'Falta configurar el correo de destino.' : 'The destination email still needs to be configured.', 'error');
      return;
    }
    const reason = emailForm.reason === otherLabel ? emailForm.otherReason.trim() : emailForm.reason;
    const body = [
      `${isSpanish ? 'Nombre' : 'Name'}: ${emailForm.name.trim()}`,
      emailForm.company.trim() && `${isSpanish ? 'Empresa' : 'Company'}: ${emailForm.company.trim()}`,
      emailForm.phone.trim() && `${isSpanish ? 'Teléfono' : 'Phone'}: ${emailForm.phone.trim()}`,
      `${isSpanish ? 'Correo' : 'Email'}: ${emailForm.email.trim()}`,
      '', reason,
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(isSpanish ? 'Nuevo contacto desde el portafolio' : 'New contact from portfolio')}&body=${encodeURIComponent(body)}`;
    closeModal();
  };

  const continueWhatsApp = () => {
    if (!whatsappName.trim()) {
      setWhatsappNameError(true);
      onShowToast(isSpanish ? 'Escribe tu nombre para continuar.' : 'Enter your name to continue.', 'error');
      return;
    }
    setWhatsappStep(2);
  };

  const sendWhatsApp = () => {
    if (!whatsappReason || (whatsappReason === otherLabel && !whatsappOtherReason.trim())) {
      onShowToast(isSpanish ? 'Selecciona o escribe el motivo de contacto.' : 'Choose or write the reason for contacting.', 'error');
      return;
    }
    const reason = whatsappReason === otherLabel ? whatsappOtherReason.trim() : whatsappReason;
    const message = isSpanish ? `Hola, me llamo ${whatsappName.trim()}. ${reason}` : `Hi, my name is ${whatsappName.trim()}. ${reason}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <section id="contact-section" className="border-y border-border bg-surface-low px-4 py-16 transition-all duration-300">
      <div className="mx-auto grid max-w-5xl gap-8 text-center lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:text-left">
        <div className="lg:sticky lg:top-24">
          <h2 id="tour-title-contact" className="mb-3 text-2xl font-black tracking-tight text-on-surface sm:text-4xl">{t.contactTitle}</h2>
          <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base">{t.contactDesc}</p>
        </div>
        <div className="flex flex-col items-center gap-3 self-center lg:items-stretch">
          <button type="button" onClick={openEmail} className="flex h-12 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white transition-all hover:bg-primary-hover active:scale-[0.98] cursor-pointer lg:max-w-none"><Mail className="h-4 w-4" />{isSpanish ? 'Contactar vía correo electrónico' : 'Contact via email'}</button>
          <button type="button" onClick={openWhatsapp} className="flex h-12 w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-bold text-white transition-all hover:bg-[#20ba59] active:scale-[0.98] cursor-pointer lg:max-w-none"><MessageCircle className="h-5 w-5 fill-current" />{t.contactWhatsapp}</button>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-label={t.modalClose} />
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" className="relative z-10 flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl border border-border bg-surface-lowest shadow-2xl">
              <div className="relative shrink-0 border-b border-border bg-surface-low p-6 pr-16">
                <ModalCloseButton onClick={closeModal} label={t.modalClose} />
                <h3 id="contact-modal-title" className="text-lg font-black tracking-tight text-on-surface">{activeModal === 'email' ? (isSpanish ? 'Contactar por correo electrónico' : 'Contact by email') : (isSpanish ? 'Hablemos por WhatsApp' : 'Let’s talk on WhatsApp')}</h3>
                {activeModal === 'whatsapp' && <p className="mt-1 text-xs text-on-surface-variant">{isSpanish ? `Paso ${whatsappStep} de 2` : `Step ${whatsappStep} of 2`}</p>}
              </div>

              {activeModal === 'email' && (
                <form onSubmit={handleEmailSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
                  <div className="hide-scrollbar flex flex-col gap-4 overflow-y-auto p-6">
                    <label className="flex flex-col gap-1.5"><span className="text-xs font-bold text-on-surface">{isSpanish ? 'Nombre *' : 'Name *'}</span><input required autoComplete="name" value={emailForm.name} onChange={(event) => updateEmailField('name', event.target.value)} aria-invalid={Boolean(emailErrors.name)} className={`${inputClass} ${emailErrors.name ? inputErrorClass : ''}`} />{emailErrors.name && <span className="text-xs font-medium text-error">{emailErrors.name}</span>}</label>
                    <label className="flex flex-col gap-1.5"><span className="text-xs font-bold text-on-surface">{isSpanish ? '¿De qué empresa o compañía eres?' : 'Which company are you from?'}</span><input autoComplete="organization" value={emailForm.company} onChange={(event) => updateEmailField('company', event.target.value)} className={inputClass} /></label>
                    <div className="grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-1.5"><span className="text-xs font-bold text-on-surface">{isSpanish ? 'Número de teléfono' : 'Phone number'}</span><input type="tel" autoComplete="tel" value={emailForm.phone} onChange={(event) => updateEmailField('phone', event.target.value)} className={inputClass} /></label><label className="flex flex-col gap-1.5"><span className="text-xs font-bold text-on-surface">{isSpanish ? 'Correo electrónico *' : 'Email *'}</span><input required type="email" autoComplete="email" value={emailForm.email} onChange={(event) => updateEmailField('email', event.target.value)} aria-invalid={Boolean(emailErrors.email)} className={`${inputClass} ${emailErrors.email ? inputErrorClass : ''}`} />{emailErrors.email && <span className="text-xs font-medium text-error">{emailErrors.email}</span>}</label></div>
                    <label className="flex flex-col gap-1.5"><span className="text-xs font-bold text-on-surface">{isSpanish ? 'Motivo del contacto *' : 'Reason for contacting *'}</span><select required value={emailForm.reason} onChange={(event) => updateEmailField('reason', event.target.value)} aria-invalid={Boolean(emailErrors.reason)} className={`${inputClass} ${emailErrors.reason ? inputErrorClass : ''}`}><option value="">{isSpanish ? 'Selecciona una opción' : 'Select an option'}</option>{emailReasons.map((reason) => <option key={reason} value={reason}>{reason}</option>)}</select>{emailErrors.reason && <span className="text-xs font-medium text-error">{emailErrors.reason}</span>}</label>
                    {emailForm.reason === otherLabel && <label className="flex flex-col gap-1.5"><span className="text-xs font-bold text-on-surface">{isSpanish ? 'Escribe tu mensaje *' : 'Write your message *'}</span><textarea required value={emailForm.otherReason} onChange={(event) => updateEmailField('otherReason', event.target.value)} rows={4} aria-invalid={Boolean(emailErrors.otherReason)} className={`${inputClass} h-auto resize-none py-3 ${emailErrors.otherReason ? inputErrorClass : ''}`} />{emailErrors.otherReason && <span className="text-xs font-medium text-error">{emailErrors.otherReason}</span>}</label>}
                  </div>
                  <div className={modalFooterClass}><button type="submit" className={`${modalPrimaryCloseButtonClass} inline-flex items-center justify-center gap-2`}><Send className="h-4 w-4" />{isSpanish ? 'Enviar correo' : 'Send email'}</button></div>
                </form>
              )}

              {activeModal === 'whatsapp' && (
                <div className="flex min-h-0 flex-1 flex-col">
                  <div className="hide-scrollbar flex-1 overflow-y-auto p-6">
                    {whatsappStep === 1 ? (
                      <div className="space-y-2">
                        <p className={whatsappPromptClass}>{t.whatsappNamePrompt}</p>
                        <input autoFocus value={whatsappName} onChange={(event) => { setWhatsappName(event.target.value); setWhatsappNameError(false); }} aria-invalid={whatsappNameError} className={`${inputClass} ${whatsappNameError ? inputErrorClass : ''}`} />
                        {whatsappNameError && <p className="text-xs font-medium text-error">{isSpanish ? 'Este campo es obligatorio.' : 'This field is required.'}</p>}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className={whatsappPromptClass}>{t.whatsappReasonPrompt}</p>
                        <div className="space-y-2">
                          {whatsappReasons.map((reason) => <button key={reason} type="button" onClick={() => setWhatsappReason(reason)} className={`w-full rounded-xl border p-3 text-left text-sm font-medium transition-all cursor-pointer ${whatsappReason === reason ? 'border-primary bg-primary-bg/30 text-on-surface' : 'border-border bg-surface-low text-on-surface-variant hover:bg-surface-high'}`}>{reason}</button>)}
                        </div>
                        {whatsappReason === otherLabel && <textarea value={whatsappOtherReason} onChange={(event) => setWhatsappOtherReason(event.target.value)} rows={3} placeholder={isSpanish ? 'Escribe tu mensaje' : 'Write your message'} className={`${inputClass} h-auto resize-none py-3`} />}
                      </div>
                    )}
                  </div>
                  <div className={modalFooterClass}>{whatsappStep === 1 ? <button type="button" onClick={continueWhatsApp} className={modalPrimaryCloseButtonClass}>{isSpanish ? 'Continuar' : 'Continue'}</button> : <><button type="button" onClick={() => setWhatsappStep(1)} className="inline-flex h-12 items-center gap-1 rounded-2xl border border-border bg-surface-lowest px-4 text-sm font-bold text-on-surface transition-colors hover:bg-surface-high cursor-pointer"><ChevronLeft className="h-4 w-4" />{isSpanish ? 'Regresar' : 'Back'}</button><button type="button" onClick={sendWhatsApp} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-sm font-bold text-white transition-all hover:bg-[#20ba59] active:scale-[0.98] cursor-pointer"><MessageCircle className="h-4 w-4" />{isSpanish ? 'Enviar WhatsApp' : 'Send WhatsApp'}</button></>}</div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
