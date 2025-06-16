import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'
  
  return {
    plugins: [
      react(),
      ...(isLib ? [
        dts({
          insertTypesEntry: true,
          exclude: ['**/*.stories.tsx', '**/*.test.tsx', 'src/demo/**/*', 'src/main.tsx', 'src/App.tsx'],
          tsconfigPath: './tsconfig.lib.json'
        }),
      ] : []),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: isLib ? {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'NearbyAssistantPlugin',
        formats: ['es', 'umd'],
        fileName: (format) => {
          if (format === 'es') return 'index.es.js'
          if (format === 'umd') return 'index.umd.js'
          return `index.${format}.js`
        },
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          // Ensure CSS is extracted to a separate file
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'style.css'
            return assetInfo.name || 'assets/[name].[ext]'
          },
        },
      },
      cssCodeSplit: false,
      sourcemap: true,
    } : {
      // Regular build configuration for demo/development
      outDir: 'dev-dist',
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      },
    },
  }
})