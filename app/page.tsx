import { Hero } from "@/components/sections/Hero"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { getFeaturedProjects } from "@/lib/content/projects"

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featured} />
    </>
  )
}
