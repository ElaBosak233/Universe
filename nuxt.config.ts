import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        // pinia plugin - https://pinia.esm.dev
        "@pinia/nuxt"
    ],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
    meta: {
        meta: [],
        link: [
            { rel: "icon", href: "/img/favicon.svg", type: "image/x-icon" }
        ]
    },
    css: ["~/assets/css/tailwind.css","~/assets/css/transition.css"],
    serverMiddleware: [
        { path: "/api", handler: "~/server/api/app.ts" }
    ]
})
