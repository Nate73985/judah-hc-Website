import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages
  // In production builds, this will be '/judah-hc-Website/'
  // In dev mode, Vite will use '/' automatically even if base is set
  base: '/judah-hc-Website/',
  build: {
    // Ensure assets are correctly placed in the build output
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true
  }
})

