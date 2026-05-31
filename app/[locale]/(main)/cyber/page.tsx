import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
  return {
    title: t("cyberTitle"),
    description: t("cyberDescription"),
    alternates: {
      canonical: locale === "es" ? "/cyber" : "/en/cyber",
      languages: { es: "/cyber", en: "/en/cyber" },
    },
  }
}

export default async function CyberPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("cyber")

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-medium text-muted-foreground">{t("badge")}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mt-4 max-w-md text-muted-foreground">{t("text")}</p>
    </main>
  )
}
