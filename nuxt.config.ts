// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
    baseURL: '/generateur-etiquettes/'
  },
  css:['vue-advanced-cropper/dist/style.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module']
})