import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    // En modo SSR, genera el bundle del servidor
    ...(mode === 'ssr' && {
      ssr: 'src/entry-server.tsx',
      outDir: 'dist/server',
    }),
    // En modo cliente normal, genera en dist/client
    ...(!( mode === 'ssr') && {
      outDir: 'dist/client',
    }),
  },
}))
