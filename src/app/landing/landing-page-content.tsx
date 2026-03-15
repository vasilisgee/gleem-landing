import { LandingNavbar } from './components/navbar'
import { HeroSection } from './components/hero-section'
import { LogoCarousel } from './components/logo-carousel'
import { FeaturesSection } from './components/features-section'
import { TeamSection } from './components/team-section'
import { WhatIncludedSection } from './components/what-included-section'
import { PricingSection } from './components/pricing-section'
import { CTASection } from './components/cta-section'
import { FaqSection } from './components/faq-section'
import { LandingFooter } from './components/footer'
import { HowItWorksSection } from './components/how-it-works-section'
import { GleemWaySection } from './components/gleem-way-section'

export function LandingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />

      <main>
        <HeroSection />
        <LogoCarousel />
        <HowItWorksSection />
        <GleemWaySection />
        <WhatIncludedSection />
        <PricingSection />
        <FeaturesSection />
        <TeamSection />
        <FaqSection />
        <CTASection />
      </main>

      <LandingFooter />
    </div>
  )
}
