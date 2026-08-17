import { Project, Metric, FAQItem, RoadmapItem } from '../types';
import { CONTACT_GITHUB } from '../config/contact';
import { CV_DOWNLOAD_NAME, CV_HREF } from '../config/cv';

export const TRANSLATIONS = {
  es: {
    brandName: '',
    navProjects: 'Proyectos',
    navAbout: 'Sobre mí',
    navFaq: 'Preguntas Frecuentes',
    navContact: 'Contacto',
    navMetrics: 'Métricas',
    navRoadmap: 'Trayectoria',
    labTitle: 'Laboratorio',
    labDescription: 'Prueba animaciones y consulta el Design System.',
    labDesignSystem: 'Documentación Design System',
    labVersion: 'Versión',
    labVersionLink: 'Ver historial en GitHub',
    labAnimation: 'Animaciones de entrada',
    labAnimationHelpLabel: 'Cómo funcionan las animaciones de entrada',
    labAnimationHelp: 'Cambia la forma en que se presenta el contenido del sitio web mediante diferentes estilos de animación.',
    evalPage: 'Evaluar Página',
    langSelect: 'Idioma',
    loadingLabel: 'Cargando el contenido de la página...',
    splashLine: 'Bienvenido a mi portafolio',
    splashYear: '2026',
    splashHint: 'Haz clic o desplázate para continuar',
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
    contactTitle: 'Contacto',
    contactDesc: 'Si tienes alguna pregunta, comentario o feedback, puedes contactarme directamente en mi LinkedIn o escribirme a andur-design@outlook.com',
    contactLinkedin: 'Abrir LinkedIn',
    contactEmailCta: 'Enviar correo',
    faqTitle: 'Preguntas Frecuentes',
    faqDesc: 'Respuestas rápidas a las consultas más comunes sobre mi flujo de trabajo.',
    faqCategoryDesign: 'Diseño y Construcción',
    faqCategoryCollaboration: 'Colaboración',
    faqCategoryProfile: 'Perfil y Recursos',
    dsModalTitle: 'Documentación del Design System',
    dsModalSubtitle: 'Tokens de diseño y componentes dinámicos para Light mode y Dark mode.',
    dsPaletteTitle: 'Paleta de Colores',
    dsPaletteDesc: 'Colores base utilizados según el tema activo para mantener armonía visual.',
    dsTypographyTitle: 'Tipografía (Inter)',
    dsTypographyDesc: 'Escala de página y la tipografía de overlays: títulos y cuerpo de modales, Laboratorio y documentación.',
    dsShapesTitle: 'Formas & Bordes',
    dsShapesDesc: 'Radios de redondeo estándar aplicados de forma consistente.',
    dsIconsTitle: 'Iconos',
    dsIconsDesc: 'Iconografía lineal de Lucide, en un recuadro redondeado con borde. El trazo usa el degradado azul a violeta del sistema; en oscuro el recuadro y el trazo son más claros para conservar contraste.',
    dsBreakpointsTitle: 'Breakpoints',
    dsBreakpointsDesc: 'Los cuatro breakpoints de Tailwind que usa el sitio: default, sm, md y lg.',
    dsComponentsTitle: 'Muestra de Componentes',
    dsComponentsDesc: 'Interactúa con los bloques elementales del sistema.',
    dsBtnPrimary: 'Botón Primario',
    dsBtnSecondary: 'Botón Secundario',
    dsBadge: 'Categoría',
    dsAccordion: 'Acordeón Expandible',
    dsAccordionText: 'Este es el estilo de acordeón interactivo usado para responder dudas frecuentes.',
    dsTooltipTitle: 'Tooltip',
    dsTooltipDesc: 'Una ayuda breve que aparece al pasar el cursor, enfocarla con teclado o tocar el ícono.',
    dsTooltipExample: 'Este es un ejemplo de tooltip.',
    toastThemeLight: 'Modo claro activado',
    toastThemeDark: 'Modo oscuro activado',
    toastLanguageChanged: 'Idioma cambiado correctamente',
    toastToastLabel: 'Notificación',
    footerCopyright: '© 2026 Portafolio. Creado con IA y precisión por Andur.',
    brandsTitle: 'Proyectos en los que he participado',
    roadmapTitle: 'Trayectoria Profesional',
    roadmapDesc: 'Mi camino como diseñador de producto, colaborando con empresas líderes y resolviendo problemas complejos.',
  },
  en: {
    brandName: '',
    navProjects: 'Projects',
    navAbout: 'About me',
    navFaq: 'FAQ\'s',
    navContact: 'Contact',
    labTitle: 'Laboratory',
    labDescription: 'Try animations and open the Design System.',
    labDesignSystem: 'Design System Docs',
    labVersion: 'Version',
    labVersionLink: 'View history on GitHub',
    labAnimation: 'Entrance animations',
    labAnimationHelpLabel: 'How entrance animations work',
    labAnimationHelp: 'Change how the website content is presented by using different animation styles.',
    evalPage: 'Evaluate Page',
    langSelect: 'Language',
    loadingLabel: 'Loading the page content...',
    splashLine: 'Welcome to my portfolio',
    splashYear: '2026',
    splashHint: 'Click or scroll to continue',
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
    contactTitle: 'Contact',
    contactDesc: 'If you have any questions, comments or feedback, you can contact me directly at my LinkedIn or write to me at andur-design@outlook.com',
    contactLinkedin: 'Open LinkedIn',
    contactEmailCta: 'Send email',
    faqTitle: 'FAQ\'s',
    faqDesc: 'Quick answers to the most common queries about my workflow.',
    faqCategoryDesign: 'Design and Build',
    faqCategoryCollaboration: 'Collaboration',
    faqCategoryProfile: 'Profile and Resources',
    dsModalTitle: 'Design System Documentation',
    dsModalSubtitle: 'Design tokens and dynamic components for Light mode and Dark mode.',
    dsPaletteTitle: 'Color Palette',
    dsPaletteDesc: 'Base colors used depending on the active theme to maintain visual harmony.',
    dsTypographyTitle: 'Typography (Inter)',
    dsTypographyDesc: 'Page scale plus overlay type: titles and body for modals, Laboratory, and documentation.',
    dsShapesTitle: 'Shapes & Borders',
    dsShapesDesc: 'Standard corner radius applied consistently across elements.',
    dsIconsTitle: 'Icons',
    dsIconsDesc: 'Linear Lucide icons in a rounded bordered square. The stroke uses the system blue-to-violet gradient; in dark mode the well and stroke are lighter to keep contrast.',
    dsBreakpointsTitle: 'Breakpoints',
    dsBreakpointsDesc: 'The four Tailwind breakpoints used on this site: default, sm, md, and lg.',
    dsComponentsTitle: 'Components Showcase',
    dsComponentsDesc: 'Interact with the elemental blocks of the system.',
    dsBtnPrimary: 'Primary Button',
    dsBtnSecondary: 'Secondary Button',
    dsBadge: 'Category',
    dsTooltipTitle: 'Tooltip',
    dsTooltipDesc: 'A short hint that appears on hover, keyboard focus, or when the icon is tapped.',
    dsTooltipExample: 'This is a tooltip example.',
    dsAccordion: 'Expandable Accordion',
    dsAccordionText: 'This is the interactive accordion style used to answer frequently asked questions.',
    toastThemeLight: 'Light mode active',
    toastThemeDark: 'Dark mode active',
    toastLanguageChanged: 'Language changed successfully',
    toastToastLabel: 'Notification',
    footerCopyright: '© 2026 Portfolio. Built with AI and precision by Andur.',
    brandsTitle: 'Projects I have participated in',
    roadmapTitle: 'Professional Roadmap',
    roadmapDesc: 'My journey as a product designer, collaborating with leading companies and solving complex problems.',
    navMetrics: 'Metrics',
    navRoadmap: 'Roadmap',
  }
};

export const METRICS = (lang: 'es' | 'en'): Metric[] => [
  { value: '11+', label: lang === 'es' ? 'proyectos en los que he participado' : 'projects I have participated in', icon: 'projects' },
  { value: '74+', label: lang === 'es' ? 'flujos y módulos diseñados' : 'flows and modules designed', icon: 'flows' },
  { value: '14,000+', label: lang === 'es' ? 'horas diseñando' : 'hours designing', icon: 'hours' }
];

export const DESIGN_BREAKPOINTS = (lang: 'es' | 'en') => [
  {
    id: 'default',
    title: lang === 'es' ? 'Móvil' : 'Mobile',
    value: 'default · < 640px',
    icon: 'phone' as const,
  },
  {
    id: 'sm',
    title: lang === 'es' ? 'Tablet pequeña' : 'Small tablet',
    value: 'sm · ≥ 640px',
    icon: 'tablet' as const,
  },
  {
    id: 'md',
    title: lang === 'es' ? 'Tablet' : 'Tablet',
    value: 'md · ≥ 768px',
    icon: 'tablet' as const,
  },
  {
    id: 'lg',
    title: lang === 'es' ? 'Escritorio' : 'Desktop',
    value: 'lg · ≥ 1024px',
    icon: 'laptop' as const,
  },
];

export const ROADMAP = (lang: 'es' | 'en'): RoadmapItem[] => [
  {
    years: lang === 'es' ? 'Mar. 2019 – Ene. 2025' : 'Mar 2019 – Jan 2025',
    tenure: lang === 'es' ? '5 años y 11 meses' : '5 years and 11 months',
    company: 'Yaydoo',
    role: 'UX/UI Designer',
    description: lang === 'es'
      ? 'Responsable del diseño e investigación de productos de software financiero y conciliación para miles de corporativos y PYMEs.'
      : 'Responsible for product design and research of financial and reconciliation software products for thousands of corporates and SMEs.',
    highlight: lang === 'es' ? 'Rediseño de flujos financieros clave' : 'Redesign of key financial flows'
  },
  {
    years: lang === 'es' ? 'Jun. 2023 – Ene. 2026' : 'Jun 2023 – Jan 2026',
    tenure: lang === 'es' ? '2 años y 8 meses' : '2 years and 8 months',
    company: 'Leracom AI',
    role: 'Product Designer',
    description: lang === 'es'
      ? 'Liderazgo en estrategia de diseño de plataformas empresariales complejas y maduración de sistemas de diseño multi-marca.'
      : 'Leadership in design strategy of complex enterprise platforms and maturation of multi-brand design systems.',
    highlight: lang === 'es' ? 'Maduración de Sistemas de Diseño' : 'Design System Maturity'
  },
  {
    years: lang === 'es' ? 'Ene. 2026 – Presente' : 'Jan 2026 – Present',
    tenure: lang === 'es' ? '8 meses' : '8 months',
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
    question: lang === 'es' ? '¿Qué tipo de productos diseño?' : 'What types of products do you design?',
    answer: lang === 'es'
      ? 'Diseño productos digitales, plataformas SaaS, landing pages y sitios web.'
      : 'I design digital products, SaaS platforms, landing pages, and websites.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Cuál es tu proceso de diseño?' : 'What is your design process?',
    answer: lang === 'es'
      ? 'Trabajo en cuatro etapas.\n\nDiscovery. Entiendo el problema, los objetivos del negocio, las necesidades de las personas usuarias y las restricciones del proyecto.\n\nDefinición. Ordeno esa información en requerimientos, arquitectura de información, flujos y criterios de éxito.\n\nDiseño. Exploro la interfaz, prototipo y valido con usuarios y stakeholders antes de ampliar el alcance.\n\nConstrucción. Si el proyecto requiere Design Engineering, acompaño la implementación para cuidar componentes, documentación y consistencia.'
      : 'I work in four stages.\n\nDiscovery. I understand the problem, business goals, user needs, and project constraints.\n\nDefinition. I turn that understanding into requirements, information architecture, flows, and success criteria.\n\nDesign. I explore the interface, prototype, and validate with users and stakeholders before expanding the scope.\n\nBuild. If the project needs Design Engineering, I support implementation to keep components, documentation, and consistency in good shape.'
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
      ? 'Hay tareas que sí se pueden delegar a la IA, como explorar alternativas, documentar o generar una primera versión. Otras necesitan criterio experto: producto, usabilidad, accesibilidad y calidad.\n\nNo todas las decisiones las debe tomar la IA. Cada resultado se revisa y hay supervisión constante antes de implementarlo.'
      : 'Some tasks can be delegated to AI, such as exploring alternatives, documenting, or generating a first version. Others need expert judgment: product decisions, usability, accessibility, and quality.\n\nNot every decision should be made by AI. Each result is reviewed, and there is constant supervision before it is implemented.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿También desarrollas los productos que diseñas?' : 'Do you also develop the products you design?',
    answer: lang === 'es'
      ? 'Este portafolio se construyó con inteligencia artificial. En proyectos nuevos o sencillos puedo llevar un producto hasta desarrollo con ese mismo enfoque.\n\nTodavía no he trabajado en un equipo AI-first junto a un desarrollador para temas más específicos como inicios de sesión, backend o seguridad. Prefiero seguir desarrollando esas habilidades o colaborar con un desarrollador para cubrirlos.'
      : 'This portfolio was built with artificial intelligence. On new or simple projects I can take a product through to development with that same approach.\n\nI have not yet worked on an AI-first team alongside a developer for more specific topics such as sign-in, backend, or security. I prefer to keep building those skills or partner with a developer to cover them.'
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
      ? 'Sí. He colaborado con equipos distribuidos y personas ubicadas en México, Colombia, Chile y Estados Unidos.'
      : 'Yes. I have collaborated with distributed teams and people based in Mexico, Colombia, Chile, and the United States.'
  },
  {
    category: 'profile',
    question: lang === 'es' ? '¿En dónde puedo ver tus repositorios?' : 'Where can I see your repositories?',
    answer: lang === 'es'
      ? 'Puedes consultar mis repositorios públicos en GitHub.'
      : 'You can browse my public repositories on GitHub.',
    link: {
      label: lang === 'es' ? 'Ir a mi GitHub' : 'Go to my GitHub',
      href: CONTACT_GITHUB,
      external: true
    }
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿Qué experiencia tienes con Design Systems?' : 'What experience do you have with Design Systems?',
    answer: lang === 'es'
      ? 'Construí el Design System Grill en Yaydoo, mediante la metodología de Atomic Design, homologando la base visual y funcional de más de seis productos.'
      : 'I built the Grill Design System at Yaydoo using Atomic Design, standardizing the visual and functional foundation of more than six products.'
  },
  {
    category: 'design',
    question: lang === 'es' ? '¿En qué etapas de un producto puedes participar?' : 'At which stages of a product can you contribute?',
    answer: lang === 'es'
      ? 'Puedo participar desde la definición inicial hasta la publicación de una versión funcional:\n\n- Product Discovery y entendimiento del problema.\n- Investigación y validación con usuarios.\n- Arquitectura de información y flujos.\n- UX/UI y prototipado.\n- Definición de componentes y Design Systems.\n- Validación e iteración.\n- Documentación del producto.'
      : 'I can contribute from the initial definition through publishing a functional version:\n\n- Product Discovery and problem understanding.\n- Research and user validation.\n- Information architecture and flows.\n- UX/UI and prototyping.\n- Component and Design System definition.\n- Validation and iteration.\n- Product documentation.'
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
      ? 'La disponibilidad depende de mi compromiso laboral activo y del alcance de cada proyecto.'
      : 'Availability depends on my active work commitment and the scope of each project.'
  },
  {
    category: 'profile',
    question: lang === 'es' ? '¿Dónde puedo consultar o descargar tu CV?' : 'Where can I view or download your CV?',
    answer: lang === 'es'
      ? 'Puedes descargar y consultar mi experiencia, habilidades y principales resultados en el siguiente botón:'
      : 'You can download and review my experience, skills, and key results with the following button:',
    link: {
      label: lang === 'es' ? 'Descargar CV' : 'Download CV',
      href: CV_HREF,
      download: CV_DOWNLOAD_NAME
    }
  }
];
