// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@compromis/blobby/scss/blobby.scss',
    '~/assets/scss/global.scss'
  ],

  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                  @import "@compromis/blobby/scss/variables";
                  @import "bootstrap/scss/functions";
                  @import "bootstrap/scss/variables";
                  @import "bootstrap/scss/maps";
                  @import "bootstrap/scss/mixins";
                `,
            },
        },
    },
},
})
