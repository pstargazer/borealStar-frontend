import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // host: "0.0.0.0"
    host:"bs_frontend"
  },
  plugins: [
    vue({
      // template: {
        compilerOptions: {
          isCustomElement: (tag) => ['theme-selector'].includes(tag),
        }
      // }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
