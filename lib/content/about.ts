import type { Locale } from "@/i18n/routing"

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  current: boolean
  summary: string
  highlights: string[]
  stack: string[]
}

export interface EducationEntry {
  institution: string
  degree: string
  period: string
  current: boolean
  note?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

interface AboutContent {
  bio: string
  experiences: ExperienceEntry[]
  education: EducationEntry[]
  skillGroups: SkillGroup[]
}

const es: AboutContent = {
  bio:
    "Desarrollador fullstack freelance con proyectos reales en producción: sistemas clínicos, " +
    "SaaS gastronómico con IA, simuladores de examen universitarios. " +
    "Estudiante de 9no semestre de Ingeniería de Software en la Universidad de Guayaquil. " +
    "Trabajo con Python, React y Flutter, y me estoy especializando en ciberseguridad.",
  experiences: [
    {
      company: "EcuaInventario",
      role: "Co-fundador · Desarrollador fullstack",
      period: "Feb. 2026 — actual",
      current: true,
      summary:
        "SaaS gastronómico multitenancy con IA integrada. Co-propietario junto a mi jefe. Casi en producción.",
      highlights: [
        "Backend en Django 5 + DRF + PostgreSQL con arquitectura multitenancy",
        "Chat IA con Claude Haiku y transcripción de pedidos por voz con Whisper",
        "App móvil en Flutter + Riverpod para gestión de inventario y pedidos en tiempo real",
      ],
      stack: ["Django", "DRF", "PostgreSQL", "Flutter", "Riverpod", "Claude API", "Whisper"],
    },
    {
      company: "Freelance",
      role: "Desarrollador fullstack",
      period: "Jul. 2025 — actual",
      current: true,
      summary:
        "Proyectos para clientes reales: sistema clínico integral, facturador propio en producción, simulador de exámenes universitario.",
      highlights: [
        "Centro Médico Tía Glenda: sistema clínico con 190+ componentes en React + MUI, cliente pagado",
        "Facturador: sistema de facturación y pedidos en producción en novamicktools.com",
        "SimuladorPreguntas: anticheating, roles, exportación XML/Excel, deploy en VPS universitario",
      ],
      stack: ["React", "FastAPI", "Python", "PostgreSQL", "Flutter", "Firebase", "Vite", "Tailwind CSS"],
    },
    {
      company: "Área de Nivelación — Universidad de Guayaquil",
      role: "Practicante · Desarrollo de software",
      period: "Feb. 2026 · 6 meses",
      current: false,
      summary:
        "Lideré el desarrollo del SimuladorPreguntas y automaticé procesos internos con scripts que redujeron horas de trabajo manual a minutos.",
      highlights: [
        "Lideré frontend, backend, pruebas y deploy en VPS del SimuladorPreguntas",
        "Script de renombrado masivo: procesé en 5 minutos lo que tomaba a un compañero una tarde completa por grupo (70+ archivos)",
        "Script de red DHCP: automaticé el reset de conectividad, eliminando la dependencia de soporte técnico para todo el área",
      ],
      stack: ["Node.js", "Express", "React", "PostgreSQL", "Docker", "Python", "Linux"],
    },
  ],
  education: [
    {
      institution: "Universidad de Guayaquil",
      degree: "Ingeniería de Software",
      period: "2021 — actual",
      current: true,
      note: "9no semestre",
    },
    {
      institution: "Google / Coursera",
      degree: "Certificado de Ciberseguridad",
      period: "2026 — en curso",
      current: true,
      note: "1 de 4 cursos (Foundations completado)",
    },
    {
      institution: "Google / Coursera",
      degree: "Certificado de UX Design",
      period: "2026 — en curso",
      current: true,
      note: "2 de 8 cursos",
    },
  ],
  skillGroups: [
    { label: "Backend", skills: ["Python", "Django", "FastAPI", "Node.js", "Express", "C#", "Java"] },
    { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
    { label: "Mobile", skills: ["Flutter", "Dart", "Riverpod", "Firebase"] },
    { label: "Bases de datos", skills: ["PostgreSQL", "SQLAlchemy", "Alembic", "Firebase Firestore", "SQLite"] },
    { label: "Herramientas", skills: ["Git", "Docker", "Linux", "VPS", "Railway", "Cloudinary", "Postman"] },
    { label: "Ciberseguridad", skills: ["Kali Linux", "Metasploit", "Nmap", "Wireshark"] },
  ],
}

const en: AboutContent = {
  bio:
    "Freelance fullstack developer with real projects in production: clinical systems, " +
    "an AI-powered restaurant SaaS, and university exam simulators. " +
    "Ninth-semester Software Engineering student at the University of Guayaquil. " +
    "I work with Python, React and Flutter, and I'm specializing in cybersecurity.",
  experiences: [
    {
      company: "EcuaInventario",
      role: "Co-founder · Fullstack Developer",
      period: "Feb 2026 — present",
      current: true,
      summary:
        "Multitenant restaurant SaaS with integrated AI. Co-owner alongside my boss. Almost in production.",
      highlights: [
        "Backend in Django 5 + DRF + PostgreSQL with a multitenant architecture",
        "AI chat with Claude Haiku and voice order transcription with Whisper",
        "Flutter + Riverpod mobile app for real-time inventory and order management",
      ],
      stack: ["Django", "DRF", "PostgreSQL", "Flutter", "Riverpod", "Claude API", "Whisper"],
    },
    {
      company: "Freelance",
      role: "Fullstack Developer",
      period: "Jul 2025 — present",
      current: true,
      summary:
        "Projects for real clients: a complete clinical system, my own invoicing tool in production, and a university exam simulator.",
      highlights: [
        "Centro Médico Tía Glenda: clinical system with 190+ components in React + MUI, paid client",
        "Facturador: invoicing and order system in production at novamicktools.com",
        "SimuladorPreguntas: anti-cheating, roles, XML/Excel export, deployed on a university VPS",
      ],
      stack: ["React", "FastAPI", "Python", "PostgreSQL", "Flutter", "Firebase", "Vite", "Tailwind CSS"],
    },
    {
      company: "Leveling Department — University of Guayaquil",
      role: "Intern · Software Development",
      period: "Feb 2026 · 6 months",
      current: false,
      summary:
        "Led the development of SimuladorPreguntas and automated internal processes with scripts that cut hours of manual work down to minutes.",
      highlights: [
        "Led frontend, backend, testing and VPS deployment of SimuladorPreguntas",
        "Bulk renaming script: processed in 5 minutes what took a colleague a full afternoon per group (70+ files)",
        "DHCP network script: automated connectivity resets, removing the department's dependency on tech support",
      ],
      stack: ["Node.js", "Express", "React", "PostgreSQL", "Docker", "Python", "Linux"],
    },
  ],
  education: [
    {
      institution: "University of Guayaquil",
      degree: "Software Engineering",
      period: "2021 — present",
      current: true,
      note: "9th semester",
    },
    {
      institution: "Google / Coursera",
      degree: "Cybersecurity Certificate",
      period: "2026 — in progress",
      current: true,
      note: "1 of 4 courses (Foundations completed)",
    },
    {
      institution: "Google / Coursera",
      degree: "UX Design Certificate",
      period: "2026 — in progress",
      current: true,
      note: "2 of 8 courses",
    },
  ],
  skillGroups: [
    { label: "Backend", skills: ["Python", "Django", "FastAPI", "Node.js", "Express", "C#", "Java"] },
    { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
    { label: "Mobile", skills: ["Flutter", "Dart", "Riverpod", "Firebase"] },
    { label: "Databases", skills: ["PostgreSQL", "SQLAlchemy", "Alembic", "Firebase Firestore", "SQLite"] },
    { label: "Tools", skills: ["Git", "Docker", "Linux", "VPS", "Railway", "Cloudinary", "Postman"] },
    { label: "Cybersecurity", skills: ["Kali Linux", "Metasploit", "Nmap", "Wireshark"] },
  ],
}

const content: Record<Locale, AboutContent> = { es, en }

export function getAboutContent(locale: Locale): AboutContent {
  return content[locale] ?? content.es
}
