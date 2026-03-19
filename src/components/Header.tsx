'use client'

export default function Header() {
  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/55 bg-[#f8f9fc]/75 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#f8f9fc]/65">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12 lg:py-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100/95 via-white to-teal-50/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_-2px_rgba(37,99,235,0.18)] ring-1 ring-blue-200/70"
            aria-hidden
          >
            <svg
              viewBox="0 0 32 32"
              className="size-[1.65rem]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="17"
                r="9.5"
                stroke="#93c5fd"
                strokeWidth="1.6"
                opacity="0.9"
              />
              <circle
                cx="16"
                cy="17"
                r="5.5"
                stroke="#60a5fa"
                strokeWidth="1.5"
                opacity="0.85"
              />
              <circle cx="16" cy="17" r="2.4" fill="#2563eb" />
              <path
                d="M16 17 24.5 9"
                stroke="#0d9488"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
              <g transform="translate(17.25 4.6) scale(0.26)">
                <path
                  fill="#fb7185"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </g>
            </svg>
          </span>
          <div className="min-w-0">
            <p className="font-heading text-[0.95rem] font-bold leading-none tracking-tight text-slate-900">
              Medico<span className="text-blue-600">Radar</span>
            </p>
            <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Salute Lazio
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-6 sm:flex">
          <p className="max-w-[14rem] text-right text-xs leading-snug text-slate-500 md:text-[0.8125rem] md:leading-relaxed">
            Avviso quando il{' '}
            <span className="font-medium text-slate-700">medico che cerchi</span>{' '}
            ha un posto libero
          </p>
          <button
            type="button"
            onClick={scrollToForm}
            className="btn-primary hidden min-h-10 shrink-0 items-center bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:inline-flex"
          >
            Inizia — €15
          </button>
        </div>
      </div>
    </header>
  )
}
