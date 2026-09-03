# Diseño y experiencia

Última revisión: 2026-09-02. Tokens: `src/styles/index.css`. Layout vigente: `state/current.md`.

## Lenguaje visual

- Inter 400/500/600/700/900 (Google Fonts). Overlays: `typo-modal-*` y `typo-overlay-*`.
- Radios `rounded-xl` / `2xl` / `3xl`; sombras contenidas.
- Landing (logos, filosofía, proceso, proyectos, contacto): `max-w-7xl px-4 py-section` (40px móvil / 64px `sm+`). FAQ: `max-w-3xl`. Cards internas: `rounded-2xl`, sin sombra de reposo.
- Iconos: Lucide `strokeWidth` 1.6 en `BrandGlyph` (`h-12 w-12`, `icon-well`, degradado `#brand-icon-gradient`). Default `rounded-xl`; Proceso usa `shape="circle"`. Logos del carrusel son la excepción.
- Motion + CSS; respetar `prefers-reduced-motion`.

## Temas

- Claro: primario índigo `#4C63F6`. Oscuro: fondo `#10131a`, primario `#4090FE`, hover `#2B72CD`.
- Inicial: `prefers-color-scheme`. Override en `localStorage` (`andur-theme`). Splash usa los mismos tokens.
- Tokens semánticos (`primary`, `surface-*`, `on-surface*`, `border`, `muted`, `icon-well`). Un componente nuevo no redefine paleta; logos de marca sí pueden.

## Navegación

- Header 64px; tabs `top-16`. Hero `pt-16`.
- Tabs y footer salen de `src/config/nav.ts` (mismo `h2` + `id`). Ver `.cursor/rules/section-titles.mdc`.
- Métricas solo en el hero. CV/Resume: pestaña nueva, sin `download`.
- Splash: saludo `splashLine` + `heroPhrases` (misma lista que el hero).
- IDs de sección: contrato Header/footer; cambiarlos en `nav.ts` y en el `h2` de la sección.
- Laboratorio: animaciones, Design System, versión. En móvil el menú va de borde a borde con margen.
- `h2` de sección: `text-2xl sm:text-4xl`, peso negro, title case, sin badge.

## Estados

- `normal` / `loading` / `error` reales. Toasts no bloquean.
- Header: mark redondo + `brandName`. Foto de perfil solo en el hero.
- Modales bloqueantes: scroll lock + `ModalCloseButton` 40px. Móvil `h-dvh`; cierran con icono, Escape o atrás, no con el fondo. Desde `sm`: tarjeta y el fondo sí cierra.
- Design System: tema local copiado de la página, no la muta.

## Responsive y a11y

- `sm` 640 · `md` 768 · `lg` 1024. No `xl` / `2xl`.
- Táctil ~44px, foco visible, teclado, `aria-*` si el texto no basta. Tooltips táctiles: tap para abrir/cerrar, se cierran al scroll, no superan el viewport.
- Contraste en ambos temas; no comunicar estado solo con color.
- Imágenes: `alt`, encuadre estable, fallback si son remotas.
