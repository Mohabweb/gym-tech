import type { RouterConfig } from '@nuxt/schema'
const strip = (p: string) => p.replace(/^\/(ar|en)(?=\/|$)/, '') || '/'
// Keep scroll position when only the language prefix changes.
export default <RouterConfig>{
  scrollBehaviorType: 'auto',
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 90 }
    if (from && strip(to.path) === strip(from.path)) return false
    return { top: 0 }
  },
}
