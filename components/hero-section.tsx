"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle, Phone, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex-1 w-full">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Side - Agent Image with Modern Pattern */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-secondary to-background p-12">
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-primary/20 transform rotate-3 rounded-lg" />
            <div className="absolute inset-0 border border-primary/10 transform -rotate-2 rounded-lg ml-2 mt-2" />

            {/* Main Image Container */}
            <div
              className="relative bg-card rounded-3xl overflow-hidden 
                w-96 h-[520px] 
                shadow-[0_20px_60px_rgba(0,0,0,0.4)] 
                border border-white/10"
            >
              <Image
                src="/idris-img.png"
                alt="Luxury Real Estate Agent"
                fill
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Floating Accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-primary/30 rounded-full" />
          </div>
        </div>

        {/* Right Side - Agent Info and CTAs */}
        <div className="flex flex-col justify-center items-start p-5 sm:p-6 md:p-12 lg:p-16">
          <div className="w-full md:max-w-md space-y-6 md:space-y-8">
            {/* Agent Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-2 sm:mb-4">
                <span className="text-balance">Idris Ibrahim</span>
              </h1>
              <p className="text-lg sm:text-xl text-primary font-semibold">
                Luxury Real Estate Property Consultant
              </p>
            </div>

            {/* Professional Description */}
            <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
              With over 15 years of expertise in Dubai's luxury property market,
              I specialize in premium residential and commercial real estate.
              Dedicated to delivering exceptional service and finding the
              perfect property that matches your vision.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start gap-4 sm:gap-5">
              <Link
                href="https://www.instagram.com/shrfidris?igsh=dzlobDByeHQzZ2hk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://deenpropertiesuae.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:idris@deenpropertiesuae.com"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-background transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full pt-4">
              <a href="tel:+971528207718" className="w-full">
                <button className="w-full bg-primary text-background px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </a>

              <Link
                href="https://wa.me/971528207718"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Contact WhatsApp
              </Link>
            </div>
          </div>

          {/* Mobile Image - Visible on small screens */}
          <div className="md:hidden w-full mt-10">
            <div
              className="relative bg-card rounded-3xl overflow-hidden 
                  w-full h-[420px] sm:h-[480px]
                  shadow-[0_16px_50px_rgba(0,0,0,0.35)]
                  border border-white/10"
            >
              <Image
                src="/idris-img.png"
                alt="Luxury Real Estate Agent"
                fill
                className="object-cover scale-105"
                priority
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t 
                    from-black/45 via-black/15 to-transparent"
              />

              {/* Luxury accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] 
                    bg-gradient-to-r from-primary via-primary/80 to-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
