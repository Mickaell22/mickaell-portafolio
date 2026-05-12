import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Project } from "@/types/content"

const CONTENT_DIR = path.join(process.cwd(), "content/projects")

export function getAllProjects(): Project[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
      const { data, content } = matter(raw)
      return {
        slug: file.replace(".mdx", ""),
        ...(data as Omit<Project, "slug" | "content">),
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug)
}

export function getProjectsByArea(area: Project["area"]): Project[] {
  return getAllProjects().filter((p) => p.area === area)
}
