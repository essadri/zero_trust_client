import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker
    proxy: {
      '/api': {
        target: 'http://10.114.0.3:5000', // ✅ Use APP SERVER PRIVATE IP
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
