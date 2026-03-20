"use client";

import { motion } from 'framer-motion';
import { Shield, Headphones, MapPin, FileCheck, UserCheck, CheckCircle2 } from 'lucide-react';

export function WhyChooseSection() {
  const points = [
    { title: 'Licensed & Accredited', desc: 'Fully compliant operations under NTSA and stringent corporate travel standards.', icon: Shield },
    { title: 'End-to-End Support', desc: 'From initial travel logistics mapping to in-house claims processing, we stand with you.', icon: Headphones },
    { title: 'Deep Regional Expertise', desc: 'Decades of on-the-ground intelligence across East African terrains.', icon: MapPin },
    { title: 'Transparent Processes', desc: 'Zero hidden fees. Zero guesswork. Absolute clarity on every quote.', icon: FileCheck },
    { title: 'Personalized Service', desc: 'Tailor-made itineraries and custom corporate leasing structures.', icon: UserCheck }
  ];

  return (
    <section className="py-[120px] md:py-[180px] bg-[#0B1F2E] text-white font-jost border-t border-[var(--color-gold)]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Headline Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="uppercase-label mb-6">
              Our Differentiator
            </div>
            <h2 className="serif text-[36px] md:text-[52px] text-white leading-tight mb-8">
              Why Leaders <span className="italic text-[var(--color-gold)]">Choose Us</span>
            </h2>
            <p className="text-lg text-white/70 font-light leading-relaxed max-w-[450px] mb-10">
              We are not just a vendor; we are a strategic partner. We secure your assets, facilitate your extraordinary experiences, and mobilize your teams with zero friction.
            </p>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-medium text-[var(--color-gold)]">
              <CheckCircle2 size={18} className="text-[var(--color-gold)]" /> The EA Western Standard
            </div>
          </motion.div>

          {/* Grid Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
          >
            {points.map((point, idx) => (
              <div key={idx} className="group flex flex-col items-start bg-[#0F2A3D] border border-white/5 p-10 transition-all duration-700 hover:border-[var(--color-gold)]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="w-14 h-14 border border-[var(--color-gold)]/20 text-[var(--color-gold)] flex items-center justify-center mb-7 group-hover:bg-[var(--color-gold)] group-hover:text-[#0B1F2E] transition-all duration-700">
                  <point.icon size={26} />
                </div>
                <h3 className="serif text-2xl text-white mb-4 transition-colors group-hover:text-[var(--color-gold)]">
                  {point.title}
                </h3>
                <p className="text-sm text-[rgba(240,235,227,0.55)] leading-relaxed font-light">
                  {point.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
