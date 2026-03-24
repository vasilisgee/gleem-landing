"use client"

import type { FormEvent } from "react"
import { motion } from 'framer-motion'
import { Check, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'
import Image from 'next/image'
import { showPeepSuccessToast } from "@/lib/peep-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false)
  const [isSubmittingLead, setIsSubmittingLead] = useState(false)

  function openLeadDialog() {
    setIsLeadDialogOpen(true)
  }

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setIsSubmittingLead(true)

    window.setTimeout(() => {
      form.reset()
      setIsLeadDialogOpen(false)
      setIsSubmittingLead(false)

      window.setTimeout(() => {
        showPeepSuccessToast("Request received!", {
          description: `Your website creation request was received. We sent the next steps to your email.`,
        })
      }, 350)
    }, 900)
  }

  return (
    <section id="pricing" className="py-24 scroll-mt-0 lg:scroll-mt-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-md text-center mb-10 z-20 relative ">
          <Badge className="mb-4 bg-background border-foreground/30 text-foreground">Pricing Plan</Badge>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h2 className="text-5xl font-semibold tracking-tight sm:text-5xl mb-6">
              Simple and transparent pricing
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
          >
            <p className="text-lg text-muted-foreground ">
              Pay only for hosting and support.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-3xl z-20 relative ">
           <motion.div
              className="pointer-events-none absolute hidden lg:block lg:left-15 lg:-top-35 z-0"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.24 }}
            >
              <Image
                src="/peeps/gleem-peep-stand-6.webp"
                alt=""
                aria-hidden
                width={160}
                height={160}
                className="h-auto w-[60px] lg:w-[100px]"
              />
            </motion.div>
          <div className="border bg-card py-2 rounded-xl relative">
            <div className="grid items-start lg:grid-cols-2 relative z-20 overflow-hidden">
              <div className="order-2 flex flex-col gap-6 p-8 lg:order-1">
                <div>
                  <div className="text-xl font-medium tracking-tight mb-2">What you get</div>
                  <div className="text-muted-foreground text-balance text-sm">
                    Everything included in your website.
                  </div>
                </div>

                <div>
                  <ul role="list" className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Custom-designed website</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Mobile-ready & SEO-ready</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Lightning fast global hosting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Published on your domain</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Updates, security & maintenance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Talk-to-a-human support</span>
                    </li>
                    
                  </ul>
                </div>
              </div>

              <div className="order-1 my-2 mx-4 flex flex-col gap-4 rounded-xl border-transparent bg-card bg-gradient-to-r from-primary/8 to-secondary/8 p-8 py-10 shadow-xl ring-1 ring-foreground/10 lg:order-2 lg:self-center">

                <div className="align-center text-center">

                  <div className="flex items-center justify-center mb-5">
                    <ToggleGroup
                      type="single"
                      value={isYearly ? "yearly" : "monthly"}
                      onValueChange={(value) => setIsYearly(value === "yearly")}
                      className="bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none"
                    >
                      <ToggleGroupItem
                        value="monthly"
                        className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border h-6 px-3 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors text-xs"
                      >
                        Monthly
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="yearly"
                        className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border h-6 px-3 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors text-xs"
                      >
                        Annually
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div className="text-3xl font-medium tracking-tighter mb-2 font-display">All-in-one Plan</div>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold text-xs">Save 20%</span> with annual billing
                  </p>
                  <div className="flex flex-column items-center justify-center mb-1 mt-5">
                      <div className="text-4xl font-bold ">
                        {isYearly ? "$7" : "$9"}
                      </div>
                      <div className="text-sm font-bold ml-1">/mo</div> 
                  </div>
                </div>

                <Button
                  size="lg"
                  type="button"
                  onClick={openLeadDialog}
                  className="button-shine-sweep w-full text-base cursor-pointer"
                >
                  <span className="button-shine-sweep__label">Get your Website</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen}>
          <DialogContent>
            <DialogHeader className="items-center text-center">
              <DialogTitle className="text-4xl font-semibold tracking-tight mb-2 mt-5">
                Get your Website
              </DialogTitle>
              <DialogDescription className="text-base mb-5">
                Enter your details and we&apos;ll send you the next steps.
              </DialogDescription>
            </DialogHeader>

            <div className="relative mx-auto w-full">
              <div className="relative mx-auto flex w-full max-w-sm flex-col items-center mb-5 group">
               
                <div className="relative h-35 w-35 overflow-hidden rounded-full border bg-muted/60">
                  <Image
                    src="/peeps/peep-phone.svg"
                    alt=""
                    aria-hidden
                    fill
                    className="object-cover object-center scale-145 translate-y-5 transition duration-400 ease group-hover:translate-y-4"
                  />
                </div>
                <form onSubmit={handleLeadSubmit} className="mx-auto w-full max-w-[17.5rem] space-y-4">
                 
                  <div className="space-y-2">
                    <label htmlFor="pricing-contact-name" className="text-[0.95rem] font-semibold tracking-tight inline-block mb-2">
                      Your name
                    </label>
                    <Input
                      id="pricing-contact-name"
                      name="name"
                      placeholder="John Doe"
                      className="h-11 bg-white text-base dark:bg-input/30"
                      required
                      minLength={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="pricing-contact-email" className="text-[0.95rem] font-semibold tracking-tight inline-block mb-2">
                      Your email
                    </label>
                    <Input
                      id="pricing-contact-email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-11 bg-white text-base dark:bg-input/30"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="button-shine-sweep w-full cursor-pointer text-base mt-2"
                    disabled={isSubmittingLead}
                  >
                    <span className="button-shine-sweep__label flex items-center justify-center gap-2">
                      {isSubmittingLead ? <LoaderCircle className="size-4 animate-spin" /> : "Request Website"}
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="pointer-events-none absolute top-50 left-1/2 h-90 w-[40%] -translate-x-1/2 z-0 rounded-full bg-primary/20 blur-3xl " />
            
      </div>
    </section>
  )
}
