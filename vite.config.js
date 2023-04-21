import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://yazeed-idris.com/",
  plugins: [react()],
  publicDir: "public",
})
