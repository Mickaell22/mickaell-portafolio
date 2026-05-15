import type { MetadataRoute } from "next"
import { getAllProjects } from "@/lib/content/projects"

const baseUrl = "https://mickaell.novamicktools.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects().map((p) => ({
    url: `${baseUrl}/proyectos/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/proyectos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/sobre-mi`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/cyber`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ...projects,
  ]
}
