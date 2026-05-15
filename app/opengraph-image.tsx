import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Mickaell Morán — Desarrollador Fullstack"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#18181b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid de puntos de fondo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.4,
          }}
        />

        {/* Degradado izquierdo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #18181b 40%, transparent 100%)",
          }}
        />

        {/* Contenido */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", zIndex: 1 }}>
          {/* Badge disponible */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            <span style={{ color: "#a1a1aa", fontSize: "18px" }}>
              Disponible para proyectos
            </span>
          </div>

          {/* Nombre */}
          <span
            style={{
              color: "#fafafa",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Mickaell Morán
          </span>

          {/* Título */}
          <span
            style={{
              color: "#a1a1aa",
              fontSize: "32px",
              marginTop: "16px",
              fontWeight: 500,
            }}
          >
            Desarrollador Fullstack · Guayaquil, Ecuador
          </span>

          {/* Stack */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "40px",
            }}
          >
            {["Python", "React", "Flutter", "Next.js"].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "#27272a",
                  border: "1px solid #3f3f46",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  color: "#a1a1aa",
                  fontSize: "18px",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* URL abajo a la derecha */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "#52525b",
            fontSize: "18px",
            zIndex: 1,
          }}
        >
          mickaell.novamicktools.com
        </div>
      </div>
    ),
    { ...size }
  )
}
