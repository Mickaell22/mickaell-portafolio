import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function LocaleNotFound() {
  const t = useTranslations("notFound")

  return (
    <main className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-medium text-muted-foreground">{t("code")}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">{t("title")}</h1>
      <p className="mt-4 text-muted-foreground">{t("text")}</p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium underline-offset-4 hover:underline"
      >
        {t("back")}
      </Link>
    </main>
  )
}
