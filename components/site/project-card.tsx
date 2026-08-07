import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

import { GithubIcon } from "@/components/site/github-icon"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/lib/content"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/40 hover:shadow-lg dark:hover:border-terminal/30">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="font-medium text-foreground">
            <Link
              href={project.github}
              className="inline-block transition-colors hover:text-terminal"
            >
              {project.title}
            </Link>
          </CardTitle>
          <Link
            href={project.github}
            aria-label={`${project.title} on GitHub`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </Link>
        </div>
        <CardDescription className="leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href={project.github}
            className="group/link inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-terminal"
          >
            source
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
          {project.demo ? (
            <Link
              href={project.demo}
              className="group/link inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-terminal"
            >
              {project.demoLabel ?? "live"}
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
