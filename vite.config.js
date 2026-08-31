import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    // Never emit source maps in production — they expose source code to browsers
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('lucide-react')) {
            return 'lucide';
          }
        },
      },
    },
  },
  // Prevent VITE_ env vars from being embedded in the bundle unless explicitly used
  // (No VITE_ env vars currently exist in this project)
  envPrefix: 'VITE_',
}));
