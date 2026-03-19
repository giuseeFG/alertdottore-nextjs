import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MedicoRadar - Trova il tuo Pediatra o Medico di Base",
  description:
    "Ricevi notifiche immediate quando il pediatra o medico che vuoi diventa disponibile su Salute Lazio. Servizio di monitoraggio in tempo reale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-slate-900">
        <a href="#hero" className="skip-link">
          Vai al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
