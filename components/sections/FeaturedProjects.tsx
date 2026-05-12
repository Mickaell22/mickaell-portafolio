import Link from "next/link"
import { ProjectCard } from "@/components/content/ProjectCard"
import type { Project } from "@/types/content"

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (projects.length === 0) return null

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Proyectos destacados
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Selección de lo que he construido
          </p>
        </div>
        <Link
          href="/proyectos"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Ver todos →
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
