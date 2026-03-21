"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { MapPin, Calendar, Users, Globe, ArrowRight, Compass, Shield, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const popularDestinations = [
  {
    title: 'Maasai Mara Classic Safari',
    description: 'Experience the Big Five in Africa’s most iconic wildlife reserve. Deep into the heart of the Mara for breathtaking landscapes.',
    image: '/images/maasai.jpg',
    tag: '3 Days'
  },
  {
    title: 'Amboseli National Park',
    description: 'Home of elephants and Mt. Kilimanjaro views. Enjoy stunning sceneries and large elephant herds.',
    image: '/images/Amboseli.png',
    tag: '2 Days'
  },
  {
    title: 'Diani Beach Escape',
    description: 'Where blue waters meet white sands. Relax and unwind on one of the top-ranked beaches in Africa.',
    image: '/images/Diana Beach.jpg',
    tag: '4 Days'
  },
  {
    title: 'Nairobi City Experience',
    description: 'A perfect blend of wildlife, culture, and urban charm in the heart of Kenya’s capital.',
    image: '/images/nairobi-city.jpg',
    tag: '1 Day'
  },
  {
    title: 'Serengeti & Ngorongoro Combo',
    description: 'Two legendary destinations. One epic adventure across the endless Serengeti plains.',
    image: '/images/Crater.png',
    tag: '5 Days'
  },
  {
    title: 'Uganda Gorilla Trekking',
    description: 'A rare encounter with mountain gorillas. A bucket-list experience through lush forests.',
    image: '/images/gorilla-trek.jpg',
    tag: '3 Days'
  },
];

export default function SafarisPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  
  // Parallax Setup
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number]
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="theme-safari bg-[var(--color-cream)] text-[#333] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-terracotta)] selection:text-[var(--color-cream)]">
      <SafariNavigation locale={locale} />
      
      <main className="w-full">
        {/* PARALLAX HERO SECTION */}
        <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-[var(--color-deep-green)] flex flex-col justify-end">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }} 
            className="absolute inset-0 w-full h-full"
          >
            {/* Base Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-deep-green)] to-[#0A2E0A]" />
            
            {/* Main Image */}
            <img src="/images/safari-pg.jpg" alt="Safari Landscape" className="w-full h-full object-cover opacity-60" />
            
            {/* Elegant vignette overlay and warm wildlife tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E0A] via-transparent to-[#0A2E0A] opacity-90" />
            <div className="absolute inset-0 bg-[var(--color-gold)]/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-[140px]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="h-[1px] w-[40px] bg-[var(--color-gold)]"></div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] font-sans font-medium">
                The East Africa Safaris Collection
              </div>
            </motion.div>
            
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-playfair text-[48px] md:text-[64px] lg:text-[76px] text-[var(--color-cream)] leading-[1.05] max-w-[900px] mb-8 font-light tracking-tight"
            >
              Journey into the heart of <br className="hidden md:block"/>
              <em className="text-[var(--color-gold)] font-serif italic pr-4">untamed</em> Africa
            </motion.h1>
            
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-sans text-[16px] md:text-[18px] text-[rgba(250,246,238,0.85)] max-w-[480px] leading-[1.6] mb-10 font-light"
            >
              Experience the absolute majesty of the savannah, where luxury meets wilderness. Let every sunrise bring a new adventure.
            </motion.p>
            
            <motion.div 
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap gap-5"
            >
              <Link
                href={`/${locale}/safaris/contact`}
                className="group relative overflow-hidden bg-[var(--color-deep-green)] border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] px-[36px] py-[16px] text-[10px] uppercase tracking-[0.2em] transition-all duration-700 whitespace-nowrap text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Planning <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                href={`/${locale}/safaris/destinations`}
                className="group relative overflow-hidden bg-transparent border border-[var(--color-cream)]/20 text-[var(--color-cream)] px-[36px] py-[16px] text-[10px] uppercase tracking-[0.2em] hover:bg-white/5 transition-colors duration-700 whitespace-nowrap text-center backdrop-blur-sm"
              >
                View Destinations
              </Link>
              <Link
                href={`/${locale}/safaris/packages`}
                className="group relative overflow-hidden bg-transparent border border-[var(--color-gold)]/40 text-[var(--color-gold)] px-[36px] py-[16px] text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--color-gold)]/10 transition-colors duration-700 whitespace-nowrap text-center backdrop-blur-sm"
              >
                Packages &amp; things to do
              </Link>
            </motion.div>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
          >
            <div className="w-[1px] h-[60px] bg-gradient-to-b from-transparent via-[var(--color-gold)] to-[var(--color-gold)] relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 60] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-[30px] bg-white shadow-[0_0_10px_white]"
              ></motion.div>
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--color-gold)] font-sans">Scroll</span>
          </motion.div>
        </section>

        {/* FLOATING TRUST / STATS BAR */}
        <section className="relative z-20 w-full px-6 md:px-10 -mt-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full bg-[rgba(26,61,43,0.7)] backdrop-blur-xl border border-[rgba(212,160,23,0.15)] shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-[8px] overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(255,255,255,0.08)]">
                {[
                  { label: 'Wildlife', value: 'Big 5 & Beyond', icon: Compass },
                  { label: 'Best Season', value: 'Jun–Oct', icon: Calendar },
                  { label: 'Languages', value: 'Swahili · English', icon: Users },
                  { label: 'Region', value: 'Tanzania · Uganda', icon: Globe },
                ].map((badge, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeUp}
                    custom={idx}
                    className="flex items-center justify-start p-8 lg:px-10 group"
                  >
                    <div className="w-[46px] h-[46px] rounded-full bg-[rgba(212,160,23,0.1)] border border-[rgba(212,160,23,0.2)] flex items-center justify-center mr-5 flex-shrink-0 text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-deep-green)] transition-colors duration-500">
                      <badge.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[var(--color-gold)] text-[10px] uppercase tracking-[0.1em] font-sans mb-1 opacity-80">{badge.label}</div>
                      <div className="text-[var(--color-sand)] text-[14px] font-sans font-light tracking-wide">{badge.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* DESTINATIONS: STAGGERED MASONRY-STYLE GRID */}
        <section id="destinations" className="bg-[var(--color-cream)] w-full py-[120px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center mb-[80px]"
            >
              <div className="h-[1px] w-[60px] bg-[var(--color-terracotta)] mb-6"></div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 font-sans font-medium">
                Curated Journeys
              </div>
              <h2 className="font-playfair text-[40px] md:text-[52px] text-[var(--color-deep-green)] mb-6 leading-tight max-w-[600px]">
                Iconic Destinations Intelligently Designed
              </h2>
              <p className="font-sans text-[15px] text-[#6a5040] max-w-[500px] leading-[1.7] font-light">
                Explore handpicked safari routes combining the absolute best of luxury, raw wilderness, and cultural immersion.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {popularDestinations.map((dest, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                  className="group relative flex flex-col cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/5] rounded-[2px] overflow-hidden bg-[var(--color-deep-green)] border border-black/5">
                    <img 
                      src={dest.image} 
                      alt={dest.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                    
                    {/* Grand Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-green)] via-[var(--color-deep-green)]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-[var(--color-gold)]/10 mix-blend-overlay" />
                    
                    {/* Top Tag */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/10 backdrop-blur-md text-white text-[9px] uppercase font-medium tracking-[0.2em] px-[14px] py-[6px] rounded-[1px] font-sans border border-white/20">
                        {dest.tag}
                      </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-[20px] group-hover:translate-y-0 transition-transform duration-700">
                      <h3 className="font-playfair text-[24px] text-[var(--color-cream)] leading-snug mb-3">
                        {dest.title}
                      </h3>
                      <div className="h-0 overflow-hidden group-hover:h-[80px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 mt-2">
                        <p className="font-sans text-[13px] text-[var(--color-sand)] leading-[1.6] opacity-80 line-clamp-3 font-light border-t border-[rgba(255,255,255,0.15)] pt-4">
                          {dest.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 flex justify-center">
              <Link
                href={`/${locale}/safaris/destinations`}
                className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-medium text-[var(--color-deep-green)] transition-colors duration-700 hover:opacity-50"
              >
                <span>Discover All Destinations</span>
                <span className="w-[30px] h-[1px] bg-[var(--color-deep-green)] transition-all duration-700 group-hover:w-[40px]"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* EDITORIAL SPLIT-SCREEN: EXPERIENCES */}
        <section id="experiences" className="bg-[var(--color-deep-green)] text-[var(--color-sand)] w-full py-[120px] lg:py-[160px] relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-[50%] h-full opacity-5 pointer-events-none mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform scale-[2] translate-x-1/4">
              <path fill="#ffffff" d="M60.6,-59.8C76.9,-43.3,87.1,-19.9,85.1,2.3C83.2,24.5,69.1,45.5,50.7,59.3C32.3,73.1,9.6,79.5,-12.3,76.5C-34.1,73.5,-55,61,-67.2,42.5C-79.5,23.9,-83,-0.8,-75.4,-21.8C-67.9,-42.8,-49.3,-60.2,-30.1,-68.8C-10.9,-77.4,8.8,-77.2,27.1,-68.4C45.4,-59.5,62.3,-50.2,60.6,-59.8Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Left Column: Image & Quote */}
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative aspect-[3/4] w-full max-w-[500px] rounded-[4px] overflow-hidden ml-auto lg:ml-0">
                  <img src="/images/safari-experience.jpg" alt="Safari Experience" className="w-full h-full object-cover" 
                       onError={(e) => { e.currentTarget.src = "/images/tour1.jpg" }} // fallback if safari-experience.jpg doesn't exist
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-10 -left-6 md:-left-12 bg-white text-[var(--color-deep-green)] p-8 md:p-12 shadow-[0_25px_50px_rgba(0,0,0,0.3)] max-w-[340px] md:max-w-[400px] rounded-[4px]"
                >
                  <Compass className="text-[var(--color-terracotta)] mb-6 opacity-30" size={40} strokeWidth={1}/>
                  <p className="font-playfair italic text-[22px] md:text-[26px] leading-[1.3] mb-6">
                    "An unforgettable journey into the heart of Africa, where natural beauty <span className="text-[var(--color-terracotta)] not-italic">speaks loudest</span>."
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)]">
                    The EA Western Promise
                  </p>
                </motion.div>
              </motion.div>
              
              {/* Right Column: Features */}
              <div className="lg:col-span-6 mt-16 lg:mt-0 lg:pl-10">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 font-sans font-medium">Why Choose Us</div>
                  <h2 className="font-playfair text-[40px] md:text-[48px] text-[var(--color-cream)] leading-tight mb-12">
                    Crafting The Art of <br/> Unrivaled Exploration
                  </h2>
                </motion.div>

                <div className="space-y-12">
                  {[
                    { icon: Shield, label: 'Expert Local Guides', desc: 'Our team comprises elite rangers and naturalists with decades of experience decoding the wilderness.' },
                    { icon: Heart, label: 'Handpicked Luxury Lodges', desc: 'Rest beneath the stars in premium, deeply secluded tented camps and boutique eco-lodges.' },
                    { icon: Compass, label: 'Custom-Built Safari Fleets', desc: 'Navigate the terrain effortlessly with specially modified rugged 4x4s, offering absolute comfort and panoramic views.' },
                  ].map((exp, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className="flex items-start group"
                    >
                      <div className="w-[48px] h-[48px] rounded-full border border-[rgba(212,160,23,0.3)] bg-[rgba(212,160,23,0.05)] text-[var(--color-gold)] mt-1 mr-6 flex-shrink-0 flex items-center justify-center transition-colors duration-500 group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-deep-green)]">
                        <exp.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-playfair text-[22px] text-[var(--color-cream)] mb-2">{exp.label}</div>
                        <div className="font-sans text-[14px] text-[rgba(245,237,216,0.65)] leading-[1.7] font-light max-w-[400px]">{exp.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA for experiences */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-12"
                >
                  <Link
                    href={`/${locale}/safaris/experiences`}
                    className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] font-medium text-[var(--color-gold)] hover:text-white transition-colors duration-300 group"
                  >
                    <span>Read The Full Philosophy</span>
                    <span className="w-[30px] h-[1px] bg-[var(--color-gold)] group-hover:bg-white group-hover:w-[40px] transition-all duration-300"></span>
                  </Link>
                </motion.div>

              </div>
              
            </div>
          </div>
        </section>

        {/* ELEGANT BOOKING STEPS */}
        <section id="booking" className="bg-[var(--color-cream)] w-full py-[120px] border-b border-[rgba(0,0,0,0.05)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[12px] p-10 md:p-16 lg:p-24 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.02)]"
            >
              <div className="text-center mb-16">
                <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-4 font-sans font-medium">Your Journey Setup</div>
                <h2 className="font-playfair text-[36px] md:text-[48px] text-[var(--color-deep-green)] max-w-[600px] mx-auto leading-tight">
                  Seamless Booking in Three Simple Steps
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                {/* Connecting Line for desktop */}
                <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30"></div>
                
                {[
                  { num: '01', title: 'Consult & Discover', desc: 'Connect with a dedicated travel designer to share your vision, pace, and dream sightings.' },
                  { num: '02', title: 'Design & Refine', desc: 'Receive a beautifully tailored itinerary. We meticulously iterate until it is absolutely perfect.' },
                  { num: '03', title: 'Confirm & Depart', desc: 'Pack your bags. From visa assistance to VIP airport pickup, we choreograph every detail.' }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className="relative flex flex-col items-center text-center px-4"
                  >
                    <div className="w-[80px] h-[80px] rounded-full bg-[var(--color-cream)] flex items-center justify-center border border-[var(--color-sand)] mb-8 shadow-sm text-[var(--color-deep-green)] font-playfair text-[32px] font-medium relative z-10 transition-transform duration-500 hover:scale-110 hover:bg-[var(--color-deep-green)] hover:text-[var(--color-gold)]">
                      {step.num}
                    </div>
                    <h3 className="font-playfair text-[22px] text-[var(--color-deep-green)] mb-4">{step.title}</h3>
                    <p className="font-sans text-[14px] text-[#6a5040] leading-[1.7] opacity-90 font-light">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 text-center"
              >
                <Link
                  href={`/${locale}/safaris/contact`}
                  className="inline-block bg-[var(--color-deep-green)] border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] px-[42px] py-[18px] text-[10px] uppercase tracking-[0.2em] transition-colors duration-700"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      
      <SafariFooter />
    </div>
  );
}
