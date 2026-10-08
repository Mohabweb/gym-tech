<script setup lang="ts">
defineProps<{ keys: string[] }>()
const { t } = useI18n()
</script>
<template><ul class="feat"><li v-for="k in keys" :key="k"><Icon name="check" :size="18" /><span>{{ t('f.' + k) }}</span></li></ul></template>
<style scoped>
.feat{list-style:none;margin:0;padding:0;display:grid;gap:10px;font-size:.9375rem}
.feat li{display:flex;gap:10px;align-items:flex-start}
.feat svg{flex:none;margin-top:4px;color:var(--red)}
.sec-dark .feat svg{color:var(--orange)}
</style>
