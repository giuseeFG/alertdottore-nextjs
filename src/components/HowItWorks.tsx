import { Reveal } from '@/components/Reveal'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Indichi il medico',
      description:
        'Ci dici quale pediatra o medico di base vuoi monitorare su Salute Lazio.',
    },
    {
      number: '02',
      title: 'Attiviamo il monitoraggio',
      description:
        'Configuriamo i controlli automatici sul medico che hai scelto.',
    },
    {
      number: '03',
      title: 'Ricevi le notifiche',
      description:
        'Messaggio su Telegram quando c’è disponibilità — così apri il portale al momento giusto.',
    },
  ]

  return (
    <section className="relative scroll-mt-20 py-20 sm:py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="md:flex md:items-end md:justify-between md:gap-12">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600/90">
              In pratica
            </p>
            <h2 className="font-heading mt-5 text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-semibold tracking-[-0.032em] text-slate-950 sm:text-4xl">
              Tre passaggi.
            </h2>
          </Reveal>
          <Reveal className="mt-6 max-w-sm md:mt-0 md:text-right" delayMs={50}>
            <p className="prose-body text-base text-slate-600">
              <strong className="font-semibold text-slate-900">
                Tu prenoti sul portale ufficiale.
              </strong>{' '}
              Noi interveniamo solo sull’avviso.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 70}>
              <li className="surface-card relative h-full overflow-hidden p-7 sm:p-8">
                <div
                  className="pointer-events-none absolute -right-6 -top-6 size-28 rounded-full bg-gradient-to-br from-blue-500/[0.07] to-transparent"
                  aria-hidden
                />
                <span className="font-mono text-xs font-bold tabular-nums text-slate-400">
                  {step.number}
                </span>
                <h3 className="font-heading mt-5 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="prose-body mt-3 text-[0.95rem] text-slate-600 sm:text-base">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
