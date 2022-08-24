import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
    resolve: {
        alias: {
            '@': pathSrc
        }
    },
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[name]'
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://api.imooc-front.lgdsunday.club/',
                changeOrigin: true
            }
        }
    }
})
