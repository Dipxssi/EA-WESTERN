"use client";

import { VehiclesNavigation } from '@/components/VehiclesNavigation';
import { VehiclesFooter } from '@/components/VehiclesFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Cog, Gauge, Car, Truck } from 'lucide-react';

const fleetData = [
  {
    category: 'Executive Sedans',
    description: 'Arrive at your meetings in absolute comfort. Our executive sedans offer a quiet, luxurious ride with professional, vetted chauffeurs.',
    icon: Car,
    specs: ['Up to 3 Passengers', 'Leather Interiors', 'Climate Control', 'On-Board WiFi'],
    image: '/images/carCard2.png'
  },
  {
    category: 'Safari & 4x4 Off-Road',
    description: 'Engineered for the unpredictable terrain of East Africa. Kitted Land Cruisers and Prados ready for remote project sites or wild safaris.',
    icon: Truck,
    specs: ['Up to 5 Passengers', '4WD / Diff-Locks', 'Pop-Up Safari Roof Optional', 'Heavy Duty Suspension'],
    image: '/images/carCard1.png'
  },
  {
    category: 'Corporate Vans & Shuttles',
    description: 'The perfect solution for group airport transfers, corporate team outings, or extended delegations.',
    icon: Users,
    specs: ['7 to 14 Passengers', 'Ample Luggage Space', 'Air Conditioning', ' PA System available'],
    image: '/images/carCard3.png'
  }
];

export default function VehiclesFleetPage({ params }: { params: Promise<{ locale: string }> }) {
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
           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
           <img src="/images/luxury-car-background.jpg" alt="Fleet Background" className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" />
           <div className="absolute inset-0 bg-white/5 mix-blend-overlay z-10" />
           
           <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col items-center text-center">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <div className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/80 mb-4">Our Fleet</div>
               <h1 className="text-[40px] md:text-[56px] text-white font-extrabold mb-6 leading-tight uppercase max-w-[800px]">
                 The Right Vehicle. <br/> Every Time.
               </h1>
               <p className="text-[16px] text-white/60 max-w-[600px] mx-auto leading-[1.7]">
                 From urban executive sedans to rugged off-road Land Cruisers, explore our diverse, meticulously maintained fleet.
               </p>
             </motion.div>
           </div>
        </section>

        {/* Fleet Listings */}
        <section className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="space-y-24">
              {fleetData.map((fleet, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={fleet.category}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  >
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-black shadow-2xl group">
                        <img 
                          src={fleet.image} 
                          alt={fleet.category} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                          onError={(e) => { e.currentTarget.src = "/images/car3.png" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6 w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                          <fleet.icon size={26} />
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[32px] md:text-[40px] font-extrabold text-black mb-4 uppercase">
                        {fleet.category}
                      </h2>
                      <p className="text-[16px] text-neutral-600 leading-[1.7] mb-8">
                        {fleet.description}
                      </p>
                      
                      <div className="bg-white rounded-[4px] p-8 border border-neutral-200 shadow-sm mb-8">
                         <h4 className="text-[12px] uppercase tracking-[0.2em] font-bold text-black mb-6 border-b border-black/5 pb-3">Vehicle Specifications</h4>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                           {fleet.specs.map((spec, sIdx) => (
                             <li key={sIdx} className="flex items-center text-[14px] text-neutral-600 font-medium">
                               <Cog size={16} className="text-black mr-3 flex-shrink-0" />
                               {spec}
                             </li>
                           ))}
                         </ul>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Link
                          href={`/${locale}/vehicles/contact`}
                          className="bg-[var(--color-red)] text-white px-[32px] py-[16px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-black transition-colors rounded-[2px]"
                        >
                          Request Availability
                        </Link>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <VehiclesFooter />
    </div>
  );
}
