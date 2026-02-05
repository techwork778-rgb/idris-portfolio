'use client'

import { HeroSection } from '@/components/hero-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <HeroSection />
      <Footer />
    </div>
  )
}
