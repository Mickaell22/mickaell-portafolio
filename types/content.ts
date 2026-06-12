export type Area = "fullstack" | "cyber" | "ux"

export type ProjectRole =
  | "Desarrollador principal"
  | "Co-desarrollador"
  | "Freelance"
  | "Proyecto propio"
  | "Académico"

export interface Project {
  slug: string
  title: string
  area: Area
  description: string
  stack: string[]
  github?: string
  demo?: string
  image?: string
  gallery?: string[]
  featured: boolean
  date: string
  role: ProjectRole
  content: string
}

export interface Experience {
  slug: string
  company: string
  position: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  stack?: string[]
  content: string
}

export interface Education {
  slug: string
  institution: string
  degree: string
  startDate: string
  endDate?: string
  current: boolean
  description?: string
}

export interface Skill {
  name: string
  level: "básico" | "intermedio" | "avanzado" | "experto"
  category: "lenguajes" | "frameworks" | "bases-de-datos" | "herramientas" | "cyber" | "ux"
}

export interface SkillCategory {
  slug: string
  category: string
  skills: Skill[]
}

export interface Writeup {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  youtube?: string
  content: string
}
