"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, Car, ShieldCheck } from 'lucide-react';
import { CredentialsSection } from './CredentialsSection';

const portfolios = [
  {
    id: 'safaris',
    title: 'Tours & Safaris',
    description: 'Curated safari experiences across East Africa-Designed for comfort, safety, and authentically unforgettable experiences.',
    icon: Compass,
    accent: '#C8A96E',
    bgImage: '/images/tours.png',
    content: "Our expeditions are architectural journeys through the wild. We don't just show you Africa; we curate a narrative of discovery, safety, and uncompromising comfort."
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Structured, reliable insurance solutions tailored to protect your life, business, and assets.',
    icon: ShieldCheck,
    accent: '#C8A96E',
    bgImage: '/images/fam.png',
    content: "Protection that anticipates. Our bespoke insurance structures provide absolute clarity and advocacy in an unpredictable regional landscape."
  },
  {
    id: 'automotive',
    title: 'Car Hire',
    description: 'Reliable, fully maintained vehicles for business trips, safaris, and everyday travel.',
    icon: Car,
    accent: '#1D4E89',
    bgImage: '/images/caar.png',
    content: "Mobilizing global teams with a fleet that speaks of authority and reliability. From armored executive transport to luxury self-drive, we redefine regional travel."
  }
];

export function PortalClient({ locale = 'en' }: { locale?: string }) {
  const [activeMicroSite, setActiveMicroSite] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (activeMicroSite) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeMicroSite]);

  return (
    <main
      className="relative flex flex-col pt-24 text-[var(--text-primary)]"
      style={{ background: 'var(--background-gradient)' }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Keep the hero background calm (no big glow blobs). */}
        <div className="noise-overlay"></div>
      </div>

      {/* Structural Lines */}
      <div className="gold-line-v line-left opacity-10"></div>
      <div className="gold-line-v line-right opacity-10"></div>

      {/* Hero Content Section */}
      <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="uppercase-label mb-8"
        >
          East Africa tours, safaris, insurance and car hire — managed by one trusted company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="serif text-[48px] md:text-[84px] leading-[1.05] mb-10 tracking-[0.02em]"
        >
          Experience the{' '}
          <span style={{ color: 'var(--color-gold)', textShadow: 'none' }}>
            Extraordinary
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-[#A7B1BC]/75 text-xl md:text-2xl font-light max-w-[760px] mb-16 leading-[1.7]"
        >
          East Africa&apos;s only integrated ecosystem for Premium Safaris, Licensed Insurance, and Reliable Mobility. One trusted partner, zero gaps
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button
            onClick={() => setActiveMicroSite('safaris')}
            className="bg-[var(--color-gold)] text-[#0B1F2E] px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-500 rounded-[4px] hover:brightness-110"
          >
            Explore Collective
          </button>
          <button
            className="border border-[var(--color-gold)] text-[var(--color-gold)] bg-transparent px-10 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-500 rounded-[4px] hover:bg-[var(--color-gold)] hover:text-[#0B1F2E]"
          >
            Request a Private Consultation
          </button>
        </motion.div>

        {/* Scroll Hint */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-[var(--color-gold)] animate-scroll-line h-full"></div>
          </div>
        </div>
      </div>

      {/* Portfolio Grid Selection */}
      <section className="relative z-10 w-full px-4 md:px-10 pt-3 pb-4 md:pt-4 md:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-4 md:mb-6"
        >
          <h2 className="serif text-[30px] md:text-[42px] text-white leading-tight">
            Choose a <span style={{ color: 'var(--color-gold)' }}>Service</span> to Get Started
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[var(--color-gold)]/10 border-t border-b border-[var(--color-gold)]/20">
          {portfolios.map((portfolio, idx) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => {
                const destination =
                  portfolio.id === 'safaris'
                    ? `/${locale}/safaris`
                    : portfolio.id === 'insurance'
                      ? `/${locale}/insurance`
                      : `/${locale}/vehicles`;
                router.push(destination);
              }}
              className="group relative h-[350px] md:h-[500px] cursor-pointer bg-[#0B1F2E] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-1000">
                <img src={portfolio.bgImage} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000" />
              </div>

              <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[14px] text-white/30 mb-6 font-light uppercase tracking-widest">0{idx + 1}</div>
                  <div className="w-16 h-16 border border-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] mb-10 group-hover:bg-[var(--color-gold)] group-hover:text-[#0d1b2e] transition-all duration-700">
                    <portfolio.icon size={32} />
                  </div>
                  <h3 className="serif text-3xl md:text-4xl text-white mb-6 leading-tight group-hover:text-[var(--color-gold)] transition-colors duration-500">
                    {portfolio.title}
                  </h3>
                </div>
                <div className="text-base md:text-lg text-white/60 leading-relaxed font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 max-w-[320px]">
                  {portfolio.description}
                  <div className="mt-6 flex items-center gap-2 text-[var(--color-gold)] text-[10px] uppercase tracking-[0.3em] font-medium">
                    {portfolio.id === 'safaris'
                      ? 'Explore Itineraries →'
                      : portfolio.id === 'insurance'
                        ? 'View Coverage & Get a Quote →'
                        : 'Browse Fleet & Availability →'}
                    <span className="w-8 h-[1px] bg-[var(--color-gold)]/30 transition-all group-hover:w-16"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="relative z-10 pt-2 pb-10 md:pt-4 md:pb-12">
        <CredentialsSection />
      </div>

      {/* Micro-site Overlay System */}
      <AnimatePresence>
        {activeMicroSite && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-[60] bg-[#0B1F2E] overflow-y-auto"
          >
            {portfolios.filter(p => p.id === activeMicroSite).map(site => (
              <div key={site.id} className="relative min-h-screen">
                {/* Back Button */}
                <button
                  onClick={() => setActiveMicroSite(null)}
                  className="fixed top-12 left-10 md:left-20 z-[70] flex items-center gap-6 text-white/40 hover:text-[var(--color-gold)] transition-all group"
                >
                  <span className="text-[10px] uppercase tracking-[0.5em] order-2">Back</span>
                  <div className="w-[60px] h-[1px] bg-white/20 relative overflow-hidden order-1 group-hover:bg-[var(--color-gold)]/50">
                    <div className="absolute inset-0 bg-[var(--color-gold)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>
                </button>

                {/* Vertical Accents */}
                <div className="hidden md:block fixed left-[50%] h-full w-[1px] bg-white/5 z-0"></div>

                {/* Hero Feature */}
                <header className="relative h-[80vh] w-full pt-40 px-[10%] flex flex-col justify-end pb-20 overflow-hidden">
                   <div className="absolute inset-0 grayscale opacity-40">
                      <img src={site.bgImage} alt="" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2E] via-transparent to-transparent"></div>
                   
                   <div className="relative z-10">
                      <div className="uppercase-label text-[var(--color-gold)] mb-6">Discovery Portfolio</div>
                      <h2 className="serif text-[48px] md:text-[84px] leading-none mb-10 text-white">
                        {site.title.split(' ')[0]} <span className="italic block mt-4 font-light text-white/80">{site.title.split(' ').slice(1).join(' ')}</span>
                      </h2>
                      <div className="max-w-[500px] text-lg text-white/60 font-light leading-relaxed mb-12">
                        {site.content}
                      </div>
                      <button className="bg-[var(--color-gold)] text-[#0d1b2e] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.4em] transition-all duration-700 hover:bg-[var(--color-gold-light)]">
                        Initialize Inquiry
                      </button>
                   </div>
                </header>

                {/* Gallery Section */}
                <section className="py-24 md:py-40 px-[10%] relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="space-y-24">
                       <div className="relative group">
                          <img src={site.bgImage} alt="" className="w-full aspect-[4/5] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                          <div className="mt-8">
                            <div className="uppercase-label border-b border-[var(--color-gold)]/20 pb-4 mb-4 inline-block">The Vision</div>
                            <p className="font-light text-white/50 leading-relaxed text-lg">Curating moments that exist outside of conventional travel structures. A dedication to spatial awareness and regional intelligence.</p>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-24 md:pt-40">
                       <div className="relative group">
                          <div className="mb-8 text-right">
                             <div className="uppercase-label border-b border-[var(--color-gold)]/20 pb-4 mb-4 inline-block">The Execution</div>
                             <p className="font-light text-white/50 leading-relaxed text-lg">Every logistical touchpoint is considered. From the texture of the transport to the precision of the claims advocacy.</p>
                          </div>
                          <img src={site.bgImage} alt="" className="w-full aspect-[4/5] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                       </div>
                    </div>
                  </div>
                </section>

                {/* CTA Strip */}
                <section className="py-24 md:py-36 px-[10%] bg-[#0F2A3D] border-t border-[var(--color-gold)]/10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div>
                      <h3 className="serif text-3xl md:text-5xl mb-6">Collaborate on your next <span className="italic font-light">Legacy</span>.</h3>
                      <p className="text-white/40 text-sm tracking-widest uppercase">EA WESTERN GLOBAL hub</p>
                   </div>
                   <button className="border border-[var(--color-gold)] text-[var(--color-gold)] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-700 hover:bg-[var(--color-gold)] hover:text-[#0B1F2E]">
                     Start Planning
                   </button>
                </section>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
