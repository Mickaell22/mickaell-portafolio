import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { serialize } from "next-mdx-remote/serialize"
import { MdxContent } from "@/components/content/MdxContent"
import { getAllProjects, getProjectBySlug } from "@/lib/content/projects"

const areaLabel: Record<string, string> = {
  fullstack: "Fullstack",
  cyber: "Ciberseguridad",
  ux: "UX",
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProyectoPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const source = await serialize(project.content)

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/proyectos"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Todos los proyectos
      </Link>

      <header className="mb-10">
        <span className="text-xs text-muted-foreground">
          {areaLabel[project.area]} · {project.role}
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <ExternalLink size={14} />
              Ver demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Github size={14} />
              Ver código
            </a>
          )}
        </div>
      </header>

      <hr className="mb-10 border-border/50" />

      <MdxContent source={source} />
    </div>
  )
}
