# 2026-07-28 — Interacción del carrusel de logos

- Se retiró el borde, fondo y redondeo del contenedor visual; el carrusel queda sobre el fondo de la sección.
- El movimiento pasó de animación CSS a un bucle controlado por `requestAnimationFrame` para que clic y arrastre conserven la posición. Al salir después de una pausa, reanuda a los dos segundos; entrar de nuevo cancela esa reanudación.
- Oyster usa una variante clara derivada del SVG oficial de Yaydoo; Senda Monarca se renderiza como SVG inline con su PNG local y filtro para transparentar el blanco.
- `npm run lint`, `npm run build` y respuesta HTTP 200 en `http://localhost:3000/` verificados.
