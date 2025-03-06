import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/', // ✅ Ensures correct base URL
  build: {
    outDir: 'dist'
  },
  server: {
    host: true
  }
});