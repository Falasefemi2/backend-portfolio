import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
        <p>
          <span aria-hidden="true" className="text-terminal">
            ${" "}
          </span>
          {site.name} © {new Date().getFullYear()}
        </p>
        <p>built with Next.js · Effect-minded</p>
      </div>
    </footer>
  )
}
