import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Vite optons tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  clearScreen: false,

  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },

  // to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],

  build: {
    // Tauri supports es2021
    target: ["es2021", "chrome100", "safari13"],
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    // larger files
    chunkSizeWarningLimit: 2000,
  },
  
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