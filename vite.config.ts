import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for custom domain deployment
  // Use '/' for custom domains (like judahhealthcare.net)
  // Use '/judah-hc-Website/' if deploying to GitHub Pages subpath
  base: '/',
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

