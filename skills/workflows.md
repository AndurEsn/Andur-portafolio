# Workflows reutilizables

## Inicio de tarea

1. Leer `AGENTS.md` y `state/current.md`.
2. Elegir un solo documento de apoyo según el routing.
3. Localizar símbolos con `rg`; abrir únicamente el rango relevante.
4. Confirmar el comportamiento existente antes de editar.

## Contenido e i18n

1. Editar `src/data.ts` para proyectos, métricas, roadmap, FAQ, tour y traducciones.
2. Si cambia la forma de datos, modificar primero `src/types.ts`.
3. Añadir ES y EN en el mismo cambio; buscar la clave para detectar usos y duplicados.
4. Revisar longitud en móvil, acentos, cifras, fechas, enlaces y claims.
5. Ejecutar `npm run lint` y `npm run build`.

## UI

1. Leer `decisions/design.md` y ubicar el componente dueño.
2. Reutilizar tokens semánticos y componentes/patrones existentes.
3. Implementar mobile-first; evitar estado duplicado y colores hardcodeados no justificados.
4. Probar estado normal y, si aplica, loading/error, overlays y scroll lock.
5. Revisar ES/EN, claro/oscuro, móvil/escritorio, teclado y reduced motion.
6. Ejecutar validación técnica.

## Bug

1. Buscar el síntoma en `gotchas/known-issues.md`.
2. Definir una reproducción mínima y la causa, no solo el efecto.
3. Aplicar el cambio más pequeño que preserve invariantes.
4. Añadir prueba automatizada si existe infraestructura; si no, documentar la comprobación manual.
5. Actualizar gotchas solo si el riesgo puede repetirse.

## Validación y entrega

```bash
npm run lint
npm run build
```

- No dar por válido `dist/` existente: regenerarlo.
- Para cambios visuales, servir build o dev y revisar anchos representativos.
- Antes de desplegar, buscar configuración de hosting y comprobar variables, rutas de assets, enlaces externos y datos de contacto.
- Reportar comandos ejecutados, resultado, archivos materiales y cualquier verificación no realizada.

## Cierre de sesión

1. Actualizar `state/current.md` solo si cambió la verdad vigente.
2. Crear/editar una decisión solo para una elección duradera con alternativas o consecuencias.
3. Añadir un gotcha solo si evita una recaída concreta.
4. Crear un log solo si la sesión cambió arquitectura, release, dirección de producto o memoria.
5. Mantener cada entrada corta y enlazar archivos fuente; nunca pegar diffs o conversaciones completas.

