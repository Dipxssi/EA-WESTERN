"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type CredentialLogo = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

const logos: CredentialLogo[] = [
  {
    src: "/images/Insurance eawestern image.webp",
    alt: "Insurance Regulatory Authority",
    title: "Insurance Regulatory Authority",
    description:
      "Insurance activities are structured to meet licensing and conduct expectations under Kenya’s insurance regulatory framework.",
  },
  {
    src: "/images/tour eawestern logo.png",
    alt: "Tourism Regulatory Authority",
    title: "Tourism Regulatory Authority",
    description:
      "Safari and tourism services follow applicable licensing and quality standards for travellers across East Africa.",
  },
  {
    src: "/images/car about logo.png",
    alt: "National Transport and Safety Authority",
    title: "National Transport and Safety Authority",
    description:
      "Vehicle hire and transport coordination aligns with NTSA-related compliance for safer roads and accountable mobility.",
  },
];

export function CredentialsSection() {
  const [active, setActive] = useState<CredentialLogo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-[#ede9e1]/80 bg-[#ffffff] py-[80px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 max-w-[800px] text-center md:mx-auto">
          <h2 className="home-broker-heading text-[24px] leading-snug text-[#1a2e45] md:text-[30px]">
            Licensed, Certified & Trusted
          </h2>
          <p className="home-broker-body mt-4 text-[15px] leading-relaxed text-[#4a5568] md:text-[16px]">
            We operate under full regulatory compliance across insurance, transport, and tourism—ensuring every service
            meets the highest standards of safety, compliance, and accountability.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-[1000px] grid-cols-3 items-center justify-items-center gap-3 sm:gap-8 md:gap-12 lg:gap-14">
          {logos.map((logo) => {
            const isOpen = active?.src === logo.src;
            return (
            <button
              key={logo.src}
              type="button"
              onClick={() => setActive(logo)}
              className={`flex w-full max-w-full flex-col items-center justify-center rounded-none px-2 py-5 outline-none transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#1e3a5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-6 sm:py-6 md:px-8 ${
                isOpen
                  ? "z-[2] -translate-y-2 border border-[#a69d8c] bg-white shadow-[0_18px_48px_rgba(30,58,95,0.18)]"
                  : "relative z-0 border border-[#c9c0b0] bg-[#fafafa] shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:z-[2] hover:-translate-y-2 hover:border-[#b5ab9a] hover:bg-white hover:shadow-[0_16px_44px_rgba(30,58,95,0.15)] focus-visible:z-[2] focus-visible:-translate-y-2 focus-visible:border-[#b5ab9a] focus-visible:bg-white focus-visible:shadow-[0_16px_44px_rgba(30,58,95,0.15)]"
              }`}
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt=""
                className="pointer-events-none h-[48px] w-auto max-w-full object-contain sm:h-[70px] md:h-[100px]"
              />
              <span className="sr-only">Open details for {logo.title ?? logo.alt}</span>
            </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="presentation"
            className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#1e3a5f]/65 backdrop-blur-[6px]"
              aria-label="Close"
              onClick={() => setActive(null)}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="credential-card-title"
              className="relative z-[101] w-full max-w-[440px] rounded-t-2xl border border-[#ede9e1] bg-white px-6 pb-10 pt-8 text-[#1a2e45] shadow-[0_-28px_80px_rgba(0,0,0,0.18)] sm:rounded-2xl sm:shadow-[0_32px_90px_rgba(30,58,95,0.15)]"
              initial={{ opacity: 0, y: "72%", scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "28%", scale: 0.96 }}
              transition={{ type: "spring", damping: 27, stiffness: 340, mass: 0.85 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-[#1a2e45]/50 transition-colors duration-300 hover:bg-[#f7f5f0] hover:text-[#1a2e45]"
                aria-label="Close dialog"
              >
                <X size={22} strokeWidth={1.75} />
              </button>

              <div className="mb-6 flex justify-center rounded-lg border border-[#ede9e1] bg-[#fafbfc] px-6 py-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={active.src} alt="" className="max-h-[120px] w-auto object-contain md:max-h-[140px]" />
              </div>

              <h3 id="credential-card-title" className="serif pr-10 text-xl leading-snug md:text-2xl">
                {active.title ?? active.alt}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4a5568]">{active.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
