// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@compromis/blobby/scss/blobby.scss',
    '~/assets/scss/global.scss'
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
        { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
        { rel: 'prefetch', href: '/video/rain.mp4', as: 'document' }
      ],
    },
  },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'val', name: 'Valencià', file: 'val.json' },
      { code: 'cas', name: 'Castellano', file: 'cas.json' }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'val',
    vueI18n: {
      legacy: false,
    }
  },

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
