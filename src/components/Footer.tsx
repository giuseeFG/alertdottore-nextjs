export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div>
            <p className="font-heading text-lg font-semibold text-white">
              Medico<span className="text-blue-400">Radar</span>
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
              Monitoraggio disponibilità su Salute Lazio
            </p>
            <nav
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"
              aria-label="Legale"
            >
              <a
                href="#form"
                className="underline decoration-slate-600 underline-offset-4 transition-colors hover:text-white hover:decoration-slate-400"
              >
                Richiedi monitoraggio
              </a>
              <a
                href="#hero"
                className="underline decoration-slate-600 underline-offset-4 transition-colors hover:text-white hover:decoration-slate-400"
              >
                Torna su
              </a>
            </nav>
          </div>
          <p className="max-w-md text-left text-xs leading-[1.75] text-slate-500 sm:text-right">
            Servizio indipendente — non affiliato alla Regione Lazio né al
            portale ufficiale. Le prenotazioni avvengono solo tramite i canali
            pubblici della ASL.
          </p>
        </div>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
          © {new Date().getFullYear()} MedicoRadar
        </p>
      </div>
    </footer>
  )
}
