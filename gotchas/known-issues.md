# Problemas conocidos y mitigaciones

Actualizado: 2026-08-17.

| Área | Problema | Mitigación / solución |
|---|---|---|
| Avatar | `App.tsx` usa `'/src/assets/images/...'` como string; Vite no lo emitió en `dist/assets`. | Importar el JPG como módulo y usar la URL importada antes de publicar. |
| Contacto | El correo, LinkedIn y GitHub viven en `src/config/contact.ts`; el CV en `src/config/cv.ts`. | No reintroducir `VITE_CONTACT_EMAIL` ni WhatsApp sin una decisión explícita. |
| Contenido remoto | Cinco imágenes de proyecto dependen de URLs `googleusercontent.com`. | Descargar con derechos confirmados, importar localmente y añadir fallback. |
| Fuentes | Inter depende de Google Fonts y de red en runtime. | Autoalojar si privacidad, CSP o disponibilidad offline importan. |
| Editor demo | `PortfolioEditor` existe en overlays pero no está montado. | No reactivarlo sin decisión; el contenido se edita en `src/content/data.ts`. |
| Reveal al scroll | `LandingReveal` exigía `scrollDirection === 'down'` y `once: true`, así que las secciones aparecían sin animar. | Animar al entrar en vista (`amount` 0.2, `margin` inferior −12%, `once: true`) sin depender de la dirección del scroll. |
| Tooling | Coexisten `package-lock.json` real y `bun.lock` vacío. | Usar npm hasta retirar o poblar intencionalmente el lock alternativo. |
| AI Studio | El README y la metadata histórica pueden mencionar Gemini. | No añadir una API key ni `@google/genai` sin una función real. |
| Tests | Solo hay typecheck y build; no existen tests automatizados. | Hacer QA manual explícito y priorizar smoke tests de interacciones críticas. |
| Git | El trabajo v2 está en `feat/v2-simplification` local, sin push. | No publicar ni etiquetar `v2.0.0` hasta aprobación explícita. |
