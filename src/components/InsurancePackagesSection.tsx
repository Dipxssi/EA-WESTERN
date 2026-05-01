'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import {
  INSURANCE_SERVICE_GROUPS,
  POPULAR_PACKAGES,
  type InsurancePackageGroup,
  type InsurancePackageItem,
} from '@/data/insuranceServicePackages';

type Variant = 'popular' | 'full';

type InsurancePackagesSectionProps = {
  locale: string;
  variant: Variant;
};

function PackageCard({
  item,
  locale,
  motionDelay,
}: {
  item: InsurancePackageItem;
  locale: string;
  motionDelay: number;
}) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: motionDelay }}
      className="flex min-h-[220px] flex-col rounded-[6px] border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-[var(--color-blue)]">
        <Icon size={18} aria-hidden />
      </div>
      <h4 className="mb-4 font-playfair text-[22px] font-bold leading-[1.15] text-[var(--color-navy)] md:text-[24px]">
        {item.title}
      </h4>
      <p className="mb-6 flex-grow text-[14px] leading-relaxed text-slate-600">{item.desc}</p>
      <Link
        href={`/${locale}/${item.href}`}
        className="inline-flex items-center justify-center self-start rounded-[4px] bg-[var(--color-blue)] px-4 py-3 text-[12px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-navy)]"
      >
        View Policy
      </Link>
    </motion.div>
  );
}

function GroupRow({
  group,
  locale,
  rowIndex,
}: {
  group: InsurancePackageGroup;
  locale: string;
  rowIndex: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: rowIndex * 0.06 }}
        className="flex min-h-[220px] flex-col justify-between rounded-[6px] bg-[var(--color-navy)] p-8 text-white lg:col-span-3"
      >
        <h3 className="font-playfair text-[30px] font-bold leading-[1.05] md:text-[34px]">{group.title}</h3>
        <div>
          <Link
            href={`/${locale}/insurance/solutions`}
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white"
          >
            View All <ArrowRight size={14} aria-hidden />
          </Link>
          <p className="mt-6 text-[14px] leading-relaxed text-white/75">{group.blurb}</p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:col-span-9">
        {group.items.map((item, i) => (
          <PackageCard key={item.title} item={item} locale={locale} motionDelay={0.08 + i * 0.06} />
        ))}
      </div>
    </div>
  );
}

function PopularFlipCard({
  item,
  locale,
}: {
  item: InsurancePackageItem;
  locale: string;
}) {
  const Icon = item.icon;

  return (
    <div className="group h-[460px] w-full cursor-pointer text-left [perspective:1200px]">
      <div
        className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-[14px] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          style={{
            backgroundImage: `url('${item.image ?? '/images/insurance-hero-panel.png'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            {item.badge ?? 'Popular'}
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-[var(--color-blue)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
            {item.duration ?? 'Popular'}
          </div>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <h3 className="font-playfair text-[42px] leading-[1.02]">{item.title}</h3>
            <p className="mt-2 font-sans text-[14px] font-light leading-[1.6] text-white/85">{item.desc}</p>
            <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-blue-300">
              Hover to view details
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex h-full w-full flex-col rounded-[14px] border border-black/10 bg-[var(--color-navy)] p-6 text-white [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon size={20} className="text-blue-300" />
              <h3 className="font-playfair text-[28px] leading-none">{item.title}</h3>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em]">
              {item.duration ?? 'Popular'}
            </span>
          </div>
          <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] text-blue-300">What you get</p>
          <ul className="space-y-3 font-sans text-[14px] leading-[1.5] text-white/85">
            {(item.highlights ?? []).slice(0, 3).map((line) => (
              <li key={line} className="flex gap-2">
                <Check size={14} className="mt-[3px] shrink-0 text-blue-300" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Link
              href={`/${locale}/${item.href}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 border border-blue-300/60 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-200 transition-colors hover:bg-blue-500/20 hover:text-white"
            >
              View policy <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InsurancePackagesSection({ locale, variant }: InsurancePackagesSectionProps) {
  const isPopular = variant === 'popular';

  return (
    <section className="bg-[var(--color-slate)] py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 text-sm font-bold uppercase tracking-widest text-[var(--color-blue)]">
              Our Services
            </div>
            <h2 className="font-playfair text-[38px] font-bold leading-[1.1] text-[var(--color-navy)] md:text-[50px]">
              Popular Services
            </h2>
            <p className="mt-5 max-w-[760px] text-[15px] leading-relaxed text-slate-600 md:text-[17px]">
              Trusted by families, professionals, and growing businesses, these are our most requested insurance solutions—designed for reliable protection, clear advice, and responsive support when it matters most.
            </p>
          </div>
          <Link
            href={`/${locale}/insurance/solutions`}
            className="flex items-center gap-2 border-b-2 border-[var(--color-blue)] pb-1 font-bold text-[var(--color-blue)] transition-all hover:gap-4"
          >
            View All <ArrowRight size={20} aria-hidden />
          </Link>
        </div>

        {isPopular ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {POPULAR_PACKAGES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: 0.06 + i * 0.07 }}
                >
                  <PopularFlipCard item={item} locale={locale} />
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {INSURANCE_SERVICE_GROUPS.map((group, rowIndex) => (
              <GroupRow key={group.title} group={group} locale={locale} rowIndex={rowIndex} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
