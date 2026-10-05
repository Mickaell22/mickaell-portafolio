import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { ProjectCard } from "@/components/content/ProjectCard"
import type { Project } from "@/types/content"

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const t = useTranslations("featured")

  if (projects.length === 0) return null

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {t("title")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {t("viewAll")}
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
