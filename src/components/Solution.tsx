import { IconBolt, IconEye, IconTrending } from '@/components/icons'
import { Reveal } from '@/components/Reveal'

const solutions = [
  {
    Icon: IconEye,
    title: 'Monitoriamo per te',
    description:
      'Il sistema controlla automaticamente la disponibilità del medico che hai indicato sul portale pubblico.',
    tag: 'Automatico',
    accent: 'text-blue-700',
    chip: 'bg-blue-50 text-blue-800 ring-blue-500/15',
  },
  {
    Icon: IconBolt,
    title: 'Notifica immediata',
    description:
      'Messaggio su Telegram nel momento in cui compare un posto libero.',
    tag: 'Subito',
    accent: 'text-teal-700',
    chip: 'bg-teal-50 text-teal-900 ring-teal-600/15',
  },
  {
    Icon: IconTrending,
    title: 'Agisci prima degli altri',
    description:
      'L’avviso arriva quando ha senso aprire il portale e completare la prenotazione.',
    tag: 'Priorità',
    accent: 'text-slate-800',
    chip: 'bg-slate-100 text-slate-800 ring-slate-400/20',
  },
] as const

export default function Solution() {
  return (
    <section className="relative scroll-mt-20 bg-white py-20 sm:py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700/90">
              Il servizio
            </p>
            <h2 className="font-heading mt-5 text-[clamp(1.75rem,2.5vw+1rem,2.65rem)] font-semibold leading-[1.14] tracking-[-0.032em] text-slate-950">
              Un alleato sobrio.{' '}
              <span className="font-medium text-slate-500">
                Non un’altra app da controllare.
              </span>
            </h2>
            <p className="prose-body mt-6 text-base text-slate-600 sm:text-lg">
              Flusso lineare:{' '}
              <strong className="font-semibold text-slate-900">
                monitoraggio
              </strong>
              , alert su Telegram, poi tu su Salute Lazio.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {solutions.map(({ Icon, title, description, tag, accent, chip }, index) => (
            <Reveal key={title} delayMs={index * 55}>
              <div className="surface-card flex h-full flex-col p-7 sm:p-8">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200/90 ${accent}`}
                >
                  <Icon className="size-7 stroke-[1.25]" />
                </div>
                <span
                  className={`mt-5 inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ring-1 ${chip}`}
                >
                  {tag}
                </span>
                <h3 className="font-heading mt-4 text-xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="prose-body mt-3 flex-1 text-[0.95rem] text-slate-600 sm:text-base">
                  {description}
                </p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-slate-300">
                  {String(index + 1).padStart(2, '0')} / 03
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 sm:mt-14" delayMs={40}>
          <p className="max-w-lg text-sm font-medium text-blue-700/95">
            Meno refresh ossessivo · più momenti utili per prenotare
          </p>
        </Reveal>
      </div>
    </section>
  )
}
