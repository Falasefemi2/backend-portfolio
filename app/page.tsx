import { About } from "@/components/site/about"
import { Contact } from "@/components/site/contact"
import { Experience } from "@/components/site/experience"
import { Hero } from "@/components/site/hero"
import { ProjectsSection } from "@/components/site/projects-section"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { featuredProjects } from "@/lib/content"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
        <Hero />
        <ProjectsSection projects={featuredProjects} showAll />
        <About />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
