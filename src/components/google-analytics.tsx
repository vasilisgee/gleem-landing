"use client"

import * as React from "react"
import Script from "next/script"

import {
  COOKIE_CONSENT_UPDATED_EVENT,
  type CookieConsentValue,
  readCookieConsent,
} from "@/lib/cookie-consent"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const DENIED_CONSENT_STATE = {
  ad_personalization: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  analytics_storage: "denied",
} as const

const GRANTED_CONSENT_STATE = {
  ...DENIED_CONSENT_STATE,
  analytics_storage: "granted",
} as const

function ensureGoogleAnalyticsQueue() {
  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
}

function clearCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`

  const hostname = window.location.hostname

  if (!hostname.includes(".")) {
    return
  }

  const hostSegments = hostname.split(".")
  const domains = new Set<string>([hostname, `.${hostname}`])

  for (let index = 1; index < hostSegments.length - 1; index += 1) {
    const domain = hostSegments.slice(index).join(".")
    domains.add(domain)
    domains.add(`.${domain}`)
  }

  domains.forEach((domain) => {
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax`
  })
}

function clearGoogleAnalyticsCookies() {
  if (typeof document === "undefined") {
    return
  }

  const gaCookieNames = document.cookie
    .split("; ")
    .map((entry) => entry.split("=")[0])
    .filter(
      (name) =>
        name === "_gid" || name.startsWith("_ga") || name.startsWith("_gat")
    )

  gaCookieNames.forEach(clearCookie)
}

function grantAnalyticsConsent(measurementId: string) {
  ensureGoogleAnalyticsQueue()
  window.gtag?.("consent", "update", GRANTED_CONSENT_STATE)
  window.gtag?.("config", measurementId)
}

function denyAnalyticsConsent() {
  ensureGoogleAnalyticsQueue()
  window.gtag?.("consent", "update", DENIED_CONSENT_STATE)
  clearGoogleAnalyticsCookies()
}

type GoogleAnalyticsProps = {
  measurementId?: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [shouldLoadScripts, setShouldLoadScripts] = React.useState(false)

  React.useEffect(() => {
    if (!measurementId) {
      return
    }

    const consentValue = readCookieConsent()

    if (consentValue === "accepted") {
      setShouldLoadScripts(true)
      return
    }

    if (consentValue === "declined") {
      clearGoogleAnalyticsCookies()
    }
  }, [measurementId])

  React.useEffect(() => {
    if (!measurementId) {
      return
    }

    const handleConsentUpdated = (event: Event) => {
      const consentValue = (event as CustomEvent<CookieConsentValue>).detail

      if (consentValue === "accepted") {
        if (window.gtag) {
          grantAnalyticsConsent(measurementId)
          return
        }

        setShouldLoadScripts(true)
        return
      }

      denyAnalyticsConsent()
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, handleConsentUpdated)

    return () => {
      window.removeEventListener(
        COOKIE_CONSENT_UPDATED_EVENT,
        handleConsentUpdated
      )
    }
  }, [measurementId])

  if (!measurementId || !shouldLoadScripts) {
    return null
  }

  const bootstrapAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
    window.gtag('js', new Date());
    window.gtag('consent', 'default', ${JSON.stringify(DENIED_CONSENT_STATE)});
    window.gtag('consent', 'update', ${JSON.stringify(GRANTED_CONSENT_STATE)});
    window.gtag('config', '${measurementId}');
  `

  return (
    <>
      <Script
        id="google-analytics-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {bootstrapAnalyticsScript}
      </Script>
    </>
  )
}
