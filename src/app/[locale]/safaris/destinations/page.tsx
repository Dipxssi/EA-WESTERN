"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const allDestinations = [
  {
    title: 'Maasai Mara Classic',
    description: 'Experience the Big Five in Africa’s most iconic wildlife reserve. Deep into the heart of the Mara for breathtaking landscapes, sweeping savannahs, and the world-famous Great Migration.',
    image: '/images/masai mara.png',
    tag: 'Kenya',
    duration: '3 Days'
  },
  {
    title: 'Amboseli National Park',
    description: 'Home of legendary large tuskers and the most spectacular views of Mount Kilimanjaro. Enjoy stunning sceneries and epic herds traversing the dusty plains.',
    image: '/images/Amboseli.png',
    tag: 'Kenya',
    duration: '2 Days'
  },
  {
    title: 'Serengeti Endless Plains',
    description: 'The definitive East African safari. Witness the sweeping golden grasslands dotted with acacia trees, teeming organically with predators and prey in constant pursuit.',
    image: '/images/serengeti.png',
    tag: 'Tanzania',
    duration: '5 Days'
  },
  {
    title: 'Ngorongoro Crater',
    description: 'Descend into the world’s largest inactive volcanic caldera. A unique micro-climate supporting dense wildlife populations including the endangered black rhino.',
    image: '/images/Crater.png', // Placeholder for another image
    tag: 'Tanzania',
    duration: '2 Days'
  },
  {
    title: 'Uganda Gorilla Trekking',
    description: 'An intimate, soul-stirring encounter with wild mountain gorillas in the misty, dense canopy of the Bwindi Impenetrable Forest.',
    image: '/images/gorilla-trek.jpg',
    tag: 'Uganda',
    duration: '3 Days'
  },
  {
    title: 'Diani Beach Escape',
    description: 'The perfect end to an intense safari. Where impossibly blue Indian Ocean waters meet pristine, powder-white sands. Pure relaxation and coastal luxury.',
    image: '/images/Diana Beach.jpg',
    tag: 'Kenya Beach',
    duration: '4 Days'
  },
];

export default function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-safari bg-[var(--color-cream)] text-[#333] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-terracotta)] selection:text-[var(--color-cream)]">
      <SafariNavigation locale={locale} />
      
      <main className="w-full pt-20">
        
        {/* Intro Header */}
        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pt-[80px] pb-[60px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="h-[1px] w-[60px] bg-[var(--color-terracotta)] mb-6"></div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 font-sans font-medium">
              The Collection
            </div>
            <h1 className="font-playfair text-[48px] md:text-[64px] text-[var(--color-deep-green)] mb-6 leading-tight max-w-[800px]">
              Iconic Destinations
            </h1>
            <p className="font-sans text-[16px] text-[#6a5040] max-w-[600px] leading-[1.7] font-light">
              Explore our handpicked curation of East Africa's most breathtaking landscapes, from the endless golden plains of the Serengeti to the mist-shrouded forests of Uganda.
            </p>
          </motion.div>
        </section>

        {/* Grand Grid */}
        <section className="w-full pb-[120px]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {allDestinations.map((dest, idx) => {
                // Determine stagger offset to simulate a masonry alignment
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: (idx % 2) * 0.15 }}
                    className={`group relative flex flex-col ${isEven ? 'md:-translate-y-12' : 'md:translate-y-12'}`}
                  >
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-[var(--color-deep-green)] rounded-[2px] border border-black/5">
                      <img 
                        src={dest.image} 
                        alt={dest.title} 
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-green)] via-[var(--color-deep-green)]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
                      <div className="absolute inset-0 bg-[var(--color-gold)]/15 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700" />
                      
                      {/* Floating Meta tags */}
                      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                        <div className="bg-white/10 backdrop-blur-md text-white text-[9px] uppercase font-medium tracking-[0.2em] px-[14px] py-[6px] rounded-[1px] font-sans border border-white/20">
                          {dest.tag}
                        </div>
                        <div className="text-[var(--color-gold)] font-playfair italic text-[14px]">
                          {dest.duration}
                        </div>
                      </div>

                      {/* Content block overlay */}
                      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-[30px] group-hover:translate-y-0 transition-transform duration-[0.8s] ease-out z-10">
                        <div className="w-[30px] h-[1px] bg-[var(--color-terracotta)] mb-4 transition-all duration-500 group-hover:w-[60px]"></div>
                        <h2 className="font-playfair text-[32px] md:text-[40px] text-[var(--color-cream)] leading-[1.1] mb-4">
                          {dest.title}
                        </h2>
                        <div className="overflow-hidden">
                          <p className="font-sans text-[14px] text-[var(--color-sand)] leading-[1.7] opacity-0 group-hover:opacity-90 transition-opacity duration-700 delay-100 font-light pr-4 h-0 group-hover:h-auto pb-4">
                            {dest.description}
                          </p>
                        </div>
                        
                        <Link 
                          href={`/${locale}/safaris/contact`}
                          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 hover:text-[var(--color-cream)] mt-2"
                        >
                          Book this Journey <span className="text-[14px]">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="bg-[var(--color-deep-green)] text-[var(--color-cream)] w-full py-[100px] text-center border-t border-[rgba(212,160,23,0.2)]">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="font-playfair text-[36px] md:text-[48px] mb-6">Need expert advice?</h2>
            <p className="font-sans text-[rgba(245,237,216,0.7)] text-[16px] mb-10 font-light max-w-[500px] mx-auto">
              Our travel specialists have trekked these very paths. Let us help you select the ideal destinations for your party's pace and dreams.
            </p>
            <Link
              href={`/${locale}/safaris/contact`}
              className="inline-block bg-[var(--color-deep-green)] border border-[var(--color-gold)] text-[var(--color-gold)] px-[42px] py-[18px] text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] transition-all duration-700"
            >
              Contact a Designer
            </Link>
          </div>
        </section>

      </main>
      
      <SafariFooter />
    </div>
  );
}
