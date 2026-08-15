import { ArrowUpRight, Mail } from "lucide-react"
import Link from "next/link"

import { GithubIcon } from "@/components/site/github-icon"
import { Button } from "@/components/ui/button"
import { about, site } from "@/lib/content"

const riseSteps = [
  "animate-rise [animation-delay:60ms]",
  "animate-rise [animation-delay:140ms]",
  "animate-rise [animation-delay:220ms]",
  "animate-rise [animation-delay:300ms]",
  "animate-rise [animation-delay:380ms]",
] as const

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16">
      <div
        aria-hidden="true"
        className="terminal-grid [mask-[radial-gradient(ellipse_at_top,black,transparent_70%)] pointer-events-none absolute inset-0 -z-10 opacity-40"
      />
      <div className="flex flex-col gap-8">
        <p
          className={`${riseSteps[0]} flex items-center gap-2 text-sm text-muted-foreground`}
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 animate-pulse rounded-full bg-terminal"
          />
          <span className="text-terminal">{site.role.toLowerCase()}</span>
          <span aria-hidden="true" className="text-muted-foreground">
            $
          </span>
        </p>

        <h1
          className={`${riseSteps[1]} text-4xl font-semibold tracking-tight text-foreground sm:text-6xl`}
        >
          {site.name}
          <span
            aria-hidden="true"
            className="terminal-cursor ml-1 inline-block h-[0.9em] w-[0.55em] translate-y-[0.1em] bg-terminal align-baseline"
          />
        </h1>

        <p
          className={`${riseSteps[2]} max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg`}
        >
          {site.tagline}
        </p>

        <div className={`${riseSteps[3]} flex flex-wrap gap-3`}>
          <Button
            render={<Link href={site.github} />}
            variant="default"
            nativeButton={false}
          >
            <GithubIcon className="size-4" />
            github
            <ArrowUpRight className="size-4" />
          </Button>
          <Button
            render={<a href={`mailto:${site.email}`} />}
            variant="outline"
            nativeButton={false}
          >
            <Mail className="size-4" />
            email
          </Button>
        </div>

        <div
          className={`${riseSteps[4]} mt-2 flex flex-wrap gap-2`}
          aria-label="Core stack"
        >
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
