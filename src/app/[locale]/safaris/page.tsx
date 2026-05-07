"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { Calendar, Users, Globe, ArrowRight, Compass, Shield, Heart, Leaf } from 'lucide-react';
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

const destinationSlugs = [
  'maasai-mara',
  'amboseli',
  'diani',
  'nairobi',
  'serengeti',
  'gorilla-trekking',
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
    <div className="theme-safari bg-[#f7f5f0] text-[#4a5568] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[#c9a96e] selection:text-[#1a2e45]">
      <SafariNavigation locale={locale} />
      
      <main className="w-full">
        {/* PARALLAX HERO SECTION */}
        <section className="relative w-full min-h-[72svh] sm:min-h-[78svh] md:min-h-[820px] lg:min-h-[900px] overflow-hidden bg-[#f7f5f0] flex flex-col justify-start pt-[120px] sm:pt-[140px] md:pt-[170px]">
          <motion.div 
            style={{ y: yHero, opacity: opacityHero }} 
            className="absolute inset-0 w-full h-full"
          >
            {/* Main Image */}
            <img src="/images/safari-pg.jpg" alt="Safari Landscape" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-[110px] md:pb-[130px]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="h-[1px] w-[40px] bg-[var(--color-gold)]"></div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] font-sans font-medium">
                Safari and Tours
              </div>
            </motion.div>
            
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-playfair text-[32px] sm:text-[40px] md:text-[64px] lg:text-[76px] text-[#f7f5f0] leading-[1.05] max-w-[900px] mb-8 font-light tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
            >
              Designed safari journeys{' '}
              <span className="sm:whitespace-nowrap">
                across{' '}
                <em className="text-[var(--color-gold)] font-serif italic pr-0 sm:pr-4">East Africa</em>
              </span>
            </motion.h1>
            
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-white/90 max-w-2xl leading-[1.65] mb-3 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            >
              Expertly designed safari experiences across Kenya, Tanzania, and Uganda—balancing wilderness,
              comfort, and seamless execution.
            </motion.p>
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-white/90 max-w-2xl leading-[1.65] mb-10 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            >
              Ideal for first-time visitors, returning travelers, and corporate retreats.
            </motion.p>
            
            <motion.div 
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap gap-5"
            >
              <Link
                href={`/${locale}/safaris/contact`}
                className="group relative overflow-hidden bg-[#c9a96e] border border-[#c9a96e] text-[#1e3a5f] hover:bg-[#a8823d] hover:text-[#1a2e45] px-6 sm:px-9 py-3.5 sm:py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-700 text-center sm:whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Planning <ArrowRight size={14} />
                </span>
              </Link>
              <Link
                href={`/${locale}/safaris/destinations`}
                className="group relative overflow-hidden bg-transparent border border-white/50 text-white px-6 sm:px-9 py-3.5 sm:py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-white/15 transition-colors duration-700 text-center sm:whitespace-nowrap backdrop-blur-sm"
              >
                View Destinations
              </Link>
            </motion.div>
          </div>
          
          <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 w-full mt-6 pb-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full bg-white/90 backdrop-blur-xl border border-[#ede9e1] shadow-[0_30px_60px_rgba(30,58,95,0.08)] rounded-[8px] overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#ede9e1]">
                {[
                  { label: 'Wildlife', value: 'Big 5 & Beyond', icon: Compass },
                  { label: 'Best Season', value: 'Jun–Oct', icon: Calendar },
                  { label: 'Languages', value: 'Swahili · English', icon: Users },
                  { label: 'Region', value: 'Kenya · Tanzania · Uganda', icon: Globe },
                ].map((badge, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={fadeUp}
                    custom={idx}
                    className="flex items-center justify-start p-8 lg:px-10 group"
                  >
                    <div className="w-[46px] h-[46px] rounded-full bg-[#f7f5f0] border border-[#dcd8cf] flex items-center justify-center mr-5 flex-shrink-0 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#1e3a5f] transition-colors duration-500">
                      <badge.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[#4a7fa5] text-[10px] uppercase tracking-[0.1em] font-sans mb-1 opacity-90">{badge.label}</div>
                      <div
                        className={`text-[#4a5568] text-[13px] sm:text-[14px] font-sans font-light tracking-wide ${
                          badge.label === 'Region' ? 'sm:whitespace-nowrap' : ''
                        }`}
                      >
                        {badge.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                className="absolute top-0 left-0 w-full h-[30px] bg-[#c9a96e] shadow-[0_0_10px_#c9a96e]"
              ></motion.div>
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--color-gold)] font-sans">Scroll</span>
          </motion.div>
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
              <div className="h-[1px] w-[60px] bg-[#c9a96e] mb-6"></div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#4a7fa5] mb-4 font-sans font-medium">
                Curated Journeys
              </div>
              <h2 className="font-playfair text-[40px] md:text-[52px] text-[#1a2e45] mb-6 leading-tight max-w-[600px]">
                Iconic Destinations, Thoughtfully Designed
              </h2>
              <p className="font-sans text-[15px] text-[#4a5568] max-w-[500px] leading-[1.7] font-light">
                Explore a curated collection of safari routes that combine wildlife, landscapes, and cultural experiences-carefully structured for comfort, timing, and flow.
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
                  <Link href={`/${locale}/safaris/destinations/${destinationSlugs[idx]}`} className="relative w-full aspect-[4/5] rounded-[2px] overflow-hidden bg-[#1e3a5f] border border-black/5 block">
                    <img 
                      src={dest.image} 
                      alt={dest.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                    
                    {/* Grand Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-[#1e3a5f]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-[var(--color-gold)]/10 mix-blend-overlay" />
                    
                    {/* Top Tag */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/10 backdrop-blur-md text-white text-[9px] uppercase font-medium tracking-[0.2em] px-[14px] py-[6px] rounded-[1px] font-sans border border-white/20">
                        {dest.tag}
                      </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-[20px] group-hover:translate-y-0 transition-transform duration-700">
                      <h3 className="font-playfair text-[24px] text-[#f7f5f0] leading-snug mb-3">
                        {dest.title}
                      </h3>
                      <div className="h-0 overflow-hidden group-hover:h-[80px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 mt-2">
                        <p className="font-sans text-[13px] text-[#e8edf2] leading-[1.6] opacity-80 line-clamp-3 font-light border-t border-[rgba(255,255,255,0.15)] pt-4">
                          {dest.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 flex justify-center">
              <Link
                href={`/${locale}/safaris/destinations`}
                className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-medium text-[#1e3a5f] transition-colors duration-700 hover:opacity-50"
              >
                <span>Discover All Destinations</span>
                <span className="w-[30px] h-[1px] bg-[#1e3a5f] transition-all duration-700 group-hover:w-[40px]"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* EDITORIAL SPLIT-SCREEN: EXPERIENCES */}
        <section id="experiences" className="bg-white text-[#4a5568] w-full py-[120px] lg:py-[160px] relative overflow-hidden border-t border-[#ede9e1] border-b border-[#ede9e1]">
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
                  className="absolute -bottom-10 -left-6 md:-left-12 bg-white text-[#1a2e45] p-8 md:p-12 shadow-[0_25px_50px_rgba(30,58,95,0.15)] max-w-[340px] md:max-w-[400px] rounded-[4px]"
                >
                  <Compass className="text-[#4a7fa5] mb-6 opacity-30" size={40} strokeWidth={1}/>
                  <p className="font-playfair italic text-[22px] md:text-[26px] leading-[1.3] mb-6">
                    "An unforgettable journey into the heart of Africa, where natural beauty <span className="text-[#4a7fa5] not-italic">speaks loudest</span>."
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-gold)]">
                    The eawestern promise
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
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#4a7fa5] mb-4 font-sans font-medium">Why Choose Us</div>
                  <h2 className="font-playfair text-[40px] md:text-[48px] text-[#1a2e45] leading-tight mb-12">
                    Designed for Comfort. Delivered with Responsibility.
                  </h2>
                </motion.div>

                <div className="space-y-12">
                  {[
                    { icon: Shield, label: 'Expert Local Guides', desc: 'Experienced, certified guides who understand wildlife behavior, terrain, and timing-ensuring every game drive is meaningful and respectful to the environment.' },
                    { icon: Heart, label: 'Handpicked Lodges & Camps', desc: 'We partner with lodges that follow responsible tourism practices-supporting conservation efforts and local communities.' },
                    { icon: Compass, label: 'Custom Safari Vehicles', desc: 'Fully equipped 4x4 vehicles designed for safety, comfort, and minimal environmental impact across sensitive ecosystems.' },
                    { icon: Leaf, label: 'Responsible Travel Commitment', desc: 'We operate with a strong respect for wildlife, ecosystems, and local communities-ensuring every journey contributes positively to the regions we explore.' },
                  ].map((exp, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className="flex items-start group"
                    >
                      <div className="w-[48px] h-[48px] rounded-full border border-[#dcd8cf] bg-[#f7f5f0] text-[#c9a96e] mt-1 mr-6 flex-shrink-0 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#c9a96e] group-hover:text-[#1e3a5f]">
                        <exp.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="font-playfair text-[22px] text-[#1a2e45] mb-2">{exp.label}</div>
                        <div className="font-sans text-[14px] text-[#4a5568] leading-[1.7] font-light max-w-[400px]">{exp.desc}</div>
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
                    href={`/${locale}/safaris/philosophy`}
                    className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] font-medium text-[#c9a96e] hover:text-[#a8823d] transition-colors duration-300 group"
                  >
                    <span>Read Our Safari Philosophy</span>
                    <span className="w-[30px] h-[1px] bg-[#c9a96e] group-hover:bg-[#a8823d] group-hover:w-[40px] transition-all duration-300"></span>
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
                <div className="text-[11px] uppercase tracking-[0.2em] text-[#4a7fa5] mb-4 font-sans font-medium">Your Journey Setup</div>
                <h2 className="font-playfair text-[36px] md:text-[48px] text-[#1a2e45] max-w-[600px] mx-auto leading-tight">
                  Seamless Planning in Three Steps
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                {/* Connecting Line for desktop */}
                <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30"></div>
                
                {[
                  { num: '01', title: 'Consult & Discover', desc: 'Speak with a travel specialist to define your preferences, schedule, and expectations.' },
                  { num: '02', title: 'Design & Refine', desc: 'We create a tailored itinerary and adjust it until it fits your travel style perfectly.' },
                  { num: '03', title: 'Confirm & Travel', desc: 'Once confirmed, we handle all logistics-from arrival to departure-so you can focus on the experience.' }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className="relative flex flex-col items-center text-center px-4"
                  >
                    <div className="w-[80px] h-[80px] rounded-full bg-[#f7f5f0] flex items-center justify-center border border-[#dcd8cf] mb-8 shadow-sm text-[#1a2e45] font-playfair text-[32px] font-medium relative z-10 transition-transform duration-500 hover:scale-110 hover:bg-[#1e3a5f] hover:text-[#c9a96e]">
                      {step.num}
                    </div>
                    <h3 className="font-playfair text-[22px] text-[#1a2e45] mb-4">{step.title}</h3>
                    <p className="font-sans text-[14px] text-[#4a5568] leading-[1.7] opacity-90 font-light">
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
                  className="inline-block bg-[#c9a96e] border border-[#c9a96e] text-[#1e3a5f] hover:bg-[#a8823d] hover:text-[#1a2e45] px-[42px] py-[18px] text-[10px] uppercase tracking-[0.2em] transition-colors duration-700"
                >
                  Request a Free Consultation
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
