<script setup lang="ts">
import { branches as all, type City, type Gender } from '~/data/branches'
import { getBranches } from '~/lib/api/branches'
import { links } from '~/data/links'
const { t, locale } = useI18n()
const gender = ref<Gender>('men')
const city = ref<City>('riyadh')
const { data, status, refresh } = await useAsyncData('branches', getBranches)
const list = computed(() => data.value ?? [])
const shown = computed(() => list.value.filter(b => b.gender === gender.value && b.city === city.value))
const n = (f: (b: any) => boolean) => all.filter(f).length // counts shown on filters come from the supplied data set
const counts = computed(() => ({ riyadh: shown.value.filter(b => b.city === 'riyadh').length, jeddah: shown.value.filter(b => b.city === 'jeddah').length }))
const label = (b: { ar: string; en: string }) => (locale.value === 'ar' ? b.ar : b.en)
const live = computed(() => (shown.value.length === 1 ? t('map.one') : t('map.count', { n: shown.value.length })))
</script>
<template>
  <div class="bx">
    <div class="side">
      <div class="filters">
        <div class="grp" role="group" :aria-label="t('mem.gender')">
          <button class="chip" :aria-pressed="gender === 'ladies'" @click="gender = 'ladies'">{{ t('map.ladies') }} <small class="num">{{ n(b => b.gender === 'ladies') }}</small></button>
          <button class="chip" :aria-pressed="gender === 'men'" @click="gender = 'men'">{{ t('map.men') }} <small class="num">{{ n(b => b.gender === 'men') }}</small></button>
        </div>
        <div class="grp" role="group" :aria-label="t('mem.branch')">
          <button class="chip" :aria-pressed="city === 'riyadh'" @click="city = 'riyadh'">{{ t('map.riyadh') }} <small class="num">{{ n(b => b.city === 'riyadh') }}</small></button>
          <button class="chip" :aria-pressed="city === 'jeddah'" @click="city = 'jeddah'">{{ t('map.jeddah') }} <small class="num">{{ n(b => b.city === 'jeddah') }}</small></button>
        </div>
      </div>
      <p class="sr" aria-live="polite">{{ live }}</p>
      <div v-if="status === 'pending'" class="cards" aria-busy="true"><p class="muted">{{ t('map.loading') }}</p><div v-for="i in 3" :key="i" class="sk" /></div>
      <div v-else-if="status === 'error'" class="empty"><p>{{ t('map.error') }}</p><button class="btn btn-ghost" @click="refresh()">{{ t('map.retry') }}</button></div>
      <div v-else-if="!shown.length" class="empty glass">
        <h3 class="h-md">{{ t('map.emptyT') }}</h3><p>{{ t('map.emptyD') }}</p>
        <a :href="links.whatsapp" class="btn btn-primary" target="_blank" rel="noopener"><Icon name="whatsapp" :size="20" />{{ t('cta.whatsapp') }}</a>
      </div>
      <ul v-else class="cards">
        <li v-for="b in shown" :key="b.id" class="bc glass">
          <div><h3>{{ label(b) }}</h3><p class="muted">{{ t('map.' + city) }} · {{ t('map.' + (b.gender === 'ladies' ? 'ladies' : 'men')) }}</p></div>
          <a :href="b.map" target="_blank" rel="noopener" class="btn btn-ghost dir" :aria-label="`${t('map.directions')}: ${label(b)}`"><Icon name="pin" :size="18" />{{ t('map.directions') }}</a>
        </li>
      </ul>
    </div>
    <div class="mapcol"><BranchGlobe :counts="counts" :active="city" /><p class="note muted">{{ t('map.mapNote') }}</p></div>
  </div>
</template>
<style scoped>
.bx{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:start}
.side{display:grid;gap:24px}
.filters{display:flex;flex-wrap:wrap;gap:16px}.grp{display:flex;gap:8px}
.cards{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.bc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px 22px;border-radius:var(--r-md);transition:transform .4s var(--ease),border-color .3s}
.bc:hover{transform:translateY(-4px);border-color:rgba(248,127,35,.6)}
.bc h3{font-size:1.125rem}.bc p{font-size:.875rem}
.dir{min-height:44px;padding:0 18px;font-size:.9rem}
.empty{display:grid;gap:14px;justify-items:start;padding:28px}
.sk{height:76px;border-radius:var(--r-md);background:linear-gradient(90deg,rgba(240,223,203,.05),rgba(240,223,203,.12),rgba(240,223,203,.05));background-size:200%;animation:sh 1.4s linear infinite}
@keyframes sh{to{background-position:-200% 0}}
.mapcol{position:sticky;top:110px}.note{text-align:center;font-size:.75rem;margin-top:8px}
@media(max-width:900px){.bx{grid-template-columns:1fr}.mapcol{position:static;order:-1}.bc{flex-direction:column;align-items:stretch}}
</style>
