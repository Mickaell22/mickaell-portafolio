"use client"

import { useLocale, useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { useTransition } from "react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const t = useTranslations("lang")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  function switchTo(next: string) {
    if (next === locale) return
    startTransition(() => {
      // @ts-expect-error -- params shape is route-dependent but valid here
      router.replace({ pathname, params }, { locale: next })
    })
  }

  return (
    <div
      className="flex items-center rounded-md border border-border/60 p-0.5"
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchTo(loc)}
          disabled={isPending}
          aria-current={loc === locale}
          className={cn(
            "rounded px-2 py-0.5 text-xs font-medium uppercase transition-colors",
            loc === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  )
}
