import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/auto': {
        target: 'https://api.auto.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/auto/, ''),
        secure: true,
      }
    }
  }
})
