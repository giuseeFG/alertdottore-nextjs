'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Testimonial from '@/components/Testimonial'
import Urgency from '@/components/Urgency'
import Pricing from '@/components/Pricing'
import Form from '@/components/Form'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f5f7fb] text-slate-900">
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(110%_75%_at_0%_-10%,rgba(59,130,246,0.09),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_45%_at_100%_15%,rgba(13,148,136,0.07),transparent_42%)]" />
        <div className="noise-overlay fixed" />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Testimonial />
        <Urgency />
        <Pricing />
        <Form />
        <FAQ />
        <Footer />
        <StickyCTA />
      </div>
    </main>
  )
}
