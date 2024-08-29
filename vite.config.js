// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/gildsmith.css',
            'node_modules/@gildsmith/cart-web/src/app.js',
            'node_modules/@gildsmith/profile-web/src/app.js',
            'node_modules/@gildsmith/dashboard-web/src/app.js',
            'node_modules/@gildsmith/storefront-web/src/app.js',
        ]),
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false, base: null,
                },
            },
        }),
    ],
    /**
     * Disabling strict mode is necessary for the development
     * environment. This allows Vite to serve files from node_modules.
     */
    server: {
        fs: {
            strict: false,
        },
    },
    resolve: {
        alias: {
            '@composer': __dirname + '/vendor',
            '@npm': __dirname + '/node_modules',
            '@': __dirname + '/resources/js',
        },
    },
    esbuild: {
        legalComments: 'none',
    },
    build: {
        chunkSizeWarningLimit: 2048,
        rollupOptions: {
            output: {
                manualChunks: null, // TODO
            },
        },
    },
})
