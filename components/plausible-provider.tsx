'use client'

import { useEffect } from 'react'
import { init } from '@plausible-analytics/tracker'

interface PlausibleProviderProps {
  children: React.ReactNode
}

export function PlausibleProvider({ children }: PlausibleProviderProps) {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
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
    }
  }, [])

  return <>{children}</>
}
