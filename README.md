<div align="center">

# mickaell-portafolio

**Portafolio personal y CV dinámico**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)

![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow?style=flat-square)
![Licencia](https://img.shields.io/badge/licencia-MIT-green?style=flat-square)

**[mickaell.novamicktools.com](https://mickaell.novamicktools.com)** — Guayaquil, Ecuador

</div>

---

## Sobre el proyecto

Portafolio personal de **Mickaell Morán**, desarrollador fullstack freelance y estudiante de Ingeniería de Software en la Universidad de Guayaquil.

Construido con Next.js App Router, contenido en MDX versionado en git y CV descargable en PDF. Sin backend, sin base de datos — todo estático y rápido.

**Áreas:**
- Fullstack (principal)
- Ciberseguridad (en formación)
- UX Design (en formación)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 App Router |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 + shadcn/ui |
| Contenido | MDX + next-mdx-remote + gray-matter |
| CV PDF | @react-pdf/renderer |
| Deploy | Railway |
| Dominio | mickaell.novamicktools.com |

---

## Desarrollo local

```bash
git clone https://github.com/Mickaell22/mickaell-portafolio.git
cd mickaell-portafolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Estructura

```
app/                    # rutas Next.js (App Router)
components/
├── ui/                 # componentes shadcn/ui
├── layout/             # nav, footer
├── sections/           # hero, featured projects, etc.
└── content/            # project card, mdx renderer
content/
├── projects/           # case studies en MDX
├── experience/         # experiencia laboral/freelance
├── education/          # universidad y certificaciones
├── skills/             # habilidades por categoría
├── about/              # bio y contacto
└── writeups/           # labs de ciberseguridad
lib/
└── content/            # parsers MDX tipados
types/
└── content.ts          # interfaces TypeScript
```

---

## Roadmap MVP

- [x] Setup base Next.js + shadcn/ui
- [x] Sistema de contenido MDX
- [ ] Layout global (nav, footer, dark/light)
- [ ] Home page (hero + proyectos destacados)
- [ ] Página de proyectos con filtros
- [ ] Página de proyecto individual
- [ ] About + experiencia + skills
- [ ] CV PDF descargable
- [ ] SEO + Open Graph
- [ ] Deploy en Railway

---

<div align="center">

Hecho con Next.js — Mickaell Morán · Guayaquil, Ecuador

</div>
