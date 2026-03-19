import { Reveal } from '@/components/Reveal'

export default function Urgency() {
  return (
    <section className="relative scroll-mt-20 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="surface-panel max-w-3xl border-l-[3px] border-l-teal-600 bg-gradient-to-r from-teal-50/60 to-white/90 px-6 py-6 sm:px-9 sm:py-8">
            <h3 className="font-heading text-lg font-semibold text-slate-900 sm:text-xl">
              Attivazioni gestite con cura
            </h3>
            <p className="prose-body mt-3 text-[0.95rem] text-slate-600 md:text-base">
              Seguiamo un{' '}
              <strong className="font-semibold text-slate-900">
                numero limitato di richieste
              </strong>{' '}
              alla volta, per controlli affidabili. Attivazione manuale, in
              genere entro poche ore dal pagamento.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
