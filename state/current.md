# Estado actual

Actualizado: 2026-11-20.

## Landing

Hero (chips disponibilidad + sede; título `¡Hola, soy Andur!`; rol; intro; Ver CV + Contacto; hasta `md`: texto → foto → botones) → carrusel de skills (4 filas móvil, 3 tableta, 2 `lg+`) → Proyectos (`Work`) → Principios (`Principles`, pin centrado tras el hueco de sección; 4 cards sticky `fit-content` igualadas a la más alta; peek de título; opacidad 100% al 80% del recorrido; 32px bajo el intro) → Acerca de mí (`About Me`: competencias con ícono + herramientas en 3 columnas, logos pendientes; sin trabajos recientes ni educación) → Preguntas (`FAQ`). Tabs/footer = `h2` vía `src/config/nav.ts` (sin tab del carrusel ni de contacto). Navbar-pill flotante (marca al hero, secciones, idioma ES/EN y tema). Footer: logo, secciones, copyright.

Proyectos: tres cards (Framework para agentes de voz con IA, Grill, Supervisor AI). Cover a pantalla completa, sin overlay; el `title` del modal es el copy largo. Framework: `Project Cover - Framework for AI Voice Agents`. Grill: `Project Cover - Multi Product Design System`. Supervisor: `Project Cover - End to End SaaS Platform Design`.

Grill: pasos 1–4 con imagen light/dark. Supervisor: 5 pasos. 02 secciones light/dark; 03 tres sliders before/after; 04 Supervisores + plantillas a ancho de columna; 05 cierre. Herramientas: Figma, AI, SaaS, Lovable.

Header: navbar-pill `max-w-7xl` con marca (lockup → isotipo → scroll), secciones, switch ES/EN y tema claro/oscuro. Favicon: isotipo. Footer: imagotipo, Design System y versión. Entrada: Move In. Sin splash. Skills: 4 / 3 / 2 filas (móvil / tableta / desktop).

## Próximo

1. QA en móvil real.

## Riesgos

Hosting debe servir `index.html` para rutas desconocidas. No hay tests automatizados.
