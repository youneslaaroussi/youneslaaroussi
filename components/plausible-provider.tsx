'use client'

import { useEffect } from 'react'

interface PlausibleProviderProps {
  children: React.ReactNode
}

export function PlausibleProvider({ children }: PlausibleProviderProps) {
  useEffect(() => {
    // Dynamically import and initialize only on client side
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('@plausible-analytics/tracker').then(({ init }) => {
        init({
          domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'localhost',
          autoCapturePageviews: true,
          hashBasedRouting: false,
          outboundLinks: true,
          fileDownloads: true,
          formSubmissions: true,
          captureOnLocalhost: process.env.NODE_ENV === 'development',
          logging: process.env.NODE_ENV === 'development',
          bindToWindow: true,
        })
      })
    }
  }, [])

  return <>{children}</>
}
