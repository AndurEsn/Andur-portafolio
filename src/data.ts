import { Project, Metric, FAQItem, TourStep, RoadmapItem } from './types';
import cvFile from './assets/documents/andur-cv-2026.pdf';

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
    heroTitle: '¡Hola! Soy Andur',
    heroDesc: 'Product Designer con 7+ años de experiencia en productos SaaS, fintech e IA. Combino UX/UI, estrategia de producto y Design Engineering para transformar problemas complejos en soluciones funcionales.',
    heroBtn: 'Descargar CV',
    heroProjectsBtn: 'Ver proyectos',
    metricsTitle: 'Métricas',
    metricsLabel: '7 años de experiencia reflejados en resultados.',
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
    faqCategoryDesign: 'Diseño y construcción',
    faqCategoryCollaboration: 'Colaboración',
    faqCategoryProfile: 'Perfil y recursos',
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
    toastTourCompleteTitle: 'Product Tour concluido exitosamente',
    toastTourComplete: 'Recorrido finalizado.',
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
    heroTitle: "Hi! I'm Andur",
    heroDesc: 'Product Designer with 7+ years of experience in SaaS, fintech, and AI products. I combine UX/UI, product strategy, and Design Engineering to turn complex problems into functional solutions.',
    heroBtn: 'Download CV',
    heroProjectsBtn: 'View projects',
    metricsTitle: 'Metrics',
    metricsLabel: '7 years of experience reflected in results.',
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
    faqCategoryDesign: 'Design and build',
    faqCategoryCollaboration: 'Collaboration',
    faqCategoryProfile: 'Profile and resources',
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
    toastTourCompleteTitle: 'Product Tour completed successfully',
    toastTourComplete: 'Tour complete.',
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
  { value: '11+', label: lang === 'es' ? 'proyectos desarrollados' : 'projects developed', icon: 'projects' },
  { value: '74+', label: lang === 'es' ? 'flujos y módulos diseñados' : 'flows and modules designed', icon: 'flows' },
  { value: '14,000', label: lang === 'es' ? 'horas diseñando' : 'hours designing', icon: 'hours' }
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
    category: 'design',
    question: lang === 'es' ? '¿Qué tipo de productos diseñas?' : 'What types of products do you design?',
    answer: lang === 'es'
      ? 'Diseño productos digitales, plataformas SaaS, experiencias basadas en inteligencia artificial y sitios web funcionales. Mi experiencia se concentra en fintech, productos B2B, automatización y procesos operativos complejos.'
      : 'I design digital products, SaaS platforms, AI-powered experiences, and functional websites. My experience is focused on fintech, B2B products, automation, and complex operational processes.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Cuál es tu proceso de diseño?' : 'What is your design process?',
    answer: lang === 'es'
      ? 'Inicio entendiendo el problema, los objetivos del negocio, las necesidades de los usuarios y las restricciones del proyecto. Después defino requerimientos, arquitectura de información, flujos, interacciones y la base visual del producto.\n\nGenero una primera versión funcional mediante herramientas de diseño e inteligencia artificial, la valido con usuarios y stakeholders, y la itero antes de ampliar su alcance. Cuando el proyecto lo requiere, lo llevo a un entorno local para mejorar componentes, documentación y consistencia.'
      : 'I start by understanding the problem, business goals, user needs, and project constraints. Then I define requirements, information architecture, flows, interactions, and the product’s visual foundation.\n\nI create a first functional version using design and AI tools, validate it with users and stakeholders, and iterate before expanding its scope. When needed, I bring the project into a local environment to improve components, documentation, and consistency.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Qué significa que trabajas con un proceso AI-first?' : 'What does it mean that you work with an AI-first process?',
    answer: lang === 'es'
      ? 'Significa que integro inteligencia artificial desde las primeras etapas para acelerar la investigación, exploración de interfaces, documentación, prototipado e implementación.\n\nLa IA no sustituye las decisiones de diseño. Yo defino el contexto, los objetivos, las reglas, la arquitectura, los criterios de calidad y las iteraciones necesarias para mantener coherencia entre el problema y la solución.'
      : 'It means I integrate artificial intelligence from the earliest stages to accelerate research, interface exploration, documentation, prototyping, and implementation.\n\nAI does not replace design decisions. I define the context, goals, rules, architecture, quality criteria, and iterations needed to keep the problem and solution coherent.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Cómo utilizas la inteligencia artificial de forma responsable?' : 'How do you use artificial intelligence responsibly?',
    answer: lang === 'es'
      ? 'No considero el primer resultado generado como una solución final. Reviso su coherencia, usabilidad, accesibilidad, contenido, estados, componentes y relación con los objetivos del producto.\n\nTambién documento las decisiones importantes y valido los resultados antes de implementarlos. La IA acelera la ejecución, pero las decisiones de producto y diseño permanecen bajo supervisión humana.'
      : 'I do not treat the first generated result as a final solution. I review its coherence, usability, accessibility, content, states, components, and relationship to product goals.\n\nI also document important decisions and validate outcomes before implementation. AI accelerates execution, but product and design decisions remain under human supervision.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿También desarrollas los productos que diseñas?' : 'Do you also develop the products you design?',
    answer: lang === 'es'
      ? 'Puedo convertir diseños en prototipos funcionales y sitios web desplegables mediante desarrollo asistido por inteligencia artificial.\n\nPuedo modificar de forma directa la arquitectura de información, UX/UI, contenido, componentes visuales, HTML y CSS. Para cambios más complejos de código, implementación o despliegue utilizo asistencia de IA mientras continúo desarrollando mis capacidades de Design Engineering.'
      : 'I can turn designs into functional prototypes and deployable websites through AI-assisted development.\n\nI can directly modify information architecture, UX/UI, content, visual components, HTML, and CSS. For more complex code, implementation, or deployment work, I use AI assistance while continuing to grow my Design Engineering skills.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Trabajas con front-end, APIs o bases de datos?' : 'Do you work with front-end, APIs, or databases?',
    answer: lang === 'es'
      ? 'Actualmente mi experiencia se concentra en front-end, prototipos funcionales y sitios web. Puedo trabajar directamente con HTML y CSS, revisar la estructura del proyecto y ajustar componentes visuales.\n\nEstoy ampliando mis conocimientos sobre APIs y bases de datos mediante proyectos prácticos y desarrollo asistido por inteligencia artificial.'
      : 'My current experience focuses on front-end work, functional prototypes, and websites. I can work directly with HTML and CSS, review a project’s structure, and adjust visual components.\n\nI am expanding my knowledge of APIs and databases through practical projects and AI-assisted development.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Qué herramientas utilizas?' : 'What tools do you use?',
    answer: lang === 'es'
      ? 'Para diseño y prototipado utilizo Figma, Google Stitch, Google AI Studio y Lovable.\n\nPara Design Engineering trabajo con Codex, Cursor, GitHub y Vercel.\n\nTambién utilizo ChatGPT, Claude, Gemini, Retell AI, Maze, Useberry, Hotjar, Jira, Productboard, Miro y Slack, según las necesidades del proyecto.'
      : 'For design and prototyping, I use Figma, Google Stitch, Google AI Studio, and Lovable.\n\nFor Design Engineering, I work with Codex, Cursor, GitHub, and Vercel.\n\nI also use ChatGPT, Claude, Gemini, Retell AI, Maze, Useberry, Hotjar, Jira, Productboard, Miro, and Slack according to each project’s needs.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Cuáles son tus principales habilidades?' : 'What are your main skills?',
    answer: lang === 'es'
      ? 'Mis principales habilidades incluyen Product Design end-to-end, Product Discovery, UX Research, UX/UI Design, arquitectura de información, Interaction Design, Design Systems, Conversational UX, prototipado funcional, definición de MVP, priorización de producto y gestión de stakeholders.'
      : 'My main skills include end-to-end Product Design, Product Discovery, UX Research, UX/UI Design, information architecture, Interaction Design, Design Systems, Conversational UX, functional prototyping, MVP definition, product prioritization, and stakeholder management.'
  },
  {
    category: 'collaboration',
    question: lang === 'es' ? '¿Puedes realizar investigación y pruebas con usuarios?' : 'Can you conduct research and user testing?',
    answer: lang === 'es'
      ? 'Sí. Puedo planear y realizar entrevistas, encuestas, pruebas de usabilidad y análisis de comportamiento sin depender de otro perfil de investigación.\n\nTambién puedo sintetizar los hallazgos, detectar patrones, definir oportunidades y convertir los resultados en mejoras concretas para el producto.'
      : 'Yes. I can plan and conduct interviews, surveys, usability tests, and behavioral analysis without depending on another research role.\n\nI can also synthesize findings, identify patterns, define opportunities, and turn results into concrete product improvements.'
  },
  {
    category: 'collaboration',
    question: lang === 'es' ? '¿Cómo trabajas con Product Managers y equipos de desarrollo?' : 'How do you work with Product Managers and development teams?',
    answer: lang === 'es'
      ? 'Trabajo con Product Managers para definir el problema, alcance, prioridades, métricas, dependencias y criterios de éxito.\n\nCon los equipos de desarrollo reviso viabilidad, estados, reglas de negocio, componentes y restricciones técnicas. Busco que las decisiones queden documentadas y que el equipo entienda qué se diseñó y por qué.'
      : 'I work with Product Managers to define the problem, scope, priorities, metrics, dependencies, and success criteria.\n\nWith development teams, I review feasibility, states, business rules, components, and technical constraints. I aim to keep decisions documented so the team understands what was designed and why.'
  },
  {
    category: 'collaboration',
    question: lang === 'es' ? '¿Tienes experiencia trabajando directamente con clientes?' : 'Do you have experience working directly with clients?',
    answer: lang === 'es'
      ? 'Sí. He liderado sesiones de discovery, levantamiento de requerimientos, validación y seguimiento con clientes de servicios financieros, cobranza, prospección y reclutamiento.\n\nEsta experiencia me permitió traducir procesos operativos en arquitecturas de información, reglas, excepciones, flujos digitales y experiencias conversacionales.'
      : 'Yes. I have led discovery sessions, requirements gathering, validation, and follow-up with clients in financial services, collections, prospecting, and recruitment.\n\nThis experience has allowed me to translate operational processes into information architectures, rules, exceptions, digital flows, and conversational experiences.'
  },
  {
    category: 'collaboration',
    question: lang === 'es' ? '¿Tienes experiencia trabajando con equipos internacionales?' : 'Do you have experience working with international teams?',
    answer: lang === 'es'
      ? 'Sí. He colaborado con equipos distribuidos y personas ubicadas en México, Colombia, Chile y España.\n\nMi nivel de inglés es B2 y puedo participar en documentación, reuniones y colaboración profesional en inglés.'
      : 'Yes. I have collaborated with distributed teams and people based in Mexico, Colombia, Chile, and Spain.\n\nMy English level is B2, and I can participate in documentation, meetings, and professional collaboration in English.'
  },
  {
    category: 'profile',
    question: lang === 'es' ? '¿En qué idiomas están disponibles tu portafolio y tus repositorios?' : 'In which languages are your portfolio and repositories available?',
    answer: lang === 'es'
      ? 'Actualmente el contenido principal está disponible en español. Un portafolio puede ofrecer una versión completa en inglés, y los repositorios pueden incluir documentación bilingüe mediante archivos README separados o secciones en ambos idiomas.\n\nLa interfaz del producto, la documentación y los casos de estudio pueden traducirse sin necesidad de duplicar todo el código del proyecto.'
      : 'The main content is currently available in Spanish. A portfolio can offer a full English version, and repositories can include bilingual documentation through separate README files or sections in both languages.\n\nThe product interface, documentation, and case studies can be translated without duplicating the entire project codebase.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Qué experiencia tienes con Design Systems?' : 'What experience do you have with Design Systems?',
    answer: lang === 'es'
      ? 'Construí el Design System Grill mediante Atomic Design, homologando la base visual y funcional de más de seis productos.\n\nTambién trabajo con componentes reutilizables, patrones de interacción, documentación y criterios de calidad para mantener consistencia mientras un producto evoluciona.'
      : 'I built the Grill Design System using Atomic Design, standardizing the visual and functional foundation of more than six products.\n\nI also work with reusable components, interaction patterns, documentation, and quality criteria to maintain consistency as a product evolves.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿En qué etapas de un producto puedes participar?' : 'At which stages of a product can you contribute?',
    answer: lang === 'es'
      ? 'Puedo participar desde la definición inicial hasta la publicación de una versión funcional:\n\n- Product Discovery y entendimiento del problema.\n- Investigación y validación con usuarios.\n- Arquitectura de información y flujos.\n- UX/UI y prototipado.\n- Definición de componentes y Design Systems.\n- Validación e iteración.\n- Documentación del producto.\n- Desarrollo front-end asistido por IA.\n- Control de versiones y despliegue web.'
      : 'I can contribute from the initial definition through publishing a functional version:\n\n- Product Discovery and problem understanding.\n- Research and user validation.\n- Information architecture and flows.\n- UX/UI and prototyping.\n- Component and Design System definition.\n- Validation and iteration.\n- Product documentation.\n- AI-assisted front-end development.\n- Version control and web deployment.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Trabajas con un enfoque mobile-first?' : 'Do you work with a mobile-first approach?',
    answer: lang === 'es'
      ? 'Sí. Cuando el contexto del producto lo requiere, comienzo por la experiencia en pantallas pequeñas y después adapto la solución a tablet y escritorio.\n\nEste enfoque ayuda a priorizar contenido, jerarquía, navegación y acciones antes de ampliar la interfaz.'
      : 'Yes. When the product context requires it, I start with the experience on small screens and then adapt the solution for tablet and desktop.\n\nThis approach helps prioritize content, hierarchy, navigation, and actions before expanding the interface.'
  },
  {
    category: 'collaboration',
    question: lang === 'es' ? '¿Aceptas proyectos independientes?' : 'Do you accept independent projects?',
    answer: lang === 'es'
      ? 'Mi enfoque principal son las oportunidades laborales dentro de equipos de producto. Evalúo proyectos independientes únicamente cuando se relacionan con el diseño y desarrollo de sitios web.\n\nLa disponibilidad depende de mis compromisos activos y del alcance de cada proyecto.'
      : 'My main focus is career opportunities within product teams. I evaluate independent projects only when they relate to website design and development.\n\nAvailability depends on my active commitments and the scope of each project.'
  },
  {
    category: 'profile',
    question: lang === 'es' ? '¿Dónde puedo consultar o descargar tu CV?' : 'Where can I view or download your CV?',
    answer: lang === 'es'
      ? 'Puedes consultar mi experiencia, habilidades y principales resultados directamente en este portafolio.'
      : 'You can review my experience, skills, and key results directly in this portfolio.',
    link: {
      label: lang === 'es' ? 'Descarga mi CV aquí' : 'Download my CV here',
      href: cvFile,
      download: 'Andur-CV-2026.pdf'
    }
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
