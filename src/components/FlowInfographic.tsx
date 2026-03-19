import { Reveal } from '@/components/Reveal'

function IconPortal() {
  return (
    <svg viewBox="0 0 40 40" className="size-8 sm:size-9" aria-hidden>
      <rect
        x="6"
        y="9"
        width="28"
        height="22"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="text-slate-600"
      />
      <path
        d="M6 14h28"
        stroke="currentColor"
        strokeWidth="1.75"
        className="text-slate-400"
      />
      <circle cx="10" cy="11.5" r="1.25" fill="currentColor" className="text-slate-400" />
      <circle cx="14" cy="11.5" r="1.25" fill="currentColor" className="text-slate-300" />
      <circle cx="18" cy="11.5" r="1.25" fill="currentColor" className="text-slate-200" />
    </svg>
  )
}

function IconRadar() {
  return (
    <svg viewBox="0 0 40 40" className="flow-infographic-radar size-8 sm:size-9" aria-hidden>
      <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-blue-200/90" />
      <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-blue-300/80" />
      <circle cx="20" cy="20" r="3.5" fill="currentColor" className="text-blue-600" />
      <path d="M20 20 32 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-500" />
    </svg>
  )
}

function IconBell() {
  return (
    <svg viewBox="0 0 40 40" className="size-8 sm:size-9" aria-hidden>
      <path
        d="M12 16a8 8 0 0 1 16 0c0 5 2 6 4 8H8c2-2 4-3 4-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        className="text-teal-700"
      />
      <path d="M16 28h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="text-teal-600" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 40 40" className="size-8 sm:size-9" aria-hidden>
      <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-300" />
      <path
        d="M13 20.5 17.5 25 27 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-600"
      />
    </svg>
  )
}

const stages = [
  {
    title: 'Portale',
    caption: 'Stato pubblico su Salute Lazio (MMG / PLS).',
    Icon: IconPortal,
    accent: 'from-slate-100 to-slate-50 ring-slate-200/90',
  },
  {
    title: 'Monitor',
    caption: 'Controlli automatici sul medico che hai scelto.',
    Icon: IconRadar,
    accent: 'from-blue-100/95 to-white ring-blue-200/85',
  },
  {
    title: 'Telegram',
    caption: 'Messaggio quando compare disponibilità.',
    Icon: IconBell,
    accent: 'from-teal-100/90 to-white ring-teal-200/80',
  },
  {
    title: 'Prenoti tu',
    caption: 'Apri il portale e completa l’assegnazione.',
    Icon: IconCheck,
    accent: 'from-emerald-100/85 to-white ring-emerald-200/80',
  },
] as const

export default function FlowInfographic() {
  return (
    <section
      className="relative scroll-mt-20 border-t border-slate-200/75 py-16 sm:py-20 md:py-24"
      aria-labelledby="flow-infographic-heading"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700/90">
              Schema
            </p>
            <h2
              id="flow-infographic-heading"
              className="font-heading mt-4 text-[clamp(1.65rem,2.2vw+1rem,2.35rem)] font-semibold tracking-[-0.032em] text-slate-950"
            >
              Dal portale alla notifica
            </h2>
            <p className="prose-body mt-4 max-w-md text-base text-slate-600">
              Quattro tappe: da dove leggiamo lo stato a come arriva l’avviso, fino alla prenotazione sul portale.
            </p>
          </Reveal>
          <Reveal className="mt-6 max-w-xs lg:mt-0 lg:text-right" delayMs={40}>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">
              Solo avvisi
            </p>
            <p className="prose-body mt-2 text-sm text-slate-600">
              La prenotazione resta sul portale ufficiale: noi ti diciamo{' '}
              <strong className="font-semibold text-slate-800">quando</strong> entrare.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 sm:mt-14" delayMs={80}>
          <div className="surface-panel overflow-hidden p-6 sm:p-8 md:p-10">
            <div className="relative">
              <div
                className="pointer-events-none absolute left-0 right-0 top-[2.75rem] z-0 hidden h-px lg:block"
                aria-hidden
              >
                <div className="mx-[12%] h-full bg-gradient-to-r from-transparent via-blue-200/95 to-transparent" />
                <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 border-t border-dashed border-slate-300/95" />
              </div>

              <ol className="relative z-[1] m-0 list-none space-y-0 p-0 lg:flex lg:justify-between lg:gap-4">
              {stages.map((stage, index) => {
                const { Icon } = stage
                return (
                  <li
                    key={stage.title}
                    className="relative flex gap-5 pb-10 last:pb-0 lg:w-0 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:pt-0"
                  >
                    {/* Connettore mobile */}
                    {index < stages.length - 1 && (
                      <span
                        className="absolute left-[1.35rem] top-[3.25rem] h-[calc(100%-1rem)] w-px bg-gradient-to-b from-slate-300 to-slate-200 lg:hidden"
                        aria-hidden
                      />
                    )}

                    <div
                      className={`relative flex size-[4.25rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ${stage.accent}`}
                    >
                      <Icon />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5 lg:mt-8 lg:w-full lg:flex-none lg:px-1 lg:text-center">
                      <h3 className="font-heading text-base font-semibold text-slate-900 sm:text-lg">
                        {stage.title}
                      </h3>
                      <p className="prose-body mt-2 text-sm leading-relaxed text-slate-600">
                        {stage.caption}
                      </p>
                    </div>
                  </li>
                )
              })}
              </ol>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-slate-200/85 pt-6 sm:gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Tempo reale
              </span>
              <span className="rounded-full border border-slate-200/95 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                30 giorni inclusi
              </span>
              <span className="rounded-full border border-slate-200/95 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
                Portale Salute Lazio
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
