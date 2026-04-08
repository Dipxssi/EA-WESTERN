"use client";

import { VehiclesNavigation } from '@/components/VehiclesNavigation';
import { VehiclesFooter } from '@/components/VehiclesFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Star, Map, ShieldCheck } from 'lucide-react';

export default function VehiclesServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-automotive bg-white text-neutral-600 min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-red)] selection:text-white">
      <VehiclesNavigation locale={locale} />
      
      <main className="w-full pb-[80px]">
        {/* Header */}
        <section className="bg-black pt-[160px] pb-[80px] md:pt-[200px] md:pb-[120px] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent z-10" />
           <img src="/images/nairobi-city.jpg" alt="Services Header" className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity" />
           <div className="relative z-20 max-w-[800px] mx-auto px-6 text-center">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/80 mb-4">Mobility Solutions</div>
               <h1 className="text-[40px] md:text-[56px] text-white font-extrabold mb-6 leading-tight uppercase">
                 More Than Just <br/> A Rental Company.
               </h1>
               <p className="text-[16px] text-white/60 mx-auto leading-[1.7]">
                 Comprehensive transport and logistics tailored for corporate operations, diplomatic missions, and individual VIPs.
               </p>
             </motion.div>
           </div>
        </section>

        {/* 3 Main Services Block */}
        <section className="py-[100px] bg-white border-b border-black/5">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                { icon: Star, title: 'Chauffeured Expertise', desc: 'Professional drivers trained in safety, protocol, and regional navigation.' },
                { icon: Clock, title: 'Long-Term Corporate Leasing', desc: 'Reliable fleet leasing without the capital expenditure. Fixed monthly rates including full maintenance and insurance.' },
                { icon: Map, title: 'Self-Drive', desc: 'Self-drive options supported with full documentation and roadside support.' }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="bg-neutral-100 p-10 flex flex-col items-center text-center rounded-[4px] border border-black/5 hover:border-black/20 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center border-2 border-black mb-8 shadow-sm text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-[20px] font-extrabold text-black mb-4 uppercase">{service.title}</h3>
                  <p className="text-[14px] text-neutral-600 leading-[1.7] flex-grow">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Insurance Highlight */}
        <section className="py-[100px] bg-black text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-tr from-black to-white/5 z-0" />
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <ShieldCheck size={48} className="text-white mb-6" />
                <h2 className="text-[32px] md:text-[40px] font-extrabold mb-6 uppercase leading-tight">Integrated Insurance</h2>
                <p className="text-[16px] text-white/60 leading-[1.8] mb-8">
                  Insurance is managed in-house, ensuring clear coverage, faster claims handling, and no hidden liabilities.
                </p>
                <Link
                  href={`/${locale}/insurance`}
                  className="inline-flex items-center text-[13px] uppercase tracking-[0.1em] font-bold text-white hover:text-white/80 transition-colors group"
                >
                  View Corporate Insurance Solutions <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[4px] backdrop-blur-md">
                <h4 className="text-[16px] font-bold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Standard Inclusions</h4>
                <ul className="space-y-6">
                  {['Comprehensive Collision Coverage', '24/7 Roadside Rescue Units', 'Third-Party Liability Included', 'Zero Hidden Deductible Options'].map((item, idx) => (
                    <li key={idx} className="flex items-start text-white/80">
                      <span className="w-2 h-2 rounded-full bg-white mt-2 mr-4 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </section>

      </main>

      <VehiclesFooter />
    </div>
  );
}
