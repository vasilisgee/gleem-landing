import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { BookOpen, ClipboardList, LayoutGrid, MapPin, Rocket, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type IncludedItem = {
  icon: LucideIcon
  title: string
  description: string
  cardClassName?: string
}

const includedItems: IncludedItem[] = [
  {
    icon: LayoutGrid,
    title: "One-Page Design",
    description:
      "Everything your customer needs to see is laid out on a single, professional scroll that is easy to navigate.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    description:
      "We handle everything from meta tags to site structure, ensuring your site shows up in local search results.",
  },
  {
    icon: ClipboardList,
    title: "Choose Your Contact Options",
    description:
      "From simple contact forms to WhatsApp links and booking calendars - we support all main contact modalities.",
    cardClassName: "lg:rotate-2",
  },
  {
    icon: MapPin,
    title: "Google Maps Integration",
    description:
      "We can embed a map of your service area so local clients know exactly where you operate and build local trust.",
  },
  {
    icon: BookOpen,
    title: "Built-in catalogue",
    description:
      "Easily create unlimited catalogues or menus for your business. Perfect for restaurants, cafés, bars, and small shops."
  },
  {
    icon: Rocket,
    title: "Lightning speed & 99.9% uptime",
    description:
      "Your site loads instantly via our global edge network and stays live around the clock with enterprise-grade reliability.",
  },
]

export function WhatIncludedSection() {
  return (
    <section id="what-included" className="py-24 bg-muted/40 scroll-mt-0 lg:scroll-mt-10">
      <div className="container mx-auto px-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <Badge className="mb-4 bg-background border-foreground/30 text-foreground">
             What we Offer
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-6">
              Everything you need to shine online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We build exactly what small businesses need to look professional and capture leads without the complexity.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/peeps/gleem-peep-sit-2.webp"
              alt=""
              aria-hidden
              width={160}
              height={160}
              className="pointer-events-none absolute right-2 lg:-top-38 -top-18 z-20 -scale-x-100 h-auto w-[65px] lg:w-[130px]"
            />
            <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {includedItems.map((item) => (
                <Card
                  key={item.title}
                  className={cn(
                    "group relative overflow-hidden py-0 shadow-none transition-all duration-500 hover:shadow-[0_12px_32px_hsl(var(--foreground)/0.08)] before:pointer-events-none before:absolute before:inset-0 before:z-0 before:-translate-x-[130%] before:bg-[linear-gradient(115deg,transparent,rgba(0,0,0,0.08),transparent)] before:transition-transform before:duration-700 hover:before:translate-x-[130%] dark:before:bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.2),transparent)] cursor-default",
                    item.cardClassName
                  )}
                >
                  <CardContent className="relative z-10 p-8">
                    <h3 className="mb-4 flex items-center gap-2 text-lg text-foreground font-medium">
                      <item.icon className="h-4 w-4 text-primary" aria-hidden />
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm ">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
