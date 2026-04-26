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
        ease: [0.25, 0.1, 0.25, 1]
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
        {/* REIMAGINED HERO SECTION - REVERTED COLORS */}
        <section className="relative w-full min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-[var(--color-navy)]">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent z-10"></div>
            <img 
              src="/images/insurancebg.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-30" 
              onError={(e) => { e.currentTarget.src = "/images/contact.png" }}
            />
          </div>
          
          <div className="relative z-20 max-w-[1300px] mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-[var(--color-blue)]/10 border border-[var(--color-blue)]/20 rounded-full px-4 py-1.5 mb-8"
              >
                <ShieldCheck size={14} className="text-[var(--color-blue)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold">
                  Trusted by 50,000+ Clients
                </span>
              </motion.div>
              
              <motion.h1 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[48px] md:text-[64px] lg:text-[76px] text-white leading-[1] mb-8 font-bold tracking-tight font-playfair"
              >
                Insurance That <br />
                <span className="text-[var(--color-blue)]">Protects What</span> <br />
                Matters Most.
              </motion.h1>
              
              <motion.p 
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[17px] md:text-[19px] text-white/70 leading-[1.6] mb-12 max-w-[500px]"
              >
                Experience world-class insurance brokerage with personalized service. We simplify the complex, ensuring you get the best coverage at the most competitive rates.
              </motion.p>
              
              <motion.div 
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-wrap gap-5"
              >
                <Link
                  href={`/${locale}/insurance/contact`}
                  className="bg-[var(--color-blue)] text-white px-[36px] py-[18px] text-[13px] uppercase tracking-[0.15em] font-bold hover:bg-white hover:text-[var(--color-blue)] transition-all rounded-[4px] shadow-xl flex items-center gap-2 group"
                >
                  Request a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--color-navy)] bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i+12}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">Joined by 50k+ Kenyans</span>
                </div>
              </motion.div>
            </div>

            {/* QUICK HELP GRID */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blue)]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <h3 className="text-white text-[20px] font-bold mb-8 flex items-center gap-3">
                   <div className="w-8 h-1 bg-[var(--color-blue)]"></div>
                   How can we help you?
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {services.map((s, i) => (
                    <Link 
                      key={i} 
                      href={`/${locale}/insurance/solutions`}
                      className="group flex flex-col items-center justify-center p-6 rounded-[16px] bg-white/5 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-transparent text-center"
                    >
                      <div className={`w-12 h-12 rounded-[12px] ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <s.icon size={24} />
                      </div>
                      <span className="text-white group-hover:text-[var(--color-navy)] text-sm font-bold uppercase tracking-wider">{s.title}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-blue)] flex items-center justify-center text-white">
                        <FaHeadset />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Speak to us</span>
                       <span className="text-white font-bold">+254 751 216 699</span>
                      </div>
                   </div>
                   <button className="text-[var(--color-blue)] text-sm font-bold flex items-center gap-2 hover:underline">
                      View Solutions <Search size={16} />
                   </button>
                </div>
                
                {/* Floating Badge - MOVED TO TOP RIGHT OF FOOTER AREA TO AVOID OVERLAP */}
                <div className="absolute bottom-4 right-4 bg-white p-3 rounded-[12px] shadow-2xl border border-slate-100 hidden xl:flex items-center gap-3 z-30 transform hover:scale-105 transition-transform">
                   <div className="w-10 h-10 rounded-full bg-blue-50 text-[var(--color-blue)] flex items-center justify-center">
                      <CheckCircle2 size={20} />
                   </div>
                   <div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Assurance</div>
                      <div className="text-[12px] font-bold text-slate-800 leading-none">Licensed Advisor</div>
                   </div>
                </div>
              </div>
            </motion.div>
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

        {/* WHY PARTNER SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
                    <img src="/images/whole%20life.png" alt="Trusted Partner" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 p-10 bg-[var(--color-navy)] rounded-[24px] text-white shadow-2xl hidden md:block border-l-4 border-[var(--color-blue)]">
                    <div className="text-4xl font-bold mb-1 font-playfair text-white">25+</div>
                    <div className="text-xs uppercase tracking-widest font-bold text-[var(--color-blue)]">Years of Excellence</div>
                 </div>
              </div>
              
              <div>
                 <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-widest mb-4">The eawestern difference</div>
                 <h2 className="text-[40px] md:text-[52px] font-bold leading-[1.1] font-playfair text-[var(--color-navy)] mb-8">
                   Clear Policies. <br /> Real Support.
                 </h2>
                 
                 <div className="space-y-8">
                    {[
                      { title: 'Independent Advocacy', desc: 'As independent brokers, we work for you, not the insurance companies. Our loyalty lies with our clients.' },
                      { title: 'Fast Claims Support', desc: 'Our dedicated claims team ensures that your payouts are processed efficiently and without unnecessary delays.' },
                      { title: 'Expert Market Knowledge', desc: 'We have deep relationships with all major Kenyan insurers, giving you access to competitive rates and terms.' }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-5">
                          <div className="w-12 h-12 rounded-[12px] bg-[var(--color-slate)] text-[var(--color-blue)] flex items-center justify-center shrink-0">
                             <CheckCircle2 size={24} />
                          </div>
                          <div>
                             <h4 className="text-[20px] font-bold text-[var(--color-navy)] mb-2">{item.title}</h4>
                             <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
                 
                 <div className="mt-12">
                    <Link 
                      href={`/${locale}/insurance/contact`}
                      className="inline-flex items-center gap-3 bg-[var(--color-blue)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-navy)] transition-colors shadow-lg shadow-[var(--color-blue)]/20"
                    >
                      Speak to an Advisor <ArrowRight size={20} />
                    </Link>
                 </div>
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
