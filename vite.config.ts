import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import FullReload from 'vite-plugin-full-reload'
// import gzipPlugin from 'rollup-plugin-gzip'


const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    RubyPlugin(),
    vue(),
    FullReload([
      'app/views/**/*',
      'config/routes.rb',
    ]),
    // gzipPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app/frontend')
    }
  }
})
