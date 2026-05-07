"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Compass, ShieldCheck, Car } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

type Service = {
  id: string;
  num: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Optional Tailwind classes for `object-*` / positioning inside the crop. */
  imageObjectClass?: string;
  summary: string;
  detail: string;
  href: string;
  ctaLabel: string;
  icon: typeof Compass;
};

const services: Service[] = [
  {
    id: "safaris",
    num: "01",
    title: "Tours & safaris",
    image: "/images/pillar-safaris-giraffe.png",
    imageAlt: "Giraffe in natural bush setting, East African safari",
    imageObjectClass: "object-top",
    summary:
      "Curated itineraries, trusted ground partners, and end-to-end logistics across Kenya and East Africa—so your trip stays smooth from enquiry to departure.",
    detail:
      "We design safaris around your pace, budget, and interests—parks, conservancies, and cultural stops—with clear pricing and a single team coordinating vehicles, guides, and handovers. Whether it is a first visit or a returning corporate group, you get structured planning and responsive support on the ground.",
    href: "/safaris",
    ctaLabel: "Explore Itineraries",
    icon: Compass,
  },
  {
    id: "insurance",
    num: "02",
    title: "Insurance",
    image: "/images/guide.png",
    imageAlt: "Professional consultation — reviewing options and paperwork together",
    summary:
      "Licensed brokerage support across life and general lines—clear options, honest comparisons, and advocacy when you need to claim or renew.",
    detail:
      "From medical and motor to business and travel cover, we help you understand limits, exclusions, and insurer fit before you commit. Our role is to simplify paperwork, keep policies organised, and stand with you through claims and renewals so protection stays aligned with how you live and work.",
    href: "/insurance",
    ctaLabel: "View Coverage & Get a Quote",
    icon: ShieldCheck,
  },
  {
    id: "vehicles",
    num: "03",
    title: "Car hire",
    image: "/images/luxury-car-background.jpg",
    imageAlt: "Premium vehicle exterior — rental and travel-ready mobility",
    summary:
      "Well-maintained vehicles for leisure, safari legs, and business travel—transparent rental terms and reliable coordination when schedules matter.",
    detail:
      "Choose the right class for terrain and passengers—self-drive or arranged handovers—with servicing and documentation handled to regional standards. We focus on predictable costs, clear pickup and return processes, and backup options when plans shift so mobility never becomes the weak link in your itinerary.",
    href: "/vehicles",
    ctaLabel: "Browse fleet & availability",
    icon: Car,
  },
];

/** Hover / focus-within: same card morphs to navy + gold (no overlay). */
const cardInteract =
  "hover:bg-[#1e3a5f] hover:shadow-[0_16px_48px_rgba(30,58,95,0.28)] hover:-translate-y-0.5 " +
  "focus-within:bg-[#1e3a5f] focus-within:shadow-[0_16px_48px_rgba(30,58,95,0.28)] focus-within:-translate-y-0.5";

export function HomePillarsSection({ locale = "en" }: { locale?: string }) {
  return (
    <motion.section
      id="pillars"
      {...fade}
      className="scroll-mt-[88px] border-t border-[#ede9e1] bg-[#f7f5f0] py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mx-auto mb-10 max-w-[640px] text-center md:mb-12">
          <p className="home-broker-overline mb-2 text-[#4a7fa5]">What we offer</p>
          <h2 className="home-broker-heading text-[26px] text-[#1a2e45] md:text-[30px]">
            Three ways we support you
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3 md:gap-7 lg:gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-white p-7 text-left shadow-[0_4px_24px_rgba(30,58,95,0.08)] ring-1 ring-[#ede9e1]/80 transition-[background-color,box-shadow,transform,ring-color] duration-300 ease-out hover:ring-[#1e3a5f]/30 focus-within:ring-[#1e3a5f]/30 md:p-8 ${cardInteract}`}
              >
                <div className="pointer-events-none absolute left-0 top-0 h-[88px] w-[88px] md:h-[96px] md:w-[96px]">
                  <div className="h-full w-full rounded-br-[100%] bg-[#c9a96e] transition-[background-color,filter] duration-300 group-hover:brightness-105 group-focus-within:brightness-105" />
                  <Icon
                    className="absolute left-[22px] top-[22px] h-7 w-7 text-white md:left-[26px] md:top-[26px] md:h-8 md:w-8"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>

                <span
                  className="pointer-events-none absolute right-3 top-2 select-none text-[clamp(2.75rem,8vw,3.75rem)] font-semibold leading-none tracking-tight text-transparent transition-all duration-300 [-webkit-text-stroke:1.2px_#e5dfd3] group-hover:[-webkit-text-stroke:2px_#c9a96e] group-hover:scale-[1.02] group-focus-within:[-webkit-text-stroke:2px_#c9a96e] group-focus-within:scale-[1.02] md:right-4 md:top-3"
                  aria-hidden
                >
                  {s.num}
                </span>

                <div className="relative z-10 flex min-h-0 flex-1 flex-col pt-[4.25rem] md:pt-[4.5rem]">
                  <h3 className="home-broker-heading mb-3 text-[17px] leading-snug text-[#1a2e45] transition-colors duration-300 group-hover:text-white group-focus-within:text-white md:text-[18px]">
                    {s.title}
                  </h3>

                  <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-lg ring-1 ring-[#ede9e1]/90 transition-[ring-color,opacity] duration-300 group-hover:opacity-95 group-hover:ring-[#c9a96e]/35 group-focus-within:opacity-95 group-focus-within:ring-[#c9a96e]/35">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className={`object-cover ${s.imageObjectClass ?? ""}`}
                      sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 100vw"
                    />
                  </div>

                  {/* Idle: summary only (no fixed min-height). Row stretch + justify-center uses vertical space evenly. Hover: swap to detail + CTA slot expands. */}
                  <div className="flex min-h-0 flex-1 flex-col justify-center transition-[justify-content] duration-300 ease-out group-hover:justify-start group-focus-within:justify-start">
                    <p className="home-broker-body block text-[14px] leading-relaxed text-[#4a5568] group-hover:hidden group-focus-within:hidden md:text-[15px] md:leading-relaxed">
                      {s.summary}
                    </p>
                    <p className="home-broker-body hidden text-[14px] leading-relaxed text-[#f4f7fb] group-hover:block group-focus-within:block md:text-[15px] md:leading-relaxed">
                      {s.detail}
                    </p>
                  </div>

                  {/* Collapsed in layout until hover/focus-within — avoids a tall empty band reserved for an invisible button */}
                  <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity,margin-top] duration-300 ease-out group-hover:mt-8 group-hover:max-h-[200px] group-hover:opacity-100 md:group-hover:mt-10 md:group-hover:max-h-[220px] group-focus-within:mt-8 group-focus-within:max-h-[200px] group-focus-within:opacity-100 md:group-focus-within:mt-10 md:group-focus-within:max-h-[220px]">
                    <Link
                      href={`/${locale}${s.href}`}
                      className="pointer-events-auto inline-flex rounded-md bg-[#c9a96e] px-6 py-3 text-center text-[11px] font-semibold leading-snug tracking-[0.02em] text-[#1e3a5f] transition-colors hover:bg-[#a8823d] hover:text-[#1a2e45] md:px-8 md:text-[12px]"
                    >
                      {s.ctaLabel}
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
