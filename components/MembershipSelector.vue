<script setup lang="ts">
import { branches } from '~/data/branches'
import { durations, accesses, accessAvailable, needsBranch, findPlan, normalize, isAmbiguous } from '~/lib/membership'
import type { Access, Duration } from '~/data/plans'
const { t, locale, tm, rt } = useI18n()
const lp = useLocalePath()
const m = useMembership()
const card = ref<HTMLElement>()
const { $gsap, $Flip, $reduce } = useNuxtApp() as any

const branchOpts = computed(() => branches.filter(b => b.gender === (m.value.gender === 'men' ? 'men' : 'ladies')))
const plan = computed(() => findPlan(m.value.access, m.value.duration))
const locked = computed(() => !needsBranch(m.value.access))
const ambiguous = computed(() => isAmbiguous(m.value.access, m.value.branch))
const lab = (b: { ar: string; en: string }) => (locale.value === 'ar' ? b.ar : b.en)
const marquee = computed(() => (tm('mem.marquee') as any[]).map(x => rt(x)))

function setGender(g: 'men' | 'ladies') { m.value.gender = g; if (!branchOpts.value.some(b => b.id === m.value.branch)) m.value.branch = '' }
function setAccess(a: Access) { m.value.access = a; if (!needsBranch(a)) m.value.branch = '' }
function setDuration(d: Duration) { m.value.duration = d; m.value.access = normalize(m.value.access, d); if (!needsBranch(m.value.access)) m.value.branch = '' }

// FLIP the card height + tween the price when the plan changes.
const price = reactive({ v: findPlan(m.value.access, m.value.duration)?.price ?? 0 })
let state: any
watch(plan, () => { if (!$reduce && card.value) state = $Flip.getState(card.value) }, { flush: 'pre' })
watch(plan, async p => {
  await nextTick()
  if ($reduce || !p) { price.v = p?.price ?? 0; return }
  if (state) $Flip.from(state, { duration: 0.6, ease: 'expo.out' })
  $gsap.to(price, { v: p.price, duration: 0.45, ease: 'power2.out' })
  $gsap.from(card.value!.querySelectorAll('.feat li'), { y: 12, opacity: 0, stagger: 0.05, duration: 0.5, ease: 'expo.out' })
})
const q = computed(() => ({ duration: m.value.duration, access: m.value.access, ...(m.value.branch ? { branch: m.value.branch } : {}), gender: m.value.gender }))
const dkey = (d: number) => t('mem.d' + d)
</script>
<template>
  <div>
    <div class="marq" aria-hidden="true"><div class="trk"><span v-for="(x, i) in [...marquee, ...marquee, ...marquee]" :key="i">{{ x }}<i /></span></div></div>
    <div ref="card" class="sel">
      <div class="ctl">
        <fieldset><legend>{{ t('mem.gender') }}</legend><div class="row">
          <button class="chip" role="radio" :aria-checked="m.gender === 'men'" @click="setGender('men')">{{ t('mem.male') }}</button>
          <button class="chip" role="radio" :aria-checked="m.gender === 'ladies'" @click="setGender('ladies')">{{ t('mem.female') }}</button></div></fieldset>
        <div class="field"><label for="mbr">{{ t('mem.branch') }}</label>
          <select id="mbr" v-model="m.branch" :disabled="locked" :aria-describedby="locked ? 'mlock' : undefined">
            <option value="">{{ locked ? t('mem.allBranches') : t('mem.chooseBranch') }}</option>
            <option v-for="b in branchOpts" :key="b.id" :value="b.id">{{ lab(b) }} — {{ t('map.' + b.city) }}</option>
          </select>
          <p v-if="locked" id="mlock" class="hint">{{ t('mem.branchLocked') }}</p>
          <p v-else-if="ambiguous" class="hint warn" role="status">{{ t('mem.chooseBranch') }}</p></div>
        <fieldset><legend>{{ t('mem.access') }}</legend><div class="row">
          <button v-for="a in accesses" :key="a" class="chip" role="radio" :aria-checked="m.access === a" :aria-disabled="!accessAvailable(a, m.duration)" :tabindex="accessAvailable(a, m.duration) ? 0 : -1" @click="accessAvailable(a, m.duration) && setAccess(a)">{{ t('mem.' + a) }}</button></div>
          <p v-if="m.duration === 1" class="hint">{{ t('mem.onlyOne') }}</p></fieldset>
        <fieldset><legend>{{ t('mem.duration') }}</legend><div class="row">
          <button v-for="d in durations" :key="d" class="chip" role="radio" :aria-checked="m.duration === d" @click="setDuration(d)">{{ dkey(d) }}</button></div></fieldset>
      </div>
      <div v-if="plan" class="out" aria-live="polite">
        <p class="eb">{{ t('mem.selected') }} · {{ t('mem.' + plan.access) }}</p>
        <p class="pr"><span class="num ltr big">{{ fmt(price.v) }}</span> <span class="cur">{{ t('sar') }}</span></p>
        <p class="muted">{{ t('mem.for', { d: dkey(plan.duration) }) }}</p>
        <PlanFeatures :keys="plan.features" />
        <NuxtLink :to="{ path: lp('/profile/membership/not-subscribe'), query: q }" class="btn btn-primary" :aria-disabled="ambiguous" @click="ambiguous && $event.preventDefault()">{{ ambiguous ? t('mem.chooseBranch') : t('nav.subscribe') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.marq{overflow:hidden;margin-bottom:32px;mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);direction:ltr}
.trk{display:flex;gap:0;width:max-content;animation:mq 50s linear infinite;font-family:var(--f-head);font-weight:700;font-size:clamp(1.25rem,2.4vw,2rem)}
.trk span{display:inline-flex;align-items:center;gap:28px;padding-inline-end:28px;white-space:nowrap;opacity:.9}
.trk i{width:8px;height:8px;border-radius:50%;background:var(--red)}
@keyframes mq{to{transform:translateX(-33.333%)}}
.sel{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;padding:clamp(24px,4vw,48px);border-radius:var(--r-xl);background:var(--sand-soft);box-shadow:var(--sh-float);border:1px solid rgba(33,19,15,.12)}
.ctl{display:grid;gap:26px;align-content:start}
fieldset{border:0;margin:0;padding:0;display:grid;gap:10px;min-width:0}
legend{font-size:.875rem;font-weight:500;padding:0;margin-bottom:10px}
.row{display:flex;flex-wrap:wrap;gap:8px}
.hint{font-size:.8125rem;color:#5b4a42}.warn{color:var(--red);font-weight:500}
.out{display:grid;gap:14px;align-content:start;padding:28px;border-radius:var(--r-lg);background:var(--espresso);color:var(--sand)}
.eb{font-size:.8125rem;color:var(--ash)}
.pr{display:flex;align-items:baseline;gap:10px}.big{font-family:var(--f-head);font-weight:800;font-size:clamp(2.75rem,5vw,4rem);line-height:1}
.cur{font-size:1.125rem;font-weight:500}.out .muted{color:var(--ash)}
@media(max-width:900px){.sel{grid-template-columns:1fr}}
</style>
