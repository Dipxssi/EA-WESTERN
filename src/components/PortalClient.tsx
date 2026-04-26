"use client";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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
  const serviceHeaderRef = useRef<HTMLDivElement | null>(null);
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const { scrollYProgress: serviceHeaderProgress } = useScroll({
    target: serviceHeaderRef,
    offset: ['start 80%', 'end 35%']
  });
  const serviceHeaderY = useTransform(serviceHeaderProgress, [0, 1], [48, -12]);
  const serviceHeaderOpacity = useTransform(serviceHeaderProgress, [0, 0.25, 1], [0, 1, 0.85]);
  const serviceHeaderScale = useTransform(serviceHeaderProgress, [0, 1], [0.96, 1.02]);
  const serviceAccentX = useTransform(serviceHeaderProgress, [0, 1], [-20, 0]);

  const handleExploreClick = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (activeMicroSite) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeMicroSite]);

  useEffect(() => {
    router.prefetch(`/${locale}/safaris`);
    router.prefetch(`/${locale}/insurance`);
    router.prefetch(`/${locale}/vehicles`);
  }, [locale, router]);

  const handleCardNavigation = (destination: string) => {
    router.push(destination);
  };

  return (
    <main
      className="relative flex w-full max-w-full flex-col overflow-x-hidden pt-24 text-[var(--text-primary)]"
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
      <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 relative z-10 py-14 sm:py-20">
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
          className="serif text-[32px] sm:text-[40px] md:text-[64px] lg:text-[84px] leading-[1.05] mb-8 sm:mb-10 tracking-[0.02em] px-1"
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
          className="text-[#A7B1BC]/75 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-[760px] mb-12 sm:mb-16 leading-[1.7] px-1"
        >
          East Africa&apos;s only integrated ecosystem for Premium Safaris, Licensed Insurance, and Reliable Mobility. One trusted partner, zero gaps
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-2 w-full max-w-lg sm:max-w-none"
        >
          <button
            onClick={handleExploreClick}
            className="bg-[var(--color-gold)] text-[#0B1F2E] px-6 sm:px-10 py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] transition-all duration-500 rounded-[4px] hover:brightness-110 text-center"
          >
            Explore Collective
          </button>
          <button
            onClick={() => router.push(`/${locale}/contact`)}
            className="border border-[var(--color-gold)] text-[var(--color-gold)] bg-transparent px-6 sm:px-10 py-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] transition-all duration-500 rounded-[4px] hover:bg-[var(--color-gold)] hover:text-[#0B1F2E] text-center"
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
      <section ref={servicesSectionRef} className="relative z-10 w-full px-4 md:px-10 pt-3 pb-4 md:pt-4 md:pb-6">
        <motion.div
          ref={serviceHeaderRef}
          className="text-center mb-4 md:mb-6 px-2"
        >
          <motion.h2
            style={{ y: serviceHeaderY, opacity: serviceHeaderOpacity, scale: serviceHeaderScale }}
            className="serif text-[26px] sm:text-[30px] md:text-[42px] text-white leading-tight will-change-transform"
          >
            Choose a{' '}
            <motion.span style={{ color: 'var(--color-gold)', x: serviceAccentX }} className="inline-block">
              Service
            </motion.span>{' '}
            to Get Started
          </motion.h2>
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
                handleCardNavigation(destination);
              }}
              className="group relative min-h-[380px] sm:min-h-[420px] md:min-h-[520px] cursor-pointer bg-[#0B1F2E] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={portfolio.bgImage}
                  alt=""
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2E]/90 via-[#0B1F2E]/45 via-[42%] to-[#0B1F2E]/10"></div>
              {/* Darken lower half so body + CTA read clearly on busy / bright image areas */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020a12] via-[#020a12]/88 via-[38%] to-transparent"
                aria-hidden
              />
              <div className="absolute inset-0 border border-[var(--color-gold)]/10 pointer-events-none"></div>
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[var(--color-gold)]/15 pointer-events-none"></div>
              <div className="absolute inset-x-0 top-0 h-[1px] bg-[var(--color-gold)]/15 pointer-events-none"></div>

              <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-12">
                <div>
                  <div className="text-[14px] text-white/30 mb-6 font-light uppercase tracking-widest">0{idx + 1}</div>
                  <div className="mb-10 flex h-16 w-16 items-center justify-center border border-[var(--color-gold)]/20 text-[var(--color-gold)] transition-all duration-700 group-hover:bg-[var(--color-gold)] group-hover:text-[#0d1b2e]">
                    <portfolio.icon size={32} />
                  </div>
                  <h3
                    className="serif text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 leading-tight transition-colors duration-500 [text-shadow:0_2px_20px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.95)] group-hover:text-[var(--color-gold)]"
                  >
                    {portfolio.title}
                  </h3>
                </div>
                <div className="mt-auto max-w-[20rem] rounded-sm border border-white/10 bg-[#0B1F2E]/55 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-[6px] sm:max-w-[22rem] md:p-5">
                  <p className="text-[15px] font-normal leading-relaxed text-white/95 antialiased [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] sm:text-base md:text-[17px]">
                    {portfolio.description}
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="text-[10px] font-semibold uppercase leading-snug tracking-[0.24em] text-[#E8D4A4] [text-shadow:0_1px_3px_rgba(0,0,0,0.75)] sm:text-[11px] sm:tracking-[0.28em] group-hover:text-white transition-colors duration-500">
                      {portfolio.id === 'safaris'
                        ? 'Explore Itineraries'
                        : portfolio.id === 'insurance'
                          ? 'View Coverage & Get a Quote'
                          : 'Browse Fleet & Availability'}
                    </span>
                    <span
                      aria-hidden
                      className="relative inline-block h-[10px] w-4 align-middle transition-all duration-500 group-hover:w-7 group-active:w-8"
                    >
                      <span className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 bg-[var(--color-gold)]"></span>
                      <span className="absolute right-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rotate-45 border-r border-t border-[var(--color-gold)]"></span>
                    </span>
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
                <header className="relative min-h-[55vh] sm:min-h-[70vh] md:h-[80vh] w-full pt-28 sm:pt-36 md:pt-40 px-4 sm:px-[8%] md:px-[10%] flex flex-col justify-end pb-12 sm:pb-16 md:pb-20 overflow-hidden">
                   <div className="absolute inset-0 grayscale opacity-40">
                      <img src={site.bgImage} alt="" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2E] via-transparent to-transparent"></div>
                   
                   <div className="relative z-10">
                      <div className="uppercase-label text-[var(--color-gold)] mb-6">Discovery Portfolio</div>
                      <h2 className="serif text-[32px] sm:text-[44px] md:text-[64px] lg:text-[84px] leading-none mb-6 sm:mb-10 text-white">
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
                <section className="py-16 sm:py-24 md:py-40 px-4 sm:px-[8%] md:px-[10%] relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
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
                <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-[8%] md:px-[10%] bg-[#0F2A3D] border-t border-[var(--color-gold)]/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                   <div>
                      <h3 className="serif text-3xl md:text-5xl mb-6">Collaborate on your next <span className="italic font-light">Legacy</span>.</h3>
                      <p className="text-white/40 text-sm tracking-widest">eawestern global hub</p>
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
