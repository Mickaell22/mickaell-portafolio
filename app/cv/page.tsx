"use client"

import { Printer } from "lucide-react"

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          @page { margin: 1.5cm 2cm; }
        }
      `}</style>

      <div className="no-print fixed right-6 top-6 z-50">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-700 transition-colors"
        >
          <Printer size={14} />
          Descargar PDF
        </button>
      </div>

      <main className="mx-auto max-w-[780px] px-10 py-12 text-[13px] leading-relaxed text-zinc-800 font-sans">

        {/* Cabecera */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Mickaell Morán Vera
          </h1>
          <p className="mt-0.5 text-sm font-medium text-zinc-600">
            Desarrollador Fullstack
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-zinc-500">
            <span>mickaelmoranvera03@gmail.com</span>
            <span>+593 983777036</span>
            <span>Guayaquil, Ecuador</span>
            <span>github.com/Mickaell22</span>
            <span>linkedin.com/in/mickaell-moran-vera-ba421a2a3</span>
            <span>mickaell.novamicktools.com</span>
          </div>
        </header>

        <hr className="border-zinc-300 mb-5" />

        {/* Perfil */}
        <section className="mb-5">
          <h2 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Perfil
          </h2>
          <p>
            Desarrollador fullstack freelance con proyectos reales en producción: SaaS gastronómico
            con IA multitenancy, sistema clínico con cliente pagado, simulador de exámenes en uso
            activo en la Universidad de Guayaquil. Experiencia en el ciclo completo —
            backend, frontend, mobile, deploy y automatización. Estudiante de 9no semestre de
            Ingeniería de Software en la Universidad de Guayaquil.
          </p>
        </section>

        {/* Habilidades */}
        <section className="mb-5">
          <h2 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Habilidades técnicas
          </h2>
          <table className="w-full border-collapse text-xs">
            <tbody>
              {[
                ["Backend", "Python, Django, FastAPI, Node.js, Express, C#, Java"],
                ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, Vite"],
                ["Mobile", "Flutter, Dart, Riverpod, Firebase"],
                ["Bases de datos", "PostgreSQL, SQLAlchemy, Firebase Firestore, MySQL"],
                ["DevOps / Tools", "Git, Docker, Linux, Railway, VPS, Cloudinary"],
                ["Ciberseguridad", "Kali Linux, Metasploit, Nmap, Wireshark"],
              ].map(([label, skills]) => (
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
            Experiencia
          </h2>
          <div className="space-y-4">

            <article>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-zinc-900">EcuaInventario</span>
                <span className="text-xs text-zinc-500">2024 — actual</span>
              </div>
              <p className="text-xs text-zinc-500 mb-1">Co-fundador · Desarrollador fullstack · Guayaquil</p>
              <ul className="space-y-0.5 list-none">
                {[
                  "SaaS gastronómico multitenancy con IA integrada, co-desarrollado con socio empresarial.",
                  "Backend en Django 5 + DRF + PostgreSQL con arquitectura multitenancy — cada tenant con datos completamente aislados.",
                  "Chat IA que interpreta texto, audio y fotos de facturas usando Claude Haiku (Anthropic) + Whisper (OpenAI).",
                  "App móvil en Flutter + Riverpod para gestión de inventario y pedidos en tiempo real.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-zinc-400">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-zinc-900">Freelance</span>
                <span className="text-xs text-zinc-500">2023 — actual</span>
              </div>
              <p className="text-xs text-zinc-500 mb-1">Desarrollador fullstack · Remoto, Guayaquil</p>
              <ul className="space-y-0.5 list-none">
                {[
                  "Centro Médico Tía Glenda: sistema clínico integral con 190+ componentes en React + MUI. Proyecto pagado, en uso real.",
                  "Facturador: sistema de facturación y gestión de pedidos propio en producción en novamicktools.com (FastAPI + React + PostgreSQL).",
                  "SimuladorPreguntas: plataforma de simulacro de exámenes con anticheating, roles y exportación XML/Excel. En producción en la Universidad de Guayaquil.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-zinc-400">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-zinc-900">Área de Nivelación — Universidad de Guayaquil</span>
                <span className="text-xs text-zinc-500">2025 · 6 meses</span>
              </div>
              <p className="text-xs text-zinc-500 mb-1">Practicante · Desarrollo de software</p>
              <ul className="space-y-0.5 list-none">
                {[
                  "Lideré el desarrollo completo del SimuladorPreguntas: frontend, backend, pruebas y deploy en VPS institucional.",
                  "Script de renombrado masivo: procesé en 5 minutos lo que tomaba una tarde completa por grupo (70+ archivos).",
                  "Script de red DHCP: automaticé el reset de conectividad, eliminando la dependencia de soporte técnico para el área.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0 text-zinc-400">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

          </div>
        </section>

        {/* Proyectos */}
        <section className="mb-5">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Proyectos destacados
          </h2>
          <div className="space-y-2">
            {[
              {
                name: "mcp-context-server",
                desc: "Servidor MCP propio que indexa repositorios de GitHub con embeddings en PostgreSQL y los consulta por lenguaje natural. DeepSeek Flash como preprocesador para comprimir contexto. Operación segura vía Tailscale. En distribución pública.",
                link: "github.com/Mickaell22/mcp-context-server",
                stack: "Python · PostgreSQL · DeepSeek · Tailscale",
              },
              {
                name: "SimuladorPreguntas",
                desc: "Plataforma de simulacro de exámenes en producción en la Universidad de Guayaquil. Roles admin/estudiante, anticheating, importación masiva desde Excel/XML, historial de resultados.",
                link: "github.com/Mickaell22/SimuladorPreguntasBackend",
                stack: "Node.js · Express · PostgreSQL · React · Docker",
              },
              {
                name: "Facturador",
                desc: "Sistema de facturación, pedidos y estadísticas propio en uso activo. Soft delete en todas las entidades, imágenes en Cloudinary, panel de ingresos por período.",
                link: "novamicktools.com",
                stack: "FastAPI · React · PostgreSQL · Cloudinary",
              },
              {
                name: "EcuaInventario",
                desc: "SaaS gastronómico multitenancy con chat IA para registrar movimientos de inventario por texto, audio y foto de factura. Casi en producción.",
                link: "",
                stack: "Django · Flutter · PostgreSQL · Claude API · Whisper",
              },
            ].map(({ name, desc, link, stack }) => (
              <div key={name}>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-zinc-900">{name}</span>
                  {link && (
                    <span className="text-xs text-zinc-400">{link}</span>
                  )}
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
              Educación
            </h2>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-900">Ingeniería de Software</span>
                  <span className="text-xs text-zinc-500">2021 — actual</span>
                </div>
                <p className="text-xs text-zinc-500">Universidad de Guayaquil · 9no semestre</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold text-zinc-900">Bachiller en Ciencias</span>
                  <span className="text-xs text-zinc-500">2015 — 2020</span>
                </div>
                <p className="text-xs text-zinc-500">Unidad Educativa Leonidas Gracia</p>
              </div>
            </div>
          </section>

          <section className="flex-1">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
              Certificaciones
            </h2>
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-zinc-900">Certified Ethical Hacker (CEH)</span>
                <p className="text-xs text-zinc-500">Hacker Mentor · Marzo 2023</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-900">Google Ciberseguridad</span>
                <p className="text-xs text-zinc-500">Coursera · Foundations completado, 2025</p>
              </div>
            </div>
          </section>
        </div>

        {/* Idiomas */}
        <section>
          <h2 className="mb-1.5 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Idiomas
          </h2>
          <p>Español: Nativo &nbsp;·&nbsp; Inglés: Intermedio (lectura avanzada)</p>
        </section>

      </main>
    </>
  )
}
