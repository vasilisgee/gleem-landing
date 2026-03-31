import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Star } from "lucide-react"

const companies = [
  {
    id: "company-1",
    name: "Hearth Kitchen",
    category: "Restaurant & Dining",
    logo: { src: "/logos/logoipsum-293.svg", width: 20, height: 15 },
  },
  {
    id: "company-2",
    name: "Cornerstone Café",
    category: "Café & Coffee Shop",
    logo: { src: "/logos/logoipsum-296.svg", width: 20, height: 20 },
  },
  {
    id: "company-3",
    name: "Volta Electric Co.",
    category: "Electrical Services",
    logo: { src: "/logos/logoipsum-327.svg", width: 20, height: 20 },
  },
  {
    id: "company-4",
    name: "AquaFix Plumbing",
    category: "Plumbing & Pipework",
    logo: { src: "/logos/logoipsum-424.svg", width: 20, height: 20 },
  },
  {
    id: "company-5",
    name: "CleanSlate Pro",
    category: "Cleaning Services",
    logo: { src: "/logos/logoipsum-355.svg", width: 16, height: 21 },
  },
  {
    id: "company-6",
    name: "Velvet Beauty",
    category: "Beauty & Wellness",
    logo: { src: "/logos/logoipsum-363.svg", width: 50, height: 20 },
  },
  {
    id: "company-7",
    name: "Happy Tails",
    category: "Pet Care & Grooming",
    logo: { src: "/logos/logoipsum-370.svg", width: 31, height: 20 },
  },
  {
    id: "company-8",
    name: "CityLock",
    category: "Locksmith & Security",
    logo: { src: "/logos/logoipsum-381.svg", width: 20, height: 20 },
  },
  {
    id: "company-9",
    name: "PrimeCoat Painters",
    category: "Painting & Decorating",
    logo: { src: "/logos/logoipsum-394.svg", width: 20, height: 20 },
  },
  {
    id: "company-10",
    name: "SkyLine Roofing Co.",
    category: "Roofing & Exteriors",
    logo: { src: "/logos/logoipsum-411.svg", width: 20, height: 20 },
  },
] as const

function LogoMark({
  src,
  width,
  height,
}: {
  src: string
  width: number
  height: number
}) {

  return (
    <span className="inline-flex shrink-0 w-5 items-center justify-center">
      <Image
        src={src}
        alt=""
        aria-hidden
        width={width}
        height={height}
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
          <div className='flex flex-col items-center gap-4 mb-8'>
            <Badge variant='outline' className='flex items-center gap-2 bg-primary/5 text-accent-foreground p-1.5 px-3 rounded-full'>
              <Star className='' />
              Trusted by Local Businesses
            </Badge>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-linear-to-l from-background to-transparent" />

            <div className="overflow-hidden">
              <div className="flex w-max items-center gap-8 sm:gap-12 animate-logo-scroll cursor-default">
                <div className="flex items-center gap-8 sm:gap-12">
                  {companies.map((company) => (
                    <Card
                      key={`first-${company.id}`}
                      className={cardClassName}
                    >
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap rounded-full bg-primary/5 text-accent-foreground text-xs"
                      >
                        {company.category}
                      </Badge>
                      <div className="flex min-w-0 items-center justify-center gap-1">
                        <LogoMark {...company.logo} />
                        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground">
                          {company.name}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex items-center gap-8 sm:gap-12">
                  {companies.map((company) => (
                    <Card
                      key={`second-${company.id}`}
                      className={cardClassName}
                    >
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap rounded-full bg-primary/5 text-accent-foreground text-xs"
                      >
                        {company.category}
                      </Badge>
                      <div className="flex min-w-0 items-center justify-center gap-1">
                        <LogoMark {...company.logo} />
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
