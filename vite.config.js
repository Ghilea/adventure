import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '@comp': fileURLToPath(new URL( './src/components', import.meta.url)),
    '@editor': fileURLToPath(new URL( './src/components/editor', import.meta.url)),
    '@helper': fileURLToPath(new URL( './src/helper', import.meta.url)),
    '@hooks': fileURLToPath(new URL( './src/hooks', import.meta.url)),
    '@shared': fileURLToPath(new URL( './src/shared', import.meta.url)),
    '@test': fileURLToPath(new URL( './src/test', import.meta.url))
    }
  },
  assetsInclude: [
    "**/*.glb",
    "**/*.gltf"
  ]
})