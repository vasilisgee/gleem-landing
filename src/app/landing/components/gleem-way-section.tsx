import type { CSSProperties } from "react"
import { Check, X, ThumbsUp, ThumbsDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const websiteBuilderPainPoints = [
  "Time-consuming to learn",
  "Need pro photos and copy upfront",
  "Takes days to get something usable",
  "Design and technical skills required",
  "Easy to end up with a generic template",
  "Often misses local SEO best practices",
]

const gleemBenefits = [
  "We handle everything end-to-end",
  "A pro designer crafts your visuals",
  "Launch-ready in about 72 hours",
  "No design or technical skills needed",
  "Custom, professional look and feel",
  "Built with strong local SEO foundations",
]

export function GleemWaySection() {
  return (
    <section id="gleem-way" className="py-20 sm:py-24 bg-muted/40 scroll-mt-5 lg:scroll-mt-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl relative">
          <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14 relative z-10">
            <Badge className="mb-4 bg-background border-foreground/30 text-foreground">
              Why Gleem
            </Badge>
            <h2 className="mb-6 text-5xl font-semibold leading-13 tracking-tight sm:text-5xl">
              Website builders take time.
              <br />
              Agencies cost a fortune.
              <br />
              We bridge the gap.
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              We are professional human designers using modern AI tools to deliver polished websites at a lower cost.
            </p>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl overflow-hidden lg:overflow-visible">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start relative">
              <Card className="order-2 h-fit py-0 lg:order-1 lg:self-center relative z-10">
                <CardContent className="p-8 sm:p-10">
                  <h3 className="mb-4 text-lg font-medium tracking-tight text-muted-foreground">
                     <ThumbsDown className="h-5 w-5 text-muted-foreground inline mr-2" />Website Builders
                  </h3>
                  <ul className="space-y-4">
                    {websiteBuilderPainPoints.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm mb-3 last:mb-0">
                        <X className="mt-0.5 h-4 w-4 shrink-0 " />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative z-10 order-1 overflow-hidden border-0 py-0 shadow-xl ring-1 ring-transparent lg:order-2">
                <div
                  className="mega-menu-shine-ring mega-menu-shine-animate pointer-events-none absolute inset-0 z-0 size-full rounded-[inherit] will-change-[background-position]"
                  style={
                    {
                      "--border-width": "1.5px",
                      "--duration": "11s",
                      backgroundImage:
                        "radial-gradient(circle at center, transparent 36%, transparent 43%, var(--mega-menu-shine) 50%, transparent 57%, transparent 64%)",
                      backgroundSize: "220% 220%",
                      backgroundRepeat: "no-repeat",
                      animationDelay: "-3.5s",
                      mask:
                        "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box exclude, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
                      WebkitMask:
                        "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
                      WebkitMaskComposite: "xor",
                      padding: "var(--border-width)",
                    } as CSSProperties
                  }
                />
                <CardContent className="relative z-10 p-8 sm:p-10">
                  <Badge className="absolute top-5 right-5 text-xs">
                    Top Choice
                  </Badge>
                  <h3 className="mb-4 text-xl font-medium tracking-tight flex item-center pt-3">
                      <ThumbsUp className="h-5 w-5 inline mr-2 mt-0.5" /> The Gleem Way
                  </h3>
                  <ul className="space-y-4">
                    {gleemBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 mb-3 text-sm">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary bg-muted/80 p-0.5 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="pointer-events-none absolute hidden lg:block bottom-3 left-1/2 z-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl sm:bottom-4 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:-bottom-5 lg:left-auto lg:-right-42 lg:h-95 lg:w-[44%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
