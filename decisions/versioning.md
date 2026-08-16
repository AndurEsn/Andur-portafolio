# Versionado y releases

Última revisión: 2026-08-15.

## ADR-007 — Versionado Semántico (SemVer)

- Decisión: usar SemVer (`MAJOR.MINOR.PATCH`) como convención oficial del portafolio.
- Razón: comunica claramente compatibilidad y alcance de cada release; la versión en `package.json` es la fuente de verdad y se muestra en el menú Laboratorio.
- Consecuencias:
  - `MAJOR`: cambios incompatibles o simplificaciones grandes (p. ej. eliminar tour/NPS en v2.0.0).
  - `MINOR`: funcionalidad nueva compatible (p. ej. FAQ ampliado en v1.1.0).
  - `PATCH`: correcciones sin cambio de alcance.
  - Cada release debe actualizar `CHANGELOG.md`, el tag Git `vX.Y.Z` y una GitHub Release.
  - El menú Laboratorio muestra solo el número de versión y enlaza al historial en GitHub.
  - Referencia: [AWS DevOps — Semantic Versioning](https://aws.amazon.com/es/blogs/devops/using-semantic-versioning-to-simplify-release-management/).

## Flujo de release

1. Completar cambios en rama feature.
2. Actualizar versión en `package.json` y `CHANGELOG.md`.
3. `npm run lint && npm run build`.
4. Merge a `main`, tag `vX.Y.Z`, push con tags.
5. Verificar versión visible en Laboratorio.
