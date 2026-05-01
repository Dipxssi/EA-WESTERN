"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = {
  id: number;
  bgImage: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
};

type HeroSliderProps = {
  locale: string;
  variant?: "insurance" | "about";
  pauseOnHover?: boolean;
};

const AUTO_ADVANCE_MS = 5500;
const TILE_COLS = 8;
const TILE_ROWS = 5;
const TILE_ENTER_DURATION = 0.65;
const TILE_EXIT_DURATION = 0.55;
const TILE_STAGGER = 0.018;

function encodeSrc(src: string) {
  return src.split("/").map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg))).join("/");
}

const INSURANCE_SLIDES: Slide[] = [
  {
    id: 1,
    bgImage: "/images/insurancebg.png",
    headline: "Insurance that Protects What Matters Most",
    subtext:
      "Practical, reliable insurance solutions for families, professionals, and businesses across East Africa.",
    ctaLabel: "Get a Quote",
    ctaHref: "/insurance/contact",
  },
  {
    id: 2,
    bgImage: "/images/guide.png",
    headline: "Reliable Cover with Expert Guidance",
    subtext:
      "We simplify policy choices and help you secure the best protection at competitive rates.",
    ctaLabel: "Explore Solutions",
    ctaHref: "/insurance/solutions",
  },
  {
    id: 3,
    bgImage: "/images/insurancebg.png",
    headline: "Claims Support When You Need It Most",
    subtext:
      "Our team stands with you through every claim process to ensure timely, fair outcomes.",
    ctaLabel: "Talk to an Expert",
    ctaHref: "/insurance/contact",
  },
];

const ABOUT_SLIDES: Slide[] = [
  {
    id: 101,
    bgImage: "/images/safariview.png",
    headline: "Safari Adventures Across East Africa",
    subtext:
      "Discover unforgettable journeys curated by local experts who understand every detail of the region.",
    ctaLabel: "Explore Safaris",
    ctaHref: "/safaris",
  },
  {
    id: 102,
    bgImage: "/images/insurancebg.png",
    headline: "Insurance Solutions You Can Trust",
    subtext:
      "Protect your family, assets, and business with practical insurance guidance and responsive support.",
    ctaLabel: "Explore Insurance",
    ctaHref: "/insurance",
  },
  {
    id: 103,
    bgImage: "/images/car image.jpg",
    headline: "Reliable Car Hire for Every Journey",
    subtext:
      "Choose dependable vehicles for business travel, family trips, and executive mobility.",
    ctaLabel: "Explore Car Hire",
    ctaHref: "/vehicles",
  },
];

function TilePiece({
  src,
  col,
  row,
  mode,
}: {
  src: string;
  col: number;
  row: number;
  mode: "enter" | "exit";
}) {
  const encoded = encodeSrc(src);
  const ox = ((Math.sin(col * 2.1 + row) + Math.cos(row * 1.7)) * 18).toFixed(1);
  const oy = ((Math.cos(col * 1.3 + row * 2.4) + Math.sin(row)) * 22).toFixed(1);

  const staggerIndex = col + row * TILE_COLS;

  if (mode === "exit") {
    return (
      <motion.div
        className="absolute overflow-hidden"
        style={{
          width: `${100 / TILE_COLS}%`,
          height: `${100 / TILE_ROWS}%`,
          left: `${(col * 100) / TILE_COLS}%`,
          top: `${(row * 100) / TILE_ROWS}%`,
          zIndex: 2,
        }}
        initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        animate={{
          opacity: 0,
          scale: 1.08,
          x: `${ox}px`,
          y: `${oy}px`,
          rotateZ: col % 2 === 0 ? 3 : -3,
        }}
        transition={{
          duration: TILE_EXIT_DURATION,
          delay: staggerIndex * TILE_STAGGER,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={encoded}
          className="pointer-events-none absolute max-w-none object-cover"
          draggable={false}
          style={{
            width: `${TILE_COLS * 100}%`,
            height: `${TILE_ROWS * 100}%`,
            left: `${-col * 100}%`,
            top: `${-row * 100}%`,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute overflow-hidden"
      style={{
        width: `${100 / TILE_COLS}%`,
        height: `${100 / TILE_ROWS}%`,
        left: `${(col * 100) / TILE_COLS}%`,
        top: `${(row * 100) / TILE_ROWS}%`,
        zIndex: 1,
      }}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: TILE_ENTER_DURATION,
        delay: staggerIndex * TILE_STAGGER,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={encoded}
        className="pointer-events-none absolute max-w-none object-cover"
        draggable={false}
        style={{
          width: `${TILE_COLS * 100}%`,
          height: `${TILE_ROWS * 100}%`,
          left: `${-col * 100}%`,
          top: `${-row * 100}%`,
        }}
      />
    </motion.div>
  );
}

function TileTransition({
  fromSrc,
  toSrc,
  transitionKey,
}: {
  fromSrc: string;
  toSrc: string;
  transitionKey: number;
}) {
  const tiles = useMemo(() => {
    const list: { col: number; row: number }[] = [];
    for (let row = 0; row < TILE_ROWS; row++) {
      for (let col = 0; col < TILE_COLS; col++) {
        list.push({ col, row });
      }
    }
    return list;
  }, []);

  return (
    <div key={transitionKey} className="absolute inset-0 overflow-hidden bg-[var(--color-navy)]">
      {tiles.map(({ col, row }) => (
        <TilePiece key={`in-${col}-${row}`} src={toSrc} col={col} row={row} mode="enter" />
      ))}
      {tiles.map(({ col, row }) => (
        <TilePiece key={`out-${col}-${row}`} src={fromSrc} col={col} row={row} mode="exit" />
      ))}
    </div>
  );
}

export function HeroSlider({ locale, variant = "insurance", pauseOnHover = true }: HeroSliderProps) {
  const slides = useMemo(() => (variant === "about" ? ABOUT_SLIDES : INSURANCE_SLIDES), [variant]);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transition, setTransition] = useState<{ from: number; to: number; key: number } | null>(null);
  const transitionEpoch = useRef(0);

  const transitionMs =
    Math.max(TILE_ENTER_DURATION, TILE_EXIT_DURATION) * 1000 +
    TILE_COLS * TILE_ROWS * TILE_STAGGER * 1000 +
    180;

  const goToIndex = useCallback(
    (next: number) => {
      const len = slides.length;
      const normalized = ((next % len) + len) % len;
      if (normalized === displayIndex || transition !== null) return;
      transitionEpoch.current += 1;
      setTransition({ from: displayIndex, to: normalized, key: transitionEpoch.current });
    },
    [displayIndex, slides.length, transition]
  );

  const nextSlide = useCallback(() => {
    goToIndex(displayIndex + 1);
  }, [displayIndex, goToIndex]);

  const prevSlide = useCallback(() => {
    goToIndex(displayIndex - 1);
  }, [displayIndex, goToIndex]);

  useEffect(() => {
    if (!transition) return;
    const id = window.setTimeout(() => {
      setDisplayIndex(transition.to);
      setTransition(null);
    }, transitionMs);
    return () => window.clearTimeout(id);
  }, [transition, transitionMs]);

  useEffect(() => {
    if (transition !== null || (pauseOnHover && isPaused)) return;
    const id = window.setTimeout(() => goToIndex(displayIndex + 1), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [displayIndex, transition, isPaused, pauseOnHover, goToIndex]);

  const currentSlide = slides[displayIndex];

  return (
    <section
      className="relative w-full min-h-[92vh] overflow-hidden bg-[var(--color-navy)] pt-28 pb-16 md:pt-32 md:pb-24"
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
      aria-label={`${variant} hero slider`}
    >
      <div className="absolute inset-0 z-0">
        {transition ? (
          <TileTransition
            transitionKey={transition.key}
            fromSrc={slides[transition.from].bgImage}
            toSrc={slides[transition.to].bgImage}
          />
        ) : (
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${encodeSrc(currentSlide.bgImage)}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-[rgba(11,31,46,0.78)] via-[rgba(11,31,46,0.45)] to-[rgba(11,31,46,0.25)]" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 md:px-10">
        <div className="max-w-[740px] py-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={`content-${slides[transition?.to ?? displayIndex].id}-${transition?.key ?? 0}`} className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="font-playfair text-[44px] leading-[1.05] text-white md:text-[62px]"
              >
                {slides[transition ? transition.to : displayIndex].headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="max-w-[640px] text-[16px] leading-relaxed text-white/85 md:text-[18px]"
              >
                {slides[transition ? transition.to : displayIndex].subtext}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, delay: 0.46 }}
              >
                <Link
                  href={`/${locale}${slides[transition ? transition.to : displayIndex].ctaHref}`}
                  className="inline-flex items-center rounded-[6px] bg-[var(--color-blue)] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-navy-dark)]"
                >
                  {slides[transition ? transition.to : displayIndex].ctaLabel}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        disabled={transition !== null}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/25 p-3 text-white transition-colors hover:bg-black/45 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        disabled={transition !== null}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/25 p-3 text-white transition-colors hover:bg-black/45 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </button>

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            disabled={transition !== null}
            onClick={() => goToIndex(idx)}
            className={`h-2.5 rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-40 ${
              idx === (transition ? transition.to : displayIndex) ? "w-8 bg-white" : "w-2.5 bg-white/45"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
