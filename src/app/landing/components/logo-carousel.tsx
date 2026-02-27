"use client"

import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import {
  Coffee,
  Hammer,
  House,
  KeyRound,
  Paintbrush,
  PawPrint,
  Sparkles,
  Trees,
  UtensilsCrossed,
  WandSparkles,
  Wrench,
  Zap,
} from "lucide-react"

type LogoId =
  | "hearthplate"
  | "cornercup"
  | "brightwire"
  | "clearflow"
  | "freshnest"
  | "glowbar"
  | "pawporch"
  | "oakline"
  | "greenroute"
  | "safekey"
  | "swiftcoat"
  | "peakroof"

const companies: ReadonlyArray<{ name: string; id: LogoId }> = [
  { name: "Maple Restaurant", id: "hearthplate" }, // restaurant
  { name: "Cornerstone Cafe", id: "cornercup" }, // cafe
  { name: "Northside Electric", id: "brightwire" }, // electrician
  { name: "Blue Plumbing", id: "clearflow" }, // plumbing
  { name: "Fresh Start", id: "freshnest" }, // cleaning
  { name: "Luna Studio", id: "glowbar" }, // beauty
  { name: "Happy Tails", id: "pawporch" }, // pet care
  { name: "Oak & Pine", id: "oakline" }, // carpentry
  { name: "Greend Landscapes", id: "greenroute" }, // landscaping
  { name: "CityLock", id: "safekey" }, // locksmith
  { name: "Swift Painting", id: "swiftcoat" }, // painting
  { name: "Peakline Roofing", id: "peakroof" }, // roofing
]

const logoIcons: Record<LogoId, LucideIcon> = {
  hearthplate: UtensilsCrossed,
  cornercup: Coffee,
  brightwire: Zap,
  clearflow: Wrench,
  freshnest: Sparkles,
  glowbar: WandSparkles,
  pawporch: PawPrint,
  oakline: Hammer,
  greenroute: Trees,
  safekey: KeyRound,
  swiftcoat: Paintbrush,
  peakroof: House,
}

function LogoMark({ id }: { id: LogoId }) {
  const Icon = logoIcons[id]

  return (
    <span className="inline-flex size-7 shrink-0 items-center justify-center">
      <Icon aria-hidden className="size-5 text-foreground" strokeWidth={2.1} />
    </span>
  )
}

export function LogoCarousel() {
  return (
    <section className="pb-12 pt-0 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-8 text-sm font-medium text-muted-foreground">
            Trusted by local service businesses
          </p>

          <div className="relative">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

            <div className="overflow-hidden">
              <div className="flex w-max animate-logo-scroll">
                <div className="flex items-center gap-8 sm:gap-12">
                  {companies.map((company, index) => (
                    <Card
                      key={`first-${index}`}
                      className="flex h-16 flex-shrink-0 items-center justify-center px-3 border-0 bg-transparent opacity-60 shadow-none transition-opacity duration-300 hover:opacity-100"
                    >
                      <div className="flex items-center gap-2">
                        <LogoMark id={company.id} />
                        <span className="mt-1 text-lg font-semibold whitespace-nowrap text-foreground">
                          {company.name}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex items-center gap-8 sm:gap-12">
                  {companies.map((company, index) => (
                    <Card
                      key={`second-${index}`}
                      className="flex h-16 flex-shrink-0 items-center justify-center px-3 border-0 bg-transparent opacity-60 shadow-none transition-opacity duration-300 hover:opacity-100"
                    >
                      <div className="flex items-center gap-2">
                        <LogoMark id={company.id} />
                        <span className="mt-1 text-lg font-semibold whitespace-nowrap text-foreground">
                          {company.name}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
