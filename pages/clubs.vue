<script setup lang="ts">
const { t } = useI18n()
useSeoMeta({ title: () => `${t('clubs.title')} — GymTech`, description: () => t('clubs.sub') })
</script>
<template>
  <section class="sec sec-deep sec-first grain">
    <div class="container"><Words tag="h1" class="h-xl" :text="t('clubs.title')" wait /><p class="lead" style="margin-block:16px 40px">{{ t('clubs.sub') }}</p><BranchExplorer /></div>
  </section>
</template>
