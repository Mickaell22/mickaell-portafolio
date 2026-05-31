import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Project } from "@/types/content"
import { routing, type Locale } from "@/i18n/routing"

const PROJECTS_DIR = path.join(process.cwd(), "content/projects")

function localeDir(locale: Locale): string {
  return path.join(PROJECTS_DIR, locale)
}

function parseFile(dir: string, file: string): Project {
  const raw = fs.readFileSync(path.join(dir, file), "utf-8")
  const { data, content } = matter(raw)
  return {
    slug: file.replace(".mdx", ""),
    ...(data as Omit<Project, "slug" | "content">),
    content,
  }
}

// Loads projects for a locale, falling back to the default locale for any
// slug that hasn't been translated yet.
export function getAllProjects(locale: Locale = routing.defaultLocale): Project[] {
  const fallbackDir = localeDir(routing.defaultLocale)
  if (!fs.existsSync(fallbackDir)) return []

  const dir = localeDir(locale)
  const slugs = fs
    .readdirSync(fallbackDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""))

  return slugs
    .map((slug) => {
      const localized = path.join(dir, `${slug}.mdx`)
      const useDir = fs.existsSync(localized) ? dir : fallbackDir
      return parseFile(useDir, `${slug}.mdx`)
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedProjects(locale: Locale = routing.defaultLocale): Project[] {
  return getAllProjects(locale).filter((p) => p.featured)
}

export function getProjectBySlug(
  slug: string,
  locale: Locale = routing.defaultLocale,
): Project | undefined {
  return getAllProjects(locale).find((p) => p.slug === slug)
}
