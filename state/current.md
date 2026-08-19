# Estado actual

Actualizado: 2026-08-18.

## Verificado

- `main` incluye el merge de v2 (`feat/v2-simplification`, PR #1).
- Laboratorio en móvil: menú a ancho de viewport.
- Tooltip: ancho al contenido; en táctil se abre/cierra con tap y se cierra al hacer scroll.
- Modales en móvil: pantalla completa (`h-dvh`); se cierran con el icono, Escape o atrás. El fondo no cierra.
- Design System: paleta con splash, tipografía Inter con wrap, iconos cortos, breakpoints sin descripción.
- Portafolio: el único caso es Grill Design System (Yaydoo), con portada local y modal por secciones.
- Hero a dos columnas: bienvenida y frases a la izquierda, métricas (`7+` años de experiencia) debajo, retrato a la derecha con recorte redondeado y fundido.
- CV/Resume está en el header, entre idioma y Laboratorio. También en footer y FAQ. No hay botón de descarga ni CTA de proyectos en el hero.
- La sección de trayectoria se eliminó; esa información vive en el CV.

## Próximo trabajo

1. Seguir agregando proyectos uno por uno (copy + portada + paridad EN).
2. Revisar en un dispositivo móvil real (Laboratorio, tooltip, modales a pantalla completa).
3. Tag `v2.0.0` y release solo con aprobación explícita.

## Riesgos / blockers de lanzamiento

- El hosting debe servir `index.html` para rutas desconocidas (fallback SPA).
- No hay suite de tests automatizados.

## Regla de actualización

Reemplazar este snapshot cuando cambie el estado. Plan activo en `work-plan-v2.md`; historial de releases en `CHANGELOG.md`.
