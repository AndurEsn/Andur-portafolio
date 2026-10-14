import frameworkCover from '../../assets/images/framework-ai-voice-agents-cover.png';
import leracomLogo from '../../assets/logos/leracom-ai.png';
import { Language, Project } from '../../types';

export function agentsStudioProject(lang: Language): Project {
  const es = lang === 'es';
  const impactStats = [
    {
      value: es ? '3 meses → 1 semana' : '3 months → 1 week',
      label: es ? 'Implementación del voicebot' : 'Voicebot implementation'
    },
    {
      value: es ? '12+ → 6 sesiones' : '12+ → 6 sessions',
      label: es ? 'por proyecto' : 'per project'
    }
  ];

  return {
    id: 'agents-studio',
    title: es
      ? 'Framework para agentes de voz con IA'
      : 'Framework for AI voice agents',
    category: 'Product',
    company: 'Leracom AI',
    logo: leracomLogo,
    description: es
      ? 'Framework para agentes de voz con IA'
      : 'Framework for AI voice agents',
    intro: es
      ? 'Diseñé y estandaricé un proceso para crear agentes de voz con IA enfocados en automatizar operaciones de cobranza, ventas y reclutamiento.\n\nEl framework organiza el trabajo desde el discovery y la arquitectura conversacional hasta la implementación, validación y lanzamiento a producción.'
      : 'I designed and standardized a process for creating AI voice agents focused on automating collections, sales, and recruiting operations.\n\nThe framework organizes the work from discovery and conversational architecture through implementation, validation, and production launch.',
    image: frameworkCover,
    cardTitle: es ? 'Framework para agentes de voz con IA' : 'Framework for AI voice agents',
    role: es ? 'UX Conversacional' : 'Conversational UX',
    duration: es ? '6 meses' : '6 months',
    impact: es
      ? 'De 3 meses a 1 semana de implementación. De 12+ a 6 sesiones por proyecto.'
      : 'From 3 months to 1 week of implementation. From 12+ to 6 sessions per project.',
    impactStats,
    tools: [
      es ? 'UX Conversacional' : 'Conversational UX',
      'Discovery',
      es ? 'Arquitectura conversacional' : 'Conversational architecture',
      'Customer Journeys',
      es ? 'Reglas de negocio' : 'Business rules',
      es ? 'Validación' : 'Validation',
      es ? 'Entrevistas de usuario' : 'User interviews',
      es ? 'Agentes de voz con AI' : 'AI voice agents'
    ],
    sections: [
      {
        id: 'results',
        title: es ? 'Impacto' : 'Impact',
        detailBody: es
          ? 'Redujimos el tiempo necesario para configurar, entrenar, integrar y llevar un voicebot a producción una vez definidos los requerimientos.\n\nReducimos el mínimo promedio de sesiones necesarias para la implementación end to end de cada implementación.\n\nEstandarizamos el proceso para implementar agentes de voz en operaciones de cobranza, ventas y reclutamiento.'
          : 'We reduced the time needed to configure, train, integrate, and take a voicebot to production once requirements were defined.\n\nWe reduced the average minimum of sessions needed for the end-to-end implementation of each project.\n\nWe standardized the process for implementing voice agents in collections, sales, and recruiting operations.',
        stats: impactStats
      },
      {
        id: 'problem',
        title: es ? 'Problema' : 'Problem',
        detailBody: es
          ? 'Las primeras implementaciones de voicebots requerían demasiadas reuniones con clientes para entender cómo funcionaba cada negocio.\n\nLa información estaba dispersa, muchos clientes no contaban con documentación completa y no teníamos un proceso estándar para identificar reglas, manejo de objeciones, preguntas frecuentes, variables e integraciones.\n\nEsto provocaba cambios frecuentes de alcance y múltiples rondas de ajustes.\n\nEl reto era crear un proceso replicable para obtener la información necesaria, definir cómo debía comportarse cada agente y acelerar su implementación.'
          : 'The first voicebot implementations required too many client meetings to understand how each business worked.\n\nInformation was scattered, many clients lacked complete documentation, and we had no standard process to identify rules, objection handling, FAQs, variables, and integrations.\n\nThat led to frequent scope changes and multiple rounds of adjustments.\n\nThe challenge was to create a repeatable process to gather the needed information, define how each agent should behave, and speed up implementation.',
        body: es
          ? 'Las primeras implementaciones requerían demasiadas reuniones, información dispersa y múltiples cambios de alcance.\n\nEl reto era crear un proceso replicable para definir y construir agentes de voz para cobranza, ventas y reclutamiento.'
          : 'The first implementations needed too many meetings, scattered information, and multiple scope changes.\n\nThe challenge was to create a repeatable process to define and build voice agents for collections, sales, and recruiting.'
      },
      {
        id: 'process',
        title: es ? 'Cómo Construimos el Framework' : 'How We Built the Framework',
        steps: [
          {
            number: '01',
            title: 'Discovery',
            body: es
              ? 'Estandaricé el discovery para identificar desde el inicio la información necesaria entre las áreas de cobranza, ventas y reclutamiento.\n\nIdentifiqué patrones entre las áreas de cobranza, ventas y reclutamiento para definir qué información necesitábamos solicitar desde las primeras sesiones.\n\nEstandarizamos las preguntas de discovery y la documentación requerida, incluyendo procesos, scripts, llamadas reales, preguntas frecuentes, manejo de objeciones y reglas de negocio.'
              : 'I standardized discovery to identify from the start the information needed across collections, sales, and recruiting.\n\nI identified patterns across collections, sales, and recruiting to define what information we needed to request from the first sessions.\n\nWe standardized discovery questions and the required documentation, including processes, scripts, real calls, FAQs, objection handling, and business rules.'
          },
          {
            number: '02',
            title: es ? 'Arquitectura conversacional' : 'Conversational architecture',
            body: es
              ? 'Transformé los requerimientos del negocio en flujos conversacionales con reglas, manejo de objeciones, preguntas frecuentes, condiciones, variables y criterios de escalamiento.\n\nCon la información recopilada, diseñábamos los flujos conversacionales que definían cómo debía comportarse el agente en cada conversación.\n\nTrabajábamos con expertos del cliente para establecer reglas, manejo de objeciones, preguntas frecuentes, condiciones, variables y criterios de escalamiento.\n\nCuando no existían scripts o documentación suficiente, analizábamos llamadas reales para construir una base conversacional.'
              : 'I turned business requirements into conversational flows with rules, objection handling, FAQs, conditions, variables, and escalation criteria.\n\nWith the information gathered, we designed the conversational flows that defined how the agent should behave in each conversation.\n\nWe worked with the client’s experts to set rules, objection handling, FAQs, conditions, variables, and escalation criteria.\n\nWhen there were no scripts or enough documentation, we analyzed real calls to build a conversational baseline.'
          },
          {
            number: '03',
            title: es ? 'Implementación' : 'Implementation',
            body: es
              ? 'Configuramos y entrenamos el voicebot e integramos los sistemas necesarios para operar con datos del cliente.\n\nUna vez validado el flujo, configurábamos y entrenábamos el voicebot.\n\nEn paralelo, coordinábamos con desarrollo las conexiones necesarias mediante APIs, webhooks y CRM para consultar o registrar información durante las llamadas.'
              : 'We configured and trained the voicebot and integrated the systems needed to operate with client data.\n\nOnce the flow was validated, we configured and trained the voicebot.\n\nIn parallel, we coordinated with development the connections needed through APIs, webhooks, and CRM to query or record information during calls.'
          },
          {
            number: '04',
            title: es ? 'Validación y lanzamiento' : 'Validation and launch',
            body: es
              ? 'Validamos los casos de uso y realizamos una preliberación de un mínimo de llamadas antes del lanzamiento a producción.\n\nProbábamos los casos de uso definidos junto con el cliente y corregíamos los comportamientos que no cumplían con las reglas establecidas.\n\nAntes de producción realizábamos una preliberación de un mínimo de llamadas reales para comprobar la estabilidad del agente durante la marcación y la conversación.\n\nDespués de los ajustes finales, el voicebot pasaba a producción.'
              : 'We validated use cases and ran a pre-release of a minimum number of calls before production launch.\n\nWe tested the defined use cases with the client and corrected behavior that did not meet the established rules.\n\nBefore production we ran a pre-release of a minimum number of real calls to check the agent’s stability during dialing and conversation.\n\nAfter the final adjustments, the voicebot went to production.'
          }
        ]
      }
    ]
  };
}
