import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'
import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, Flip)
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  let lenis: Lenis | null = null
  if (!reduce) {
    lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(t => lenis!.raf(t * 1000))
    gsap.ticker.lagSmoothing(0)
  }
  return { provide: { gsap, ScrollTrigger, Flip, lenis, reduce } }
})
