import type { Locale } from "../../i18n/routing"

export interface CvExperience {
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
}

export interface CvProject {
  name: string
  link: string
  tagline: string
  stack: string
  bullets: string[]
}

export interface CvEducation {
  institution: string
  location: string
  degree: string
  period: string
  // Linea opcional bajo el titulo (ej. promedio / notas).
  note?: string
}

export interface CvContent {
  name: string
  contacts: string[]
  labels: {
    education: string
    experience: string
    projects: string
    skills: string
  }
  skills: [string, string][]
  experiences: CvExperience[]
  projects: CvProject[]
  education: CvEducation[]
  // Filename (without path) used for the downloadable PDF in this locale.
  pdfFile: string
}

// Nombre de marca del portafolio (se mantiene con tilde y grafia propia,
// distinto de la version ATS del CV en PDF externo).
const name = "Mickaell Morán Vera"

const contacts = [
  "Guayaquil, Ecuador",
  "mickaelmoranvera03@gmail.com",
  "+593 98 377 7036",
  "linkedin.com/in/mickaell-moran-vera-ba421a2a3",
  "github.com/Mickaell22",
  "mickaell.novamicktools.com",
]

const es: CvContent = {
  name,
  contacts,
  labels: {
    education: "Educación",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
  },
  education: [
    {
      institution: "Universidad de Guayaquil",
      location: "Guayaquil, Ecuador",
      degree: "Ing. en Software — 9no semestre (de 10)",
      period: "2021 – actual",
      note: "Promedio: 8.98 / 10 (escala 0–10, nota mínima de aprobación: 7)",
    },
    {
      institution: "Google / Coursera",
      location: "En línea",
      degree: "Certificado Profesional en Ciberseguridad",
      period: "2025",
    },
    {
      institution: "Google / Coursera",
      location: "En línea",
      degree: "Certificado Profesional en Diseño UX",
      period: "2025 – en progreso",
    },
  ],
  experiences: [
    {
      company: "EcuaInventario",
      location: "Guayaquil, Ecuador",
      role: "Co-fundador y Desarrollador Fullstack",
      period: "2024 – actual",
      bullets: [
        "Construí el backend con Django 5 + Django REST Framework + PostgreSQL para un SaaS multitenancy orientado al sector gastronómico.",
        "Integré un asistente de IA con Claude (Anthropic) para consultas de inventario, gestión de pedidos y reportes automáticos.",
        "Desarrollé la app móvil en Flutter + Riverpod con sincronización en tiempo real vía Firebase.",
        "Diseñé la arquitectura multitenancy con aislamiento de datos por tenant y facturación por suscripción mensual.",
      ],
    },
    {
      company: "Freelance",
      location: "Guayaquil, Ecuador",
      role: "Desarrollador Fullstack",
      period: "2023 – actual",
      bullets: [
        "Construí el sistema clínico Tía Glenda (React + MUI + Python + PostgreSQL, 190+ componentes) — en producción.",
        "Desarrollé un sistema de facturación electrónica integrado con el SRI de Ecuador, en producción en novamicktools.com.",
        "Implementé un simulador de exámenes universitario (React + FastAPI + PostgreSQL) con acceso por roles y medidas anticheating.",
        "Entregué Taller App: sistema de gestión de taller (Node.js + React) para un cliente freelance.",
      ],
    },
    {
      company: "Área de Nivelación — Universidad de Guayaquil",
      location: "Guayaquil, Ecuador",
      role: "Practicante de Desarrollo de Software",
      period: "2025 (6 meses)",
      bullets: [
        "Lideré frontend, backend, pruebas y despliegue de la plataforma SimuladorPreguntas para uso institucional.",
        "Automaticé flujos internos de registro y generación de reportes con scripts en Python.",
      ],
    },
  ],
  projects: [
    {
      name: "MotoVox",
      link: "github.com/Mickaell22/MotoVox",
      tagline: "App de comunicación por voz para motociclistas",
      stack: "Flutter · C · WebRTC · FFI",
      bullets: [
        "Integré código nativo en C con Flutter vía FFI para procesamiento de audio en tiempo real sin overhead de la JVM.",
        "Implementé streaming de audio peer-to-peer con WebRTC sin servidor intermediario.",
      ],
    },
    {
      name: "QR Shield",
      link: "github.com/Mickaell22/qr-shield",
      tagline: "Herramienta de seguridad para análisis de códigos QR",
      stack: "Python · Extensión de Chrome",
      bullets: [
        "Construí una extensión de Chrome que intercepta escaneos de QR y consulta una API en Python para validar URLs maliciosas.",
        "Desarrollé una API REST en Python con análisis de reputación de dominios y detección de phishing.",
      ],
    },
    {
      name: "ApplyJob",
      link: "github.com/Mickaell22/ApplyJob",
      tagline: "Pipeline de postulación automática a empleos con IA",
      stack: "Python · Playwright · LLMs",
      bullets: [
        "Automaticé el scraping de 7 portales de empleo, el match de ofertas contra el perfil del candidato y la generación de cartas personalizadas con LLMs.",
        "Implementé auto-postulación headless en ATS (Workable, Greenhouse, GetOnBrd) con Playwright.",
      ],
    },
  ],
  skills: [
    ["Backend", "Python, Django, FastAPI, Node.js, Express, C#, Java"],
    ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, Vite"],
    ["Mobile", "Flutter, Dart, Riverpod, Firebase"],
    ["Bases de datos", "PostgreSQL, SQLAlchemy, Alembic, Firebase Firestore, SQLite"],
    ["Herramientas", "Git, Docker, Linux, VPS (Railway), Cloudinary, Postman"],
    ["Ciberseguridad", "Kali Linux (aprendizaje activo), Nmap, Wireshark"],
    ["Idiomas", "Español (nativo), Inglés (B2 — lectura, escritura técnica, conversacional)"],
  ],
  pdfFile: "CV_es.pdf",
}

const en: CvContent = {
  name,
  contacts,
  labels: {
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
  },
  education: [
    {
      institution: "University of Guayaquil",
      location: "Guayaquil, Ecuador",
      degree: "B.Sc. Software Engineering — 9th semester (of 10)",
      period: "2021 – present",
      note: "GPA: 8.98 / 10 (grading system: 0–10, minimum passing grade: 7)",
    },
    {
      institution: "Google / Coursera",
      location: "Online",
      degree: "Professional Certificate in Cybersecurity",
      period: "2025",
    },
    {
      institution: "Google / Coursera",
      location: "Online",
      degree: "Professional Certificate in UX Design",
      period: "2025 – in progress",
    },
  ],
  experiences: [
    {
      company: "EcuaInventario",
      location: "Guayaquil, Ecuador",
      role: "Co-founder & Fullstack Developer",
      period: "2024 – present",
      bullets: [
        "Built backend with Django 5 + Django REST Framework + PostgreSQL for a multitenancy SaaS targeting the restaurant industry.",
        "Integrated an AI assistant powered by Claude (Anthropic) for inventory queries, order management, and automated reports.",
        "Developed mobile app with Flutter + Riverpod with real-time sync via Firebase.",
        "Designed multitenancy architecture with per-tenant data isolation and monthly subscription billing.",
      ],
    },
    {
      company: "Freelance",
      location: "Guayaquil, Ecuador",
      role: "Fullstack Developer",
      period: "2023 – present",
      bullets: [
        "Built Tia Glenda clinical management system (React + MUI + Python + PostgreSQL, 190+ components) — in production.",
        "Developed an e-invoicing system integrated with Ecuador's SRI tax authority, running in production at novamicktools.com.",
        "Implemented university exam simulator (React + FastAPI + PostgreSQL) with role-based access and anti-cheating measures.",
        "Delivered Taller App: workshop management system (Node.js + React) for a freelance client.",
      ],
    },
    {
      company: "Leveling Area — University of Guayaquil",
      location: "Guayaquil, Ecuador",
      role: "Software Development Intern",
      period: "2025 (6 months)",
      bullets: [
        "Led frontend, backend, testing, and deployment of the SimuladorPreguntas platform for institutional use.",
        "Automated internal registration and report-generation workflows using Python scripts.",
      ],
    },
  ],
  projects: [
    {
      name: "MotoVox",
      link: "github.com/Mickaell22/MotoVox",
      tagline: "Voice communication app for motorcycle riders",
      stack: "Flutter · C · WebRTC · FFI",
      bullets: [
        "Integrated native C code with Flutter via FFI for real-time audio processing with no JVM overhead.",
        "Implemented peer-to-peer audio streaming via WebRTC without an intermediary server.",
      ],
    },
    {
      name: "QR Shield",
      link: "github.com/Mickaell22/qr-shield",
      tagline: "Security tool for QR code analysis",
      stack: "Python · Chrome Extension",
      bullets: [
        "Built a Chrome extension that intercepts QR scans and queries a Python API to validate URLs for malicious content.",
        "Developed REST API in Python with domain reputation analysis and phishing detection.",
      ],
    },
    {
      name: "ApplyJob",
      link: "github.com/Mickaell22/ApplyJob",
      tagline: "AI-powered automated job application pipeline",
      stack: "Python · Playwright · LLMs",
      bullets: [
        "Automated scraping of 7 job boards, offer matching against candidate profile, and personalized cover letter generation with LLMs.",
        "Implemented headless ATS auto-apply (Workable, Greenhouse, GetOnBrd) using Playwright.",
      ],
    },
  ],
  skills: [
    ["Backend", "Python, Django, FastAPI, Node.js, Express, C#, Java"],
    ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, Vite"],
    ["Mobile", "Flutter, Dart, Riverpod, Firebase"],
    ["Databases", "PostgreSQL, SQLAlchemy, Alembic, Firebase Firestore, SQLite"],
    ["Tools", "Git, Docker, Linux, VPS (Railway), Cloudinary, Postman"],
    ["Cybersecurity", "Kali Linux (active learning), Nmap, Wireshark"],
    ["Languages", "Spanish (native), English (B2 — reading, technical writing, conversational)"],
  ],
  pdfFile: "CV_en.pdf",
}

const content: Record<Locale, CvContent> = { es, en }

export function getCvContent(locale: Locale): CvContent {
  return content[locale] ?? content.es
}
