"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import standPeep from "../../../../public/peeps/gleem-peep-stand-5.webp"
import standPeep2 from "../../../../public/peeps/gleem-peep-stand-2.webp"
import standPeep4 from "../../../../public/peeps/gleem-peep-bike.webp"

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

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-16 sm:pt-20 pb-10 sm:pb-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut' , delay: 0.3  }}
            >
              Your business needs a website. We make it
            </motion.span>{' '}
            <motion.span
              className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent italic font-normal pr-2"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            >
              {" "}simple
            </motion.span>
          </h1>

          <motion.p
            className="mx-auto mb-10 max-w-2xl text-md lg:text-lg text-muted-foreground "
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
          >
             Free websites for small local businesses.<br/> You only pay $9 a month hosting & support.
          </motion.p>

          <motion.div
            className="flex w-full flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 2.8 }}
          >
            <div className="flex w-full flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="button-shine-sweep text-base cursor-pointer"
                asChild
              >
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('#pricing')
                  }}
                >
                  <span className="button-shine-sweep__label">Get your website</span>
                </a>
              </Button>

              <Button variant="secondary" size="lg" className="text-base cursor-pointer" asChild>
                <a
                  href="#how-it-works"
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo('#how-it-works')
                  }}
                >
                  See how it works
                </a>
              </Button>
            </div>
        </motion.div>

        <div className="mx-auto mt-20 max-w-6xl">
          <div className="relative group">
            
              <div className="relative h-[14rem] w-full sm:h-[18rem] md:h-[24rem] lg:h-[460px]">
                <div className="absolute bottom-0 left-1/2 flex w-max origin-bottom items-end justify-center -translate-x-1/2 scale-[0.46] sm:scale-[0.62] md:scale-[0.8] lg:scale-100">
                  <motion.div
                    className="relative z-10 mr-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.65, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
                  >
                    <Image
                      src={standPeep2}
                      alt=""
                      className="h-[29rem] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </motion.div>
                  <motion.div
                    className="relative z-0 -ml-65 -mr-20"
                    initial={{ opacity: 0, x: -66 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.85, ease: [0.22, 1, 0.36, 1], delay: 2.1 }}
                  >
                    <Image
                      src={standPeep4}
                      alt=""
                      className="h-[28rem] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </motion.div>
                  <motion.div
                    className="relative z-10 ml-40 mt-2 -scale-x-100"
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.9, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
                  >
                    <Image
                      src={standPeep}
                      alt=""
                      className="h-[29rem] w-auto object-contain"
                      priority
                      unoptimized
                    />
                  </motion.div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 z-20 h-24 w-full rounded-b-xl bg-gradient-to-b from-background/0 via-background/70 to-background sm:h-28 lg:h-35"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
