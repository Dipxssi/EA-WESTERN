"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, Car, ShieldCheck } from 'lucide-react';
import {
  HomeHeroSlideDots,
  HomeHeroSlideRoot,
  useHomeHeroSlideContext,
  useHomeHeroTextAnimation,
} from '@/components/HomeHeroSlideRoot';

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

const HOME_HERO_SLIDES = [
  {
    eyebrow: 'Welcome to EA Western',
    title: 'For all your insurance, safari and mobility needs',
    subtitle:
      'We are a trusted East African partner for families and businesses, delivering integrated cover, travel, and transport solutions with responsive support.',
  },
  {
    eyebrow: 'Fast Claims Support',
    title: 'Protection that responds when it matters most',
    subtitle:
      'Our team stays with you through policy setup, renewals, and claims so outcomes are clear, timely, and stress-free.',
  },
  {
    eyebrow: 'Customer First',
    title: 'Experienced advisors built around your needs',
    subtitle:
      'From personal cover to business risk, we simplify decisions and secure solutions that fit your life, budget, and goals.',
  },
] as const;

const HOME_HERO_IMAGES = ['/images/insurancebg.png', '/images/safariview.png', '/images/car image.jpg'] as const;
const SLIDE_PROGRESS_MS = 5000;
const SERVICE_HIGHLIGHTS = [
  {
    index: '01',
    title: 'Tours & Safaris',
    icon: Compass,
    image: '/images/tours.png',
    href: '/safaris',
    ctaLabel: 'Explore Itineraries',
    description:
      'Curated safari experiences across East Africa with trusted planning, safe logistics, and memorable journeys for families, groups, and private travelers.',
  },
  {
    index: '02',
    title: 'Insurance',
    icon: ShieldCheck,
    image: '/images/fam.png',
    href: '/insurance',
    ctaLabel: 'View Coverage and Get a Quote',
    description:
      'Structured insurance solutions for individuals and businesses, with practical advisory support from policy selection through renewals and claims.',
  },
  {
    index: '03',
    title: 'Car Hire',
    icon: Car,
    image: '/images/caar.png',
    href: '/vehicles',
    ctaLabel: 'Browse Fleet and Availability',
    description:
      'Reliable, well-maintained vehicles for business, safari, and everyday travel, coordinated with responsive service and dependable support.',
  },
] as const;

function HomeHeroContent({ locale }: { locale: string }) {
  const slideCtx = useHomeHeroSlideContext();
  const { textCycle, textDelayMs } = useHomeHeroTextAnimation();
  const activeSlide = HOME_HERO_SLIDES[slideCtx?.activeDotIndex ?? 0];

  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-0 py-10">
      <div className="pointer-events-none fixed inset-x-0 top-[72px] z-[80]">
        <div className="relative h-[4px] w-full overflow-hidden bg-[#3f4650] shadow-[0_0_14px_rgba(0,0,0,0.85)]">
          <div
            key={`hero-progress-${slideCtx?.activeDotIndex ?? 0}-${textCycle}`}
            className="hero-cycle-line absolute inset-y-0 left-0 w-full bg-[#ffffff] shadow-[0_0_18px_rgba(255,255,255,1)]"
            style={{
              animationDuration: `${SLIDE_PROGRESS_MS}ms`,
            }}
          />
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        disabled={!slideCtx || slideCtx.transitioning}
        onClick={() => slideCtx?.goToIndex((slideCtx.activeDotIndex ?? 0) - 1)}
        className="absolute left-0 top-1/2 z-20 flex h-[78px] w-[52px] -translate-y-1/2 items-center justify-center bg-white/12 text-white/95 opacity-0 backdrop-blur-[1px] transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white/20 active:scale-[0.96] active:bg-white/28 disabled:cursor-not-allowed disabled:opacity-45"
      >
        <span className="block h-5 w-5 rotate-45 border-b-[2px] border-l-[2px] border-white" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        disabled={!slideCtx || slideCtx.transitioning}
        onClick={() => slideCtx?.goToIndex((slideCtx.activeDotIndex ?? 0) + 1)}
        className="absolute right-0 top-1/2 z-20 flex h-[78px] w-[52px] -translate-y-1/2 items-center justify-center bg-white/12 text-white/95 opacity-0 backdrop-blur-[1px] transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white/20 active:scale-[0.96] active:bg-white/28 disabled:cursor-not-allowed disabled:opacity-45"
      >
        <span className="block h-5 w-5 -rotate-[135deg] border-b-[2px] border-l-[2px] border-white" />
      </button>

      <div className="mx-auto max-w-[860px] px-6 text-center sm:px-8 md:px-10">
        <motion.p
          key={`eyebrow-${activeSlide.eyebrow}-${textCycle}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: Math.max(0, textDelayMs - 120) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d3b076]"
        >
          {activeSlide.eyebrow}
        </motion.p>

        <motion.h1
          key={`title-${activeSlide.title}-${textCycle}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: textDelayMs / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="serif text-[38px] leading-[1.08] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-[48px]"
        >
          {activeSlide.title}
        </motion.h1>

        <motion.p
          key={`subtitle-${activeSlide.subtitle}-${textCycle}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: (textDelayMs + 150) / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 max-w-[720px] text-[16px] leading-relaxed text-white/90 [text-shadow:0_2px_14px_rgba(0,0,0,0.4)] md:text-[20px]"
        >
          {activeSlide.subtitle}
        </motion.p>

        <motion.div
          key={`cta-${textCycle}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: (textDelayMs + 300) / 1000, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => window.location.assign(`/${locale}/contact`)}
            className="rounded-[50px] bg-[var(--color-gold)] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f2430] transition-colors duration-300 hover:bg-[#b79251]"
          >
            Get a Quote
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <HomeHeroSlideDots />
      </div>
    </div>
  );
}

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

  useEffect(() => {
    router.prefetch(`/${locale}/safaris`);
    router.prefetch(`/${locale}/insurance`);
    router.prefetch(`/${locale}/vehicles`);
  }, [locale, router]);

  return (
    <main
      className="relative flex w-full max-w-full flex-col overflow-x-hidden text-[var(--text-primary)]"
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

      <HomeHeroSlideRoot
        images={HOME_HERO_IMAGES}
        ariaLabel="Homepage hero section"
        pauseOnHover={false}
        className="group relative z-10 h-[550px] w-full overflow-hidden"
        overlayClassName="pointer-events-none absolute inset-0 z-[9] bg-[rgba(0,0,0,0.4)]"
      >
        <HomeHeroContent locale={locale} />
      </HomeHeroSlideRoot>

      <section className="relative z-10 bg-[#f7f5f0] py-14 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 md:px-10">
          <div className="mb-8 text-center md:mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8f7444]">Our Services</p>
            <h2 className="mt-3 serif text-[30px] leading-tight text-[#1a2e45] md:text-[40px]">
              Three ways we support you
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {SERVICE_HIGHLIGHTS.map((item) => (
              <article
                key={item.index}
                className="group relative overflow-hidden rounded-[8px] border border-[#e7e1d7] bg-[#f8f6f2] px-6 pb-7 pt-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1a2e45] hover:bg-[#1a2e45] hover:shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
              >
                <div className="absolute right-5 top-5 text-[48px] font-semibold tracking-tight text-[#ddd7cc] transition-colors duration-300 group-hover:text-[#c9a96e]">
                  {item.index}
                </div>
                <div className="mb-6 flex h-11 w-24 items-center justify-center rounded-br-[36px] rounded-tl-[8px] bg-[#c9a96e] text-[#1a2e45] transition-colors duration-300 group-hover:bg-[#d7bb87]">
                  <item.icon size={23} strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-[26px] font-semibold text-[#1f3148] transition-colors duration-300 group-hover:text-[#f3efe6]">
                  {item.title}
                </h3>
                <div className="mt-4 overflow-hidden rounded-[6px] border border-[#e3ddcf] bg-[#f1ece2] transition-colors duration-300 group-hover:border-[#2e4763]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[130px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 text-[16px] leading-[1.65] text-[#5b6472] transition-colors duration-300 group-hover:text-[#d6deea]">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => router.push(`/${locale}${item.href}`)}
                  className="mt-5 inline-flex items-center rounded-[4px] bg-[#c9a96e] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a2e45] transition-colors duration-300 hover:bg-[#b79251] group-hover:bg-[#d7bb87]"
                >
                  {item.ctaLabel}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

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
