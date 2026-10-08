<script setup lang="ts">
import { links } from '~/data/links'
const { t } = useI18n()
</script>
<template>
  <section class="sec sec-light" aria-labelledby="ct-h">
    <div class="container in">
      <div class="copy"><Words id="ct-h" class="h-lg" :text="t('contact.title')" /><p class="lead">{{ t('contact.lead') }}</p></div>
      <div class="acts">
        <a :href="links.whatsapp" class="btn btn-primary big" target="_blank" rel="noopener"><Icon name="whatsapp" :size="22" />{{ t('links.whatsapp') }}</a>
        <a :href="links.phoneTel" class="btn btn-ghost"><Icon name="phone" :size="20" /><span class="ltr">{{ links.phoneDisplay }}</span></a>
        <div class="soc"><a :href="links.instagram" target="_blank" rel="noopener" class="chip"><Icon name="instagram" :size="18" />Instagram</a><a :href="links.tiktok" target="_blank" rel="noopener" class="chip"><Icon name="tiktok" :size="18" />TikTok</a></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.in{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}.copy{display:grid;gap:18px}
.acts{display:grid;gap:14px;justify-items:start}.big{min-height:60px;font-size:1.125rem}.soc{display:flex;gap:8px;flex-wrap:wrap}
@media(max-width:900px){.in{grid-template-columns:1fr}}
</style>
