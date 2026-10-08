<script setup lang="ts">
const head = useLocaleHead({ addDirAttribute: true, identifierAttribute: 'id', addSeoAttributes: true })
useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs!.lang, dir: head.value.htmlAttrs!.dir },
  link: [...(head.value.link || [])],
  meta: [...(head.value.meta || [])],
}))
</script>
<template><NuxtLayout><NuxtPage /></NuxtLayout></template>
