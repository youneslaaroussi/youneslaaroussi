'use client'

import { track } from '@plausible-analytics/tracker'

export function usePlausible() {
  const trackEvent = (eventName: string, options?: {
    props?: Record<string, string | number>
    revenue?: { amount: number; currency: string }
    interactive?: boolean
    callback?: (result: any) => void
  }) => {
    if (typeof window !== 'undefined') {
      track(eventName, options)
    }
  }

  return { trackEvent }
}
