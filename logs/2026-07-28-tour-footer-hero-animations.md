# Tour, navegación y animaciones — 2026-07-28

- El tour ahora resalta solamente títulos con spotlight/backdrop; el inicio es silencioso y la finalización usa el toast semántico de éxito.
- Se añadieron navegación de marca reversible, footer alineado al submenú, malla reactiva en hero y CTA a proyectos.
- Laboratorio controla las tres animaciones globales de entrada mediante `EntranceAnimation`; Motion respeta `prefers-reduced-motion`.
- El flujo NPS de dos pasos no recupera respuestas enviadas y el texto de omisión es explícito. WhatsApp homologa los prompts de ambos pasos.
- Verificado en localhost: footer, selector de animaciones, inicio/final del tour y prompt de WhatsApp; `npm run lint` y `npm run build` pasan.
