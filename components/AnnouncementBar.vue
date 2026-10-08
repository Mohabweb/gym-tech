<script setup lang="ts">
const { t } = useI18n()
const lp = useLocalePath()
</script>
<template>
  <div class="bar">
    <NuxtLink :to="lp('/') + '#app'" class="bar-link"><i aria-hidden="true" />{{ t('bar.app') }}<Icon name="arrow" :size="16" /></NuxtLink>
    <div class="bar-end"><NuxtLink :to="lp('/login')" class="bar-login">{{ t('nav.login') }}</NuxtLink><LangToggle /></div>
  </div>
</template>
<style scoped>
.bar{position:relative;z-index:60;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:var(--bar-h);padding:4px 24px;background:var(--espresso-deep);border-bottom:1px solid rgba(240,223,203,.1);font-size:.8125rem}
.bar-link{display:inline-flex;align-items:center;gap:10px}
.bar-link i{width:7px;height:7px;border-radius:50%;background:var(--orange);box-shadow:0 0 10px var(--orange);animation:pulse 2s infinite}
.bar-end{display:flex;gap:16px;align-items:center}
@keyframes pulse{50%{opacity:.35}}
@media(max-width:900px){.bar-login{display:none}.bar{padding-inline:16px}}
</style>
