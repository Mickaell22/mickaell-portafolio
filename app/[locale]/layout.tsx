import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { routing, type Locale } from "@/i18n/routing"
import "../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const baseUrl = "https://mickaell.novamicktools.com"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
  const home = locale === "es" ? "/" : "/en"

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("siteTitle"),
      template: "%s | Mickaell Morán",
    },
    description: t("siteDescription"),
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_EC" : "en_US",
      url: `${baseUrl}${home}`,
      siteName: "Mickaell Morán",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mickaell Morán" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: home,
      languages: { es: "/", en: "/en" },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
