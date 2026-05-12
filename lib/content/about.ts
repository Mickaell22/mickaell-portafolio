export const bio =
  "Desarrollador fullstack freelance con proyectos reales en producción: sistemas clínicos, " +
  "SaaS gastronómico con IA, simuladores de examen universitarios. " +
  "Estudiante de 9no semestre de Ingeniería de Software en la Universidad de Guayaquil. " +
  "Trabajo con Python, React y Flutter, y me estoy especializando en ciberseguridad."

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

export const experiences: ExperienceEntry[] = [
  {
    company: "EcuaInventario",
    role: "Co-fundador · Desarrollador fullstack",
    period: "2024 — actual",
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
    period: "2023 — actual",
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
    period: "2025 · 6 meses",
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
]

export const education: EducationEntry[] = [
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
    period: "2025",
    current: false,
    note: "Foundations completado",
  },
  {
    institution: "Google / Coursera",
    degree: "Certificado de UX Design",
    period: "2025 — en curso",
    current: true,
    note: "1 de 8 cursos",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    skills: ["Python", "Django", "FastAPI", "Node.js", "Express", "C#", "Java"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    label: "Mobile",
    skills: ["Flutter", "Dart", "Riverpod", "Firebase"],
  },
  {
    label: "Bases de datos",
    skills: ["PostgreSQL", "SQLAlchemy", "Alembic", "Firebase Firestore", "SQLite"],
  },
  {
    label: "Herramientas",
    skills: ["Git", "Docker", "Linux", "VPS", "Railway", "Cloudinary", "Postman"],
  },
  {
    label: "Ciberseguridad",
    skills: ["Kali Linux", "Metasploit", "Nmap", "Wireshark"],
  },
]
