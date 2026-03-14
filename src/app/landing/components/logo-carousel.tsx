"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Star } from "lucide-react"

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

const companies: ReadonlyArray<{ name: string; category: string; id: LogoId }> = [
  { name: "Hearth Kitchen", category: "Restaurant & Dining", id: "hearthplate" },
  { name: "Cornerstone Café", category: "Café & Coffee Shop", id: "cornercup" },
  { name: "Volta Electric Co.", category: "Electrical Services", id: "brightwire" },
  { name: "AquaFix Plumbing", category: "Plumbing & Pipework", id: "clearflow" },
  { name: "CleanSlate Pro", category: "Cleaning Services", id: "freshnest" },
  { name: "Velvet Beauty", category: "Beauty & Wellness", id: "glowbar" },
  { name: "Happy Tails", category: "Pet Care & Grooming", id: "pawporch" },
  { name: "CityLock", category: "Locksmith & Security", id: "safekey" },
  { name: "PrimeCoat Painters", category: "Painting & Decorating", id: "swiftcoat" },
  { name: "SkyLine Roofing Co.", category: "Roofing & Exteriors", id: "peakroof" },
]

const logoMarks: Record<LogoId, { src: string; width: number; height: number }> = {
  hearthplate: { src: "/logos/logoipsum-293.svg", width: 20, height: 15 },
  cornercup: { src: "/logos/logoipsum-296.svg", width: 20, height: 20 },
  brightwire: { src: "/logos/logoipsum-327.svg", width: 20, height: 20 },
  clearflow: { src: "/logos/logoipsum-424.svg", width: 20, height: 20 },
  freshnest: { src: "/logos/logoipsum-355.svg", width: 16, height: 21 },
  glowbar: { src: "/logos/logoipsum-363.svg", width: 50, height: 20 },
  pawporch: { src: "/logos/logoipsum-370.svg", width: 31, height: 20 },
  oakline: { src: "/logos/logoipsum-374.svg", width: 20, height: 20 },
  greenroute: { src: "/logos/logoipsum-379.svg", width: 20, height: 20 },
  safekey: { src: "/logos/logoipsum-381.svg", width: 20, height: 20 },
  swiftcoat: { src: "/logos/logoipsum-394.svg", width: 20, height: 20 },
  peakroof: { src: "/logos/logoipsum-411.svg", width: 20, height: 20 },
}

function LogoMark({ id }: { id: LogoId }) {
  const logo = logoMarks[id]

  return (
    <span className="inline-flex shrink-0 w-5 items-center justify-center">
      <Image
        src={logo.src}
        alt=""
        aria-hidden
        width={logo.width}
        height={logo.height}
        className="logo-carousel-mark h-auto w-auto shrink-0"
      />
    </span>
  )
}

export function LogoCarousel() {
  const cardClassName =
    "logo-carousel-card inline-flex min-h-[5rem] w-fit min-w-fit flex-none flex-col items-center justify-center gap-2 border-0 bg-transparent px-3 py-2 text-center opacity-60 shadow-none transition-opacity duration-300 hover:opacity-100"

  return (
    <section className="pb-12 pt-0 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <p className="mb-8 text-sm font-medium text-muted-foreground">
            Trusted by local service businesses
          </p> */}
          <div className='flex flex-col items-center gap-4 mb-8'>
            <Badge variant='outline' className='flex items-center gap-2 bg-primary/5 text-accent-foreground p-1.5 px-3 rounded-full'>
              <Star className='' />
              Trusted by Local Businesses
            </Badge>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

            <div className="overflow-hidden">
              <div className="flex w-max items-center gap-8 sm:gap-12 animate-logo-scroll cursor-default">
                <div className="flex items-center gap-8 sm:gap-12">
                  {companies.map((company, index) => (
                    <Card
                      key={`first-${index}`}
                      className={cardClassName}
                    >
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap rounded-full bg-primary/5 text-accent-foreground text-xs"
                      >
                        {company.category}
                      </Badge>
                      <div className="flex min-w-0 items-center justify-center gap-1">
                        <LogoMark id={company.id} />
                        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground">
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
                      className={cardClassName}
                    >
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap rounded-full bg-primary/5 text-accent-foreground text-xs"
                      >
                        {company.category}
                      </Badge>
                      <div className="flex min-w-0 items-center justify-center gap-1">
                        <LogoMark id={company.id} />
                        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground">
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
