"use client"

import { Button } from '@/components/ui/button'

const smoothScrollTo = (targetId: string) => {
  if (!targetId.startsWith('#')) {
    return
  }

  const element = document.querySelector<HTMLElement>(targetId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export function CTASection() {
  return (
    <section className='py-16 lg:py-24 bg-muted/60'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center relative'>
            <div className='space-y-8 relative z-10'>
              <div className='space-y-6'>
                <h2 className='mb-6 text-5xl font-semibold leading-16 tracking-tight sm:text-6xl max-w-xl mx-auto leading-tight'>
                  Spark your business online
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent italic font-normal pr-2">
                   {" "}today
                  </span>
                </h2>

                <p className='text-muted-foreground mx-auto max-w-2xl text-balance'>
                 Help your customers find and trust you.
                </p>
              </div>

              <div className='flex flex-row justify-center gap-4 sm:gap-6'>
                <Button
                  size='lg'
                  className='button-shine-sweep text-base cursor-pointer'
                  asChild
                >
                  <a
                    href='#pricing'
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo('#pricing')
                    }}
                  >
                    <span className="button-shine-sweep__label">Get your Website</span>
                  </a>
                </Button>
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
            <div className="pointer-events-none absolute top-10 left-1/2 h-22 w-[80%] -translate-x-1/2 rounded-full bg-primary/5 blur-2xl lg:-top-8 lg:h-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
