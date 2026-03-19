'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      requestAnimationFrame(() => setVisible(true))
      return
    }

    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          ob.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
