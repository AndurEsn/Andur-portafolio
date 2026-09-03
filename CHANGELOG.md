# Changelog

Este proyecto sigue [Versionado Semántico (SemVer)](https://semver.org/lang/es/) y el formato [Keep a Changelog](https://keepachangelog.com/es/1.1.0/).

## [Unreleased]

## [2.0.0] - 2026-09-02

### Added

- 404 real para rutas distintas de `/`.
- Splash de bienvenida (2 s) y carga con fondo de puntos e indicador central (1 s).
- Secciones Filosofía y Proceso, ligadas al tab y al footer (`h2` + `id`).
- Caso Grill Design System (6 meses) con detalle por secciones.

### Changed

- Contacto: LinkedIn y `mailto:andur-design@outlook.com`.
- CV/Resume se abre en una pestaña nueva (`andur-cv-2026-ago.pdf`), sin descarga forzada.
- En inglés, la sección y el tab de Preguntas Frecuentes se llaman `FAQ`.
- Tema inicial según el sistema, override manual persistido; el splash respeta claro y oscuro.
- Splash y hero comparten `heroPhrases`.
- Tabs EN: About, Philosophy, Process, Work, Connect, FAQ.
- Íconos de marca más claros en oscuro.
- Animaciones de entrada al hacer scroll, sin exigir dirección hacia abajo.
- Menú del Laboratorio y tooltips adaptados al viewport en móvil.
- Paleta del Design System con el degradado del splash; tipografía Inter con muestras que hacen wrap.
- Tooltip con ancho al contenido; modales a pantalla completa en móvil (cerrar con icono o atrás).

### Removed

- Encuesta NPS, tour interactivo y simulaciones de carga/404 en Laboratorio.
- Formulario de contacto, WhatsApp y dependencias no usadas (`@google/genai`, Express).
- Sección de trayectoria en la landing y muestra de Input en el Design System.

## [1.1.0] - 2026-07-30

### Added

- FAQ ampliado a 18 preguntas con chips de categoría y descarga de CV.
- PDF local `andur-cv-2026.pdf` enlazado desde Hero y FAQ.
- Métricas actualizadas y copy de perfil revisado.
- Versionado SemVer visible en Laboratorio (enlace a GitHub Releases).
- Reorganización de `src/` por dominio (app, sections, overlays, content, config).

### Changed

- Trayectoria con Yaydoo (2019–2024), Leracom y Freelance.
- Tour con spotlight sobre secciones completas.

## [1.0.0] - 2026-07-28

### Added

- Publicación inicial del portafolio interactivo bilingüe.
- Tema claro/oscuro, tour, Laboratorio, Design System y NPS.
- Secciones Hero, Métricas, Trayectoria, Proyectos, Contacto y FAQ.

[Unreleased]: https://github.com/AndurEsn/Andur-portafolio/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/AndurEsn/Andur-portafolio/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/AndurEsn/Andur-portafolio/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/AndurEsn/Andur-portafolio/releases/tag/v1.0.0
