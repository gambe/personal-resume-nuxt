// Nuxt
import { defineNuxtConfig } from 'nuxt/config';

// Vite plugins
import eslintPlugin from 'vite-plugin-eslint';

// Package
import { version as projectVersion } from './package.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
    {
        app: {
            head: {
                base: {
                    href: '/',
                    target: '_self',
                },
                charset: 'utf-16',
                htmlAttrs: {
                    lang: 'it',
                    translate: 'no',
                },
                // link: [
                //     {
                //         href: '180x180',
                //         rel: 'apple-touch-icon',
                //         sizes: '/apple-touch-icon.png',
                //     },
                //     {
                //         href: `/favicon.ico?ver=${ projectVersion }`,
                //         rel: 'icon',
                //         type: 'image/x-ico',
                //     },
                //     {
                //         href: '/favicon-32x32.png',
                //         rel: 'icon',
                //         sizes: '32x32',
                //         type: 'image/png',
                //     },
                //     {
                //         href: '/favicon-16x16.png',
                //         rel: 'icon',
                //         sizes: '16x16',
                //         type: 'image/png',
                //     },
                //     {
                //         href: '/site.webmanifest',
                //         rel: 'manifest',
                //     },
                //     {
                //         color: '#005F65',
                //         href: '/safari-pinned-tab.svg',
                //         rel: 'mask-icon',
                //     },
                // ],
                meta: [
                    {
                        content: process.env.NUXT_DESCRIPTION || '',
                        name: 'description',
                    },
                    {
                        content: 'yes',
                        name: 'mobile-web-app-capable',
                    },
                    {
                        content: '#005F65',
                        key: 'theme-color-light',
                        media: '(prefers-color-scheme: light)',
                        name: 'theme-color',
                    },
                    {
                        content: '#E6FAFC',
                        key: 'theme-color-dark',
                        media: '(prefers-color-scheme: dark)',
                        name: 'theme-color',
                    },
                    {
                        content: '#005F65',
                        name: 'msapplication-TileColor',
                    },
                    {
                        content: 'default',
                        key: 'status-bar-light',
                        media: '(prefers-color-scheme: light)',
                        name: 'apple-mobile-web-app-status-bar-style',
                    },
                    {
                        content: 'black-translucent',
                        key: 'status-bar-dark',
                        media: '(prefers-color-scheme: dark)',
                        name: 'apple-mobile-web-app-status-bar-style',
                    },
                ],
                title: process.env.NUXT_TITLE,
                titleTemplate: `%s - ${ process.env.NUXT_TITLE }`,
                viewport: 'width=device-width,initial-scale=1',
            },
            layoutTransition: {
                mode: 'out-in',
                name: 'fade',
            },
            pageTransition: {
                mode: 'out-in',
                name: 'fade',
            },
        },
        compatibilityDate: '2024-11-01',
        devtools: { enabled: true },
        eslint: { lintOnStart: false },

        experimental: {
            crossOriginPrefetch: true,

            defaults: {
                nuxtLink: {
                    prefetchOn: {
                        interaction: true,
                        visibility: false,
                    },
                },
            },

            typedPages: true,
            watcher: 'parcel',
            writeEarlyHints: true,
        },
        future: { compatibilityVersion: 4 },
        modules: [
            'nuxt-typed-router',
            '@nuxt/eslint',
            '@nuxt/devtools',
            '@pinia/nuxt',
            '@nuxtjs/tailwindcss',
        // FIXME: Waiting for https://github.com/nuxt-modules/stylelint/issues/89
        // [ '@nuxtjs/stylelint-module', { chokidar: true }],
        // '@nuxt/test-utils/module',
        // '@vite-pwa/nuxt',
        // '@vueuse/nuxt',
        // 'nuxt-svgo',
        ],
        // Tailwind defaults options
        tailwindcss: {
            config: {},
            cssPath: [ '~/assets/css/tailwind.css', { injectPosition: 'first' }],
            exposeConfig: false,
            viewer: true,
        },
        typescript: {
            shim: false,
            strict: true,
        },
        vite: {
            plugins: [ eslintPlugin() ],
            vue: { template: { compilerOptions: { whitespace: 'condense' } } },
        },
    }
);
