import { notFound } from "next/navigation"

// Any path under a locale that doesn't match a defined route renders the
// localized not-found page.
export default function CatchAllPage() {
  notFound()
}
