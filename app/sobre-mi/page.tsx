import type { Metadata } from "next"
import { experiences, education, skillGroups, bio } from "@/lib/content/about"

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Desarrollador fullstack freelance. Python, React, Flutter. Guayaquil, Ecuador.",
}

export default function SobreMiPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight">Mickaell Morán</h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {bio}
        </p>
      </header>

      <section className="mb-16">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Experiencia
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
                        actual
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
          Educación
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
          Skills
        </h2>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex gap-6">
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
