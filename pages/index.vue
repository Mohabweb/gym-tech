<script setup lang="ts">
import { links } from '~/data/links'
const { t } = useI18n()
useSeoMeta({ title: () => t('seo.title'), description: () => t('seo.desc'), ogTitle: () => t('seo.title'), ogDescription: () => t('seo.desc'), ogType: 'website', twitterCard: 'summary_large_image' })
// Only confirmed facts: name, parent, url, phone, social links.
useHead({ script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ExerciseGym', name: 'GymTech', url: links.website, telephone: '+966920012483', parentOrganization: { '@type': 'Organization', name: 'Fursan Najd Sports' }, sameAs: [links.instagram, links.tiktok] }) }] })
</script>
<template><div><HeroSection /><WhySection /><BentoSection /><BranchesSection /><MembershipSection /><PlansCompare /><FinalCta /><AppSection /><ContactSection /></div></template>
