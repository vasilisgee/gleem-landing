"use client"

import { COOKIE_CONSENT_OPEN_EVENT } from "@/lib/cookie-consent"

type CookieSettingsButtonProps = {
  className?: string
}

export function CookieSettingsButton({
  className,
}: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT))}
    >
      Cookie settings
    </button>
  )
}
