import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // React 16.9 has no `react/jsx-runtime`, so stick to the classic JSX transform
  plugins: [react({ jsxRuntime: 'classic' })],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
});
