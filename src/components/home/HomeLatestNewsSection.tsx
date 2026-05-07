"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, FolderOpen } from "lucide-react";

const BADGE_GREEN = "#6d9f85";
const ICON_GREEN = "#5a9272";

const items = [
  {
    imageSrc: "/images/safariview.png",
    dateLabel: "August 5, 2024",
    title: "Planning a first safari in Kenya",
    excerpt:
      "Seasonality, parks, pacing, and how we bundle transport and cover so nothing is left to chance.",
    href: "/blog",
  },
  {
    imageSrc: "/images/insurance-hero-panel.png",
    dateLabel: "June 12, 2024",
    title: "What an integrated broker changes for you",
    excerpt:
      "Fewer handoffs between travel, mobility, and policy support—and clearer ownership when you need help.",
    href: "/blog",
  },
  {
    imageSrc: "/images/sf.png",
    dateLabel: "March 3, 2024",
    title: "Fleet and self-drive options that match your trip",
    excerpt: "Matching vehicle class to terrain, duration, and support level across the region.",
    href: "/blog",
  },
];

export function HomeLatestNewsSection({ locale = "en" }: { locale?: string }) {
  return (
    <motion.section
      {...{
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" as const },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
      }}
      className="border-t border-[#ede9e1] bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <header className="mx-auto mb-12 max-w-[720px] text-center md:mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5c6570] md:text-[12px]">
            News and blogs
          </p>
          <h2 className="home-broker-heading text-[28px] font-bold leading-tight text-[#1a2e45] md:text-[34px] lg:text-[36px]">
            Latest news
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {items.map((item, idx) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e8e6e3] bg-white shadow-[0_6px_28px_rgba(30,58,95,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(30,58,95,0.12)]"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-t-xl bg-[#eef1ee]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSrc}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm md:bottom-4 md:right-4 md:px-3 md:py-2 md:text-[11px]"
                  style={{ backgroundColor: BADGE_GREEN }}
                >
                  <FolderOpen className="h-3.5 w-3.5 shrink-0 text-white md:h-4 md:w-4" strokeWidth={2} aria-hidden />
                  <span>News & blogs</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col rounded-b-xl bg-white px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6">
                <p className="mb-3 flex items-center gap-2 text-[13px] text-[#7a8494] md:text-[14px]">
                  <Calendar
                    className="h-4 w-4 shrink-0 md:h-[18px] md:w-[18px]"
                    style={{ color: ICON_GREEN }}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{item.dateLabel}</span>
                </p>
                <h3 className="home-broker-heading mb-3 text-[17px] font-bold leading-snug text-[#1a2e45] md:text-[18px]">
                  {item.title}
                </h3>
                <p className="home-broker-body mb-5 flex-1 text-[14px] leading-relaxed text-[#5f6b7a] md:mb-6 md:text-[15px]">
                  {item.excerpt}
                </p>
                <Link
                  href={`/${locale}${item.href}`}
                  className="mt-auto inline-flex text-[13px] font-semibold text-[#374151] underline-offset-2 transition-colors hover:text-[#1a2e45] md:text-[14px]"
                >
                  Read more&nbsp;»
                </Link>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
