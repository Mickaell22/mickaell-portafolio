import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const baseUrl = "https://mickaell.novamicktools.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Mickaell Morán — Desarrollador Fullstack",
    template: "%s | Mickaell Morán",
  },
  description:
    "Desarrollador fullstack freelance. Especializado en Python, React y Flutter. Guayaquil, Ecuador.",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: baseUrl,
    siteName: "Mickaell Morán",
    title: "Mickaell Morán — Desarrollador Fullstack",
    description:
      "Desarrollador fullstack freelance. Especializado en Python, React y Flutter. Guayaquil, Ecuador.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mickaell Morán" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mickaell Morán — Desarrollador Fullstack",
    description:
      "Desarrollador fullstack freelance. Especializado en Python, React y Flutter. Guayaquil, Ecuador.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
