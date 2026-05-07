"use client";

import { motion } from 'framer-motion';
import { Route, ShieldCheck, Award } from 'lucide-react';
import Link from 'next/link';

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function WhatYouGetSection({ locale = 'en' }: { locale?: string }) {
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
    <motion.section
      {...fade}
      className="border-t border-[#ede9e1]/80 bg-[#f7f5f0] py-[100px] font-jost text-[#4a5568] md:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a7fa5]"
          >
            The Client Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="serif text-[36px] leading-tight text-[#1a2e45] md:text-[52px]"
          >
            What You <span className="italic text-[#c9a96e]">Get</span>
          </motion.h2>
        </div>

        <div className="mb-28 grid grid-cols-1 gap-10 md:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center rounded-[12px] border border-[#ede9e1] bg-[#ffffff] px-7 py-9 text-center shadow-[0_4px_16px_rgba(30,58,95,0.07)] transition-all duration-300 ease-[ease] hover:border-[#4a7fa5] hover:shadow-[0_8px_28px_rgba(30,58,95,0.12)]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#c9a96e] text-[#c9a96e]">
                <benefit.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="serif mb-5 text-[20px] text-[#1a2e45]">
                {benefit.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-[#4a5568]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[12px] border border-[#ede9e1] bg-[#ffffff] p-14 text-center shadow-[0_4px_16px_rgba(30,58,95,0.07)] md:p-24"
        >
          <div
            className="pointer-events-none absolute inset-5 rounded-[8px] border border-[rgba(201,169,110,0.35)] md:inset-5"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-[800px]">
            <h3 className="serif mb-8 text-[32px] leading-tight text-[#1a2e45] md:text-[48px]">
              Ready to Experience the{' '}
              <span className="italic text-[#c9a96e]">eawestern difference?</span>
            </h3>
            <div className="mx-auto mb-10 h-[1px] w-[60px] bg-[#c9a96e]" />
            <p className="mb-14 text-lg font-light leading-relaxed text-[#4a5568]">
              Join the thousands of clients who choose guaranteed excellence over settling for less. Our experts craft your next adventure, secure your legacy, and manage every detail of your travel or corporate logistics.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-[4px] bg-[#c9a96e] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1e3a5f] shadow-md transition-all duration-300 ease-[ease] hover:bg-[#a8823d]"
            >
              Contact Us Today →
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
