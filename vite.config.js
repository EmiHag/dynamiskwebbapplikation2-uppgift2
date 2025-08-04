import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dynamiskwebbapplikation2-uppgift2/',
  plugins: [react()],
})
