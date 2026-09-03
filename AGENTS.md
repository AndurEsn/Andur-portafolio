# AGENTS.md

Portafolio SPA bilingüe (ES/EN) de Andur, Product Designer. React 19, TypeScript, Vite 6, Tailwind 4, Motion, Lucide. Temas claro/oscuro, Laboratorio, Design System y estados `splash | loading | normal | error`.

## Lectura

1. Este archivo.
2. `state/current.md`.
3. Solo uno: `decisions/architecture.md` · `decisions/design.md` · `skills/workflows.md` · `gotchas/known-issues.md`.
4. `rg` únicamente en el código implicado.

Títulos, nav/footer y frases rotativas: `.cursor/rules/section-titles.mdc` (siempre on). No repetirlas aquí.

## Invariantes

- Paridad ES/EN en el mismo cambio.
- Tokens semánticos en `src/styles/index.css`; no colores sueltos salvo marca.
- Copy en `src/content/`; contratos en `src/types/`.
- Sin backend, persistencia remota ni envío de contacto sin decisión y credenciales.
- Secretos en `.env.local`, nunca en git.
- A11y básica: semántica, teclado, foco, `prefers-reduced-motion`.
- `npm` (`package-lock.json`). No editar `dist/`.
- Alcance pequeño; no pisar cambios ajenos.

## Routing

- Copy, métricas, FAQ: `src/content/data.ts`. Casos: `src/content/cases/` + `projects.ts`.
- UI / tema / motion: `decisions/design.md`.
- Estado, overlays: `decisions/architecture.md`.
- Bugs: `gotchas/known-issues.md`.
- Release: `skills/workflows.md` → Validación.

## DoD

El pedido funciona sin ampliar alcance; `npm run lint` y `npm run build`; si cambió UI: claro/oscuro, ES/EN, móvil/escritorio y teclado; `state/current.md` al día; decisiones duraderas en `decisions/`.

## Punteros

`state/current.md` · `decisions/` · `skills/workflows.md` · `gotchas/known-issues.md` · `src/config/nav.ts`
