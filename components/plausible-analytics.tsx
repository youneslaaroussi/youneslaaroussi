'use client'

import { useEffect } from 'react'

export function PlausibleAnalytics() {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window === 'undefined') return

    // Dynamic import to ensure it only runs in browser
    import('@plausible-analytics/tracker').then(({ init }) => {
      init({
        domain: 'youneslaaroussi.ca',
        endpoint: 'https://plausible.io/api/event',
        autoCapturePageviews: true,
        hashBasedRouting: false,
        outboundLinks: true,
        fileDownloads: true,
        captureOnLocalhost: false,
        logging: true,
        bindToWindow: true,
      })
    })
  }, [])

  return null
}

