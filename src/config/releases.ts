export interface ReleaseNote {
  version: string;
  date: string;
  summary: {
    es: string;
    en: string;
  };
  changes: {
    es: string[];
    en: string[];
  };
}

/** Historial visible en Laboratorio; mantener alineado con CHANGELOG.md. */
export const RELEASES: ReleaseNote[] = [
  {
    version: '1.1.0',
    date: '2026-07-30',
    summary: {
      es: 'Perfil, métricas, FAQ ampliado y descarga de CV.',
      en: 'Profile, metrics, expanded FAQ and CV download.',
    },
    changes: {
      es: [
        '18 preguntas frecuentes con categorías y descarga de CV.',
        'Métricas actualizadas: 11+ proyectos, 74+ flujos, 14,000 horas.',
        'Trayectoria con Yaydoo, Leracom y Freelance.',
        'Reorganización del código fuente y versionado SemVer.',
      ],
      en: [
        '18 FAQ items with categories and CV download.',
        'Updated metrics: 11+ projects, 74+ flows, 14,000 hours.',
        'Roadmap with Yaydoo, Leracom and Freelance.',
        'Source reorganization and SemVer versioning.',
      ],
    },
  },
  {
    version: '1.0.0',
    date: '2026-07-28',
    summary: {
      es: 'Primera publicación pública del portafolio.',
      en: 'First public portfolio release.',
    },
    changes: {
      es: [
        'SPA bilingüe con tema claro/oscuro.',
        'Secciones: Hero, Métricas, Trayectoria, Proyectos, Contacto y FAQ.',
        'Tour, Laboratorio, Design System y encuesta NPS.',
      ],
      en: [
        'Bilingual SPA with light/dark theme.',
        'Sections: Hero, Metrics, Roadmap, Projects, Contact and FAQ.',
        'Tour, Lab, Design System and NPS survey.',
      ],
    },
  },
];
