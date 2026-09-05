# Estado actual

Actualizado: 2026-09-03.

## Landing

Hero → logos → Principios → Proceso → Proyectos (`Work`) → Contacto (`Connect`) → Preguntas Frecuentes (`FAQ`). Tabs/footer = `h2` vía `src/config/nav.ts`.

Proceso: bloques del mismo ancho, centrados (texto e ícono); desde `md` van en fila. Principios: 3 cards.

Proyectos: card Grill = cover ES nuevo, sin overlay; texto `Grill Design System` en Montserrat. Modal conserva el título largo.

Grill: cover nuevo sin título HTML en card ni modal; pasos 1–4 con imagen light/dark.

Header: idioma en un clic (bandera del activo); CV/Resume con ícono de descarga (sigue abriendo pestaña nueva).

## Próximo

1. Más proyectos (copy + portada + EN).
2. QA en móvil real.

## Riesgos

Hosting debe servir `index.html` para rutas desconocidas. No hay tests automatizados.
