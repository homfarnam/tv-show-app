// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  runtimeConfig: {
    apiKey: process.env.TVMAZE_API_KEY,
  },
  css: ['@/assets/styles.scss'],
  app: {
    head: {
      title: 'TV Shows',
      meta: [
        {
          name: 'description',
          content: 'TV Shows',
        },
      ],
    },
  },
})
