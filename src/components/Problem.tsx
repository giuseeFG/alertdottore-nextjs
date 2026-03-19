import { Reveal } from '@/components/Reveal'

export default function Problem() {
  const problems = [
    {
      title: 'Il medico che vuoi è sempre pieno',
      description: "Lista d'attesa infinita per quello specifico.",
    },
    {
      title: 'I posti compaiono a caso',
      description: 'Spesso non quando li cerchi tu.',
    },
    {
      title: 'Il portale ti ruba tempo',
      description: 'Ore passate ad aggiornare la pagina.',
    },
    {
      title: 'Quando guardi, è già sparito',
      description: 'Qualcun altro è stato più veloce.',
    },
  ]

  return (
    <section className="relative scroll-mt-20 py-20 sm:py-24 md:py-[5.75rem]">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          <Reveal className="lg:col-span-5 lg:max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600/90">
              La situazione
            </p>
            <h2 className="font-heading mt-5 text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-semibold leading-[1.14] tracking-[-0.032em] text-slate-950">
              Il problema che conosci bene
            </h2>
            <p className="prose-body mt-6 max-w-[36ch] text-base text-slate-600 sm:text-lg">
              Se hai già scelto{' '}
              <strong className="font-semibold text-slate-900">
                un medico preciso
              </strong>
              , ogni posto libero vale oro — e non resta aperto a lungo.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:gap-5 lg:col-span-7 lg:mt-0">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {problems.map((problem, index) => (
                <Reveal key={index} delayMs={index * 45}>
                  <article className="surface-card h-full p-6 sm:p-7">
                    <div className="font-mono text-xs font-medium tabular-nums text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-heading mt-4 text-lg font-semibold text-slate-900 sm:text-xl">
                      {problem.title}
                    </h3>
                    <p className="prose-body mt-2 text-[0.95rem] text-slate-600">
                      {problem.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-14 md:mt-20" delayMs={80}>
          <div className="surface-panel max-w-4xl px-6 py-7 sm:px-10 sm:py-9">
            <blockquote className="relative">
              <p className="font-heading text-xl font-semibold leading-snug tracking-[-0.02em] text-slate-900 sm:text-2xl">
                I posti dal tuo medico ideale si aprono in finestre di pochi
                minuti.
              </p>
              <p className="prose-body mt-4 text-base text-slate-600 sm:text-lg">
                Senza un avviso{' '}
                <span className="border-b-2 border-blue-500/40 font-medium text-slate-800 decoration-transparent">
                  immediato
                </span>
                , è facile arrivare sempre un attimo dopo.
              </p>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
