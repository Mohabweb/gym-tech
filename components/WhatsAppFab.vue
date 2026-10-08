<script setup lang="ts">
import { links } from '~/data/links'
const { t } = useI18n()
</script>
<template>
  <a :href="links.whatsapp" class="fab" target="_blank" rel="noopener" :aria-label="t('cta.whatsapp')"><Icon name="whatsapp" :size="26" /></a>
</template>
<style scoped>
.fab{position:fixed;z-index:54;inset-inline-end:20px;bottom:20px;width:56px;height:56px;display:grid;place-items:center;border-radius:50%;background:var(--red);color:var(--sand-soft);box-shadow:var(--sh-float),var(--glow);transition:transform .35s var(--ease)}
.fab:hover{transform:translateY(-4px) scale(1.05)}
@media(max-width:900px){.fab{bottom:calc(84px + env(safe-area-inset-bottom));inset-inline-end:16px}}
</style>
