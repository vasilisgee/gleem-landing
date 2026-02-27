"use client"

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className='py-16 lg:py-24 bg-muted/80'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center relative'>
            <div className='space-y-8 '>
              {/* <div className='flex flex-col items-center gap-4 mb-4'>
                <Badge variant='outline' className='flex items-center gap-2'>
                  <Star className='size-6' />
                  Trusted by Local Businesses
                </Badge>
              </div> */}

              <div className='space-y-6'>
                <h1 className='mb-6 text-4xl font-semibold leading-16 tracking-tight sm:text-6xl max-w-xl mx-auto'>
                  Spark your business online
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent italic font-normal pr-2">
                   {" "}today.
                  </span>
                </h1>

                <p className='text-muted-foreground mx-auto max-w-2xl text-balance'>
                 Help your customers find and trust you.
                </p>
              </div>

              <div className='flex flex-col justify-center gap-4 sm:flex-row sm:gap-6'>
                <div className="conic-cta-border conic-cta-border-hero rounded-lg">
                  <Button size='lg' className='cursor-pointer font-medium border border-transparent' asChild>
                    <a href='#pricing'>
                      Get your Website
                    </a>
                  </Button>
                </div>
                {/* <Button variant='outline' size='lg' className='cursor-pointer font-medium group' asChild>
                  <a href='#what-included'>
                    Learn More
                  </a>
                </Button> */}
              </div>

              <div className='text-foreground flex flex-wrap items-center justify-center gap-6 text-xs'>
                <div className='flex items-center gap-2'>
                    <span className='logo-dot-glow me-1 inline-flex items-center justify-center text-base leading-none -translate-y-px'>●</span>

                  <span>Free to get started</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='logo-dot-glow me-1 inline-flex items-center justify-center text-base leading-none -translate-y-px'>●</span>

                  <span>Everything in one page</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='logo-dot-glow me-1 inline-flex items-center justify-center text-base leading-none -translate-y-px'>●</span>

                  <span>Easy to update anytime</span>
                </div>
              </div>
            </div>
            {/* <div className="pointer-events-none absolute top-2 left-1/2 h-24 w-[80%] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl lg:-top-8 lg:h-80" /> */}
            
          </div>
        </div>
      </div>
    </section>
  )
}
