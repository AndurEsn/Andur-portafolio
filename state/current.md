# Estado actual

Actualizado: 2026-09-08.

## Landing

Hero → logos → Principios → Proceso → Proyectos (`Work`) → Contacto (`Connect`) → Preguntas Frecuentes (`FAQ`). Tabs/footer = `h2` vía `src/config/nav.ts`.

Proceso: bloques del mismo ancho, centrados (texto e ícono); desde `md` van en fila. Principios: 3 cards.

Proyectos: dos cards (Grill, Supervisor AI). Cover a pantalla completa, sin overlay; el `title` del modal es el copy largo. Grill: `Design System - Cover`. Supervisor: `SaaS Platform - Cover`.

Grill: pasos 1–4 con imagen light/dark. Supervisor: 5 pasos. 02 secciones light/dark; 03 tres sliders before/after; 04 Supervisores + plantillas a ancho de columna; 05 cierre. Herramientas: Figma, AI, SaaS, Lovable.

Header: idioma en un clic (bandera del activo); CV/Resume con ícono de descarga (sigue abriendo pestaña nueva).

## Próximo

1. Más proyectos (copy + portada + EN).
2. QA en móvil real.

## Riesgos

Hosting debe servir `index.html` para rutas desconocidas. No hay tests automatizados.
