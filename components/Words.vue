<script setup lang="ts">
// Word-by-word reveal (never per-letter, so Arabic joins stay intact). [[x]] = gradient emphasis.
const props = defineProps<{ text: string; tag?: string; wait?: boolean }>()
const root = ref<HTMLElement>()
const preDone = useState('preDone', () => false)
const parts = computed(() => {
  const out: { w: string; g: boolean }[] = []
  props.text.split(/(\[\[.*?\]\])/).forEach(seg => {
    const g = seg.startsWith('[[')
    seg.replace(/^\[\[|\]\]$/g, '').split(/\s+/).filter(Boolean).forEach(w => out.push({ w, g }))
  })
  return out
})
let played = false
function play() {
  const { $gsap, $reduce } = useNuxtApp() as any
  if (!root.value || $reduce) return
  const t = root.value.querySelectorAll('.wi')
  const vars = { y: 24, opacity: 0, filter: 'blur(10px)', duration: 1.1, ease: 'expo.out', stagger: 0.07, clearProps: 'filter,transform,opacity' }
  if (props.wait) $gsap.from(t, vars)
  else $gsap.from(t, { ...vars, scrollTrigger: { trigger: root.value, start: 'top 88%', once: true } })
}
function start() { if (!played) { played = true; nextTick(play) } }
onMounted(() => { if (!props.wait || preDone.value) start() })
watch(preDone, v => v && props.wait && start())
watch(() => props.text, () => nextTick(play))
</script>
<template>
  <component :is="tag || 'h2'" ref="root" class="words">
    <span v-for="(p, i) in parts" :key="i + p.w" class="w"><span class="wi" :class="{ grad: p.g }">{{ p.w }}</span>{{ ' ' }}</span>
  </component>
</template>
<style>.words .w{display:inline-block;white-space:pre}.words .wi{display:inline-block}</style>
