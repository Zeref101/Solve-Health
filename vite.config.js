import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(
      {
        registerType: 'autoUpdate',
        manifest: {
          "name": "DormDocCrusaders",
          "short_name": "DDC",
          "description": "VIT health care system",
          "start_url": "/",
          "display": "standalone",
          "background_color": "#ffffff",
          "theme_color": "#000000",
          "icons": [
            {
              "src": "src/assets/daily-health-app.png",
              "sizes": "192x192",
              "type": "image/png"
            }
          ]
        }
      }
    )
  ],
  server: {
    https: {
      key: fs.readFileSync('./certificates/key.pem'),
      cert: fs.readFileSync('./certificates/cert.pem'),
    },
  },

})
