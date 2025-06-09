import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/WeddingBulatGuzel/'
  plugins: [vue()],
  root: './',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/submit.php': 'http://localhost:8080'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}); 
