# Plan de trabajo v2 — Simplificación y comportamiento real

Actualizado: 2026-08-15. Estado: activo.

## Contexto

- Baseline publicado congelado en tag **`v1.0.0`** (`b906f1b`).
- Rama de trabajo integrada: **`main`** con **`v1.1.0`** (FAQ, métricas, CV, reorganización, SemVer).
- Demo Day descartado del working tree; no debe reintroducirse.

## Objetivo de v2.0.0

Simplificar el producto eliminando funciones de demostración y convertir estados simulados en comportamiento real de producción.

## Fases

### Fase 1 — Limpieza (breaking → MAJOR)

- [ ] Eliminar encuesta NPS (`NpsSurvey`, storage, copy, ADR-004).
- [ ] Eliminar tour interactivo (`TourOverlay`, botón, pasos en `data.ts`).
- [ ] Eliminar referencias demo-day si reaparecen.
- [ ] Reducir Laboratorio a animaciones + Design System + versión/changelog.
- [ ] Actualizar `CHANGELOG.md`, `releases.ts`, memoria y ADRs.

### Fase 2 — Comportamiento real

- [ ] **404 real:** rutas válidas solo `/`; cualquier otra pathname → `ErrorState`.
- [ ] **Carga inicial:** montar con `SkeletonLoader`; esperar carga real; si termina antes de 1 s, mantener skeleton hasta completar 1 s; si tarda más, mantener hasta que cargue.
- [ ] Respetar `prefers-reduced-motion` (acortar o omitir delay artificial).
- [ ] Quitar toggles de simulación de carga/error del Laboratorio.

### Fase 3 — Contenido y lanzamiento

- [ ] Verificar FAQ pendiente y copy profesional restante.
- [ ] Configurar `VITE_CONTACT_EMAIL` y WhatsApp real.
- [ ] `npm run lint && npm run build`.
- [ ] QA: ES/EN, light/dark, 375/768/1920, teclado, `/` y `/ruta-invalida`.
- [ ] Tag **`v2.0.0`**, release en GitHub, deploy.

## Criterios SemVer para esta línea

| Versión | Cuándo |
|---------|--------|
| PATCH | Correcciones sin cambio de alcance |
| MINOR | Features compatibles |
| MAJOR | Eliminación de NPS/tour/simulaciones (v2.0.0) |

## Referencias

- `decisions/versioning.md`
- `CHANGELOG.md`
- `src/config/releases.ts`
