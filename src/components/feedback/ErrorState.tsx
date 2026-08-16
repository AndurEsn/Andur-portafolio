import React from 'react';
import { AlertOctagon, ArrowLeft } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../content/data';

interface ErrorStateProps {
  onRecover: () => void;
  language: Language;
}

export default function ErrorState({ onRecover, language }: ErrorStateProps) {
  const t = TRANSLATIONS[language];

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center max-w-2xl mx-auto">
      {/* Visual Error Graphic with ambient glow */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-error/20 rounded-full blur-3xl opacity-50 scale-150 animate-pulse"></div>
        <div className="p-6 bg-error/10 border border-error/30 rounded-full relative z-10 text-error inline-block">
          <AlertOctagon className="w-20 h-20" />
        </div>
      </div>

      <h1 className="text-6xl sm:text-7xl font-black text-on-surface tracking-tight mb-2">
        {t.errorHeading}
      </h1>
      <h2 className="text-xl sm:text-2xl font-black text-on-surface-variant mb-4">
        {t.errorTitle}
      </h2>
      <p className="text-sm sm:text-base text-muted max-w-md mx-auto mb-8 leading-relaxed">
        {t.errorDesc}
      </p>

      {/* Primary Action Button */}
      <button 
        onClick={onRecover}
        className="h-14 px-8 rounded-xl bg-surface-lowest text-primary border border-border text-sm sm:text-base font-bold flex items-center justify-center hover:bg-surface-low transition-all gap-2 group shadow-sm hover:shadow active:scale-95 duration-200 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        {t.errorBtn}
      </button>
    </main>
  );
}
