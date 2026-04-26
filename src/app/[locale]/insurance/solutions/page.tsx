"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartPulse, 
  Car, 
  Home, 
  Briefcase, 
  Globe, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  ShieldAlert,
  Plus
} from 'lucide-react';

const personalPlans = [
  {
    id: 'health',
    icon: HeartPulse,
    title: 'Health & Wellness',
    tagline: 'Care without limits',
    desc: 'Access reliable, high-quality healthcare coverage with plans tailored for individuals and families.',
    features: ['Local & International coverage', 'Inpatient & Outpatient options', 'Maternity & Specialized care', '24/7 Medical support'],
    image: '/images/insurancebg.png'
  },
  {
    id: 'life',
    icon: ShieldCheck,
    title: 'Life & Legacy',
    tagline: 'Securing generations',
    desc: 'Protect what matters most with structured life insurance solutions designed for long-term security.',
    features: ['Term & Whole life options', 'Fixed premium structures', 'Critical illness coverage', 'Legacy planning'],
    image: '/images/whole%20life.png'
  },
  {
    id: 'motor',
    icon: Car,
    title: 'Motor & Travel',
    tagline: 'Protection on the move',
    desc: 'Stay protected on the road and across borders with comprehensive motor and travel insurance.',
    features: ['Comprehensive & Third party', 'Roadside assistance', 'Global travel protection', 'Efficient claims process'],
    image: '/images/insurancebg.png'
  }
];

const businessPlans = [
  {
    id: 'corporate-health',
    icon: Users,
    title: 'Corporate Health',
    desc: 'Wellness programs and medical covers designed for modern Kenyan workforces.',
    features: ['Group medical schemes', 'Wellness programs', 'Optical & Dental add-ons'],
    image: '/images/contact.png'
  },
  {
    id: 'liability',
    icon: ShieldAlert,
    title: 'Professional Liability',
    desc: 'Protect your professional reputation and business against legal liabilities.',
    features: ['Professional Indemnity', 'Public Liability', 'D&O Liability'],
    image: '/images/contact.png'
  },
  {
    id: 'assets',
    icon: Home,
    title: 'Business Assets',
    desc: 'Coverage for your office, inventory, and physical business infrastructure.',
    features: ['Fire & Perils', 'Burglary insurance', 'Business interruption'],
    image: '/images/insurancebg.png'
  }
];

import { Users } from 'lucide-react';

export default function InsuranceSolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    })
  };

  return (
    <div className="theme-insurance bg-[var(--color-slate)] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full">
        {/* PREMIUM SOLUTIONS HERO */}
        <section className="relative w-full min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--color-navy)]">
          <div className="absolute inset-0 opacity-40">
             <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)]/60 via-[var(--color-navy)] to-[var(--color-navy)] z-10"></div>
             <img src="/images/whole%20life.png" alt="Solutions Background" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
               <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-[0.3em] mb-6">Explore Our Solutions</div>
               <h1 className="text-[48px] md:text-[68px] text-white font-bold mb-8 leading-[1.1] font-playfair">
                 Coverage Designed <br /> <span className="italic !text-white font-normal">for Reality.</span>
               </h1>
               <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
                 From protecting your family's future to securing your business assets, we provide clear, compliant, and comprehensive insurance solutions across East Africa.
               </p>
               
               {/* Section Navigator */}
               <div className="flex flex-wrap justify-center gap-4">
                 <a href="#personal" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full text-sm font-bold transition-all backdrop-blur-sm inline-flex items-center gap-2">
                    <HeartPulse size={16} />
                    Personal Insurance
                 </a>
                 <a href="#business" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full text-sm font-bold transition-all backdrop-blur-sm inline-flex items-center gap-2">
                    <Briefcase size={16} />
                    Business Solutions
                 </a>
               </div>
            </motion.div>
          </div>
        </section>

        {/* PERSONAL INSURANCE SECTION */}
        <section id="personal" className="py-24 bg-white">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <div className="flex items-center gap-4 mb-16">
                 <div className="w-12 h-px bg-[var(--color-blue)]"></div>
                 <h2 className="text-[32px] font-bold text-[var(--color-navy)] uppercase tracking-tighter">Personal Protection</h2>
              </div>
              
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {personalPlans.map((plan, idx) => (
                    <motion.div 
                      key={plan.id}
                     whileHover={{ y: -10 }}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-[var(--color-slate)] rounded-[32px] shadow-lg border border-slate-100 group overflow-hidden"
                    >
                      <div className="h-[220px] relative overflow-hidden">
                         <img src={plan.image} alt={plan.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/85 to-transparent"></div>
                         <div className="absolute top-5 left-5 text-[10px] uppercase font-bold tracking-widest text-white/80">
                            {plan.tagline}
                          </div>
                       </div>

                      <div className="p-8">
                         <div className="w-14 h-14 rounded-[16px] bg-white text-[var(--color-blue)] flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-all">
                            <plan.icon size={28} />
                         </div>
                         <h3 className="text-[28px] font-bold text-[var(--color-navy)] mb-4 font-playfair">{plan.title}</h3>
                         <p className="text-slate-500 text-sm leading-relaxed mb-7">{plan.desc}</p>

                         <div className="space-y-3 mb-8">
                             {plan.features.map((f, i) => (
                               <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                  <Plus size={14} className="text-[var(--color-blue)]" /> {f}
                               </div>
                             ))}
                          </div>

                         <Link
                           href={`/${locale}/insurance/contact`}
                           className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                         >
                            Request a Quote <ArrowRight size={18} />
                         </Link>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* BUSINESS SOLUTIONS SECTION */}
        <section id="business" className="py-32 bg-[var(--color-slate)]">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center mb-20">
              <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-[0.2em] mb-4">Enterprise & SME</div>
              <h2 className="text-[40px] md:text-[52px] font-bold text-[var(--color-navy)] font-playfair">Business Continuity Solutions</h2>
              <div className="w-20 h-1 bg-[var(--color-blue)] mx-auto mt-6"></div>
           </div>
           
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessPlans.map((plan, idx) => (
                 <motion.div 
                   key={plan.id}
                   whileHover={{ y: -10 }}
                   className="bg-white rounded-[32px] shadow-lg border border-slate-50 group overflow-hidden"
                 >
                   <div className="h-[180px] relative overflow-hidden">
                      <img src={plan.image} alt={plan.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 to-transparent"></div>
                   </div>

                   <div className="p-10">
                    <div className="w-16 h-16 rounded-[20px] bg-[var(--color-slate)] text-[var(--color-blue)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-all">
                       <plan.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">{plan.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8">{plan.desc}</p>
                    
                    <ul className="space-y-4 mb-10">
                       {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                             <Plus size={14} className="text-[var(--color-blue)]" /> {f}
                          </li>
                       ))}
                    </ul>
                    
                    <Link href={`/${locale}/insurance/contact`} className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                       Inquire Now <ArrowRight size={18} />
                    </Link>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>

        {/* BROKERAGE PROCESS SECTION */}
        <section className="py-24 bg-white border-y border-slate-100">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-[40px] font-bold text-[var(--color-navy)] font-playfair mb-8">How We Secure Your Coverage</h2>
                 <p className="text-slate-500 text-lg mb-12">As independent brokers, we navigate the complex insurance landscape to find the perfect match for your needs.</p>
                 
                 <div className="space-y-12">
                    {[
                      { step: '01', title: 'Need Assessment', desc: 'We analyze your risks and requirements to define the ideal coverage profile.' },
                      { step: '02', title: 'Market Comparison', desc: 'We solicit quotes from top-tier insurers and compare terms, not just prices.' },
                      { step: '03', title: 'Selection & Support', desc: 'We help you choose the best plan and provide continuous support, especially during claims.' }
                    ].map((s, i) => (
                       <div key={i} className="flex gap-8">
                          <div className="text-4xl font-bold text-[var(--color-blue)]/20 font-playfair">{s.step}</div>
                          <div>
                             <h4 className="text-xl font-bold text-[var(--color-navy)] mb-2">{s.title}</h4>
                             <p className="text-slate-500 text-sm">{s.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <div className="aspect-square rounded-[40px] bg-[var(--color-navy)] p-12 flex items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-blue)_0%,_transparent_70%)]"></div>
                    </div>
                    <div className="relative z-10">
                       <div className="w-24 h-24 rounded-full bg-[var(--color-blue)] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[var(--color-blue)]/50">
                          <Check size={48} className="text-white" strokeWidth={3} />
                       </div>
                       <h3 className="text-3xl text-white font-bold mb-4">Ready to Begin?</h3>
                       <p className="text-white/60 mb-10">Experience the eawestern difference today.</p>
                       <Link 
                         href={`/${locale}/insurance/contact`}
                         className="bg-white text-[var(--color-navy)] px-12 py-5 rounded-full font-bold hover:bg-[var(--color-blue)] hover:text-white transition-all shadow-2xl"
                       >
                          Get a Quote Now
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FINAL CONTACT SECTION */}
        <section className="py-24 bg-[var(--color-slate)]">
           <div className="max-w-[800px] mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-[var(--color-navy)] mb-6 font-playfair">Bespoke Protection Plans</h2>
              <p className="text-slate-500 text-lg mb-12">If you have unique requirements not covered above, our advisors can build a custom solution tailored specifically to your profile.</p>
              <div className="flex flex-wrap justify-center gap-6">
                 <Link 
                   href={`/${locale}/insurance/contact`}
                   className="bg-[var(--color-navy)] text-white px-10 py-5 rounded-full font-bold hover:bg-[var(--color-blue)] transition-all flex items-center gap-3"
                 >
                    <PhoneCall size={20} /> Speak to an Advisor
                 </Link>
              </div>
           </div>
        </section>
      </main>

      <InsuranceFooter />
    </div>
  );
}
