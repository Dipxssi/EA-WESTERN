"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Headphones, MapPin, FileCheck, UserCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export function WhyChooseSection({ locale = 'en' }: { locale?: string }) {
  const points = [
    { title: 'Licensed & Accredited', desc: 'Fully compliant across insurance, transport, and tourism-meeting all regulatory and professional standards.', icon: Shield },
    { title: 'End-to-End Support', desc: 'From planning and bookings to on-ground logistics and claims assistance, we manage every step.', icon: Headphones },
    { title: 'Deep Regional Expertise', desc: 'Over 15 years of hands-on experience across East Africa.', icon: MapPin },
    { title: 'Transparent Processes', desc: 'Clear pricing, clear policies, and no hidden terms.', icon: FileCheck },
    { title: 'Personalized Service', desc: 'Every itinerary, policy, and mobility solution is tailored to your needs.', icon: UserCheck }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-[#ede9e1]/80 bg-[#ffffff] py-[100px] font-jost text-[#4a5568] md:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a7fa5]">
              OUR DIFFERENTIATOR
            </div>
            <h2 className="serif mb-8 text-[36px] leading-tight text-[#1a2e45] md:text-[52px]">
              Why Individuals, Families, and Businesses <span className="italic text-[#c9a96e]">Rely on Us</span>
            </h2>
            <p className="mb-10 max-w-[450px] text-lg font-light leading-relaxed">
              We are more than a service provider-we are a single, trusted partner across safaris, mobility, and insurance.
            </p>
            <p className="mb-10 max-w-[450px] text-lg font-light leading-relaxed">
              Our role is simple: to remove complexity, reduce risk, and ensure everything runs exactly as it should.
            </p>
            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2c5282] transition-colors duration-300 ease-[ease] hover:text-[#c9a96e]"
            >
              <CheckCircle2 size={18} className="text-[#c9a96e]" aria-hidden />
              The eawestern standard
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:col-span-7"
          >
            {points.map((point, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-start rounded-[10px] border border-[#ede9e1] bg-[#f7f5f0] px-6 py-7 transition-colors duration-300"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center border border-[#c9a96e] text-[#c9a96e]">
                  <point.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="serif mb-4 text-2xl text-[#1a2e45] transition-colors duration-300 group-hover:text-[#2c5282]">
                  {point.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-[#4a5568]">
                  {point.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
