'use client'

export function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-primary/20 py-6 sm:py-8">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Left Side - Agent Info */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[oklch(0.08_0_0)] tracking-tight">Idris Ibrahim</h3>
            <p className="text-xs sm:text-sm text-[oklch(0.48_0_0)] font-light">Premium Real Estate Property Consultant</p>
          </div>

          {/* Center - Company Name */}
         <div className="text-center md:text-center space-y-1">
            <a
              href="https://deenpropertiesuae.com/"
              className="text-primary hover:text-primary/80 transition-colors text-xs sm:text-sm font-medium block break-all"
            >
              Deen Properties
            </a>
            
          <a href="tel:+971508858144" className="w-full">
            <p className="text-xs sm:text-sm text-[oklch(0.48_0_0)] font-light">+971 50 885 8144</p>
            </a>
          </div>

          {/* Right Side - Contact */}
          <div className="text-center md:text-right space-y-1">
            <a
              href="mailto:idris@deenpropertiesuae.com"
              className="text-[oklch(0.65_0.19_81.4)] hover:text-[oklch(0.55_0.15_81.4)] transition-colors text-xs sm:text-sm font-medium block break-all"
            >
              idris@deenpropertiesuae.com
            </a>
            <a href="tel:+971528207718" className="w-full">
              <p className="text-xs sm:text-sm text-[oklch(0.48_0_0)] font-light">+971 52 820 7718</p>
            </a>          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 mt-5 sm:mt-6 pt-5 sm:pt-6">
          <p className="text-xs text-center px-2 text-[oklch(0.55_0_0)] font-light">
            © 2026 Idris Ibrahim. All rights reserved. | Premium Real Estate Property Consultant
          </p>
        </div>
      </div>
    </footer>
  )
}
