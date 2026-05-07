"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  HomeHeroSlideDots,
  HomeHeroSlideRoot,
  useHomeHeroSlideContext,
} from "@/components/HomeHeroSlideRoot";

const LIGHT_HERO_OVERLAY =
  "pointer-events-none absolute inset-0 z-[9] bg-[rgba(10,25,45,0.52)]";

const heroEase = [0.22, 1, 0.36, 1] as const;

const ABOUT_HERO_SLIDES = [
  {
    eyebrow: "Tours & safaris",
    headline: "Safari Adventures Across East Africa",
    subtext:
      "Discover unforgettable journeys curated by local experts who understand every detail of the region.",
    ctaLabel: "Explore Safaris",
    ctaHref: "/safaris",
  },
  {
    eyebrow: "Insurance",
    headline: "Insurance Solutions You Can Trust",
    subtext:
      "Protect your family, assets, and business with practical insurance guidance and responsive support.",
    ctaLabel: "Explore Insurance",
    ctaHref: "/insurance",
  },
  {
    eyebrow: "Car hire",
    headline: "Reliable Car Hire for Every Journey",
    subtext:
      "Choose dependable vehicles for business travel, family trips, and executive mobility.",
    ctaLabel: "Explore Car Hire",
    ctaHref: "/vehicles",
  },
] as const;

const ABOUT_HERO_IMAGES = [
  "/images/safariview.png",
  "/images/fam.png",
  "/images/car image.jpg",
] as const;

function AboutHeroCaption({ locale }: { locale: string }) {
  const slideCtx = useHomeHeroSlideContext();
  const slideKey = slideCtx?.activeDotIndex ?? 0;
  const reduceMotion = useReducedMotion();
  const slide = ABOUT_HERO_SLIDES[slideKey];

  const y = reduceMotion ? 0 : 28;
  const duration = reduceMotion ? 0.22 : 0.58;

  const stagger = (step: number) => ({
    duration,
    delay: reduceMotion ? 0 : 0.08 + step * 0.16,
    ease: heroEase,
  });

  return (
    <div
      key={slideKey}
      className="flex min-h-0 flex-1 flex-col justify-center px-6 py-4 sm:px-8 md:px-10"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="max-w-[740px] space-y-4 text-left sm:space-y-5">
          <motion.p
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0)}
            className="uppercase-label text-[#c9a96e]"
          >
            {slide.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(1)}
            className="serif text-[36px] leading-[1.05] tracking-[0.02em] text-white sm:text-[44px] md:text-[56px] lg:text-[62px]"
          >
            {slide.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(2)}
            className="max-w-[640px] text-[16px] font-light leading-relaxed text-[#e8edf2] md:text-[18px]"
          >
            {slide.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(3)}
          >
            <Link
              href={`/${locale}${slide.ctaHref}`}
              className="inline-flex items-center rounded-[4px] bg-[#c9a96e] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1e3a5f] transition-all duration-300 ease-[ease] hover:bg-[#a8823d]"
            >
              {slide.ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AboutHeroArrows() {
  const ctx = useHomeHeroSlideContext();
  if (!ctx) return null;
  const { activeDotIndex, transitioning, goToIndex } = ctx;

  return (
    <>
      <button
        type="button"
        onClick={() => goToIndex(activeDotIndex - 1)}
        disabled={transitioning}
        className="absolute left-0 top-1/2 z-20 flex h-[78px] w-[52px] -translate-y-1/2 items-center justify-center bg-white/12 text-white/95 opacity-0 backdrop-blur-[1px] transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white/20 active:scale-[0.96] active:bg-white/28 disabled:cursor-not-allowed disabled:opacity-45"
        aria-label="Previous slide"
      >
        <span className="block h-5 w-5 rotate-45 border-b-[2px] border-l-[2px] border-white" />
      </button>
      <button
        type="button"
        onClick={() => goToIndex(activeDotIndex + 1)}
        disabled={transitioning}
        className="absolute right-0 top-1/2 z-20 flex h-[78px] w-[52px] -translate-y-1/2 items-center justify-center bg-white/12 text-white/95 opacity-0 backdrop-blur-[1px] transition-all duration-200 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-white/20 active:scale-[0.96] active:bg-white/28 disabled:cursor-not-allowed disabled:opacity-45"
        aria-label="Next slide"
      >
        <span className="block h-5 w-5 -rotate-[135deg] border-b-[2px] border-l-[2px] border-white" />
      </button>
    </>
  );
}

export function AboutHeroSection({ locale }: { locale: string }) {
  return (
    <HomeHeroSlideRoot
      images={ABOUT_HERO_IMAGES}
      overlayClassName={LIGHT_HERO_OVERLAY}
      ariaLabel="About page hero"
      pauseOnHover={false}
      className="group flex h-[calc(66svh-4.5rem)] max-h-[560px] min-h-0 flex-col overflow-hidden bg-[#1e3a5f] pt-4 pb-3 text-white sm:h-[calc(62svh-4.5rem)] sm:max-h-[600px] sm:pt-5 sm:pb-3"
    >
      <AboutHeroArrows />
      <div className="relative mx-auto flex min-h-0 w-full flex-1 flex-col">
        <AboutHeroCaption locale={locale} />

        <div className="relative z-20 mx-auto mt-auto flex shrink-0 flex-col items-center gap-1.5 pb-0 pt-2 sm:pt-3">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
          <div className="relative h-8 w-px overflow-hidden bg-white/15">
            <div className="animate-scroll-line absolute left-0 top-0 h-full w-full bg-[#c9a96e]" />
          </div>
          <HomeHeroSlideDots className="mt-2" />
        </div>
      </div>
    </HomeHeroSlideRoot>
  );
}
