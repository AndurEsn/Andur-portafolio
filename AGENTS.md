# AGENTS.md

## Proyecto

Portafolio interactivo bilingüe (ES/EN) de Andur, Product Designer. Es una SPA cliente construida con React 19, TypeScript, Vite 6, Tailwind CSS 4, Motion y Lucide. Presenta experiencia, métricas, trayectoria, casos de estudio, contacto y FAQ; además incluye tema claro/oscuro, Laboratorio, Design System y estados reales de carga y 404.

## Fuente de verdad y orden de lectura

El context window es caro y volátil. La memoria real debe vivir en archivos.

1. Leer este archivo.
2. Leer `state/current.md`.
3. Según la tarea, abrir solo uno o dos documentos:
   - arquitectura o límites: `decisions/architecture.md`
   - UI, tokens o interacción: `decisions/design.md`
   - ejecución y validación: `skills/workflows.md`
   - fallos o rarezas: `gotchas/known-issues.md`
4. Inspeccionar con `rg` únicamente los archivos de código implicados.
5. Consultar `logs/` solo para auditoría o para entender por qué cambió la memoria.

Nunca cargar todo el historial ni todos los archivos del proyecto. Cargar solo lo estrictamente necesario para la tarea actual. Preferir referenciar archivos antes que copiar contenido largo al prompt.

## Mapa mínimo del código

- `src/app/App.tsx`: estado global cliente y composición de la página.
- `src/app/main.tsx`: entrypoint de la SPA.
- `src/content/data.ts`: copy ES/EN, métricas, trayectoria, proyectos y FAQ.
- `src/types/index.ts`: contratos de dominio y estados de UI.
- `src/components/`: secciones, overlays, layout, feedback, efectos y UI.
- `src/config/`: versión SemVer, contacto, GitHub y ruta del CV.
- `src/styles/index.css`: tokens de tema y utilidades globales.
- `src/assets/`: avatar, logos y documentos locales.
- `vite.config.ts`: Vite, React, Tailwind y alias `@` → `src/`.
- `dist/`: salida generada; nunca editar manualmente.
- `CHANGELOG.md`: historial de versiones; publicar el detalle en GitHub Releases.

## Reglas duras e invariantes

- Mantener paridad funcional y de contenido entre `es` y `en`.
- Los titulares de Preguntas Frecuentes (sección y categorías) van en title case. El tab de navegación usa el mismo nombre que el `h2`: `Preguntas Frecuentes` en español y `FAQ's` en inglés.
- Mantener soporte de temas `light` y `dark`; usar tokens semánticos de `src/styles/index.css`, no colores arbitrarios salvo colores de marca justificados.
- Mantener los estados `splash | loading | normal | error` (bienvenida, carga, contenido y 404 de ruta).
- El contenido compartido pertenece en `src/content/data.ts`; los contratos, en `src/types/`; evitar copy duplicado en componentes cuando sea reutilizable.
- No introducir backend, persistencia remota ni afirmar que el contacto envía datos sin una decisión explícita y credenciales/configuración aprobadas.
- No exponer secretos. Variables reales van en `.env.local`, nunca en archivos versionables.
- Mantener accesibilidad básica: HTML semántico, teclado, nombres accesibles, foco visible y respeto por `prefers-reduced-motion`.
- Usar `npm` como gestor canónico mientras exista `package-lock.json`; no confiar en el `bun.lock` vacío.
- No editar `dist/`; regenerarlo con `npm run build`.
- Preservar cambios ajenos y mantener el alcance de cada cambio pequeño.

## Routing de tareas y skills

- Cambios de copy, proyectos, métricas, FAQ o trayectoria: leer `state/current.md`, después `skills/workflows.md` → “Contenido e i18n”; editar principalmente `src/content/data.ts`.
- Cambios visuales, responsive, tema, animación o accesibilidad: leer `decisions/design.md` y `skills/workflows.md` → “UI”.
- Cambios de estado, overlays o persistencia: leer `decisions/architecture.md` y `gotchas/known-issues.md`.
- Bugs: buscar primero en `gotchas/known-issues.md`; reproducir, hacer el cambio mínimo y ejecutar la validación proporcional.
- Build, release o despliegue: seguir `skills/workflows.md` → “Validación y entrega”; verificar primero si existe configuración de hosting.
- Mantenimiento de memoria: seguir `skills/workflows.md` → “Cierre de sesión”.
- Convertir procedimientos repetitivos en skills reutilizables dentro de `skills/`; no crear un skill para una acción aislada.

## Forma de trabajar con contexto

- Empezar con `rg --files` y búsquedas dirigidas; no volcar archivos grandes completos.
- Tratar `state/current.md` como snapshot reemplazable, no como diario.
- Registrar en `decisions/` solo elecciones duraderas con fecha, razón y consecuencias.
- Registrar en `gotchas/` problemas reproducibles y su solución o mitigación.
- Guardar en `logs/` únicamente resúmenes comprimidos de sesiones importantes; no transcripciones.
- Si el código contradice la memoria, verificar el comportamiento, corregir la memoria y dejar constancia solo si la diferencia fue relevante.
- Al final de cada sesión importante: actualizar `state/`, registrar decisiones y comprimir lo valioso en `logs/`.
- Mantener este archivo conciso y de alta densidad de información (máximo 250–300 líneas).

## Definition of Done

Una tarea está terminada cuando:

- el resultado solicitado funciona sin ampliar el alcance;
- TypeScript pasa con `npm run lint`;
- producción compila con `npm run build`;
- si cambió UI, se revisaron tema claro/oscuro, ES/EN, móvil/escritorio y flujo de teclado relevante;
- no se añadieron secretos, dependencias o duplicación innecesaria;
- `state/current.md` refleja cambios materiales;
- toda decisión duradera nueva está en `decisions/`;
- solo una sesión material recibe un log breve.

## Punteros de memoria

- Estado vivo: `state/current.md`
- Decisiones técnicas: `decisions/architecture.md`
- Sistema visual y decisiones de UX: `decisions/design.md`
- Procedimientos: `skills/workflows.md`
- Riesgos y problemas conocidos: `gotchas/known-issues.md`
- Historial comprimido: `logs/`

