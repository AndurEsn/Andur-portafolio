# Estado actual

Actualizado: 2026-10-28.

## Landing

Hero (CV + LinkedIn, correo, WhatsApp; hasta `md`: texto → foto → botones → métricas) → carrusel de skills (4 filas móvil, 3 tableta, 2 `lg+`) → Proyectos (`Work`) → Principios (`Principles`) → Proceso (`Process`) → Preguntas Frecuentes (`FAQ`). Tabs/footer = `h2` vía `src/config/nav.ts` (sin tab del carrusel ni de contacto). Navbar-pill flotante (marca al hero, secciones, settings). Footer: logo, secciones, copyright.

Proyectos: tres cards (Framework para agentes de voz con IA, Grill, Supervisor AI). Cover a pantalla completa, sin overlay; el `title` del modal es el copy largo. Framework: `Framework for AI voice agents - Cover`. Grill: `Design System - Cover`. Supervisor: `SaaS Platform - Cover`.

Grill: pasos 1–4 con imagen light/dark. Supervisor: 5 pasos. 02 secciones light/dark; 03 tres sliders before/after; 04 Supervisores + plantillas a ancho de columna; 05 cierre. Herramientas: Figma, AI, SaaS, Lovable.

Header: navbar-pill `max-w-7xl` con marca (lockup → isotipo → scroll), secciones y settings (tema Auto/claro/oscuro + idioma). Favicon: isotipo. Footer: imagotipo, Design System y versión. Entrada: Move In. Sin splash. Skills: 4 / 3 / 2 filas (móvil / tableta / desktop).

## Próximo

1. QA en móvil real.

## Riesgos

Hosting debe servir `index.html` para rutas desconocidas. No hay tests automatizados.
