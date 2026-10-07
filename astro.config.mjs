import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages のプレビュー用ビルドでは SITE / BASE_PATH を上書きする
export default defineConfig({
  site: process.env.SITE ?? 'https://lazyta-toru.net',
  base: process.env.BASE_PATH ?? '/',
  vite: {
    plugins: [tailwindcss()],
  },
})
