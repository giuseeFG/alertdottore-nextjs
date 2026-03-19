'use client'

import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const hero = document.getElementById('hero')
        if (hero) {
          const heroBottom = hero.offsetTop + hero.offsetHeight
          setIsVisible(window.scrollY > heroBottom - 40)
        }
      } else {
        setIsVisible(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsVisible(false)
      }
      handleScroll()
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <>
      <div className="h-[4.75rem] md:hidden" aria-hidden />
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="border-t border-slate-800/90 bg-slate-950/95 px-4 pt-3 shadow-[0_-14px_40px_rgba(0,0,0,0.22)] backdrop-blur-lg pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto flex max-w-md items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-sm font-bold text-white">
                MedicoRadar
              </p>
              <p className="truncate text-[11px] text-slate-400">
                Attiva monitoraggio — €15
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToForm}
              className="btn-primary inline-flex min-h-11 shrink-0 items-center justify-center bg-blue-500 px-5 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Inizia
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
