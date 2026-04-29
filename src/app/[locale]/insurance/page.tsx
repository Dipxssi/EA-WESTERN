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
  ChevronRight, 
  CheckCircle2, 
  Award, 
  Zap, 
  Users, 
  Clock, 
  FileText,
  Search,
  ArrowRight
} from 'lucide-react';
import { FaCheckCircle, FaHeadset, FaShieldAlt } from 'react-icons/fa';

export default function InsurancePage({ params }: { params: Promise<{ locale: string }> }) {
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

  const services = [
    { icon: HeartPulse, title: 'Health', color: 'bg-blue-50 text-[var(--color-blue)]' },
    { icon: Car, title: 'Motor', color: 'bg-blue-50 text-[var(--color-blue)]' },
    { icon: ShieldCheck, title: 'Life', color: 'bg-blue-50 text-[var(--color-blue)]' },
    { icon: Home, title: 'Home', color: 'bg-blue-50 text-[var(--color-blue)]' },
    { icon: FileText, title: 'Business', color: 'bg-blue-50 text-[var(--color-blue)]' },
    { icon: Zap, title: 'Travel', color: 'bg-blue-50 text-[var(--color-blue)]' },
  ];

  return (
    <div className="theme-insurance bg-[var(--color-slate)] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full">
        {/* REDESIGNED HERO SECTION (Split Layout) */}
        <section className="relative w-full min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-[var(--color-navy)] rounded-bl-[100px] hidden lg:block z-0"></div>
          
          <div className="relative z-20 max-w-[1300px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 pr-0 lg:pr-10">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-[var(--color-blue)]/10 text-[var(--color-blue)] border border-[var(--color-blue)]/20 rounded-full px-4 py-1.5 mb-6"
              >
                <ShieldCheck size={14} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
                  Kenya's Trusted Independent Broker
                </span>
              </motion.div>
              
              <motion.h1 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[48px] md:text-[60px] lg:text-[70px] text-[var(--color-navy)] leading-[1.05] mb-6 font-bold tracking-tight font-playfair"
              >
                Insurance that <br />
                <span className="text-[var(--color-blue)]">Protects What</span> <br />
                Matters Most.
              </motion.h1>
              
              <motion.p 
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[16px] md:text-[18px] text-slate-600 leading-[1.6] mb-10 max-w-[480px]"
              >
                Experience world-class insurance brokerage with personalized service. We simplify the complex, ensuring you get the best coverage from top underwriters at competitive rates.
              </motion.p>
              
              <motion.div 
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Link
                  href={`/${locale}/insurance/contact`}
                  className="bg-[var(--color-blue)] text-white px-[32px] py-[18px] text-[13px] uppercase tracking-[0.15em] font-bold hover:bg-[var(--color-navy)] transition-colors rounded-[6px] shadow-xl shadow-[var(--color-blue)]/20 flex items-center justify-center gap-2 group"
                >
                  Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${locale}/insurance/contact`}
                  className="bg-white text-[var(--color-navy)] border-2 border-slate-200 px-[32px] py-[18px] text-[13px] uppercase tracking-[0.15em] font-bold hover:border-[var(--color-navy)] transition-colors rounded-[6px] flex items-center justify-center"
                >
                  Free Risk Review
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Quick Links Grid */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-[24px] p-8 shadow-2xl border border-slate-100 relative z-10"
              >
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-[var(--color-navy)] text-[22px] font-bold font-playfair">
                     Quick Quotes
                   </h3>
                   <div className="w-12 h-1 bg-[var(--color-blue)] rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {services.map((s, i) => (
                    <Link 
                      key={i} 
                      href={`/${locale}/insurance/solutions`}
                      className="group flex items-center gap-4 p-4 rounded-[12px] bg-slate-50 hover:bg-[var(--color-blue)] hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-[var(--color-blue)]"
                    >
                      <div className={`w-10 h-10 rounded-[8px] bg-white flex items-center justify-center text-[var(--color-blue)] shadow-sm group-hover:text-[var(--color-blue)]`}>
                        <s.icon size={20} />
                      </div>
                      <span className="text-[var(--color-navy)] group-hover:text-white text-[13px] font-bold">{s.title}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[var(--color-navy)] rounded-[16px] flex flex-col sm:flex-row items-center justify-between gap-4">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <FaHeadset size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/60 text-[11px] uppercase tracking-widest font-bold">Need assistance?</span>
                        <a href="tel:+254700000000" className="text-white font-bold text-[18px]">+254 700 000 000</a>
                      </div>
                   </div>
                </div>
              </motion.div>
              
              {/* Decorative Background Image behind the grid */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20 pointer-events-none hidden lg:block">
                 <img src="/images/insurancebg.png" alt="" className="w-full h-full object-contain mix-blend-luminosity" />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STATS (Reverted to Blue/Navy) */}
        <section className="relative z-30 -mt-10 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { label: 'Licensed by IRA', value: 'Regulated', icon: ShieldCheck },
               { label: 'Claim Payouts', value: 'KES 2.4B+', icon: Zap },
               { label: 'Active Clients', value: '50,000+', icon: Users },
               { label: 'Claim Support', value: '24/7 Support', icon: Clock },
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-6 rounded-[16px] shadow-xl border border-slate-50 flex flex-col items-center text-center group hover:border-[var(--color-blue)] transition-colors"
               >
                 <div className="w-12 h-12 rounded-full bg-slate-50 text-[var(--color-blue)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-all">
                    <item.icon size={22} />
                 </div>
                 <div className="text-[18px] font-bold text-[var(--color-navy)] mb-1">{item.value}</div>
                 <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{item.label}</div>
               </motion.div>
             ))}
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="py-32 bg-[var(--color-slate)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-xl">
                <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-widest mb-4">Coverage Plans</div>
                <h2 className="text-[40px] md:text-[52px] font-bold leading-[1.1] font-playfair text-[var(--color-navy)]">
                  Protection for Every <br /> Stage of Life.
                </h2>
              </div>
              <Link 
                href={`/${locale}/insurance/solutions`}
                className="text-[var(--color-blue)] font-bold border-b-2 border-[var(--color-blue)] pb-1 flex items-center gap-2 hover:gap-4 transition-all"
              >
                View All Coverage <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { 
                   title: 'Health & Medical', 
                   image: '/images/contact.png',
                   desc: 'Access reliable healthcare coverage with plans tailored for individuals, families, and corporate teams.',
                   icon: HeartPulse
                 },
                 { 
                   title: 'Life Insurance', 
                   image: '/images/whole%20life.png',
                   desc: 'Long-term financial protection designed to secure your family’s future and provide peace of mind.',
                   icon: ShieldCheck
                 },
                 { 
                   title: 'Auto & Transit', 
                   image: '/images/insurancebg.png',
                   desc: 'Stay protected on the road with comprehensive motor insurance for personal and commercial use.',
                   icon: Car
                 }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -10 }}
                   className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-[rgba(11,27,61,0.05)] group cursor-pointer"
                 >
                   <div className="h-[240px] relative overflow-hidden">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 to-transparent"></div>
                     <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white text-[var(--color-blue)] flex items-center justify-center">
                        <item.icon size={20} />
                     </div>
                   </div>
                   <div className="p-8">
                     <h3 className="text-[24px] font-bold text-[var(--color-navy)] mb-4">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed mb-6">
                       {item.desc}
                     </p>
                     <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                       Learn More <ChevronRight size={16} />
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE AN AGENCY SECTION */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
           <div className="max-w-[1300px] mx-auto px-6 md:px-10">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                 <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-widest mb-4">Why eawestern?</div>
                 <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] font-playfair text-[var(--color-navy)] mb-6">
                   The Independent Broker Advantage.
                 </h2>
                 <p className="text-slate-600 text-lg">
                   Unlike dealing directly with a single insurance company, working with eawestern gives you choice, advocacy, and unbiased expert advice.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                 {[
                   { title: 'Independent Advocacy', desc: 'We work for you, not the insurance companies. In the event of a claim, we are your strongest advocate to ensure a fair and swift settlement.', icon: ShieldCheck },
                   { title: 'Market-Wide Choice', desc: 'We compare policies from top underwriters across Kenya to find the perfect fit for your specific needs and budget.', icon: Search },
                   { title: 'Expert Guidance', desc: 'Insurance can be complex. Our licensed professionals explain the fine print so you know exactly what you are covered for.', icon: Award }
                 ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[24px] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                       <div className="w-14 h-14 rounded-[12px] bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center mb-6">
                          <item.icon size={28} />
                       </div>
                       <h4 className="text-[22px] font-bold text-[var(--color-navy)] mb-4">{item.title}</h4>
                       <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* TRUSTED UNDERWRITERS SECTION */}
        <section className="py-16 bg-white border-y border-slate-100">
           <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-8">Trusted by Kenya's Leading Underwriters</p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {['BRITAM', 'JUBILEE', 'APA', 'CIC', 'HERITAGE'].map((partner, idx) => (
                   <div key={idx} className="text-2xl font-bold font-playfair text-[var(--color-navy)]">
                      {partner}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA SECTION - REVERTED TO BLUE */}
        <section className="py-32 px-6">
           <div className="max-w-[1200px] mx-auto bg-[var(--color-navy)] rounded-[40px] p-12 md:p-24 relative overflow-hidden text-center shadow-3xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-blue)] rounded-full blur-[120px]"></div>
              </div>
              
              <div className="relative z-10">
                 <h2 className="text-4xl md:text-6xl text-white font-bold mb-8 font-playfair">
                   Ready to secure <br /> 
                   <span className="text-[var(--color-blue)]">your future?</span>
                 </h2>
                 <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                   Tell us what you need, and we will provide a clear, tailored insurance solution-without unnecessary complexity.
                 </p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <Link 
                      href={`/${locale}/insurance/contact`}
                      className="bg-[var(--color-blue)] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-blue)] transition-all shadow-2xl"
                    >
                      Get a Quote
                    </Link>
                    <Link 
                      href={`/${locale}/insurance/contact`}
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                    >
                      Talk to an Expert
                    </Link>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <InsuranceFooter />
    </div>
  );
}
