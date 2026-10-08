<script setup lang="ts">
import { durations, plansFor } from '~/lib/membership'
import type { Duration } from '~/data/plans'
const { t } = useI18n()
const lp = useLocalePath()
const d = useState<Duration>('cmpD', () => 12)
const cols = computed(() => plansFor(d.value))
</script>
<template>
  <section class="sec sec-dark" aria-labelledby="cmp-h">
    <div class="container">
      <Words id="cmp-h" class="h-lg head" :text="t('cmp.title')" />
      <div class="tabs" role="radiogroup" :aria-label="t('mem.duration')">
        <button v-for="x in durations" :key="x" class="chip" role="radio" :aria-checked="d === x" @click="d = x">{{ t('mem.d' + x) }}</button>
      </div>
      <div class="cols" :class="'n' + cols.length" aria-live="polite">
        <article v-for="p in cols" :key="p.duration + p.access" class="col glass">
          <h3 class="h-md">{{ t('mem.' + p.access) }}</h3>
          <p v-if="p.access !== 'one'" class="tag">{{ t('cmp.all') }}</p><p v-else class="tag">{{ t('cmp.pick') }}</p>
          <p class="pr"><span class="num ltr big">{{ fmt(p.price) }}</span> <span>{{ t('sar') }}</span></p>
          <PlanFeatures :keys="p.features" />
          <NuxtLink :to="{ path: lp('/profile/membership/not-subscribe'), query: { duration: p.duration, access: p.access } }" class="btn btn-primary">{{ t('nav.subscribe') }}</NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.head{max-width:20ch;margin-bottom:32px}
.tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px}
.cols{display:grid;gap:16px;grid-template-columns:repeat(3,1fr)}.cols.n1{grid-template-columns:minmax(0,420px)}
.col{display:grid;gap:18px;align-content:start;padding:32px;transition:transform .4s var(--ease),border-color .3s}
.col:hover{transform:translateY(-4px);border-color:rgba(248,127,35,.6)}
.tag{font-size:.8125rem;color:var(--ash)}
.pr{display:flex;align-items:baseline;gap:8px}.big{font-family:var(--f-head);font-weight:800;font-size:clamp(2.25rem,4vw,3.25rem);line-height:1}
@media(max-width:900px){.cols,.cols.n1{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:12px;padding-bottom:12px}.col{flex:0 0 85%;scroll-snap-align:center}}
</style>
