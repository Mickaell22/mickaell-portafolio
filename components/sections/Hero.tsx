import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {t("available")}
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Mickaell Morán
          </h1>

          <p className="mt-3 text-xl font-medium text-muted-foreground">
            {t("role")}
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {t.rich("intro", {
              b: (chunks) => <span className="text-foreground">{chunks}</span>,
            })}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex h-9 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t("viewProjects")}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {t("aboutMe")}
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/mickaell.png"
            alt="Mickaell Morán"
            width={180}
            height={180}
            className="rounded-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  )
}
