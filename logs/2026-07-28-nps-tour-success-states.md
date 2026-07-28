# NPS, tour y avisos de éxito — 2026-07-28

- Se retiraron las vistas de consulta y edición de la respuesta NPS. Tras enviar, se persiste localmente, se cierra el modal y el acceso del Laboratorio ya no se muestra.
- El tour continúa siendo una tarjeta flotante sin backdrop. Se elevó sobre los avisos temporales, se adaptó al alto útil de pantalla y la documentación incorpora una muestra específica de esta variante.
- Se añadió la variante semántica `success` para los avisos. Los cambios de tema y la desactivación de carga/error usan el contenedor verde y mensajes de confirmación localizados.
- Verificado: `npm run lint`, `npm run build`, tour visible en escritorio, 390×844 y 768×1024; documentación y alerta verde de tema visibles en localhost.
