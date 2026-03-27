"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

type Section = {
  title: string;
  body: string[];
  bullets?: string[];
};

const philosophySections: Section[] = [
  {
    title: 'A Structured Approach to Exploration',
    body: [
      'We do not design trips randomly or rely on generic packages.',
      'Each itinerary is built around seasonal wildlife movement, travel distances and terrain, lodge positioning and accessibility, and client pace and comfort preferences.',
      'The result is a safari that feels natural, well-paced, and effortless-without unnecessary fatigue or rushed transitions.',
    ],
  },
  {
    title: 'Respect for Wildlife & Ecosystems',
    body: [
      'Wildlife experiences should never come at the expense of the environment.',
      'We operate within established conservation guidelines to protect ecological balance while delivering outstanding game viewing.',
    ],
    bullets: [
      'Responsible game viewing distances',
      'Minimal disruption to animal behavior',
      'Use of designated routes and park regulations',
    ],
  },
  {
    title: 'Partnership with Responsible Lodges',
    body: [
      'Where you stay matters as much as where you go.',
      'We work with lodges and camps that follow sustainable tourism practices, support conservation initiatives, and engage and employ local communities.',
      'This ensures your journey contributes positively to the regions you visit.',
    ],
  },
  {
    title: 'Local Expertise, Real Insight',
    body: [
      'Our safaris are led by experienced East African professionals who understand the land beyond surface-level knowledge.',
    ],
    bullets: [
      'Better wildlife tracking',
      'Smarter route adjustments',
      'Deeper cultural context',
      'Safer, more informed decision-making',
    ],
  },
  {
    title: 'Integrated Logistics, Seamless Experience',
    body: [
      'A safari involves multiple moving parts-transport, accommodation, timing, and coordination. We manage all of it internally.',
      'From airport arrival to final departure, transfers are coordinated, vehicles are prepared, schedules are aligned, and support is always available.',
      'No gaps. No confusion. No reliance on disconnected providers.',
    ],
  },
  {
    title: 'Responsible Travel, Without Compromise',
    body: [
      'We believe sustainability and comfort can coexist.',
    ],
    bullets: [
      'Efficient routing to reduce unnecessary travel',
      'Use of well-maintained, compliant vehicles',
      'Support for eco-conscious partners',
      'Respect for local cultures and communities',
    ],
  },
  {
    title: 'Designed Around You',
    body: [
      'No two travelers are the same. Whether you are visiting for the first time, returning for a deeper exploration, or traveling as a family or corporate group, we adapt every detail to match your expectations, pace, and priorities.',
    ],
  },
];

export default function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-safari bg-[var(--color-cream)] text-[#333] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-terracotta)] selection:text-[var(--color-cream)]">
      <SafariNavigation locale={locale} />

      <main className="w-full">
        <section className="relative w-full overflow-hidden bg-[var(--color-deep-green)] pb-[100px] pt-[110px] md:pt-[130px]">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[var(--color-deep-green)] to-[#0A2E0A]">
            <img src="/images/tour1.jpg" alt="Safari Experience" className="w-full h-full object-cover opacity-45 mix-blend-luminosity" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-deep-green)]/70 to-[var(--color-cream)]" />
            <div className="absolute inset-0 bg-[var(--color-gold)]/15 mix-blend-overlay" />
          </div>

          <div className="relative z-10 max-w-[950px] mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-[1px] w-[30px] bg-[var(--color-gold)]"></div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-gold)] font-sans font-medium">Philosophy</div>
              <div className="h-[1px] w-[30px] bg-[var(--color-gold)]"></div>
            </div>
            <h1 className="font-playfair text-[42px] md:text-[62px] text-white leading-[1.1] mb-4">The Eawestern Safari Philosophy</h1>
            <p className="font-sans text-[17px] text-white/85 max-w-[620px] mx-auto leading-[1.8] font-light mb-6">
              Designed with Purpose. Delivered with Precision.
            </p>
            <p className="font-sans text-[15px] text-white/80 max-w-[760px] mx-auto leading-[1.8] font-light">
              A safari is more than a journey-it is a carefully structured experience that connects people, landscapes, and wildlife in a
              meaningful way.
            </p>
          </div>
        </section>

        <section className="py-[90px] px-6 md:px-10 max-w-[1100px] mx-auto w-full">
          <div className="space-y-14">
            <div className="space-y-5">
              <p className="font-sans text-[15px] text-[#6a5040] leading-[1.9] font-light">
                At EA Western, we approach every safari with intention. Every route, lodge, and game drive is selected based on timing, terrain,
                and overall flow-ensuring a seamless and rewarding experience from start to finish.
              </p>
            </div>

            {philosophySections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border-t border-black/8 pt-8"
              >
                <h2 className="font-playfair text-[30px] md:text-[38px] text-[var(--color-deep-green)] leading-tight mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.body.map((p) => (
                    <p key={p} className="font-sans text-[15px] text-[#6a5040] leading-[1.9] font-light">
                      {p}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="pt-5 space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-[var(--color-terracotta)] flex-shrink-0" />
                        <span className="font-sans text-[15px] text-[#6a5040] leading-[1.8] font-light">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-black/8 rounded-[8px] p-8 md:p-10"
            >
              <Compass className="text-[var(--color-terracotta)] mb-5" size={32} strokeWidth={1.2} />
              <h3 className="font-playfair text-[28px] md:text-[34px] text-[var(--color-deep-green)] mb-4">The Outcome</h3>
              <ul className="space-y-2 mb-8">
                {['Well-structured', 'Seamlessly executed', 'Environmentally responsible', 'Personally meaningful'].map((item) => (
                  <li key={item} className="font-sans text-[15px] text-[#6a5040] leading-[1.8] font-light">
                    - {item}
                  </li>
                ))}
              </ul>
              <h4 className="font-playfair text-[24px] text-[var(--color-deep-green)] mb-2">Begin Your Journey</h4>
              <p className="font-sans text-[15px] text-[#6a5040] leading-[1.8] font-light mb-6">
                Let us design a safari that reflects not just where you want to go-but how you want to experience it.
              </p>
              <Link
                href={`/${locale}/safaris/contact`}
                className="inline-block bg-[var(--color-deep-green)] border border-[var(--color-gold)] text-[var(--color-gold)] px-[34px] py-[14px] text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] transition-all duration-700"
              >
                Request a Consultation
              </Link>
            </motion.div>

            <div className="bg-[var(--color-deep-green)] text-[var(--color-cream)] rounded-[8px] p-6 md:p-8">
              <h3 className="font-playfair text-[30px] mb-4">What This Means for You</h3>
              <div className="flex flex-wrap gap-3">
                <span className="border border-[var(--color-gold)]/40 px-4 py-2 text-[11px] uppercase tracking-[0.14em]">Better wildlife sightings</span>
                <span className="border border-[var(--color-gold)]/40 px-4 py-2 text-[11px] uppercase tracking-[0.14em]">Less travel fatigue</span>
                <span className="border border-[var(--color-gold)]/40 px-4 py-2 text-[11px] uppercase tracking-[0.14em]">Reliable logistics</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SafariFooter />
    </div>
  );
}
