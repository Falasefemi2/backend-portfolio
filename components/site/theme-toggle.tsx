"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="relative inline-grid size-4 place-items-center">
        <Sun className="col-start-1 row-start-1 size-4 transition-all duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] dark:scale-0 dark:-rotate-90 dark:opacity-0" />
        <Moon className="col-start-1 row-start-1 size-4 rotate-90 scale-0 opacity-0 transition-all duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </span>
    </Button>
  )
}
