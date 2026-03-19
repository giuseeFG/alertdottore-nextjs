import { Reveal } from '@/components/Reveal'

export default function Testimonial() {
  return (
    <section className="relative scroll-mt-20 bg-white py-20 sm:py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80" />
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="surface-panel overflow-hidden lg:grid lg:grid-cols-12 lg:gap-0">
            <div className="border-b border-slate-200/80 px-6 py-5 sm:px-8 lg:col-span-2 lg:border-b-0 lg:border-r lg:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 lg:sticky lg:top-28">
                Voce
              </p>
            </div>
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:col-span-10">
              <blockquote className="font-heading text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-slate-950 sm:text-3xl sm:leading-[1.18] md:text-[2.35rem]">
                «Finalmente il medico che volevamo. L’avviso alle 14:30;
                confermato alle 14:32.»
              </blockquote>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-sm text-slate-500">
                <span className="rounded-md bg-amber-50 px-2 py-0.5 font-medium tabular-nums text-amber-950 ring-1 ring-amber-200/80">
                  Δ 2 min
                </span>
                <span>Medico di base · Roma</span>
                <span className="text-slate-400">· situazione reale, dati anonimizzati</span>
              </div>
              <p className="prose-body mt-8 max-w-2xl text-base text-slate-600 sm:text-lg">
                Dopo mesi in lista per la Dott.ssa Bianchi, Marco ha prenotato
                quando il portale ha aperto un posto —{' '}
                <span className="text-slate-800">senza controlli ossessivi.</span>
              </p>
              <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-slate-200/90 pt-8">
                <p className="font-heading text-lg font-semibold text-slate-900">
                  Marco
                </p>
                <p className="text-sm text-slate-500">Genitore · Lazio</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
