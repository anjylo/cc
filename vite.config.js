import { defineConfig, loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: '/cc/',
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      host: env.VITE_APP_HOST,
      port: env.VITE_APP_PORT,
      strictPort: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        plugins: [
          {
            name: "load-js-files-as-jsx",
            setup(build) {
              build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
                return {
                  loader: "jsx",
                  contents: await fs.readFile(args.path, "utf8"),
                };
              });
            },
          },
        ],
      },
    },
  }
})