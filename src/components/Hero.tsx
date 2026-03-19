'use client'

import { Reveal } from '@/components/Reveal'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative scroll-mt-20 border-b border-slate-200/60 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f9fd] to-[#eef3ff]/95"
        aria-hidden
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.045]" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[min(88vh,760px)] w-[58%] max-w-3xl bg-gradient-to-l from-blue-100/45 via-blue-50/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[90rem] px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 md:pb-28 md:pt-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-7 lg:max-w-none lg:pr-6 xl:col-span-6 xl:pr-10">
            <Reveal>
              <p className="max-w-prose text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Monitoraggio · Portale pubblico
              </p>
            </Reveal>

            <Reveal className="mt-7" delayMs={40}>
              <h1 className="font-heading max-w-[16ch] text-[clamp(2.25rem,5vw+1rem,3.5rem)] font-bold leading-[1.06] tracking-[-0.035em] text-slate-950 sm:max-w-[20ch]">
                Non riesci a prendere{' '}
                <em className="not-italic text-blue-600">il medico che vuoi?</em>
              </h1>
            </Reveal>

            <Reveal className="mt-8 max-w-[min(36rem,100%)]" delayMs={80}>
              <p className="prose-body border-l-2 border-teal-500/85 pl-5 text-[1.0625rem] font-normal text-slate-600 sm:pl-6 sm:text-lg">
                Ti segnaliamo quando compare disponibilità per il{' '}
                <strong className="font-semibold text-slate-800">
                  pediatra o medico di base
                </strong>{' '}
                che hai scelto — apri Salute Lazio nel momento in cui conta.
              </p>
            </Reveal>

            <Reveal
              className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8"
              delayMs={120}
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="btn-primary inline-flex w-fit min-h-12 items-center bg-blue-600 px-8 py-3.5 text-[0.9375rem] font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Attiva monitoraggio — €15
              </button>
              <p className="max-w-xs text-sm font-normal leading-relaxed text-slate-500">
                <span className="font-medium text-slate-700">Un pagamento.</span>{' '}
                30 giorni di monitoraggio attivo.
              </p>
            </Reveal>
          </div>

          <aside className="relative lg:col-span-5 lg:mt-1 xl:col-span-6">
            <Reveal className="relative" delayMs={100}>
              <div className="surface-panel p-1 sm:p-1.5">
                <div className="rounded-[0.65rem] bg-gradient-to-b from-slate-50/90 to-white/95 p-5 sm:p-7">
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Cosa ricevi
                  </p>
                  <div className="space-y-0 border-l border-slate-200/95 pl-5 sm:pl-7">
                    <div className="border-b border-slate-200/85 py-4 sm:py-5">
                      <p className="text-xs font-medium text-teal-700">
                        Telegram · Posto disponibile
                      </p>
                      <p className="font-heading mt-2 text-lg font-semibold text-slate-900">
                        Dr. Rossi — medico di base
                      </p>
                      <p className="prose-body mt-2 text-sm text-slate-600">
                        Aggiornamento sul portale. Apri Salute Lazio e porta a
                        termine la prenotazione.
                      </p>
                    </div>
                    <div className="py-4 sm:py-5">
                      <p className="prose-body text-sm text-slate-500">
                        Noi segnaliamo la{' '}
                        <span className="font-medium text-slate-700">finestra</span>
                        ; la prenotazione resta sul canale ufficiale della ASL.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
