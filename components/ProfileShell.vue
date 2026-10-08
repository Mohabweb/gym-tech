<script setup lang="ts">
defineProps<{ title: string }>()
const { t } = useI18n()
const lp = useLocalePath()
const tabs = [['/profile', 'home'], ['/profile/inbody/', 'inbody'], ['/profile/membership', 'membership'], ['/profile/membership/not-subscribe', 'renew'], ['/profile/membership/your-fitness/', 'fitness'], ['/profile/membership/payment-history/', 'payments']] as const
</script>
<template>
  <section class="sec sec-dark sec-first prof">
    <div class="container in">
      <nav class="side glass" :aria-label="t('profile.title')"><NuxtLink v-for="[to, k] in tabs" :key="k" :to="lp(to)" class="tab">{{ t('profile.' + k) }}</NuxtLink></nav>
      <div class="main"><h1 class="h-lg">{{ title }}</h1><slot />
        <p class="glass note">{{ t('profile.notice') }}</p></div>
    </div>
  </section>
</template>
<style scoped>
.prof{min-height:70vh;padding-block:48px 120px}
.in{display:grid;grid-template-columns:260px 1fr;gap:32px;align-items:start}
.side{display:grid;padding:12px;gap:4px;border-radius:var(--r-md)}
.tab{padding:12px 16px;border-radius:var(--r-sm);font-weight:500;transition:background .3s}
.tab:hover,.tab.router-link-exact-active{background:rgba(248,127,35,.16)}
.main{display:grid;gap:28px}.note{padding:24px;border-radius:var(--r-md)}
@media(max-width:900px){.in{grid-template-columns:1fr}.side{display:flex;overflow-x:auto}.tab{white-space:nowrap}}
</style>
