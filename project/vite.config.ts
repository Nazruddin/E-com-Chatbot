import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Hey there! This is the Vite configuration file.
// Still tweaking this as we go—so it's a bit of a mess :)


export default defineConfig({
  plugins: [react()],// Using React plugin here, might add more later
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
