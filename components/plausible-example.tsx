'use client'

import { usePlausible } from '../hooks/usePlausible'

export function PlausibleExample() {
  const { trackEvent } = usePlausible()

  const handleButtonClick = () => {
    trackEvent('Button Click', {
      props: { button_name: 'example_button' }
    })
  }

  const handleFormSubmit = () => {
    trackEvent('Form Submission', {
      props: { form_type: 'contact' }
    })
  }

  return (
    <div className="space-y-4">
      <button 
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Track Button Click
      </button>
      
      <button 
        onClick={handleFormSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Track Form Submission
      </button>
    </div>
  )
}
