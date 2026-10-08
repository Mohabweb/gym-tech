<script setup lang="ts">
import { links } from '~/data/links'
const { t } = useI18n()
const lp = useLocalePath()
</script>
<template>
  <section class="sec sec-light fin" aria-labelledby="fin-h">
    <div class="container"><div class="card" v-reveal>
      <div class="glow" aria-hidden="true" />
      <Words id="fin-h" class="h-xl" :text="t('cta.title')" />
      <div class="btns">
        <NuxtLink :to="lp('/profile/membership/not-subscribe')" class="btn btn-primary">{{ t('hero.cta1') }}</NuxtLink>
        <a :href="links.whatsapp" target="_blank" rel="noopener" class="btn btn-ghost"><Icon name="whatsapp" :size="20" />{{ t('cta.whatsapp') }}</a>
      </div>
    </div></div>
  </section>
</template>
<style scoped>
.card{position:relative;overflow:hidden;isolation:isolate;display:grid;gap:36px;justify-items:center;text-align:center;padding:clamp(56px,9vw,120px) 24px clamp(120px,16vw,220px);border-radius:var(--r-xl);background:var(--espresso-deep);color:var(--sand)}
.card h2{max-width:14ch}
.glow{position:absolute;z-index:-1;inset-inline:-10%;bottom:-62%;height:100%;background:var(--grad-glow);filter:blur(10px);animation:breathe 6s ease-in-out infinite}
@keyframes breathe{50%{opacity:.82;transform:scale(1.04)}}
.btns{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
.card .btn-ghost{color:var(--sand);border-color:rgba(240,223,203,.5)}
.card .btn-primary{box-shadow:0 0 0 1px rgba(247,238,226,.35),0 10px 30px rgba(21,11,8,.5)}
</style>
