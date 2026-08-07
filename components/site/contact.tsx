import { ArrowUpRight, FileText, Mail } from "lucide-react"

import { GithubIcon } from "@/components/site/github-icon"
import { SectionHeading } from "@/components/site/section-heading"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/content"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <SectionHeading prompt="cat contact.sh">contact</SectionHeading>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button render={<a href={`mailto:${site.email}`} />} variant="default" nativeButton={false}>
          <Mail className="size-4" />
          {site.email}
        </Button>
        <Button render={<a href={site.github} />} variant="outline" nativeButton={false}>
          <GithubIcon className="size-4" />
          github
        </Button>
        <Button render={<a href={site.resume} />} variant="outline" nativeButton={false}>
          <FileText className="size-4" />
          résumé
          <ArrowUpRight className="size-4" />
        </Button>
      </div>
    </section>
  )
}
