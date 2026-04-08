"use client";

import { motion } from 'framer-motion';
import { Route, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';

export function WhatYouGetSection() {
  const benefits = [
    {
      title: 'Seamless Adventure',
      description: 'Your itinerary, logistics, and ground transport are managed by a single, expert team. No gaps. No delays.',
      icon: Route
    },
    {
      title: 'Total Assurance',
      description: 'We don\'t just recommend insurance; we are the licensed experts managing your policies and advocating for your claims.',
      icon: ShieldCheck
    },
    {
      title: 'Local Authority',
      description: '15+ years of East African expertise, giving you the best rates, best routes, and deepest insight.',
      icon: Award
    }
  ];

  return (
    <section className="pt-[56px] pb-[80px] md:pt-[80px] md:pb-[120px] bg-[#0B1F2E] text-white font-jost overflow-hidden border-t border-[var(--color-gold)]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="text-center mb-12 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase-label mb-6"
          >
            The Client Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="serif text-[36px] md:text-[52px] text-white leading-tight"
          >
            What You <span className="italic text-[var(--color-gold)]">Get</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-28">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.19, 1, 0.22, 1] }}
              className="bg-[#0F2A3D] border border-white/5 p-12 flex flex-col items-center text-center transition-all duration-700 hover:border-[var(--color-gold)]/30"
            >
              <div className="w-[70px] h-[70px] border border-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] mb-10 transition-all duration-700 group-hover:rotate-6">
                <benefit.icon size={32} />
              </div>
              <h3 className="serif text-2xl text-white mb-5 transition-colors group-hover:text-[var(--color-gold)]">
                {benefit.title}
              </h3>
              <p className="text-base text-white/50 leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative border border-[var(--color-gold)]/20 bg-[#0F2A3D] text-white p-16 md:p-24 text-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[var(--color-gold)]/40" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[var(--color-gold)]/40" />
          
          <div className="relative z-10 max-w-[800px] mx-auto">
            <h3 className="serif text-[32px] md:text-[48px] leading-tight mb-8">
              Ready to Experience the <span className="italic">eawestern difference?</span>
            </h3>
            <div className="w-[100px] h-[1px] bg-[var(--color-gold)] mx-auto mb-10" />
            <p className="text-lg text-[rgba(240,235,227,0.55)] mb-14 font-light leading-relaxed">
              Join the thousands of clients who choose guaranteed excellence over settling for less. Our experts craft your next adventure, secure your legacy, and manage every detail of your travel or corporate logistics.
            </p>
            <Link 
              href="/en/contact"
              className="inline-block bg-[var(--color-gold)] text-[#0B1F2E] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] transition-all duration-700 hover:bg-[var(--color-gold-light)] hover:-translate-y-1"
        >
              Contact Us Today →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
