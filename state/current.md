# Estado actual

Actualizado: 2026-08-15.

## Verificado

- SPA React 19 + TypeScript + Vite 6 + Tailwind 4; sin backend activo.
- `npm run lint`: pasa.
- `npm run build`: pasa.
- Dev server: `http://127.0.0.1:3000/` con `host: 127.0.0.1` (corrige fallo de `--host=0.0.0.0`).
- Versionado SemVer activo: **`1.1.0`** en `package.json`, visible en Laboratorio; el historial vive en GitHub Releases y `CHANGELOG.md`.
- Tag **`v1.0.0`** congela la publicación original en GitHub; **`v1.1.0`** incluye FAQ/CV/métricas y reorganización.
- Estructura `src/` reorganizada: `app/`, `components/{layout,sections,overlays,feedback,effects,ui}/`, `content/`, `config/`, `types/`, `styles/`, `hooks/`, `assets/`.
- Demo Day descartado del working tree local.

## Próximo trabajo (v2.0.0)

Ver plan detallado en [`work-plan-v2.md`](work-plan-v2.md):

1. Eliminar NPS, tour y simulaciones del Laboratorio.
2. 404 real para rutas inválidas.
3. Carga inicial con `SkeletonLoader` (máx. 1 s si carga rápida).
4. Contacto real y QA de lanzamiento.

## Riesgos / blockers de lanzamiento

- Correo de contacto real no configurado y teléfono de WhatsApp placeholder.
- No hay suite de tests ni evidencia de QA en navegadores.

## Regla de actualización

Reemplazar este snapshot cuando cambie el estado. Plan activo en `work-plan-v2.md`; historial de releases en `CHANGELOG.md`.
