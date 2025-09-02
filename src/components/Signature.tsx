'use client'

import { useEffect, useState } from 'react'

export default function Signature() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-[120px] flex items-center justify-center">
      <svg
        width="300"
        height="120"
        viewBox="0 0 300 120"
        className="w-full h-full"
      >
        {/* Main signature path */}
        <path
          d="M20 80 Q40 60 60 80 T100 80 Q120 60 140 80 T180 80 Q200 60 220 80 T260 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-1500 ease-out"
          style={{
            strokeDasharray: 300,
            strokeDashoffset: isVisible ? 0 : 300,
          }}
        />
        
        {/* Signature flourish 1 */}
        <path
          d="M30 90 Q50 70 70 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="transition-all duration-1000 delay-300 ease-out"
          style={{
            strokeDasharray: 80,
            strokeDashoffset: isVisible ? 0 : 80,
          }}
        />
        
        {/* Signature flourish 2 */}
        <path
          d="M200 90 Q220 70 240 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="transition-all duration-1000 delay-600 ease-out"
          style={{
            strokeDasharray: 80,
            strokeDashoffset: isVisible ? 0 : 80,
          }}
        />
        
        {/* Signature dot */}
        <circle
          cx="280"
          cy="85"
          r="2"
          fill="currentColor"
          className="transition-all duration-500 delay-900 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
          }}
        />
      </svg>
    </div>
  )
} 