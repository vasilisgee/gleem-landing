"use client"

import type { CSSProperties } from "react"
import { Check, X, ThumbsUp, ThumbsDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DotPattern } from '@/components/dot-pattern'

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
    <section id="gleem-way" className="py-20 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl relative">
          <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14 relative z-10">
            <Badge className="mb-4 bg-background border-foreground/30 text-foreground">
              Why Gleem
            </Badge>
            <h2 className="mb-6 text-4xl font-semibold leading-13 tracking-tight sm:text-5xl">
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

          <div className="mx-auto max-w-4xl relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              <Card className="py-0 h-fit lg:self-center">
                <CardContent className="p-8 sm:p-10">
                  {/* <div className="mb-3">
                    <svg
                      viewBox="0 0 475.136 475.136"
                      aria-hidden="true"
                      className="h-6 w-6 text-muted-foreground"
                      fill="currentColor"
                    >
                      <path d="M422.686,48.282C385.9,44.07,350.644,31.518,314.601,23.515c-38.115-8.46-76.622-15.016-115.128-21.427c-0.77-0.13-1.498-0.13-2.229-0.152c-1.219-0.264-2.503-0.427-3.943-0.358c-29.627,1.425-58.965,5.226-88.225,10.02c-1.894,0.312-3.438,0.937-4.784,1.721c-16.938,3.558-34.165,11.53-43.429,26.837c-8.092,13.371-9.438,28.241-7.482,43.143c-22.759,19.979-32.334,46.54-25.651,76.101c-30.247,31.72-31.943,73.816-2.986,105.944c-18.293,30.94-17.725,65.44,5.497,94.75c1.513,1.909,3.181,3.179,4.908,3.961c1.378,0.919,2.986,1.665,4.956,2.087c45.801,9.826,92.6,5.637,131.098-22.846c4.067-3.006,5.893-7.089,6.101-11.182c0.541-1.488,0.904-3.052,0.973-4.702c0.071-1.016,0.076-1.382,0.03-1.244c0.089-0.549,0.183-1.103,0.269-1.65c0.366-2.575,0.777-5.129,0.879-7.729c2.519,0.091,5.035,0.192,7.546,0.381c-17.57,60.057-10.266,183.046,80.688,151.237c7.023-2.453,9.902-8.48,9.74-14.351c0.4-1.279,0.695-2.641,0.736-4.169c1-36.927,8.373-71.996,28.954-103.332c25.243-38.436,67.085-35.216,108.476-30.768c13.355,1.438,26.975,4.753,40.472,3.89c16.666-1.066,17.758-6.058,22.267-19.656c0.473-1.427,0.803-2.966,0.803-4.723c0-74.921-0.076-149.841-1.193-224.749C473.603,47.805,438.152,50.049,422.686,48.282z M375.592,284.893c-88.728-3.936-125.781,76.81-129.706,158.605c-54.446,8.831-45.624-87.087-34.256-122.379c1.742,0.351,3.491,0.635,5.233,1.025c17.928,3.997,25.547-23.516,7.586-27.518c-37.783-8.429-75.451-8.449-113.419-1.192c-18.064,3.452-10.395,30.96,7.587,27.517c9.432-1.802,18.854-2.995,28.276-3.671c-0.03,0.549-0.03,0.771,0,0.665c-0.089,0.554-0.183,1.103-0.271,1.655c-0.17,1.219-0.353,2.438-0.508,3.656c-30.336,19.546-64.838,22.979-100.328,15.772c-16.231-21.348-10.321-45.605,4.057-66.252c2.491-3.58,2.963-7.095,2.168-10.197c0.358-3.6-0.833-7.394-4.4-10.663c-25.568-23.456-25.266-51.445-0.889-75.235c5.616-2.572,9.47-8.313,6.937-15.983c-7.404-22.437-3.425-42.894,16.036-57.614c0.614-0.462,1.102-0.983,1.617-1.493c5.215-2.813,8.965-8.412,7.317-15.813c-2.262-10.191-3.501-22.15,2.869-31.219c6.543-9.308,18.225-12.286,28.782-14.251c1.58-0.297,2.897-0.828,4.093-1.452c26.185-4.243,52.402-7.462,78.922-8.742c0.307-0.016,0.566-0.099,0.863-0.125c63.797,10.643,127.383,21.726,189.177,41.236c0.614,0.193,1.188,0.254,1.777,0.373C376.587,142.583,370.118,213.481,375.592,284.893z M404.222,286.371c-5.469-69.302,0.381-138.121,8.516-206.994c10.918,0.724,21.836,1.435,32.764,2.138c0.939,69.325,1.071,138.649,1.076,207.979C432.404,289.342,418.298,288.163,404.222,286.371z" />
                    </svg>
                   
                  </div> */}
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

              <Card className="relative overflow-hidden border-0 py-0 shadow-xl ring-1 ring-transparent">
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
                  {/* <div className="mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <ThemedSvgIcon
                        src="/icons/gleem-way-fire.svg"
                        className="inline-block h-5 w-5 text-primary"
                      />
                    </div>
                    
                  </div> */}
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
            </div>
           
          </div>
           <DotPattern className="opacity-50 z-0" size="md" fadeStyle="ellipse" /> 
        </div>
      </div>
    </section>
  )
}
