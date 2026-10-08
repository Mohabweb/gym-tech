<script setup lang="ts">
const { t } = useI18n()
const lp = useLocalePath()
const items = [['/', 'home', 'home'], ['/clubs', 'branches', 'pin'], ['/profile/membership/not-subscribe', 'membership', 'card'], ['/profile', 'profile', 'user']] as const
</script>
<template>
  <div class="mtop"><NuxtLink :to="lp('/')" :aria-label="t('brand')"><img src="/img/logo.png" alt="" width="38" height="38"></NuxtLink><LangToggle /></div>
  <nav class="mbot" :aria-label="t('nav.menu')">
    <NuxtLink v-for="[to, k, ic] in items" :key="k" :to="lp(to)"><Icon :name="ic" :size="22" /><span>{{ t('nav.' + k) }}</span></NuxtLink>
  </nav>
</template>
<style scoped>
.mtop,.mbot{display:none}
@media(max-width:900px){
  .mtop{position:sticky;top:0;z-index:55;display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:rgba(21,11,8,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
  .mbot{position:fixed;inset-inline:0;bottom:0;z-index:55;display:grid;grid-template-columns:repeat(4,1fr);padding:8px 8px calc(8px + env(safe-area-inset-bottom));background:rgba(33,19,15,.92);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-top:1px solid rgba(240,223,203,.14)}
  .mbot a{display:grid;justify-items:center;gap:2px;padding:6px 0;font-size:.6875rem;opacity:.75;min-height:48px}
  .mbot a.router-link-exact-active{opacity:1;color:var(--orange)}
  main{padding-bottom:72px}
}
</style>
