// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'my-custom-dist', // Specify your custom output directory
    build: {
        chunkSizeWarningLimit: 1000 * 1024, // 1000 KB (1 MB) as an example limit
      },
      sourcemap: true,
  },
});
