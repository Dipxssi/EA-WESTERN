"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function AboutSection({ locale = 'en' }: { locale?: string }) {
  return (
    <motion.section
      {...fade}
      className="border-t border-[#ede9e1]/80 bg-[#f7f5f0] py-[100px] font-jost text-[#4a5568] md:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 border-l-[3px] border-[#c9a96e] pl-[10px]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a7fa5]">
                The eawestern narrative
              </div>
            </div>

            <h2 className="serif mb-10 text-[36px] leading-[1.1] text-[#1a2e45] md:text-[56px]">
              Built on Precision.{' '}
              <span className="block font-light italic text-[#c9a96e]">Driven by Experience.</span>
            </h2>

            <div className="max-w-[500px] space-y-8 text-lg font-light leading-relaxed">
              <p>
                eawestern was founded to simplify how individuals and businesses experience travel, transport, and insurance across East Africa.
              </p>
              <p>
                Instead of dealing with multiple providers, our clients rely on one trusted team to plan, manage, and support every detail-from safari logistics to vehicle coordination and insurance coverage.
              </p>
              <p>
                With over a decade of regional experience, we focus on delivering seamless, reliable solutions that remove complexity and give you complete peace of mind.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-10">
              <Link
                href={`/${locale}/about`}
                className="group flex items-center gap-4 no-underline transition-all duration-300 ease-[ease]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#2c5282] transition-colors duration-300 group-hover:text-[#c9a96e]">
                  Read Our Story →
                </span>
                <div className="h-[1px] w-12 bg-[#c9a96e]/35 transition-all duration-300 group-hover:w-20 group-hover:bg-[#c9a96e]" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[12px] shadow-[0_8px_32px_rgba(30,58,95,0.12)]">
              <img
                src="/images/promise.png"
                alt="eawestern narrative"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden max-w-[240px] rounded-[8px] bg-[#1e3a5f] p-8 shadow-lg md:block">
              <div className="text-[13px] font-medium uppercase tracking-[0.2em] leading-snug">
                <span className="text-[#c9a96e]">15+</span>{' '}
                <span className="text-[#e8edf2]">Years of East African Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
