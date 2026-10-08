<script setup lang="ts">const { t } = useI18n()</script>
<template>
  <a class="skip" href="#main">{{ t('nav.skip') }}</a>
  <Preloader />
  <AnnouncementBar />
  <SiteNav />
  <main id="main"><slot /></main>
  <SiteFooter />
  <WhatsAppFab />
  <MobileNav />
</template>
