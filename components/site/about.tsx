import { SectionHeading } from "@/components/site/section-heading"
import { about } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <SectionHeading prompt="cat about.md">about</SectionHeading>
      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>{about.body}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {about.highlights.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-muted/40 px-2 py-1 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
