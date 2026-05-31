<div align="center">

# mickaell-portafolio

**Portafolio personal bilingüe (ES/EN) y CV dinámico**

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

Construido con Next.js App Router, contenido en MDX versionado en git, bilingüe (español/inglés) y CV descargable en PDF por idioma. Sin backend, sin base de datos — todo estático y rápido.

**Áreas:**
- Fullstack (principal)
- Ciberseguridad (en formación)
- UX Design (en formación)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 App Router |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 + shadcn/ui |
| i18n | next-intl (español + inglés, rutas localizadas) |
| Contenido | MDX + next-mdx-remote + gray-matter |
| CV PDF | @react-pdf/renderer (un PDF por idioma) |
| Temas | next-themes (modo claro/oscuro) |
| Deploy | Docker + Railway |
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

**Scripts disponibles:**

```bash
npm run dev          # servidor de desarrollo
npm run build        # build de producción
npm run start        # servidor de producción
npm run lint         # linter
npm run generate:cv  # regenera los PDFs del CV (CV_es.pdf y CV_en.pdf)
```

> El CV se sirve como PDF estático desde `public/`. Tras editar el contenido del CV
> en `lib/cv/content.ts`, ejecuta `npm run generate:cv` para regenerar ambos archivos.

---

## Idiomas (i18n)

El sitio está disponible en **español** (por defecto) e **inglés**, con un selector
ES/EN en el navbar. El español usa rutas limpias y el inglés va bajo `/en`, con
pathnames localizados:

| Español | Inglés |
| --- | --- |
| `/` | `/en` |
| `/proyectos` | `/en/projects` |
| `/sobre-mi` | `/en/about` |
| `/cyber` | `/en/cyber` |
| `/cv` | `/en/cv` |

- Los textos de UI viven en `messages/es.json` y `messages/en.json`.
- Los datos del *about* (bio, experiencia, educación, skills) están en `lib/content/about.ts`.
- Los proyectos MDX tienen una versión por idioma en `content/projects/{es,en}/`, con
  *fallback* a español si una traducción falta.

---

## Estructura

```
app/
├── [locale]/             # rutas por idioma (es | en)
│   ├── (main)/           # layout con navbar/footer
│   │   ├── page.tsx      # home
│   │   ├── projects/     # listado + detalle [slug]
│   │   ├── about/        # experiencia, educación, skills
│   │   └── cyber/        # writeups (próximamente)
│   └── cv/               # CV en pantalla (botón al PDF del idioma activo)
i18n/                     # routing, navigation y request config de next-intl
middleware.ts             # detección/redirección de idioma
components/
├── ui/                   # componentes shadcn/ui
├── layout/               # nav, footer, theme provider, language switcher
├── sections/             # hero, proyectos destacados, filtros
└── content/              # tarjeta de proyecto, mdx renderer
lib/
├── content/              # loaders de proyectos y datos del about (bilingüe)
└── cv/                   # contenido del CV (bilingüe) + documento PDF
content/
└── projects/{es,en}/     # case studies en MDX por idioma
messages/                 # traducciones de UI (es.json, en.json)
scripts/
└── generate-cv.tsx       # genera public/CV_es.pdf y public/CV_en.pdf
public/                   # assets estáticos + CV_es.pdf / CV_en.pdf
types/
└── content.ts            # interfaces TypeScript
```

---

## Roadmap MVP

- [x] Setup base Next.js + shadcn/ui
- [x] Sistema de contenido MDX
- [x] Layout global (nav, footer, dark/light)
- [x] Home page (hero + proyectos destacados)
- [x] Página de proyectos con filtros
- [x] Página de proyecto individual
- [x] About + experiencia + skills
- [x] CV PDF descargable
- [x] SEO + Open Graph
- [x] Deploy en Railway
- [x] Internacionalización ES/EN (next-intl) + CV bilingüe

---

<div align="center">

Hecho con Next.js — Mickaell Morán · Guayaquil, Ecuador

</div>
