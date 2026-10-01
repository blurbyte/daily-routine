import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  test: {
    dir: './src',
    environment: 'jsdom',
    globals: true,
    pool: 'vmThreads',
    setupFiles: './src/setupTests.js'
  }
});
