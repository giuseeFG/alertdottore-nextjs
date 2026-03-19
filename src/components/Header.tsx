'use client'

export default function Header() {
  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/55 bg-[#f8f9fc]/75 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#f8f9fc]/65">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12 lg:py-4">
        <div className="flex min-w-0 items-baseline gap-4">
          <span
            className="font-heading text-[1.05rem] font-bold tracking-tight text-slate-900"
            aria-hidden
          >
            MR
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
