import { Reveal } from '@/components/Reveal'

export default function FAQ() {
  const faqs = [
    {
      question: 'È garantito che riuscirò a ottenere il medico?',
      answer:
        'No: non possiamo garantire l’assegnazione. **Quello che garantiamo** è avvisarti subito quando compare disponibilità, così hai un vantaggio rispetto a chi controlla a mano. La prenotazione sul portale resta a tuo carico.',
    },
    {
      question: 'Quanto sono veloci le notifiche?',
      answer:
        'Il sistema controlla le disponibilità **ogni pochi minuti**. In genere ricevi l’avviso entro **2–3 minuti** dall’apertura del posto sul portale.',
    },
    {
      question: 'Come ricevo le notifiche?',
      answer:
        'Tutte le notifiche arrivano su **Telegram**. Per configurarti serve il tuo **ID numerico** Telegram (non basta l’username @…): è quello che usano i bot per sapere a chi scrivere.',
    },
    {
      question: 'Perché mi chiedete l’ID Telegram e come lo trovo?',
      answer:
        'Il sistema che ti invia gli avvisi usa l’**ID utente** Telegram, non il nome visibile o il **@username**: è un numero lungo (es. **591234567**). Apri **@userinfobot** o **@getidsbot**, premi **Avvia** e copia il valore **Id** / **User ID**.',
    },
    {
      question: 'Quanto dura il servizio?',
      answer:
        '**30 giorni** dalla data di attivazione. Se non trovi posto in quel periodo, puoi valutare un nuovo ciclo.',
    },
    {
      question: 'Posso monitorare più medici contemporaneamente?',
      answer:
        'Ogni pagamento copre **un medico alla volta**. Per più medici servono attivazioni separate.',
    },
    {
      question: 'Cosa succede se il medico non si libera mai?',
      answer:
        'Continuiamo a monitorare per tutti i **30 giorni**. Così non rischi di perdere finestre brevi senza saperlo.',
    },
  ]

  function renderAnswer(text: string) {
    const parts = text.split(/\*\*(.+?)\*\*/g)
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-slate-900">
          {part}
        </strong>
      ) : (
        <span key={i}>{part}</span>
      )
    )
  }

  return (
    <section className="relative scroll-mt-20 border-t border-slate-200/80 bg-[#eef0f6] py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-20">
          <Reveal className="lg:col-span-4 lg:max-w-xs">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.032em] text-slate-950 sm:text-4xl">
              FAQ
            </h2>
            <p className="prose-body mt-6 text-base text-slate-600 sm:text-lg">
              Chiarezza prima di tutto:{' '}
              <span className="font-medium text-slate-800">
                niente promesse impossibili.
              </span>
            </p>
          </Reveal>

          <div className="mt-12 space-y-3 lg:col-span-7 lg:mt-0 xl:col-span-8">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delayMs={index * 35}>
                <details className="faq-details surface-panel bg-white/90 px-5 py-1 sm:px-7 open:shadow-[var(--shadow-card)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                    <span className="font-heading text-base font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </span>
                    <svg
                      className="faq-chevron size-5 shrink-0 text-slate-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="prose-body border-t border-slate-200/80 pb-5 pt-4 text-[0.95rem] text-slate-600">
                    {renderAnswer(faq.answer)}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
