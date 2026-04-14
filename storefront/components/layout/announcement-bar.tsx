'use client'

import { useState } from 'react'
import { X, Truck } from 'lucide-react'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[#2e9e63] text-white">
      <div className="container-custom flex items-center justify-center gap-2 py-2.5 text-sm font-medium">
        <Truck className="h-4 w-4 flex-shrink-0" />
        <p>
          🎉 <span className="font-semibold">50% OFF Today Only</span> — Free Shipping to Europe on All Orders!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
