"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()
  const style = {
    "--normal-bg": "var(--popover)",
    "--normal-text": "var(--popover-foreground)",
    "--normal-border": "var(--border)",
    "--width": "min(30rem, calc(100vw - 2rem))",
    ...(props.style as React.CSSProperties | undefined),
  } as React.CSSProperties

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={style}
      {...props}
    />
  )
}

export { Toaster }
