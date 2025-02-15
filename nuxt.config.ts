// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-lucide-icons',
    '@nuxt/image'
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  routeRules: {
    '/': { prerender: true }
  },

  nitro: {
    
  },

  compatibilityDate: '2024-09-16'
})
