"use client";

import Link from 'next/link';

export function ContactBlockSection() {
  return (
    <section className="relative pt-[120px] pb-[180px] md:pt-[160px] md:pb-[240px] font-jost flex items-center justify-center overflow-hidden bg-[#0B1F2E]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/hero-kenya-bg.png" 
          alt="eawestern contact" 
          className="w-full h-full object-cover scale-105 opacity-40 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2E]/60 via-[#0B1F2E]/90 to-[#0B1F2E]" />
        <div className="noise-overlay opacity-30" />
      </div>

      <div className="relative z-10 max-w-[850px] mx-auto px-6 text-center">
        <div className="uppercase-label mb-8 text-[var(--color-gold)]">
          Global Operations
        </div>
        <h2 className="serif text-[36px] md:text-[62px] text-white leading-[1.1] mb-10">
          We Are Ready to Support <span className="italic block mt-2 font-light">Your Journey</span>
        </h2>
        <p className="text-lg md:text-xl text-white/50 mb-14 max-w-[650px] mx-auto font-light leading-relaxed">
          Whether you're planning a safari, arranging transport, or securing insurance-our team is ready to assist you.
        </p>
        <Link 
          href="/en/contact"
          className="inline-block border border-[var(--color-gold)] text-[var(--color-gold)] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-700 hover:bg-[var(--color-gold)] hover:text-[#0d1b2e] hover:-translate-y-1"
        >
          Speak to Our Team
        </Link>
      </div>
    </section>
  );
}
