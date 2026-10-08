<script setup lang="ts">
// Full-width bar -> compact floating glass pill after 80px. Desktop only (mobile uses top bar + bottom nav).
const { t } = useI18n()
const lp = useLocalePath()
const scrolled = ref(false)
onMounted(() => {
  const f = () => (scrolled.value = window.scrollY > 80)
  f(); window.addEventListener('scroll', f, { passive: true })
  onBeforeUnmount(() => window.removeEventListener('scroll', f))
})
const items = [['/', 'home'], ['/clubs', 'branches'], ['/profile/membership/not-subscribe', 'membership'], ['/profile', 'profile']] as const
</script>
<template>
  <header class="nav" :class="{ pill: scrolled }">
    <div class="nav-in">
      <NuxtLink :to="lp('/')" class="logo" :aria-label="t('brand')" data-nav-logo><img src="/img/logo.png" alt="" width="44" height="44"></NuxtLink>
      <nav :aria-label="t('nav.menu')" class="links">
        <NuxtLink v-for="[to, k] in items" :key="k" :to="lp(to)" class="lk">{{ t('nav.' + k) }}</NuxtLink>
      </nav>
      <div class="acts">
        <NuxtLink :to="lp('/login')" class="lk">{{ t('nav.login') }}</NuxtLink>
        <NuxtLink :to="lp('/profile/membership/not-subscribe')" class="btn btn-primary sm">{{ t('nav.subscribe') }}</NuxtLink>
      </div>
    </div>
  </header>
</template>
<style scoped>
.nav{position:sticky;top:0;z-index:50;display:none;padding:12px 24px;transition:padding .5s var(--ease)}
@media(min-width:901px){.nav{display:block}}
.nav-in{margin-inline:auto;max-width:1240px;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:6px 8px;border-radius:999px;border:1px solid transparent;transition:max-width .6s var(--ease),background .4s,border-color .4s,box-shadow .4s,backdrop-filter .4s}
.pill .nav-in{max-width:760px;background:rgba(33,19,15,.62);border-color:rgba(240,223,203,.16);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);box-shadow:var(--sh-float)}
.logo img{width:44px;height:44px}
.links{display:flex;gap:6px}
.lk{padding:8px 16px;border-radius:999px;font-weight:500;font-size:.9375rem;transition:background .3s}
.lk:hover,.lk.router-link-exact-active{background:rgba(240,223,203,.1)}
.acts{display:flex;align-items:center;gap:8px}
.sm{min-height:42px;padding:0 20px;font-size:.9375rem}
.pill .acts .lk{display:none}
</style>
