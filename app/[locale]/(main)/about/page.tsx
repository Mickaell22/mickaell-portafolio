import type { Metadata } from "next"
import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getAboutContent } from "@/lib/content/about"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: locale === "es" ? "/sobre-mi" : "/en/about",
      languages: { es: "/sobre-mi", en: "/en/about" },
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("about")
  const { bio, experiences, education, skillGroups } = getAboutContent(locale)

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-16 flex items-start gap-6">
        <Image
          src="/mickaell.png"
          alt="Mickaell Morán"
          width={88}
          height={88}
          className="rounded-full object-cover object-top shrink-0"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mickaell Morán</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {bio}
          </p>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t("experience")}
        </h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <article key={exp.company}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {t("current")}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.summary}
              </p>
              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="shrink-0">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t("education")}
        </h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.degree} className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                {edu.note && (
                  <p className="text-xs text-muted-foreground">{edu.note}</p>
                )}
              </div>
              <span className="shrink-0 text-sm text-muted-foreground">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t("skills")}
        </h2>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <span className="w-28 shrink-0 text-sm text-muted-foreground">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
