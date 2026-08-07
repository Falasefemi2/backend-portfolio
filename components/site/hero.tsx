import { ArrowUpRight, Mail } from "lucide-react"
import Link from "next/link"

import { GithubIcon } from "@/components/site/github-icon"
import { Button } from "@/components/ui/button"
import { about, site } from "@/lib/content"

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16">
      <div
        aria-hidden="true"
        className="terminal-grid pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div className="flex flex-col gap-8">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-terminal" />
          <span className="text-terminal">{site.role.toLowerCase()}</span>
          <span aria-hidden="true" className="text-muted-foreground">
            $
          </span>
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {site.name}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.tagline}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button render={<Link href={site.github} />} variant="default" nativeButton={false}>
            <GithubIcon className="size-4" />
            github
            <ArrowUpRight className="size-4" />
          </Button>
          <Button render={<a href={`mailto:${site.email}`} />} variant="outline" nativeButton={false}>
            <Mail className="size-4" />
            email
          </Button>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {about.highlights.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted/40 px-2 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
