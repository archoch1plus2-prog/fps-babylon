import { defineConfig } from 'vite';

export default defineConfig({
  // Expose public files or ensure wasm assets are properly served if needed
  optimizeDeps: {
    // Prevent Vite from aggressively trying to pre-bundle the wasm binary as JS
    exclude: ['@babylonjs/havok']
  }
});

