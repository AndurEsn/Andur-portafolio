# Hero, animaciones, NPS, menú y footer

Fecha: 2026-07-28.

- Se centró el Hero y se reemplazó el fondo anterior por una malla de puntos en canvas que responde a la proximidad del cursor. La variante táctil y de movimiento reducido es estática.
- Move In, Fade In y Scale In se preparan de nuevo al salir del viewport y se reproducen al regresar, sin remontar las secciones.
- El registro NPS de dos pasos quedó siempre accesible desde Laboratorio, sin vistas de consulta o edición; un envío manual reemplaza el registro demo local.
- Avatar y “Portafolio” forman un único control; se homologaron Flask, Moon y Sun.
- El copyright del footer quedó conectado al idioma activo con textos ES/EN.
- Validación: `npm run lint` y `npm run build` pasaron. Se comprobó en navegador el centrado responsive, la repetición de animaciones, el flujo NPS, el control Portafolio y el cambio inmediato del footer.
