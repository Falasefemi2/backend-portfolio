import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { ProjectCard } from "@/components/site/project-card"
import { SectionHeading } from "@/components/site/section-heading"
import type { Project } from "@/lib/content"

export function ProjectsSection({
  projects,
  showAll = false,
}: {
  projects: Project[]
  showAll?: boolean
}) {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="flex items-center justify-between gap-4">
        <SectionHeading prompt="ls ./projects">projects</SectionHeading>
        {showAll ? (
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-terminal"
          >
            all
            <ArrowRight className="size-3.5" />
          </Link>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
