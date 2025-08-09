// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Youtube_Clone/',  // This must match your repository name exactly
  build: {
    outDir: 'dist'
  }
})
