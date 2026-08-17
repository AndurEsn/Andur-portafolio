# Andur · Portafolio

Portafolio interactivo bilingüe (ES/EN) de Andur, Product Designer. Es una SPA cliente enfocada en mostrar experiencia, métricas, trayectoria, casos de estudio y formas de contacto con una experiencia accesible y responsive.

Repositorio: [github.com/AndurEsn/Andur-portafolio](https://github.com/AndurEsn/Andur-portafolio)

## Características

- Contenido en español e inglés.
- Temas claro y oscuro.
- Navegación por secciones y estados reales `normal`, `loading` y `error`.
- Filtros y modal de casos de estudio.
- Métricas, trayectoria tipo Gantt, FAQ y Design System documentado.
- Laboratorio de animaciones y Design System documentado.
- Contacto por LinkedIn y correo (`mailto:`), más descarga de CV.
- Soporte para teclado, `prefers-reduced-motion` y nombres accesibles.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide React

## Requisitos

- Node.js 18 o superior (se recomienda una versión LTS reciente).
- npm, gestor de paquetes canónico del proyecto.

## Inicio rápido

```bash
git clone https://github.com/AndurEsn/Andur-portafolio.git
cd Andur-portafolio
npm install
npm run dev
```

La aplicación se sirve por defecto en [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Configuración

No hay variables de entorno requeridas. Correo, LinkedIn y GitHub están en `src/config/contact.ts`; el PDF del CV, en `src/config/cv.ts`. Cualquier secreto futuro debe ir en `.env.local`, nunca en archivos versionables.

## Scripts disponibles

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo en el puerto 3000. |
| `npm run build` | Genera el bundle de producción en `dist/`. |
| `npm run preview` | Sirve localmente el bundle generado. |
| `npm run lint` | Ejecuta la comprobación de tipos con TypeScript. |
| `npm run clean` | Elimina artefactos locales de build definidos por el script. |

Para validar un cambio antes de publicarlo:

```bash
npm run lint
npm run build
```

## Estructura del proyecto

```text
src/
├── App.tsx                 # Estado global y composición de la página
├── data.ts                 # Copy ES/EN, métricas, proyectos, FAQ y tour
├── types.ts                # Contratos de dominio y estados de UI
├── components/             # Secciones, modales y overlays
├── hooks/                  # Hooks reutilizables
├── assets/                 # Avatar y logotipos locales
└── index.css               # Tokens de tema y utilidades globales
contexto/                   # Índice de la memoria del proyecto
state/                      # Estado vigente y próximos pasos
decisions/                  # Decisiones técnicas y de diseño
gotchas/                    # Problemas conocidos y mitigaciones
skills/                     # Workflows reutilizables
```

Consulta [`contexto/README.md`](contexto/README.md) para navegar la documentación operativa.

## Notas de desarrollo

- No hay backend activo ni persistencia remota.
- El contacto abre LinkedIn o un enlace `mailto:`; no envía datos por un servicio propio.
- Algunas imágenes de proyectos todavía se cargan desde URLs externas.
- No existe aún una suite automatizada de pruebas de interacción; la validación actual combina TypeScript, build y revisión manual.

## Contribuir

1. Crea una rama descriptiva desde `main`.
2. Mantén la paridad de copy entre `es` y `en`.
3. Reutiliza los tokens semánticos de `src/index.css`.
4. No subas secretos, `.env.local`, `dist/` ni dependencias instaladas.
5. Ejecuta `npm run lint` y `npm run build` antes de abrir un pull request.

## Licencia

Este repositorio no declara todavía una licencia open source. Solicita autorización antes de reutilizar el código, los textos o los assets del portafolio.
