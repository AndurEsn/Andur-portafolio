# Workflows

## Inicio

`AGENTS.md` → `state/current.md` → un doc de apoyo → `rg` en el código implicado → confirmar comportamiento antes de editar.

## Contenido e i18n

1. UI/FAQ: `src/content/data.ts`. Casos: `src/content/cases/` + `projects.ts`.
2. Forma nueva: primero `src/types/index.ts`.
3. ES y EN en el mismo cambio.
4. `h2` + `id`: actualizar `src/config/nav.ts` (tab + footer).
5. Frases rotativas: solo `heroPhrases`.
6. `npm run lint` && `npm run build`.

## UI

1. `decisions/design.md` + componente dueño.
2. Tokens y patrones existentes; mobile-first.
3. ES y EN en el mismo cambio (no abrir el menú de idioma para demostrarlo).
4. Browser: ir al bloque tocado. Una pasada en el viewport que cambió; el otro ancho solo si el layout pasa de fila a columna. Un tema, salvo que el pedido sea color/tema. Sin recorrer tabs ni FAQ. Matriz completa (claro/oscuro + ES/EN + móvil/escritorio + teclado) solo si el cambio cruza tema, nav o chrome.
5. `npm run lint` una vez al cerrar. `build` si el lint no cubre el riesgo o es cierre de lote.

## Bug

`gotchas/known-issues.md` → repro mínima → cambio mínimo → QA manual (no hay tests).

## Validación

```bash
npm run lint && npm run build
```

Regenerar `dist/`. UI: ver sección UI (no repetir la matriz). Deploy: hosting SPA, assets, contacto.

## Cierre

Actualizar `state/current.md` si cambió la verdad. `decisions/` solo si es duradero. Gotcha solo si evita recaída. Log solo si cambió arquitectura, release o dirección.