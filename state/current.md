# Estado actual

Actualizado: 2026-08-17.

## Verificado

- `main` incluye el merge de v2 (`feat/v2-simplification`, PR #1).
- Laboratorio en móvil: menú a ancho de viewport.
- Tooltip: ancho al contenido; en táctil se abre/cierra con tap y se cierra al hacer scroll.
- Modales en móvil: pantalla completa (`h-dvh`); se cierran con el icono, Escape o atrás. El fondo no cierra.
- Design System: paleta con splash, tipografía Inter con wrap, iconos cortos, breakpoints sin descripción.

## Próximo trabajo

1. Revisar en un dispositivo móvil real (Laboratorio, tooltip, modales a pantalla completa).
2. Tag `v2.0.0` y release solo con aprobación explícita.

## Riesgos / blockers de lanzamiento

- El hosting debe servir `index.html` para rutas desconocidas (fallback SPA).
- No hay suite de tests automatizados.
- Imágenes de proyecto remotas en `googleusercontent.com`.

## Regla de actualización

Reemplazar este snapshot cuando cambie el estado. Plan activo en `work-plan-v2.md`; historial de releases en `CHANGELOG.md`.
