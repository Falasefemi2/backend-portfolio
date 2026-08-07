import type { Metadata } from "next"

import { ProjectsSection } from "@/components/site/projects-section"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { projects } from "@/lib/content"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected open-source work — backend, APIs, and tooling.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
        <ProjectsSection projects={projects} />
      </main>
      <SiteFooter />
    </div>
  )
}
