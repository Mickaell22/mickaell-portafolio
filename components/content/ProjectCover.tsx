import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Area } from "@/types/content"

interface ProjectCoverProps {
  area: Area
  title: string
  stack: string[]
  image?: string
  className?: string
}

const areaConfig: Record<Area, { gradient: string; accent: string }> = {
  fullstack: {
    gradient: "linear-gradient(135deg, rgb(59 130 246 / 0.18), rgb(6 182 212 / 0.08))",
    accent: "rgb(96 165 250)",
  },
  cyber: {
    gradient: "linear-gradient(135deg, rgb(249 115 22 / 0.18), rgb(239 68 68 / 0.08))",
    accent: "rgb(251 146 60)",
  },
  ux: {
    gradient: "linear-gradient(135deg, rgb(139 92 246 / 0.18), rgb(236 72 153 / 0.08))",
    accent: "rgb(167 139 250)",
  },
}

export function ProjectCover({ area, title, stack, image, className }: ProjectCoverProps) {
  const config = areaConfig[area]

  const initials = title
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase()

  if (image) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden rounded-md", className)}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-border/30",
        className
      )}
      style={{ background: config.gradient }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(255 255 255 / 0.06) 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Large initials watermark */}
      <span
        className="select-none text-5xl font-bold tracking-tight"
        style={{ color: config.accent, opacity: 0.35 }}
      >
        {initials}
      </span>

      {/* Stack badges */}
      <div className="absolute bottom-2.5 left-3 flex flex-wrap gap-1">
        {stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="rounded bg-background/50 px-1.5 py-0.5 text-[10px] text-muted-foreground backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Area color accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${config.accent}40, transparent)` }}
      />
    </div>
  )
}
