// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint'
  ],
  // TypeScript strict mode via Nuxt
  typescript: {
    strict: true,
    typeCheck: true
  }
})
