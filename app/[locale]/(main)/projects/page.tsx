import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ProjectsFilter } from "@/components/sections/ProjectsFilter"
import { getAllProjects } from "@/lib/content/projects"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
  return {
    title: t("projectsTitle"),
    description: t("projectsDescription"),
    alternates: {
      canonical: locale === "es" ? "/proyectos" : "/en/projects",
      languages: { es: "/proyectos", en: "/en/projects" },
    },
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("projects")
  const projects = getAllProjects(locale)

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("count", { count: projects.length })}
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  )
}
