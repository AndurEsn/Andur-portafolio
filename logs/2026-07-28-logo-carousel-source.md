# 2026-07-28 — Contenedor y SVG de Senda Monarca

- Se restauró el contenedor visual anterior del carrusel (`rounded-2xl`, borde y superficie semántica), sin tocar la interacción de pausa, arrastre ni reanudación.
- Se sustituyó la representación generada de Senda Monarca por `src/assets/logos/senda-monarca.svg`, copia local del SVG proporcionado por el usuario; Vite lo incluye como recurso autónomo.
- `npm run lint`, `npm run build` y respuesta HTTP 200 en `http://localhost:3000/` verificados.
