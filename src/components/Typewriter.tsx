'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  strings: string[]
  speed?: number
  delay?: number
  className?: string
}

export default function Typewriter({ 
  strings, 
  speed = 100, 
  delay = 2000,
  className = ""
}: TypewriterProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    
    if (!isDeleting) {
      // Typing
      if (currentCharIndex < currentString.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, currentCharIndex + 1))
          setCurrentCharIndex(currentCharIndex + 1)
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delay)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, currentCharIndex - 1))
          setCurrentCharIndex(currentCharIndex - 1)
        }, speed / 2)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next string
        setIsDeleting(false)
        setCurrentStringIndex((currentStringIndex + 1) % strings.length)
      }
    }
  }, [currentStringIndex, currentCharIndex, isDeleting, strings, speed, delay])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
} 