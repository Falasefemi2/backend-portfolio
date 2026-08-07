export const site = {
  name: "Falase Femi",
  role: "Backend Developer",
  tagline: "Backend engineer building reliable systems with TypeScript, Bun, and the Effect-TS ecosystem.",
  email: "femifalase228@gmail.com",
  github: "https://github.com/Falasefemi2",
  githubHandle: "Falasefemi2",
  resume:
    "https://docs.google.com/document/d/1KvdIgAEvrdanm7yekNg45tPnngyas0wdqfRTjD1ssag/edit?usp=sharing",
} as const

export const about = {
  heading: "about",
  body: "I focus on backend development and systems programming — writing type-safe, observable services and APIs. I'm deeply invested in the Effect-TS ecosystem and build daily with TypeScript on Bun, and I'm comfortable dropping into Go and Java when the job calls for it. Before specializing in the backend, I spent several years as a frontend developer.",
  highlights: ["Effect-TS", "TypeScript / Bun", "Go", "Java"],
} as const

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  github: string
  demo?: string
  demoLabel?: string
}

export const projects: Project[] = [
  {
    slug: "easyrent",
    title: "EasyRent",
    description:
      "A scalable house rental platform for the Nigerian market with map-based, geospatial property discovery. Landlords publish listings while tenants search by location on an interactive map. Built on Effect-TS v4 and Bun, with Drizzle ORM and PostGIS powering the geospatial queries, Redis for caching, and Cloudinary + Resend handling media and transactional email.",
    tags: ["Effect-TS v4", "Bun", "Drizzle ORM", "PostGIS", "Redis", "Cloudinary", "Resend"],
    github: "https://github.com/Falasefemi2/easyrent",
    demo: "https://used-odilia-femmieorg-e85b92f9.koyeb.app/docs",
    demoLabel: "API docs",
  },
  {
    slug: "paystack-effect",
    title: "paystack-effect",
    description:
      "A full rewrite of the official Paystack Node SDK from plain TypeScript into Effect-TS v4. Typed errors via Schema.TaggedErrorClass, a Context.Service-based architecture for testable clients, and Config-driven runtime setup so credentials and base URLs live in the environment rather than the caller.",
    tags: ["Effect-TS v4", "TypeScript", "Schema", "Config"],
    github: "https://github.com/Falasefemi2/paystack-effect",
  },
  {
    slug: "ai-code-review-bot",
    title: "ai-code-review-bot",
    description:
      "An automated pull request review bot built with Bun and Effect. It runs on GitHub Actions for every push and PR, lints the diff, calls a free LLM API to flag suspicious changes, and posts the findings back as a PR comment — a lightweight second pair of eyes on every merge.",
    tags: ["Bun", "Effect", "GitHub Actions", "LLM API"],
    github: "https://github.com/Falasefemi2/ai-code-review-bot",
  },
  {
    slug: "daily-report",
    title: "daily-report",
    description:
      "A local daemon and CLI that tracks active apps and windows throughout the day, aggregates the raw usage into a structured summary, and generates a short narrative \"what I did today\" report via a free LLM API — personal time tracking that reads like a changelog.",
    tags: ["TypeScript", "Bun", "CLI", "LLM API"],
    github: "https://github.com/Falasefemi2/daily-report",
  },
  {
    slug: "golang-update",
    title: "golang-update",
    description:
      "The same activity-tracking concept as daily-report, reimplemented in Go. A local daemon/CLI that watches app usage and produces a daily narrative summary through a free LLM API — an exercise in porting the design to a compiled, single-binary toolchain.",
    tags: ["Go", "CLI", "LLM API"],
    github: "https://github.com/Falasefemi2/golang-update",
  },
]

export const featuredProjects = projects.slice(0, 3)

export type Experience = {
  role: string
  company: string
  period: string
  note?: string
}

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Vatebra Limited",
    period: "Jun 2025 – Present",
    note: "Prior experience before the pivot to backend engineering.",
  },
  {
    role: "Frontend Developer",
    company: "Normdek",
    period: "Apr 2022 – Jan 2023",
  },
  {
    role: "Frontend Developer Intern",
    company: "Sterling Bank",
    period: "Jan 2021 – Apr 2021",
  },
]
