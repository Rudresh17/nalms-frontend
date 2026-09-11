import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // project pages are served at https://<user>.github.io/nalms-frontend/
  base: process.env.GITHUB_PAGES ? '/nalms-frontend/' : '/',
  preview: {
    // allow any host, needed for temporary public tunnels (localtunnel/ngrok) during short-term demos
    allowedHosts: true,
  },
})
