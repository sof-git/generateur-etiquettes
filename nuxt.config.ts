// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/generateur-etiquettes'
  },
   components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'warmTheme',

        themes: {
          warmTheme: {
            dark: false,
            colors: {
              primary: '#C96F4A',
              secondary: '#2c4e1f',
              background: '#FAF7F2',
              surface: '#FFFCF8',
              'orangeBorder':'#ff9900',
              'blackBorder':'#000000',
              'navBackground':'#2C3E50',
              'on-background': '#332B27',
              'on-surface': '#332B27'
            },
            variables: {
              'border-opacity': 1,
            },
          }
        }
      }
    }
  },
  css:['vue-advanced-cropper/dist/style.css',],
  compatibilityDate: '2025-07-15',
  debug: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ['vuetify-nuxt-module']
})