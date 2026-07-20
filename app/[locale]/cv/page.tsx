import { Download } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getCvContent } from "@/lib/cv/content"
import type { Locale } from "@/i18n/routing"

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("cv")
  const cv = getCvContent(locale)

  return (
    <>
      <div className="fixed right-6 top-6 z-50">
        <a
          href={`/${cv.pdfFile}`}
          download
          className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-700 transition-colors"
        >
          <Download size={14} />
          {t("download")}
        </a>
      </div>

      <main className="min-h-screen bg-white mx-auto max-w-[780px] px-10 py-12 text-[13px] leading-relaxed text-zinc-800 font-sans">

        {/* Cabecera centrada (estilo Harvard) */}
        <header className="mb-5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            {cv.name}
          </h1>
          <p className="mt-1.5 text-xs text-zinc-600">
            {cv.contacts.join("   •   ")}
          </p>
        </header>

        <hr className="border-zinc-900 mb-5" />

        {/* Educación */}
        <Section title={cv.labels.education}>
          <div className="space-y-3">
            {cv.education.map((edu) => (
              <div key={edu.degree}>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-zinc-900">{edu.institution}</span>
                  <span className="text-xs text-zinc-500">{edu.location}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="italic text-zinc-700">{edu.degree}</span>
                  <span className="text-xs text-zinc-500">{edu.period}</span>
                </div>
                {edu.note && <p className="text-xs text-zinc-500">{edu.note}</p>}
              </div>
            ))}
          </div>
        </Section>

        {/* Experiencia */}
        <Section title={cv.labels.experience}>
          <div className="space-y-4">
            {cv.experiences.map((exp) => (
              <article key={exp.company}>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-zinc-900">{exp.company}</span>
                  <span className="text-xs text-zinc-500">{exp.location}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="italic text-zinc-700">{exp.role}</span>
                  <span className="text-xs text-zinc-500">{exp.period}</span>
                </div>
                <ul className="mt-1 space-y-0.5 list-none">
                  {exp.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 text-zinc-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Proyectos */}
        <Section title={cv.labels.projects}>
          <div className="space-y-4">
            {cv.projects.map((p) => (
              <div key={p.name}>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-zinc-900">{p.name}</span>
                  <span className="text-xs text-zinc-400">{p.link}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="italic text-zinc-700">{p.tagline}</span>
                  <span className="text-xs text-zinc-400">{p.stack}</span>
                </div>
                <ul className="mt-1 space-y-0.5 list-none">
                  {p.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 text-zinc-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Habilidades (incluye idiomas) */}
        <Section title={cv.labels.skills}>
          <table className="w-full border-collapse text-xs">
            <tbody>
              {cv.skills.map(([label, skills]) => (
                <tr key={label} className="border-b border-zinc-100 last:border-0">
                  <td className="py-1 pr-4 font-semibold text-zinc-700 w-36 align-top">{label}</td>
                  <td className="py-1 text-zinc-600">{skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

      </main>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <h2 className="mb-2 border-b border-zinc-900 pb-1 text-sm font-bold text-zinc-900">
        {title}
      </h2>
      {children}
    </section>
  )
}
