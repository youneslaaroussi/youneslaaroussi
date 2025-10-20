/**
 * Track a custom event in Plausible Analytics
 * @param eventName - The name of the event to track
 * @param props - Optional custom properties for the event (values must be strings)
 * @param revenue - Optional revenue information for e-commerce tracking
 * @param interactive - Whether the event should count towards bounce rate (default: true)
 * 
 * @example
 * // Track a simple event
 * trackEvent('button_click')
 * 
 * @example
 * // Track an event with custom properties
 * trackEvent('signup', { tier: 'pro' })
 * 
 * @example
 * // Track a revenue event
 * trackEvent('purchase', {}, { amount: 29.99, currency: 'USD' })
 * 
 * @example
 * // Track a non-interactive event
 * trackEvent('autoplay', {}, undefined, false)
 */
export async function trackEvent(
  eventName: string,
  props?: Record<string, string>,
  revenue?: { amount: number; currency: string },
  interactive = true
) {
  // Only track on client side
  if (typeof window === 'undefined') return

  try {
    const { track } = await import('@plausible-analytics/tracker')
    track(eventName, {
      props,
      revenue,
      interactive,
    })
  } catch (error) {
    console.error('Failed to track event:', error)
  }
}

