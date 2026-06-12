"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ProjectCover } from "@/components/content/ProjectCover"
import type { Area } from "@/types/content"

interface ProjectGalleryProps {
  images: string[]
  title: string
  area: Area
  stack: string[]
  className?: string
}

export function ProjectGallery({ images, title, area, stack, className }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) {
    return <ProjectCover area={area} title={title} stack={stack} className={className} />
  }

  if (images.length === 1) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden rounded-md bg-muted/40", className)}>
        <Image
          src={images[0]}
          alt={`${title} - screenshot`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    )
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className={cn("group relative aspect-video w-full overflow-hidden rounded-md bg-muted/40", className)}>
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <Image
            src={src}
            alt={`${title} - pantalla ${i + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90"
        aria-label="Anterior"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90"
        aria-label="Siguiente"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === current
                ? "w-4 bg-foreground/90"
                : "w-1.5 bg-foreground/30 hover:bg-foreground/60"
            )}
            aria-label={`Ir a pantalla ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute right-2.5 top-2.5 rounded bg-background/60 px-1.5 py-0.5 text-[10px] text-foreground/80 backdrop-blur-sm">
        {current + 1} / {images.length}
      </span>
    </div>
  )
}
