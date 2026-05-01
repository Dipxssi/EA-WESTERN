"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import { InsurancePackagesSection } from '@/components/InsurancePackagesSection';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartPulse, 
  Car, 
  Home, 
  CircleDollarSign,
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
import { FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

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

            {/* Right Content - Hero Image */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-2xl"
              >
                <img
                  src="/images/insurancebg.png"
                  alt="Professional insurance support"
                  className="block h-[520px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/70 via-[var(--color-navy)]/20 to-transparent" />
              </motion.div>
              
              {/* Decorative Background Image behind the grid */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20 pointer-events-none hidden lg:block">
                 <img src="/images/insurancebg.png" alt="" className="w-full h-full object-contain mix-blend-luminosity" />
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHT CARDS */}
        <section className="relative z-20 border-b border-slate-100 bg-[#f3f5f8] py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-7 px-6 md:grid-cols-3 md:gap-8 md:px-10 lg:gap-10">
            {[
              {
                step: "01",
                title: "Fast Claims",
                desc: "We are proud of our claims process. We believe your claim should be paid quickly and especially when you need it.",
                icon: CircleDollarSign,
              },
              {
                step: "02",
                title: "Experienced",
                desc: "With strong market experience in East Africa, our brokerage team helps you choose cover with clarity and confidence.",
                icon: ShieldCheck,
              },
              {
                step: "03",
                title: "Customer First",
                desc: "We have a dedicated team ready to assist whenever you need support, with responsive service throughout your policy journey.",
                icon: Users,
              },
            ].map((card, idx) => (
              <motion.article
                key={card.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-[18px] border border-[#e8ebef] bg-[#fdfdfd] p-8 shadow-[0_16px_34px_-16px_rgba(11,31,46,0.16)]"
              >
                <div className="pointer-events-none absolute -left-14 -top-14 size-[11rem] rounded-full bg-[var(--color-blue)]" />
                <div className="absolute left-8 top-8 z-[2] flex h-11 w-11 items-center justify-center text-white">
                  <card.icon size={28} />
                </div>
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-6 top-6 select-none font-playfair text-[66px] font-semibold leading-none tracking-tight text-transparent [-webkit-text-stroke-width:1.2px] [-webkit-text-stroke-color:#d9dde3]"
                >
                  {card.step}
                </span>
                <div className="relative z-[3] mt-16">
                  <h3 className="font-playfair text-[36px] leading-[1] text-[#1f2937]">{card.title}</h3>
                  <p className="mt-5 text-[18px] leading-relaxed text-[#4b5563]">{card.desc}</p>
                </div>
              </motion.article>
            ))}
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

        <InsurancePackagesSection locale={locale} variant="popular" />

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
