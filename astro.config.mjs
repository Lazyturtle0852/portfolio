import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://lazyta-toru.net',
  vite: {
    plugins: [tailwindcss()],
  },
})
