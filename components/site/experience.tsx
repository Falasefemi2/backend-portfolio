import { SectionHeading } from "@/components/site/section-heading"
import { experience } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeading prompt="cat experience.md">experience</SectionHeading>
      <ol className="mt-8 space-y-8 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-7.75 size-2.5 rounded-full border border-terminal bg-background"
            />
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-base font-medium text-foreground">
                  {job.role}
                  <span className="text-muted-foreground">
                    {" "}
                    @ {job.company}
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
              {job.note ? (
                <p className="text-sm text-muted-foreground">{job.note}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
