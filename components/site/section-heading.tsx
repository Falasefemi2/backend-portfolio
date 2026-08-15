export function SectionHeading({
  prompt,
  children,
}: {
  prompt: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span aria-hidden="true" className="text-sm text-terminal select-none">
        $ {prompt}
      </span>
      <h2 className="text-lg font-medium text-foreground">{children}</h2>
    </div>
  )
}
