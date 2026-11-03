import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        es: path.resolve(root, 'index.html'),
        pt: path.resolve(root, 'pt/index.html'),
      },
    },
  },
})
