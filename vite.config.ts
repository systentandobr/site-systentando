import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { createHash } from 'crypto'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Ler package.json para obter versão
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))
const version = packageJson.version || '1.0.0'
const buildTime = new Date().toISOString()
const buildHash = createHash('sha256')
  .update(`${version}-${buildTime}-${Date.now()}`)
  .digest('hex')
  .substring(0, 16)

// Plugin para gerar version.json após o build
const versionPlugin = () => {
  return {
    name: 'generate-version',
    writeBundle() {
      const versionInfo = {
        version,
        buildTime,
        buildHash,
      }

      const distPath = resolve(__dirname, 'dist')
      const versionPath = join(distPath, 'version.json')

      writeFileSync(versionPath, JSON.stringify(versionInfo, null, 2), 'utf-8')
      console.log('✅ Arquivo version.json gerado:', versionInfo)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), versionPlugin()],
  define: {
    // Injetar variáveis de versão no código durante o build
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(buildTime),
    'import.meta.env.VITE_BUILD_HASH': JSON.stringify(buildHash),
  },
  server: {
    port: parseInt(process.env.PORT || '3000'),
    host: process.env.HOST === 'false' ? false : (process.env.HOST || '0.0.0.0'), // 0.0.0.0 permite acesso de qualquer interface (útil para WSL)
    open: true,
    strictPort: false, // Permite usar outra porta se a especificada estiver ocupada
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Desabilitar sourcemap em produção para reduzir tamanho
    minify: 'esbuild', // Minificação otimizada
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor';
            if (id.includes('@tanstack/react-query') || id.includes('axios')) return 'libs-core';
            if (id.includes('lucide-react')) return 'libs-ui';
            return 'vendor';
          }

          // Agrupamento por segmento de negócio
          if (id.includes('src/pages/Admin/Gym')) return 'segment-gym';
          if (id.includes('src/pages/Admin/Solar')) return 'segment-solar';
          if (id.includes('src/pages/Admin/Franchisees')) return 'segment-franchisee';
          if (id.includes('src/pages/Admin/Orders') || id.includes('src/pages/Admin/Products') || id.includes('src/pages/Admin/PDV')) {
            return 'segment-retail';
          }
          if (id.includes('src/pages/Admin/Leads') || id.includes('src/pages/Admin/Customers')) {
            return 'segment-crm';
          }
        },
      },
    },
    // Otimizações de build
    chunkSizeWarningLimit: 1000,
  },
  preview: {
    port: parseInt(process.env.PORT || '3000'),
    host: true,
  },
})
