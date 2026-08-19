# Arquitectura vigente

Última revisión: 2026-08-17. Estado: baseline observado en el código; cambiarlo requiere una decisión explícita.

## ADR-001 — SPA cliente sin backend

- Decisión: mantener una aplicación React/Vite ejecutada enteramente en el navegador.
- Razón: el portafolio actual es contenido e interacción de presentación; no necesita servidor para renderizar sus funciones existentes.
- Consecuencias: el contacto es LinkedIn y `mailto:` (sin formulario ni envío). Cualquier CMS, analítica, autenticación o envío de datos exige diseñar backend, privacidad y manejo de errores.

## ADR-002 — Estado de página centralizado en `App`

- Decisión: `src/app/App.tsx` coordina tema, idioma, ruta, carga inicial, Design System y toasts; los componentes reciben props.
- Razón: el alcance actual es pequeño y los estados tienen interacciones cruzadas.
- Consecuencias: extraer contexto/store solo cuando el árbol de props o las transiciones se vuelvan difíciles de mantener; no añadir una librería de estado por anticipación.

## ADR-003 — Contenido tipado y bilingüe en código

- Decisión: tipos en `src/types/`; copy de UI, métricas y FAQ en `src/content/data.ts`; casos de estudio en `src/content/cases/` ensamblados por `src/content/projects.ts`. El CV se visualiza en una pestaña nueva vía `src/config/cv.ts`.
- Razón: mantiene paridad ES/EN y validación estática sin infraestructura de CMS. Los casos largos no caben en un solo párrafo del modal.
- Consecuencias: todo campo nuevo de contenido debe definirse en el tipo y en ambos idiomas. Añadir un archivo por caso; no reintroducir placeholders remotos.

## ADR-004 — Persistencia local limitada (superseded 2026-08-16)

- Decisión original: guardar NPS en `localStorage` bajo `portfolio-nps-feedback-v1`.
- Cambio: la encuesta NPS se eliminó en v2. La persistencia local queda limitada al tema (ADR-009).
- Consecuencias: el editor demo, si existe, sigue solo en memoria. El tema sí persiste: ver ADR-009.

## ADR-005 — Build reproducible con npm

- Decisión: `package-lock.json` y `npm` son canónicos; `npm run lint` valida tipos y `npm run build` produce `dist/`.
- Razón: el lock de npm contiene la resolución real y `bun.lock` está vacío.
- Consecuencias: no mezclar gestores ni editar artefactos de `dist/` a mano.

## ADR-008 — 404 y carga inicial reales

- Decisión: la única ruta válida es `/`. Cualquier otra pathname muestra `ErrorState`. La carga inicial muestra el campo de puntos con una ola de hover de 1 s y un indicador central; antes hay un splash de 2 s.
- Razón: los toggles de Laboratorio simulaban esos estados y no coincidían con el comportamiento de producción.
- Consecuencias: si la carga termina antes de 1 s, la ola permanece hasta completar ese tiempo; si tarda más, permanece hasta que el contenido esté listo. Con `prefers-reduced-motion` se omiten splash, ola y el mínimo de 1 s. El hosting debe servir `index.html` para rutas desconocidas (fallback SPA).

## ADR-009 — Tema según sistema, con override manual

- Decisión: el tema inicial sigue `prefers-color-scheme`. Un cambio manual se guarda en `localStorage` bajo `andur-theme` y deja de seguir al sistema. Un script en `index.html` aplica la clase `dark` antes de React para evitar un flash en el splash.
- Razón: el splash y la página deben coincidir con el sistema desde el primer frame, y el usuario debe poder forzar claro u oscuro.
- Consecuencias: borrar `andur-theme` restaura el seguimiento del sistema. No hay opción “Automático” en la UI más allá de no haber elegido a mano.

