"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { CircleHelp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ContactSection = dynamic(
  () => import("./contact-section").then((module) => module.ContactSection),
  { ssr: false }
)

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: "item-1",
    question: "How is it really zero dollars to start?",
    answer:
      "We believe in our work so we take all the risk. Our designers build your full custom preview for free and you only start the nineteen dollar monthly subscription if you love the result.",
  },
  {
    value: "item-2",
    question: "What if I do not have professional photos?",
    answer:
      "We use advanced AI tools to generate high-quality authentic looking images of your business so your business looks professional even if you do not have a camera. You can provide your own, but you do not need to.",
  },
  {
    value: "item-3",
    question: "Do I own my own domain name?",
    answer:
      "Yes. If you already have a domain we will connect it for you. If you do not have one we will help you choose and register a professional address for your business.",
  },
  {
    value: "item-4",
    question: "How long does the process take?",
    answer:
      "Once you fill out our simple onboarding form a designer will have your private preview ready for you to review within seventy-two hours.",
  },
  {
    value: "item-5",
    question: "Is there a long-term contract?",
    answer:
      "No. Our subscription plan is pay-as-you-go. You can cancel your hosting and support at any time with no hidden fees or cancellation penalties.",
  },
  {
    value: "item-6",
    question: "What is included in the monthly fee?",
    answer:
      "The plan covers your lightning-fast hosting, your SSL security certificate, automatic daily backups, and ten free content updates every single month.",
  },
]

const FaqSection = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  return (
    <section id="faq" className="py-24 bg-muted/40 scroll-mt-0 lg:scroll-mt-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge className="mb-4 bg-background border-foreground/30 text-foreground">
            FAQ
          </Badge>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-muted-foreground">
            Everything you need to know about our services.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div>
              <div className="bg-transparent">
                <div className="p-0">
                  <Accordion type="single" collapsible className="space-y-5">
                    {faqItems.map((item) => (
                      <AccordionItem
                        key={item.value}
                        value={item.value}
                        className="faq-accordion-item rounded-md !border bg-background shadow-xs transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-accent/90 data-[state=open]:bg-accent/90"
                      >
                        <AccordionTrigger className="cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b">
                          <div className="flex items-center gap-4">
                            <div className="text-primary flex size-7 shrink-0 items-center justify-center rounded-full">
                              <CircleHelp className="size-5" />
                            </div>
                            <span className="text-foreground font-medium text-md tracking-tight">
                              {item.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 bg-transparent">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:h-full lg:justify-center">
              <div className="flex items-end justify-center">
                <Image
                  src="/peeps/gleem-peep-sit-4.webp"
                  alt="Placeholder character illustration"
                  width={120}
                  height={0}
                  className="h-auto w-full max-w-[135px] -scale-x-100 left-5 relative z-10"
                  priority={false}
                />
                <Image
                  src="/peeps/gleem-peep-stand-3.webp"
                  alt="Placeholder character illustration"
                  width={100}
                  height={0}
                  className="h-auto w-full max-w-[110px] relative -left-8 z-0 -scale-x-100"
                  priority={false}
                />
              </div>
              {/* Contact Support CTA */}
              <div className="mt-5 w-full text-center lg:mt-6">
                <p className="text-muted-foreground mb-4 text-sm text-center">
                  Still have questions? We&apos;re here to help.
                </p>
                <Dialog
                  open={isContactDialogOpen}
                  onOpenChange={setIsContactDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="cursor-pointer">
                      Contact Us
                      <Mail className="size-4 ms-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] min-h-[50vh] overflow-y-auto sm:max-w-5xl">
                    <DialogHeader className="sr-only">
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>
                        Fill out the contact form to send us a message.
                      </DialogDescription>
                    </DialogHeader>
                    {isContactDialogOpen ? (
                      <ContactSection
                        onSubmitted={() => setIsContactDialogOpen(false)}
                      />
                    ) : null}
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
