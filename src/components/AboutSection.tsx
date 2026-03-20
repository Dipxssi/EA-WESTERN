"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AboutSection({ locale = 'en' }: { locale?: string }) {
  return (
    <section className="py-[120px] md:py-[180px] bg-[#0B1F2E] text-white font-jost overflow-hidden border-t border-[var(--color-gold)]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="uppercase-label mb-8">
              The EA Western Narrative
            </div>
            
            <h2 className="serif text-[36px] md:text-[56px] leading-[1.1] mb-10 text-white">
              Architecting <span className="italic block font-light text-[var(--color-gold)]">Absolute Precision</span>
            </h2>
            
            <div className="space-y-8 text-lg text-white/50 font-light leading-relaxed max-w-[500px]">
              <p>
                EA Western was born from a singular vision: to unify the fragmented landscape of regional luxury travel, vehicle logistics, and corporate assurance into one high-performance collective.
              </p>
              <p>
                We do not settle for standard. Our operations are governed by a commitment to architectural precision—whether we are mapping a remote wilderness expedition or structuring complex corporate leasing and insurance protocols.
              </p>
            </div>

            <div className="mt-14 flex items-center gap-10">
              <Link 
                href={`/${locale}/about`}
                className="group flex items-center gap-4 no-underline"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)] group-hover:text-white transition-colors duration-500">
                  Read Our Legacy
                </span>
                <div className="w-12 h-[1px] bg-[var(--color-gold)]/30 group-hover:w-20 group-hover:bg-[var(--color-gold)] transition-all duration-700"></div>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-[var(--color-gold)]/20">
              <img 
                src="/images/promise.png" 
                alt="EA Western Narrative" 
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
            </div>
            {/* Editorial Label Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-[#0F2A3D] border border-[var(--color-gold)]/20 p-8 hidden md:block max-w-[200px]">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2 font-medium">Vol. 15</div>
              <div className="serif italic text-white text-xl leading-tight">East African Mastery since 2010.</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
