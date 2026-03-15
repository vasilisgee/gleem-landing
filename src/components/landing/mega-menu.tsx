"use client"

import type { ComponentType, CSSProperties, MouseEvent } from "react"
import {
  LayoutGrid,
  ListChecks,
  Rocket,
  Sparkles,
  Gift,
  WandSparkles,
} from "lucide-react"

type MegaMenuItem = {
  title: string
  description: string
  href: string
  icon: ComponentType<{ className?: string }>
}

type MegaMenuSection = {
  title: string
  items: MegaMenuItem[]
}

export const megaMenuSections: MegaMenuSection[] = [
  {
    title: " ",
    items: [
      {
        title: "How it Works",
        description: "From signup to live site in 72 hours.",
        icon: Rocket,
        href: "#how-it-works",
      },
      {
        title: "Why Gleem",
        description: "Design without the agency price.",
        icon: Sparkles,
        href: "#gleem-way",
      },
       {
        title: "What we Offer",
        description: "Everything a local business needs.",
        icon: ListChecks ,
        href: "#what-included",
      },
      {
        title: "What's Included",
        description: "One panel to manage it all.",
        icon: Gift,
        href: "#features",
      },
    ],
  }
]

function smoothScrollTo(targetId: string) {
  if (!targetId.startsWith("#")) return

  const element = document.querySelector<HTMLElement>(targetId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export function MegaMenu() {
  function handleMegaMenuClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return

    event.preventDefault()
    smoothScrollTo(href)
    ;(document.activeElement as HTMLElement | null)?.blur()
  }

  return (
    <aside className="w-[280px] rounded-3xl p-1">
      <div className="relative overflow-hidden rounded-md border border-border/60 bg-muted/40 p-3">
        <div
          className="mega-menu-shine-ring mega-menu-shine-animate pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]"
          style={
            {
              "--border-width": "2px",
              "--duration": "22s",
              backgroundImage:
                "radial-gradient(circle at center, transparent 36%, transparent 43%, var(--mega-menu-shine) 50%, transparent 57%, transparent 64%)",
              backgroundSize: "260% 260%",
              backgroundRepeat: "no-repeat",
              mask:
                "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
              WebkitMask:
                "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
              WebkitMaskComposite: "xor",
              padding: "var(--border-width)",
            } as CSSProperties
          }
        />

        <div className="relative z-10">
          {megaMenuSections.map((section) => (
            <div key={section.title} className="space-y-4">

              <div className="space-y-2">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group block rounded-sm p-2 transition-colors hover:bg-accent/60"
                    onClick={(event) => handleMegaMenuClick(event, item.href)}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </span>
                    </div>
                    <p className="ml-6 mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
