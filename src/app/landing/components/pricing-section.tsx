"use client"

import type { FormEvent } from "react"
import { Check, CircleCheckBig } from 'lucide-react'
import Image from "next/image"
import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'
import { DotPattern } from '@/components/dot-pattern'
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
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [isSubmittingLead, setIsSubmittingLead] = useState(false)

  function openLeadDialog(planName: string) {
    setSelectedPlan(planName)
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
    const planLabel = selectedPlan

    window.setTimeout(() => {
      form.reset()
      setIsLeadDialogOpen(false)
      setIsSubmittingLead(false)

      window.setTimeout(() => {
        toast.success("You're all set", {
          description: `Your ${planLabel} request was received. We sent the next steps to your email.`,
          icon: <CircleCheckBig className="size-4" />,
          closeButton: true,
        })
      }, 350)
    }, 900)
  }

  return (
    <section id="pricing" className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center mb-12 z-20 relative ">
          <Badge className="mb-4 bg-background border-foreground text-foreground">Pricing Plan</Badge>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
            Simple and transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have your website built for FREE. Pay only for hosting and support.
          </p>

        </div>

        <div className="mx-auto max-w-3xl z-20 relative ">
           {/* <Image
              src="/peeps/gleed-peep-stand-6.webp"
              alt=""
              aria-hidden
              width={160}
              height={160}
              className="pointer-events-none absolute left-5 -top-40 z-0 h-auto w-[125px]"
            /> */}
          <div className="border bg-card/60 py-2 rounded-xl relative">
            <div className="grid items-start lg:grid-cols-2 relative z-20">
              <div className="p-8 flex flex-col gap-6">
              
                {/* 
                <div>
                  <div className="text-4xl font-bold mb-1">$0</div>
                  <div className="text-muted-foreground text-sm">One-time</div>
                </div>

                <div>
                  <Button
                    type="button"
                    onClick={() => openLeadDialog("Website Launch")}
                    className="w-full cursor-pointer my-2 shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50"
                    variant="secondary"
                  >
                    Get your Website
                  </Button>
                </div> */}

                <div>
                  <div className="text-xl font-medium tracking-tight mb-2">What you get</div>
                  <div className="text-muted-foreground text-balance text-sm">
                    Everything included in your website
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
                    {/* <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Simple site analytics</span>
                    </li> */}
                 
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Talk-to-a-human support</span>
                    </li>
                    
                  </ul>
                </div>

{/* 
                <div>
                  <div className="text-xl font-medium tracking-tight mb-2 mt-2">Care & Support</div>
                  <div className="text-muted-foreground text-balance text-sm">
                    We keep your site fast and accessible.
                  </div>
                </div>

                <div>
                  <ul role="list" className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Lightning fast global hosting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Updates, security & maintenance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Simple site analytics</span>
                    </li>
                 
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Talk-to-a-human support</span>
                    </li>
                   
                  </ul>
                </div> */}


              </div>

              <div className="p-8 flex flex-col gap-6 my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 bg-gradient-to-r from-primary/4 to-secondary/8 lg:self-center">

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

                  {/* <div className="text-muted-foreground text-balance text-sm">
                    Save 20% On Annual Billing
                  </div> */}
                 

                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-semibold text-xs">Save 20%</span> with annual billing
                  </p>
                  <div className="flex flex-column items-center justify-center mb-1 mt-5">
                      <div className="text-4xl font-bold ">
                        {isYearly ? "$7" : "$9"}
                      </div>
                      <div className="text-muted-foreground text-sm ml-2">/ month</div> 
                  </div>
                </div>

                <div>
                  <Button
                    type="button"
                    onClick={() => openLeadDialog("Website Care & Support")}
                    className="w-full cursor-pointer shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90 transition-all duration-150"
                    variant="default"
                  >
                    Get your Website
                  </Button>
                </div>
                 {/* <div className="text-muted-foreground text-balance  text-center text-xs">
                      No contracts. Cancel anytime.
                  </div> */}

                {/* <div>
                  <ul role="list" className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Lightning fast global hosting</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Full technical maintenance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Simple site analytics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Easy content updates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Talk-to-a-human support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-muted-foreground size-4 flex-shrink-0" strokeWidth={2.5} />
                      <span>Cancel anytime you want</span>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <Dialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader className="items-center text-center">
              <DialogTitle className="text-5xl font-bold tracking-tight">
                Get started
              </DialogTitle>
              <DialogDescription className="text-base">
                Enter your details and we&apos;ll send you the next steps.
              </DialogDescription>
            </DialogHeader>

            <div className="rounded-2xl border bg-card p-6 sm:p-8">
              <form onSubmit={handleLeadSubmit} className="space-y-5">
                <input type="hidden" name="plan" value={selectedPlan} />

                <div className="space-y-2">
                  <label htmlFor="pricing-contact-name" className="text-sm font-medium">
                    Your name
                  </label>
                  <Input
                    id="pricing-contact-name"
                    name="name"
                    placeholder="John Doe"
                    required
                    minLength={2}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="pricing-contact-email" className="text-sm font-medium">
                    Your email
                  </label>
                  <Input
                    id="pricing-contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmittingLead}>
                  {isSubmittingLead ? "Sending..." : "Get started"}
                </Button>
              </form>
            </div>
          </DialogContent>
        </Dialog>

        <DotPattern className="opacity-60 z-0" size="md" fadeStyle="ellipse" /> 
      </div>
    </section>
  )
}
