<script setup lang="ts">
// Query (duration/access/branch/gender) hydrates the shared selection. Whether the existing backend accepts these is UNVERIFIED.
const { t } = useI18n(); const route = useRoute(); const m = useMembership()
useSeoMeta({ title: () => `${t('profile.renew')} — GymTech`, robots: 'noindex' })
onMounted(() => {
  const q = route.query
  if (q.duration && [12, 6, 3, 1].includes(+q.duration)) m.value.duration = +q.duration as any
  if (q.access && ['multi', 'one', 'offpeak'].includes(String(q.access))) m.value.access = q.access as any
  if (q.gender && ['men', 'ladies'].includes(String(q.gender))) m.value.gender = q.gender as any
  if (typeof q.branch === 'string') m.value.branch = q.branch
})
</script>
<template><ProfileShell :title="t('profile.renew')"><div class="sec-light" style="border-radius:var(--r-xl);padding:24px"><MembershipSelector /></div></ProfileShell></template>
