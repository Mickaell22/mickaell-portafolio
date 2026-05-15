import type { Metadata } from "next"
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
    </>
  )
}
