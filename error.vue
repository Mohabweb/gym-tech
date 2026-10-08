<script setup lang="ts">
defineProps<{ error: any }>()
const { t } = useI18n()
const lp = useLocalePath()
useHead({ title: '404 — GymTech' })
</script>
<template>
  <NuxtLayout>
    <section class="sec sec-deep sec-first grain e"><div class="container">
      <p class="code grad">404</p><h1 class="h-lg">{{ t('e404.t') }}</h1>
      <NuxtLink :to="lp('/')" class="btn btn-primary" @click="clearError()">{{ t('e404.back') }}</NuxtLink></div></section>
  </NuxtLayout>
</template>
<style scoped>.e{min-height:60vh;display:grid;align-items:center;text-align:center}.container{display:grid;gap:24px;justify-items:center}.code{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:clamp(6rem,20vw,14rem);line-height:1}</style>
