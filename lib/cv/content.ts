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
      note: "Promedio: 9.01 / 10 (escala 0–10, nota mínima de aprobación: 7)",
    },
    {
      institution: "Google / Coursera",
      location: "En línea",
      degree: "Certificado Profesional en Ciberseguridad",
      period: "2026 – en progreso",
      note: "1 de 4 cursos (Foundations completado)",
    },
    {
      institution: "Google / Coursera",
      location: "En línea",
      degree: "Certificado Profesional en Diseño UX",
      period: "2026 – en progreso",
      note: "2 de 8 cursos",
    },
  ],
  experiences: [
    {
      company: "EcuaInventario",
      location: "Guayaquil, Ecuador",
      role: "Co-fundador y Desarrollador Fullstack",
      period: "Feb. 2026 – actual",
      bullets: [
        "Construí el backend con Django 5 + Django REST Framework + PostgreSQL para un SaaS multitenancy orientado al sector gastronómico.",
        "Integré chat IA con Claude (Anthropic) y transcripción de voz con Whisper (OpenAI) para consultar inventario y registrar movimientos.",
        "Desarrollé la app móvil en Flutter + Riverpod + go_router sobre la API REST con dio, con sesión JWT y token en almacenamiento seguro.",
        "Diseñé la multitenancy por queryset: un manager for_tenant() que fuerza el filtro por negocio antes de llegar al ViewSet.",
      ],
    },
    {
      company: "Freelance",
      location: "Guayaquil, Ecuador",
      role: "Desarrollador Fullstack",
      period: "Jul. 2025 – actual",
      bullets: [
        "Construí el sistema clínico Tía Glenda (React 19 + MUI + Flask + PostgreSQL, ~130 componentes) con RBAC de 3 roles, Swagger y 23 suites pytest — en producción.",
        "Puse en producción novamicktools.com: pedidos, clientes y facturación (FastAPI + PostgreSQL + Alembic + Cloudinary).",
        "Implementé un simulador de exámenes universitario (React + Express + PostgreSQL) con roles, anticheating y Docker multi-stage tras nginx.",
        "Entregué TallerApp (Express + Sequelize + React, 5 suites Jest/Supertest) y un e-commerce integrado al SRI: XML, clave de acceso de 49 dígitos y envío SOAP (ambiente de pruebas).",
      ],
    },
    {
      company: "Área de Nivelación — Universidad de Guayaquil",
      location: "Guayaquil, Ecuador",
      role: "Practicante de Desarrollo de Software",
      period: "Feb. 2026 (6 meses)",
      bullets: [
        "Lideré frontend, backend, pruebas y despliegue de la plataforma SimuladorPreguntas para uso institucional.",
        "Automaticé flujos internos de registro y generación de reportes con scripts en Python.",
      ],
    },
  ],
  projects: [
    {
      name: "RestoVentas",
      link: "github.com/Mickaell22/restoventas-backend",
      tagline: "Punto de venta para restaurante con toma de pedidos por voz",
      stack: "NestJS · TypeORM · React Native · Expo",
      bullets: [
        "Backend en NestJS 11 con TypeORM (entidades y migraciones), Passport-JWT y class-validator; app en React Native 0.86 + Expo 57 con Zustand.",
        "Pedidos por voz con LLM + STT: la salida del modelo nunca se confía — se valida contra el catálogo real antes de tocar el carrito.",
      ],
    },
    {
      name: "MotoVox",
      link: "github.com/Mickaell22/MotoVox",
      tagline: "Intercomunicador de voz para motociclistas sobre WiFi local",
      stack: "Flutter · C (NDK ARM64) · FFI · Sockets TCP/UDP",
      bullets: [
        "Integré RNNoise en C nativo vía Dart FFI (compilación NDK para ARM64) para filtrar ruido de motor y viento en tiempo real.",
        "Resolví el audio P2P con sockets TCP crudos (tcpNoDelay) y descubrimiento de pares por broadcast UDP, sin servidor intermediario.",
      ],
    },
    {
      name: "QR Shield",
      link: "github.com/Mickaell22/qr-shield",
      tagline: "Motor de detección de QR maliciosos (anti-quishing) — tesis",
      stack: "Python · FastAPI · pytest",
      bullets: [
        "API REST en FastAPI que puntúa URLs con heurísticas (punycode, TLDs de abuso, acortadores, IP literal), con cobertura de tests y diseño por capas L1–L5.",
      ],
    },
    {
      name: "ApplyJob",
      link: "github.com/Mickaell22/ApplyJob",
      tagline: "Pipeline de postulación automática a empleos con IA",
      stack: "Python · Playwright · LLMs",
      bullets: [
        "Agregué 7 fuentes (APIs JSON, RSS, HTML) a un esquema común, con match contra el perfil, cartas por LLM con caché de prefijo (~80% menos tokens) y auto-postulación headless en ATS con Playwright.",
      ],
    },
  ],
  skills: [
    ["Backend", "Python, Django, DRF, FastAPI, Flask, Node.js, Express, NestJS, C#, Java, PHP"],
    ["Frontend", "React, Next.js, TypeScript, Redux Toolkit, Zustand, Material UI, Tailwind CSS, Vite"],
    ["Mobile", "Flutter, Dart, Riverpod, React Native, Expo"],
    ["Bases de datos", "PostgreSQL, MySQL, SQLite, Firestore · ORMs: SQLAlchemy/Alembic, Prisma, Sequelize, TypeORM"],
    ["Testing y DevOps", "pytest, Jest, Supertest, Vitest, Testing Library, JUnit · Docker (multi-stage, non-root), nginx, GitHub Actions (CI/CD), Railway, Linux, Git"],
    ["IA y seguridad", "Anthropic SDK, OpenAI SDK, Whisper, MCP, RAG (embeddings + ChromaDB) · Kali Linux (aprendizaje activo), Nmap, Wireshark"],
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
      note: "GPA: 9.01 / 10 (grading system: 0–10, minimum passing grade: 7)",
    },
    {
      institution: "Google / Coursera",
      location: "Online",
      degree: "Professional Certificate in Cybersecurity",
      period: "2026 – in progress",
      note: "1 of 4 courses (Foundations completed)",
    },
    {
      institution: "Google / Coursera",
      location: "Online",
      degree: "Professional Certificate in UX Design",
      period: "2026 – in progress",
      note: "2 of 8 courses",
    },
  ],
  experiences: [
    {
      company: "EcuaInventario",
      location: "Guayaquil, Ecuador",
      role: "Co-founder & Fullstack Developer",
      period: "Feb 2026 – present",
      bullets: [
        "Built backend with Django 5 + Django REST Framework + PostgreSQL for a multitenancy SaaS targeting the restaurant industry.",
        "Integrated AI chat with Claude (Anthropic) and voice transcription with Whisper (OpenAI) to query inventory and record stock movements.",
        "Developed the mobile app in Flutter + Riverpod + go_router over the REST API with dio, with JWT session and token in secure storage.",
        "Designed multitenancy at the queryset level: a for_tenant() manager that enforces the per-business filter before it reaches the ViewSet.",
      ],
    },
    {
      company: "Freelance",
      location: "Guayaquil, Ecuador",
      role: "Fullstack Developer",
      period: "Jul 2025 – present",
      bullets: [
        "Built the Tia Glenda clinical system (React 19 + MUI + Flask + PostgreSQL, ~130 components) with 3-role RBAC, Swagger and 23 pytest suites — in production.",
        "Shipped novamicktools.com to production: orders, customers and invoicing (FastAPI + PostgreSQL + Alembic + Cloudinary).",
        "Implemented a university exam simulator (React + Express + PostgreSQL) with roles, anti-cheating and multi-stage Docker behind nginx.",
        "Delivered TallerApp (Express + Sequelize + React, 5 Jest/Supertest suites) and an e-commerce integrated with Ecuador's SRI: XML, 49-digit access key and SOAP submission (test environment).",
      ],
    },
    {
      company: "Leveling Area — University of Guayaquil",
      location: "Guayaquil, Ecuador",
      role: "Software Development Intern",
      period: "Feb 2026 (6 months)",
      bullets: [
        "Led frontend, backend, testing, and deployment of the SimuladorPreguntas platform for institutional use.",
        "Automated internal registration and report-generation workflows using Python scripts.",
      ],
    },
  ],
  projects: [
    {
      name: "RestoVentas",
      link: "github.com/Mickaell22/restoventas-backend",
      tagline: "Restaurant point of sale with voice-driven order taking",
      stack: "NestJS · TypeORM · React Native · Expo",
      bullets: [
        "Backend in NestJS 11 with TypeORM (entities and migrations), Passport-JWT and class-validator; app in React Native 0.86 + Expo 57 with Zustand.",
        "Voice-driven orders with LLM + STT: the model output is never trusted — it is validated against the real catalog before touching the cart.",
      ],
    },
    {
      name: "MotoVox",
      link: "github.com/Mickaell22/MotoVox",
      tagline: "Motorcycle voice intercom over local WiFi",
      stack: "Flutter · C (NDK ARM64) · FFI · TCP/UDP sockets",
      bullets: [
        "Integrated native C RNNoise via Dart FFI (NDK build for ARM64) to filter engine and wind noise in real time.",
        "Solved P2P audio with raw TCP sockets (tcpNoDelay) and peer discovery via UDP broadcast, with no intermediary server.",
      ],
    },
    {
      name: "QR Shield",
      link: "github.com/Mickaell22/qr-shield",
      tagline: "Malicious QR detection engine (anti-quishing) — thesis",
      stack: "Python · FastAPI · pytest",
      bullets: [
        "FastAPI REST API that scores URLs with heuristics (punycode, abuse-prone TLDs, shorteners, literal IPs), with test coverage and an L1–L5 layered design.",
      ],
    },
    {
      name: "ApplyJob",
      link: "github.com/Mickaell22/ApplyJob",
      tagline: "AI-powered automated job application pipeline",
      stack: "Python · Playwright · LLMs",
      bullets: [
        "Aggregated 7 sources (JSON APIs, RSS, HTML) into a common schema, with profile matching, LLM cover letters using prefix caching (~80% fewer tokens) and headless ATS auto-apply via Playwright.",
      ],
    },
  ],
  skills: [
    ["Backend", "Python, Django, DRF, FastAPI, Flask, Node.js, Express, NestJS, C#, Java, PHP"],
    ["Frontend", "React, Next.js, TypeScript, Redux Toolkit, Zustand, Material UI, Tailwind CSS, Vite"],
    ["Mobile", "Flutter, Dart, Riverpod, React Native, Expo"],
    ["Databases", "PostgreSQL, MySQL, SQLite, Firestore · ORMs: SQLAlchemy/Alembic, Prisma, Sequelize, TypeORM"],
    ["Testing & DevOps", "pytest, Jest, Supertest, Vitest, Testing Library, JUnit · Docker (multi-stage, non-root), nginx, GitHub Actions (CI/CD), Railway, Linux, Git"],
    ["AI & security", "Anthropic SDK, OpenAI SDK, Whisper, MCP, RAG (embeddings + ChromaDB) · Kali Linux (active learning), Nmap, Wireshark"],
    ["Languages", "Spanish (native), English (B2 — reading, technical writing, conversational)"],
  ],
  pdfFile: "CV_en.pdf",
}

const content: Record<Locale, CvContent> = { es, en }

export function getCvContent(locale: Locale): CvContent {
  return content[locale] ?? content.es
}
