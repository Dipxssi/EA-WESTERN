"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartPulse, 
  Car, 
  Home, 
  Briefcase, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  ShieldAlert,
  Users,
  ChevronRight,
  Info
} from 'lucide-react';

export const insuranceData = {
  'health-wellness': {
    title: 'Health & Wellness',
    category: 'Personal Insurance',
    tagline: 'Care without limits',
    icon: HeartPulse,
    color: 'from-blue-400 to-blue-600',
    desc: 'Access reliable, high-quality healthcare coverage with plans tailored for individuals and families. We believe that health is your greatest wealth, which is why our plans offer comprehensive protection for you and your loved ones.',
    image: '/images/insurancebg.png',
    benefits: [
      'Local & International coverage networks',
      'Comprehensive Inpatient & Outpatient options',
      'Maternity, Optical & Dental care modules',
      '24/7 Telemedicine and medical support',
      'No-claim bonuses and wellness programs'
    ],
    details: 'Our health and wellness plans are designed to give you peace of mind, knowing that you can access the best medical care whenever you need it, without worrying about exorbitant out-of-pocket expenses.'
  },
  'life-legacy': {
    title: 'Life & Legacy',
    category: 'Personal Insurance',
    tagline: 'Securing generations',
    icon: ShieldCheck,
    color: 'from-indigo-400 to-indigo-600',
    desc: 'Protect what matters most with structured life insurance solutions designed for long-term security. Ensure your family\'s financial stability even when you are no longer around.',
    image: '/images/whole%20life.png',
    benefits: [
      'Flexible Term & Whole life options',
      'Fixed and predictable premium structures',
      'Critical illness and disability coverage',
      'Education and legacy planning components',
      'Immediate cash advance for funeral expenses'
    ],
    details: 'Life insurance is more than just a policy; it is a profound act of love and responsibility. We help you design a safety net that guarantees your family\'s standard of living and future aspirations.'
  },
  'motor-travel': {
    title: 'Motor & Travel',
    category: 'Personal Insurance',
    tagline: 'Protection on the move',
    icon: Car,
    color: 'from-cyan-400 to-cyan-600',
    desc: 'Stay protected on the road and across borders with comprehensive motor and travel insurance. Whether commuting locally or exploring globally, we cover your journey.',
    image: '/images/insurancebg.png',
    benefits: [
      'Comprehensive & Third-party liability options',
      '24/7 Roadside assistance and towing',
      'Global travel protection including medical emergencies',
      'Flight cancellation and lost baggage cover',
      'Efficient, hassle-free claims processing'
    ],
    details: 'Navigate life\'s journeys with confidence. Our motor insurance covers physical damage, theft, and liability, while our travel insurance ensures you are never stranded far from home.'
  },
  'corporate-health': {
    title: 'Corporate Health',
    category: 'Business Solutions',
    tagline: 'Empowering your workforce',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    desc: 'Wellness programs and medical covers designed for modern workforces. A healthy team is a productive team, and our corporate plans reflect this philosophy.',
    image: '/images/contact.png',
    benefits: [
      'Tailored group medical schemes',
      'Preventative wellness and mental health programs',
      'Optical & Dental add-on flexibility',
      'Dedicated account management',
      'Seamless onboarding and claims for employees'
    ],
    details: 'Attract and retain top talent by offering unparalleled health benefits. We customize our corporate health solutions to fit your company size, culture, and budget.'
  },
  'professional-liability': {
    title: 'Professional Liability',
    category: 'Business Solutions',
    tagline: 'Protecting your expertise',
    icon: ShieldAlert,
    color: 'from-slate-600 to-slate-800',
    desc: 'Protect your professional reputation and business against legal liabilities, errors, and omissions. Operate with the confidence that your expertise is safeguarded.',
    image: '/images/contact.png',
    benefits: [
      'Comprehensive Professional Indemnity',
      'Public Liability and Third-party injury cover',
      'Directors & Officers (D&O) Liability',
      'Coverage for legal defense costs',
      'Cyber liability and data breach protection'
    ],
    details: 'Mistakes happen, but they shouldn\'t bankrupt your business. Our liability covers defend you against negligence claims and ensure your business operations remain uninterrupted.'
  },
  'business-assets': {
    title: 'Business Assets',
    category: 'Business Solutions',
    tagline: 'Securing your foundation',
    icon: Home,
    color: 'from-emerald-500 to-teal-600',
    desc: 'Coverage for your office, inventory, machinery, and physical business infrastructure against unforeseen disasters and theft.',
    image: '/images/insurancebg.png',
    benefits: [
      'Fire & Special Perils insurance',
      'Burglary and theft coverage',
      'Business interruption and loss of profit',
      'Machinery breakdown and electronic equipment cover',
      'Goods in transit protection'
    ],
    details: 'Your physical assets form the backbone of your operations. We provide robust property insurance that helps you rebuild and recover quickly after a catastrophic event.'
  }
};

export type InsuranceType = keyof typeof insuranceData;

export default function IndividualSolutionClient({ locale, type }: { locale: string; type: string }) {
  const data = insuranceData[type as InsuranceType];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <Link href={`/${locale}/insurance/solutions`} className="text-blue-600 hover:underline">
          Return to Solutions
        </Link>
      </div>
    );
  }

  const Icon = data.icon;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <div className="theme-insurance bg-[#FAFAFA] text-[var(--color-charcoal)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-blue)] selection:text-white">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full pt-20">
        {/* HERO SECTION */}
        <section className="relative w-full py-20 md:py-32 bg-[var(--color-navy)] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 bg-[var(--color-navy)]">
             <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
             <div className={`absolute inset-0 bg-gradient-to-br ${data.color} mix-blend-multiply opacity-60`}></div>
             <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/80 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
              <Link href={`/${locale}/insurance/solutions`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors">
                <ArrowRight size={16} className="rotate-180" /> Back to all solutions
              </Link>
              
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                 <div className={`w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-3xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white shadow-2xl`}>
                    <Icon size={40} />
                 </div>
                 <div>
                    <div className="text-[var(--color-blue)] font-bold text-xs uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                       {data.category} <ChevronRight size={12} /> {data.tagline}
                    </div>
                    <h1 className="text-4xl md:text-6xl text-white font-bold font-playfair tracking-tight">
                       {data.title}
                    </h1>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-24 relative bg-white">
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Details */}
              <div className="lg:col-span-7">
                 <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1}>
                    <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-6 font-playfair">Overview</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                       {data.desc}
                    </p>
                    <p className="text-slate-500 leading-relaxed mb-12">
                       {data.details}
                    </p>
                    
                    <h3 className="text-2xl font-bold text-[var(--color-navy)] mb-8 font-playfair flex items-center gap-3">
                       Key Benefits
                    </h3>
                    <div className="space-y-4 mb-12">
                       {data.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-[var(--color-blue)]/30 hover:bg-blue-50/50 transition-colors">
                             <div className="mt-0.5 w-6 h-6 rounded-full bg-[var(--color-blue)]/10 flex items-center justify-center text-[var(--color-blue)] shrink-0 group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors">
                                <Check size={14} />
                             </div>
                             <span className="text-slate-700 font-medium">{benefit}</span>
                          </div>
                       ))}
                    </div>
                 </motion.div>
              </div>

              {/* Right Column: Sticky Sidebar */}
              <div className="lg:col-span-5 relative">
                 <motion.div 
                   initial="hidden" animate="visible" variants={fadeInUp} custom={2}
                   className="sticky top-32 rounded-[32px] bg-slate-50 border border-slate-100 p-8 shadow-xl"
                 >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative">
                       <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                       <div className={`absolute inset-0 bg-gradient-to-t ${data.color} mix-blend-multiply opacity-40`}></div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-[var(--color-navy)] mb-4">Secure your future today</h4>
                    <p className="text-slate-500 text-sm mb-8">Speak to one of our expert advisors to tailor a {data.title.toLowerCase()} policy specifically to your needs.</p>
                    
                    <Link 
                      href={`/${locale}/insurance/contact`}
                      className="w-full bg-[var(--color-blue)] hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 group mb-4"
                    >
                       Request a Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-medium">
                       <Info size={14} /> No commitment required for consultation.
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
           <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-10`}></div>
           <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Need more clarification?</h2>
              <p className="text-white/70 text-lg mb-10">Our dedicated support team is available to answer any questions you have regarding our {data.title} coverage options.</p>
              <a 
                href="tel:+254700000000"
                className="bg-white text-[var(--color-navy)] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-3 shadow-xl"
              >
                 <PhoneCall size={18} /> Call us: +254 700 000 000
              </a>
           </div>
        </section>
      </main>

      <InsuranceFooter />
    </div>
  );
}
