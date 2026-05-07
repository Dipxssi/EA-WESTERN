"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export type TestimonialItem = {
  quote: string;
  author: string;
  location: string;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "Everything was handled seamlessly-from airport pickup to our safari logistics. We did not have to worry about a single detail.",
    author: "David L.",
    location: "UK",
  },
  {
    quote:
      "Fast claims, clear communication, and zero stress. They made the entire insurance process simple and efficient.",
    author: "Michelle K.",
    location: "Nairobi",
  },
  {
    quote:
      "We needed a reliable partner on the ground in East Africa, and eawestern delivered beyond expectations. The coordination, communication, and execution were top-tier.",
    author: "Daniel K.",
    location: "New York, USA",
  },
  {
    quote:
      "eawestern is the only partner I trust. They managed our corporate fleet, insured our offices, and planned our end-of-year safari. Having one team handle everything is a game-changer for my business.",
    author: "Allan M",
    location: "Director, Regional Logistics Firm",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export type TestimonialsSectionProps = {
  testimonials?: TestimonialItem[];
  eyebrow?: string;
  /** Replaces the default “Standard of Excellence” heading when set. */
  title?: ReactNode;
  /** Optional subline under the heading (e.g. About page context). */
  description?: string | null;
  className?: string;
};

export function TestimonialsSection({
  testimonials = defaultTestimonials,
  eyebrow = "Client Perspectives",
  title,
  description = null,
  className = "",
}: TestimonialsSectionProps) {
  const heading =
    title ?? (
      <>
        The Standard of <span className="italic text-[#c9a96e]">Excellence</span>
      </>
    );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease }}
      className={`border-t border-[#ede9e1]/80 bg-[#f7f5f0] py-[100px] font-jost md:py-[100px] ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-16 text-center md:mb-24">
          <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4a7fa5]">{eyebrow}</div>
          <h2 className="serif text-[36px] leading-tight text-[#1a2e45] md:text-[52px]">{heading}</h2>
          {description ? (
            <p className="home-broker-body mx-auto mt-6 max-w-[640px] text-[16px] leading-relaxed text-[#4a5568] md:text-[17px]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {testimonials.map((t, idx) => (
            <motion.article
              key={`${t.author}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease }}
              className="rounded-br-[12px] rounded-tr-[12px] border-l-4 border-[#c9a96e] bg-[#ffffff] px-7 py-8 shadow-[0_4px_20px_rgba(30,58,95,0.08)]"
            >
              <div className="mb-8 flex text-[#c9a96e]">
                <Quote size={26} strokeWidth={1.25} />
              </div>
              <p className="mb-10 text-[15px] italic leading-[1.8] text-[#1a2e45]">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2c5282]">{t.author}</div>
                <div className="text-[11px] font-medium text-[#4a5568]">{t.location}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
