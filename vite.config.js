import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'src',
  base: '/goit-js-hw-10/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'src/index.html'),
        timer: resolve(import.meta.dirname, 'src/01-timer.html'),
        snackbar: resolve(import.meta.dirname, 'src/02-snackbar.html'),
      },
    },
  },
});
