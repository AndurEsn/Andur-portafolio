# Diseño y experiencia

Última revisión: 2026-09-08. Tokens: `src/styles/index.css`. Layout vigente: `state/current.md`.

## Lenguaje visual

- Inter 400/500/600/700/900 (Google Fonts). Título de card Grill: Montserrat. Hero: `typo-display-large` (`--font-display-large`: 2.25rem móvil, 2.5rem `sm`/`md`, 2.75rem `lg+`). Overlays: `typo-modal-*` y `typo-overlay-*`.
- Radios `rounded-xl` / `2xl` / `3xl`; sombras contenidas.
- Landing (skills, principios, proceso, proyectos): `max-w-7xl px-4 py-section` (40px móvil / 64px `sm+`). FAQ: `max-w-3xl`. Cards internas: `rounded-2xl`, sin sombra de reposo.
- Iconos: Lucide `strokeWidth` 1.6 en `BrandGlyph` (`h-12 w-12`, `icon-well`, degradado `#brand-icon-gradient`). Default `rounded-xl`. Chips del carrusel de skills: Lucide lineal + `rounded-full`.
- Carrusel de skills: cuatro filas en móvil, tres en tableta (`md`–`lg`), dos en `lg+`. Filas impares a la derecha, pares a la izquierda. Hover pausa todas; drag mueve solo la fila activa. `prefers-reduced-motion` apila chips sin autoplay.
- Motion + CSS; respetar `prefers-reduced-motion`.

## Temas

- Claro: primario índigo `#4C63F6`. Oscuro: fondo `#10131a`, primario `#4090FE`, hover `#2B72CD`.
- Inicial: `prefers-color-scheme` (preferencia `system`). Override en `localStorage` (`andur-theme`: `light` | `dark` | `system`).
- Tokens semánticos (`primary`, `surface-*`, `on-surface*`, `border`, `muted`, `icon-well`). Un componente nuevo no redefine paleta; logos de marca sí pueden.

## Navegación

- Header: navbar-pill flotante `max-w-7xl` (marca al hero + secciones + settings). Si el imagotipo choca con los tabs, pasa a isotipo; si sigue chocando, entra al scroll horizontal con las secciones. Hero `pt-chrome`. CV + avatares LinkedIn, correo y WhatsApp en el hero.
- Tabs y footer salen de `src/config/nav.ts` (mismo `h2` + `id`). Ver `.cursor/rules/section-titles.mdc`.
- Métricas solo en el hero. CV/Resume: pestaña nueva, sin atributo `download`; el CTA del hero lleva ícono Lucide `Download`.
- Settings (engrane): dropdown con tema Claro / Oscuro / Auto e idioma ES/EN.
- Hero: saludo `splashLine` + `heroTagline` estático + foto + CTA CV + métricas. Hasta tableta: texto, foto, botones, métricas (métricas centradas). `lg+`: texto/acciones/métricas a la izquierda y foto a la derecha. Entrada de secciones: Move In fijo.
- IDs de sección: contrato Header/footer; cambiarlos en `nav.ts` y en el `h2` de la sección.
- Footer: columna centrada en todos los anchos (logo, secciones, copyright). Design System y versión (enlace a GitHub Releases). Sin Laboratorio.
- Proceso: bloques (`rounded-xl` + borde) del mismo ancho, centrados; en fila desde `md`. Cada paso lleva su `BrandGlyph`.
- Proyectos: la card es cover (`object-cover object-center`) sin overlay oscuro; icono de expandir (hover / foco; visible si no hay hover, p. ej. táctil). El `title` del modal puede ser distinto.
- Caso Supervisor: comparaciones before/after en el paso de validación (`BeforeAfterSlider`). Con hover, el corte sigue el cursor; en táctil se arrastra; teclado con flechas. `prefers-reduced-motion` deja el corte en 50% hasta que hay arrastre o teclado. El toggle sticky del modal (`z-20 isolate`) queda por encima de los sliders al hacer scroll.

## Estados

- `normal` / `loading` / `error` reales. Toasts no bloquean.
- Header: imagotipo Andur (claro/oscuro) dentro del pill. Favicon: isotipo. Foto de perfil solo en el hero.
- Modales bloqueantes: portal a `body`; ocultan header y tabs. El cover del caso scrollea y sale; el toggle Detallado/Resumido (240px, centrado) queda sticky. `ModalCloseButton` 40px (caso: ícono colapsar `Minimize2`; resto: `X`). Móvil `h-dvh`; cierran con icono, Escape o atrás, no con el fondo. Desde `sm`: tarjeta y el fondo sí cierra.
- Design System: tema local copiado de la página, no la muta.

## Responsive y a11y

- `sm` 640 · `md` 768 · `lg` 1024. No `xl` / `2xl`.
- Táctil ~44px, foco visible, teclado, `aria-*` si el texto no basta. Tooltips táctiles: tap para abrir/cerrar, se cierran al scroll, no superan el viewport.
- Contraste en ambos temas; no comunicar estado solo con color.
- Imágenes: `alt`, encuadre estable, fallback si son remotas.
