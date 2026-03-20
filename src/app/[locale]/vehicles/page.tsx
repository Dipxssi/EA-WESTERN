"use client";

import { VehiclesNavigation } from '@/components/VehiclesNavigation';
import { VehiclesFooter } from '@/components/VehiclesFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Headphones, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';

export default function VehiclesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7
      }
    })
  };

  return (
    <div className="theme-rentals bg-[var(--color-slate)] text-[var(--color-gray)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-red)] selection:text-white">
      <VehiclesNavigation locale={locale} />
      
      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full h-[90vh] min-h-[650px] overflow-hidden bg-[var(--color-black)] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-black)] via-[var(--color-black)]/80 to-[var(--color-black)]/30 z-10" />
            <img 
              src="/images/caar.png" 
              alt="Premium Car Hire" 
              className="w-full h-full object-cover object-center opacity-60" 
              onError={(e) => { e.currentTarget.src = "/images/luxury-car-background.jpg" }}
            />
          </div>
          
          <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-20">
            <div className="max-w-[650px]">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-[var(--color-red)]/10 border border-[var(--color-red)]/30 rounded-full px-4 py-1.5 mb-6"
              >
                <Gauge size={14} className="text-[var(--color-red)]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-white font-bold">
                  Premium Fleet
                </span>
              </motion.div>
              
              <motion.h1 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[48px] md:text-[64px] lg:text-[76px] text-white leading-[1.05] mb-6 font-extrabold tracking-tight uppercase"
              >
                Drive <br />
                <span className="text-[var(--color-red)]">Without Limits.</span>
              </motion.h1>
              
              <motion.p 
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[16px] md:text-[18px] text-white/70 leading-[1.7] mb-10 max-w-[500px]"
              >
                Impeccably maintained vehicles for business, high-end travel, and self-drive adventures. Fully insured, fully compliant, zero compromises.
              </motion.p>
              
              <motion.div 
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={`/${locale}/vehicles/fleet`}
                  className="bg-[var(--color-red)] text-white px-[32px] py-[18px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-[var(--color-black)] transition-colors rounded-[2px] shadow-lg shadow-[var(--color-red)]/20 text-center flex justify-center items-center gap-2 group"
                >
                  View The Fleet <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${locale}/vehicles/services`}
                  className="bg-transparent border border-white/20 text-white px-[32px] py-[18px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white/10 transition-colors rounded-[2px] text-center"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ADVANTAGE STRIP */}
        <section className="bg-white border-b border-black/5 relative z-30">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5">
              {[
                { icon: ShieldCheck, title: 'NTSA Inspected', desc: '100% compliant and rigorously maintained.' },
                { icon: Target, title: 'Transparent Pricing', desc: 'No hidden fees or surprise fuel charges.' },
                { icon: Headphones, title: '24/7 Road Rescue', desc: 'Immediate dispatch for any on-road issue.' },
              ].map((adv, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-black)] flex items-center justify-center text-[var(--color-red)] mb-4">
                    <adv.icon size={20} />
                  </div>
                  <h4 className="text-[14px] uppercase tracking-[0.1em] font-bold text-[var(--color-black)] mb-2">{adv.title}</h4>
                  <p className="text-[13px] text-[var(--color-gray)] leading-[1.6] max-w-[200px]">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLEET PREVIEW */}
        <section className="py-[120px] bg-[var(--color-slate)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-[var(--color-red)] mb-3">The Garage</div>
                <h2 className="text-[36px] md:text-[48px] text-[var(--color-black)] font-extrabold leading-tight uppercase">
                  Engineered for <br/> Your Agenda
                </h2>
              </div>
              <Link 
                href={`/${locale}/vehicles/fleet`}
                className="inline-flex items-center text-[13px] uppercase tracking-[0.1em] font-bold text-[var(--color-black)] hover:text-[var(--color-red)] transition-colors group"
              >
                Explore Full Directory <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Executive Sedans', desc: 'Premium comfort for airport transfers and corporate movements.', img: '/images/carCard2.png' },
                { title: 'Safari 4x4s', desc: 'Rugged, kitted Land Cruisers for remote, off-road expeditions.', img: '/images/carCard1.png' },
                { title: 'Corporate Vans', desc: 'Spacious high-roof shuttles for group and executive transport.', img: '/images/carCard3.png' },
              ].map((fleet, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group bg-white rounded-[4px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                 >
                   <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
                     <img src={fleet.img} alt={fleet.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <Link href={`/${locale}/vehicles/fleet`} className="text-white text-[12px] uppercase tracking-[0.1em] font-bold flex items-center hover:text-[var(--color-red)]">
                         View Details <ChevronRight size={16} className="ml-1" />
                       </Link>
                     </div>
                   </div>
                   <div className="p-8">
                     <h3 className="text-[20px] font-bold text-[var(--color-black)] mb-3 uppercase tracking-wide">{fleet.title}</h3>
                     <p className="text-[14px] text-[var(--color-gray)] leading-[1.6]">
                       {fleet.desc}
                     </p>
                   </div>
                 </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US (Split Section) */}
        <section className="py-[120px] bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-square relative rounded-[4px] overflow-hidden bg-[var(--color-black)] shadow-2xl">
                  <img src="/images/car3.png" alt="Premium Service" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-black)]/80 to-[var(--color-red)]/20 mix-blend-multiply" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-[var(--color-red)] mb-3">Uncompromising Standard</div>
                <h2 className="text-[36px] md:text-[44px] text-[var(--color-black)] font-extrabold mb-6 leading-tight uppercase">
                  Not Just A Rental. <br/> A Partnership.
                </h2>
                <p className="text-[16px] text-[var(--color-gray)] leading-[1.7] mb-8">
                  We don't just hand you keys. We provide a complete mobility solution backed by strict mechanical protocols, integrated insurance, and vetted professional drivers.
                </p>

                <ul className="space-y-4">
                   {[
                     'Fully Insured Vehicles Included',
                     '50-Point Mechanical Inspection Pre-Dispatch',
                     'Professional, Vetted Chauffeurs Available',
                     'Custom Corporate Long-Term Leasing'
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start">
                       <CheckCircle2 color="var(--color-red)" className="mr-3 flex-shrink-0 mt-[2px]" size={20} />
                       <span className="text-[15px] font-bold text-[var(--color-black)]">{item}</span>
                     </li>
                   ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[100px] bg-[var(--color-black)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute w-full h-[1px] bg-[var(--color-red)] top-1/4 -skew-y-12"></div>
             <div className="absolute w-full h-[1px] bg-[var(--color-red)] top-2/4 -skew-y-12"></div>
             <div className="absolute w-full h-[1px] bg-[var(--color-red)] top-3/4 -skew-y-12"></div>
          </div>

          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-[36px] md:text-[48px] text-white font-extrabold mb-6 uppercase tracking-wide">Ready to Hit the Road?</h2>
            <p className="text-[16px] text-white/50 mb-10 max-w-[600px] mx-auto">
              Contact our bookings desk directly to secure your vehicle. Flexible terms, immediate dispatch.
            </p>
            <div className="flex justify-center flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/vehicles/contact`}
                className="bg-[var(--color-red)] text-white px-[40px] py-[18px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-[var(--color-black)] transition-colors rounded-[2px] shadow-xl"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </section>

      </main>

      <VehiclesFooter />
    </div>
  );
}
