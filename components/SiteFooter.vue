<script setup lang="ts">
import { links } from '~/data/links'
const { t } = useI18n()
const lp = useLocalePath()
const year = new Date().getFullYear()
const { $lenis } = useNuxtApp() as any
const top = () => ($lenis ? $lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }))
</script>
<template>
  <footer class="sec sec-deep foot grain">
    <div class="container grid">
      <div class="brand"><img src="/img/logo.png" alt="GymTech" width="72" height="72"><p>{{ t('parent') }}</p><p class="muted">{{ t('tagline') }}.</p><LangToggle /></div>
      <div><h3>{{ t('foot.nav') }}</h3><ul>
        <li><NuxtLink :to="lp('/')">{{ t('nav.home') }}</NuxtLink></li><li><NuxtLink :to="lp('/clubs')">{{ t('nav.branches') }}</NuxtLink></li>
        <li><NuxtLink :to="lp('/profile/membership/not-subscribe')">{{ t('nav.membership') }}</NuxtLink></li><li><NuxtLink :to="lp('/profile')">{{ t('nav.profile') }}</NuxtLink></li></ul></div>
      <div><h3>{{ t('foot.account') }}</h3><ul>
        <li><NuxtLink :to="lp('/login')">{{ t('nav.login') }}</NuxtLink></li><li><NuxtLink :to="lp('/register')">{{ t('nav.register') }}</NuxtLink></li><li><NuxtLink :to="lp('/profile')">{{ t('nav.profile') }}</NuxtLink></li></ul></div>
      <div><h3>{{ t('foot.contact') }}</h3><ul>
        <li><a :href="links.phoneTel" class="ltr">{{ links.phoneDisplay }}</a></li><li><a :href="links.whatsapp" target="_blank" rel="noopener">WhatsApp</a></li><li><a :href="'mailto:' + links.email" class="ltr">{{ links.email }}</a></li></ul>
        <h3 class="mt">{{ t('foot.social') }}</h3><ul><li><a :href="links.instagram" target="_blank" rel="noopener">Instagram</a></li><li><a :href="links.tiktok" target="_blank" rel="noopener">TikTok</a></li></ul></div>
      <div><h3>{{ t('foot.apps') }}</h3><ul><li><a :href="links.ios" target="_blank" rel="noopener">App Store</a></li><li><a :href="links.android" target="_blank" rel="noopener">Google Play</a></li></ul></div>
    </div>
    <div class="container base"><span>© {{ year }} GymTech. {{ t('foot.rights') }}.</span><button type="button" class="chip" @click="top"><Icon name="up" :size="16" />{{ t('foot.top') }}</button></div>
  </footer>
</template>
<style scoped>
.foot{padding-block:72px 32px}
.grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:40px}
.brand{display:grid;gap:12px;align-content:start;justify-items:start}
.brand img{width:72px;height:72px}
h3{font-size:1rem;margin-bottom:14px;font-weight:700}
ul{list-style:none;margin:0;padding:0;display:grid;gap:10px;font-size:.9375rem}
li a{opacity:.8;transition:opacity .3s}li a:hover{opacity:1;color:var(--orange)}
.mt{margin-top:24px}
.base{margin-top:56px;padding-top:24px;border-top:1px solid rgba(240,223,203,.12);display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:.875rem}
.muted{color:var(--ash)}
@media(max-width:900px){.grid{grid-template-columns:1fr 1fr}.brand{grid-column:1/-1}}
</style>
