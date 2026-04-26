"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Clock, 
  HelpCircle, 
  PhoneCall, 
  ShieldCheck, 
  FileCheck,
  ChevronDown,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function InsuranceClaimsPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const faqs = [
    { q: "What should I do immediately after an accident?", a: "Ensure everyone's safety first. Contact emergency services if needed, then call our 24/7 hotline to report the incident and get immediate guidance on next steps." },
    { q: "How long does it take to process a claim?", a: "While timelines vary by claim type, we aim to complete the initial assessment within 48 hours. Most straightforward claims are settled within 7-14 business days." },
    { q: "Which documents are essential for filing?", a: "Standard requirements include a filled claim form, a police report (for accidents/theft), and relevant invoices or receipts. Specific plans may require additional documentation." }
  ];

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

  return (
    <div className="theme-insurance bg-[var(--color-slate)] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full">
        {/* PREMIUM CLAIMS HERO */}
        <section className="relative w-full min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--color-navy)]">
          <div className="absolute inset-0 opacity-40">
             <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-navy)]/90 to-transparent z-10"></div>
             <img src="/images/contact.png" alt="Claims Support" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
                <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-[0.3em] mb-6">Claims & Support</div>
                <h1 className="text-[48px] md:text-[68px] text-white font-bold mb-8 leading-[1.1] font-playfair">
                  Fast, Compassionate <br /> <span className="italic !text-white font-normal">Resolution.</span>
                </h1>
                <p className="text-white/60 text-lg max-w-xl mb-12">
                  When the unexpected happens, eawestern is your advocate. Our dedicated claims team works tirelessly to ensure your payouts are fair, fast, and effortless.
                </p>
                <div className="flex flex-wrap gap-5">
                   <Link
                     href={`/${locale}/insurance/contact`}
                     className="bg-[var(--color-blue)] text-white px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-[var(--color-navy)] transition-all shadow-xl shadow-[var(--color-blue)]/20"
                   >
                     File a Claim Now <ArrowRight size={20} />
                   </Link>
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="hidden lg:block relative"
             >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-10 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-blue)]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                   
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-full bg-[var(--color-blue)]/20 text-[var(--color-blue)] flex items-center justify-center">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                         <div className="text-white font-bold text-lg">Active Advocacy</div>
                         <div className="text-white/40 text-sm">We handle the paperwork, you focus on recovery.</div>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <Clock size={18} className="text-[var(--color-blue)]" />
                            <span className="text-white text-sm font-bold">24/7 Hotline Access</span>
                         </div>
                        <span className="text-[var(--color-blue)] text-xs font-bold uppercase tracking-widest">Active</span>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <FileCheck size={18} className="text-[var(--color-blue)]" />
                            <span className="text-white text-sm font-bold">Digital Submission</span>
                         </div>
                        <span className="text-[var(--color-blue)] text-xs font-bold uppercase tracking-widest">Available</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </section>

        {/* CLAIMS PROCESS TIMELINE */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <div className="text-center mb-20">
                 <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Methodology</div>
                 <h2 className="text-[40px] md:text-[52px] font-bold text-[var(--color-navy)] font-playfair">3 Steps to Resolution</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                 {/* Connecting Line */}
                 <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-slate-100">
                    <div className="h-full bg-gradient-to-r from-transparent via-[var(--color-blue)] to-transparent opacity-30"></div>
                 </div>

                 {[
                   { 
                    icon: PhoneCall, 
                     title: 'Step 1: Report', 
                     desc: 'Notify us via our 24/7 emergency line or our online portal within 24 hours of the incident.',
                    color: 'text-[var(--color-blue)] bg-[var(--color-blue)]/10'
                   },
                   { 
                     icon: FileCheck, 
                     title: 'Step 2: Validate', 
                     desc: 'Our specialists review your documents and coordinate with adjusters to validate your claim rapidly.',
                    color: 'text-[var(--color-blue)] bg-[var(--color-blue)]/10'
                   },
                   { 
                    icon: ShieldCheck, 
                     title: 'Step 3: Settle', 
                     desc: 'Once approved, we expedite your payment directly, helping you recover and rebuild immediately.',
                    color: 'text-[var(--color-blue)] bg-[var(--color-blue)]/10'
                   }
                 ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 }}
                      className="relative flex flex-col items-center text-center px-4"
                    >
                       <div className={`w-28 h-28 rounded-full ${item.color} flex items-center justify-center mb-8 shadow-xl relative z-10 border-4 border-white transition-transform hover:scale-110`}>
                          <item.icon size={36} />
                       </div>
                       <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-4">{item.title}</h3>
                       <p className="text-slate-500 text-sm leading-relaxed max-w-[300px]">{item.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* DOCUMENT CHECKLIST SECTION */}
        <section className="py-24 bg-[var(--color-slate)]">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                    <img src="/images/insurancebg.png" alt="Checklist" className="w-full h-full object-cover" />
                 </div>
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-blue)]/10 rounded-full blur-3xl"></div>
              </div>
              
              <div>
                 <div className="text-[var(--color-blue)] font-bold text-sm uppercase tracking-widest mb-4">Preparation is key</div>
                 <h2 className="text-[40px] font-bold text-[var(--color-navy)] font-playfair mb-8">What You Will Need</h2>
                 <p className="text-slate-500 text-lg mb-10">To ensure the fastest possible turnaround, please have the following documents ready when filing your claim:</p>
                 
                 <div className="space-y-4">
                    {[
                      'Completed & Signed Claim Form',
                      'Original Police Abstract (for Motor/Theft)',
                      'Detailed Invoices & Receipts',
                      'Copy of National ID / Passport',
                      'Relevant Photographic Evidence'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-[16px] shadow-sm border border-slate-50">
                         <div className="w-6 h-6 rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)] flex items-center justify-center shrink-0">
                            <FileCheck size={14} strokeWidth={2.5} />
                          </div>
                          <span className="font-bold text-[var(--color-navy)]">{item}</span>
                       </div>
                    ))}
                 </div>
                 
                <div className="mt-12 bg-white p-8 rounded-[24px] border-l-4 border-[var(--color-blue)] shadow-lg">
                    <div className="flex gap-4">
                      <Clock className="text-[var(--color-blue)] shrink-0" size={24} />
                       <div>
                          <div className="font-bold text-[var(--color-navy)] mb-1">Time Sensitivity Notice</div>
                          <p className="text-sm text-slate-500">Most policies require incident reporting within 24-48 hours. Delayed reporting may impact claim processing speed.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* EMERGENCY SUPPORT SECTION */}
        <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
           <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--color-blue)_0%,_transparent_60%)]"></div>
           </div>
           
           <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
              <div className="w-20 h-20 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-8 animate-pulse">
                 <PhoneCall size={36} />
              </div>
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-playfair">Emergency Assistance</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
                 Facing an immediate crisis? Our emergency claims response team is available 24 hours a day, 7 days a week, 365 days a year.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                 <div className="bg-white/5 border border-white/10 px-10 py-8 rounded-[24px] backdrop-blur-md">
                    <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-2">Primary Emergency Line</div>
                    <div className="text-3xl text-white font-bold">+254 751 216 699</div>
                 </div>
                 <div className="bg-white/5 border border-white/10 px-10 py-8 rounded-[24px] backdrop-blur-md">
                    <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-2">Claims Support Email</div>
                    <div className="text-3xl text-white font-bold">info@eawestern.com</div>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 bg-white">
           <div className="max-w-[800px] mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-[var(--color-navy)] font-playfair">Common Questions</h2>
                 <p className="text-slate-500 mt-4">Everything you need to know about the eawestern claims experience.</p>
              </div>
              
              <div className="space-y-4">
                 {faqs.map((faq, i) => (
                    <div key={i} className="border border-slate-100 rounded-[20px] overflow-hidden">
                       <button 
                         onClick={() => setOpenFaq(openFaq === i ? null : i)}
                         className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                       >
                          <span className="font-bold text-[var(--color-navy)]">{faq.q}</span>
                          <ChevronDown className={`text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                       </button>
                       {openFaq === i && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="px-6 pb-6 text-slate-500 text-sm leading-relaxed"
                          >
                             {faq.a}
                          </motion.div>
                       )}
                    </div>
                 ))}
              </div>
              
              <div className="mt-16 bg-[var(--color-slate)] p-10 rounded-[32px] text-center">
                 <h4 className="text-xl font-bold text-[var(--color-navy)] mb-4">Still have questions?</h4>
                 <p className="text-slate-500 mb-8">Our advisors are available to guide you through the specifics of your policy.</p>
                 <Link 
                   href={`/${locale}/insurance/contact`}
                   className="inline-flex items-center gap-2 bg-[var(--color-navy)] text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-blue)] transition-colors"
                 >
                    <HelpCircle size={18} /> Visit Help Center
                 </Link>
              </div>
           </div>
        </section>
      </main>

      <InsuranceFooter />
    </div>
  );
}
