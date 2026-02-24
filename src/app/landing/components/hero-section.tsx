"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import standPeep from "../../../../public/peeps/gleed-peep-stand-5.webp"
import standPeep2 from "../../../../public/peeps/gleed-peep-stand-2.webp"
import standPeep4 from "../../../../public/peeps/gleed-peep-bike.webp"

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 mt-5 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Your business needs a website. We make it 
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent italic font-normal pr-2">
              {" "}simple
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
             Free websites for small local businesses.<br/> You only pay $9 a month hosting & support.
          </p>

          <div className="flex flex-col gap-4 w-full align-center justify-center">
            <div className="flex w-full align-center justify-center gap-4">
              <Button
                size="lg"
                className="text-base cursor-pointer border border-primary/40 bg-primary text-primary-foreground"
                asChild
              >
                <Link href="#pricing">Get your website</Link>
              </Button>

              <Button variant="outline" size="lg" className="text-base cursor-pointer" asChild>
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

            {/* <p className="text-sm text-muted-foreground">
              No contracts. Cancel anytime.
            </p> */}
           
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <div className="relative group">
            
              <div className="flex w-full justify-center align-center flex-row overflow-hidden max-h-[460px]">
                <Image
                  src={standPeep2}
                  alt=""
                  className="z-10 relative mr-10 h-[30rem] w-auto object-contain"
                  priority
                  unoptimized
                />
                <Image
                  src={standPeep4}
                  alt=""
                  className="z-0 relative mr-10 h-[30rem] w-auto object-contain -ml-65 -mr-20"
                  priority
                  unoptimized
                />
                <Image
                  src={standPeep}
                  alt=""
                  className="z-10 relative -ml-10 -scale-x-100 relative h-[30rem] mt-2 w-auto object-contain "
                  priority
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-35 bg-gradient-to-b from-background/0 via-background/70 to-background rounded-b-xl z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
