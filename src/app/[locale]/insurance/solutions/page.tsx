"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, HeartPulse, Home, Car, PhoneCall, Check } from 'lucide-react';

const insurancePlans = [
  {
    id: 'life',
    icon: ShieldAlert,
    title: 'Life Insurance',
    desc: 'Protect what matters most. Comprehensive life insurance designed to secure your family’s financial future, including term and whole life variants.',
    features: ['Up to $5M Coverage', 'Fixed Premium Rate', 'Terminal Illness Benefit', 'Instant Online Approval'],
    image: '/images/term life.png'
  },
  {
    id: 'medical',
    icon: HeartPulse,
    title: 'Health & Medical',
    desc: 'Uncompromised access to the world’s leading healthcare facilities. Extensive inpatient and outpatient coverage tailored to your needs.',
    features: ['Global Coverage', 'Zero Deductible Options', 'Maternity included', '24/7 Telehealth Access'],
    image: '/images/whole life.png' // using this as a proxy for medical if we don't have a specific medical one
  },
  {
    id: 'property',
    icon: Home,
    title: 'Property & Home',
    desc: 'Safeguard your most valuable assets against natural disasters, theft, and accidental damage with our premium property coverage.',
    features: ['Full Replacement Cost', 'Temporary Housing', 'Liability Protection', 'Valuables & Jewelry'],
    image: '/images/insurance-family.jpg'
  },
  {
    id: 'auto',
    icon: Car,
    title: 'Auto Transit',
    desc: 'From daily commutes to luxury vehicle collections, our comprehensive auto insurance keeps you moving safely.',
    features: ['Collision & Comprehensive', 'Roadside Assistance', 'Rental Reimbursement', 'New Car Replacement'],
    image: '/images/car image.jpg'
  }
];

export default function InsuranceSolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-insurance bg-[var(--color-slate)] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full pb-[80px]">
        {/* Header */}
        <section className="bg-[var(--color-navy)] pt-[160px] pb-[80px] md:pt-[200px] md:pb-[120px] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent z-10" />
           <img src="/images/insurance-family.jpg" alt="Solutions Background" className="absolute inset-0 w-full h-full object-cover object-center opacity-50 mix-blend-luminosity" />
           <div className="absolute inset-0 bg-[var(--color-blue)]/10 mix-blend-overlay z-10" />
           
           <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col items-center text-center">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <div className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-4">Our Portfolio</div>
               <h1 className="text-[40px] md:text-[56px] text-white font-bold mb-6 leading-tight max-w-[800px]">
                 Comprehensive Coverage <br/> for True Peace of Mind
               </h1>
               <p className="text-[16px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
                 Explore our suite of professionally designed insurance solutions. Transparent, reliable, and perfectly adapted to your unique lifestyle.
               </p>
             </motion.div>
           </div>
        </section>

        {/* Detailed Solutions List */}
        <section className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="space-y-24">
              {insurancePlans.map((plan, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div 
                    key={plan.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                  >
                    
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[var(--color-navy)] shadow-2xl border border-[rgba(11,27,61,0.05)] group">
                        <img 
                          src={plan.image} 
                          alt={plan.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                          onError={(e) => { e.currentTarget.src = "/images/insurancebg.png" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 w-[56px] h-[56px] bg-white rounded-[12px] flex items-center justify-center text-[var(--color-blue)] shadow-lg">
                          <plan.icon size={28} strokeWidth={2} />
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                      <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--color-navy)] mb-4">
                        {plan.title}
                      </h2>
                      <p className="text-[16px] text-[var(--color-charcoal)]/70 leading-[1.7] mb-8">
                        {plan.desc}
                      </p>
                      
                      <div className="bg-white rounded-[8px] p-6 border border-[rgba(11,27,61,0.05)] shadow-sm mb-8">
                         <h4 className="text-[12px] uppercase tracking-[0.1em] font-bold text-[var(--color-navy)] mb-4">Key Benefits included</h4>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {plan.features.map((feature, fIdx) => (
                             <li key={fIdx} className="flex items-center text-[14px] text-[var(--color-charcoal)] font-medium">
                               <Check size={16} className="text-[var(--color-blue)] mr-2 flex-shrink-0" />
                               {feature}
                             </li>
                           ))}
                         </ul>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Link
                          href={`/${locale}/insurance/contact`}
                          className="bg-[var(--color-blue)] text-white px-[28px] py-[14px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-[var(--color-navy)] transition-colors rounded-[4px]"
                        >
                          Request a Quote
                        </Link>
                        <Link
                          href={`/${locale}/insurance/contact`}
                          className="text-[var(--color-navy)] px-[28px] py-[14px] text-[13px] uppercase tracking-[0.1em] font-bold hover:text-[var(--color-blue)] transition-colors flex items-center gap-2"
                        >
                          <PhoneCall size={16} /> Contact Advisor
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

      <InsuranceFooter />
    </div>
  );
}
