import grillCover from '../../assets/images/grill-design-system.png';
import { Language, Project } from '../../types';

export function grillProject(lang: Language): Project {
  const es = lang === 'es';

  return {
    id: 'grill-design-system',
    title: 'Grill Design System',
    subtitle: es
      ? 'Un sistema para unificar 7 productos fintech y acelerar el trabajo de diseño y desarrollo'
      : 'A system to unify 7 fintech products and speed up design and development work',
    eyebrow: 'Yaydoo · Product Design · Design Systems',
    category: 'Product',
    company: 'Yaydoo',
    description: es
      ? 'Un sistema para unificar 7 productos fintech y acelerar el trabajo de diseño y desarrollo'
      : 'A system to unify 7 fintech products and speed up design and development work',
    intro: es
      ? 'Diseñé desde cero la librería de **Grill Design System**, un sistema creado para homologar la experiencia visual y funcional de los productos de Yaydoo.\n\nDurante cinco meses definí foundations, componentes, variantes, estados y documentación bajo Atomic Design. El sistema terminó implementándose en **7 productos** y ayudó a aumentar la productividad en **40% en Diseño** y **35% en desarrollo front-end**.'
      : 'I designed the **Grill Design System** library from scratch, a system created to align the visual and functional experience of Yaydoo’s products.\n\nOver five months I defined foundations, components, variants, states, and documentation under Atomic Design. The system was implemented across **7 products** and helped increase productivity by **40% in Design** and **35% in front-end development**.',
    image: grillCover,
    role: 'Product Designer',
    duration: es ? '5 meses' : '5 months',
    impact: es
      ? '7 productos implementaron Grill. +40% de productividad en Diseño y +35% en front-end.'
      : '7 products implemented Grill. +40% productivity in Design and +35% in front-end.',
    impactStats: [
      {
        value: '7',
        label: es ? 'productos implementaron Grill' : 'products implemented Grill'
      },
      {
        value: '+40%',
        label: es ? 'productividad en Diseño' : 'productivity in Design'
      },
      {
        value: '+35%',
        label: es ? 'productividad en front-end' : 'productivity in front-end'
      }
    ],
    tools: ['Figma', 'Atomic Design', 'Design Systems'],
    sections: [
      {
        id: 'problem',
        title: es ? 'El problema' : 'The problem',
        body: es
          ? 'Yaydoo contaba con varios productos que habían evolucionado con diferentes criterios visuales y componentes.\n\nBotones, inputs, estados, espaciados y otros patrones podían comportarse o verse de forma diferente dependiendo del producto.\n\nEl reto era crear una base compartida que permitiera **homologar la familia de productos**, reducir trabajo repetido y facilitar que nuevas interfaces mantuvieran las mismas reglas de diseño.'
          : 'Yaydoo had several products that had evolved with different visual criteria and components.\n\nButtons, inputs, states, spacing, and other patterns could look or behave differently depending on the product.\n\nThe challenge was to create a shared foundation that would **unify the product family**, reduce repeated work, and make it easier for new interfaces to follow the same design rules.'
      },
      {
        id: 'contribution',
        title: es ? 'Mi contribución' : 'My contribution',
        body: es
          ? 'Mi responsabilidad principal fue **diseñar la librería completa de Grill desde cero**.\n\nTrabajé en:'
          : 'My main responsibility was to **design the complete Grill library from scratch**.\n\nI worked on:',
        items: es
          ? [
              'Definición de tipografía, colores, iconografía y foundations.',
              'Sistema de espaciado basado principalmente en una **cuadrícula de 8 puntos**, utilizando incrementos de 4 puntos cuando el componente lo requería.',
              'Construcción de componentes mediante **Atomic Design**.',
              'Definición de tamaños, variantes, estados y comportamientos.',
              'Validación funcional de los componentes mediante prototipos en Figma.',
              'Documentación de anatomía, medidas y reglas de uso en un proceso compartido que también supervisaba.',
              'Sesiones con el equipo de diseño para impulsar la adopción de la librería y recoger feedback.',
              'Aplicación directa del sistema durante el rediseño de **Buyer, Seller y PorCobrar**.'
            ]
          : [
              'Definition of typography, color, iconography, and foundations.',
              'A spacing system based mainly on an **8-point grid**, using 4-point increments when a component required it.',
              'Building components through **Atomic Design**.',
              'Definition of sizes, variants, states, and behaviors.',
              'Functional validation of components through Figma prototypes.',
              'Documentation of anatomy, measurements, and usage rules in a shared process that I also supervised.',
              'Sessions with the design team to drive library adoption and gather feedback.',
              'Direct application of the system during the redesign of **Buyer, Seller, and PorCobrar**.'
            ]
      },
      {
        id: 'process',
        title: es ? 'Cómo construí el sistema' : 'How I built the system',
        steps: [
          {
            number: '01',
            title: 'Foundations',
            body: es
              ? 'Antes de construir componentes establecí las reglas visuales que permitirían mantener consistencia entre productos.\n\nDefiní:'
              : 'Before building components, I established the visual rules that would keep consistency across products.\n\nI defined:',
            items: es
              ? [
                  'Tipografía.',
                  'Paleta de color.',
                  'Iconografía.',
                  'Espaciados.',
                  'Jerarquías visuales.',
                  'Cuadrícula basada en múltiplos de 8 y 4 puntos.'
                ]
              : [
                  'Typography.',
                  'Color palette.',
                  'Iconography.',
                  'Spacing.',
                  'Visual hierarchy.',
                  'A grid based on multiples of 8 and 4 points.'
                ],
            closing: es
              ? 'Estas reglas se convirtieron en la base para construir componentes reutilizables.'
              : 'These rules became the foundation for reusable components.'
          },
          {
            number: '02',
            title: es ? 'MVP de componentes principales' : 'MVP of core components',
            duration: es ? '2 meses' : '2 months',
            body: es
              ? 'Comencé por los componentes que aparecían con mayor frecuencia en los productos.\n\nEntre ellos:'
              : 'I started with the components that appeared most often across products.\n\nAmong them:',
            items: [
              'Buttons.',
              'Inputs.',
              'Password fields.',
              'Selection controls.',
              'Search.',
              'Text areas.',
              'Amount fields.',
              'Cards.'
            ],
            closing: es
              ? 'Cada componente contemplaba sus principales variantes y estados: default, focus, filled, success, error y disabled, según correspondiera.\n\nEl objetivo del primer mes era tener un **MVP suficientemente completo para comenzar a diseñar productos reales con Grill**.'
              : 'Each component included its main variants and states: default, focus, filled, success, error, and disabled, as applicable.\n\nThe goal of the first month was to have an **MVP complete enough to start designing real products with Grill**.'
          },
          {
            number: '03',
            title: es ? 'Expansión de la librería' : 'Library expansion',
            duration: es ? '2 meses' : '2 months',
            body: es
              ? 'Con la base funcionando, amplié Grill con componentes secundarios y patrones más específicos para los productos financieros de Yaydoo.\n\nLa librería terminó incluyendo alrededor de **25 familias de componentes**, desde elementos básicos como botones e inputs hasta Data Tables, Modals, Tabs, Dropdowns, Calendars, Skeletons y componentes especializados.\n\nEn esta etapa también iteraba componentes existentes cuando aparecían nuevos casos de uso.'
              : 'With the foundation in place, I expanded Grill with secondary components and more specific patterns for Yaydoo’s financial products.\n\nThe library ended up including around **25 component families**, from basics like buttons and inputs to Data Tables, Modals, Tabs, Dropdowns, Calendars, Skeletons, and specialized components.\n\nIn this stage I also iterated on existing components when new use cases appeared.'
          },
          {
            number: '04',
            title: es ? 'Documentación, expansión y mantenimiento' : 'Documentation, expansion, and maintenance',
            duration: es ? '2 meses' : '2 months',
            body: es
              ? 'Una vez que la librería alcanzó mayor madurez, profundizamos en la documentación.\n\nCada componente debía explicar:'
              : 'Once the library reached greater maturity, we went deeper into documentation.\n\nEach component had to explain:',
            items: es
              ? [
                  'Anatomía.',
                  'Dimensiones.',
                  'Espaciados.',
                  'Tipografía.',
                  'Iconografía.',
                  'Variantes.',
                  'Estados.',
                  'Mensajes de error y éxito.',
                  'Comportamientos especiales.'
                ]
              : [
                  'Anatomy.',
                  'Dimensions.',
                  'Spacing.',
                  'Typography.',
                  'Iconography.',
                  'Variants.',
                  'States.',
                  'Error and success messages.',
                  'Special behaviors.'
                ],
            closing: es
              ? 'Participé y supervisé este proceso de documentación compartida para reducir ambigüedad entre diseño y desarrollo.\n\nAl mismo tiempo, Grill continuaba evolucionando a partir de las necesidades encontradas al utilizarlo en productos reales.'
              : 'I participated in and supervised this shared documentation process to reduce ambiguity between design and development.\n\nAt the same time, Grill kept evolving from needs found while using it in real products.'
          }
        ]
      },
      {
        id: 'products',
        title: es ? 'Del sistema al producto' : 'From system to product',
        body: es
          ? 'Grill no se quedó como una librería aislada en Figma.\n\nEl sistema terminó implementándose en:'
          : 'Grill did not remain an isolated library in Figma.\n\nThe system was implemented in:',
        items: [
          'PorCobrar',
          'Vendorplace',
          'Buyer',
          'Seller',
          'Checkout',
          'Back Office',
          'P-Card'
        ],
        closing: es
          ? 'Además de construir la librería, participé directamente en el rediseño de **Buyer, Seller y PorCobrar** utilizando los componentes y reglas de Grill.\n\nEsto permitió detectar casos que no habíamos contemplado inicialmente y regresar ese aprendizaje al sistema.'
          : 'In addition to building the library, I took part directly in the redesign of **Buyer, Seller, and PorCobrar** using Grill’s components and rules.\n\nThis made it possible to catch cases we had not initially considered and feed that learning back into the system.'
      },
      {
        id: 'results',
        title: es ? 'Resultados' : 'Results',
        body: es
          ? 'La adopción de Grill creó una base común para diseñar y evolucionar los productos de Yaydoo.'
          : 'Grill’s adoption created a shared foundation for designing and evolving Yaydoo’s products.',
        closing: es
          ? 'Más allá de las métricas, Grill permitió que diferentes productos comenzaran a compartir **componentes, reglas y una misma lógica visual**, reduciendo inconsistencias y trabajo repetido.'
          : 'Beyond the metrics, Grill allowed different products to start sharing **components, rules, and the same visual logic**, reducing inconsistencies and repeated work.',
        stats: [
          {
            value: '7',
            label: es ? 'productos implementaron el sistema' : 'products implemented the system'
          },
          {
            value: '+40%',
            label: es ? 'de productividad en el equipo de Diseño' : 'productivity in the Design team'
          },
          {
            value: '+35%',
            label: es ? 'de productividad en desarrollo front-end' : 'productivity in front-end development'
          }
        ]
      },
      {
        id: 'retrospective',
        title: es ? 'Retrospectiva' : 'Retrospective',
        subtitle: es ? '¿Qué haría diferente hoy?' : 'What would I do differently today?',
        body: es
          ? 'Grill se construyó principalmente de forma manual. Solo llegar al MVP de componentes principales tomó aproximadamente un mes, seguido de cuatro meses de expansión, documentación y mantenimiento.\n\nHoy abordaría el mismo reto con un proceso **AI-first**.\n\nEmpezaría definiendo foundations y átomos junto con sus reglas de uso. Después trabajaría cada familia de componentes de forma sistemática, utilizando IA para acelerar la generación de variantes, estados, documentación y casos de uso.\n\nTambién estructuraría desde el inicio la relación entre diseño y código mediante:'
          : 'Grill was built mainly by hand. Just reaching the MVP of core components took about a month, followed by four months of expansion, documentation, and maintenance.\n\nToday I would approach the same challenge with an **AI-first** process.\n\nI would start by defining foundations and atoms along with their usage rules. Then I would work through each component family systematically, using AI to accelerate the generation of variants, states, documentation, and use cases.\n\nI would also structure the relationship between design and code from the start through:',
        items: es
          ? [
              'Design tokens.',
              'Variables semánticas.',
              'Componentes equivalentes entre Figma y front-end.',
              'Documentación versionada.',
              'Estados y propiedades definidos como parte de la arquitectura del componente.',
              'Reglas de accesibilidad.',
              'Validaciones automatizadas cuando fuera posible.'
            ]
          : [
              'Design tokens.',
              'Semantic variables.',
              'Equivalent components between Figma and front-end.',
              'Versioned documentation.',
              'States and properties defined as part of the component architecture.',
              'Accessibility rules.',
              'Automated validations when possible.'
            ],
        closing: es
          ? 'Un proceso que originalmente requirió aproximadamente **6 meses** podría, en mi estimación actual, reducirse a alrededor de **1 mes** con herramientas de IA.\n\nEl objetivo no sería generar componentes más rápido por sí mismo. Sería dedicar menos tiempo al trabajo repetitivo y más tiempo a **validar decisiones, probar el sistema en producto y asegurar que diseño y código evolucionen bajo las mismas reglas**.'
          : 'A process that originally took about **6 months** could, in my current estimate, be reduced to around **1 month** with AI tools.\n\nThe goal would not be to generate components faster for its own sake. It would be to spend less time on repetitive work and more time **validating decisions, testing the system in product, and making sure design and code evolve under the same rules**.'
      }
    ]
  };
}
