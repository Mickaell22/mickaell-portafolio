"use client"

import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { Link, usePathname } from "@/i18n/navigation"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
  { href: "/cyber", key: "cyber" },
] as const

export function Navbar() {
  const pathname = usePathname()
  const t = useTranslations("nav")
  const tTheme = useTranslations("theme")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          mickaell<span className="text-muted-foreground">.</span>dev
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map(({ href, key }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  pathname === href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={tTheme("toggle")}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          {/* mobile toggle */}
          <button
            className="rounded-md p-2 text-muted-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border/50 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm transition-colors hover:text-foreground",
                    pathname === href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
