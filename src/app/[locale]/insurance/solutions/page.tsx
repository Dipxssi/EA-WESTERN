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
  Plus,
  Users,
  Star
} from 'lucide-react';

const personalPlans = [
  {
    id: 'health-wellness',
    icon: HeartPulse,
    title: 'Health & Wellness',
    tagline: 'Care without limits',
    desc: 'Access reliable, high-quality healthcare coverage with plans tailored for individuals and families.',
    features: ['Local & International coverage', 'Inpatient & Outpatient options', 'Maternity & Specialized care', '24/7 Medical support'],
    image: '/images/insurancebg.png',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'life-legacy',
    icon: ShieldCheck,
    title: 'Life & Legacy',
    tagline: 'Securing generations',
    desc: 'Protect what matters most with structured life insurance solutions designed for long-term security.',
    features: ['Term & Whole life options', 'Fixed premium structures', 'Critical illness coverage', 'Legacy planning'],
    image: '/images/whole%20life.png',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 'motor-travel',
    icon: Car,
    title: 'Motor & Travel',
    tagline: 'Protection on the move',
    desc: 'Stay protected on the road and across borders with comprehensive motor and travel insurance.',
    features: ['Comprehensive & Third party', 'Roadside assistance', 'Global travel protection', 'Efficient claims process'],
    image: '/images/insurancebg.png',
    color: 'from-cyan-400 to-cyan-600'
  }
];

const businessPlans = [
  {
    id: 'corporate-health',
    icon: Users,
    title: 'Corporate Health',
    desc: 'Wellness programs and medical covers designed for modern Kenyan workforces.',
    features: ['Group medical schemes', 'Wellness programs', 'Optical & Dental add-ons'],
    image: '/images/contact.png',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'professional-liability',
    icon: ShieldAlert,
    title: 'Professional Liability',
    desc: 'Protect your professional reputation and business against legal liabilities.',
    features: ['Professional Indemnity', 'Public Liability', 'D&O Liability'],
    image: '/images/contact.png',
    color: 'from-slate-600 to-slate-800'
  },
  {
    id: 'business-assets',
    icon: Home,
    title: 'Business Assets',
    desc: 'Coverage for your office, inventory, and physical business infrastructure.',
    features: ['Fire & Perils', 'Burglary insurance', 'Business interruption'],
    image: '/images/insurancebg.png',
    color: 'from-emerald-500 to-teal-600'
  }
];

export default function InsuranceSolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  return (
    <div className="theme-insurance bg-[#FAFAFA] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full pt-20">
        {/* PREMIUM SPLIT HERO */}
        <section className="relative w-full min-h-[80vh] flex items-center bg-[var(--color-navy)] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
             <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent z-10 lg:w-2/3"></div>
             <img src="/images/whole%20life.png" alt="Solutions Background" className="w-full h-full object-cover object-right" />
          </div>
          
          <div className="relative z-20 max-w-[1300px] w-full mx-auto px-6 md:px-10 py-20 flex flex-col justify-center h-full">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0} className="max-w-2xl">
               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
                 <Star size={14} className="text-yellow-400 fill-yellow-400" />
                 <span className="text-white text-xs font-bold uppercase tracking-widest">Comprehensive Coverage</span>
               </div>
               
               <h1 className="text-[56px] lg:text-[80px] text-white font-bold mb-6 leading-[1.05] font-playfair tracking-tight">
                 Protection that <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">empowers you.</span>
               </h1>
               
               <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
                 From securing your family's future to fortifying your business operations, discover insurance solutions crafted for the reality of tomorrow.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <a href="#personal" className="bg-[var(--color-blue)] hover:bg-blue-600 text-white px-8 py-4 rounded-[12px] text-sm font-bold transition-all inline-flex justify-center items-center gap-2 shadow-xl shadow-[var(--color-blue)]/30 group">
                    Explore Personal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </a>
                 <a href="#business" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-[12px] text-sm font-bold transition-all backdrop-blur-sm inline-flex justify-center items-center gap-2">
                    View Business Solutions
                 </a>
               </div>
            </motion.div>
          </div>
        </section>

        {/* PERSONAL INSURANCE SECTION */}
        <section id="personal" className="py-32 relative bg-[#FAFAFA]">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
           <div className="max-w-[1300px] mx-auto px-6 md:px-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                <div className="max-w-2xl">
                   <div className="text-[var(--color-blue)] font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                     <span className="w-8 h-px bg-[var(--color-blue)]"></span> Individual & Family
                   </div>
                   <h2 className="text-[40px] md:text-[56px] font-bold text-[var(--color-navy)] font-playfair leading-tight">Personal Protection <br />Solutions</h2>
                </div>
                <p className="text-slate-500 max-w-md pb-4">
                   Tailored coverage to safeguard your health, your assets, and your loved ones against life's uncertainties.
                </p>
              </div>
              
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {personalPlans.map((plan, idx) => (
                    <motion.div 
                      key={plan.id}
                     whileHover={{ y: -12 }}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ delay: idx * 0.1, duration: 0.6 }}
                     className="bg-white rounded-[32px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/60 group overflow-hidden flex flex-col h-full"
                    >
                      <div className="h-[240px] relative overflow-hidden">
                         <img src={plan.image} alt={plan.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/90 via-[var(--color-navy)]/30 to-transparent"></div>
                         
                         <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                            <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full">
                               {plan.tagline}
                            </div>
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-lg`}>
                               <plan.icon size={20} />
                            </div>
                         </div>
                         
                         <h3 className="absolute bottom-6 left-6 text-white text-[28px] font-bold font-playfair leading-tight">{plan.title}</h3>
                       </div>

                      <div className="p-8 flex flex-col flex-grow">
                         <p className="text-slate-500 text-sm leading-relaxed mb-8">{plan.desc}</p>

                         <div className="space-y-4 mb-10 flex-grow">
                             {plan.features.map((f, i) => (
                               <div key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                  <div className="mt-0.5 min-w-[16px]"><Plus size={14} className="text-[var(--color-blue)]" /></div> 
                                  <span>{f}</span>
                               </div>
                             ))}
                          </div>

                         <Link
                           href={`/${locale}/insurance/solutions/${plan.id}`}
                           className="w-full py-4 rounded-xl bg-slate-50 hover:bg-[var(--color-blue)] text-[var(--color-navy)] hover:text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                         >
                            Explore Plan <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                         </Link>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* BUSINESS SOLUTIONS SECTION */}
        <section id="business" className="py-32 relative bg-[var(--color-navy)] overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-blue)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
           
           <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10">
              <div className="text-center mb-20">
                <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                  <span className="text-blue-300 font-bold text-xs uppercase tracking-[0.2em]">Enterprise & SME</span>
                </div>
                <h2 className="text-[40px] md:text-[64px] font-bold text-white font-playfair mb-6">Business Continuity <br className="hidden md:block"/>Solutions</h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">Comprehensive risk management and insurance strategies to protect your company's assets, employees, and future growth.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {businessPlans.map((plan, idx) => (
                    <motion.div 
                      key={plan.id}
                      whileHover={{ y: -12 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-10 group hover:bg-white/[0.06] transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                      
                      <div className="relative z-10 flex flex-col flex-grow">
                        <div className={`w-16 h-16 rounded-[20px] bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                           <plan.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">{plan.desc}</p>
                        
                        <div className="w-full h-px bg-white/10 mb-8"></div>
                        
                        <ul className="space-y-4 mb-10 flex-grow">
                           {plan.features.map((f, i) => (
                              <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
                                 <Check size={16} className="text-blue-400" /> {f}
                              </li>
                           ))}
                        </ul>
                        
                        <Link href={`/${locale}/insurance/solutions/${plan.id}`} className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group-hover:text-blue-300 transition-colors">
                           View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* BROKERAGE PROCESS SECTION */}
        <section className="py-32 bg-white">
           <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <div className="text-[var(--color-blue)] font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Methodology</div>
                 <h2 className="text-[40px] md:text-[56px] font-bold text-[var(--color-navy)] font-playfair mb-8 leading-tight">How We Secure <br/>Your Coverage</h2>
                 <p className="text-slate-500 text-lg mb-12">As independent brokers, we navigate the complex insurance landscape to find the perfect match for your needs, negotiating on your behalf.</p>
                 
                 <div className="space-y-10">
                    {[
                      { step: '01', title: 'Need Assessment', desc: 'We analyze your risks and requirements to define the ideal coverage profile with absolute precision.' },
                      { step: '02', title: 'Market Comparison', desc: 'We solicit quotes from top-tier insurers and compare terms, conditions, and prices transparently.' },
                      { step: '03', title: 'Selection & Support', desc: 'We help you choose the best plan and provide continuous support, especially during the claims process.' }
                    ].map((s, i) => (
                       <motion.div 
                         key={i} 
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.15 }}
                         className="flex gap-8 group"
                       >
                          <div className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-100 font-playfair group-hover:from-[var(--color-blue)] group-hover:to-blue-300 transition-colors duration-500">{s.step}</div>
                          <div>
                             <h4 className="text-xl font-bold text-[var(--color-navy)] mb-3">{s.title}</h4>
                             <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-blue)] to-cyan-400 rounded-[48px] blur-2xl opacity-20 transform rotate-3"></div>
                 <div className="aspect-[4/5] rounded-[48px] bg-[var(--color-navy)] p-12 flex flex-col items-center justify-center text-center overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-navy)]/90 z-0"></div>
                    
                    <div className="relative z-10 w-full">
                       <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-blue)] to-cyan-500 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                          <Check size={40} className="text-white" strokeWidth={3} />
                       </div>
                       <h3 className="text-[32px] md:text-[40px] text-white font-bold mb-4 font-playfair">Ready to Begin?</h3>
                       <p className="text-white/70 mb-12 text-lg">Experience the eawestern difference and secure your peace of mind today.</p>
                       <Link 
                         href={`/${locale}/insurance/contact`}
                         className="bg-white text-[var(--color-navy)] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[var(--color-blue)] hover:text-white transition-all shadow-xl inline-flex items-center gap-3"
                       >
                          Get a Quote Now <ArrowRight size={16} />
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-32 bg-slate-100 relative overflow-hidden">
           <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--color-blue)_0%,_transparent_25%)] mix-blend-multiply pointer-events-none"></div>
           <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
                 <ShieldCheck size={32} className="text-[var(--color-blue)]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-6 font-playfair tracking-tight">Bespoke Protection Plans</h2>
              <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto">If you have unique requirements not covered above, our expert advisors can construct a custom solution tailored specifically to your complex profile.</p>
              <div className="flex justify-center">
                 <Link 
                   href={`/${locale}/insurance/contact`}
                   className="bg-[var(--color-navy)] text-white px-10 py-5 rounded-[16px] font-bold hover:bg-[var(--color-blue)] transition-all flex items-center gap-3 shadow-xl hover:-translate-y-1"
                 >
                    <PhoneCall size={20} /> Speak to an Advisor Today
                 </Link>
              </div>
           </div>
        </section>
      </main>

      <InsuranceFooter />
    </div>
  );
}
