<script setup lang="ts">const { t } = useI18n()</script>
<template>
  <section id="membership" class="sec sec-light" aria-labelledby="mem-h">
    <div class="container">
      <div class="head"><span class="eyebrow"><i />{{ t('mem.eyebrow') }}</span><Words id="mem-h" class="h-lg" :text="t('mem.title')" /><p class="lead">{{ t('mem.lead') }}</p></div>
      <MembershipSelector />
    </div>
  </section>
</template>
<style scoped>.head{display:grid;gap:20px;justify-items:start;margin-bottom:40px}</style>
