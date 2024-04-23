// noinspection JSUnusedGlobalSymbols

import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel([
            'resources/css/gildsmith.css',
            'node_modules/@gildsmith/cart-client/src/app.js',
            'node_modules/@gildsmith/profile-client/src/app.js',
            'node_modules/@gildsmith/dashboard-client/src/app.js',
            'node_modules/@gildsmith/storefront-client/src/app.js',
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
        },
    },
    esbuild: {
        legalComments: 'none',
    },
})
