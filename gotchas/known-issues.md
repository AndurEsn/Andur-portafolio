# Problemas conocidos y mitigaciones

Actualizado: 2026-08-18.

| Área | Problema | Mitigación / solución |
|---|---|---|
| Preview local | Vite iniciado desde el agente no veía escrituras en disco (FSEvents). El preview seguía el módulo anterior hasta reiniciar. | `server.watch.usePolling` en `vite.config.ts`. Si el preview no coincide con el código, reiniciar `npm run dev`. |
| Avatar | `App.tsx` usa `'/src/assets/images/...'` como string; Vite no lo emitió en `dist/assets`. | Importar el JPG como módulo y usar la URL importada antes de publicar. |
| Contacto | El correo, LinkedIn y GitHub viven en `src/config/contact.ts`; el CV en `src/config/cv.ts`. | Abrir el PDF en una pestaña nueva. No reintroducir `download`, `VITE_CONTACT_EMAIL` ni WhatsApp sin una decisión explícita. |
| Portadas de proyecto | Las URLs remotas de placeholders se eliminaron. Grill importa `src/assets/images/grill-design-system.png`. | Cada caso nuevo debe importar su portada como módulo Vite, no como URL remota. |
| Fuentes | Inter depende de Google Fonts y de red en runtime. | Autoalojar si privacidad, CSP o disponibilidad offline importan. |
| Editor demo | `PortfolioEditor` existe en overlays pero no está montado. | No reactivarlo sin decisión; el contenido se edita en `src/content/`. |
| Reveal al scroll | `LandingReveal` exigía `scrollDirection === 'down'` y `once: true`, así que las secciones aparecían sin animar. | Animar al entrar en vista (`amount` 0.2, `margin` inferior −12%, `once: true`) sin depender de la dirección del scroll. |
| Visor de foto | El lightbox del hero vivía dentro de `LandingReveal` (transform), así que el carrusel de logos quedaba por encima. | Renderizar el visor con portal a `document.body`. |
| Tooling | Coexisten `package-lock.json` real y `bun.lock` vacío. | Usar npm hasta retirar o poblar intencionalmente el lock alternativo. |
| AI Studio | El README y la metadata histórica pueden mencionar Gemini. | No añadir una API key ni `@google/genai` sin una función real. |
| Tests | Solo hay typecheck y build; no existen tests automatizados. | Hacer QA manual explícito y priorizar smoke tests de interacciones críticas. |
| Git | El trabajo v2 está en `feat/v2-simplification` local, sin push. | No publicar ni etiquetar `v2.0.0` hasta aprobación explícita. |
