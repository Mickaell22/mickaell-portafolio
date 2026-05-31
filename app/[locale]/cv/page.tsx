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

        {/* Cabecera */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            {cv.name}
          </h1>
          <p className="mt-0.5 text-sm font-medium text-zinc-600">{cv.title}</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-zinc-500">
            {cv.contacts.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </header>

        <hr className="border-zinc-300 mb-5" />

        {/* Perfil */}
        <section className="mb-5">
          <h2 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {cv.labels.profile}
          </h2>
          <p>{cv.profile}</p>
        </section>

        {/* Habilidades */}
        <section className="mb-5">
          <h2 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {cv.labels.skills}
          </h2>
          <table className="w-full border-collapse text-xs">
            <tbody>
              {cv.skills.map(([label, skills]) => (
                <tr key={label} className="border-b border-zinc-100 last:border-0">
                  <td className="py-1 pr-4 font-semibold text-zinc-700 w-32 align-top">{label}</td>
                  <td className="py-1 text-zinc-600">{skills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Experiencia */}
        <section className="mb-5">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {cv.labels.experience}
          </h2>
          <div className="space-y-4">
            {cv.experiences.map((exp) => (
              <article key={exp.company}>
                <div className="flex items-baseline justify-between">
                  <span className="font-bold text-zinc-900">{exp.company}</span>
                  <span className="text-xs text-zinc-500">{exp.period}</span>
                </div>
                <p className="text-xs text-zinc-500 mb-1">{exp.role}</p>
                <ul className="space-y-0.5 list-none">
                  {exp.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 text-zinc-400">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section className="mb-5">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {cv.labels.projects}
          </h2>
          <div className="space-y-2">
            {cv.projects.map(({ name, desc, link, stack }) => (
              <div key={name}>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-zinc-900">{name}</span>
                  {link && <span className="text-xs text-zinc-400">{link}</span>}
                </div>
                <p className="text-zinc-600">{desc}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{stack}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Educación y certificaciones en dos columnas */}
        <div className="flex gap-8 mb-5">
          <section className="flex-1">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              {cv.labels.education}
            </h2>
            <div className="space-y-2">
              {cv.education.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex justify-between">
                    <span className="font-semibold text-zinc-900">{edu.degree}</span>
                    <span className="text-xs text-zinc-500">{edu.period}</span>
                  </div>
                  <p className="text-xs text-zinc-500">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex-1">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              {cv.labels.certifications}
            </h2>
            <div className="space-y-2">
              {cv.certifications.map((cert) => (
                <div key={cert.name}>
                  <span className="font-semibold text-zinc-900">{cert.name}</span>
                  <p className="text-xs text-zinc-500">{cert.sub}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Idiomas */}
        <section>
          <h2 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            {cv.labels.languages}
          </h2>
          <p>{cv.languages}</p>
        </section>

      </main>
    </>
  )
}
