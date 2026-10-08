<script setup lang="ts">const { t } = useI18n()</script>
<template>
  <section class="sec sec-deep grain" aria-labelledby="br-h">
    <div class="container">
      <span class="eyebrow"><i />{{ t('map.eyebrow') }}</span>
      <Words id="br-h" class="h-lg" :text="t('map.title')" style="margin-block:20px 40px" />
      <BranchExplorer />
    </div>
  </section>
</template>
