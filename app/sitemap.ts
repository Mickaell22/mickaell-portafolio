import type { MetadataRoute } from "next"
import { getAllProjects } from "@/lib/content/projects"

const baseUrl = "https://mickaell.novamicktools.com"

// Pairs of [es path, en path] for each static + dynamic route.
function entry(esPath: string, enPath: string, opts: {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
}): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${esPath}`,
    lastModified: new Date(),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
    alternates: {
      languages: {
        es: `${baseUrl}${esPath}`,
        en: `${baseUrl}${enPath}`,
      },
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((p) =>
    entry(`/proyectos/${p.slug}`, `/en/projects/${p.slug}`, {
      changeFrequency: "monthly",
      priority: 0.7,
    })
  )

  return [
    entry("/", "/en", { changeFrequency: "monthly", priority: 1 }),
    entry("/proyectos", "/en/projects", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/sobre-mi", "/en/about", { changeFrequency: "yearly", priority: 0.6 }),
    entry("/cyber", "/en/cyber", { changeFrequency: "monthly", priority: 0.5 }),
    ...projects,
  ]
}
