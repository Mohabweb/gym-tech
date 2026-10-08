<script setup lang="ts">
const p: Record<string, string> = {
  arrow: 'M5 12h14M13 6l6 6-6 6', up: 'M12 19V5M6 11l6-6 6 6',
  pin: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  whatsapp: 'M3 21l1.6-4.7A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4-1L3 21zM9 8.5c0 3 2.5 5.5 5.5 5.5M9 8.5l1.2-.3.8 1.7-.7.8M14.5 14l.8-.7 1.7.8-.3 1.2',
  instagram: 'M4 4h16v16H4zM12 16a4 4 0 100-8 4 4 0 000 8zM16.5 7.5h.01',
  tiktok: 'M14 3v11.5a3.5 3.5 0 11-3.5-3.5M14 3c.4 2.6 2 4 4.5 4.2',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
  doc: 'M7 3h8l4 4v14H7zM14 3v5h5M10 13h6M10 17h6',
  trophy: 'M8 4h8v5a4 4 0 01-8 0zM8 6H4v1a4 4 0 004 4M16 6h4v1a4 4 0 01-4 4M12 13v4M8 21h8M10 17h4',
  pulse: 'M3 12h4l2-6 4 12 2-6h6',
  people: 'M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M17 11a2.5 2.5 0 100-5M17 14a5 5 0 014 5',
  dumbbell: 'M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12',
  mobile: 'M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zM11 18h2',
  card: 'M3 6h18v12H3zM3 10h18', mail: 'M3 5h18v14H3zM3 6l9 7 9-7', globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  home: 'M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10', user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0',
  apple: 'M12 7c1-2 3-3 4-3 0 2-1 4-4 4zM12 8c-2-1-6 0-6 5 0 4 2 8 4 8 1 0 1.5-.5 2-.5s1 .5 2 .5c2 0 4-3 4-5-2-1-3-3-2-5-1-2-3-3-4-3z',
  play: 'M6 3l14 9-14 9z', check: 'M5 12l5 5 9-10',
}
defineProps<{ name: string; size?: number }>()
</script>
<template>
  <svg :width="size || 22" :height="size || 22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" :class="{ flip: name === 'arrow' }"><path :d="p[name]" /></svg>
</template>
<style>[dir=rtl] svg.flip{transform:scaleX(-1)}</style>
