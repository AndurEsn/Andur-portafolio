import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Polling: FSEvents often misses agent/sandbox writes on this machine,
      // so the preview kept serving the previous module until Vite restarted.
      watch: process.env.DISABLE_HMR === 'true'
        ? null
        : { usePolling: true, interval: 300 },
    },
  };
});
