"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Car, Home, ChevronRight, CheckCircle2, Award } from 'lucide-react';
import { FaCheckCircle, FaHeadset, FaShieldAlt } from 'react-icons/fa';

export default function InsurancePage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  // Structured, professional animation variants
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
    <div className="theme-insurance bg-[var(--color-slate)] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-[var(--color-navy)] flex items-center">
          {/* Background Image & Gradient */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/95 to-[var(--color-navy)]/30 z-10" />
            <img 
              src="/images/insurancebg.png" 
              alt="Professional Insurance Background" 
              className="w-full h-full object-cover object-center opacity-40" 
              onError={(e) => { e.currentTarget.src = "/images/insurance-family.jpg" }}
            />
          </div>
          
          <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 w-full pt-20">
            <div className="max-w-[600px]">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
              >
                <ShieldCheck size={14} className="text-[var(--color-blue)]" />
                <span className="text-[11px] uppercase tracking-[0.15em] text-white font-medium">
                  Trusted by 50,000+ Clients
                </span>
              </motion.div>
              
              <motion.h1 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[44px] md:text-[56px] lg:text-[68px] text-white leading-[1.1] mb-6 font-bold tracking-tight"
              >
                Insurance That <br />
                <span className="text-[#60A5FA]">Protects What Matters Most</span>
              </motion.h1>
              
              <motion.p 
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] mb-10 max-w-[500px]"
              >
                We are not just brokers; we are your dedicated, licensed advocates. Find the most competitive rates for Life, Health, Motor, and Business insurance with an expert team committed to one thing: making claims effortless.
              </motion.p>
              
              <motion.div 
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={`/${locale}/insurance/contact`}
                  className="bg-[var(--color-blue)] text-white px-[32px] py-[16px] text-[13px] uppercase tracking-[0.1em] font-semibold hover:bg-white hover:text-[var(--color-blue)] transition-colors rounded-[4px] shadow-lg shadow-[var(--color-blue)]/20 text-center flex justify-center items-center gap-2 group"
                >
                  Request a Quote <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/${locale}/insurance/contact`}
                  className="bg-transparent border border-white/30 text-white px-[32px] py-[16px] text-[13px] uppercase tracking-[0.1em] font-medium hover:bg-white/10 transition-colors rounded-[4px] text-center backdrop-blur-sm"
                >
                  Speak to an Advisor
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRUST STATS BAR */}
        <section className="relative z-30 w-full px-6 md:px-10 mt-8 md:mt-2">
          <div className="max-w-[1200px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-white rounded-[8px] shadow-[0_20px_40px_rgba(11,27,61,0.08)] border border-[rgba(11,27,61,0.05)] overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(11,27,61,0.08)]">
                {[
                  { value: '24/7', label: 'Claims Support', Icon: FaHeadset },
                  { value: 'Licensed', label: 'Regulated Advisors', Icon: FaShieldAlt },
                  { value: 'High', label: 'Claim Resolution Rate', Icon: FaCheckCircle },
                ].map((stat, idx) => {
                  const Icon = stat.Icon;
                  return (
                  <div key={idx} className="flex flex-col items-center justify-center py-10 md:py-12 text-center px-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-lightblue)] text-[var(--color-blue)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="serif text-[40px] md:text-[48px] font-light text-[var(--color-navy)] tabular-nums tracking-tighter leading-none mb-3">
                      {stat.value}
                    </div>
                    <div className="max-w-[200px] text-[10px] md:text-[11px] font-medium uppercase leading-relaxed tracking-[0.3em] text-[var(--color-charcoal)]/55">
                      {stat.label}
                    </div>
                  </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CORE SOLUTIONS PREVIEW */}
        <section className="py-[120px] bg-[var(--color-slate)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-3">Coverage Plans</div>
                <h2 className="text-[36px] md:text-[44px] text-[var(--color-navy)] font-bold mb-6 leading-tight">
                  Protection for Every Stage of Life
                </h2>
                <div className="w-[60px] h-[4px] bg-[var(--color-blue)] mx-auto rounded-full"></div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: HeartPulse, title: 'Health & Medical', desc: 'Access reliable healthcare coverage with plans tailored for individuals, families, and corporate teams.' },
                { icon: ShieldCheck, title: 'Life Insurance', desc: 'Long-term financial protection designed to secure your family’s future and provide peace of mind.' },
                { icon: Car, title: 'Auto & Transit', desc: 'Stay protected on the road with comprehensive motor insurance for personal and commercial use.' },
                { icon: Home, title: 'Home & Property', desc: 'Protect your home, assets, and investments against damage, loss, and unforeseen events.' },
              ].map((solution, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-[8px] border border-[rgba(11,27,61,0.05)] shadow-[0_10px_30px_rgba(11,27,61,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 group cursor-pointer"
                 >
                   <div className="w-[56px] h-[56px] rounded-[12px] bg-[var(--color-lightblue)] flex items-center justify-center text-[var(--color-blue)] mb-6 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors duration-300">
                     <solution.icon size={26} strokeWidth={2} />
                   </div>
                   <h3 className="text-[20px] font-bold text-[var(--color-navy)] mb-3">{solution.title}</h3>
                   <p className="text-[14px] text-[var(--color-charcoal)]/70 leading-[1.6] mb-6 min-h-[66px]">
                     {solution.desc}
                   </p>
                   <div className="flex items-center text-[13px] font-semibold text-[var(--color-blue)] group-hover:text-[var(--color-navy)] transition-colors">
                     Learn More <ChevronRight size={16} className="ml-1" />
                   </div>
                 </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href={`/${locale}/insurance/solutions`}
                className="inline-flex items-center text-[14px] font-bold text-[var(--color-navy)] border-b-2 border-[var(--color-blue)] pb-1 hover:text-[var(--color-blue)] transition-colors"
              >
                View All Coverage Plans
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US (Split Section) */}
        <section className="py-[120px] bg-white border-y border-[rgba(11,27,61,0.05)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-square relative rounded-[16px] overflow-hidden bg-[var(--color-navy)] shadow-2xl">
                  <img src="/images/whole%20life.png" alt="Multi-generational family and whole life protection" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/80 to-[var(--color-blue)]/20 mix-blend-multiply" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[12px] shadow-[0_30px_60px_rgba(11,27,61,0.12)] max-w-[240px] hidden md:block border border-[rgba(11,27,61,0.05)]">
                  <Award className="text-[var(--color-blue)] mb-3" size={32} />
                  <p className="text-[16px] font-bold text-[var(--color-navy)] leading-tight">
                    Award-Winning Customer Priority
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-[12px] tracking-[0.12em] font-semibold text-[var(--color-blue)] mb-3">The eawestern difference</div>
                <h2 className="text-[36px] md:text-[44px] text-[var(--color-navy)] font-bold mb-6 leading-tight">
                  Clear Policies. Real Support.
                </h2>
                <p className="text-[16px] text-[var(--color-charcoal)]/70 leading-[1.7] mb-8">
                  Insurance should be straightforward. We simplify policy selection, explain every detail clearly, and actively support you when it matters most-during a claim.
                </p>
                <div className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-4">What You Can Expect</div>

                <ul className="space-y-5">
                   {[
                     'Clear Policy Guidance',
                     'Fast Claims Support',
                     'Personal Account Management',
                     'Flexible Coverage Options'
                   ].map((item, idx) => (
                     <li key={idx} className="flex items-start">
                       <CheckCircle2 color="var(--color-green)" className="mr-3 flex-shrink-0 mt-[2px]" size={20} />
                       <span className="text-[15px] text-[var(--color-navy)] font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-[100px] bg-[var(--color-navy)] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="absolute w-[500px] h-[500px] bg-[var(--color-blue)] rounded-full blur-[100px] -top-40 -left-40 mix-blend-screen"></div>
             <div className="absolute w-[500px] h-[500px] bg-[var(--color-blue)] rounded-full blur-[100px] -bottom-40 -right-40 mix-blend-screen"></div>
          </div>

          <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
            <h2 className="text-[36px] md:text-[48px] text-white font-bold mb-6">Ready to secure your future?</h2>
            <p className="text-[16px] text-white/70 mb-10 max-w-[600px] mx-auto">
              Tell us what you need, and we will provide a clear, tailored insurance solution-without unnecessary complexity.
            </p>
            <div className="flex justify-center">
              <Link
                href={`/${locale}/insurance/contact`}
                className="bg-[var(--color-blue)] text-white px-[40px] py-[18px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-[var(--color-navy)] transition-colors rounded-[4px] shadow-xl"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <InsuranceFooter />
    </div>
  );
}
