"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ContactBlockSection({ locale = 'en' }: { locale?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center overflow-hidden border-t border-[#ede9e1]/80 bg-[#f7f5f0] py-[100px] font-jost md:py-[100px]"
    >
      <div className="relative z-10 mx-auto max-w-[850px] px-6 text-center">
        <div className="mb-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a7fa5]">
          Global Operations
        </div>
        <h2 className="serif mb-10 text-[36px] leading-[1.1] text-[#1a2e45] md:text-[62px]">
          We Are Ready to Support{' '}
          <span className="mt-2 block font-light italic text-[#c9a96e]">Your Journey</span>
        </h2>
        <p className="mx-auto mb-14 max-w-[650px] text-lg font-light leading-relaxed text-[#4a5568] md:text-xl">
          Whether you're planning a safari, arranging transport, or securing insurance-our team is ready to assist you.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-block rounded-[4px] border-[1.5px] border-[#1e3a5f] bg-transparent px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1e3a5f] transition-all duration-300 ease-[ease] hover:bg-[#1e3a5f] hover:text-[#ffffff]"
        >
          Speak to Our Team
        </Link>
      </div>
    </motion.section>
  );
}
