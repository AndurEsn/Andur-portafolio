# Problemas conocidos

Actualizado: 2026-09-02.

| Área | Problema | Mitigación |
|---|---|---|
| Preview | Vite desde el agente a veces no ve escrituras (FSEvents). | `server.watch.usePolling` en `vite.config.ts`. Reiniciar `npm run dev` si el preview no coincide. |
| Chat de Cursor | Al adjuntar PNG, Cursor lo recodifica a JPEG y pierde alfa. | Copiar el PNG desde disco; comprobar firma `PNG` y color type 6. |
| Contacto | Correo, LinkedIn y GitHub en `src/config/contact.ts`; CV en `cv.ts`. | Abrir el PDF en pestaña nueva. No reintroducir `download`, WhatsApp ni envío de formulario. |
| Portadas | URLs remotas de placeholders se eliminaron. | Cada caso importa su PNG como módulo Vite. |
| Fuentes | Inter depende de Google Fonts en runtime. | Autoalojar si importan privacidad, CSP u offline. |
| Editor demo | `PortfolioEditor` existe y no está montado. | No reactivarlo sin decisión; el contenido se edita en `src/content/`. |
| Reveal | `LandingReveal` exigía scroll hacia abajo y no animaba. | Entrar en vista (`amount` 0.2, `once: true`), sin dirección de scroll. |
| Foto hero | El lightbox dentro de `LandingReveal` quedaba bajo el carrusel. | Portal a `document.body`. |
| Tooling | `package-lock.json` real y `bun.lock` vacío. | Usar npm. |
| Hosting | Rutas desconocidas deben devolver `index.html`. | Fallback SPA. |
| Tests | Solo lint + build. | QA manual explícito. |
