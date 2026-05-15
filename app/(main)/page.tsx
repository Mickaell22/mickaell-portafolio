import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { Hero } from "@/components/sections/Hero"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { getFeaturedProjects } from "@/lib/content/projects"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featured} />
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-xl border border-border/50 bg-muted/20 px-8 py-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Trabajemos juntos
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            Disponible para proyectos freelance y oportunidades de trabajo.
            Si tienes algo en mente, escríbeme.
          </p>
          <a
            href="mailto:mickaelmoranvera03@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail size={15} />
            Contáctame
          </a>
        </div>
      </section>
    </>
  )
}
