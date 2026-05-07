"use client";

import { motion } from "framer-motion";
import { CalendarClock, Headphones, MapPinned, Users, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type StatDef = {
  final: number;
  /** Animated primary number (before suffix) */
  formatPrimary: (n: number) => string;
  /** Second line under number, e.g. k, +, % */
  suffix: string | null;
  label: string;
  isStatic?: boolean;
  icon: LucideIcon;
};

const statDefs: StatDef[] = [
  {
    final: 15,
    formatPrimary: (n) => String(Math.round(n)),
    suffix: "+",
    label: "Years experience",
    icon: CalendarClock,
  },
  {
    final: 5000,
    formatPrimary: (n) => String(Math.round(n / 1000)),
    suffix: "K+",
    label: "Clients served",
    icon: Users,
  },
  {
    final: 50,
    formatPrimary: (n) => String(Math.round(n)),
    suffix: "+",
    label: "Destinations",
    icon: MapPinned,
  },
  {
    final: 0,
    formatPrimary: () => "24/7",
    suffix: null,
    label: "Dedicated support",
    icon: Headphones,
    isStatic: true,
  },
];

const iconWrap =
  "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#c9a96e]/35 bg-[#c9a96e]/12 text-[#1e3a5f] " +
  "origin-center transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out will-change-transform " +
  "group-hover/stat:scale-[1.18] group-hover/stat:bg-[#1e3a5f] group-hover/stat:border-[#1e3a5f] group-hover/stat:text-[#c9a96e] group-hover/stat:shadow-[0_8px_20px_rgba(30,58,95,0.22)] " +
  "motion-reduce:transition-colors motion-reduce:group-hover/stat:scale-100 md:h-11 md:w-11 md:group-hover/stat:scale-[1.22]";

export function StatsSection() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statDefs.forEach((def, index) => {
            if (def.isStatic) {
              setCounters((prev) => {
                const next = [...prev];
                next[index] = 1;
                return next;
              });
              return;
            }

            const duration = 2000;
            const steps = 60;
            const increment = def.final / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              const currentValue = Math.min(increment * currentStep, def.final);

              setCounters((prev) => {
                const next = [...prev];
                next[index] = Math.round(currentValue);
                return next;
              });

              if (currentStep >= steps) {
                clearInterval(timer);
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.25 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden border-t border-[#ede9e1] bg-[#f7f5f0] py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-0 md:gap-y-0">
          {statDefs.map((def, index) => {
            const primary = def.isStatic ? def.formatPrimary(0) : def.formatPrimary(counters[index]);
            const Icon = def.icon;
            return (
              <div
                key={def.label}
                className={`flex justify-center px-2 md:px-4 ${index > 0 ? "md:border-l md:border-[#ede9e1]" : ""}`}
              >
                <div className="group/stat flex max-w-[200px] cursor-default items-start gap-3 text-left md:max-w-none md:gap-4">
                  <span className={iconWrap} aria-hidden>
                    <Icon
                      className="h-[18px] w-[18px] transition-[color] duration-300 ease-out md:h-5 md:w-5"
                      strokeWidth={1.5}
                    />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <span className="inline-flex flex-wrap items-baseline gap-0 whitespace-nowrap">
                      <span className="home-broker-heading text-[40px] leading-none tabular-nums text-[#1e3a5f] md:text-[48px]">
                        {primary}
                      </span>
                      {def.suffix ? (
                        <span className="home-broker-heading text-[40px] leading-none tabular-nums text-[#1e3a5f] md:text-[48px]">
                          {def.suffix}
                        </span>
                      ) : null}
                    </span>
                    <span className="home-broker-overline mt-3 max-w-[140px] text-[11px] font-semibold uppercase leading-snug tracking-[0.06em] text-[#4a5568] md:max-w-[160px] md:text-[12px]">
                      {def.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
