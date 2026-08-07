import Link from "next/link"

import { ThemeToggle } from "@/components/site/theme-toggle"

const nav = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors hover:text-terminal"
        >
          <span aria-hidden="true" className="text-terminal">
            ~/
          </span>
          falase-femi
        </Link>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
