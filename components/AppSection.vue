<script setup lang="ts">
import QRCode from 'qrcode'
import { links } from '~/data/links'
const { t } = useI18n()
const qr = ref('')
onMounted(async () => { qr.value = await QRCode.toString(links.website, { type: 'svg', margin: 1, color: { dark: '#21130F', light: '#F0DFCB' } }) })
</script>
<template>
  <section id="app" class="sec sec-dark" aria-labelledby="app-h">
    <div class="container in">
      <div class="copy">
        <Words id="app-h" class="h-lg" :text="t('app.title')" />
        <p class="lead">{{ t('app.lead') }}</p>
        <div class="stores">
          <a :href="links.ios" class="store" target="_blank" rel="noopener"><Icon name="apple" :size="26" /><span>{{ t('app.ios') }}</span></a>
          <a :href="links.android" class="store" target="_blank" rel="noopener"><Icon name="play" :size="24" /><span>{{ t('app.android') }}</span></a>
        </div>
        <figure class="qr"><div v-if="qr" v-html="qr" role="img" :aria-label="t('app.scan')" /><figcaption class="muted">{{ t('app.scan') }}</figcaption></figure>
      </div>
      <div class="phone" aria-hidden="true" v-reveal><div class="scr"><img src="/img/logo.png" alt="" width="150" height="150"><span class="ln" /><span class="ln s" /></div></div>
    </div>
  </section>
</template>
<style scoped>
.in{display:grid;grid-template-columns:1.2fr .8fr;gap:48px;align-items:center}
.copy{display:grid;gap:26px;justify-items:start}
.stores{display:flex;gap:12px;flex-wrap:wrap}
.store{display:inline-flex;align-items:center;gap:12px;min-height:56px;padding:0 22px;border-radius:var(--r-md);background:var(--sand);color:var(--espresso);font-weight:500;transition:transform .35s var(--ease)}
.store:hover{transform:translateY(-3px)}
.qr{margin:0;display:flex;align-items:center;gap:16px}.qr div{width:112px;height:112px;border-radius:var(--r-sm);overflow:hidden}.qr :deep(svg){width:100%;height:100%}
.phone{justify-self:center;width:min(280px,70%);aspect-ratio:9/18;border-radius:44px;padding:10px;background:var(--espresso-raised);border:1px solid rgba(240,223,203,.2);box-shadow:var(--sh-float),var(--glow);animation:fl 6s ease-in-out infinite}
.scr{height:100%;border-radius:36px;display:grid;place-content:center;justify-items:center;gap:14px;background:radial-gradient(ellipse at 50% 100%,rgba(204,10,13,.5),var(--espresso-deep) 70%)}
.scr img{width:96px}.ln{width:110px;height:8px;border-radius:4px;background:rgba(240,223,203,.2)}.ln.s{width:70px}
@keyframes fl{50%{transform:translateY(-10px)}}
@media(max-width:900px){.in{grid-template-columns:1fr}.qr{display:none}}
</style>
