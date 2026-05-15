import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CV — Mickaell Morán",
  robots: { index: false, follow: false },
}

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {children}
    </div>
  )
}
