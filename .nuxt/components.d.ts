
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


export const AnnouncementBar: typeof import("../components/AnnouncementBar.vue")['default']
export const AppSection: typeof import("../components/AppSection.vue")['default']
export const AuthSplit: typeof import("../components/AuthSplit.vue")['default']
export const BentoSection: typeof import("../components/BentoSection.vue")['default']
export const BranchExplorer: typeof import("../components/BranchExplorer.vue")['default']
export const BranchGlobe: typeof import("../components/BranchGlobe.vue")['default']
export const BranchesSection: typeof import("../components/BranchesSection.vue")['default']
export const ContactSection: typeof import("../components/ContactSection.vue")['default']
export const FinalCta: typeof import("../components/FinalCta.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const Icon: typeof import("../components/Icon.vue")['default']
export const LangToggle: typeof import("../components/LangToggle.vue")['default']
export const MembershipSection: typeof import("../components/MembershipSection.vue")['default']
export const MembershipSelector: typeof import("../components/MembershipSelector.vue")['default']
export const MobileNav: typeof import("../components/MobileNav.vue")['default']
export const PlanFeatures: typeof import("../components/PlanFeatures.vue")['default']
export const PlansCompare: typeof import("../components/PlansCompare.vue")['default']
export const Preloader: typeof import("../components/Preloader.vue")['default']
export const ProfileShell: typeof import("../components/ProfileShell.vue")['default']
export const SiteFooter: typeof import("../components/SiteFooter.vue")['default']
export const SiteNav: typeof import("../components/SiteNav.vue")['default']
export const WhatsAppFab: typeof import("../components/WhatsAppFab.vue")['default']
export const WhySection: typeof import("../components/WhySection.vue")['default']
export const Words: typeof import("../components/Words.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAnnouncementBar: LazyComponent<typeof import("../components/AnnouncementBar.vue")['default']>
export const LazyAppSection: LazyComponent<typeof import("../components/AppSection.vue")['default']>
export const LazyAuthSplit: LazyComponent<typeof import("../components/AuthSplit.vue")['default']>
export const LazyBentoSection: LazyComponent<typeof import("../components/BentoSection.vue")['default']>
export const LazyBranchExplorer: LazyComponent<typeof import("../components/BranchExplorer.vue")['default']>
export const LazyBranchGlobe: LazyComponent<typeof import("../components/BranchGlobe.vue")['default']>
export const LazyBranchesSection: LazyComponent<typeof import("../components/BranchesSection.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../components/ContactSection.vue")['default']>
export const LazyFinalCta: LazyComponent<typeof import("../components/FinalCta.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../components/Icon.vue")['default']>
export const LazyLangToggle: LazyComponent<typeof import("../components/LangToggle.vue")['default']>
export const LazyMembershipSection: LazyComponent<typeof import("../components/MembershipSection.vue")['default']>
export const LazyMembershipSelector: LazyComponent<typeof import("../components/MembershipSelector.vue")['default']>
export const LazyMobileNav: LazyComponent<typeof import("../components/MobileNav.vue")['default']>
export const LazyPlanFeatures: LazyComponent<typeof import("../components/PlanFeatures.vue")['default']>
export const LazyPlansCompare: LazyComponent<typeof import("../components/PlansCompare.vue")['default']>
export const LazyPreloader: LazyComponent<typeof import("../components/Preloader.vue")['default']>
export const LazyProfileShell: LazyComponent<typeof import("../components/ProfileShell.vue")['default']>
export const LazySiteFooter: LazyComponent<typeof import("../components/SiteFooter.vue")['default']>
export const LazySiteNav: LazyComponent<typeof import("../components/SiteNav.vue")['default']>
export const LazyWhatsAppFab: LazyComponent<typeof import("../components/WhatsAppFab.vue")['default']>
export const LazyWhySection: LazyComponent<typeof import("../components/WhySection.vue")['default']>
export const LazyWords: LazyComponent<typeof import("../components/Words.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
