// v-reveal: cards fade/slide up on scroll (y60->0). Server renders it untouched.
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, b) {
      const { $gsap, $reduce } = useNuxtApp() as any
      if (!$gsap || $reduce) return
      $gsap.from(el, { y: 60, opacity: 0, duration: 1, ease: 'expo.out', delay: b.value || 0,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
    },
  })
})
