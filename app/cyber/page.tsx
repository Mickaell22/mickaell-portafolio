import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ciberseguridad",
  description: "Writeups y laboratorios de pentesting de Mickaell Morán.",
  alternates: { canonical: "/cyber" },
}

export default function CyberPage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-medium text-muted-foreground">Proximamente</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        Ciberseguridad
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Writeups y laboratorios de pentesting. Esta seccion esta en construccion.
      </p>
    </main>
  )
}
