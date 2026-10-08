<script setup lang="ts">
import { login, register, NotConfigured } from '~/lib/api/auth'
const props = defineProps<{ mode: 'login' | 'register' }>()
const { t } = useI18n()
const lp = useLocalePath()
const fields = computed(() => props.mode === 'login'
  ? [{ k: 'identifier', type: 'text', ac: 'username' }, { k: 'password', type: 'password', ac: 'current-password' }]
  : [{ k: 'name', type: 'text', ac: 'name' }, { k: 'email', type: 'email', ac: 'email' }, { k: 'phone', type: 'tel', ac: 'tel' }, { k: 'password', type: 'password', ac: 'new-password' }])
const v = reactive<Record<string, string>>({})
const err = reactive<Record<string, string>>({})
const busy = ref(false), banner = ref('')
function validate() {
  let ok = true
  for (const f of fields.value) {
    err[f.k] = !v[f.k]?.trim() ? t('auth.req') : f.k === 'password' && v[f.k].length < 6 ? t('auth.short') : ''
    if (err[f.k]) ok = false
  }
  return ok
}
async function submit() {
  banner.value = ''
  if (!validate()) return
  busy.value = true
  try { await (props.mode === 'login' ? login(v as any) : register(v as any)) }
  catch (e) { banner.value = e instanceof NotConfigured ? t('auth.noApi') : String((e as Error).message) }
  finally { busy.value = false }
}
</script>
<template>
  <section class="auth">
    <div class="form">
      <h1 class="h-lg">{{ t('auth.' + mode) }}</h1>
      <form novalidate @submit.prevent="submit">
        <div v-for="f in fields" :key="f.k" class="field">
          <label :for="'f-' + f.k">{{ t('auth.' + f.k) }}</label>
          <input :id="'f-' + f.k" v-model="v[f.k]" :type="f.type" :autocomplete="f.ac" :aria-invalid="!!err[f.k]" :aria-describedby="err[f.k] ? 'e-' + f.k : undefined" @blur="validate">
          <p v-if="err[f.k]" :id="'e-' + f.k" class="err">{{ err[f.k] }}</p>
        </div>
        <p v-if="banner" class="banner" role="alert">{{ banner }}</p>
        <button class="btn btn-primary" type="submit" :disabled="busy">{{ busy ? t('auth.loading') : t('auth.submit') }}</button>
      </form>
      <p class="alt">{{ mode === 'login' ? t('auth.none') : t('auth.have') }} <NuxtLink :to="lp(mode === 'login' ? '/register' : '/login')" class="u">{{ t(mode === 'login' ? 'auth.register' : 'auth.login') }}</NuxtLink></p>
    </div>
    <div class="vis" aria-hidden="true"><img src="/img/machines.webp" alt="" width="1119" height="1400"><div class="ov"><img src="/img/logo.png" alt="" width="96" height="96"><p class="h-md">{{ t('auth.side') }}</p></div></div>
  </section>
</template>
<style scoped>
.auth{display:grid;grid-template-columns:1fr 1fr;min-height:calc(100vh - var(--bar-h) - 70px);background:var(--espresso-deep)}
.form{display:grid;gap:24px;align-content:center;padding:clamp(24px,6vw,96px);max-width:560px;width:100%;margin-inline:auto}
form{display:grid;gap:18px}
.banner{padding:12px 16px;border-radius:var(--r-sm);background:rgba(204,10,13,.18);border:1px solid var(--red);font-size:.9375rem}
.u{text-decoration:underline;text-underline-offset:4px;color:var(--orange)}
.vis{position:relative;overflow:hidden;border-radius:var(--r-xl) 0 0 var(--r-xl);margin:12px 12px 12px 0}
[dir=rtl] .vis{border-radius:0 var(--r-xl) var(--r-xl) 0;margin:12px 0 12px 12px}
.vis>img{width:100%;height:100%;object-fit:cover}
.ov{position:absolute;inset:0;display:grid;align-content:end;gap:14px;padding:40px;background:linear-gradient(0deg,rgba(21,11,8,.92),transparent 60%)}
@media(max-width:900px){.auth{grid-template-columns:1fr}.vis{display:none}}
</style>
