"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/content/ProjectCard"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/content"

type Filter = "todos" | Project["area"]

const filters: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "fullstack", label: "Fullstack" },
  { value: "cyber", label: "Ciberseguridad" },
  { value: "ux", label: "UX" },
]

interface ProjectsFilterProps {
  projects: Project[]
}

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [active, setActive] = useState<Filter>("todos")

  const filtered =
    active === "todos" ? projects : projects.filter((p) => p.area === active)

  const hasUx = projects.some((p) => p.area === "ux")

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map(({ value, label }) => {
          const disabled = value === "ux" && !hasUx
          return (
            <button
              key={value}
              onClick={() => !disabled && setActive(value)}
              disabled={disabled}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                active === value
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
                disabled && "cursor-not-allowed opacity-40"
              )}
            >
              {label}
              {disabled && (
                <span className="ml-1.5 text-xs opacity-60">próximamente</span>
              )}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No hay proyectos en esta área todavía.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
