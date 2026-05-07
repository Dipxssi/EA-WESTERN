"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Full-bleed frame cycles these three pillars: safaris · mobility · insurance. */
const ROTATING_PANEL = [
  {
    primary: "/images/tours.png",
    fallback: "/images/safariview.png",
    alt: "Safaris across East Africa",
  },
  {
    primary: "/images/caar.png",
    fallback: "/images/car%20image.jpg",
    alt: "Car hire and dependable mobility",
  },
  {
    primary: "/images/fam.png",
    fallback: "/images/insurancebg.png",
    alt: "Insurance guidance and family protection",
  },
] as const;

const ROTATE_MS = 5200;

const ease = [0.22, 1, 0.36, 1] as const;

type DiagonalYearsExperienceCollageProps = {
  /** Extra classes on the outer motion wrapper */
  className?: string;
};

export function DiagonalYearsExperienceCollage({ className = "" }: DiagonalYearsExperienceCollageProps) {
  const reduceMotion = useReducedMotion();
  const [panelIndex, setPanelIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion === true) return;
    const id = window.setInterval(() => {
      setPanelIndex((i) => (i + 1) % ROTATING_PANEL.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const hoverLift =
    reduceMotion === true
      ? {}
      : { whileHover: { y: -4 }, transition: { duration: 0.28, ease } };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.06, ease }}
      className={`relative mx-auto w-full max-w-[480px] md:max-w-[520px] lg:mx-0 lg:max-w-[540px] ${className}`}
    >
      <div
        className="pointer-events-none absolute -bottom-4 -left-14 z-20 hidden w-[62%] aspect-[3/4] overflow-hidden rounded-[16px] shadow-[0_20px_40px_rgba(30,58,95,0.18)] ring-1 ring-[#e4dfd6] md:block lg:-bottom-6 lg:-left-20"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative collage layer */}
        <img
          src="/images/safariview.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <motion.figure className="relative isolate" {...hoverLift}>
        <div className="relative z-10 overflow-hidden rounded-[22px] shadow-[0_24px_56px_rgba(30,58,95,0.16)] ring-1 ring-[#e4dfd6] md:rounded-[26px]">
          <div
            className="relative aspect-[3/4] w-full md:aspect-[4/5]"
            aria-live={reduceMotion === true ? undefined : "polite"}
            aria-label={`Gallery: ${ROTATING_PANEL[panelIndex]?.alt ?? ""}`}
          >
            {ROTATING_PANEL.map((photo, i) => (
              // eslint-disable-next-line @next/next/no-img-element -- decorative rotating collage
              <img
                key={photo.primary}
                src={photo.primary}
                alt={photo.alt}
                className={`absolute inset-0 z-[1] h-full w-full object-cover object-[30%_center] transition-opacity duration-[900ms] ease-out ${
                  i === panelIndex ? "opacity-100" : "opacity-0"
                }`}
                onError={(e) => {
                  const el = e.currentTarget;
                  if (el.dataset.fallbackApplied === "1") return;
                  el.dataset.fallbackApplied = "1";
                  el.src = photo.fallback;
                }}
              />
            ))}
            {/* Bottom gradient so badge + caption read cleanly */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-[#1a2e45]/85 via-[#1a2e45]/25 to-transparent"
              aria-hidden
            />
          </div>

          <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] px-5 pb-5 pt-12 md:px-7 md:pb-7">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a96e]/95 md:text-[11px]">
                  What we deliver
                </p>
                <p className="mt-1 max-w-[280px] font-sans text-[14px] font-medium leading-snug text-white md:text-[15px]">
                  {ROTATING_PANEL[panelIndex]?.alt ?? ""}
                </p>
              </div>
              <div
                className="shrink-0 rounded-xl bg-[#f7f5f0]/95 px-4 py-3 text-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/40 backdrop-blur-[6px] md:px-5 md:py-3.5"
                aria-label="15+ years of experience"
              >
                <span className="block font-sans text-[1.85rem] font-bold leading-none tracking-tight text-[#1e3a5f] md:text-[2.1rem]">
                  15+
                </span>
                <span className="mt-1 block font-sans text-[9px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#4a5568] md:text-[10px]">
                  Years experience
                </span>
              </div>
            </div>
          </figcaption>
        </div>
      </motion.figure>

      <div className="mt-5 flex flex-col items-center gap-3 md:mt-6" role="presentation">
        <div className="flex justify-center gap-2">
          {ROTATING_PANEL.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                i === panelIndex ? "bg-[#c9a96e] shadow-[0_0_0_3px_rgba(201,169,110,0.25)]" : "bg-[#d4cfc4]"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
