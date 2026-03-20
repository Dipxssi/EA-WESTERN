"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Shield, Heart, Map, Sun } from 'lucide-react';

export default function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  // Parallax for top header
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 300]);
  const opacityBg = useTransform(scrollY, [0, 600], [1, 0.2]);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-safari bg-[var(--color-cream)] text-[#333] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-terracotta)] selection:text-[var(--color-cream)]">
      <SafariNavigation locale={locale} />
      
      <main className="w-full">
        {/* Editorial Parallax Header */}
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-[var(--color-deep-green)] flex flex-col justify-center items-center text-center">
          <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 w-full h-full bg-gradient-to-b from-[var(--color-deep-green)] to-[#0A2E0A]">
            <img src="/images/tour1.jpg" alt="Safari Experience" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-cream)]" />
            <div className="absolute inset-0 bg-[var(--color-gold)]/20 mix-blend-overlay" />
          </motion.div>
          
          <div className="relative z-10 max-w-[800px] mx-auto px-6 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-[1px] w-[30px] bg-[var(--color-gold)]"></div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] font-sans font-medium">Philosophy</div>
                <div className="h-[1px] w-[30px] bg-[var(--color-gold)]"></div>
              </div>
              <h1 className="font-playfair text-[44px] md:text-[64px] text-white leading-[1.1] mb-6">
                The EA Western <em className="text-[var(--color-gold)] font-serif italic pr-2">Experience</em>
              </h1>
              <p className="font-sans text-[16px] text-white/80 max-w-[500px] mx-auto leading-[1.7] font-light">
                We believe a safari is not just a trip, but a profound connection with the earth. We engineer every moment to be absolutely unforgettable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature 1: The Lodges */}
        <section className="py-[120px] px-6 md:px-10 max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full rounded-[2px] overflow-hidden border border-black/5"
            >
              <img src="/images/tanzania.jpg" alt="Luxury Tents" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[var(--color-deep-green)]/20 mix-blend-overlay"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Heart className="text-[var(--color-terracotta)] mb-6" size={40} strokeWidth={1}/>
              <h2 className="font-playfair text-[36px] md:text-[48px] text-[var(--color-deep-green)] leading-tight mb-8">
                Handpicked Luxury <br/> Eco-Lodges & Camps
              </h2>
              <div className="space-y-6 font-sans text-[15px] text-[#6a5040] leading-[1.8] font-light">
                <p>
                  Rest beneath the vast African sky in accommodations that blur the line between rugged wilderness and uncompromising luxury.
                </p>
                <p>
                  We partner exclusively with boutique eco-lodges and deeply secluded tented camps positioned in the heart of the action. Whether it's a permanent lodge perched on the rim of the Ngorongoro Crater, or a mobile camp following the Great Migration, comfort is never compromised.
                </p>
                <ul className="pt-4 space-y-4">
                  <li className="flex items-start">
                    <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-terracotta)] mt-[9px] mr-4 flex-shrink-0"></div>
                    <span>Private verandas with panoramic savannah views</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-terracotta)] mt-[9px] mr-4 flex-shrink-0"></div>
                    <span>Gourmet dining under the stars</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-[6px] h-[6px] rounded-full bg-[var(--color-terracotta)] mt-[9px] mr-4 flex-shrink-0"></div>
                    <span>Sustainable footprint with solar power and eco-initiatives</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature 2: Vehicles & Logistics (Dark section) */}
        <section className="bg-[var(--color-deep-green)] text-[var(--color-cream)] py-[120px] px-6 md:px-10 w-full">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <Shield className="text-[var(--color-gold)] mb-6" size={40} strokeWidth={1}/>
              <h2 className="font-playfair text-[36px] md:text-[48px] text-[var(--color-cream)] leading-tight mb-8">
                Unobstructed Views, <br/> Absolute Comfort
              </h2>
              <div className="space-y-6 font-sans text-[15px] text-[rgba(250,246,238,0.7)] leading-[1.8] font-light">
                <p>
                  A great safari requires great engineering. Our fleet of custom-modified 4x4 Land Cruisers is designed specifically for the rugged East African terrain while prioritizing your comfort and photographic needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-playfair text-[18px] text-[var(--color-gold)] mb-2">Pop-Up Roofs</h4>
                    <p className="text-[13px]">Stand up safely for 360-degree views and incredible photography.</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-playfair text-[18px] text-[var(--color-gold)] mb-2">Window Seats</h4>
                    <p className="text-[13px]">Guaranteed window seats for every single guest in the vehicle.</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-playfair text-[18px] text-[var(--color-gold)] mb-2">Power on Board</h4>
                    <p className="text-[13px]">Keep your cameras and devices charged with built-in power outlets.</p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-playfair text-[18px] text-[var(--color-gold)] mb-2">Refreshments</h4>
                    <p className="text-[13px]">In-vehicle refrigerators stocked with complimentary water and drinks.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square w-full rounded-[2px] overflow-hidden order-1 lg:order-2 border border-white/5"
            >
              {/* Note: I'm using a placeholder here for the vehicle, as I don't have a specific vehicle image in the folder. */}
              <img src="/images/safari-experience.jpg" alt="Safari Vehicle" className="w-full h-full object-cover" 
                   onError={(e) => { e.currentTarget.src = "/images/tour1.jpg" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-deep-green)]/80 to-transparent"></div>
            </motion.div>

          </div>
        </section>

        {/* Feature 3: The Guides */}
        <section className="py-[120px] px-6 md:px-10 max-w-[1200px] mx-auto w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] mx-auto"
          >
            <Compass className="text-[var(--color-terracotta)] mx-auto mb-6" size={40} strokeWidth={1}/>
            <h2 className="font-playfair text-[36px] md:text-[48px] text-[var(--color-deep-green)] leading-tight mb-8">
              The Keepers of the Wild
            </h2>
            <p className="font-sans text-[16px] text-[#6a5040] leading-[1.8] font-light mb-12">
              The difference between a good safari and a life-changing one lies entirely in the guide. Our rangers are local experts, deeply passionate conservationists, and gifted storytellers who read the bush like a book.
            </p>
          </motion.div>

          {/* Guide Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto border-t border-b border-[rgba(0,0,0,0.05)] py-12">
            {[
              { num: '10+', text: 'Years Avg. Experience' },
              { num: 'KPSGA', text: 'Certified Professionals' },
              { num: '4', text: 'Fluently Spoken \nLanguages' },
              { num: '100%', text: 'Local East African Guides' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-[50px] flex items-end justify-center mb-3">
                  <div className="font-playfair text-[36px] md:text-[40px] text-[var(--color-gold)] leading-none -mb-1">{stat.num}</div>
                </div>
                <div className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-green)] font-medium leading-[1.6] pt-2 border-t border-[rgba(0,0,0,0.05)] w-[80%] whitespace-pre-line">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-[#F9F9F8] border-t border-[rgba(0,0,0,0.05)] py-[80px] text-center w-full">
          <Link
            href={`/${locale}/safaris/contact`}
            className="inline-block bg-[var(--color-deep-green)] border border-[var(--color-gold)] text-[var(--color-gold)] px-[42px] py-[18px] text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] transition-all duration-700"
          >
            Start Crafting Your Journey
          </Link>
        </section>

      </main>
      
      <SafariFooter />
    </div>
  );
}
