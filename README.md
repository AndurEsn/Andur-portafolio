# Andur Portafolio

Portafolio interactivo bilingüe (ES/EN) de Andur, Product Designer. La aplicación incluye temas claro y oscuro, casos de estudio, trayectoria, métricas, tour guiado, estados simulados, encuesta NPS y flujos de contacto.

## Tecnologías

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide

## Desarrollo local

Requisitos: Node.js y npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

## Variables de entorno

`VITE_CONTACT_EMAIL` configura el destinatario del formulario de correo. El archivo `.env.local` no debe versionarse.

## Validación

```bash
npm run lint
npm run build
```

## Documentación del proyecto

El índice de contexto se encuentra en [`contexto/README.md`](contexto/README.md).
