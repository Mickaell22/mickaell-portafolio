import type { Locale } from "../../i18n/routing"

export interface CvExperience {
  company: string
  period: string
  role: string
  bullets: string[]
}

export interface CvProject {
  name: string
  link: string
  desc: string
  stack: string
}

export interface CvEducation {
  degree: string
  period: string
  institution: string
}

export interface CvCertification {
  name: string
  sub: string
}

export interface CvContent {
  name: string
  title: string
  contacts: string[]
  labels: {
    profile: string
    skills: string
    experience: string
    projects: string
    education: string
    certifications: string
    languages: string
  }
  profile: string
  skills: [string, string][]
  experiences: CvExperience[]
  projects: CvProject[]
  education: CvEducation[]
  certifications: CvCertification[]
  languages: string
  // Filename (without path) used for the downloadable PDF in this locale.
  pdfFile: string
}

const contacts = [
  "mickaelmoranvera03@gmail.com",
  "+593 983777036",
  "Guayaquil, Ecuador",
  "github.com/Mickaell22",
  "linkedin.com/in/mickaell-moran-vera-ba421a2a3",
  "mickaell.novamicktools.com",
]

const es: CvContent = {
  name: "Mickaell Morán Vera",
  title: "Desarrollador Fullstack",
  contacts,
  labels: {
    profile: "Perfil",
    skills: "Habilidades técnicas",
    experience: "Experiencia",
    projects: "Proyectos destacados",
    education: "Educación",
    certifications: "Certificaciones",
    languages: "Idiomas",
  },
  profile:
    "Desarrollador fullstack freelance con proyectos reales en producción: SaaS gastronómico con IA multitenancy, sistema clínico con cliente pagado, simulador de exámenes en uso activo en la Universidad de Guayaquil. Experiencia en el ciclo completo — backend, frontend, mobile, deploy y automatización. Estudiante de 9no semestre de Ingeniería de Software en la Universidad de Guayaquil.",
  skills: [
    ["Backend", "Python, Django, FastAPI, Node.js, Express, C#, Java"],
    ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, Vite"],
    ["Mobile", "Flutter, Dart, Riverpod, Firebase"],
    ["Bases de datos", "PostgreSQL, SQLAlchemy, Firebase Firestore, MySQL"],
    ["DevOps / Tools", "Git, Docker, Linux, Railway, VPS, Cloudinary"],
    ["Ciberseguridad", "Kali Linux, Metasploit, Nmap, Wireshark"],
  ],
  experiences: [
    {
      company: "EcuaInventario",
      period: "2024 — actual",
      role: "Co-fundador · Desarrollador fullstack · Guayaquil",
      bullets: [
        "SaaS gastronómico multitenancy con IA integrada, co-desarrollado con socio empresarial.",
        "Backend en Django 5 + DRF + PostgreSQL con arquitectura multitenancy — cada tenant con datos completamente aislados.",
        "Chat IA que interpreta texto, audio y fotos de facturas usando Claude Haiku (Anthropic) + Whisper (OpenAI).",
        "App móvil en Flutter + Riverpod para gestión de inventario y pedidos en tiempo real.",
      ],
    },
    {
      company: "Freelance",
      period: "2023 — actual",
      role: "Desarrollador fullstack · Remoto, Guayaquil",
      bullets: [
        "Centro Médico Tía Glenda: sistema clínico integral con 190+ componentes en React + MUI. Proyecto pagado, en uso real.",
        "Flores Eternas: e-commerce con facturación electrónica integrada al SRI Ecuador — generación XML, firma digital y envío SOAP (Node.js + React + PostgreSQL).",
        "Facturador: sistema de facturación y gestión de pedidos propio en producción en novamicktools.com (FastAPI + React + PostgreSQL).",
        "SimuladorPreguntas: plataforma de simulacro de exámenes con anticheating, roles y exportación XML/Excel. En producción en la Universidad de Guayaquil.",
      ],
    },
    {
      company: "Área de Nivelación — Universidad de Guayaquil",
      period: "2025 · 6 meses",
      role: "Practicante · Desarrollo de software",
      bullets: [
        "Lideré el desarrollo completo del SimuladorPreguntas: frontend, backend, pruebas y deploy en VPS institucional.",
        "Script de renombrado masivo: procesé en 5 minutos lo que tomaba una tarde completa por grupo (70+ archivos).",
        "Script de red DHCP: automaticé el reset de conectividad, eliminando la dependencia de soporte técnico para el área.",
      ],
    },
  ],
  projects: [
    {
      name: "mcp-context-server",
      link: "github.com/Mickaell22/mcp-context-server",
      desc: "Servidor MCP propio que indexa repositorios de GitHub con embeddings en PostgreSQL y los consulta por lenguaje natural. DeepSeek Flash como preprocesador para comprimir contexto. Operación segura vía Tailscale. En distribución pública.",
      stack: "Python · PostgreSQL · DeepSeek · Tailscale",
    },
    {
      name: "SimuladorPreguntas",
      link: "github.com/Mickaell22/SimuladorPreguntasBackend",
      desc: "Plataforma de simulacro de exámenes en producción en la Universidad de Guayaquil. Roles admin/estudiante, anticheating, importación masiva desde Excel/XML, historial de resultados.",
      stack: "Node.js · Express · PostgreSQL · React · Docker",
    },
    {
      name: "Facturador",
      link: "novamicktools.com",
      desc: "Sistema de facturación, pedidos y estadísticas propio en uso activo. Soft delete en todas las entidades, imágenes en Cloudinary, panel de ingresos por período.",
      stack: "FastAPI · React · PostgreSQL · Cloudinary",
    },
    {
      name: "EcuaInventario",
      link: "",
      desc: "SaaS gastronómico multitenancy con chat IA para registrar movimientos de inventario por texto, audio y foto de factura. Casi en producción.",
      stack: "Django · Flutter · PostgreSQL · Claude API · Whisper",
    },
    {
      name: "MotoVox",
      link: "github.com/Mickaell22/Proyecto-MotoVox",
      desc: "Intercomunicador P2P para moto sobre WiFi local. RNNoise compilado en C nativo para ARM64 integrado en Flutter via FFI — filtro de ruido de motor en tiempo real.",
      stack: "Flutter · Dart · C (ARM64) · WebRTC · FFI",
    },
  ],
  education: [
    {
      degree: "Ingeniería de Software",
      period: "2021 — actual",
      institution: "Universidad de Guayaquil · 9no semestre",
    },
    {
      degree: "Bachiller en Ciencias",
      period: "2015 — 2020",
      institution: "Unidad Educativa Leonidas Gracia",
    },
  ],
  certifications: [
    { name: "Certified Ethical Hacker (CEH)", sub: "Hacker Mentor · Marzo 2023" },
    { name: "Google Ciberseguridad", sub: "Coursera · Foundations completado, 2025" },
  ],
  languages: "Español: Nativo  ·  Inglés: Intermedio (lectura avanzada)",
  pdfFile: "CV_es.pdf",
}

const en: CvContent = {
  name: "Mickaell Morán Vera",
  title: "Fullstack Developer",
  contacts,
  labels: {
    profile: "Profile",
    skills: "Technical skills",
    experience: "Experience",
    projects: "Featured projects",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
  },
  profile:
    "Freelance fullstack developer with real projects in production: a multitenant restaurant SaaS with AI, a clinical system with a paying client, and an exam simulator in active use at the University of Guayaquil. Experience across the full cycle — backend, frontend, mobile, deployment and automation. Ninth-semester Software Engineering student at the University of Guayaquil.",
  skills: [
    ["Backend", "Python, Django, FastAPI, Node.js, Express, C#, Java"],
    ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, Vite"],
    ["Mobile", "Flutter, Dart, Riverpod, Firebase"],
    ["Databases", "PostgreSQL, SQLAlchemy, Firebase Firestore, MySQL"],
    ["DevOps / Tools", "Git, Docker, Linux, Railway, VPS, Cloudinary"],
    ["Cybersecurity", "Kali Linux, Metasploit, Nmap, Wireshark"],
  ],
  experiences: [
    {
      company: "EcuaInventario",
      period: "2024 — present",
      role: "Co-founder · Fullstack Developer · Guayaquil",
      bullets: [
        "Multitenant restaurant SaaS with integrated AI, co-developed with a business partner.",
        "Backend in Django 5 + DRF + PostgreSQL with a multitenant architecture — each tenant's data fully isolated.",
        "AI chat that interprets text, audio and invoice photos using Claude Haiku (Anthropic) + Whisper (OpenAI).",
        "Flutter + Riverpod mobile app for real-time inventory and order management.",
      ],
    },
    {
      company: "Freelance",
      period: "2023 — present",
      role: "Fullstack Developer · Remote, Guayaquil",
      bullets: [
        "Centro Médico Tía Glenda: complete clinical system with 190+ components in React + MUI. Paid client, in real use.",
        "Flores Eternas: e-commerce with electronic invoicing integrated with Ecuador's SRI tax authority — XML generation, digital signature and SOAP submission (Node.js + React + PostgreSQL).",
        "Facturador: my own invoicing and order management system in production at novamicktools.com (FastAPI + React + PostgreSQL).",
        "SimuladorPreguntas: exam simulation platform with anti-cheating, roles and XML/Excel export. In production at the University of Guayaquil.",
      ],
    },
    {
      company: "Leveling Department — University of Guayaquil",
      period: "2025 · 6 months",
      role: "Intern · Software Development",
      bullets: [
        "Led the full development of SimuladorPreguntas: frontend, backend, testing and deployment on the institutional VPS.",
        "Bulk renaming script: processed in 5 minutes what used to take a full afternoon per group (70+ files).",
        "DHCP network script: automated connectivity resets, removing the department's dependency on tech support.",
      ],
    },
  ],
  projects: [
    {
      name: "mcp-context-server",
      link: "github.com/Mickaell22/mcp-context-server",
      desc: "My own MCP server that indexes GitHub repositories with embeddings in PostgreSQL and queries them in natural language. DeepSeek Flash as a preprocessor to compress context. Secure operation over Tailscale. Publicly distributed.",
      stack: "Python · PostgreSQL · DeepSeek · Tailscale",
    },
    {
      name: "SimuladorPreguntas",
      link: "github.com/Mickaell22/SimuladorPreguntasBackend",
      desc: "Exam simulation platform in production at the University of Guayaquil. Admin/student roles, anti-cheating, bulk import from Excel/XML, results history.",
      stack: "Node.js · Express · PostgreSQL · React · Docker",
    },
    {
      name: "Facturador",
      link: "novamicktools.com",
      desc: "My own invoicing, orders and statistics system in active use. Soft delete on all entities, images on Cloudinary, revenue dashboard by period.",
      stack: "FastAPI · React · PostgreSQL · Cloudinary",
    },
    {
      name: "EcuaInventario",
      link: "",
      desc: "Multitenant restaurant SaaS with an AI chat to log inventory movements via text, audio and invoice photo. Almost in production.",
      stack: "Django · Flutter · PostgreSQL · Claude API · Whisper",
    },
    {
      name: "MotoVox",
      link: "github.com/Mickaell22/Proyecto-MotoVox",
      desc: "P2P motorbike intercom over local WiFi. RNNoise compiled in native C for ARM64 integrated into Flutter via FFI — real-time engine noise filtering.",
      stack: "Flutter · Dart · C (ARM64) · WebRTC · FFI",
    },
  ],
  education: [
    {
      degree: "Software Engineering",
      period: "2021 — present",
      institution: "University of Guayaquil · 9th semester",
    },
    {
      degree: "High School Diploma in Sciences",
      period: "2015 — 2020",
      institution: "Unidad Educativa Leonidas Gracia",
    },
  ],
  certifications: [
    { name: "Certified Ethical Hacker (CEH)", sub: "Hacker Mentor · March 2023" },
    { name: "Google Cybersecurity", sub: "Coursera · Foundations completed, 2025" },
  ],
  languages: "Spanish: Native  ·  English: Intermediate (advanced reading)",
  pdfFile: "CV_en.pdf",
}

const content: Record<Locale, CvContent> = { es, en }

export function getCvContent(locale: Locale): CvContent {
  return content[locale] ?? content.es
}
