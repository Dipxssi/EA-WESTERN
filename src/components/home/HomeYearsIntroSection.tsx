"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { DiagonalYearsExperienceCollage } from "@/components/DiagonalYearsExperienceCollage";
import { SITE_CONTACT } from "@/lib/siteContact";

const bullets = [
  "Safaris, licensed brokerage, and car hire coordinated by one accountable team",
  "Consultations and comparisons with clear terms before you commit",
  "Standards and licensing you can verify—aligned with Kenyan regulators",
];

export function HomeYearsIntroSection({ locale = "en" }: { locale?: string }) {
  return (
    <motion.section
      {...{
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" as const },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      }}
      className="border-t border-[#ede9e1] bg-[#f7f5f0] py-14 md:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:gap-16 md:px-10 lg:grid-cols-2 lg:gap-16">
        <DiagonalYearsExperienceCollage />

        {/* Copy column — MIB: small grey eyebrow, serif headline, accent subline, bullets, paragraph, solid CTA + phone */}
        <div className="flex flex-col items-start text-left">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c6570] md:mb-4 md:text-[12px]">
            About eawestern
          </p>
          <h2 className="serif max-w-[540px] text-[28px] font-normal leading-[1.18] tracking-tight text-[#1a2e45] md:text-[36px] md:leading-[1.15] lg:text-[40px]">
            One accountable partner for travel and protection
          </h2>
          <p className="home-broker-heading mt-3 text-[18px] font-semibold leading-snug text-[#c9a96e] md:mt-4 md:text-[20px]">
            We have you covered!
          </p>

          <ul className="mt-8 max-w-[520px] space-y-3.5 md:mt-9 md:space-y-4">
            {bullets.map((line) => (
              <li key={line} className="flex gap-3.5">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c9a96e] text-white md:h-7 md:w-7"
                  aria-hidden
                >
                  <Check className="h-3 w-3 stroke-[3] md:h-3.5 md:w-3.5" strokeWidth={2.5} />
                </span>
                <span className="home-broker-body text-[15px] leading-relaxed text-[#4a5568] md:text-[16px]">
                  {line}
                </span>
              </li>
            ))}
          </ul>

          <p className="home-broker-body mt-8 max-w-[520px] text-[15px] leading-relaxed text-[#4a5568] md:mt-9 md:text-[16px]">
            One integrated partner for safaris, licensed insurance, and dependable mobility—so you spend less time
            coordinating vendors and more time on what matters.
          </p>

          <div className="mt-9 flex w-full max-w-[520px] flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-8 md:gap-10">
            <Link
              href={`/${locale}/about`}
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#1e3a5f] px-8 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#2c5282] sm:w-auto md:text-[13px]"
            >
              Read more
            </Link>
            <div className="flex items-center gap-3.5 sm:gap-4">
              <a
                href={`tel:${SITE_CONTACT.phoneHref}`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c9a96e] text-white shadow-sm transition-transform hover:scale-[1.03] md:h-14 md:w-14"
                aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
              >
                <Phone className="h-5 w-5 md:h-[22px] md:w-[22px]" strokeWidth={1.75} aria-hidden />
              </a>
              <div className="min-w-0">
                <a
                  href={`tel:${SITE_CONTACT.phoneHref}`}
                  className="home-broker-heading block text-[17px] font-bold leading-tight text-[#1a2e45] underline-offset-2 hover:text-[#2c5282] md:text-[19px]"
                >
                  {SITE_CONTACT.phoneDisplay}
                </a>
                <p className="mt-0.5 text-[12px] leading-snug text-[#6b7280] md:text-[13px]">
                  Call our experts / Talk to us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
