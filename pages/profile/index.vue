<script setup lang="ts">const { t } = useI18n(); useSeoMeta({ title: () => `${t('profile.home')} — GymTech`, robots: 'noindex' })</script>
<template><ProfileShell :title="t('profile.home')" /></template>
