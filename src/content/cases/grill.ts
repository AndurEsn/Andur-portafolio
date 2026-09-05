import grillCover from '../../assets/images/grill-design-system.png';
import grillAtomsLight from '../../assets/images/grill-atoms-light.png';
import grillAtomsDark from '../../assets/images/grill-atoms-dark.png';
import grillComponentsILight from '../../assets/images/grill-components-i-light.png';
import grillComponentsIDark from '../../assets/images/grill-components-i-dark.png';
import grillComponentsIILight from '../../assets/images/grill-components-ii-light.png';
import grillComponentsIIDark from '../../assets/images/grill-components-ii-dark.png';
import grillDocumentationLight from '../../assets/images/grill-documentation-light.png';
import grillDocumentationDark from '../../assets/images/grill-documentation-dark.png';
import yaydooLogo from '../../assets/logos/yaydoo.svg';
import { Language, Project } from '../../types';

export function grillProject(lang: Language): Project {
  const es = lang === 'es';
  const grillStats = [
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
  ];

  return {
    id: 'grill-design-system',
    title: es
      ? 'Un sistema de diseño simple, pero potente'
      : 'A simple, but powerful design system',
    category: 'Product',
    company: 'Yaydoo',
    logo: yaydooLogo,
    description: es
      ? 'Un sistema de diseño simple, pero potente'
      : 'A simple, but powerful design system',
    intro: es
      ? 'Diseñé Grill Design System desde cero, definiendo componentes, variantes, estados y reglas de uso bajo una metodología de Atomic Design.\n\nAdemás de construir la librería, trabajé con el equipo de diseño para impulsar su adopción, recopilar feedback y evolucionar los componentes a partir de su uso.'
      : 'I designed Grill Design System from scratch, defining components, variants, states, and usage rules under an Atomic Design methodology.\n\nBesides building the library, I worked with the design team to drive adoption, gather feedback, and evolve the components based on their use.',
    image: grillCover,
    cardTitle: 'Grill Design System',
    role: 'Product Designer',
    duration: es ? '6 meses' : '6 months',
    impact: es
      ? '7 productos adoptaron Grill. +40% de productividad en Diseño y +35% en desarrollo front-end.'
      : '7 products adopted Grill. +40% productivity in Design and +35% in front-end development.',
    impactStats: grillStats,
    tools: ['Figma', 'Atomic Design', 'Design Systems'],
    sections: [
      {
        id: 'results',
        title: es ? 'Impacto' : 'Impact',
        body: es
          ? 'La adopción de Grill permitió establecer una base compartida de componentes, reglas y lógica visual para diseñar, optimizar y evolucionar los productos de Yaydoo: PorCobrar, VendorPlace, Buyer, Seller, Checkout, Back Office y P-Card, reduciendo inconsistencias y trabajo repetitivo.'
          : 'Grill’s adoption established a shared foundation of components, rules, and visual logic to design, optimize, and evolve Yaydoo’s products: PorCobrar, VendorPlace, Buyer, Seller, Checkout, Back Office, and P-Card, reducing inconsistencies and repetitive work.',
        stats: grillStats
      },
      {
        id: 'problem',
        title: es ? 'Problema' : 'Problem',
        detailBody: es
          ? 'Los productos de Yaydoo habían evolucionado con diferentes estilos de interfaces. Componentes como botones, inputs, estados y espaciados podían verse o comportarse de forma distinta dependiendo del producto.'
          : 'Yaydoo’s products had evolved with different interface styles. Components such as buttons, inputs, states, and spacing could look or behave differently depending on the product.',
        body: es
          ? 'El reto era crear una base compartida y escalable que unificara la experiencia, redujera el trabajo repetitivo y facilitara y acelerara la creación de nuevas interfaces entre los productos de Yaydoo.'
          : 'The challenge was to create a shared, scalable foundation that would unify the experience, reduce repetitive work, and make it easier and faster to create new interfaces across Yaydoo’s products.'
      },
      {
        id: 'process',
        title: es ? 'Construcción' : 'Construction',
        steps: [
          {
            number: '01',
            title: es ? 'Definición' : 'Definition',
            body: es
              ? 'Comencé por definir las bases visuales del sistema, partiendo de los elementos más simples de **Atomic Design: los átomos**, que después servirían para construir componentes más complejos y reutilizables.'
              : 'I started by defining the system’s visual foundations, beginning with the simplest **Atomic Design elements: the atoms**, which would later serve to build more complex, reusable components.',
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
            image: grillAtomsLight,
            imageDark: grillAtomsDark,
            imageAlt: es ? 'Átomos de Grill Design System' : 'Grill Design System atoms'
          },
          {
            number: '02',
            title: 'MVP',
            body: es
              ? 'Prioricé los componentes de mayor uso para construir una primera versión funcional de Grill.\n\nEl MVP incluyó elementos como **buttons, inputs, selection controls, search, text areas, amount fields y cards**, contemplando sus principales variantes, estados y comportamientos.\n\nEsto permitió comenzar a utilizar el sistema en productos reales mientras la librería continuaba evolucionando.'
              : 'I prioritized the most-used components to build a first working version of Grill.\n\nThe MVP included elements such as **buttons, inputs, selection controls, search, text areas, amount fields, and cards**, covering their main variants, states, and behaviors.\n\nThis made it possible to start using the system in real products while the library kept evolving.',
            image: grillComponentsILight,
            imageDark: grillComponentsIDark,
            imageAlt: es ? 'Componentes MVP de Grill Design System' : 'Grill Design System MVP components'
          },
          {
            number: '03',
            title: es ? 'Expansión' : 'Expansion',
            body: es
              ? 'Con el MVP funcionando, amplié Grill hasta alcanzar aproximadamente **25 familias de componentes**, incorporando patrones como Data Tables, Modals, Tabs, Dropdowns, Calendars y Skeletons.\n\nLos componentes existentes también evolucionaban conforme aparecían nuevos escenarios y necesidades dentro de los productos.'
              : 'With the MVP in place, I expanded Grill to about **25 component families**, adding patterns such as Data Tables, Modals, Tabs, Dropdowns, Calendars, and Skeletons.\n\nExisting components also evolved as new scenarios and needs appeared in the products.',
            image: grillComponentsIILight,
            imageDark: grillComponentsIIDark,
            imageAlt: es ? 'Expansión de componentes de Grill Design System' : 'Grill Design System component expansion'
          },
          {
            number: '04',
            title: es ? 'Documentación' : 'Documentation',
            body: es
              ? 'Finalmente, consolidé las reglas de uso y documentación de cada componente, incluyendo anatomía, dimensiones, espaciados, variantes, estados y comportamientos.\n\nLa documentación se trabajó como parte del propio sistema, reduciendo ambigüedades entre diseño y desarrollo y facilitando su adopción y mantenimiento.'
              : 'Finally, I consolidated the usage rules and documentation for each component, including anatomy, dimensions, spacing, variants, states, and behaviors.\n\nDocumentation was treated as part of the system itself, reducing ambiguity between design and development and making adoption and maintenance easier.',
            image: grillDocumentationLight,
            imageDark: grillDocumentationDark,
            imageAlt: es ? 'Documentación de Grill Design System' : 'Grill Design System documentation'
          }
        ]
      }
    ]
  };
}
