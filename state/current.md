# Estado actual

Actualizado: 2026-08-17.

## Verificado

- Rama local `feat/v2-simplification` (sin push). `main` permanece en **v1.1.0**.
- SPA React 19 + TypeScript + Vite 6 + Tailwind 4; sin backend activo.
- CV descargable: `src/assets/documents/andur-cv-2026-ago.pdf` (nombre de descarga `Andur-CV-2026-Ago.pdf`), enlazado desde Hero y FAQ vía `src/config/cv.ts`.
- Contacto: LinkedIn y `andur-design@outlook.com` en `src/config/contact.ts`. Sin formulario ni WhatsApp.
- Tema: sigue el sistema por defecto; el override manual se guarda en `andur-theme`. El splash usa los mismos tokens.
- En inglés, sección y tab: `FAQ's`. En español: `Preguntas Frecuentes`.
- `LandingReveal` anima al entrar en vista (sin exigir scroll hacia abajo) y no oculta al salir.
- Íconos `BrandGlyph` más claros en oscuro (`icon-well` y degradado).
- Design System sin muestra de Input.
- Splash: mínimo 2 s; continúa con clic o scroll.
- Preview local: `http://127.0.0.1:3000/` y `http://127.0.0.1:3000/ruta-invalida`.

## Próximo trabajo

1. Revisar visualmente en local y aprobar.
2. Push y tag `v2.0.0` solo con aprobación explícita.

## Riesgos / blockers de lanzamiento

- El hosting debe servir `index.html` para rutas desconocidas (fallback SPA).
- No hay suite de tests automatizados.
- Imágenes de proyecto remotas en `googleusercontent.com`.

## Regla de actualización

Reemplazar este snapshot cuando cambie el estado. Plan activo en `work-plan-v2.md`; historial de releases en `CHANGELOG.md`.
