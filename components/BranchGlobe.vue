<script setup lang="ts">
// Lazy COBE globe, centered on Saudi Arabia. Markers are city-level (exact branch coordinates not supplied).
import { cityCoords, type City } from '~/data/branches'
const props = defineProps<{ counts: Record<City, number>; active: City }>()
const cv = ref<HTMLCanvasElement>()
const box = ref<HTMLElement>()
const fallback = ref(false)
let globe: any, raf = 0
const lngToPhi = (lng: number) => Math.PI * 1.5 - (lng * Math.PI) / 180 // ponytail: verified visually in QA, tune if map looks off
const target = computed(() => lngToPhi(cityCoords[props.active][1]))
let phi = lngToPhi(46), want = phi
const markers = () => (Object.keys(cityCoords) as City[]).filter(c => props.counts[c] > 0).map(c => ({ location: cityCoords[c], size: 0.03 + props.counts[c] * 0.004 }))
watch(() => props.active, () => (want = target.value))
watch(() => props.counts, () => globe?.update({ markers: markers() }), { deep: true })
onMounted(() => {
  const io = new IntersectionObserver(async ([e]) => {
    if (!e.isIntersecting) return
    io.disconnect()
    try {
      const { default: createGlobe } = await import('cobe')
      const w = box.value!.clientWidth
      const dpr = Math.min(devicePixelRatio, 2)
      cv.value!.width = w * dpr; cv.value!.height = w * dpr
      const reduce = (useNuxtApp() as any).$reduce
      globe = createGlobe(cv.value!, { devicePixelRatio: dpr, width: w * dpr, height: w * dpr, phi, theta: 0.45, dark: 1, diffuse: 1.4, mapSamples: 16000, mapBrightness: 5,
        baseColor: [0.36, 0.2, 0.13], markerColor: [0.97, 0.5, 0.14], glowColor: [0.8, 0.12, 0.08], markers: markers(), scale: 1.05 })
      const tick = () => { phi += (want - phi) * 0.06; globe.update({ phi: reduce ? phi : phi + Math.sin(Date.now() / 3000) * 0.08 }); raf = requestAnimationFrame(tick) }
      tick()
    } catch { fallback.value = true }
  }, { rootMargin: '200px' })
  io.observe(box.value!)
  onBeforeUnmount(() => { io.disconnect(); cancelAnimationFrame(raf); globe?.destroy() })
})
</script>
<template>
  <div ref="box" class="globe" aria-hidden="true">
    <canvas v-show="!fallback" ref="cv" />
    <div v-if="fallback" class="fb"><Icon name="globe" :size="64" /></div>
  </div>
</template>
<style scoped>
.globe{position:relative;width:100%;max-width:520px;aspect-ratio:1;margin-inline:auto}
.globe::before{content:"";position:absolute;inset:8%;border-radius:50%;background:radial-gradient(circle,rgba(204,10,13,.3),transparent 70%);filter:blur(30px)}
canvas{position:relative;width:100%;height:100%}
.fb{display:grid;place-items:center;height:100%;color:var(--orange)}
</style>
