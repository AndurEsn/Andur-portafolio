import React from 'react';
import { TRANSLATIONS } from '../data';
import { Language, Metric } from '../types';
import { Award, BriefcaseBusiness, Globe2 } from 'lucide-react';

interface MetricsProps {
  language: Language;
  metrics: Metric[];
}

export default function Metrics({ language, metrics }: MetricsProps) {
  const t = TRANSLATIONS[language];
  const MetricIcon = ({ icon }: { icon: Metric['icon'] }) => {
    const Icon = icon === 'award' ? Award : icon === 'briefcase' ? BriefcaseBusiness : Globe2;
    return <Icon className="h-5 w-5 text-primary" aria-hidden="true" />;
  };

  return (
    <section 
      id="tour-step-metrics"
      className="px-4 py-8 sm:py-12 max-w-7xl mx-auto w-full transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center mb-10">
        <h2 id="tour-title-metrics" className="text-2xl sm:text-4xl font-black text-on-surface tracking-tight mb-3">
          {t.metricsTitle}
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
          {t.metricsLabel}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, idx) => (
          <div 
            key={idx}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card-bg p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg sm:p-8"
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-110">
                <MetricIcon icon={metric.icon} />
              </div>
              <span className="text-4xl sm:text-5xl font-black text-primary tracking-tight mb-2">
                {metric.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-on-surface-variant">
                {metric.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
