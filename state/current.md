# Estado actual

Actualizado: 2026-07-28.

## Verificado

- SPA React 19 + TypeScript + Vite 6 + Tailwind 4; sin backend activo.
- `npm run lint`: pasa.
- `npm run build`: pasa; bundle JS actual ≈ 444 kB (≈ 137 kB gzip).
- Funciones implementadas: ES/EN, claro/oscuro, navegación por secciones, tour, filtros/modal de proyectos, roadmap, loading/error simulados, NPS local y documentación visual. No hay modo de edición expuesto en la interfaz.
- El carrusel de logos conserva su contenedor visual, se mueve con un bucle de bajo nivel y admite pausa por clic, arrastre horizontal y reanudación un segundo después de salir.
- El submenú solo se muestra en estado normal y su selección cambia sin escala, sombra ni outline transitorio. La fotografía del hero abre un visor local con zoom.
- La documentación del Design System inicia con el tema actual de la página, pero su selector Light mode / Dark mode solo afecta al modal.
- Todos los modales bloqueantes comparten el botón iconográfico de cierre en la esquina superior derecha y el cierre textual primario. La encuesta NPS usa dos pasos (calificación obligatoria y comentario opcional con acción “Omitir”), sin edición ni consulta posterior. La aparición automática se suprime tras una decisión local, pero el registro manual permanece siempre disponible en Laboratorio, abre un formulario vacío y reemplaza la respuesta demo local anterior al enviarse. Conserva regreso al paso 1 y confirmación al abandonar progreso.
- La sección de contacto conserva su copy y solo ofrece dos CTA: formulario de correo y flujo conversacional de WhatsApp. WhatsApp prepara un mensaje en `wa.me`; el correo requiere `VITE_CONTACT_EMAIL` para abrir un destinatario real.
- Los pies de ambos modales de contacto reutilizan el patrón del Design System. Las validaciones muestran alertas de error y estados visibles de campo obligatorio; WhatsApp ofrece dos motivos más “Otro” y su envío usa la acción verde de la marca.
- La trayectoria muestra Yaydoo (UX/UI Designer, 2019 a 2024), Leracom (Product Designer) y Freelance (Product Designer); su Gantt ahora usa la misma superficie `card-bg` de Métricas en ambos temas. Las tarjetas de métricas comparten la animación de sus iconos.
- La documentación incluye estados de éxito y de input inválido, además de la variante especial de tour flotante. Las alertas de cambio de idioma y tema usan mensajes simples; las de tema y de desactivar carga/error usan el estado verde de éxito, y cerrar la documentación ya no crea una alerta.
- El tour usa una tarjeta flotante sobre un backdrop segmentado y un spotlight que enfoca el contenido relacionado de cada paso. Se recalcula al redimensionar y al cambiar de sección; los controles desplazan a la sección activa y rueda, gestos, teclado y barra de scroll quedan acotados a sus límites. Cerrar, omitir, finalizar o Escape restablecen el scroll normal sin mover la posición actual. No muestra aviso al iniciar y concluye con una alerta verde de éxito.
- El encabezado presenta una acción conjunta de avatar + “Portafolio” con área activa completa y hover estable, coherente con los controles del menú. Siempre desplaza al Hero; desde carga o error restablece primero la landing normal. Flask, Moon y Sun comparten tamaño y grosor visual. El footer replica las seis secciones del submenú en el mismo orden y muestra el copyright correspondiente al idioma activo.
- El Hero mantiene su contenido centrado en un ancho máximo responsive. La landing normal completa utiliza una única malla de puntos en canvas, fija al viewport y ubicada detrás de las secciones, sutil y basada en tokens del tema; se redimensiona con la ventana y reacciona por proximidad con cursor fino. En táctil o con movimiento reducido permanece estática, y nunca intercepta interacciones.
- En tablet y móvil, los filtros de proyectos se distribuyen en varias líneas sin scroll horizontal; las tarjetas de métricas y la sección de contacto centran su contenido. Desktop conserva su composición alineada actual.
- Laboratorio permite probar globalmente Move In, Fade In y Scale In, con un tooltip que explica que cambian la presentación del contenido. La documentación del Design System muestra un ejemplo breve de tooltip, anclado dentro de los límites visibles del modal. Cada entrada espera 0.2 s y se anima durante 0.8 s; los bloques se reinician al salir del viewport y vuelven a ejecutarse al regresar. Cambiar el preset reinicia y aplica el comportamiento seleccionado sin remontar componentes ni perder estados internos, y se respeta movimiento reducido.
- El primer paso del modal de WhatsApp pregunta “¿Cómo te llamas?” y comparte la misma jerarquía tipográfica que la pregunta de motivo.
- En oscuro el primario global es `#4090FE`, con hover más oscuro; la muestra Secondary de la documentación usa texto `background` para mantener contraste.
- Assets locales: avatar y ocho logos del carrusel (Yaydoo, PorCobrar, VendorPlace, Supervisor AI, Leracom AI, Oyster, Buyer y Senda Monarca). Oyster usa una variante legible en claro; Senda usa el SVG original proporcionado por el usuario. Las imágenes de proyectos siguen siendo remotas.
- El logo de Oyster fue reemplazado por el SVG público “Oyster by Yaydoo” de la biblioteca de medios de Yaydoo; el servidor de desarrollo queda disponible en `http://127.0.0.1:3000/`.
- La preparación para el primer repositorio Git incluye un `.gitignore` que excluye dependencias, builds, cobertura, logs y archivos `.env` salvo `.env.example`; `contexto/README.md` indexa la memoria versionada sin duplicarla.

## Próximo trabajo recomendado

1. Antes de publicar: sustituir el número `5211234567890` en `src/App.tsx` y `src/components/Contact.tsx`.
2. Configurar `VITE_CONTACT_EMAIL` antes de publicar para que el formulario de correo pueda abrir un destinatario real.
3. Confirmar y corregir copy profesional/datos restantes, fechas superpuestas y métricas/casos.
4. Migrar imágenes de proyecto remotas a assets controlados y definir fallback.
5. Limpiar `metadata.json` y dependencias heredadas de AI Studio que el runtime no utiliza.
6. Añadir pruebas mínimas de interacción/accesibilidad y completar QA visual responsive más amplio.
7. Definir hosting, dominio, analítica/privacidad y criterio de rendimiento.

## Riesgos / blockers de lanzamiento

- Correo de contacto real no configurado y teléfono de WhatsApp placeholder.
- No hay suite de tests ni evidencia de QA en navegadores.
- El historial Git comienza con la publicación inicial; no existe historial previo para recuperar decisiones anteriores.

## Regla de actualización

Reemplazar este snapshot cuando cambie el estado. Conservar solo hechos vigentes, próximos pasos y blockers; enviar el “por qué” duradero a `decisions/` y el historial a `logs/`.
