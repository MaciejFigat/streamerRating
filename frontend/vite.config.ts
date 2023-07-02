import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const isProduction = process.env.VITE_NODE_ENV === 'production'
const proxyTarget = isProduction
  ? process.env.VITE_PRODUCTION_ENDPOINT
  : 'http://localhost:5000'
const ioTarget = isProduction
  ? process.env.VITE_PRODUCTION_IOENDPOINT
  : 'ws://localhost:5174'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/streamers': 'http://localhost:5000',
      '/streamers': proxyTarget,

      '/socket.io': {
        // target: 'ws://localhost:5174',
        target: ioTarget,
        ws: true
      }
    }
  }
})
