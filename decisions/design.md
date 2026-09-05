# Diseño y experiencia

Última revisión: 2026-09-03. Tokens: `src/styles/index.css`. Layout vigente: `state/current.md`.

## Lenguaje visual

- Inter 400/500/600/700/900 (Google Fonts). Título de card Grill: Montserrat. Overlays: `typo-modal-*` y `typo-overlay-*`.
- Radios `rounded-xl` / `2xl` / `3xl`; sombras contenidas.
- Landing (logos, principios, proceso, proyectos, contacto): `max-w-7xl px-4 py-section` (40px móvil / 64px `sm+`). FAQ: `max-w-3xl`. Cards internas: `rounded-2xl`, sin sombra de reposo.
- Iconos: Lucide `strokeWidth` 1.6 en `BrandGlyph` (`h-12 w-12`, `icon-well`, degradado `#brand-icon-gradient`). Default `rounded-xl`. Logos del carrusel son la excepción.
- Motion + CSS; respetar `prefers-reduced-motion`.

## Temas

- Claro: primario índigo `#4C63F6`. Oscuro: fondo `#10131a`, primario `#4090FE`, hover `#2B72CD`.
- Inicial: `prefers-color-scheme`. Override en `localStorage` (`andur-theme`). Splash usa los mismos tokens.
- Tokens semánticos (`primary`, `surface-*`, `on-surface*`, `border`, `muted`, `icon-well`). Un componente nuevo no redefine paleta; logos de marca sí pueden.

## Navegación

- Header 64px; tabs `top-16`. Hero `pt-16`.
- Tabs y footer salen de `src/config/nav.ts` (mismo `h2` + `id`). Ver `.cursor/rules/section-titles.mdc`.
- Métricas solo en el hero. CV/Resume: pestaña nueva, sin atributo `download`; el header lleva ícono Lucide `Download`.
- Idioma: un clic alterna ES/EN (misma interacción que el tema). La bandera muestra el idioma activo.
- Splash: saludo `splashLine` + `heroPhrases` (misma lista que el hero).
- IDs de sección: contrato Header/footer; cambiarlos en `nav.ts` y en el `h2` de la sección.
- Laboratorio: animaciones, Design System, versión. En móvil el menú va de borde a borde con margen.
- Proceso: bloques (`rounded-xl` + borde) del mismo ancho, centrados; en fila desde `md`. Cada paso lleva su `BrandGlyph`.
- Proyectos: la card es cover (`object-cover object-center`) sin overlay oscuro; icono de expandir (hover / foco; visible si no hay hover, p. ej. táctil). El `title` del modal puede ser distinto.

## Estados

- `normal` / `loading` / `error` reales. Toasts no bloquean.
- Header: mark redondo + `brandName`. Foto de perfil solo en el hero.
- Modales bloqueantes: portal a `body`; ocultan header y tabs. El cover del caso scrollea y sale; el toggle Detallado/Resumido (240px, centrado) queda sticky. `ModalCloseButton` 40px (caso: ícono colapsar `Minimize2`; resto: `X`). Móvil `h-dvh`; cierran con icono, Escape o atrás, no con el fondo. Desde `sm`: tarjeta y el fondo sí cierra.
- Design System: tema local copiado de la página, no la muta.

## Responsive y a11y

- `sm` 640 · `md` 768 · `lg` 1024. No `xl` / `2xl`.
- Táctil ~44px, foco visible, teclado, `aria-*` si el texto no basta. Tooltips táctiles: tap para abrir/cerrar, se cierran al scroll, no superan el viewport.
- Contraste en ambos temas; no comunicar estado solo con color.
- Imágenes: `alt`, encuadre estable, fallback si son remotas.
