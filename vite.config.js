import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Sitio de usuario: https://xmarin-ucr.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
