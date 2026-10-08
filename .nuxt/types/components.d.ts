
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AnnouncementBar: typeof import("../../components/AnnouncementBar.vue")['default']
  AppSection: typeof import("../../components/AppSection.vue")['default']
  AuthSplit: typeof import("../../components/AuthSplit.vue")['default']
  BentoSection: typeof import("../../components/BentoSection.vue")['default']
  BranchExplorer: typeof import("../../components/BranchExplorer.vue")['default']
  BranchGlobe: typeof import("../../components/BranchGlobe.vue")['default']
  BranchesSection: typeof import("../../components/BranchesSection.vue")['default']
  ContactSection: typeof import("../../components/ContactSection.vue")['default']
  FinalCta: typeof import("../../components/FinalCta.vue")['default']
  HeroSection: typeof import("../../components/HeroSection.vue")['default']
  Icon: typeof import("../../components/Icon.vue")['default']
  LangToggle: typeof import("../../components/LangToggle.vue")['default']
  MembershipSection: typeof import("../../components/MembershipSection.vue")['default']
  MembershipSelector: typeof import("../../components/MembershipSelector.vue")['default']
  MobileNav: typeof import("../../components/MobileNav.vue")['default']
  PlanFeatures: typeof import("../../components/PlanFeatures.vue")['default']
  PlansCompare: typeof import("../../components/PlansCompare.vue")['default']
  Preloader: typeof import("../../components/Preloader.vue")['default']
  ProfileShell: typeof import("../../components/ProfileShell.vue")['default']
  SiteFooter: typeof import("../../components/SiteFooter.vue")['default']
  SiteNav: typeof import("../../components/SiteNav.vue")['default']
  WhatsAppFab: typeof import("../../components/WhatsAppFab.vue")['default']
  WhySection: typeof import("../../components/WhySection.vue")['default']
  Words: typeof import("../../components/Words.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtLinkLocale: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
  SwitchLocalePathLink: typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAnnouncementBar: LazyComponent<typeof import("../../components/AnnouncementBar.vue")['default']>
  LazyAppSection: LazyComponent<typeof import("../../components/AppSection.vue")['default']>
  LazyAuthSplit: LazyComponent<typeof import("../../components/AuthSplit.vue")['default']>
  LazyBentoSection: LazyComponent<typeof import("../../components/BentoSection.vue")['default']>
  LazyBranchExplorer: LazyComponent<typeof import("../../components/BranchExplorer.vue")['default']>
  LazyBranchGlobe: LazyComponent<typeof import("../../components/BranchGlobe.vue")['default']>
  LazyBranchesSection: LazyComponent<typeof import("../../components/BranchesSection.vue")['default']>
  LazyContactSection: LazyComponent<typeof import("../../components/ContactSection.vue")['default']>
  LazyFinalCta: LazyComponent<typeof import("../../components/FinalCta.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/HeroSection.vue")['default']>
  LazyIcon: LazyComponent<typeof import("../../components/Icon.vue")['default']>
  LazyLangToggle: LazyComponent<typeof import("../../components/LangToggle.vue")['default']>
  LazyMembershipSection: LazyComponent<typeof import("../../components/MembershipSection.vue")['default']>
  LazyMembershipSelector: LazyComponent<typeof import("../../components/MembershipSelector.vue")['default']>
  LazyMobileNav: LazyComponent<typeof import("../../components/MobileNav.vue")['default']>
  LazyPlanFeatures: LazyComponent<typeof import("../../components/PlanFeatures.vue")['default']>
  LazyPlansCompare: LazyComponent<typeof import("../../components/PlansCompare.vue")['default']>
  LazyPreloader: LazyComponent<typeof import("../../components/Preloader.vue")['default']>
  LazyProfileShell: LazyComponent<typeof import("../../components/ProfileShell.vue")['default']>
  LazySiteFooter: LazyComponent<typeof import("../../components/SiteFooter.vue")['default']>
  LazySiteNav: LazyComponent<typeof import("../../components/SiteNav.vue")['default']>
  LazyWhatsAppFab: LazyComponent<typeof import("../../components/WhatsAppFab.vue")['default']>
  LazyWhySection: LazyComponent<typeof import("../../components/WhySection.vue")['default']>
  LazyWords: LazyComponent<typeof import("../../components/Words.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtLinkLocale: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
  LazySwitchLocalePathLink: LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
