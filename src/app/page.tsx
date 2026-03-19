'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import FlowInfographic from '@/components/FlowInfographic'
import Testimonial from '@/components/Testimonial'
import Urgency from '@/components/Urgency'
import Pricing from '@/components/Pricing'
import Form from '@/components/Form'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-slate-900">
      <div className="page-dynamic-bg" aria-hidden>
        <div className="page-dynamic-bg__mesh" />
        <div className="page-dynamic-bg__orb page-dynamic-bg__orb--a" />
        <div className="page-dynamic-bg__orb page-dynamic-bg__orb--b" />
        <div className="page-dynamic-bg__orb page-dynamic-bg__orb--c" />
        <div className="noise-overlay absolute inset-0 opacity-[0.04]" />
      </div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <FlowInfographic />
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
