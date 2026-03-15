"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

const SCREENSHOT_WIDTH = 1542
const SCREENSHOT_HEIGHT = 930

interface Image3DProps {
  lightSrc: string
  darkSrc: string
  lightSlides?: string[]
  darkSlides?: string[]
  alt: string
  className?: string
  direction?: "left" | "right"
}

export function Image3D({
  lightSrc,
  darkSrc,
  lightSlides,
  darkSlides,
  alt,
  className,
  direction = "left"
}: Image3DProps) {
  const isRight = direction === "right"
  const lightImages = lightSlides?.length ? lightSlides : [lightSrc]
  const darkImages = darkSlides?.length ? darkSlides : [darkSrc]
  const slideCount = Math.max(lightImages.length, darkImages.length, 1)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    if (slideCount <= 1) return
    const timerId = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slideCount)
    }, 2000)
    return () => window.clearInterval(timerId)
  }, [slideCount])

  return (
    <div className={cn("group relative aspect-[1542/930] w-full", className)}>
      <div className="perspective-distant transform-3d size-full">
        <div className="relative size-full transform-3d group-hover:rotate-x-8 group-hover:rotate-y-12 group-hover:translate-z-16 transition-all duration-700 ease-out">
          <div className="absolute inset-0 translate-y-4 translate-x-2 -translate-z-8 rounded-2xl">
            <div className="size-full rounded-2xl bg-gradient-to-br from-primary/10 via-background/40 to-secondary/10 shadow-xl" />
          </div>

          <div className="relative z-10 size-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
            <div className={cn(
              "absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-transform duration-1000 ease-out pointer-events-none",
              isRight
                ? "translate-x-full group-hover:-translate-x-full"
                : "-translate-x-full group-hover:translate-x-full"
            )} />

            <div className={cn(
              "absolute inset-0 z-15 pointer-events-none",
              isRight
                ? "bg-linear-to-l from-background from-0% via-background/25 via-15% to-transparent to-40%"
                : "bg-linear-to-r from-background from-0% via-background/25 via-15% to-transparent to-40%"
            )} />

            <div className="block dark:hidden size-full relative">
              {lightImages.map((src, index) => (
                <Image
                  key={`light-${src}-${index}`}
                  src={src}
                  alt={`${alt} - Light ${index + 1}`}
                  width={SCREENSHOT_WIDTH}
                  height={SCREENSHOT_HEIGHT}
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) calc(50vw - 3rem), 100vw"
                  quality={100}
                  unoptimized
                  className={cn(
                    "absolute inset-0 size-full object-cover object-top [image-rendering:auto] transition-opacity duration-700 motion-reduce:transition-none",
                    index === slideIndex % lightImages.length ? "opacity-100" : "opacity-0"
                  )}
                  priority={index === 0}
                />
              ))}
            </div>

            <div className="hidden dark:block size-full relative">
              {darkImages.map((src, index) => (
                <Image
                  key={`dark-${src}-${index}`}
                  src={src}
                  alt={`${alt} - Dark ${index + 1}`}
                  width={SCREENSHOT_WIDTH}
                  height={SCREENSHOT_HEIGHT}
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) calc(50vw - 3rem), 100vw"
                  quality={100}
                  unoptimized
                  className={cn(
                    "absolute inset-0 size-full object-cover object-top [image-rendering:auto] transition-opacity duration-700 motion-reduce:transition-none",
                    index === slideIndex % darkImages.length ? "opacity-100" : "opacity-0"
                  )}
                  priority={index === 0}
                />
              ))}
            </div>

            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 dark:ring-white/10 group-hover:ring-primary/40 transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  )
}
