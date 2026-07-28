import { Project, Metric, FAQItem, TourStep, RoadmapItem } from './types';

export const TRANSLATIONS = {
  es: {
    brandName: '',
    navProjects: 'Proyectos',
    navAbout: 'Sobre mí',
    navFaq: 'FAQ',
    navContact: 'Contacto',
    navMetrics: 'Métricas',
    navRoadmap: 'Trayectoria',
    startTour: 'Iniciar tour',
    tour: 'Tour',
    labTitle: 'Laboratorio',
    labDescription: 'Prueba estados técnicos y de diseño.',
    labLoading: 'Simular Carga',
    labError: 'Simular Error 404',
    labNps: 'Activar Encuesta NPS',
    labDesignSystem: 'Documentación Design System',
    labAnimation: 'Animaciones de entrada',
    labAnimationHelpLabel: 'Cómo funcionan las animaciones de entrada',
    labAnimationHelp: 'Cambia la forma en que se presenta el contenido del sitio web mediante diferentes estilos de animación.',
    evalPage: 'Evaluar Página',
    langSelect: 'Idioma',
    loadingLabel: 'Cargando portafolio...',
    errorHeading: '404',
    errorTitle: 'Página no encontrada',
    errorDesc: 'Lo sentimos, no pudimos encontrar el recurso que estabas buscando. Es posible que haya sido movido o eliminado de nuestro sistema.',
    errorBtn: 'Volver al inicio',
    errorToast: 'Oops, algo salió mal',
    heroEyebrow: 'Andur · Product Designer & Engineer Design',
    heroTitle: 'Diseño de productos que impactan negocios',
    heroDesc: 'Especializado en fintech y plataformas SaaS complejas. Ayudo a equipos de tecnología a simplificar flujos, retener usuarios y escalar su impacto comercial mediante interfaces intuitivas de clase mundial.',
    heroBtn: 'Iniciar tour interactivo',
    heroProjectsBtn: 'Ver proyectos',
    metricsTitle: 'Métricas de Impacto',
    metricsLabel: 'Impacto profesional comprobado',
    portfolioTitle: 'Proyectos Destacados',
    portfolioDesc: 'Una selección exclusiva de productos de software diseñados para maximizar métricas comerciales y simplificar la experiencia de usuario.',
    portfolioAll: 'Todos',
    viewProject: 'Ver proyecto',
    modalRole: 'Rol Desempeñado',
    modalDuration: 'Duración',
    modalImpact: 'Métrica de Impacto Lograda',
    modalSummary: 'Resumen del Proyecto',
    modalTools: 'Herramientas & Habilidades',
    modalClose: 'Cerrar',
    contactTitle: 'Trabajemos juntos',
    contactDesc: 'Cuéntame cómo puedo ayudarte y me pondré en contacto contigo.',
    contactNameLabel: 'Nombre',
    contactNamePlaceholder: 'Tu nombre',
    contactPhoneLabel: 'Número de teléfono',
    contactPhonePlaceholder: '+52 55 1234 5678',
    contactSubjectLabel: 'Asunto',
    contactSubjectPlaceholder: '¿En qué te puedo ayudar?',
    contactDescriptionLabel: 'Descripción',
    contactDescriptionPlaceholder: 'Cuéntame brevemente sobre tu proyecto o idea...',
    contactBtn: 'Enviar propuesta',
    contactSending: 'Enviando...',
    contactOr: 'o',
    contactWhatsapp: 'Contactar vía WhatsApp',
    whatsappNamePrompt: '¿Cómo te llamas?',
    whatsappReasonPrompt: 'Selecciona el motivo del contacto:',
    faqTitle: 'Preguntas frecuentes',
    faqDesc: 'Respuestas rápidas a las consultas más comunes sobre mi flujo de trabajo.',
    npsStep1Title: '¿Qué te ha parecido la página?',
    npsStep1Desc: 'Evalúa del 1 al 5 qué tanto te ha gustado la interacción y el diseño (1 = Horrible, 5 = Impresionante).',
    npsStep2Title: '¡Gracias por calificar!',
    npsStep2Desc: '¿Tienes algún comentario o sugerencia para mejorar la experiencia? Tu feedback es invaluable.',
    npsCommentPlaceholder: 'Escribe tu comentario aquí...',
    npsSkip: 'Omitir',
    npsSend: 'Enviar Feedback',
    npsComplete: '¡Gracias por tu valioso feedback!',
    dsModalTitle: 'Documentación del Design System',
    dsModalSubtitle: 'Tokens de diseño y componentes dinámicos para Light mode y Dark mode.',
    dsPaletteTitle: 'Paleta de Colores',
    dsPaletteDesc: 'Colores base utilizados según el tema activo para mantener armonía visual.',
    dsTypographyTitle: 'Tipografía (Inter)',
    dsTypographyDesc: 'Escala de fuentes altamente legible optimizada para pantallas digitales.',
    dsShapesTitle: 'Formas & Bordes',
    dsShapesDesc: 'Radios de redondeo estándar aplicados de forma consistente.',
    dsComponentsTitle: 'Muestra de Componentes',
    dsComponentsDesc: 'Interactúa con los bloques elementales del sistema.',
    dsBtnPrimary: 'Botón Primario',
    dsBtnSecondary: 'Botón Secundario',
    dsInputPlaceholder: 'Campo de texto',
    dsBadge: 'Categoría',
    dsAccordion: 'Acordeón Expandible',
    dsAccordionText: 'Este es el estilo de acordeón interactivo usado para responder dudas frecuentes.',
    dsTooltipTitle: 'Tooltip',
    dsTooltipDesc: 'Una ayuda breve que aparece al pasar el cursor, enfocarla con teclado o tocar el ícono.',
    dsTooltipExample: 'Este es un ejemplo de tooltip.',
    toastThemeLight: 'Modo claro activado',
    toastThemeDark: 'Modo oscuro activado',
    toastLanguageChanged: 'Idioma cambiado correctamente',
    toastNormal: 'Vista normal cargada',
    toastLoading: 'Modo cargando activado',
    toastError: 'Página de error cargada',
    toastLoadingDisabled: 'Modo de carga desactivado correctamente.',
    toastErrorDisabled: 'Modo de error 404 desactivado correctamente.',
    toastTourStart: '¡Tour de Onboarding iniciado!',
    toastTourComplete: '¡Tour completado con éxito!',
    toastToastLabel: 'Notificación',
    footerCopyright: '© 2026 Portafolio. Creado con IA y precisión por Andur.',
    roadmapTitle: 'Trayectoria Profesional',
    roadmapDesc: 'Mi camino como diseñador de producto, colaborando con empresas líderes y resolviendo problemas complejos.',
    bannerLoadingActive: 'Modo "Simular Carga" activo.',
    bannerErrorActive: 'Modo "Simular Error 404" activo.',
    bannerDeactivateBtn: 'Desactivar',
  },
  en: {
    brandName: '',
    navProjects: 'Projects',
    navAbout: 'About me',
    navFaq: 'FAQ',
    navContact: 'Contact',
    startTour: 'Start tour',
    tour: 'Tour',
    labTitle: 'Laboratory',
    labDescription: 'Test technical and design states.',
    labLoading: 'Simulate Loading',
    labError: 'Simulate Error 404',
    labNps: 'Trigger NPS Survey',
    labDesignSystem: 'Design System Docs',
    labAnimation: 'Entrance animations',
    labAnimationHelpLabel: 'How entrance animations work',
    labAnimationHelp: 'Change how the website content is presented by using different animation styles.',
    evalPage: 'Evaluate Page',
    langSelect: 'Language',
    loadingLabel: 'Loading portfolio...',
    errorHeading: '404',
    errorTitle: 'Page not found',
    errorDesc: 'Sorry, we could not find the resource you were looking for. It might have been moved or removed from our system.',
    errorBtn: 'Back to home',
    errorToast: 'Oops, something went wrong',
    heroEyebrow: 'Andur · Product Designer & Engineer Design',
    heroTitle: 'Designing products that drive business impact',
    heroDesc: 'Specialized in fintech and complex SaaS platforms. I help tech teams simplify user flows, increase retention, and scale commercial impact through world-class intuitive interfaces.',
    heroBtn: 'Start interactive tour',
    heroProjectsBtn: 'View projects',
    metricsTitle: 'Impact Metrics',
    metricsLabel: 'Proven professional impact',
    portfolioTitle: 'Featured Projects',
    portfolioDesc: 'An exclusive selection of software products designed to maximize business metrics and simplify user experience.',
    portfolioAll: 'All',
    viewProject: 'View project',
    modalRole: 'Role Played',
    modalDuration: 'Duration',
    modalImpact: 'Impact Metric Achieved',
    modalSummary: 'Project Summary',
    modalTools: 'Tools & Skills',
    modalClose: 'Close',
    contactTitle: 'Let’s work together',
    contactDesc: 'Tell me how I can help and I will get back to you shortly.',
    contactNameLabel: 'Name',
    contactNamePlaceholder: 'Your name',
    contactPhoneLabel: 'Phone number',
    contactPhonePlaceholder: '+1 555 123 4567',
    contactSubjectLabel: 'Subject',
    contactSubjectPlaceholder: 'How can I help?',
    contactDescriptionLabel: 'Description',
    contactDescriptionPlaceholder: 'Tell me briefly about your project or idea...',
    contactBtn: 'Send proposal',
    contactSending: 'Sending...',
    contactOr: 'or',
    contactWhatsapp: 'Contact via WhatsApp',
    whatsappNamePrompt: 'What is your name?',
    whatsappReasonPrompt: 'Choose the reason for contacting:',
    faqTitle: 'Frequently Asked Questions',
    faqDesc: 'Quick answers to the most common queries about my workflow.',
    npsStep1Title: 'How do you like the page?',
    npsStep1Desc: 'Rate from 1 to 5 how much you like the interaction and design (1 = Horrible, 5 = Awesome).',
    npsStep2Title: 'Thank you for rating!',
    npsStep2Desc: 'Do you have any comments or suggestions to improve the experience? Your feedback is priceless.',
    npsCommentPlaceholder: 'Write your comments here...',
    npsSkip: 'Skip',
    npsSend: 'Send Feedback',
    npsComplete: 'Thank you for your valuable feedback!',
    dsModalTitle: 'Design System Documentation',
    dsModalSubtitle: 'Design tokens and dynamic components for Light mode and Dark mode.',
    dsPaletteTitle: 'Color Palette',
    dsPaletteDesc: 'Base colors used depending on the active theme to maintain visual harmony.',
    dsTypographyTitle: 'Typography (Inter)',
    dsTypographyDesc: 'Highly legible type scale optimized for digital screens.',
    dsShapesTitle: 'Shapes & Borders',
    dsShapesDesc: 'Standard corner radius applied consistently across elements.',
    dsComponentsTitle: 'Components Showcase',
    dsComponentsDesc: 'Interact with the elemental blocks of the system.',
    dsBtnPrimary: 'Primary Button',
    dsBtnSecondary: 'Secondary Button',
    dsInputPlaceholder: 'Text input field',
    dsBadge: 'Category',
    dsTooltipTitle: 'Tooltip',
    dsTooltipDesc: 'A short hint that appears on hover, keyboard focus, or when the icon is tapped.',
    dsTooltipExample: 'This is a tooltip example.',
    dsAccordion: 'Expandable Accordion',
    dsAccordionText: 'This is the interactive accordion style used to answer frequently asked questions.',
    toastThemeLight: 'Light mode active',
    toastThemeDark: 'Dark mode active',
    toastLanguageChanged: 'Language changed successfully',
    toastNormal: 'Normal view loaded',
    toastLoading: 'Loading mode activated',
    toastError: 'Error page loaded',
    toastLoadingDisabled: 'Loading mode deactivated successfully.',
    toastErrorDisabled: 'Error 404 mode deactivated successfully.',
    toastTourStart: 'Onboarding Tour started!',
    toastTourComplete: 'Tour completed successfully!',
    toastToastLabel: 'Notification',
    footerCopyright: '© 2026 Portfolio. Built with AI and precision by Andur.',
    roadmapTitle: 'Professional Roadmap',
    roadmapDesc: 'My journey as a product designer, collaborating with leading companies and solving complex problems.',
    bannerLoadingActive: 'Mode "Simulate Loading" active.',
    bannerErrorActive: 'Mode "Simulate Error 404" active.',
    bannerDeactivateBtn: 'Deactivate',
    navMetrics: 'Metrics',
    navRoadmap: 'Roadmap',
  }
};

export const METRICS = (lang: 'es' | 'en'): Metric[] => [
  { value: '8+', label: lang === 'es' ? 'años de experiencia' : 'years of experience', icon: 'award' },
  { value: '45+', label: lang === 'es' ? 'proyectos completados' : 'completed projects', icon: 'briefcase' },
  { value: '20+', label: lang === 'es' ? 'clientes globales' : 'global clients', icon: 'globe' }
];

export const ROADMAP = (lang: 'es' | 'en'): RoadmapItem[] => [
  {
    years: lang === 'es' ? '2019 a 2024' : '2019 to 2024',
    company: 'Yaydoo',
    role: 'UX/UI Designer',
    description: lang === 'es'
      ? 'Responsable del diseño e investigación de productos de software financiero y conciliación para miles de corporativos y PYMEs.'
      : 'Responsible for product design and research of financial and reconciliation software products for thousands of corporates and SMEs.',
    highlight: lang === 'es' ? 'Rediseño de flujos financieros clave' : 'Redesign of key financial flows'
  },
  {
    years: '2023 - 2026',
    company: 'Leracom',
    role: 'Product Designer',
    description: lang === 'es'
      ? 'Liderazgo en estrategia de diseño de plataformas empresariales complejas y maduración de sistemas de diseño multi-marca.'
      : 'Leadership in design strategy of complex enterprise platforms and maturation of multi-brand design systems.',
    highlight: lang === 'es' ? 'Maduración de Sistemas de Diseño' : 'Design System Maturity'
  },
  {
    years: lang === 'es' ? '2026 - Presente' : '2026 - Present',
    company: 'Freelance',
    role: 'Product Designer',
    description: lang === 'es'
      ? 'Consultoría estratégica de experiencia de usuario para startups tecnológicas internacionales enfocadas en fintech y SaaS complejo.'
      : 'Strategic user experience consulting for international tech startups focused on fintech and complex SaaS.',
    highlight: lang === 'es' ? 'Consultoría Estratégica' : 'Strategic Consulting'
  }
];

export const PROJECTS = (lang: 'es' | 'en'): Project[] => [
  {
    id: 'xepelin-app',
    title: 'Xepelin App',
    category: 'Product',
    company: lang === 'es' ? 'Independiente' : 'Independent',
    description: lang === 'es' 
      ? 'Rediseño integral de la aplicación móvil enfocada en la gestión de capital de trabajo para empresas latinoamericanas.'
      : 'Comprehensive redesign of the mobile application focused on working capital management for Latin American enterprises.',
    fullDescription: lang === 'es'
      ? 'Un rediseño profundo de punta a punta enfocado en simplificar el factoraje financiero y la conciliación de facturas para directores financieros en PyMEs. Logramos simplificar flujos complejos de carga de documentos de 12 pasos a tan solo 3, reduciendo la fricción significativamente.'
      : 'A deep end-to-end redesign focused on simplifying financial factoring and invoice reconciliation for CFOs in SMEs. We simplified complex 12-step document uploading flows down to just 3 steps, significantly reducing user friction.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC49yZPz2l69bVup9tzj7xQdXzPoSWobUSg06tLzjNkEtHV3Upr29F09SZbEl37ES8TiVqmCC6FCRfuvWQyTuuGAYt7WTleQxdFrprZF2GLkb2Jwe1--QlPyYRRkEq3ssYx0r4vl_OByGdYCzFdJBTXFB2XEW1H8Jo0FFu0pjd-pl7RDuRUJ3sCE1XYuslD4U2yBLexm0N95uAseIfmU3TxRSUcEAIPKMhLmi1TJQD9VJiEd3UmwRk',
    role: lang === 'es' ? 'Diseñador de Producto Principal' : 'Lead Product Designer',
    impact: lang === 'es'
      ? 'Aumento del 42% en transacciones móviles mensuales y reducción del 30% en tickets de soporte técnico.'
      : '42% increase in monthly mobile transactions and 30% reduction in technical support tickets.',
    duration: lang === 'es' ? '6 meses (2025)' : '6 months (2025)',
    tools: ['Figma', 'Prototyping', 'User Interviews', 'Hotjar']
  },
  {
    id: 'saas-analytics',
    title: 'SaaS Analytics Dashboard',
    category: 'UX Research',
    company: 'Leracom',
    description: lang === 'es'
      ? 'Plataforma B2B para visualización de datos complejos mediante interfaces limpias y componentes modulares.'
      : 'B2B platform for complex data visualization using clean interfaces and modular components.',
    fullDescription: lang === 'es'
      ? 'Diseño e investigación de experiencia de usuario para una plataforma de analíticas multinivel de nivel empresarial. A través de extensas pruebas de usabilidad y sesiones de card sorting con analistas de datos, estructuramos un panel personalizable de widgets modulares altamente interactivos.'
      : 'UX research and design for an enterprise-grade multi-level analytics platform. Through extensive usability testing and card sorting sessions with data analysts, we structured a customizable dashboard of highly interactive modular widgets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLbLRtsjXcX8x-4-fQwObntjghCn3zptoCtvqKOli7_K_a8EAveZyyNkYxs2yJa9_HhCprzJ-3HI_PSgiZ_y89lCRlpWnnoYXu_Y-RIFCHsk4sJK5SdsmaV_pwpoHow3uRD46lBiYMfQmRggbodkbsLaDSRul6ltmJPpCSkLYREmk4l4jviP8cxt0HTNQA5lVg2xjFGYcZT6AbXBsCUpv16p3lveTRIrfpUDyX5m7hJYnjB_lIz48',
    role: lang === 'es' ? 'Investigador UX & Diseñador de Interacción' : 'UX Researcher & Interaction Designer',
    impact: lang === 'es'
      ? 'Mejora del 50% en el tiempo de generación de reportes y calificación de facilidad de uso (SUS) de 86/100.'
      : '50% improvement in report generation time and a System Usability Scale (SUS) rating of 86/100.',
    duration: lang === 'es' ? '4 meses (2025)' : '4 months (2025)',
    tools: ['User Testing', 'Figma', 'Maze', 'Miro']
  },
  {
    id: 'core-ui-library',
    title: 'Core UI Library',
    category: 'Website',
    company: 'Leracom',
    description: lang === 'es'
      ? 'Creación y escalado del sistema de diseño unificado para acelerar el desarrollo y mantener consistencia visual.'
      : 'Creation and scaling of the unified design system to accelerate development and maintain visual consistency.',
    fullDescription: lang === 'es'
      ? 'Lideré la conceptualización y documentación técnica de la biblioteca de interfaz del ecosistema. Definimos tokens de diseño de color, tipografía y espaciado siguiendo especificaciones modernas, proporcionando consistencia entre la web institucional y las aplicaciones nativas.'
      : 'Led the conceptualization and technical documentation of the ecosystem interface library. We defined design tokens for color, typography, and spacing according to modern specifications, providing consistency across corporate website and native apps.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUtak9-TLPnHrw6oB6EbZGFxjqRtud9JFxxAeN_FQ5Nx9ZiWzkdOP7p5FVRZIhd4NUn59Aup2yZ2VVVdXIMVXDJvzvveXVYBLS9uyMy1RlJ-RDXov3VW5aNHbP5IYORNOYaqbPmws-JoidU_QL3cBCpff8ZuQksM6yGR-FDwq2oI61j4BtDhy8fRpGUq4PtEtzaraRDps2dlnK5fAJcfSlXtKHQXUetjQwHxXCrIU2aKz9I9E6H-4',
    role: lang === 'es' ? 'Arquitecto del Sistema de Diseño' : 'Design System Architect',
    impact: lang === 'es'
      ? 'Reducción del 65% en tiempo de entrega de UI/UX por parte del equipo de ingeniería frontend.'
      : '65% reduction in UI/UX delivery time by the frontend engineering team.',
    duration: lang === 'es' ? '8 meses (2024)' : '8 months (2024)',
    tools: ['Figma Variable Tokens', 'Storybook', 'Tailwind', 'React']
  },
  {
    id: 'onboarding-flow',
    title: 'Onboarding Flow V2',
    category: 'Product',
    company: 'Yaydoo',
    description: lang === 'es'
      ? 'Optimización del embudo de conversión logrando un incremento del 35% en la retención de usuarios nuevos.'
      : 'Onboarding funnel optimization achieving a 35% increase in new user retention.',
    fullDescription: lang === 'es'
      ? 'Proyecto centrado en reestructurar el embudo de bienvenida y verificación de identidad para nuevos usuarios de banca digital. Rediseñamos las pantallas explicativas con ilustraciones contextuales y retroalimentación interactiva en tiempo real.'
      : 'Project centered on restructuring the welcome and identity verification funnel for new digital banking users. We redesigned explanatory screens with contextual illustrations and real-time interactive feedback.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBil8zb8hzr-GZVA8zc8iOfw5S2W-2i49pp_iDyk1Uzi5agpJ_sMYIjjJmOLexo4p5bRG9_liNYUJL3pU6lF2YS8iIuxc2zWwNOTmkVbCdqErIVymTphoUg4f4H__odp3Djz-5-oJceW7JA9Eu-BiL97P8xFrFKFyy6ASkFxpulk4-QY2JlSoVmo9LVRhrq290COBuKiLTMQLcGILiSpLvCC_e-kEmP7SD8vC8099o1WenfQC5uX6k',
    role: lang === 'es' ? 'Diseñador de Producto Senior' : 'Senior Product Designer',
    impact: lang === 'es'
      ? 'Incremento del 35% en la tasa de activación de cuentas en los primeros 7 días.'
      : '35% increase in bank account activation rate within the first 7 days.',
    duration: lang === 'es' ? '3 meses (2024)' : '3 months (2024)',
    tools: ['Figma', 'Interactive Micro-interactions', 'Amplitude']
  },
  {
    id: 'wealth-tracker',
    title: 'Wealth Tracker',
    category: 'Website',
    company: 'Yaydoo',
    description: lang === 'es'
      ? 'Herramienta integral para inversores institucionales, priorizando la legibilidad de datos y accesibilidad.'
      : 'Comprehensive tool for institutional investors, prioritizing data legibility and accessibility.',
    fullDescription: lang === 'es'
      ? 'Creación de un portal de consulta y visualización de fondos de inversión privados de alta gama. El enfoque visual se basó en una legibilidad suprema, tipografía de grado editorial y componentes altamente accesibles siguiendo pautas WCAG 2.1.'
      : 'Creation of a query and visualization portal for high-end private investment funds. The visual approach relied on supreme legibility, editorial-grade typography, and highly accessible components following WCAG 2.1 guidelines.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlZaMZFLfB_YJh6fYpYa5WPMbcADzdv1I5gticGn5zP9-GaEmBpgNRh1uSIOfwzMfBEflcc8iRk20QgsEj3j8iurZEuYV0OSQOdFAstK9HXGVKdP2wo-oOtjo0_8XYyT6n8cFtf_hbXh89EOStcmqQBuMQhmY0VLyonK2EUP0qfacclgF66VltfiRIjF63eO98lbKIraOo-gGk4xSZNTBnAt2NKd_mEc3bvJEIMdXOd4vMJe0SnaE',
    role: lang === 'es' ? 'Diseñador de Interfaz & UX Líder' : 'Lead Visual & UX Designer',
    impact: lang === 'es'
      ? 'Tiempo de sesión promedio incrementado en un 25% gracias a visualizaciones de datos claras e intuitivas.'
      : 'Average session time increased by 25% due to clear and intuitive data visualizations.',
    duration: lang === 'es' ? '5 meses (2024)' : '5 months (2024)',
    tools: ['Figma', 'D3.js integration concepts', 'A11y Testing', 'High-Fidelity Mockups']
  }
];

export const FAQS = (lang: 'es' | 'en'): FAQItem[] => [
  {
    question: lang === 'es' ? '¿Cuál es tu proceso de diseño?' : 'What is your design process?',
    answer: lang === 'es' 
      ? 'Mi proceso comienza con Discovery y Research para entender el problema real. Luego pasamos a ideación, prototipado rápido, y pruebas con usuarios antes de finalizar con UI de alta fidelidad y handoff.'
      : 'My process starts with Discovery and Research to understand the real problem. Then we proceed to ideation, rapid prototyping, and user testing before finalizing with high-fidelity UI and developer handoff.'
  },
  {
    question: lang === 'es' ? '¿Trabajas como freelance o tiempo completo?' : 'Do you work as freelance or full-time?',
    answer: lang === 'es'
      ? 'Actualmente acepto proyectos freelance seleccionados que se alineen con mis áreas de expertise en fintech y B2B SaaS.'
      : 'Currently, I accept select freelance projects that align with my expertise in fintech and B2B SaaS.'
  },
  {
    question: lang === 'es' ? '¿Qué herramientas utilizas?' : 'What tools do you use?',
    answer: lang === 'es'
      ? 'Principalmente Figma para diseño y prototipado, complementado con herramientas de research como Maze o Hotjar, y plataformas de gestión como Jira o Linear.'
      : 'Primarily Figma for design and prototyping, complemented by research tools like Maze or Hotjar, and management platforms like Jira or Linear.'
  }
];

// The Onboarding Tour with 3 steps: Presentation, Projects, and Career Roadmap.
export const TOUR_STEPS = (lang: 'es' | 'en'): TourStep[] => [
  {
    targetId: 'tour-title-hero',
    title: lang === 'es' ? '1. Presentación' : '1. Introduction',
    text: lang === 'es' 
      ? 'Te presento mi portafolio profesional de diseño de productos. Aquí encontrarás una selección meticulosa de mis proyectos más representativos, métricas clave, trayectoria y FAQs.'
      : 'Welcome to my professional product design portfolio. Here you will find a meticulous selection of my most representative projects, key metrics, roadmap, and FAQs.'
  },
  {
    targetId: 'tour-title-projects',
    title: lang === 'es' ? '2. Portafolio de Proyectos' : '2. Project Portfolio',
    text: lang === 'es'
      ? 'Explora mi trabajo filtrado por categoría o compañía. Cada tarjeta cuenta con detalles interactivos sobre el impacto de diseño, rol desempeñado, duración y herramientas utilizadas.'
      : 'Explore my work filtered by category or company. Each card contains interactive details about design impact, role, duration, and tools used.'
  },
  {
    targetId: 'tour-title-roadmap',
    title: lang === 'es' ? '3. Mi Trayectoria' : '3. Career Roadmap',
    text: lang === 'es'
      ? 'Una vista tipo Gantt interactiva que detalla mis etapas en Yaydoo, Leracom y como Consultor Independiente, mostrando mi evolución en liderazgo, UX y diseño de productos.'
      : 'An interactive Gantt-style timeline detailing my stages at Yaydoo, Leracom, and as an Independent Consultant, showcasing my evolution in leadership, UX, and product design.'
  }
];
