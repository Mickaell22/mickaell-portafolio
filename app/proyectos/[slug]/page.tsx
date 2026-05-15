import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ExternalLink, GitFork } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
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
  const ogImage = project.image || "/og.png"
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/proyectos/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/proyectos/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogImage],
    },
  }
}

export default async function ProyectoPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

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
              <GitFork size={14} />
              Ver código
            </a>
          )}
        </div>
      </header>

      <hr className="mb-10 border-border/50" />

      <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border">
        <MDXRemote source={project.content} />
      </div>
    </div>
  )
}
