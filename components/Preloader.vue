<script setup lang="ts">
// Once per session. 0s ring+dot -> 0.6s logo -> 1.2s wordmark -> 2.2s logo flies to navbar + curtain -> 2.8s done. Hard stop 4s.
const root = ref<HTMLElement>()
const gone = ref(false)
const preDone = useState('preDone', () => false)
const { $gsap, $reduce } = useNuxtApp() as any
const letters = 'GYMTECH'.split('')

function finish() {
  if (gone.value) return
  try { sessionStorage.setItem('gt_pre', '1') } catch {}
  document.documentElement.classList.remove('pre')
  preDone.value = true
  gone.value = true
}

onMounted(() => {
  let seen = false
  try { seen = !!sessionStorage.getItem('gt_pre') } catch {}
  if (seen) return finish()
  document.documentElement.classList.add('pre')
  const hard = setTimeout(finish, 4000)
  const el = root.value!
  if ($reduce) {
    $gsap.to(el, { opacity: 0, duration: 0.3, delay: 0.2, onComplete: () => { clearTimeout(hard); finish() } })
    return
  }
  const q = (s: string) => el.querySelector(s)
  const tl = $gsap.timeline({ onComplete: () => { clearTimeout(hard); finish() } })
  tl.fromTo('.pl-ring', { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'expo.out' }, 0)
    .fromTo('.pl-dot', { scale: 0 }, { scale: 1, duration: 0.4, ease: 'back.out(2)' }, 0.15)
    .to(['.pl-ring', '.pl-dot'], { scale: 0.4, opacity: 0, duration: 0.4, ease: 'power3.in' }, 0.6)
    .fromTo('.pl-logo', { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'expo.out' }, 0.7)
    .fromTo('.pl-l', { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: 'expo.out', stagger: 0.06 }, 1.2)
    .fromTo('.pl-sweep', { xPercent: -120 }, { xPercent: 220, duration: 0.8, ease: 'power2.inOut' }, 1.4)
    .add(() => {
      const nav = document.querySelector('[data-nav-logo]') as HTMLElement | null
      const lg = q('.pl-logo') as HTMLElement
      if (nav) {
        const a = lg.getBoundingClientRect(), b = nav.getBoundingClientRect()
        $gsap.to(lg, { x: `+=${b.left + b.width / 2 - (a.left + a.width / 2)}`, y: `+=${b.top + b.height / 2 - (a.top + a.height / 2)}`, scale: (b.width / a.width) || 0.3, duration: 0.6, ease: 'expo.inOut' })
      }
      $gsap.to('.pl-word', { opacity: 0, duration: 0.3 })
    }, 2.2)
    .to('.pl-panel.a', { yPercent: -100, duration: 0.6, ease: 'expo.inOut' }, 2.2)
    .to('.pl-panel.b', { yPercent: 100, duration: 0.6, ease: 'expo.inOut' }, 2.2)
    .to('.pl-logo', { opacity: 0, duration: 0.2 }, 2.7)
    .add(() => { preDone.value = true }, 2.25)
})
</script>
<template>
  <div v-if="!gone" ref="root" class="preloader" aria-hidden="true">
    <div class="pl-panel a" /><div class="pl-panel b" />
    <div class="pl-center">
      <span class="pl-ring" /><span class="pl-dot" />
      <img class="pl-logo" src="/img/logo.png" alt="" width="150" height="150">
      <div class="pl-word"><span v-for="(c, i) in letters" :key="i" class="pl-mask"><span class="pl-l">{{ c }}</span></span><i class="pl-sweep" /></div>
    </div>
  </div>
</template>
<style>
.preloader{position:fixed;inset:0;z-index:300;overflow:hidden;pointer-events:all}
html.seen .preloader{display:none}
.pl-panel{position:absolute;inset-inline:0;height:50%;background:var(--espresso-deep)}
.pl-panel.a{top:0}.pl-panel.b{bottom:0}
.pl-center{position:absolute;inset:0;display:grid;place-items:center;direction:ltr}
.pl-center>*{grid-area:1/1}
.pl-ring{width:84px;height:84px;border-radius:50%;border:3px solid var(--sand)}
.pl-dot{width:18px;height:18px;border-radius:50%;background:var(--sand)}
.pl-logo{width:110px;height:110px;opacity:0;z-index:2}
.pl-word{margin-top:210px;position:relative;display:flex;overflow:hidden;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:clamp(1.5rem,4vw,2.25rem);letter-spacing:.28em;color:var(--sand);padding-inline-start:.28em}
.pl-mask{display:inline-block;overflow:hidden}.pl-l{display:inline-block}
.pl-sweep{position:absolute;inset-block:0;width:40%;background:linear-gradient(90deg,transparent,rgba(248,127,35,.55),transparent);mix-blend-mode:screen}
</style>
