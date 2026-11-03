import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
const root = path.dirname(fileURLToPath(import.meta.url))
export default defineConfig({ build: { rollupOptions: { input: {
  home: path.resolve(root,'index.html'),
  lisboa: path.resolve(root,'proyectos/estaba-en-lisboa/index.html'),
  sabores: path.resolve(root,'proyectos/mil-sabores/index.html')
} } } })