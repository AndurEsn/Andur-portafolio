import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Award, BarChart3, Briefcase, Clock3, FolderKanban, Globe, ImagePlus, Plus, Save, Sparkles, Trash2, UserRound, Workflow } from 'lucide-react';
import { HeroContent, Language, Metric, MetricIcon } from '../types';

type EditableSection = 'hero' | 'metrics' | null;

interface PortfolioEditorProps {
  language: Language;
  hero: HeroContent;
  metrics: Metric[];
  onSaveHero: (hero: HeroContent) => void;
  onSaveMetrics: (metrics: Metric[]) => void;
}

const iconOptions: { value: MetricIcon; label: string }[] = [
  { value: 'projects', label: 'Proyectos' },
  { value: 'flows', label: 'Flujos' },
  { value: 'hours', label: 'Horas' },
  { value: 'award', label: 'Reconocimiento' },
  { value: 'briefcase', label: 'Portafolio' },
  { value: 'globe', label: 'Global' },
  { value: 'sparkles', label: 'Destacado' },
];

function MetricIconPreview({ icon }: { icon: MetricIcon }) {
  if (icon === 'projects') return <FolderKanban className="w-4 h-4" />;
  if (icon === 'flows') return <Workflow className="w-4 h-4" />;
  if (icon === 'hours') return <Clock3 className="w-4 h-4" />;
  if (icon === 'briefcase') return <Briefcase className="w-4 h-4" />;
  if (icon === 'globe') return <Globe className="w-4 h-4" />;
  if (icon === 'sparkles') return <Sparkles className="w-4 h-4" />;
  return <Award className="w-4 h-4" />;
}

export default function PortfolioEditor({ language, hero, metrics, onSaveHero, onSaveMetrics }: PortfolioEditorProps) {
  const [selectedSection, setSelectedSection] = useState<EditableSection>(null);
  const [draftHero, setDraftHero] = useState(hero);
  const [draftMetrics, setDraftMetrics] = useState(metrics);
  const isSpanish = language === 'es';

  useEffect(() => setDraftHero(hero), [hero]);
  useEffect(() => setDraftMetrics(metrics), [metrics]);

  const updateMetric = (index: number, field: keyof Metric, value: string) => {
    setDraftMetrics((current) => current.map((metric, metricIndex) => (
      metricIndex === index ? { ...metric, [field]: value } as Metric : metric
    )));
  };

  const handleImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    if (image) setDraftHero((current) => ({ ...current, avatar: URL.createObjectURL(image) }));
  };

  const saveHero = (event: FormEvent) => {
    event.preventDefault();
    onSaveHero(draftHero);
  };

  const saveMetrics = (event: FormEvent) => {
    event.preventDefault();
    onSaveMetrics(draftMetrics);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6" aria-label={isSpanish ? 'Editor de portafolio de demostración' : 'Demo portfolio editor'}>
      <div className="bg-surface-low border border-border rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <p className="text-[10px] font-black tracking-widest uppercase text-primary mb-1">{isSpanish ? 'Modo edición · demo' : 'Edit mode · demo'}</p>
            <h2 className="text-lg font-black text-on-surface">{isSpanish ? 'Elige una sección para editar' : 'Choose a section to edit'}</h2>
          </div>
          <p className="text-xs text-muted max-w-sm">{isSpanish ? 'Los cambios son de demostración y se conservan mientras esta página siga abierta.' : 'Demo changes are kept while this page remains open.'}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSelectedSection('hero')}
            aria-pressed={selectedSection === 'hero'}
            className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${selectedSection === 'hero' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-lowest border-border text-on-surface-variant hover:border-primary/40'}`}
          >
            <span className="p-2 rounded-lg bg-primary-bg/50"><UserRound className="w-5 h-5" /></span>
            <span><strong className="block text-sm">{isSpanish ? 'Sobre mí' : 'About me'}</strong><span className="block text-xs mt-1">{isSpanish ? 'Foto, nombre, rol, título y subtítulo.' : 'Photo, name, role, title and subtitle.'}</span></span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedSection('metrics')}
            aria-pressed={selectedSection === 'metrics'}
            className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${selectedSection === 'metrics' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface-lowest border-border text-on-surface-variant hover:border-primary/40'}`}
          >
            <span className="p-2 rounded-lg bg-primary-bg/50"><BarChart3 className="w-5 h-5" /></span>
            <span><strong className="block text-sm">{isSpanish ? 'Métricas' : 'Metrics'}</strong><span className="block text-xs mt-1">{isSpanish ? 'Entre 2 y 4 bloques con valor, texto e ícono.' : 'Between 2 and 4 blocks with value, text and icon.'}</span></span>
          </button>
        </div>

        {selectedSection === 'hero' && (
          <form onSubmit={saveHero} className="mt-5 pt-5 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-xs font-bold text-on-surface-variant md:col-span-2">{isSpanish ? 'Foto de perfil (URL)' : 'Profile photo (URL)'}
              <input type="url" value={draftHero.avatar} onChange={(event) => setDraftHero({ ...draftHero, avatar: event.target.value })} className="mt-1.5 w-full h-11 bg-surface-lowest border border-border rounded-xl px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="text-xs font-bold text-on-surface-variant md:col-span-2">{isSpanish ? 'O elige una imagen del equipo' : 'Or choose an image from this device'}
              <span className="mt-1.5 flex items-center gap-2 text-xs text-muted"><ImagePlus className="w-4 h-4 text-primary" /><input type="file" accept="image/*" onChange={handleImageFile} className="max-w-full" /></span>
            </label>
            <label className="text-xs font-bold text-on-surface-variant">{isSpanish ? 'Nombre' : 'Name'}
              <input required value={draftHero.name} onChange={(event) => setDraftHero({ ...draftHero, name: event.target.value })} className="mt-1.5 w-full h-11 bg-surface-lowest border border-border rounded-xl px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="text-xs font-bold text-on-surface-variant">{isSpanish ? 'Rol' : 'Role'}
              <input required value={draftHero.role} onChange={(event) => setDraftHero({ ...draftHero, role: event.target.value })} className="mt-1.5 w-full h-11 bg-surface-lowest border border-border rounded-xl px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="text-xs font-bold text-on-surface-variant md:col-span-2">{isSpanish ? 'Título' : 'Title'}
              <input required value={draftHero.title} onChange={(event) => setDraftHero({ ...draftHero, title: event.target.value })} className="mt-1.5 w-full h-11 bg-surface-lowest border border-border rounded-xl px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="text-xs font-bold text-on-surface-variant md:col-span-2">{isSpanish ? 'Subtítulo' : 'Subtitle'}
              <textarea required value={draftHero.subtitle} onChange={(event) => setDraftHero({ ...draftHero, subtitle: event.target.value })} rows={3} className="mt-1.5 w-full bg-surface-lowest border border-border rounded-xl p-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </label>
            <button type="submit" className="md:col-span-2 h-11 px-5 bg-primary text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-hover active:scale-[0.98] transition-all"><Save className="w-4 h-4" />{isSpanish ? 'Guardar cambios de Sobre mí' : 'Save About me changes'}</button>
          </form>
        )}

        {selectedSection === 'metrics' && (
          <form onSubmit={saveMetrics} className="mt-5 pt-5 border-t border-border space-y-4">
            {draftMetrics.map((metric, index) => (
              <div key={index} className="bg-surface-lowest border border-border rounded-xl p-4 grid grid-cols-1 sm:grid-cols-[1fr_1fr_180px_auto] gap-3 items-end">
                <label className="text-xs font-bold text-on-surface-variant">{isSpanish ? 'Valor' : 'Value'}
                  <input required value={metric.value} onChange={(event) => updateMetric(index, 'value', event.target.value)} className="mt-1.5 w-full h-10 bg-surface-low border border-border rounded-lg px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
                </label>
                <label className="text-xs font-bold text-on-surface-variant">{isSpanish ? 'Texto' : 'Label'}
                  <input required value={metric.label} onChange={(event) => updateMetric(index, 'label', event.target.value)} className="mt-1.5 w-full h-10 bg-surface-low border border-border rounded-lg px-3 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary" />
                </label>
                <label className="text-xs font-bold text-on-surface-variant">{isSpanish ? 'Ícono' : 'Icon'}
                  <span className="mt-1.5 flex h-10 items-center gap-2 bg-surface-low border border-border rounded-lg px-3 text-on-surface"><MetricIconPreview icon={metric.icon} /><select value={metric.icon} onChange={(event) => updateMetric(index, 'icon', event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm focus:outline-none">{iconOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></span>
                </label>
                <button type="button" onClick={() => setDraftMetrics((current) => current.filter((_, metricIndex) => metricIndex !== index))} disabled={draftMetrics.length <= 2} className="h-10 w-10 rounded-lg border border-border text-on-surface-variant hover:text-error hover:border-error/40 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center" aria-label={isSpanish ? 'Eliminar métrica' : 'Delete metric'}><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" onClick={() => setDraftMetrics((current) => [...current, { value: '0', label: isSpanish ? 'nueva métrica' : 'new metric', icon: 'award' }])} disabled={draftMetrics.length >= 4} className="h-11 px-5 bg-surface-lowest border border-border text-on-surface rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed"><Plus className="w-4 h-4 text-primary" />{isSpanish ? 'Añadir métrica' : 'Add metric'}</button>
              <button type="submit" className="flex-1 h-11 px-5 bg-primary text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-hover active:scale-[0.98] transition-all"><Save className="w-4 h-4" />{isSpanish ? 'Guardar métricas' : 'Save metrics'}</button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
