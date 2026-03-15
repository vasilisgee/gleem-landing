import type { CSSProperties } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

function ThemedSvgIcon({ src, className }: { src: string; className?: string }) {
  const iconMaskStyle: CSSProperties = {
    backgroundColor: "currentColor",
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  }

  return <span aria-hidden className={className} style={iconMaskStyle} />
}

const values = [
  {
    iconSrc: "/icons/coffee.svg",
    iconStep:"1",
    iconClassName: "h-8 w-8 group-hover:rotate-12",
    peepSrc: "/peeps/gleem-peep-step-1.webp",
    title: "Tell us about your business",
    description: "Just answer a few simple questions about your business, services and location. It takes 2 minutes.",
  },
  {
    iconSrc: "/icons/gleem-way-pro.svg",
    iconStep:"2",
    iconClassName: "h-6 w-6 mr-1 group-hover:scale-110",
    peepSrc: "/peeps/gleem-peep-step-2.webp",
    title: "A designer builds your site",
    description: "A professional designer takes your information, generates all the visuals, and builds your website.",
  },
  {
    iconSrc: "/icons/rocket.svg",
    iconStep:"3",
    iconClassName: "h-8 w-8 mr-1 group-hover:-translate-y-2",
    peepSrc: "/peeps/gleem-peep-step-3.webp",
    title: "Preview and Launch",
    description: "We’ll send you a private link to see your new site in 72 hrs. If you love it, we launch it on your chosen domain.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-15 lg:scroll-mt-25 pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <Badge className="mb-4 bg-background border-foreground/30 text-foreground">
            How it Works
          </Badge>
          <h2 className="mb-6 text-5xl font-semibold tracking-tight sm:text-5xl">
            Get your website in 3 easy steps
          </h2>
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-muted-foreground">We build to support local businesses.</span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="group py-2 shadow-[0_12px_28px_-24px_color-mix(in_oklab,var(--primary)_70%,transparent)]">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                     <Badge className="mb-4 text-xs ">
                      Step {value.iconStep}
                    </Badge>
                    <div className="relative mb-6 flex h-36 w-36 items-end justify-center overflow-hidden rounded-full bg-muted/60 px-3 pt-3 pb-0">
                      <ThemedSvgIcon
                        src={value.iconSrc}
                        className={`absolute right-3 top-9 z-20 text-primary transition-transform duration-300 ease-linear ${value.iconClassName}`}
                      />
                      <Image
                        src={value.peepSrc}
                        alt=""
                        width={160}
                        height={160}
                        className="h-[160px] w-auto object-contain translate-y-10 transition duration-400 ease group-hover:-translate-x-5 -translate-x-7"
                      />
                    </div>
                    
                    <h3 className="text-xl font-medium">{value.title}</h3>
                    <p className="mt-3 text-sm leading-4.5 text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
