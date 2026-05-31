import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  // Spanish keeps clean URLs (no prefix); English is prefixed with /en.
  localePrefix: "as-needed",
  // Localized pathnames: same internal route, different public URL per locale.
  pathnames: {
    "/": "/",
    "/projects": {
      es: "/proyectos",
      en: "/projects",
    },
    "/projects/[slug]": {
      es: "/proyectos/[slug]",
      en: "/projects/[slug]",
    },
    "/about": {
      es: "/sobre-mi",
      en: "/about",
    },
    "/cyber": "/cyber",
    "/cv": "/cv",
  },
})

export type Locale = (typeof routing.locales)[number]
