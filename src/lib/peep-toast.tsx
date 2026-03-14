"use client"

import type { ReactNode } from "react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const peepAvatarSources = [
  "/peeps/peep-avatar-1.webp",
  "/peeps/peep-avatar-2.webp",
  "/peeps/peep-avatar-3.webp",
] as const

function getRandomPeepAvatar() {
  const index = Math.floor(Math.random() * peepAvatarSources.length)
  return peepAvatarSources[index]
}

type PeepSuccessToastOptions = {
  description?: ReactNode
  duration?: number
}

export function showPeepSuccessToast(
  title: ReactNode,
  options: PeepSuccessToastOptions = {}
) {
  let toastId: string | number = ""

  toastId = toast.success(title, {
    description: options.description,
    duration: options.duration,
    closeButton: false,
    icon: (
      <Avatar className="size-[4rem] bg-transparent shadow-none">
        <AvatarImage src={getRandomPeepAvatar()} alt=""/>
        <AvatarFallback className="text-[10px] font-semibold uppercase">
        </AvatarFallback>
      </Avatar>
    ),
    action: (
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="cursor-pointer rounded-md px-4 text-md motion-safe:hover:translate-y-0 motion-safe:active:translate-y-0 motion-safe:active:scale-100 hover:shadow-none active:shadow-none"
        onClick={() => toast.dismiss(toastId)}
      >
        Got it
      </Button>
    ),
    classNames: {
      toast: "peep-sonner-toast",
    },
  })

  return toastId
}
