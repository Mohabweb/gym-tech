<script setup lang="ts">
const { t, tm, rt } = useI18n()
const who = ref<'men' | 'women'>('men')
const chips = computed(() => (tm('why.chips') as any[]).map(c => rt(c)))
const pics = { men: '/img/man-row.webp', women: '/img/train-row.webp' }
</script>
<template>
  <section class="sec sec-light" aria-labelledby="why-h">
    <div class="container in">
      <div class="copy">
        <span class="eyebrow"><i />{{ t('why.eyebrow') }}</span>
        <Words id="why-h" class="h-lg" :text="t('why.title')" />
        <div class="tog" role="group" :aria-label="t('why.eyebrow')">
          <button class="chip" :aria-pressed="who === 'men'" @click="who = 'men'">{{ t('why.men') }}</button>
          <button class="chip" :aria-pressed="who === 'women'" @click="who = 'women'">{{ t('why.women') }}</button>
        </div>
        <ul class="chips"><li v-for="(c, i) in chips" :key="c" v-reveal="i * 0.05" class="chip pillc">{{ c }}</li></ul>
      </div>
      <div class="vis" v-reveal>
        <img v-for="(src, k) in pics" :key="k" :src="src" :alt="k === who ? t('why.alt') : ''" :class="{ on: who === k }" width="1120" height="1400" loading="lazy">
        <i class="vgl" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.in{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.copy{display:grid;gap:28px;justify-items:start}
.tog{display:flex;gap:10px}
.chips{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:10px}
.pillc{border-color:rgba(33,19,15,.3)}
.vis{position:relative;aspect-ratio:4/5;border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--sh-float);background:var(--espresso)}
.vis img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.06);transition:opacity .7s var(--ease),transform 1.2s var(--ease)}
.vis img.on{opacity:1;transform:none}
.vgl{position:absolute;inset:0;background:linear-gradient(0deg,rgba(21,11,8,.55),transparent 45%)}
@media(max-width:900px){.in{grid-template-columns:1fr}}
</style>
