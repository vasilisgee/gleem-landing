"use client"

import * as React from "react"
import { ThemeProviderContext } from "@/contexts/theme-context"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  forcedTheme?: Theme
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  forcedTheme,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(
    () =>
      forcedTheme ||
      ((typeof window !== "undefined" && localStorage.getItem(storageKey) as Theme) || defaultTheme)
  )

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const root = window.document.documentElement
    const activeTheme = forcedTheme || theme

    root.classList.remove("light", "dark")

    if (activeTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(activeTheme)
  }, [theme, forcedTheme])

  const value = {
    theme: forcedTheme || theme,
    setTheme: (theme: Theme) => {
      if (forcedTheme) return
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
