<script setup lang="ts">
// عربي | EN with sliding indicator. Switches client-side, keeps scroll + useState selections.
const { locale, setLocale, t } = useI18n()
const { $lenis } = useNuxtApp() as any
async function go(l: 'ar' | 'en') {
  if (l === locale.value) return
  const y = window.scrollY
  await setLocale(l)
  // page swap can reset scroll while the new content mounts: re-apply until it sticks
  for (let i = 0; i < 10; i++) {
    await new Promise(r => setTimeout(r, 60))
    if (Math.abs(window.scrollY - y) > 2) { $lenis?.scrollTo(y, { immediate: true, force: true }); window.scrollTo(0, y) }
  }
}
</script>
<template>
  <div class="lang" role="group" :aria-label="t('foot.lang')" :data-active="locale">
    <i class="ind" aria-hidden="true" />
    <button type="button" lang="ar" :aria-pressed="locale === 'ar'" @click="go('ar')">عربي</button>
    <button type="button" lang="en" :aria-pressed="locale === 'en'" @click="go('en')">EN</button>
  </div>
</template>
<style scoped>
.lang{position:relative;display:inline-grid;grid-template-columns:1fr 1fr;direction:ltr;border:1px solid rgba(240,223,203,.3);border-radius:999px;padding:3px;font-size:.8125rem;font-weight:500}
.lang button{position:relative;z-index:1;min-width:44px;min-height:28px;padding:0 10px;border-radius:999px;color:var(--sand);transition:color .3s}
.lang button[aria-pressed=true]{color:var(--espresso)}
.lang button[lang=ar]{font-family:'Readex Pro',sans-serif}
.lang button[lang=en]{font-family:'Plus Jakarta Sans',sans-serif}
.ind{position:absolute;inset-block:3px;inset-inline-start:3px;width:calc(50% - 3px);border-radius:999px;background:var(--sand);transition:transform .45s var(--ease)}
.lang[data-active=en] .ind{transform:translateX(100%)}
</style>
