# Estado actual

Actualizado: 2026-08-19.

## Verificado

- `main` incluye el merge de v2 (`feat/v2-simplification`, PR #1).
- Laboratorio en móvil: menú a ancho de viewport.
- Tooltip: ancho al contenido; en táctil se abre/cierra con tap y se cierra al hacer scroll.
- Modales en móvil: pantalla completa (`h-dvh`); se cierran con el icono, Escape o atrás. El fondo no cierra.
- Design System: paleta con splash, tipografía Inter con wrap, iconos cortos, breakpoints sin descripción.
- Portafolio: el único caso es Grill Design System (Yaydoo), con portada local y modal por secciones.
- Hero a dos columnas en escritorio: bienvenida y frases a la izquierda (sin punto final), métricas (`+8` / `+74` / `+7`) debajo en tres columnas, con etiquetas de dos líneas. Por debajo de `lg` (incluye tablet pequeña) el copy se centra. Retrato PNG RGBA a la derecha, `min-h` 20rem / `max-h` 28rem y radio 80rem, sin fundido inferior.
- Las tabs y el footer no enlazan a Métricas.
- El carrusel de logos comparte `max-w-7xl px-4` con Proyectos y Contacto; el fade va en los bordes de esa columna.
- El hero muestra un chip de ubicación (`CDMX, México` / `CDMX, Mexico`).
- Tras los logos, `Del Problema al Producto Funcional` resume proceso (4 etapas) y colaboración (3 socios) en una sola sección, con iconos del Design System.
- La sección de proyectos se titula `Proyectos` / `Projects`, sin descripción.
- CV/Resume está en el header, entre idioma y Laboratorio. También en footer y FAQ. No hay botón de descarga ni CTA de proyectos en el hero.
- El campo de partículas del fondo usa spacing 12px (móvil) / 14px (resto), el doble de densidad respecto a 24/28.
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
