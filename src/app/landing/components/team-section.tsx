"use client"

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { DotPattern } from '@/components/dot-pattern'

const team = [
  {
    id: 1,
    name: 'Elena Reyes',
    description: '12 years designing user-centric digital experiences',
    image: '/avatars/avatar-1.webp',
  },
  {
    id: 2,
    name: 'Oliver Lund',
    description: '8 years designing clear, scalable digital products for global teams',
    image: '/avatars/avatar-2.webp',
  },
  {
    id: 3,
    name: 'Leo Bennett',
    description: '6 years in UX, interaction design & prototyping',
    image: '/avatars/avatar-3.webp',
  }
]

export function TeamSection() {
  const featuredTeam = team.slice(0, 3)

  return (
    <section id="team" className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-5xl font-semibold tracking-tight mb-6">
            The gleed team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
           Premium design without the premium price tag. Our designers use the latest AI tools to work smarter, delivering agency-level quality at a fraction of the cost.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeam.map((member) => (
              <Card key={member.id} className="group py-2 shadow-xs relative">
                <CardContent className="p-4 py-8 text-center relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="h-28 w-28 overflow-hidden rounded-full shadow-lg transition-transform duration-500 ease-out will-change-transform group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="h-full w-full object-cover object-bottom"
                      />
                    </div>
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>

                  <p className="mb-0 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
                <DotPattern className="opacity-60 z-0" size="sm" fadeStyle="ellipse" /> 
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
