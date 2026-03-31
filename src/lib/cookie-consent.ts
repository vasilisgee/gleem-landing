export const COOKIE_CONSENT_COOKIE_NAME = "gleem_cookie_consent"
export const COOKIE_CONSENT_OPEN_EVENT = "gleem:open-cookie-consent"
export const COOKIE_CONSENT_UPDATED_EVENT = "gleem:cookie-consent-updated"
export const DEFAULT_COOKIE_CONSENT_MAX_AGE_DAYS = 180

export type CookieConsentValue = "accepted" | "declined"

export function dispatchCookieConsentUpdated(value: CookieConsentValue) {
  if (typeof window === "undefined") {
    return
  }

  window.dispatchEvent(
    new CustomEvent<CookieConsentValue>(COOKIE_CONSENT_UPDATED_EVENT, {
      detail: value,
    })
  )
}

export function readCookieConsent(
  cookieName = COOKIE_CONSENT_COOKIE_NAME
): CookieConsentValue | null {
  if (typeof document === "undefined") {
    return null
  }

  const cookieEntry = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${cookieName}=`))

  if (!cookieEntry) {
    return null
  }

  const value = decodeURIComponent(cookieEntry.split("=").slice(1).join("="))

  return value === "accepted" || value === "declined" ? value : null
}

export function writeCookieConsent(
  value: CookieConsentValue,
  {
    cookieName = COOKIE_CONSENT_COOKIE_NAME,
    maxAgeDays = DEFAULT_COOKIE_CONSENT_MAX_AGE_DAYS,
  }: {
    cookieName?: string
    maxAgeDays?: number
  } = {}
) {
  if (typeof document === "undefined") {
    return
  }

  document.cookie = [
    `${cookieName}=${encodeURIComponent(value)}`,
    `Max-Age=${Math.max(0, Math.floor(maxAgeDays * 24 * 60 * 60))}`,
    "Path=/",
    "SameSite=Lax",
  ].join("; ")
}
