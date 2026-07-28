# Problemas conocidos y mitigaciones

Actualizado: 2026-07-23.

| Área | Problema | Mitigación / solución |
|---|---|---|
| Avatar | `App.tsx` usa `'/src/assets/images/...'` como string; Vite no lo emitió en `dist/assets`. | Importar el JPG como módulo y usar la URL importada antes de publicar. |
| Contacto | El formulario de correo necesita `VITE_CONTACT_EMAIL`; sin esa variable no puede abrir un destinatario real. | Configurar el email antes de publicar o integrar un endpoint/proveedor con estados de error, privacidad y anti-spam. |
| WhatsApp | El número placeholder aparece en `App.tsx` y `Contact.tsx`. | Cambiar ambos o centralizar el enlace en datos/configuración. |
| Contenido remoto | Cinco imágenes de proyecto dependen de URLs `googleusercontent.com`. | Descargar con derechos confirmados, importar localmente y añadir fallback. |
| Fuentes | Inter depende de Google Fonts y de red en runtime. | Autoalojar si privacidad, CSP o disponibilidad offline importan. |
| Editor demo | Cambios viven en memoria; los uploads usan object URLs y se pierden al recargar. | Mantener la etiqueta “demo”; revocar URLs o diseñar persistencia si se convierte en función real. |
| NPS | `dismissed` y `submitted` evitan futuros prompts mediante `portfolio-nps-feedback-v1`. | Para repetir pruebas, borrar solo esa clave; cambiar versión únicamente de forma intencional. |
| IDs | Header y tour dependen de IDs de sección literales. | Al renombrar una sección, buscar el ID en todo `src/`. |
| Tooling | Coexisten `package-lock.json` real y `bun.lock` vacío. | Usar npm hasta retirar o poblar intencionalmente el lock alternativo. |
| AI Studio | README, metadata, `.env.example`, dependencias y un texto del modal mencionan Gemini aunque el código no lo usa. | Auditar y retirar/actualizar juntos; no añadir una API key sin una función real. |
| Tests | Solo hay typecheck y build; no existen tests automatizados. | Hacer QA manual explícito y priorizar smoke tests de interacciones críticas. |
| Git | Este directorio no es un repositorio Git detectable. | Inicializar/conectar Git solo con decisión del propietario; no asumir historial. |
