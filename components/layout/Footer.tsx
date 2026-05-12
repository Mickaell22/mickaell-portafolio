import Link from "next/link"

const links = [
  { href: "https://github.com/Mickaell22", label: "GitHub" },
  { href: "https://www.youtube.com/@mickaell1335", label: "YouTube" },
  { href: "https://www.linkedin.com/in/mickaell-moran-vera-ba421a2a3/", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          Mickaell Morán · Guayaquil, Ecuador
        </p>
        <ul className="flex items-center gap-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
