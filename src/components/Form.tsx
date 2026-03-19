'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    telegram: '',
    email: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [noTelegramId, setNoTelegramId] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')

    if (!WEB3FORMS_KEY.trim()) {
      setStatus('err')
      setErrorMsg(
        'Manca NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: crea .env.local, rebuild, rideploya.'
      )
      return
    }

    const telegramId = formData.telegram.replace(/\s/g, '').trim()
    if (!noTelegramId) {
      if (!telegramId) {
        setStatus('err')
        setErrorMsg('Inserisci l’ID Telegram oppure spunta “Non ho l’ID…”.')
        return
      }
      if (!/^\d+$/.test(telegramId)) {
        setStatus('err')
        setErrorMsg('L’ID Telegram deve contenere solo numeri.')
        return
      }
    }

    setStatus('sending')

    const telegramLine = noTelegramId
      ? 'Telegram user ID: (non fornito — da recuperare in seguito)'
      : `Telegram user ID: ${telegramId}`

    const body = {
      access_key: WEB3FORMS_KEY,
      subject: 'Richiesta monitoraggio — MedicoRadar',
      name: formData.name.trim(),
      email: formData.email.trim(),
      from_name: formData.name.trim(),
      message: [
        `Nome: ${formData.name.trim()}`,
        `Medico/pediatra: ${formData.doctor.trim()}`,
        telegramLine,
        `Email: ${formData.email.trim()}`,
      ].join('\n'),
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      const data = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !data.success) {
        throw new Error(data.message || `Errore ${res.status}`)
      }

      setStatus('ok')
      setNoTelegramId(false)
      setFormData({ name: '', doctor: '', telegram: '', email: '' })
    } catch (err) {
      setStatus('err')
      setErrorMsg(err instanceof Error ? err.message : 'Invio non riuscito.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status === 'ok') setStatus('idle')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleNoTelegramToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status === 'ok') setStatus('idle')
    const checked = e.target.checked
    setNoTelegramId(checked)
    if (checked) {
      setFormData((prev) => ({ ...prev, telegram: '' }))
    }
  }

  const field =
    'w-full rounded-xl border border-slate-200/95 bg-slate-50/40 px-4 py-3.5 text-[0.95rem] text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-slate-400 hover:border-slate-300/95 focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.2)] disabled:opacity-60'

  const label =
    'mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500'

  const keyMissing = !WEB3FORMS_KEY.trim()

  return (
    <section
      className="relative scroll-mt-20 border-t border-slate-200/80 bg-white py-20 sm:py-24 md:py-28"
      id="form"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-5 xl:col-span-4">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700/90">
                Prossimo passo
              </p>
              <h2 className="font-heading mt-5 text-[clamp(1.75rem,2.5vw+1rem,2.5rem)] font-semibold tracking-[-0.032em] text-slate-950 sm:text-4xl">
                Richiedi il monitoraggio
              </h2>
              <p className="prose-body mt-6 max-w-sm text-base text-slate-600 sm:text-lg">
                Ti inviamo{' '}
                <strong className="font-semibold text-slate-900">
                  le istruzioni per il pagamento
                </strong>
                . Dopo la conferma, attiviamo il servizio.
              </p>
            </Reveal>
          </div>

          <Reveal
            className="mt-12 lg:col-span-7 lg:mt-0 xl:col-span-7 xl:col-start-6"
            delayMs={50}
          >
            <div className="surface-panel max-w-lg p-6 sm:p-8">
              {keyMissing && (
                <p className="mb-6 rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">
                  <strong className="font-semibold">Modulo non collegato.</strong>{' '}
                  Registrati su{' '}
                  <a
                    href="https://web3forms.com/"
                    className="font-medium text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    web3forms.com
                  </a>
                  , copia la Access Key in{' '}
                  <code className="rounded bg-white/80 px-1 text-[0.8rem]">
                    .env.local
                  </code>{' '}
                  come{' '}
                  <code className="rounded bg-white/80 px-1 text-[0.8rem]">
                    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
                  </code>
                  , poi{' '}
                  <code className="rounded bg-white/80 px-1 text-[0.8rem]">
                    npm run build
                  </code>{' '}
                  e rideploya (variabili pubbliche sono nel bundle).
                </p>
              )}

              {status === 'ok' && (
                <p className="mb-6 rounded-xl border border-teal-200/90 bg-teal-50/90 px-4 py-3 text-sm text-teal-950">
                  Richiesta inviata. Ti rispondiamo presto con le istruzioni per
                  il pagamento.
                </p>
              )}

              {status === 'err' && errorMsg && (
                <p className="mb-6 rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-950">
                  {errorMsg}
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={label}>
                    Nome e cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Es. Mario Rossi"
                    required
                    autoComplete="name"
                    disabled={status === 'sending'}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="doctor" className={label}>
                    Medico o pediatra
                  </label>
                  <input
                    type="text"
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    placeholder="Es. Dr. Mario Rossi"
                    required
                    disabled={status === 'sending'}
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="telegram" className={label}>
                    ID Telegram (numero){' '}
                    <span className="font-normal normal-case tracking-normal text-slate-400">
                      — facoltativo se spunti sotto
                    </span>
                  </label>
                  <div className="mb-3 rounded-xl border border-slate-200/95 bg-slate-50/80 px-4 py-3 text-xs text-slate-700">
                    <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Come ottenere l&apos;ID
                    </p>
                    <p className="prose-body mt-2 text-slate-600">
                      L&apos;ID non è il nome con <strong className="font-semibold text-slate-800">@</strong>: è solo una
                      serie di cifre che Telegram assegna al tuo account. I bot la usano per inviarti messaggi diretti.
                    </p>
                    <ol className="mt-3 list-decimal space-y-2 pl-4 text-slate-700 marker:font-medium">
                      <li>
                        Apri <strong className="font-semibold text-slate-900">Telegram</strong> (app o{' '}
                        <a
                          href="https://web.telegram.org"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700"
                        >
                          web.telegram.org
                        </a>
                        ).
                      </li>
                      <li>
                        Cerca uno di questi bot e aprilo:{' '}
                        <a
                          href="https://t.me/userinfobot"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700"
                        >
                          @userinfobot
                        </a>{' '}
                        oppure{' '}
                        <a
                          href="https://t.me/getidsbot"
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-blue-700 underline decoration-blue-700/30 underline-offset-2 hover:decoration-blue-700"
                        >
                          @getidsbot
                        </a>
                        .
                      </li>
                      <li>
                        Tocca <strong className="font-semibold text-slate-900">Avvia</strong> (o{' '}
                        <strong className="font-semibold text-slate-900">Start</strong>).
                      </li>
                      <li>
                        Il bot risponde subito: copia il valore indicato come{' '}
                        <strong className="font-semibold text-slate-900">Id</strong>,{' '}
                        <strong className="font-semibold text-slate-900">User ID</strong> o simile (solo cifre, niente{' '}
                        <strong className="font-semibold text-slate-900">@</strong>).
                      </li>
                      <li>
                        Incollalo nel campo qui sotto, oppure usa la spunta sotto se proprio non ci riesci: ti
                        ricontattiamo via email.
                      </li>
                    </ol>
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern={noTelegramId ? undefined : '[0-9]+'}
                    id="telegram"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="Es. 123456789"
                    required={!noTelegramId}
                    autoComplete="off"
                    disabled={status === 'sending' || noTelegramId}
                    aria-required={!noTelegramId}
                    className={field}
                  />
                  <label className="mt-3 flex cursor-pointer items-start gap-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={noTelegramId}
                      onChange={handleNoTelegramToggle}
                      disabled={status === 'sending'}
                      className="mt-1 size-4 shrink-0 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="prose-body leading-snug">
                      <strong className="font-semibold text-slate-900">Non ho l’ID in questo momento</strong> (non riesco a
                      ottenerlo / lo manderò dopo). Invia comunque la richiesta: ci mettiamo in contatto via email.
                    </span>
                  </label>
                </div>

                <div>
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nome@esempio.it"
                    required
                    autoComplete="email"
                    disabled={status === 'sending'}
                    className={field}
                  />
                </div>

                <p className="prose-body max-w-md text-xs text-slate-500">
                  Inviando il modulo accetti di essere ricontattato per
                  l&apos;attivazione. I dati servono solo a gestire il servizio.
                </p>

                <button
                  type="submit"
                  disabled={status === 'sending' || keyMissing}
                  className="btn-primary min-h-12 w-full bg-blue-600 px-6 py-3.5 text-[0.9375rem] font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === 'sending' ? 'Invio…' : 'Invia richiesta'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
