export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/main.css'],
  devtools: { enabled: false },
  i18n: {
    baseUrl: 'https://gymtech.sa',
    strategy: 'prefix',
    defaultLocale: 'ar',
    langDir: 'locales',
    locales: [
      { code: 'ar', language: 'ar-SA', dir: 'rtl', file: 'ar.json', name: 'عربي' },
      { code: 'en', language: 'en-US', dir: 'ltr', file: 'en.json', name: 'EN' },
    ],
    detectBrowserLanguage: { useCookie: true, cookieKey: 'gt_lang', redirectOn: 'root', fallbackLocale: 'ar' },
    vueI18n: './i18n.config.ts',
    bundle: { optimizeTranslationDirective: false },
  },
  app: {
    head: {
      meta: [{ name: 'theme-color', content: '#150B08' }],
      link: [{ rel: 'icon', href: '/img/logo.png' }],
      // skip preloader flash on repeat visits in the same session
      script: [{ innerHTML: "try{sessionStorage.getItem('gt_pre')&&document.documentElement.classList.add('seen')}catch(e){}" }],
    },
  },
})
