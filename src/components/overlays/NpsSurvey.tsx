import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, Send } from 'lucide-react';
import { Language, NpsFeedback } from '../../types';
import { TRANSLATIONS } from '../../content/data';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import ModalCloseButton from '../ui/ModalCloseButton';

interface NpsSurveyProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: NpsFeedback) => void;
  language: Language;
  onShowToast: (msg: string) => void;
}

type SurveyStep = 1 | 2;

export default function NpsSurvey({ isOpen, onClose, onSubmit, language, onShowToast }: NpsSurveyProps) {
  const t = TRANSLATIONS[language];
  const [step, setStep] = useState<SurveyStep>(1);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [isDiscardDialogOpen, setIsDiscardDialogOpen] = useState(false);

  useBodyScrollLock(isOpen || isDiscardDialogOpen);

  useEffect(() => {
    if (!isOpen) return;
    setRating(null);
    setComment('');
    setStep(1);
    setIsDiscardDialogOpen(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const hasProgress = rating !== null || comment.trim().length > 0;
  const requestClose = () => {
    if (hasProgress) {
      setIsDiscardDialogOpen(true);
      return;
    }
    onClose();
  };
  const finishSurvey = () => {
    if (rating === null) return;
    onSubmit({ status: 'submitted', rating, comment: comment.trim() });
    onShowToast(language === 'es' ? '¡Gracias por calificar el portafolio!' : 'Thank you for rating the portfolio!');
  };
  const ratings = [
    { value: 1, emoji: '😡', text: language === 'es' ? 'Horrible' : 'Horrible' },
    { value: 2, emoji: '😕', text: language === 'es' ? 'Malo' : 'Bad' },
    { value: 3, emoji: '😐', text: language === 'es' ? 'Regular' : 'Average' },
    { value: 4, emoji: '🙂', text: language === 'es' ? 'Bueno' : 'Good' },
    { value: 5, emoji: '😍', text: language === 'es' ? 'Impresionante' : 'Awesome' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
        <motion.button
          type="button"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={requestClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          aria-label={language === 'es' ? 'Cerrar encuesta' : 'Close survey'}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
          role="dialog" aria-modal="true" aria-labelledby="nps-title"
          className="relative z-10 flex max-h-[85vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-border bg-surface-lowest shadow-2xl"
        >
          <div className="relative shrink-0 border-b border-border bg-surface-low p-6 pr-16">
            <ModalCloseButton onClick={requestClose} label={language === 'es' ? 'Cerrar encuesta' : 'Close survey'} />
            <h3 id="nps-title" className="text-lg font-black tracking-tight text-on-surface">
              {step === 1 ? t.npsStep1Title : t.npsStep2Title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
              {step === 1 ? t.npsStep1Desc : t.npsStep2Desc}
            </p>
          </div>

          <div className="hide-scrollbar overflow-y-auto p-6">
            {step === 1 && (
              <div className="grid grid-cols-5 gap-2" aria-label={language === 'es' ? 'Calificación NPS' : 'NPS rating'}>
                {ratings.map((item) => (
                  <button
                    key={item.value} type="button" title={item.text} aria-label={`${item.value}: ${item.text}`}
                    onClick={() => { setRating(item.value); setStep(2); }}
                    className="flex min-h-20 flex-col items-center justify-center rounded-2xl border border-border bg-surface-low p-2 transition-all hover:border-primary hover:bg-primary-bg/30 active:scale-95 cursor-pointer"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="mt-1 text-[10px] font-black text-on-surface-variant">{item.value}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <textarea
                  value={comment} onChange={(event) => setComment(event.target.value)} placeholder={t.npsCommentPlaceholder} rows={4}
                  className="w-full resize-none rounded-xl border border-border bg-surface-low p-3 text-sm text-on-surface transition-all placeholder:text-muted focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex items-center justify-between gap-3">
                  <button type="button" onClick={() => setStep(1)} className="inline-flex h-10 items-center gap-1 rounded-xl px-3 text-xs font-bold text-on-surface-variant transition-colors hover:bg-surface-high hover:text-on-surface cursor-pointer">
                    <ChevronLeft className="h-4 w-4" />{language === 'es' ? 'Regresar' : 'Back'}
                  </button>
                  <div className="flex gap-2">
                    <button type="button" onClick={finishSurvey} className="h-10 rounded-xl px-3 text-xs font-bold text-primary transition-colors hover:bg-primary-bg/40 cursor-pointer">{t.npsSkip}</button>
                    <button type="button" onClick={finishSurvey} className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-white transition-all hover:bg-primary-hover active:scale-95 cursor-pointer">
                      {t.npsSend}<Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

        </motion.div>

        {isDiscardDialogOpen && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
            <button type="button" onClick={() => setIsDiscardDialogOpen(false)} className="absolute inset-0 bg-black/60" aria-label={language === 'es' ? 'Cancelar salida' : 'Cancel exit'} />
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} role="alertdialog" aria-modal="true" aria-labelledby="discard-title" className="relative z-10 w-full max-w-sm rounded-3xl border border-border bg-surface-lowest p-6 shadow-2xl">
              <ModalCloseButton onClick={() => setIsDiscardDialogOpen(false)} label={language === 'es' ? 'Cancelar salida' : 'Cancel exit'} />
              <h3 id="discard-title" className="pr-10 text-lg font-black text-on-surface">{language === 'es' ? '¿Salir de la encuesta?' : 'Leave the survey?'}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{language === 'es' ? 'Si sales ahora, se perderá el progreso de tu encuesta.' : 'If you leave now, your survey progress will be lost.'}</p>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => setIsDiscardDialogOpen(false)} className="h-11 flex-1 rounded-xl border border-border bg-surface-lowest text-xs font-bold text-on-surface transition-colors hover:bg-surface-high cursor-pointer">{language === 'es' ? 'Continuar' : 'Keep answering'}</button>
                <button type="button" onClick={() => { setIsDiscardDialogOpen(false); onClose(); }} className="h-11 flex-1 rounded-xl bg-primary text-xs font-bold text-white transition-all hover:bg-primary-hover active:scale-95 cursor-pointer">{language === 'es' ? 'Salir' : 'Leave'}</button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
