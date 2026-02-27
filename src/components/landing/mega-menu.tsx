"use client"

import type { ComponentType, CSSProperties } from "react"
import {
  CircleHelp,
  CreditCard,
  LayoutGrid,
  ListChecks,
  Rocket,
  Sparkles,
  Users,
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
        title: "How it works",
        description: "See how we plan, design, and launch your website.",
        icon: LayoutGrid,
        href: "#how-it-works",
      },
      {
        title: "Why Gleem",
        description: "Why choose gleem for your local businesses.",
        icon: WandSparkles,
        href: "#gleem-way",
      },
      {
        title: "What we offer",
        description: "Everything included in your one-page business website.",
        icon: Sparkles,
        href: "#what-included",
      },
      {
        title: "Feature details",
        description: "Review all website capabilities and integrations.",
        icon: ListChecks,
        href: "#features",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        title: "Pricing",
        description: "Simple monthly or annual pricing with no surprises.",
        icon: CreditCard,
        href: "#pricing",
      },
      {
        title: "Meet the team",
        description: "The people crafting and supporting your website.",
        icon: Users,
        href: "#team",
      },
      {
        title: "FAQ",
        description: "Quick answers to common setup and support questions.",
        icon: CircleHelp,
        href: "#faq",
      },
      {
        title: "Back to top",
        description: "Jump to the hero section.",
        icon: Rocket,
        href: "#hero",
      },
    ],
  },
]

export function MegaMenu() {
  return (
    <aside className="w-[640px] max-w-[95vw] rounded-3xl p-1">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5">
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

        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          {megaMenuSections.map((section) => (
            <div key={section.title} className="space-y-4">
              {/* <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                {section.title}
              </h3> */}

              <div className="space-y-2">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="group block rounded-md p-2 transition-colors hover:bg-accent/60"
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
