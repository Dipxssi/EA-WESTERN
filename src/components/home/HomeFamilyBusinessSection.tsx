"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

const bullets = [
  "Personalized planning and clear advice",
  "Free consultations to scope safaris, cover, or fleet needs",
  "Clients at the centre of how we design every engagement",
];

export function HomeFamilyBusinessSection({ locale = "en" }: { locale?: string }) {
  return (
    <motion.section
      id="about-block"
      {...{
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" as const },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      }}
      className="border-t border-[#ede9e1] bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="home-broker-heading mb-3 text-[26px] leading-tight text-[#1a2e45] md:text-[32px]">
              From family trips to business mobility
            </h2>
            <p className="home-broker-heading mb-8 text-[18px] font-semibold text-[#2c5282] md:text-[19px]">
              We have you covered.
            </p>
            <ul className="mb-8 space-y-3">
              {bullets.map((line) => (
                <li
                  key={line}
                  className="home-broker-body flex gap-3 text-[15px] text-[#4a5568] md:text-[16px]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a96e]" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <p className="home-broker-body max-w-[560px] text-[15px] leading-relaxed text-[#4a5568] md:text-[16px]">
              Whatever your travel, insurance, or transport needs, we bring the expertise and regional relationships to
              deliver a single, accountable experience.
            </p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded border border-[#1e3a5f] bg-[#1e3a5f] px-8 py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#2c5282]"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Talk to us
              </Link>
              <Link
                href={`/${locale}/about`}
                className="home-broker-overline text-[#2c5282] underline decoration-[#c9a96e] decoration-2 underline-offset-4 hover:text-[#c9a96e]"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="flex items-start lg:col-span-5">
            <div className="flex w-full flex-col overflow-hidden rounded-none border border-[#dcd8cf] bg-[#f7f5f0] shadow-[0_1px_4px_rgba(30,58,95,0.05)]">
              <div className="relative aspect-[16/11] w-full max-h-[220px] shrink-0 overflow-hidden border-b border-[#e8e4dc] bg-[#ede9e1] sm:max-h-[240px] md:aspect-[16/10] md:max-h-[260px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/home.png"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col px-5 py-5 md:px-6 md:py-6">
                <p className="home-broker-overline mb-2 text-[11px] text-[#4a7fa5] md:text-[12px]">Call our team</p>
                <p className="home-broker-heading text-[19px] leading-snug text-[#1a2e45] md:text-[21px]">
                  Ready when you are
                </p>
                <p className="home-broker-body mt-2.5 text-[14px] leading-snug text-[#4a5568] md:mt-3 md:text-[15px] md:leading-relaxed">
                  Share your dates, destinations, or policy questions—we will route you to the right specialist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
