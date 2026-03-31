"use client"

import * as React from "react"
import { Cookie } from "lucide-react"

import {
  DEFAULT_COOKIE_CONSENT_MAX_AGE_DAYS,
  dispatchCookieConsentUpdated,
  type CookieConsentValue,
  COOKIE_CONSENT_COOKIE_NAME,
  COOKIE_CONSENT_OPEN_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/cookie-consent"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface CookieConsentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "small" | "mini"
  demo?: boolean
  title?: string
  description?: string
  learnMoreHref?: string
  cookieName?: string
  cookieMaxAgeDays?: number
  onAcceptCallback?: () => void
  onDeclineCallback?: () => void
}

const ANIMATION_DURATION_MS = 700
const ctaLikeButtonClassName =
  "cursor-pointer motion-safe:hover:translate-y-0 motion-safe:active:translate-y-0 motion-safe:active:scale-100"

const positionClasses = {
  default:
    "bottom-0 left-0 right-0 px-3 pb-3 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-md sm:px-0 sm:pb-0",
  small:
    "bottom-0 left-0 right-0 px-3 pb-3 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-md sm:px-0 sm:pb-0",
  mini: "bottom-0 left-0 right-0 px-3 pb-3 sm:bottom-4 sm:left-auto sm:right-4 sm:px-0 sm:pb-0",
} as const

export const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
  (
    {
      variant = "default",
      demo = false,
      title = "We use cookies",
      description = "We use cookies to remember your preferences and keep Gleem running smoothly.",
      learnMoreHref,
      cookieName = COOKIE_CONSENT_COOKIE_NAME,
      cookieMaxAgeDays = DEFAULT_COOKIE_CONSENT_MAX_AGE_DAYS,
      onAcceptCallback = () => {},
      onDeclineCallback = () => {},
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isHidden, setIsHidden] = React.useState(true)
    const openFrameRef = React.useRef<number | null>(null)
    const hideTimeoutRef = React.useRef<number | null>(null)

    const clearScheduledState = React.useCallback(() => {
      if (openFrameRef.current !== null) {
        window.cancelAnimationFrame(openFrameRef.current)
        openFrameRef.current = null
      }

      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current)
        hideTimeoutRef.current = null
      }
    }, [])

    const showBanner = React.useCallback(() => {
      clearScheduledState()
      setIsHidden(false)
      setIsOpen(false)

      openFrameRef.current = window.requestAnimationFrame(() => {
        setIsOpen(true)
        openFrameRef.current = null
      })
    }, [clearScheduledState])

    const persistChoice = React.useCallback(
      (value: CookieConsentValue, callback: () => void) => {
        if (!demo) {
          writeCookieConsent(value, {
            cookieName,
            maxAgeDays: cookieMaxAgeDays,
          })
        }

        clearScheduledState()
        setIsOpen(false)
        dispatchCookieConsentUpdated(value)

        hideTimeoutRef.current = window.setTimeout(() => {
          setIsHidden(true)
          hideTimeoutRef.current = null
        }, ANIMATION_DURATION_MS)

        callback()
      },
      [clearScheduledState, cookieMaxAgeDays, cookieName, demo]
    )

    const handleAccept = React.useCallback(() => {
      persistChoice("accepted", onAcceptCallback)
    }, [onAcceptCallback, persistChoice])

    const handleDecline = React.useCallback(() => {
      persistChoice("declined", onDeclineCallback)
    }, [onDeclineCallback, persistChoice])

    React.useEffect(() => {
      const consentValue = demo ? null : readCookieConsent(cookieName)

      if (!consentValue || demo) {
        showBanner()
        return
      }

      setIsOpen(false)
      setIsHidden(true)
    }, [cookieName, demo, showBanner])

    React.useEffect(() => {
      const openConsent = () => {
        showBanner()
      }

      window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, openConsent)

      return () => {
        window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, openConsent)
        clearScheduledState()
      }
    }, [clearScheduledState, showBanner])

    if (isHidden) {
      return null
    }

    const containerClasses = cn(
      "fixed z-[60] transition-all duration-700 motion-reduce:transition-none",
      isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      positionClasses[variant],
      className
    )

    if (variant === "mini") {
      return (
        <div
          ref={ref}
          className={containerClasses}
          aria-live="polite"
          {...props}
        >
          <Card className="gap-4 border-border/70 bg-background/95 py-3 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85">
            <CardContent className="grid gap-3 px-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <CardDescription className="text-xs sm:text-sm">
                {description}
              </CardDescription>
              <div className="flex items-center justify-end gap-2">
                <Button
                  type="button"
                  onClick={handleDecline}
                  size="sm"
                  variant="secondary"
                  className={cn("min-w-20 rounded-md", ctaLikeButtonClassName)}
                >
                  Decline
                </Button>
                <Button
                  type="button"
                  onClick={handleAccept}
                  size="sm"
                  className={cn(
                    "button-shine-sweep min-w-20 rounded-md",
                    ctaLikeButtonClassName
                  )}
                >
                  <span className="button-shine-sweep__label">Accept</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (variant === "small") {
      return (
        <div
          ref={ref}
          className={containerClasses}
          aria-live="polite"
          {...props}
        >
          <Card className="gap-4 border-border/70 bg-background/95 py-4 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85">
            <CardHeader className="flex flex-row items-center gap-2 space-y-0 px-4 pb-0">
              <Cookie className="size-4 text-muted-foreground" />
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-3">
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="gap-2 px-4 sm:justify-end">
              <Button
                type="button"
                onClick={handleDecline}
                variant="secondary"
                size="sm"
                className={cn("min-w-24 rounded-md", ctaLikeButtonClassName)}
              >
                Decline
              </Button>
              <Button
                type="button"
                onClick={handleAccept}
                size="sm"
                className={cn(
                  "button-shine-sweep min-w-24 rounded-md",
                  ctaLikeButtonClassName
                )}
              >
                <span className="button-shine-sweep__label">Accept</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={containerClasses}
        aria-live="polite"
        {...props}
      >
        <Card className="gap-4 border-border/70 bg-background/95 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85 max-w-sm">
          <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-0">
            <Cookie className="size-5 text-muted-foreground" />
            <CardTitle className="text-base">{title}</CardTitle>
          </CardHeader> 
          <CardContent className="space-y-2.5">
            <CardDescription>{description}</CardDescription>
            {learnMoreHref ? (
              <a
                href={learnMoreHref}
                className="text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
              >
                Learn more
              </a>
            ) : null}
          </CardContent>
          <CardFooter className="flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              type="button"
              onClick={handleDecline}
              variant="secondary"
              size="sm"
              className={cn("w-full sm:w-auto", ctaLikeButtonClassName)}
            >
              Decline
            </Button>
            <Button
              type="button"
              onClick={handleAccept}
              size="sm"
              className={cn(
                "button-shine-sweep button-shine-no-swipe w-full sm:w-auto",
                ctaLikeButtonClassName
              )}
            >
              <span className="button-shine-sweep__label">Accept</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
)

CookieConsent.displayName = "CookieConsent"
