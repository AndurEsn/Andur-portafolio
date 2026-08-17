# Plan de trabajo v2 — Simplificación y comportamiento real

Actualizado: 2026-08-17. Estado: listo para revisión local (sin push).

## Contexto

- Baseline publicado: **`v1.0.0`**.
- Última release en `main`: **`v1.1.0`**.
- Trabajo actual en `feat/v2-simplification`.

## Objetivo de v2.0.0

Simplificar el producto y convertir estados simulados en comportamiento real.

## Fases

### Fase 1 — Limpieza (breaking → MAJOR)

- [x] Eliminar encuesta NPS.
- [x] Eliminar tour interactivo.
- [x] Eliminar referencias demo-day.
- [x] Reducir Laboratorio a animaciones + Design System + versión.
- [x] Actualizar `CHANGELOG.md`, memoria y ADRs.

### Fase 2 — Comportamiento real

- [x] **404 real:** rutas válidas solo `/`.
- [x] **Carga inicial:** splash 2 s y luego fondo de puntos con ola de 1 s.
- [x] Respetar `prefers-reduced-motion`.
- [x] Quitar toggles de simulación de carga/error.

### Fase 3 — Contenido y lanzamiento

- [x] Contacto real: LinkedIn y `andur-design@outlook.com` (sin WhatsApp).
- [x] CV de agosto 2026 como descarga del sitio.
- [ ] Revisar y aprobar en local.
- [ ] QA: ES/EN, light/dark, 375/768/1920, teclado, `/` y `/ruta-invalida`.
- [ ] Tag **`v2.0.0`**, release en GitHub, deploy (solo con aprobación).

## Referencias

- `decisions/versioning.md`
- `CHANGELOG.md`
