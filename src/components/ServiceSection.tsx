"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Users } from 'lucide-react';

export function ServicesSection({ locale = 'en' }: { locale?: string }) {
  const guarantees = [
    { title: 'The Platinum Standard', desc: 'Zero compromise on safety, hardware, and logistical punctuality.', icon: ShieldCheck },
    { title: 'Responsive Support', desc: '24/7 dedicated lead architects for your every operational need.', icon: Zap },
    { title: 'Regional Mastery', desc: 'Decades of intelligence across the East African terrain.', icon: Globe },
    { title: 'Elite Collective', desc: 'A team of senior specialists handling travel, auto, and insurance.', icon: Users },
  ];

  return (
    <section className="py-[120px] md:py-[180px] bg-[#0D1F3C] text-white font-jost border-t border-[var(--color-gold)]/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3A8CC4]/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase-label mb-6"
          >
            The Integrity Promise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="serif text-[36px] md:text-[52px] text-white leading-tight"
          >
            One Standard. <span className="italic text-[var(--color-gold)]">Three Portfolios.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {guarantees.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="bg-[#08172E] border border-white/5 p-10 transition-all duration-700 hover:border-[var(--color-gold)]/30 group"
            >
              <div className="w-14 h-14 border border-[var(--color-gold)]/20 text-[var(--color-gold)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-gold)] group-hover:text-[#08172E] transition-all duration-700">
                <item.icon size={26} />
              </div>
              <h3 className="serif text-2xl text-white mb-4 transition-colors group-hover:text-[var(--color-gold)]">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
