"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

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
    <section id="team" className="py-24 scroll-mt-0 lg:scroll-mt-15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge className="mb-4 bg-background border-foreground/30 text-foreground">
            Our Team
          </Badge>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <h2 className="text-5xl font-semibold tracking-tight mb-6">
              The gleem team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
          >
            <p className="text-lg text-muted-foreground mb-8">
             Premium design without the premium price tag. Our designers use the latest AI tools to work smarter, delivering agency-level quality at a fraction of the cost.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTeam.map((member, index) => {
              const contentDelay = index === 0 ? 0.56 : index === 1 ? 0.84 : 0.98

              return (
                <motion.div
                  key={member.id}
                  initial={{
                    x: index === 1 ? -56 : index === 2 ? -112 : 0,
                    opacity: 0,
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: index === 0 ? 0.5 : 0.6,
                    ease: 'easeOut',
                    delay: index === 0 ? 0 : index === 1 ? 0.16 : 0.3,
                  }}
                >
                  <Card
                    className="group relative overflow-hidden py-2 shadow-[0_12px_28px_-24px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-shadow duration-500 ease-out hover:shadow-[0_13px_28px_-24px_color-mix(in_oklab,var(--primary)_32%,transparent)]"
                  >
                    <motion.div
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        ease: 'easeOut',
                        delay: contentDelay,
                      }}
                    >
                      <div className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]">
                        <div className="absolute left-1/2 top-10 h-28 w-[58%] -translate-x-1/2 rounded-full bg-primary/24 opacity-70 blur-3xl transition-[opacity,filter,background-color] duration-500 ease-out group-hover:bg-primary/26 group-hover:opacity-78 group-hover:blur-[34px] dark:bg-primary/46 dark:group-hover:bg-primary/50" />
                      </div>
                    </motion.div>
                    <CardContent className="p-4 py-8 text-center relative z-10">
                      <motion.div
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.55,
                          ease: 'easeOut',
                          delay: contentDelay,
                        }}
                      >
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

                        <p className="mb-0 text-sm leading-relaxed text-muted-foreground max-w-70 margin-auto inline-block">
                          {member.description}
                        </p>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
