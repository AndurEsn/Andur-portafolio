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
    intro: '',
    image: grillCover,
    role: 'Product Designer',
    duration: es ? '6 meses' : '6 months',
    impact: es
      ? '7 productos adoptaron Grill. +40% de productividad en Diseño y +35% en desarrollo front-end.'
      : '7 products adopted Grill. +40% productivity in Design and +35% in front-end development.',
    impactStats: [
      {
        value: '7',
        label: es ? 'productos adoptaron Grill como sistema de diseño' : 'products adopted Grill as their design system'
      },
      {
        value: '+40%',
        label: es ? 'de productividad en Diseño' : 'productivity in Design'
      },
      {
        value: '+35%',
        label: es ? 'de productividad en desarrollo front-end' : 'productivity in front-end development'
      }
    ],
    tools: ['Figma', 'Atomic Design', 'Design Systems'],
    sections: [
      {
        id: 'problem',
        title: es ? 'El problema' : 'The problem',
        body: es
          ? 'Los productos de Yaydoo habían evolucionado con diferentes criterios visuales y de interacción. Componentes como botones, inputs, estados y espaciados podían verse o comportarse de forma distinta dependiendo del producto.\n\nEl reto era crear una **base compartida y escalable** que unificara la experiencia entre productos, redujera el trabajo repetitivo y facilitara la creación de nuevas interfaces.'
          : 'Yaydoo’s products had evolved with different visual and interaction criteria. Components such as buttons, inputs, states, and spacing could look or behave differently depending on the product.\n\nThe challenge was to create a **shared, scalable foundation** that would unify the experience across products, reduce repetitive work, and make it easier to create new interfaces.'
      },
      {
        id: 'contribution',
        title: es ? 'Mi contribución' : 'My contribution',
        body: es
          ? 'Diseñé **Grill Design System desde cero**, definiendo sus foundations, componentes, variantes, estados y reglas de uso bajo una metodología de Atomic Design.\n\nAdemás de construir la librería, trabajé con el equipo de diseño para impulsar su adopción, recopilar feedback y evolucionar los componentes a partir de su uso en productos reales.\n\nParticipé directamente en la aplicación del sistema durante el rediseño de **Buyer, Seller y PorCobrar**, lo que permitió validar las decisiones del sistema en escenarios reales y regresar esos aprendizajes a Grill.'
          : 'I designed **Grill Design System from scratch**, defining its foundations, components, variants, states, and usage rules under an Atomic Design methodology.\n\nBesides building the library, I worked with the design team to drive adoption, gather feedback, and evolve the components based on their use in real products.\n\nI took part directly in applying the system during the redesign of **Buyer, Seller, and PorCobrar**, which made it possible to validate system decisions in real scenarios and feed those learnings back into Grill.'
      },
      {
        id: 'process',
        title: es ? 'Cómo construí el sistema' : 'How I built the system',
        steps: [
          {
            number: '01',
            title: 'Foundations',
            body: es
              ? 'Comencé definiendo las reglas visuales que servirían como base para todos los productos:'
              : 'I started by defining the visual rules that would serve as the foundation for every product:',
            items: es
              ? [
                  'Tipografía y jerarquías.',
                  'Paleta de color.',
                  'Iconografía.',
                  'Espaciados.',
                  'Cuadrícula basada principalmente en múltiplos de 8 puntos, utilizando incrementos de 4 cuando el componente lo requería.'
                ]
              : [
                  'Typography and hierarchy.',
                  'Color palette.',
                  'Iconography.',
                  'Spacing.',
                  'A grid based mainly on multiples of 8 points, using increments of 4 when a component required it.'
                ],
            closing: es
              ? 'Estas reglas establecieron un lenguaje visual común sobre el cual construir componentes reutilizables.'
              : 'These rules established a shared visual language on which to build reusable components.'
          },
          {
            number: '02',
            title: es ? 'MVP de componentes' : 'Component MVP',
            body: es
              ? 'Prioricé los componentes de mayor uso para construir una primera versión funcional de Grill.\n\nEl MVP incluyó elementos como **buttons, inputs, selection controls, search, text areas, amount fields y cards**, contemplando sus principales variantes, estados y comportamientos.\n\nEsto permitió comenzar a utilizar el sistema en productos reales mientras la librería continuaba evolucionando.'
              : 'I prioritized the most-used components to build a first working version of Grill.\n\nThe MVP included elements such as **buttons, inputs, selection controls, search, text areas, amount fields, and cards**, covering their main variants, states, and behaviors.\n\nThis made it possible to start using the system in real products while the library kept evolving.'
          },
          {
            number: '03',
            title: es ? 'Expansión' : 'Expansion',
            body: es
              ? 'Con el MVP funcionando, amplié Grill hasta alcanzar aproximadamente **25 familias de componentes**, incorporando patrones como Data Tables, Modals, Tabs, Dropdowns, Calendars y Skeletons.\n\nLos componentes existentes también evolucionaban conforme aparecían nuevos escenarios y necesidades dentro de los productos.'
              : 'With the MVP in place, I expanded Grill to about **25 component families**, adding patterns such as Data Tables, Modals, Tabs, Dropdowns, Calendars, and Skeletons.\n\nExisting components also evolved as new scenarios and needs appeared in the products.'
          },
          {
            number: '04',
            title: es ? 'Documentación y evolución' : 'Documentation and evolution',
            body: es
              ? 'Finalmente, consolidé las reglas de uso y documentación de cada componente, incluyendo anatomía, dimensiones, espaciados, variantes, estados y comportamientos.\n\nLa documentación se trabajó como parte del propio sistema, reduciendo ambigüedades entre diseño y desarrollo y facilitando su adopción y mantenimiento.'
              : 'Finally, I consolidated the usage rules and documentation for each component, including anatomy, dimensions, spacing, variants, states, and behaviors.\n\nDocumentation was treated as part of the system itself, reducing ambiguity between design and development and making adoption and maintenance easier.'
          }
        ]
      },
      {
        id: 'results',
        title: es ? 'Resultados' : 'Results',
        body: es
          ? 'Grill pasó de ser una librería en Figma a convertirse en una **base compartida para diseñar y evolucionar la familia de productos de Yaydoo**.'
          : 'Grill went from being a Figma library to becoming a **shared foundation for designing and evolving Yaydoo’s product family**.',
        stats: [
          {
            value: '7',
            label: es ? 'productos adoptaron Grill como sistema de diseño' : 'products adopted Grill as their design system'
          },
          {
            value: '+40%',
            label: es ? 'de productividad en Diseño' : 'productivity in Design'
          },
          {
            value: '+35%',
            label: es ? 'de productividad en desarrollo front-end' : 'productivity in front-end development'
          }
        ],
        closing: es
          ? 'Su adopción permitió compartir **componentes, reglas y una misma lógica visual** entre productos, reduciendo inconsistencias y trabajo repetitivo.\n\nEl sistema se implementó en **PorCobrar, VendorPlace, Buyer, Seller, Checkout, Back Office y P-Card**, mientras que su aplicación directa en Buyer, Seller y PorCobrar permitió validar y evolucionar Grill a partir de necesidades reales.'
          : 'Its adoption made it possible to share **components, rules, and the same visual logic** across products, reducing inconsistencies and repetitive work.\n\nThe system was implemented in **PorCobrar, VendorPlace, Buyer, Seller, Checkout, Back Office, and P-Card**, while applying it directly in Buyer, Seller, and PorCobrar made it possible to validate and evolve Grill from real needs.'
      }
    ]
  };
}
