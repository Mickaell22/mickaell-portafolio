import type { Metadata } from "next"
import { ProjectsFilter } from "@/components/sections/ProjectsFilter"
import { getAllProjects } from "@/lib/content/projects"

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de desarrollo fullstack, ciberseguridad y UX de Mickaell Morán.",
}

export default function ProyectosPage() {
  const projects = getAllProjects()

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Proyectos
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {projects.length} proyectos — sistemas reales, herramientas propias y
          trabajo freelance.
        </p>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  )
}
