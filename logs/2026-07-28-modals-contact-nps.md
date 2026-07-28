# Modales, NPS y contacto — 2026-07-28

- Se creó `src/components/ModalCloseButton.tsx` y se aplicó a los modales bloqueantes actuales.
- NPS pasó a dos pasos, con descarte confirmado y sin edición de respuestas ya registradas.
- Contacto se limitó a los flujos de correo y WhatsApp; el correo usa `VITE_CONTACT_EMAIL` si está configurado y WhatsApp prepara el mensaje en `wa.me`.
- Se validó con `npm run lint`, `npm run build` y una comprobación manual local de los dos modales de contacto.
