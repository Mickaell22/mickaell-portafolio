"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react"
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
  const [lightbox, setLightbox] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const drag = useRef({ active: false, startX: 0, startY: 0, panX: 0, panY: 0 })
  const lightboxRef = useRef<HTMLDivElement>(null)

  const resetView = () => { setZoom(1); setPan({ x: 0, y: 0 }) }
  const openLightbox = () => { setLightbox(true); resetView() }
  const closeLightbox = useCallback(() => { setLightbox(false); resetView() }, [])

  const goPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrent((c) => (c - 1 + images.length) % images.length)
    resetView()
  }, [images.length])

  const goNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    setCurrent((c) => (c + 1) % images.length)
    resetView()
  }, [images.length])

  const zoomIn = (e?: React.MouseEvent) => { e?.stopPropagation(); setZoom(z => Math.min(4, z + 0.5)) }
  const zoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    setZoom(z => { const n = Math.max(1, z - 0.5); if (n === 1) setPan({ x: 0, y: 0 }); return n })
  }

  // Keyboard
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft" && images.length > 1) goPrev()
      if (e.key === "ArrowRight" && images.length > 1) goNext()
      if (e.key === "+" || e.key === "=") setZoom(z => Math.min(4, z + 0.5))
      if (e.key === "-") setZoom(z => { const n = Math.max(1, z - 0.5); if (n === 1) setPan({ x: 0, y: 0 }); return n })
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox, closeLightbox, goPrev, goNext, images.length])

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightbox])

  // Wheel zoom (passive: false required)
  useEffect(() => {
    const el = lightboxRef.current
    if (!el || !lightbox) return
    const handler = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -0.15 : 0.15
      setZoom(z => { const n = Math.min(4, Math.max(1, z + delta)); if (n <= 1) setPan({ x: 0, y: 0 }); return n })
    }
    el.addEventListener("wheel", handler, { passive: false })
    return () => el.removeEventListener("wheel", handler)
  }, [lightbox])

  // Double-click to toggle zoom
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (zoom > 1) { resetView() } else { setZoom(2) }
  }

  // Drag to pan
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { active: true, startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y }
  }
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return
    setPan({
      x: drag.current.panX + (e.clientX - drag.current.startX),
      y: drag.current.panY + (e.clientY - drag.current.startY),
    })
  }
  const handlePointerUp = () => { drag.current.active = false }

  if (!images || images.length === 0) {
    return <ProjectCover area={area} title={title} stack={stack} className={className} />
  }

  const carouselPrev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length) }
  const carouselNext = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length) }

  const ExpandBtn = () => (
    <button
      onClick={(e) => { e.stopPropagation(); openLightbox() }}
      className="absolute bottom-2 right-2 z-10 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90"
      aria-label="Ver en grande"
    >
      <Maximize2 size={13} />
    </button>
  )

  return (
    <>
      {/* ── Carousel ── */}
      {images.length === 1 ? (
        <div
          onClick={openLightbox}
          className={cn("group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-md bg-muted/40", className)}
        >
          <Image
            src={images[0]}
            alt={`${title} - screenshot`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            // El optimizador convierte los GIF a imagen estatica y se pierde
            // la animacion, que en un demo es justamente lo que se quiere ver.
            unoptimized={images[0].endsWith(".gif")}
          />
          <ExpandBtn />
        </div>
      ) : (
        <div
          onClick={openLightbox}
          className={cn("group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-md bg-muted/40", className)}
        >
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
                unoptimized={src.endsWith(".gif")}
              />
            </div>
          ))}

          <button onClick={carouselPrev} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90" aria-label="Anterior">
            <ChevronLeft size={16} />
          </button>
          <button onClick={carouselNext} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-background/90" aria-label="Siguiente">
            <ChevronRight size={16} />
          </button>

          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={cn("h-1.5 rounded-full transition-all", i === current ? "w-4 bg-foreground/90" : "w-1.5 bg-foreground/30 hover:bg-foreground/60")}
                aria-label={`Ir a pantalla ${i + 1}`}
              />
            ))}
          </div>

          <span className="absolute right-2.5 top-2.5 z-10 rounded bg-background/60 px-1.5 py-0.5 text-[10px] text-foreground/80 backdrop-blur-sm">
            {current + 1} / {images.length}
          </span>

          <ExpandBtn />
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Image area */}
          <div
            ref={lightboxRef}
            className="relative flex h-full w-full select-none items-center justify-center overflow-hidden"
            style={{ cursor: zoom > 1 ? "grab" : "zoom-in" }}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={handleDoubleClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[current]}
              alt={`${title} - pantalla ${current + 1}`}
              draggable={false}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: "center center",
                transition: drag.current.active ? "none" : "transform 0.12s ease",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Controls top-right */}
          <div className="absolute right-3 top-3 flex items-center gap-1.5">
            {zoom !== 1 && (
              <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 backdrop-blur-sm">
                {Math.round(zoom * 100)}%
              </span>
            )}
            <button onClick={zoomOut} disabled={zoom <= 1} className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 disabled:opacity-30" aria-label="Zoom out">
              <ZoomOut size={15} />
            </button>
            <button onClick={zoomIn} disabled={zoom >= 4} className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 disabled:opacity-30" aria-label="Zoom in">
              <ZoomIn size={15} />
            </button>
            <button onClick={closeLightbox} className="rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20" aria-label="Cerrar">
              <X size={15} />
            </button>
          </div>

          {/* Prev / Next in lightbox */}
          {images.length > 1 && (
            <>
              <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20" aria-label="Anterior">
                <ChevronLeft size={20} />
              </button>
              <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/20" aria-label="Siguiente">
                <ChevronRight size={20} />
              </button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-white/10 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                {current + 1} / {images.length}
              </span>
            </>
          )}

          {/* Hint bottom-left */}
          <span className="absolute bottom-4 left-4 text-[11px] text-white/30">
            scroll para zoom · doble clic para alternar · ESC para cerrar
          </span>
        </div>
      )}
    </>
  )
}
