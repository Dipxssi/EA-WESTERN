"use client";

import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Everything was handled seamlessly-from airport pickup to our safari logistics. We did not have to worry about a single detail.",
    author: "David L.",
    location: "UK"
  },
  {
    quote: "Fast claims, clear communication, and zero stress. They made the entire insurance process simple and efficient.",
    author: "Michelle K.",
    location: "Nairobi"
  },
  {
    quote: "We needed a reliable partner on the ground in East Africa, and eawestern delivered beyond expectations. The coordination, communication, and execution were top-tier.",
    author: "Daniel K.",
    location: "New York, USA"
  },
  {
    quote: "eawestern is the only partner I trust. They managed our corporate fleet, insured our offices, and planned our end-of-year safari. Having one team handle everything is a game-changer for my business.",
    author: "Allan M",
    location: "Director, Regional Logistics Firm"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-[120px] md:py-[180px] bg-[#0B1F2E] text-white font-jost overflow-hidden border-t border-[var(--color-gold)]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16 md:mb-24">
          <div className="uppercase-label mb-6">
            Client Perspectives
          </div>
          <h2 className="serif text-[36px] md:text-[52px] text-white leading-tight">
            The Standard of <span className="italic text-[var(--color-gold)]">Excellence</span>
          </h2>
        </div>

        <div className="relative w-full">
          {/* Fading edges for the slider */}
          <div className="absolute top-0 left-0 w-[50px] md:w-[150px] h-full bg-gradient-to-r from-[#0B1F2E] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[50px] md:w-[150px] h-full bg-gradient-to-l from-[#0B1F2E] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-[testimonial-slide_40s_linear_infinite] gap-8 md:gap-12 w-max hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[300px] md:w-[450px] shrink-0 bg-[#0F2A3D] p-10 md:p-14 text-left border border-white/5 transition-all duration-700 hover:border-[var(--color-gold)]/30"
              >
                <div className="w-12 h-12 border border-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] mb-10">
                  <Quote size={24} />
                </div>
                <p className="serif text-[18px] md:text-[22px] text-white/90 leading-[1.6] mb-12">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-gold)] mb-2">
                    {t.author}
                  </div>
                  <div className="text-[10px] font-light uppercase tracking-[0.2em] text-white/40">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
