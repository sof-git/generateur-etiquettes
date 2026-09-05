// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/generateur-etiquettes'
  },
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
              'navBackground':'#2C3E50',
              'on-background': '#332B27',
              'on-surface': '#332B27'
            }
          }
        }
      }
    }
  },
  css:['vue-advanced-cropper/dist/style.css',],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module']
})