# 2026-07-27 — Ampliación del carrusel de logos

- Se añadieron Oyster, Buyer y Senda Monarca al carrusel existente.
- Oyster y Buyer se guardaron como SVG locales desde assets publicados por Yaydoo; el enlace de Facebook de Senda Monarca respondió 403, así que se usó el proyecto público de Behance de Andur como fuente visual.
- Se sustituyó el Oyster anterior por `Oyster-by-Yaydoo-logo.svg`, localizado en el catálogo público de medios de Yaydoo.
- Senda Monarca se empaqueta como imagen local y se presenta con un recorte SVG generado en runtime para eliminar el fondo blanco sin depender de red.
- `npm run lint` y `npm run build` pasaron; el servidor de desarrollo responde HTTP 200 en `127.0.0.1:3000`. La comprobación visual dentro del navegador quedó limitada porque la política de URL bloqueó recargar `localhost` en la pestaña abierta.
