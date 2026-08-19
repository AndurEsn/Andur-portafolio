import { Metric, FAQItem } from '../types';
import { CONTACT_GITHUB } from '../config/contact';
import { CV_HREF } from '../config/cv';

export { PROJECTS } from './projects';

export const TRANSLATIONS = {
  es: {
    brandName: '',
    navProjects: 'Proyectos',
    navAbout: 'Sobre mí',
    navFaq: 'Preguntas Frecuentes',
    navContact: 'Contacto',
    navMetrics: 'Métricas',
    navCv: 'CV',
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
    splashLine: 'Bienvenidxs, ¡Soy Andur!',
    splashPhrases: [
      'Soy Product Designer evolucionando hacia Design Engineering.',
      'Llevo más de 7 años diseñando productos SaaS, fintech e IA.',
      'Transformo problemas complejos en productos digitales claros.',
    ],
    splashHint: 'Haz clic o desplázate para continuar',
    errorHeading: '404',
    errorTitle: 'Página no encontrada',
    errorDesc: 'Lo sentimos, no pudimos encontrar el recurso que estabas buscando. Es posible que haya sido movido o eliminado de nuestro sistema.',
    errorBtn: 'Volver al inicio',
    errorToast: 'Oops, algo salió mal',
    heroTitle: '¡Hola! Soy Andur',
    heroDesc: 'Product Designer con 7+ años de experiencia en productos SaaS, fintech e IA. Combino UX/UI, estrategia de producto y Design Engineering para transformar problemas complejos en soluciones funcionales.',
    metricsTitle: 'Métricas',
    metricsLabel: '7 años de experiencia reflejados en resultados.',
    portfolioTitle: 'Proyectos Destacados',
    portfolioDesc: 'Una selección exclusiva de productos de software diseñados para maximizar métricas comerciales y simplificar la experiencia de usuario.',
    portfolioAll: 'Todos',
    viewProject: 'Ver proyecto',
    modalRole: 'Mi rol',
    modalDuration: 'Duración',
    modalImpact: 'Impacto',
    modalSummary: 'Resumen del Proyecto',
    modalTools: 'Herramientas y habilidades',
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
    dsPaletteSplash: 'Splash',
    dsTypographyTitle: 'Tipografía (Inter)',
    dsTypographyDesc: 'La tipografía del sitio es Inter. Abajo se muestran ejemplos de títulos, textos y componentes.',
    dsShapesTitle: 'Formas & Bordes',
    dsShapesDesc: 'Radios de redondeo estándar aplicados de forma consistente.',
    dsIconsTitle: 'Iconos',
    dsIconsDesc: 'Iconografía lineal de Lucide, con el degradado azul a violeta del sistema.',
    dsBreakpointsTitle: 'Breakpoints',
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
    splashLine: "Welcome, I'm Andur!",
    splashPhrases: [
      'I’m a Product Designer evolving into Design Engineering.',
      'I’ve spent 7+ years designing SaaS, fintech, and AI products.',
      'I turn complex problems into clear digital products.',
    ],
    splashHint: 'Click or scroll to continue',
    errorHeading: '404',
    errorTitle: 'Page not found',
    errorDesc: 'Sorry, we could not find the resource you were looking for. It might have been moved or removed from our system.',
    errorBtn: 'Back to home',
    errorToast: 'Oops, something went wrong',
    heroTitle: "Hi! I'm Andur",
    heroDesc: 'Product Designer with 7+ years of experience in SaaS, fintech, and AI products. I combine UX/UI, product strategy, and Design Engineering to turn complex problems into functional solutions.',
    metricsTitle: 'Metrics',
    metricsLabel: '7 years of experience reflected in results.',
    portfolioTitle: 'Featured Projects',
    portfolioDesc: 'An exclusive selection of software products designed to maximize business metrics and simplify user experience.',
    portfolioAll: 'All',
    viewProject: 'View project',
    modalRole: 'My role',
    modalDuration: 'Duration',
    modalImpact: 'Impact',
    modalSummary: 'Project Summary',
    modalTools: 'Tools and skills',
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
    dsPaletteSplash: 'Splash',
    dsTypographyTitle: 'Typography (Inter)',
    dsTypographyDesc: 'The typeface used on the site is Inter. Below are examples for titles, body text, and components.',
    dsShapesTitle: 'Shapes & Borders',
    dsShapesDesc: 'Standard corner radius applied consistently across elements.',
    dsIconsTitle: 'Icons',
    dsIconsDesc: 'Linear Lucide iconography, with the system blue-to-purple gradient.',
    dsBreakpointsTitle: 'Breakpoints',
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
    navMetrics: 'Metrics',
    navCv: 'Resume',
  }
};

export const METRICS = (lang: 'es' | 'en'): Metric[] => [
  { value: '11+', label: lang === 'es' ? 'proyectos en los que he participado' : 'projects I have participated in', icon: 'projects' },
  { value: '74+', label: lang === 'es' ? 'flujos y módulos diseñados' : 'flows and modules designed', icon: 'flows' },
  { value: '7+', label: lang === 'es' ? 'años de experiencia' : 'years of experience', icon: 'award' }
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
    question: lang === 'es' ? '¿Dónde puedo consultar tu CV?' : 'Where can I view your resume?',
    answer: lang === 'es'
      ? 'Puedes consultar mi experiencia, habilidades y principales resultados en el siguiente botón:'
      : 'You can review my experience, skills, and key results with the following button:',
    link: {
      label: lang === 'es' ? 'Ver CV' : 'View Resume',
      href: CV_HREF,
      external: true
    }
  }
];
