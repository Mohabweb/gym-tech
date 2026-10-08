<script setup lang="ts">
import { links } from '~/data/links'
const { t } = useI18n()
const lp = useLocalePath()
const stage = ref<HTMLElement>()
// tile: key, icon, position (% of stage), orthogonal trace via elbow x
const tiles = [
  { k: 'inbody', i: 'doc', x: 16, y: 16 }, { k: 'ach', i: 'trophy', x: 84, y: 14 },
  { k: 'fit', i: 'pulse', x: 6, y: 52 }, { k: 'classes', i: 'people', x: 94, y: 54 },
  { k: 'pt', i: 'dumbbell', x: 20, y: 88 }, { k: 'app', i: 'mobile', x: 80, y: 88 },
]
const path = (x: number, y: number) => `M50 50 H${(50 + x) / 2} V${y} H${x}`
onMounted(() => {
  const { $gsap, $reduce } = useNuxtApp() as any
  if ($reduce || !stage.value) return
  const layers = stage.value.querySelectorAll<HTMLElement>('[data-depth]')
  const qs = Array.from(layers).map(l => ({ d: +l.dataset.depth!, x: $gsap.quickTo(l, 'x', { duration: 0.9, ease: 'expo.out' }), y: $gsap.quickTo(l, 'y', { duration: 0.9, ease: 'expo.out' }) }))
  const mv = (e: PointerEvent) => { const r = stage.value!.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; qs.forEach(q => { q.x(px * q.d); q.y(py * q.d) }) }
  window.addEventListener('pointermove', mv)
  onBeforeUnmount(() => window.removeEventListener('pointermove', mv))
})
</script>
<template>
  <section class="sec sec-deep sec-first hero grain" aria-labelledby="hero-h">
    <div class="grid-bg" aria-hidden="true" /><div class="beam" aria-hidden="true" /><div class="halo" aria-hidden="true" />
    <div class="container in">
      <div class="copy">
        <span class="eyebrow"><i />{{ t('tagline') }}.</span>
        <Words id="hero-h" tag="h1" class="h-xl" :text="t('hero.title')" wait />
        <p class="lead">{{ t('hero.sub') }}</p>
        <div class="btns">
          <NuxtLink :to="lp('/profile/membership/not-subscribe')" class="btn btn-primary">{{ t('hero.cta1') }}</NuxtLink>
          <NuxtLink :to="lp('/clubs')" class="btn btn-ghost">{{ t('hero.cta2') }}</NuxtLink>
        </div>
      </div>
      <div ref="stage" class="stage" role="group" :aria-label="t('hero.tiles.app')">
        <svg class="traces" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="tg" x1="0" x2="1"><stop offset="0" stop-color="#F87F23" /><stop offset="1" stop-color="#CC0A0D" /></linearGradient></defs>
          <path v-for="(tl, i) in tiles" :key="'b' + i" :d="path(tl.x, tl.y)" class="tr-base" vector-effect="non-scaling-stroke" />
          <path v-for="(tl, i) in tiles" :key="'p' + i" :d="path(tl.x, tl.y)" class="tr-pulse" :style="{ animationDelay: i * 0.45 + 's' }" vector-effect="non-scaling-stroke" pathLength="100" />
        </svg>
        <div class="core" data-depth="10"><img src="/img/logo.png" alt="GymTech" width="150" height="150"></div>
        <div v-for="(tl, i) in tiles" :key="tl.k" class="tile glass" :class="'t' + i" :style="{ left: tl.x + '%', top: tl.y + '%' }" :data-depth="(i % 2 ? -1 : 1) * (14 + i * 3)">
          <Icon :name="tl.i" :size="22" /><span>{{ t('hero.tiles.' + tl.k) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero{padding-block:clamp(40px,6vw,88px) clamp(96px,12vw,170px);overflow:hidden;isolation:isolate}
.grid-bg{position:absolute;inset:0;z-index:-1}
.beam{position:absolute;z-index:-1;inset-block-start:-20%;inset-inline-end:-10%;width:60%;height:90%;background:var(--beam);filter:blur(40px);transform:rotate(8deg);opacity:.75}
[dir=rtl] .beam{transform:rotate(-8deg) scaleX(-1)}
.halo{position:absolute;z-index:-1;inset-inline:0;bottom:0;height:40%;background:radial-gradient(ellipse at 50% 100%,rgba(204,10,13,.28),transparent 70%)}
.in{display:grid;grid-template-columns:1.05fr 1fr;gap:48px;align-items:center}
.copy{display:grid;gap:28px;justify-items:start}
.btns{display:flex;gap:14px;flex-wrap:wrap}
.stage{position:relative;aspect-ratio:1/1;width:100%;max-width:560px;margin-inline:auto;direction:ltr}
.traces{position:absolute;inset:0;width:100%;height:100%}
.tr-base{fill:none;stroke:rgba(240,223,203,.16);stroke-width:1}
.tr-pulse{fill:none;stroke:url(#tg);stroke-width:2;stroke-dasharray:8 92;stroke-dashoffset:8;animation:flow 3.2s linear infinite}
@keyframes flow{to{stroke-dashoffset:-92}}
.core{position:absolute;left:50%;top:50%;width:26%;aspect-ratio:1;translate:-50% -50%;border-radius:32%;display:grid;place-items:center;background:radial-gradient(circle,rgba(248,127,35,.4),rgba(46,28,22,.9) 70%);border:1px solid rgba(248,127,35,.5);box-shadow:var(--glow),0 0 90px rgba(204,10,13,.35)}
.core img{width:70%}
.tile{position:absolute;translate:-50% -50%;display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:var(--r-md);font-size:.8125rem;font-weight:500;white-space:nowrap;direction:inherit}
.tile svg{color:var(--orange);flex:none}
[dir=rtl] .tile{direction:rtl}
@media(max-width:900px){
  .in{grid-template-columns:1fr}
  .stage{max-width:420px}
  .traces,.t3,.t4,.t5{display:none}
  .t0{left:36%!important;top:10%!important}.t1{left:64%!important;top:27%!important}.t2{left:36%!important;top:88%!important}
}
</style>
