"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, ThumbsUp, HelpCircle } from 'lucide-react';

export default function InsuranceClaimsPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-insurance bg-[var(--color-slate)] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full pb-[80px]">
        {/* Header */}
        <section className="bg-[var(--color-navy)] pt-[160px] pb-[80px] md:pt-[200px] md:pb-[100px] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent z-10" />
           <img src="/images/contact.png" alt="Claims Support" className="absolute inset-0 w-full h-full object-cover object-center opacity-35 mix-blend-luminosity" />
           <div className="max-w-[800px] mx-auto px-6 text-center relative z-20">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
               <div className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-4">Claims & Support</div>
               <h1 className="text-[40px] md:text-[56px] text-white font-bold mb-6 leading-tight">
                 Fast, Compassionate <br/> Claim Resolution
               </h1>
               <p className="text-[16px] text-white/70 mx-auto leading-[1.7]">
                 When the unexpected happens, we are here for you. Our streamlined claims process is designed to get your life back to normal as quickly as possible.
               </p>
             </motion.div>
           </div>
        </section>

        {/* 3 Step Process */}
        <section className="py-[100px] bg-white border-b border-[rgba(11,27,61,0.05)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] text-[var(--color-navy)] font-bold mb-4">How to File a Claim</h2>
              <div className="w-[60px] h-[4px] bg-[var(--color-blue)] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-blue)]/20 to-transparent"></div>

              {[
                { icon: FileText, title: '1. Report Incident', desc: 'Notify us online or via our 24/7 hotline. Provide basic details and any immediate documentation.' },
                { icon: Clock, title: '2. Review & Assess', desc: 'A dedicated claims specialist is assigned immediately to review and process your case without delay.' },
                { icon: ThumbsUp, title: '3. Resolution & Payout', desc: 'Once approved, payments are expedited directly to your account or chosen repair facility.' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative flex flex-col items-center text-center px-4"
                >
                  <div className="w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center border-2 border-[var(--color-blue)] mb-8 shadow-[0_10px_20px_rgba(37,99,235,0.1)] text-[var(--color-blue)] relative z-10 hover:bg-[var(--color-blue)] hover:text-white transition-colors duration-300">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[var(--color-navy)] mb-4">{step.title}</h3>
                  <p className="text-[14px] text-[var(--color-charcoal)]/70 leading-[1.7] max-w-[280px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link
                href={`/${locale}/insurance/contact`}
                className="inline-block bg-[var(--color-blue)] text-white px-[40px] py-[16px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-[var(--color-navy)] transition-colors rounded-[4px]"
              >
                Start Your Claim Online
              </Link>
            </div>
          </div>
        </section>

        {/* Support Blocks */}
        <section className="py-[100px] bg-[var(--color-slate)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-[var(--color-navy)] p-10 rounded-[12px] border border-[rgba(255,255,255,0.05)] shadow-xl text-center flex flex-col items-center">
                <div className="w-[60px] h-[60px] bg-white/10 rounded-full flex items-center justify-center text-[var(--color-blue)] mb-6">
                  <HelpCircle size={28} />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-4">Ask a Question</h3>
                <p className="text-[15px] text-white/70 mb-8 max-w-[300px]">
                  Find quick answers about required documents, processing times, and policy specifics.
                </p>
                <Link href={`/${locale}/insurance/contact`} className="bg-transparent border border-white/30 text-white px-[32px] py-[14px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white/10 transition-colors rounded-[4px]">
                  Ask a Question
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
