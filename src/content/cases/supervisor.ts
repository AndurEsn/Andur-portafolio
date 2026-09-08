import supervisorCover from '../../assets/images/supervisor-ai-cover.png';
import supervisorLogo from '../../assets/logos/supervisor-ai.png';
import sectionsLight from '../../assets/images/saas-platform-sections-light.png';
import sectionsDark from '../../assets/images/saas-platform-sections-dark.png';
import agendaBefore from '../../assets/images/saas-platform-agenda-before.png';
import agendaAfter from '../../assets/images/saas-platform-agenda-after.png';
import meetingBefore from '../../assets/images/saas-platform-meeting-before.png';
import meetingAfter from '../../assets/images/saas-platform-meeting-after.png';
import supervisorsBefore from '../../assets/images/saas-platform-supervisors-before.png';
import supervisorsAfter from '../../assets/images/saas-platform-supervisors-after.png';
import templatesImage from '../../assets/images/saas-platform-templates.png';
import { Language, Project } from '../../types';

export function supervisorProject(lang: Language): Project {
  const es = lang === 'es';
  const supervisorStats = [
    {
      value: '+60',
      label: es ? 'workspaces creados' : 'workspaces created'
    },
    {
      value: '+13',
      label: es ? 'módulos diseñados' : 'modules designed'
    },
    {
      value: '3x',
      label: es
        ? 'más rápido el proceso de diseño con apoyo de IA'
        : 'faster design process with AI support'
    }
  ];

  return {
    id: 'supervisor-ai',
    title: es
      ? 'Una plataforma que transforma miles de conversaciones en información accionable mediante IA'
      : 'A platform that turns thousands of conversations into actionable insights with AI',
    category: 'Product',
    company: 'Supervisor AI',
    logo: supervisorLogo,
    description: es
      ? 'Una plataforma que transforma miles de conversaciones en información accionable mediante IA'
      : 'A platform that turns thousands of conversations into actionable insights with AI',
    intro: es
      ? 'Como único Product Designer del equipo, participé desde una etapa temprana junto con los founders en la **definición y evolución del producto**. Fui responsable de traducir esa visión en arquitectura de información, flujos, wireframes e interfaces, iterando las funcionalidades conforme las validábamos con usuarios y clientes.'
      : 'As the team’s only Product Designer, I joined the founders early on in **defining and evolving the product**. I translated that vision into information architecture, flows, wireframes, and interfaces, iterating on features as we validated them with users and customers.',
    image: supervisorCover,
    cardTitle: 'Supervisor AI',
    role: 'Product Designer',
    duration: es ? '2 años y 1 mes' : '2 years and 1 month',
    impact: es
      ? 'Más de 13 módulos y +60 workspaces. El proceso de diseño con apoyo de IA fue hasta 3 veces más rápido.'
      : 'More than 13 modules and +60 workspaces. The AI-supported design process was up to 3x faster.',
    impactStats: supervisorStats,
    tools: ['Figma', 'AI', 'SaaS', 'Lovable'],
    sections: [
      {
        id: 'results',
        title: es ? 'Impacto' : 'Impact',
        body: es
          ? 'La evolución de Supervisor AI permitió consolidar una plataforma SaaS con más de 13 módulos y más de 60 workspaces creados. Además, integré herramientas de IA al proceso de diseño para explorar flujos, generar alternativas y acelerar la creación de interfaces, reduciendo el tiempo entre diseño e implementación hasta 3 veces.'
          : 'Supervisor AI’s evolution consolidated a SaaS platform with more than 13 modules and more than 60 workspaces created. I also integrated AI tools into the design process to explore flows, generate alternatives, and speed up interface creation, cutting the time between design and implementation by up to 3x.',
        stats: supervisorStats
      },
      {
        id: 'problem',
        title: es ? 'Problema' : 'Problem',
        detailBody: es
          ? 'Después de una llamada o reunión con un cliente, gran parte de la información relevante suele quedar dispersa entre herramientas, notas o incluso en la memoria de las personas.\n\nPara los líderes, esto significaba tener poca visibilidad sobre cientos de conversaciones: **qué objetivos se cumplían, cómo se atendía a los clientes, qué objeciones aparecían, dónde existían oportunidades de mejora, qué interacciones representaban un riesgo y cuál era el desempeño de cada agente**.'
          : 'After a call or meeting with a customer, much of the relevant information often ends up scattered across tools, notes, or even people’s memory.\n\nFor leaders, that meant little visibility across hundreds of conversations: **which goals were met, how customers were served, which objections appeared, where there were opportunities to improve, which interactions represented a risk, and how each agent performed**.',
        body: es
          ? 'El reto era transformar estas conversaciones en **información y métricas claras, útiles y fáciles de consultar**, mientras descubríamos qué casos de uso y mercados podían obtener mayor valor del producto.'
          : 'The challenge was to turn these conversations into **clear, useful, easy-to-consult information and metrics**, while discovering which use cases and markets could get the most value from the product.'
      },
      {
        id: 'process',
        title: es ? 'Construcción y evolución' : 'Construction and evolution',
        steps: [
          {
            number: '01',
            title: es ? 'Definiendo los primeros casos de uso' : 'Defining the first use cases',
            body: es
              ? 'Comenzamos explorando cómo una misma tecnología podía resolver necesidades en diferentes contextos, principalmente **ventas, cobranza y reclutamiento**.\n\nTrabajé junto con los founders para aterrizar estas necesidades, identificar qué información debía extraerse de las conversaciones y transformar ideas todavía dispersas en funcionalidades y flujos concretos.\n\nEsta etapa nos permitió formular las primeras hipótesis sobre **qué debía hacer el producto y para quién podía generar valor**.'
              : 'We started by exploring how the same technology could solve needs in different contexts, mainly **sales, collections, and recruiting**.\n\nI worked with the founders to ground those needs, identify what information should be extracted from conversations, and turn still-scattered ideas into concrete features and flows.\n\nThis stage let us form the first hypotheses about **what the product should do and who it could create value for**.'
          },
          {
            number: '02',
            title: es ? 'Construcción del MVP' : 'Building the MVP',
            body: es
              ? 'Con los primeros casos de uso definidos, estructuré la experiencia inicial de la plataforma.\n\nDiseñé la **arquitectura de información, navegación, módulos, user flows, wireframes e interfaces** necesarias para convertir el análisis de las conversaciones en información clara y fácil de consultar.\n\nEl MVP nos permitió llevar estas hipótesis a un producto funcional y comenzar a validarlas con usuarios reales.'
              : 'With the first use cases defined, I structured the platform’s initial experience.\n\nI designed the **information architecture, navigation, modules, user flows, wireframes, and interfaces** needed to turn conversation analysis into clear, easy-to-consult information.\n\nThe MVP let us take those hypotheses into a working product and start validating them with real users.',
            image: sectionsLight,
            imageDark: sectionsDark,
            imageAlt: es ? 'Secciones del MVP de Supervisor AI' : 'Supervisor AI MVP sections'
          },
          {
            number: '03',
            title: es ? 'Validar mientras el producto estaba en uso' : 'Validate while the product was in use',
            body: es
              ? 'En lugar de esperar a tener un producto terminado, lanzábamos funcionalidades, observábamos cómo se utilizaban y ajustábamos la experiencia a partir del feedback de usuarios, clientes y del propio equipo.\n\nEste proceso nos permitió identificar **qué información realmente aportaba valor, qué flujos necesitaban simplificarse y qué necesidades se repetían entre diferentes organizaciones**.\n\nCon estos aprendizajes, el producto pasó de resolver escenarios generales a enfocarse en operaciones con un **mayor volumen de conversaciones, como los contact centers**.'
              : 'Instead of waiting for a finished product, we shipped features, watched how they were used, and adjusted the experience from feedback from users, customers, and the team itself.\n\nThis process helped us identify **what information actually added value, which flows needed to be simplified, and which needs repeated across organizations**.\n\nWith those learnings, the product moved from solving general scenarios to focusing on operations with a **higher volume of conversations, such as contact centers**.',
            comparisons: [
              {
                before: agendaBefore,
                after: agendaAfter,
                caption: 'Agenda',
                alt: es ? 'Agenda: antes y después' : 'Agenda: before and after'
              },
              {
                before: meetingBefore,
                after: meetingAfter,
                caption: es ? 'Reunión' : 'Meeting',
                alt: es ? 'Reunión: antes y después' : 'Meeting: before and after'
              },
              {
                before: supervisorsBefore,
                after: supervisorsAfter,
                caption: es ? 'Supervisores' : 'Supervisors',
                alt: es ? 'Supervisores: antes y después' : 'Supervisors: before and after'
              }
            ]
          },
          {
            number: '04',
            title: es
              ? 'Supervisores: enseñar a la IA qué debía analizar'
              : 'Supervisors: teaching the AI what to analyze',
            body: es
              ? 'Uno de los principales aprendizajes fue que **no todas las empresas necesitaban analizar una conversación de la misma manera**.\n\nUn equipo de ventas podía necesitar evaluar el manejo de objeciones y el cumplimiento de objetivos, mientras que uno de cobranza podía enfocarse en promesas de pago, negociación o cumplimiento de protocolos.\n\nPara resolverlo, diseñamos **Supervisores**, una funcionalidad que permite definir qué debe analizar y evaluar la IA dentro de las conversaciones.\n\nCada organización puede establecer sus propios criterios y probarlos sobre conversaciones existentes para validar los resultados antes de utilizarlos a mayor escala.'
              : 'One of the main learnings was that **not every company needed to analyze a conversation the same way**.\n\nA sales team might need to evaluate objection handling and goal completion, while a collections team might focus on payment promises, negotiation, or protocol compliance.\n\nTo solve that, we designed **Supervisors**, a feature that lets teams define what the AI should analyze and evaluate in conversations.\n\nEach organization can set its own criteria and test them on existing conversations to validate results before using them at a larger scale.',
            image: templatesImage,
            imageAlt: es ? 'Plantillas reutilizables de Supervisores' : 'Reusable Supervisor templates',
            imageFlush: true
          },
          {
            number: '05',
            title: es
              ? 'De configuraciones individuales a un sistema escalable'
              : 'From one-off setups to a scalable system',
            body: es
              ? 'Conforme incorporamos nuevas empresas, comenzamos a detectar que muchos criterios, objetivos y estructuras se repetían entre operaciones similares.\n\nEn lugar de configurar cada implementación desde cero, convertimos estos patrones en **plantillas reutilizables** para diferentes tipos de campañas y operaciones.\n\nEste aprendizaje también impulsó la evolución del resto de la plataforma: simplificamos flujos, incorporamos nuevos módulos y reorganizamos la arquitectura conforme el producto crecía.\n\nLo que comenzó como una herramienta para analizar conversaciones evolucionó hacia una plataforma SaaS capaz de **configurar qué analizar, estructurar los resultados y ofrecer visibilidad sobre grandes volúmenes de interacciones**.'
              : 'As we onboarded new companies, we started to notice that many criteria, goals, and structures repeated across similar operations.\n\nInstead of configuring each implementation from scratch, we turned those patterns into **reusable templates** for different types of campaigns and operations.\n\nThis learning also drove the rest of the platform’s evolution: we simplified flows, added new modules, and reorganized the architecture as the product grew.\n\nWhat began as a tool to analyze conversations evolved into a SaaS platform able to **configure what to analyze, structure the results, and provide visibility over large volumes of interactions**.'
          }
        ]
      }
    ]
  };
}
