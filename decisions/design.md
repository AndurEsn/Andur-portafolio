# Diseño y experiencia

Última revisión: 2026-07-23. Fuente ejecutable: `src/index.css` y componentes.

## Lenguaje visual

- Tipografía: Inter, pesos 400/500/600/700/900; hoy se carga desde Google Fonts.
- Forma: tarjetas y controles redondeados (`rounded-xl`/`2xl`/`3xl`), bordes suaves y sombras contenidas.
- Densidad: contenido centrado con `max-w-7xl`; copy largo usa anchos menores.
- Iconografía: Lucide React; mantener tamaño y grosor coherentes con el control.
- Movimiento: Motion para transiciones y CSS para shimmer/marquee; ofrecer alternativa con `prefers-reduced-motion`.

## Temas

- Claro: fondo casi blanco, superficies blancas/grises, primario índigo `#4C63F6`, texto azul tinta.
- Oscuro: fondo `#10131a`, superficies escalonadas, primario azul `#4090FE` y hover más oscuro `#2B72CD`.
- Usar nombres semánticos (`primary`, `background`, `surface-*`, `on-surface*`, `border`, `muted`, `error*`).
- Un componente nuevo debe funcionar sin redefinir paleta dentro de él. Los colores de WhatsApp y de logos son excepciones de marca.

## Jerarquía y navegación

- Header fijo con navegación por secciones y controles de idioma/tema/laboratorio.
- Flujo principal: Hero → marcas → métricas → trayectoria → proyectos → contacto → FAQ.
- Los IDs de sección son contratos compartidos por header y tour; renombrarlos exige actualizar ambos.
- El laboratorio comunica que loading/error/NPS/design system son demostraciones.
- Los encabezados de sección usan el patrón de Proyectos destacados: sin badge ni icono, `text-2xl sm:text-4xl`, peso negro y capitalización normal.

## Estados y feedback

- `normal`, `loading` y `error` son demostrables desde el laboratorio.
- Toasts confirman cambios sin bloquear.
- NPS aparece una vez tras 60 s si no existe decisión local.
- El avatar del encabezado es informativo; no abre menús ni activa modos de edición.
- Modales que bloquean contenido deben usar el lock compartido de scroll.
- La documentación del Design System muestra un tema local que se inicializa desde el tema de la página y no lo modifica.
- Los modales bloqueantes reutilizan `ModalCloseButton`: icono de cierre de 40 px en la esquina superior derecha y acción textual primaria en el pie cuando corresponde.

## Responsive y accesibilidad

- Base móvil; ampliar composición desde `sm`/`md`/`lg`.
- Conservar controles táctiles cercanos a 44 px, foco visible, `aria-*` cuando el texto visual no basta y navegación por teclado.
- Revisar contraste en ambos temas y no comunicar estado solo con color.
- Imágenes deben tener `alt`, dimensiones/encuadre estables y fallback cuando sean remotas.
