import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Writeup } from "@/types/content"

const CONTENT_DIR = path.join(process.cwd(), "content/writeups")

export function getAllWriteups(): Writeup[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
      const { data, content } = matter(raw)
      return {
        slug: file.replace(".mdx", ""),
        ...(data as Omit<Writeup, "slug" | "content">),
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getWriteupBySlug(slug: string): Writeup | undefined {
  return getAllWriteups().find((w) => w.slug === slug)
}
