import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/content"

const areaLabel: Record<Project["area"], string> = {
  fullstack: "Fullstack",
  cyber: "Ciberseguridad",
  ux: "UX",
}

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={cn(
        "group flex flex-col gap-4 rounded-lg border border-border/50 bg-card p-5 transition-colors hover:border-border hover:bg-muted/30",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs text-muted-foreground">
            {areaLabel[project.area]}
          </span>
          <h3 className="mt-1 font-medium text-foreground group-hover:text-foreground">
            {project.title}
          </h3>
        </div>
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}
