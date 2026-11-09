import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  optimizeDeps: {
    // Keep your existing configuration for Babylon's physics engine
    exclude: ['@babylonjs/havok']
  }
});


