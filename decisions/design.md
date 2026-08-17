# Diseño y experiencia

Última revisión: 2026-08-17. Fuente ejecutable: `src/styles/index.css` y componentes.

## Lenguaje visual

- Tipografía: Inter, pesos 400/500/600/700/900; hoy se carga desde Google Fonts. La página usa display/heading/body; los overlays reutilizan `typo-modal-title`, `typo-modal-subtitle`, `typo-overlay-heading` y `typo-overlay-body` (modales, Laboratorio y documentación).
- Forma: tarjetas y controles redondeados (`rounded-xl`/`2xl`/`3xl`), bordes suaves y sombras contenidas.
- Densidad: las secciones de landing (métricas, trayectoria, proyectos y contacto) comparten `max-w-7xl`, `px-4` y padding vertical de `40px` en móvil y `64px` desde `sm` (`py-section`). El carrusel de logos es una sección independiente, visualmente integrada bajo los CTAs del hero. FAQ limita el contenido a `max-w-3xl`. Los contenedores internos usan borde `rounded-2xl` sin sombra de reposo.
- Iconografía: Lucide React, trazo lineal (`strokeWidth` 1.6) dentro de un recuadro `h-12 w-12` con `rounded-xl`, borde y fondo `icon-well`, sin sombra. El trazo usa el degradado `#brand-icon-gradient` (`--icon-gradient-from` → `--icon-gradient-to`) vía `BrandGlyph`. En oscuro el recuadro y el trazo son más claros para contraste. Este estilo aplica en métricas, trayectoria y la documentación del Design System; los logos de empresa en el carrusel de marcas son la excepción.
- Movimiento: Motion para transiciones y CSS para shimmer/marquee; ofrecer alternativa con `prefers-reduced-motion`.

## Temas

- Claro: fondo casi blanco, superficies blancas/grises, primario índigo `#4C63F6`, texto azul tinta.
- Oscuro: fondo `#10131a`, superficies escalonadas, primario azul `#4090FE` y hover más oscuro `#2B72CD`.
- El tema inicial sigue `prefers-color-scheme`. El usuario puede cambiarlo a mano; esa elección se guarda en `localStorage` (`andur-theme`) y deja de seguir al sistema. El splash usa los mismos tokens, así que respeta claro y oscuro.
- Usar nombres semánticos (`primary`, `background`, `surface-*`, `on-surface*`, `border`, `muted`, `error*`, `icon-well`).
- Un componente nuevo debe funcionar sin redefinir paleta dentro de él. Los logos de marca son la excepción justificada.

## Jerarquía y navegación

- Header fijo de `64px`. Las tabs van pegadas debajo (`top-16`). El espacio de `40px` en móvil y `64px` desde `sm` queda entre ese chrome y el avatar del hero (`pt-section`).
- Flujo principal: Hero (con logos) → métricas → trayectoria → proyectos → contacto → Preguntas Frecuentes.
- Los IDs de sección son contratos compartidos por header y footer; renombrarlos exige actualizar ambos.
- El laboratorio ofrece animaciones de entrada, Design System y el número de versión.
- Los titulares de Preguntas Frecuentes (sección y categorías) van en title case. El tab y el footer usan el mismo nombre que el `h2`: `Preguntas Frecuentes` en español y `FAQ's` en inglés.
- Los encabezados de sección usan el patrón de Proyectos destacados: sin badge ni icono, `text-2xl sm:text-4xl`, peso negro y capitalización en title case.

## Estados y feedback

- `normal`, `loading` y `error` son estados reales: contenido, carga inicial y 404 de ruta.
- Toasts confirman cambios sin bloquear.
- El avatar del encabezado es informativo; no abre menús ni activa modos de edición.
- Modales que bloquean contenido deben usar el lock compartido de scroll.
- La documentación del Design System muestra un tema local que se inicializa desde el tema de la página y no lo modifica.
- Los modales bloqueantes reutilizan `ModalCloseButton` de 40 px en la esquina superior derecha. El pie con acción primaria solo existe cuando hay una acción distinta de cerrar. Pulsar el fondo cierra el modal.

## Responsive y accesibilidad

- Base móvil; ampliar composición desde `sm` (≥ 640px), `md` (≥ 768px) y `lg` (≥ 1024px). No se usan `xl` ni `2xl`.
- Conservar controles táctiles cercanos a 44 px, foco visible, `aria-*` cuando el texto visual no basta y navegación por teclado.
- Revisar contraste en ambos temas y no comunicar estado solo con color.
- Imágenes deben tener `alt`, dimensiones/encuadre estables y fallback cuando sean remotas.
