<script setup lang="ts">
import { links } from '~/data/links'
import { branches } from '~/data/branches'
const { t, locale } = useI18n()
useSeoMeta({ title: () => `${t('links.title')} — GymTech` })
const items = computed(() => [
  ['instagram', links.instagram, 'instagram'], ['whatsapp', links.whatsapp, 'whatsapp'], ['phone', links.phoneTel, 'phone', links.phoneDisplay],
  ['ios', links.ios, 'apple'], ['android', links.android, 'play'], ['tiktok', links.tiktok, 'tiktok'], ['website', links.website, 'globe'], ['email', 'mailto:' + links.email, 'mail', links.email],
] as const)
</script>
<template>
  <section class="sec sec-deep sec-first grain lk">
    <div class="container narrow">
      <img src="/img/logo.png" alt="GymTech" width="96" height="96">
      <Words tag="h1" class="h-lg" :text="t('links.title')" wait />
      <p class="muted">{{ t('tagline') }}.</p>
      <a v-for="[k, href, ic, sub] in items" :key="k" :href="href" class="btn btn-ghost wide" target="_blank" rel="noopener"><Icon :name="ic" :size="22" />{{ t('links.' + k) }}<span v-if="sub" class="ltr sub">{{ sub }}</span></a>
      <h2 class="h-md bh">{{ t('nav.branches') }}</h2>
      <ul class="bl"><li v-for="b in branches" :key="b.id"><a :href="b.map" target="_blank" rel="noopener" class="glass"><span>{{ locale === 'ar' ? b.ar : b.en }}<small class="muted"> · {{ t('map.' + b.city) }} · {{ t('map.' + (b.gender === 'ladies' ? 'ladies' : 'men')) }}</small></span><Icon name="pin" :size="18" /></a></li></ul>
    </div>
  </section>
</template>
<style scoped>
.narrow{max-width:520px;display:grid;gap:14px;justify-items:center;text-align:center}
.wide{width:100%;justify-content:flex-start;min-height:56px}.sub{margin-inline-start:auto;opacity:.7;font-size:.875rem}
.bh{margin-top:28px}.bl{list-style:none;margin:0;padding:0;display:grid;gap:8px;width:100%;text-align:start}
.bl a{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 18px;border-radius:var(--r-md)}
</style>
