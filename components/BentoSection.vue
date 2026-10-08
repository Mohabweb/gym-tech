<script setup lang="ts">
const { t } = useI18n()
const cards = [
  { k: 'c1', i: 'pin', cls: 'a', img: 'floor-wide' }, { k: 'c2', i: 'pulse', cls: 'b', img: 'machines' },
  { k: 'c3', i: 'doc', cls: 'c' }, { k: 'c4', i: 'trophy', cls: 'd', img: 'boxing' }, { k: 'c5', i: 'people', cls: 'e', img: 'sled' },
  { k: 'c6', i: 'card', cls: 'f', img: 'treadmills' },
]
function spot(e: PointerEvent) {
  const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect()
  el.style.setProperty('--mx', e.clientX - r.left + 'px'); el.style.setProperty('--my', e.clientY - r.top + 'px')
}
</script>
<template>
  <section class="sec sec-dark" aria-labelledby="bento-h">
    <div class="container">
      <Words id="bento-h" class="h-lg head" :text="t('bento.title')" />
      <div class="bento">
        <article v-for="(c, i) in cards" :key="c.k" v-reveal="(i % 3) * 0.1" class="cell" :class="c.cls" @pointermove="spot">
          <img v-if="c.img" :src="`/img/${c.img}.webp`" alt="" loading="lazy" width="1120" height="1400">
          <div class="txt"><span class="ic"><Icon :name="c.i" :size="24" /></span><h3 class="h-md">{{ t(`bento.${c.k}.t`) }}</h3><p>{{ t(`bento.${c.k}.d`) }}</p></div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
.head{max-width:18ch;margin-bottom:48px}
.bento{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
.cell{position:relative;overflow:hidden;border-radius:var(--r-lg);background:rgba(240,223,203,.04);border:1px solid rgba(240,223,203,.14);min-height:230px;padding:28px;display:flex;align-items:flex-end;transition:transform .5s var(--ease),border-color .4s,box-shadow .4s}
.cell:hover{transform:translateY(-4px);border-color:rgba(248,127,35,.6);box-shadow:var(--glow)}
.cell::before{content:"";position:absolute;inset:0;background:radial-gradient(360px circle at var(--mx,50%) var(--my,50%),rgba(248,127,35,.18),transparent 60%);opacity:0;transition:opacity .4s}
.cell:hover::before{opacity:1}
.cell img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.38;mix-blend-mode:luminosity}
.cell:has(img)::after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(21,11,8,.9),rgba(21,11,8,.1) 70%)}
.txt{position:relative;z-index:1;display:grid;gap:10px;max-width:34ch}
.txt h3{font-size:clamp(1.25rem,2vw,1.75rem)}.txt p{opacity:.8;font-size:.9375rem}
.ic{display:grid;place-items:center;width:46px;height:46px;border-radius:14px;background:rgba(248,127,35,.14);color:var(--orange)}
.a{grid-column:span 7;min-height:340px}.b{grid-column:span 5}.c,.d,.e{grid-column:span 4}.f{grid-column:span 12;min-height:260px}
@media(max-width:900px){.a,.b,.c,.d,.e,.f{grid-column:span 12;min-height:200px}}
</style>
