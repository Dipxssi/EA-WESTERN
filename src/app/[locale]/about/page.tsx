"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Binoculars,
  Car,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  GitCompareArrows,
  Headphones,
  Quote,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import { HomeTomatoTheme } from "@/components/HomeTomatoTheme";
import { HOME_NAV_TOTAL_OFFSET_CLASS } from "@/components/Navigation";

const easeOut = [0.22, 1, 0.36, 1] as const;

function viewportFade(
  reduceMotion: boolean | null,
  delay = 0
): Pick<React.ComponentProps<typeof motion.div>, "initial" | "whileInView" | "viewport" | "transition"> {
  if (reduceMotion) {
    return { initial: false, transition: { duration: 0 } };
  }
  return {
    initial: { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-56px" as const, amount: 0.15 },
    transition: { duration: 0.52, delay, ease: easeOut },
  };
}

const whoWeAreParas = [
  "EA Western Insurance Brokers Limited is a licensed insurance broker in Kenya, operating in line with Insurance Regulatory Authority (IRA) expectations. We are not tied to a single insurer—we represent you, with the freedom to compare cover, explain trade-offs honestly, and recommend what fits how you travel, work, and move.",
  "That independence lets us look at risk and logistics together: medical and motor lines, safari itineraries, and dependable car hire—so you are not juggling disconnected vendors when timing matters.",
  "Families, teams, and businesses across the region use us when they want one accountable partner who stays on the thread from first conversation through renewals and claims questions.",
];

const foundingPrinciple =
  "We believe protection and travel planning should be straightforward. You deserve clear terms, realistic guidance, and a team that stays visible when schedules change or a claim needs attention. That principle shapes how we advise, coordinate, and follow through.";

const approachItems = [
  {
    title: "Understanding your needs",
    body: "We start with how you actually operate—destinations and dates, assets and exposures, and how you use vehicles—so gaps are visible before you bind cover or confirm a safari leg.",
    icon: ClipboardCheck,
    image: "/images/guide.png",
    imageAlt: "Client planning session with travel and risk guidance",
  },
  {
    title: "Market comparison",
    body: "We seek competitive options from multiple insurers and align vehicle or itinerary choices with your budget, policy wording, and the standards regulators and partners expect.",
    icon: GitCompareArrows,
    image: "/images/insurance-hero-panel.png",
    imageAlt: "Insurance options and coverage comparison documents",
  },
  {
    title: "Ongoing coordination",
    body: "Our relationship continues after placement: renewals, policy changes, claims support, and safari or hire handovers—so responsibility stays obvious when you need a fast answer.",
    icon: Headphones,
    image: "/images/home.png",
    imageAlt: "Team coordinating mobility and travel operations",
  },
] as const;

const introPillars: { label: string; hint: string; icon: LucideIcon }[] = [
  {
    label: "Licensed brokerage",
    hint: "Independent comparisons and candid guidance across insurers.",
    icon: ShieldCheck,
  },
  {
    label: "Dependable mobility",
    hint: "Vehicles and handovers coordinated when schedules matter.",
    icon: Car,
  },
  {
    label: "Curated safaris",
    hint: "Itineraries and trusted ground partners across East Africa.",
    icon: Binoculars,
  },
];

const aboutTestimonials = [
  {
    quote:
      "They handled our insurance renewal and safari logistics in one flow. We stopped chasing multiple vendors and finally had one accountable team.",
    name: "Grace W.",
    role: "Operations Lead, Nairobi",
  },
  {
    quote:
      "From quote comparison to claims guidance, communication stayed clear. The team explained trade-offs honestly and helped us choose what fit.",
    name: "Daniel M.",
    role: "Family Client, Mombasa",
  },
  {
    quote:
      "Vehicle handover, itinerary timing, and policy details were coordinated end-to-end. It felt professional, calm, and dependable throughout.",
    name: "Amina K.",
    role: "Travel Coordinator, Arusha",
  },
] as const;

const firmBookPages = [
  {
    paragraph: whoWeAreParas[0],
    image: "/images/firm-family-consultation.png",
    imageAlt: "Family meeting with a professional advisor in a bright office with city views",
  },
  {
    paragraph: whoWeAreParas[1],
    image: "/images/insurancebg.png",
    imageAlt: "Medical insurance background visual",
  },
  {
    paragraph: whoWeAreParas[2],
    image: "/images/contact.png",
    imageAlt: "Vehicle handover and client support",
  },
] as const;

/** How long each “Our firm” slide stays still before auto-advancing (~reading time for the paragraph). */
const FIRM_BOOK_AUTO_ADVANCE_MS = 18_000;

const TESTIMONIAL_SCROLL_PX_PER_SEC = 42;

export default function About() {
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";
  const reduceMotion = useReducedMotion();
  const [activeIntroPillar, setActiveIntroPillar] = useState(0);
  const [activeFirmPage, setActiveFirmPage] = useState(0);
  const [isFirmBookClosed, setIsFirmBookClosed] = useState(false);
  const [firmTurnDirection, setFirmTurnDirection] = useState(1);
  const testimonialTrackRef = useRef<HTMLDivElement | null>(null);
  const testimonialX = useMotionValue(0);
  const [testimonialLoopWidth, setTestimonialLoopWidth] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveIntroPillar((prev) => (prev + 1) % introPillars.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || isFirmBookClosed) return;
    const id = window.setInterval(() => {
      setFirmTurnDirection(1);
      setActiveFirmPage((prev) => {
        if (prev >= firmBookPages.length - 1) {
          setIsFirmBookClosed(true);
          return prev;
        }
        return prev + 1;
      });
    }, FIRM_BOOK_AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, isFirmBookClosed]);

  useEffect(() => {
    if (reduceMotion || !isFirmBookClosed) return;
    const id = window.setTimeout(() => {
      setActiveFirmPage(0);
      setFirmTurnDirection(1);
      setIsFirmBookClosed(false);
    }, 3200);
    return () => window.clearTimeout(id);
  }, [reduceMotion, isFirmBookClosed]);

  useLayoutEffect(() => {
    const measureTrack = () => {
      const node = testimonialTrackRef.current;
      if (!node) return;
      setTestimonialLoopWidth(node.scrollWidth / 2);
    };
    measureTrack();
    window.addEventListener("resize", measureTrack);
    return () => window.removeEventListener("resize", measureTrack);
  }, []);

  useEffect(() => {
    testimonialX.set(0);
  }, [testimonialLoopWidth, testimonialX]);

  useAnimationFrame((_, deltaMs) => {
    if (reduceMotion || isTestimonialPaused || testimonialLoopWidth <= 0) return;
    const next = testimonialX.get() - (TESTIMONIAL_SCROLL_PX_PER_SEC * deltaMs) / 1000;
    testimonialX.set(next <= -testimonialLoopWidth ? next + testimonialLoopWidth : next);
  });

  const goToPrevFirmPage = () => {
    setFirmTurnDirection(-1);
    setActiveFirmPage((prev) => (prev - 1 + firmBookPages.length) % firmBookPages.length);
  };
  const goToNextFirmPage = () => {
    setFirmTurnDirection(1);
    setActiveFirmPage((prev) => (prev + 1) % firmBookPages.length);
  };

  const sectionShell = "border-t border-[#ede9e1]/80";
  const wideInner = "mx-auto max-w-[1200px] px-6 md:px-10";
  const proseNarrow = "mx-auto max-w-[720px]";
  const h2 = "serif mb-6 text-[30px] font-normal leading-tight text-[#1a2e45] md:text-[36px] lg:text-[38px]";
  const h3 = "serif mb-4 text-[20px] font-normal text-[#1a2e45] md:text-[22px]";
  const body = "text-[16px] leading-[1.85] text-[#4a5568] md:text-[17px]";

  return (
    <div className="ew-about-root min-h-screen overflow-x-hidden bg-[#f7f5f0] font-jost text-[#4a5568] antialiased">
      <HomeTomatoTheme />
      <NavBar locale={locale} />

      <main className={HOME_NAV_TOTAL_OFFSET_CLASS}>
        <AboutHeroSection locale={locale} />

        {/* Opening editorial — headline + three lanes (no cards; dividers only) */}
        <section className={`${sectionShell} relative overflow-hidden bg-white py-16 md:py-24`}>
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <Image
              src="/images/insurance-hero-safari.png"
              alt=""
              fill
              className="object-cover object-center opacity-[0.34]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/56 via-white/68 to-white/82" />
          </div>
          <div className={`${wideInner} relative z-10`}>
            <div className="mx-auto max-w-[760px] text-center">
              <motion.p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4a7fa5] md:text-[12px]"
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 14 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: false, margin: "-48px", amount: 0.2 },
                      transition: { duration: 0.48, ease: easeOut },
                    })}
              >
                Who we are
              </motion.p>
              <motion.h2
                className={`${h2} mb-5 md:mb-6`}
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 22 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: false, margin: "-48px", amount: 0.2 },
                      transition: { duration: 0.55, delay: 0.04, ease: easeOut },
                    })}
              >
                About EA Western Insurance Brokers
              </motion.h2>
              <motion.p
                className={`${body} mx-auto max-w-[640px] text-[17px] md:text-[18px]`}
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 18 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: false, margin: "-48px", amount: 0.2 },
                      transition: { duration: 0.52, delay: 0.1, ease: easeOut },
                    })}
              >
                Your integrated partner for licensed brokerage, dependable mobility, and curated safaris—so complex plans feel clearer and one team owns the follow-through.
              </motion.p>
            </div>

            <div className="mx-auto mt-14 max-w-[960px] border-t border-[#e8e4dc] pt-12 md:mt-16 md:pt-14">
              <div className="mx-auto max-w-[520px]">
                <div className="relative min-h-[160px]">
                  <AnimatePresence mode="wait">
                    {introPillars.map((item, i) => {
                      if (i !== activeIntroPillar) return null;
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.label}
                          className="absolute inset-0 flex flex-col items-center justify-center px-3 py-2 text-center"
                          initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.985 }}
                          animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                          exit={reduceMotion ? {} : { opacity: 0, y: -12, scale: 0.99 }}
                          transition={{ duration: 0.42, ease: easeOut }}
                        >
                          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a96e]/20 text-[#8f7444]">
                            <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                          </span>
                          <span className="max-w-[380px] text-[32px] font-semibold leading-tight tracking-tight text-[#1a2e45] md:text-[36px]">
                            {item.label}
                          </span>
                          <p className="mt-4 max-w-[460px] text-[20px] leading-relaxed text-[#5c6570] md:text-[22px]">{item.hint}</p>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
                <div className="mt-5 flex items-center justify-center gap-2" aria-hidden>
                  {introPillars.map((item, i) => (
                    <span
                      key={item.label}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === activeIntroPillar ? "w-6 bg-[#c9a96e]" : "w-2.5 bg-[#cfc9bd]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our firm — interactive book with closing principle */}
        <section className={`${sectionShell} bg-[#fafaf8] py-16 md:py-28`}>
          <div className={wideInner}>
            <motion.div {...viewportFade(reduceMotion, 0)} className="mx-auto max-w-[1080px]">
              <div className="mb-8 text-center">
                <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4a7fa5] md:text-[12px]">
                  <BookOpen className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
                  Our firm
                </p>
                <h2 className={`${h2} mb-0 text-center`}>Who we are</h2>
              </div>

              <div className="perspective-[1600px]">
                <AnimatePresence mode="wait">
                  {!isFirmBookClosed ? (
                    <motion.div
                      key="firm-book-open"
                      initial={reduceMotion ? false : { opacity: 0, rotateX: 3, y: 18 }}
                      animate={reduceMotion ? {} : { opacity: 1, rotateX: 0, y: 0 }}
                      exit={reduceMotion ? {} : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.45, ease: easeOut }}
                    >
                      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-0">
                        <div className="relative border-b border-[#e7e1d7] pb-8 md:border-b-0 md:border-r md:py-2 md:pb-2 md:pr-10">
                          <AnimatePresence mode="wait" custom={firmTurnDirection}>
                            <motion.div
                              key={`firm-text-${activeFirmPage}`}
                              custom={firmTurnDirection}
                              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                              animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                              exit={reduceMotion ? {} : { opacity: 0, x: -12 }}
                              transition={{ duration: 1.05, ease: easeOut }}
                            >
                              <p className="text-[18px] leading-[1.9] text-[#445165] md:text-[19px]">
                                {firmBookPages[activeFirmPage].paragraph}
                              </p>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                        <div className="relative min-h-[280px] overflow-hidden rounded-xl perspective-[1400px] md:min-h-[360px]">
                          <AnimatePresence mode="wait" custom={firmTurnDirection}>
                            <motion.div
                              key={`firm-image-${activeFirmPage}`}
                              className="absolute inset-0 transform-gpu will-change-transform"
                              initial={
                                reduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      x: "100%",
                                    }
                              }
                              animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                              exit={
                                reduceMotion
                                  ? {}
                                  : {
                                      opacity: 0,
                                      x: "-18%",
                                    }
                              }
                              transition={{ duration: 1.65, ease: easeOut }}
                            >
                              <Image
                                src={firmBookPages[activeFirmPage].image}
                                alt={firmBookPages[activeFirmPage].imageAlt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 768px) 40vw, 100vw"
                              />
                              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0000001f] to-transparent" />
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={goToPrevFirmPage}
                            className="inline-flex items-center gap-1 rounded-full border border-[#d8d1c5] bg-white px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2f3f55] transition-colors hover:bg-[#f7f3eb]"
                          >
                            <ChevronLeft className="h-4 w-4" aria-hidden />
                            Prev
                          </button>
                          <button
                            type="button"
                            onClick={goToNextFirmPage}
                            className="inline-flex items-center gap-1 rounded-full border border-[#d8d1c5] bg-white px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2f3f55] transition-colors hover:bg-[#f7f3eb]"
                          >
                            Next
                            <ChevronRight className="h-4 w-4" aria-hidden />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="firm-book-closed"
                      className="py-8 text-center md:py-10"
                      initial={reduceMotion ? false : { opacity: 0, rotateY: 12, scale: 0.98 }}
                      animate={reduceMotion ? {} : { opacity: 1, rotateY: 0, scale: 1 }}
                      exit={reduceMotion ? {} : { opacity: 0 }}
                      transition={{ duration: 0.45, ease: easeOut }}
                    >
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#745e37]">Our firm</p>
                      <h3 className="serif mb-5 text-[30px] text-[#1a2e45] md:text-[36px]">Our founding principle</h3>
                      <div className="mx-auto mb-6 h-[2px] w-14 rounded-full bg-[#c9a96e]/85" aria-hidden />
                      <p className="mx-auto max-w-[760px] font-serif text-[22px] italic leading-[1.75] text-[#7d6b4e] md:text-[26px]">
                        {foundingPrinciple}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {!isFirmBookClosed && (
                <div className="mt-5 flex items-center justify-center gap-2" aria-hidden>
                  {firmBookPages.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === activeFirmPage ? "w-6 bg-[#c9a96e]" : "w-2.5 bg-[#d3ccbf]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Our approach — editorial steps (no cards; numerals + divider columns) */}
        <section className={`${sectionShell} bg-[#fafbf7] py-16 md:py-24`}>
          <div className={wideInner}>
            <motion.div
              {...viewportFade(reduceMotion, 0)}
              className="mx-auto mb-2 max-w-[640px] text-center md:mb-4"
            >
              <h2 className={h2}>Our approach</h2>
              <p className={body}>
                A practical rhythm—listen, compare, then stay available—whether you are binding cover, hiring a vehicle, or locking in safari logistics.
              </p>
            </motion.div>
            <div className="mx-auto mt-12 max-w-[1040px] border-t border-[#e0dcd3] pt-12 md:mt-14 md:pt-14">
              <div className="grid grid-cols-1 gap-y-8 border-[#e0dcd3] sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-[#e0dcd3]">
                {approachItems.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    {...(reduceMotion
                      ? {}
                      : {
                          initial: { opacity: 0, y: 26, scale: 0.86, filter: "blur(10px)" },
                          whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
                          viewport: { once: true, margin: "-40px", amount: 0.15 },
                          transition: { duration: 0.62, delay: 0.1 + idx * 0.22, ease: easeOut },
                        })}
                    className="px-4 py-3 text-center md:px-8"
                  >
                    <h3 className="serif text-[26px] font-normal leading-tight tracking-tight text-[#1a2e45] md:text-[32px]">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials — infinite right-to-left marquee slider */}
        <section className={`${sectionShell} overflow-hidden bg-white py-16 md:py-20`}>
          <div className={wideInner}>
            <motion.div
              {...viewportFade(reduceMotion, 0)}
              className="mx-auto mb-10 max-w-[720px] text-center md:mb-12"
            >
              <h2 className={h2}>Testimonials</h2>
              <p className={body}>
                What clients say about working with EA Western.
              </p>
            </motion.div>
            <div
              className="relative mx-auto max-w-[1160px] overflow-hidden"
              onMouseEnter={() => setIsTestimonialPaused(true)}
              onMouseLeave={() => setIsTestimonialPaused(false)}
              onFocusCapture={() => setIsTestimonialPaused(true)}
              onBlurCapture={() => setIsTestimonialPaused(false)}
            >
              <motion.div ref={testimonialTrackRef} className="flex w-max gap-4 py-2 pr-4 md:gap-6" style={{ x: testimonialX }}>
                {[...aboutTestimonials, ...aboutTestimonials].map((item, idx) => (
                  <article
                    key={`${item.name}-${idx}`}
                    className="w-[290px] shrink-0 rounded-[14px] border border-[#e7e1d7] bg-[#fcfbf8] p-5 shadow-[0_10px_26px_rgba(30,58,95,0.1)] md:w-[360px] md:p-6"
                  >
                    <Quote className="mb-4 h-5 w-5 text-[#c9a96e] md:h-6 md:w-6" strokeWidth={1.4} aria-hidden />
                    <p className="text-[15px] leading-[1.85] text-[#435065] md:text-[16px]">&ldquo;{item.quote}&rdquo;</p>
                    <div className="mt-5 border-t border-[#e7e1d7] pt-4">
                      <p className="text-[14px] font-semibold tracking-tight text-[#1a2e45]">{item.name}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#8f7444]">{item.role}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work with us — Chestnut-style closing */}
        <section className={`${sectionShell} bg-white py-16 md:py-24`}>
          <div className={wideInner}>
            <motion.div
              {...viewportFade(reduceMotion, 0)}
              className={`${proseNarrow} px-4 py-2 text-center md:px-6`}
            >
              <h2 className={`${h2} mb-6 text-center`}>Work with EA Western</h2>
              <p className={`${body} mb-8 text-center`}>
                Whether you are reviewing insurance, planning travel, or lining up vehicles—we are here with objective,
                professional guidance and one accountable team from first conversation onward.
              </p>
              <motion.div
                className="inline-block"
                whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  href={`/${locale}/contact`}
                  className="inline-block rounded-[4px] bg-[#1e3a5f] px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#2c5282]"
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
