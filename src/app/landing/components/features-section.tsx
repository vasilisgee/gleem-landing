import {
  ArrowRight,
  ClipboardList,
  LogIn,
  MousePointerClick,
  RefreshCw
} from 'lucide-react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const mainFeatures = [
  {
    icon: MousePointerClick,
    title: 'Easy to use',
    description: 'Clear fields and simple labels with no confusing settings.'
  },
  {
    icon: RefreshCw,
    title: 'Update anytime',
    description: 'Change your business info, text, or details whenever you need.'
  },
  {
    icon: LogIn,
    title: 'Easy access',
    description: 'Just sign in with your Google account and you’re in.'
  },
  {
    icon: ClipboardList,
    title: 'Only what matters',
    description: 'No unnecessary options or advanced settings to worry about. '
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/40 pb-10 scroll-mt-0 lg:scroll-mt-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
     

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="/screenshots/admin-1-light.webp"
            darkSrc="/screenshots/admin-1-dark.webp"
            lightSlides={[
              "/screenshots/admin-1-light.webp",
              "/screenshots/admin-2-light.webp",
              "/screenshots/admin-3-light.webp",
            ]}
            darkSlides={[
              "/screenshots/admin-1-dark.webp",
              "/screenshots/admin-2-dark.webp",
              "/screenshots/admin-3-dark.webp",
            ]}
            alt="Admin Panel"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge className="mb-4 bg-background border-foreground/30 text-foreground"> What&apos;s Included</Badge>
              <h2 className="text-5xl font-semibold tracking-tight sm:text-5xl mb-5">
              One panel to go
              </h2> 
              <p className="text-muted-foreground text-base text-pretty">
                Everything you need to manage your website, and nothing you don’t.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col lg:flex-row gap-4 pt-5">
              <Button size="lg" variant="secondary" className="cursor-pointer" asChild>
                <a
                  href="https://thegreekrestaurant.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center'
                >
                  Try Admin Panel
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="cursor-pointer" asChild>
                <a
                  href="https://thegreekrestaurant.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center'
                >
                   View Live Website
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>

         <Image
            src="/peeps/gleem-peep-sit-3.webp"
            alt=""
            aria-hidden
            width={160}
            height={160}
            className="pointer-events-none absolute right-[40%] lg:right-12 -bottom-50 lg:-bottom-60 z-0 -scale-x-100 h-auto w-[100px] lg:w-[170px]"
          />
      </div>
    </section>
  )
}
