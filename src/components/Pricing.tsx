'use client'

import { Reveal } from '@/components/Reveal'

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const items = [
    'Pagamento unico',
    'Monitoraggio attivo per 30 giorni',
    'Notifiche illimitate nel periodo',
  ]

  return (
    <section className="relative scroll-mt-20 border-t border-slate-200/80 bg-[#f1f3f9] py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600/90">
              Tariffa
            </p>
            <h2 className="font-heading mt-5 text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-semibold tracking-[-0.032em] text-slate-950 sm:text-4xl">
              Prezzo chiaro
            </h2>
            <p className="prose-body mt-6 max-w-md text-base text-slate-600 sm:text-lg">
              Un solo costo per{' '}
              <strong className="font-semibold text-slate-900">
                30 giorni di monitoraggio
              </strong>{' '}
              sul medico che indichi.
            </p>
          </Reveal>

          <Reveal className="mt-12 lg:col-span-7 lg:mt-0" delayMs={70}>
            <div className="surface-elevated h-full bg-white/95 p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    30 giorni
                  </p>
                  <p className="font-heading mt-3 font-tabular text-6xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-7xl">
                    €15
                  </p>
                  <p className="mt-3 inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-950 ring-1 ring-amber-200/90">
                    Tutto incluso nel periodo
                  </p>
                  <p className="mt-3 text-sm text-slate-500">
                    Pagamento unico · IVA inclusa ove dovuta
                  </p>
                </div>
                <div className="min-w-0 max-w-md flex-1">
                  <ul className="divide-y divide-slate-200/90 rounded-xl border border-slate-200/90 bg-slate-50/50">
                    {items.map((label) => (
                      <li
                        key={label}
                        className="prose-body px-4 py-3.5 text-[0.95rem] text-slate-700 first:rounded-t-xl last:rounded-b-xl sm:px-5"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="btn-dark mt-8 w-full min-h-12 bg-slate-900 px-6 py-3.5 text-[0.9375rem] font-semibold text-white hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:w-auto sm:min-w-[220px]"
                  >
                    Attiva il monitoraggio
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
