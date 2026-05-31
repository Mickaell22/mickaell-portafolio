"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { ProjectCard } from "@/components/content/ProjectCard"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/content"

type Filter = "all" | Project["area"]

const filters: Filter[] = ["all", "fullstack", "cyber", "ux"]

interface ProjectsFilterProps {
  projects: Project[]
}

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const t = useTranslations("projects")
  const [active, setActive] = useState<Filter>("all")

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.area === active)

  const hasUx = projects.some((p) => p.area === "ux")

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((value) => {
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
              {t(`filters.${value}`)}
              {disabled && (
                <span className="ml-1.5 text-xs opacity-60">{t("comingSoon")}</span>
              )}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t("empty")}</p>
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
