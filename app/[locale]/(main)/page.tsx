import { Mail } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/sections/Hero"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { getFeaturedProjects } from "@/lib/content/projects"
import type { Locale } from "@/i18n/routing"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("home")
  const featured = getFeaturedProjects(locale)

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featured} />
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-xl border border-border/50 bg-muted/20 px-8 py-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            {t("ctaText")}
          </p>
          <a
            href="mailto:mickaelmoranvera03@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail size={15} />
            {t("ctaButton")}
          </a>
        </div>
      </section>
    </>
  )
}
