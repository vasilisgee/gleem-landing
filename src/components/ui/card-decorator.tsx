import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type CardDecoratorProps = {
  children: ReactNode
  className?: string
}

export const CardDecorator = ({ children, className }: CardDecoratorProps) => (
  <div className={cn("relative mx-auto h-36 w-36  border shadow-lg rounded-full overflow-hidden", className)}>
    {/* Light Mode Dot Pattern */}
    <div
      aria-hidden
      className="absolute inset-0 bg-[radial-gradient(circle,var(--color-foreground)_1px,transparent_1px)] bg-[length:16px_16px] opacity-20"
    />
    {/* Light Mode Radial Fade */}
    <div aria-hidden className="to-card absolute inset-0 bg-radial from-transparent" />
    {/* Center Icon Container */}
    <div className="bg-background absolute inset-0 m-auto flex h-12 w-12 items-center justify-center shadow-xs">
      {children}
    </div>
  </div>
)
