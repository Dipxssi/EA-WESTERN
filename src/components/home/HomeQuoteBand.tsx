"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HomeQuoteBand({ locale = "en" }: { locale?: string }) {
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
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto max-w-[800px] rounded-[15px] border border-[#e8e4dc] bg-white px-5 py-8 shadow-[0_12px_48px_rgba(30,58,95,0.09)] md:px-10 md:py-11">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="home-broker-overline mb-5 text-[#4a7fa5]">eawestern</p>
            <h2 className="home-broker-heading mb-6 text-[26px] leading-tight text-[#1a2e45] md:mb-8 md:text-[32px] md:leading-snug">
              We Are Ready to Support
              <br />
              Your Journey
            </h2>
            <p className="home-broker-body mx-auto mb-8 max-w-[520px] text-[15px] leading-relaxed text-[#4a5568] md:mb-9 md:text-[16px]">
              Whether you&apos;re planning a safari, arranging transport, or securing insurance—our team is ready to
              assist you.
            </p>
            <Link
              href={`/${locale}/contact`}
              scroll
              className="inline-flex rounded border border-[#1e3a5f] bg-[#c9a96e] px-10 py-3.5 text-[13px] font-semibold tracking-[0.02em] text-[#1e3a5f] transition-colors hover:bg-[#a8823d]"
            >
              Speak to Our Team
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
