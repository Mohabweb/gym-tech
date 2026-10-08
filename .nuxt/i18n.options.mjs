
// @ts-nocheck
import locale_ar_46json_f560544e from "#nuxt-i18n/f560544e";
import locale_en_46json_6d5bf2c8 from "#nuxt-i18n/6d5bf2c8";

export const localeCodes =  [
  "ar",
  "en"
]

export const localeLoaders = {
  ar: [
    {
      key: "locale_ar_46json_f560544e",
      load: () => Promise.resolve(locale_ar_46json_f560544e),
      cache: true
    }
  ],
  en: [
    {
      key: "locale_en_46json_6d5bf2c8",
      load: () => Promise.resolve(locale_en_46json_6d5bf2c8),
      cache: true
    }
  ]
}

export const vueI18nConfigs = [
  () => import("#nuxt-i18n/edd424f2" /* webpackChunkName: "config_i18n_46config_46ts_edd424f2" */)
]

export const nuxtI18nOptions = {
  restructureDir: "i18n",
  experimental: {
    localeDetector: "",
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
    typedPages: true,
    typedOptionsAndMessages: false,
    generatedLocaleFilePathFormat: "absolute",
    alternateLinkCanonicalQueries: false,
    hmr: true
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
    optimizeTranslationDirective: false
  },
  compilation: {
    strictMessage: true,
    escapeHtml: false
  },
  customBlocks: {
    defaultSFCLang: "json",
    globalSFCScope: false
  },
  locales: [
    {
      code: "ar",
      language: "ar-SA",
      dir: "rtl",
      name: "عربي",
      files: [
        {
          path: "C:/Users/Mega Store/Downloads/Gym tech/Gym tech/i18n/locales/ar.json",
          cache: undefined
        }
      ]
    },
    {
      code: "en",
      language: "en-US",
      dir: "ltr",
      name: "EN",
      files: [
        {
          path: "C:/Users/Mega Store/Downloads/Gym tech/Gym tech/i18n/locales/en.json",
          cache: undefined
        }
      ]
    }
  ],
  defaultLocale: "ar",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix",
  lazy: false,
  langDir: "locales",
  rootRedirect: undefined,
  detectBrowserLanguage: {
    alwaysRedirect: false,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: "gt_lang",
    cookieSecure: false,
    fallbackLocale: "ar",
    redirectOn: "root",
    useCookie: true
  },
  differentDomains: false,
  baseUrl: "https://gymtech.sa",
  customRoutes: "page",
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: "composition",
  debug: false,
  parallelPlugin: false,
  multiDomainLocales: false,
  i18nModules: []
}

export const normalizedLocales = [
  {
    code: "ar",
    language: "ar-SA",
    dir: "rtl",
    name: "عربي",
    files: [
      {
        path: "C:/Users/Mega Store/Downloads/Gym tech/Gym tech/i18n/locales/ar.json",
        cache: undefined
      }
    ]
  },
  {
    code: "en",
    language: "en-US",
    dir: "ltr",
    name: "EN",
    files: [
      {
        path: "C:/Users/Mega Store/Downloads/Gym tech/Gym tech/i18n/locales/en.json",
        cache: undefined
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
/** client **/
if(import.meta.hot) {

function deepEqual(a, b, ignoreKeys = []) {
  // Same reference?
  if (a === b) return true

  // Check if either is null or not an object
  if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') {
    return false
  }

  // Get top-level keys, excluding ignoreKeys
  const keysA = Object.keys(a).filter(k => !ignoreKeys.includes(k))
  const keysB = Object.keys(b).filter(k => !ignoreKeys.includes(k))

  // Must have the same number of keys (after ignoring)
  if (keysA.length !== keysB.length) {
    return false
  }

  // Check each property
  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false
    }

    const valA = a[key]
    const valB = b[key]

    // Compare functions stringified
    if (typeof valA === 'function' && typeof valB === 'function') {
      if (valA.toString() !== valB.toString()) {
        return false
      }
    }
    // If nested, do a normal recursive check (no ignoring at deeper levels)
    else if (typeof valA === 'object' && typeof valB === 'object') {
      if (!deepEqual(valA, valB)) {
        return false
      }
    }
    // Compare primitive values
    else if (valA !== valB) {
      return false
    }
  }

  return true
}



async function loadCfg(config) {
  const nuxt = useNuxtApp()
  const { default: resolver } = await config()
  return typeof resolver === 'function' ? await nuxt.runWithContext(() => resolver()) : resolver
}


  import.meta.hot.accept("../i18n/locales/ar.json", async mod => {
    localeLoaders["ar"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("ar")
  })

  import.meta.hot.accept("../i18n/locales/en.json", async mod => {
    localeLoaders["en"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("en")
  })

  import.meta.hot.accept("../i18n/i18n.config.ts", async mod => {
    const [oldData, newData] = await Promise.all([loadCfg(vueI18nConfigs[0]), loadCfg(() => Promise.resolve(mod))]);
    vueI18nConfigs[0] = () => Promise.resolve(mod)
    if(deepEqual(oldData, newData, ['messages', 'numberFormats', 'datetimeFormats'])) {
      return await useNuxtApp()._nuxtI18nDev.resetI18nProperties()
    }
    import.meta.hot.send('i18n:options-complex-invalidation', {})
  })

}
/** client-end **/