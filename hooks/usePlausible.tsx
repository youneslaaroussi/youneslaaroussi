'use client'

export function usePlausible() {
  const trackEvent = (eventName: string, options?: {
    props?: Record<string, string>
    revenue?: { amount: number; currency: string }
    interactive?: boolean
    callback?: (result: any) => void
  }) => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Dynamic import to prevent SSR issues
      import('@plausible-analytics/tracker').then(({ track }) => {
        track(eventName, options || {})
      })
    }
  }

  return { trackEvent }
}
