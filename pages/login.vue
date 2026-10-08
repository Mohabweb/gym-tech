<script setup lang="ts">const { t } = useI18n(); useSeoMeta({ title: () => `${t('auth.login')} — GymTech` })</script>
<template><AuthSplit mode="login" /></template>
