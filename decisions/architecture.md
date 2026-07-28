# Arquitectura vigente

Última revisión: 2026-07-23. Estado: baseline observado en el código; cambiarlo requiere una decisión explícita.

## ADR-001 — SPA cliente sin backend

- Decisión: mantener una aplicación React/Vite ejecutada enteramente en el navegador.
- Razón: el portafolio actual es contenido e interacción de presentación; no necesita servidor para renderizar sus funciones existentes.
- Consecuencias: el formulario de contacto, el editor y las simulaciones no son persistencia real. Cualquier envío, CMS, analítica o autenticación exige diseñar backend, privacidad y manejo de errores.

## ADR-002 — Estado de página centralizado en `App`

- Decisión: `src/App.tsx` coordina tema, idioma, modo de página, tour, modales, editor, NPS y toasts; los componentes reciben props.
- Razón: el alcance actual es pequeño y los estados tienen interacciones cruzadas.
- Consecuencias: extraer contexto/store solo cuando el árbol de props o las transiciones se vuelvan difíciles de mantener; no añadir una librería de estado por anticipación.

## ADR-003 — Contenido tipado y bilingüe en código

- Decisión: tipos en `src/types.ts`; contenido estático y fábricas por idioma en `src/data.ts`.
- Razón: mantiene paridad ES/EN y validación estática sin infraestructura de CMS.
- Consecuencias: todo campo nuevo de contenido debe definirse en el tipo y en ambos idiomas. Considerar archivos de contenido separados solo si `data.ts` deja de ser navegable.

## ADR-004 — Persistencia local limitada

- Decisión: solo la respuesta/cierre de NPS se guarda en `localStorage` bajo `portfolio-nps-feedback-v1`.
- Razón: evita repetir la encuesta sin crear cuentas ni servidor.
- Consecuencias: el editor conserva cambios solo en memoria; cambiar la clave reinicia respuestas; acceso a storage debe seguir protegido con `try/catch`.

## ADR-005 — Build reproducible con npm

- Decisión: `package-lock.json` y `npm` son canónicos; `npm run lint` valida tipos y `npm run build` produce `dist/`.
- Razón: el lock de npm contiene la resolución real y `bun.lock` está vacío.
- Consecuencias: no mezclar gestores ni editar artefactos de `dist/` a mano.

