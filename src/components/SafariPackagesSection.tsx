'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import styles from './SafariPackagesSection.module.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export type SafariPackage = {
  id: number;
  name: string;
  country: string;
  days: number;
  tagline: string;
  pace: string[];
  itinerary: { day: string; text: string }[];
  price: string;
  pinColor: string;
  bgColor: string;
  cx: number;
  cy: number;
};

const packages: SafariPackage[] = [
  {
    id: 0,
    name: 'Maasai Mara',
    country: 'Kenya',
    days: 3,
    tagline:
      'Open savannahs, big cat action, and world-class guiding — the most iconic Kenya safari base.',
    pace: ['First-time safari', 'Moderate', 'Jul – Oct peak'],
    itinerary: [
      { day: '1', text: 'Arrive Nairobi, fly to Mara airstrip, afternoon game drive' },
      { day: '2', text: 'Full-day Big Five circuits with migration corridor focus' },
      { day: '3', text: 'Optional sunrise drive, return transfer to Nairobi' },
    ],
    price: '$1,490',
    pinColor: '#A0714F',
    bgColor: '#7A5438',
    cx: 268,
    cy: 195,
  },
  {
    id: 1,
    name: 'Amboseli',
    country: 'Kenya',
    days: 4,
    tagline:
      'Photograph vast elephant herds with Kilimanjaro towering above — unhurried and year-round.',
    pace: ['Photography focus', 'Easy pace', 'Year round'],
    itinerary: [
      { day: '1', text: 'Road transfer from Nairobi, check-in, sunset walk' },
      { day: '2', text: 'Full-day elephant and wetland circuits, Kili backdrop' },
      { day: '3–4', text: 'Dawn photo drives, cultural village, return to Nairobi' },
    ],
    price: '$1,890',
    pinColor: '#6B8B60',
    bgColor: '#4A6645',
    cx: 285,
    cy: 230,
  },
  {
    id: 2,
    name: 'Serengeti',
    country: 'Tanzania',
    days: 6,
    tagline:
      "Six immersive days on Tanzania's endless plains — calving season, balloon flights and Ngorongoro.",
    pace: ['Premium pick', 'Active pace', 'Jan – Mar best'],
    itinerary: [
      { day: '1', text: 'Fly Kilimanjaro to Seronera, luxury bush camp check-in' },
      { day: '2–4', text: 'Full circuits, dawn balloon flight, calving grounds' },
      { day: '5–6', text: 'Ngorongoro crater, farewell dinner, fly out' },
    ],
    price: '$3,200',
    pinColor: '#4A7888',
    bgColor: '#3D5868',
    cx: 300,
    cy: 258,
  },
  {
    id: 3,
    name: 'Zanzibar',
    country: 'Tanzania',
    days: 7,
    tagline: 'Bush thrills paired with powder-white beaches and turquoise Indian Ocean waters.',
    pace: ['Beach & bush', 'Relaxed', 'Year round'],
    itinerary: [
      { day: '1–3', text: 'Serengeti or Mara safari (3 nights bush camp)' },
      { day: '4', text: 'Short flight to Zanzibar, Stone Town spice tour' },
      { day: '5–7', text: 'North coast resort, snorkelling, dhow sunset cruise' },
    ],
    price: '$2,750',
    pinColor: '#3A8070',
    bgColor: '#2D5550',
    cx: 330,
    cy: 225,
  },
];

/** Pairs so each pin connects to every other pin once (complete graph). */
function connectorPairs(ids: number[]): [number, number][] {
  const out: [number, number][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      out.push([ids[i], ids[j]]);
    }
  }
  return out;
}

const AFRICA_MAIN_D =
  'M 112 118 L 158 72 L 218 48 L 282 52 L 323 82 L 331 108 L 327 128 L 342 152 L 356 188 L 366 228 L 372 278 L 366 328 L 346 378 L 312 418 L 268 450 L 218 472 L 168 472 L 122 442 L 88 392 L 72 332 L 72 268 L 88 208 L 112 158 Z';

const AFRICA_HORN_D = 'M 323 82 L 348 74 L 372 88 L 364 118 L 338 108 L 326 98 Z';

const MADAGASCAR_D =
  'M 398 278 L 426 272 L 442 298 L 438 352 L 420 398 L 398 388 L 386 338 L 388 296 Z';

function DetailStripDecor({ kind }: { kind: SafariPackage['id'] }) {
  const o = 0.12;
  if (kind === 0) {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M0 140 Q100 100 200 120 T400 100 L400 180 L0 180 Z" fill="#fff" opacity={o} />
        <path d="M40 130 L55 85 L70 130 Z M120 125 L140 70 L160 125 Z M260 128 L285 75 L310 128 Z" fill="#fff" opacity={o + 0.04} />
      </svg>
    );
  }
  if (kind === 1) {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M200 40 L260 115 L140 115 Z" fill="#fff" opacity={o + 0.05} />
        <path d="M0 150 Q80 120 160 135 T320 125 L400 118 L400 180 L0 180 Z" fill="#fff" opacity={o} />
        <path d="M20 145 L32 105 L44 145 Z M300 138 L318 88 L336 138 Z" fill="#fff" opacity={o} />
      </svg>
    );
  }
  if (kind === 2) {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <path d="M0 125 L400 118 L400 180 L0 180 Z" fill="#fff" opacity={o} />
        <path d="M60 130 L80 88 L100 130 Z M180 128 L202 78 L224 128 Z M310 132 L335 82 L360 132 Z" fill="#fff" opacity={o + 0.04} />
      </svg>
    );
  }
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <path d="M0 95 Q100 75 200 85 T400 78 L400 180 L0 180 Z" fill="#fff" opacity={o} />
      <circle cx="320" cy="48" r="28" fill="#fff" opacity={o * 0.6} />
      <path d="M0 148 Q50 138 100 145 T200 140 L400 135 L400 180 L0 180 Z" fill="#fff" opacity={o + 0.02} />
    </svg>
  );
}

export function SafariPackagesSection({ locale }: { locale: string }) {
  const [activePin, setActivePin] = useState(0);
  const active = packages.find((p) => p.id === activePin) ?? packages[0];
  const pairs = useMemo(() => connectorPairs(packages.map((p) => p.id)), []);

  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} ${styles.section} ${styles.fontSans} w-full py-14 md:py-[72px]`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <header className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className={`${styles.fontSans} text-[10px] font-medium uppercase tracking-[0.18em] text-[#A0714F]`}
              style={{ letterSpacing: '0.18em' }}
            >
              Explore Africa —
            </p>
            <h2 className={`${styles.fontSerif} mt-3 text-[34px] leading-tight text-[#2a2520]`}>
              Choose your{' '}
              <span className="italic text-[#A0714F]" style={{ fontStyle: 'italic' }}>
                Safari
              </span>
            </h2>
          </div>
          <p className={`${styles.fontSans} self-start text-[12px] font-normal text-[#9a9288] md:self-auto md:text-right`}>
            4 destinations
          </p>
        </header>

        <div
          className="flex flex-col overflow-hidden rounded-2xl bg-white md:flex-row"
          style={{
            borderRadius: 16,
            border: '0.5px solid rgba(42, 37, 32, 0.18)',
            boxShadow: '0 18px 50px rgba(26, 22, 18, 0.06)',
          }}
        >
          {/* Map column */}
          <div
            className={`${styles.mapCol} relative h-[320px] flex-[1.15] md:h-[540px] md:min-w-0`}
            style={{ background: '#E8E0D4' }}
          >
            <div className={`${styles.mapScaleWrap} h-full w-full overflow-hidden`}>
              <svg
                className="block h-full w-full"
                viewBox="0 0 520 540"
                role="img"
                aria-label="Africa map with safari destinations"
                preserveAspectRatio="xMidYMid meet"
                style={{ background: '#D4CFC6' }}
              >
                <rect width="520" height="540" fill="#D4CFC6" />

                {/* Grid: equator + meridian */}
                <line
                  x1="0"
                  y1="270"
                  x2="520"
                  y2="270"
                  stroke="#B8AFA0"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  opacity={0.4}
                />
                <line
                  x1="260"
                  y1="0"
                  x2="260"
                  y2="540"
                  stroke="#B8AFA0"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  opacity={0.4}
                />

                <path d={AFRICA_MAIN_D} fill="#C8BFB0" stroke="#B8AFA0" strokeWidth="1" />
                <path d={AFRICA_HORN_D} fill="#C8BFB0" stroke="#B8AFA0" strokeWidth="1" />
                <path d={MADAGASCAR_D} fill="#C8BFB0" stroke="#B8AFA0" strokeWidth="1" />

                <text
                  x="260"
                  y="292"
                  textAnchor="middle"
                  fill="#B8AFA0"
                  opacity={0.35}
                  className={styles.fontSerif}
                  style={{ fontSize: 52, fontWeight: 500, letterSpacing: '0.35em' }}
                >
                  AFRICA
                </text>

                {pairs.map(([a, b]) => {
                  const pa = packages.find((p) => p.id === a)!;
                  const pb = packages.find((p) => p.id === b)!;
                  return (
                    <line
                      key={`${a}-${b}`}
                      x1={pa.cx}
                      y1={pa.cy}
                      x2={pb.cx}
                      y2={pb.cy}
                      stroke="#C0A888"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                      opacity={0.6}
                    />
                  );
                })}

                {packages.map((pkg) => {
                  const selected = activePin === pkg.id;
                  const pillW = Math.max(92, pkg.name.length * 8.2 + 30);
                  return (
                    <g
                      key={pkg.id}
                      role="button"
                      tabIndex={0}
                      className={styles.pinHit}
                      transform={`translate(${pkg.cx}, ${pkg.cy})`}
                      onClick={() => setActivePin(pkg.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActivePin(pkg.id);
                        }
                      }}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={14}
                        fill="none"
                        stroke={pkg.pinColor}
                        strokeWidth={1.5}
                        className={styles.pulseRing}
                      />
                      <circle
                        cx={0}
                        cy={0}
                        r={8}
                        fill={pkg.pinColor}
                        className={styles.pinInnerCircle}
                      />
                      <circle cx={0} cy={0} r={3.5} fill="#fff" className="pointer-events-none" />

                      <g transform={`translate(14, ${-12})`} className="pointer-events-none">
                        <rect
                          x={0}
                          y={0}
                          width={pillW}
                          height={24}
                          rx={10}
                          ry={10}
                          fill={selected ? pkg.pinColor : '#fff'}
                          stroke={pkg.pinColor}
                          strokeWidth={selected ? 0 : 0.5}
                        />
                        <text
                          x={pillW / 2}
                          y={16}
                          textAnchor="middle"
                          fill={selected ? '#fff' : pkg.pinColor}
                          className={styles.fontSerif}
                          style={{ fontSize: 12, fontWeight: 600 }}
                        >
                          {pkg.name}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
            <p
              className={`${styles.fontSans} pointer-events-none absolute bottom-3 left-4 text-[9px] text-[#7a7268]`}
            >
              Click a destination to explore
            </p>
          </div>

          {/* Detail column */}
          <aside className="flex min-h-0 w-full flex-col border-t border-black/10 bg-white md:h-[540px] md:w-[340px] md:min-w-[340px] md:border-l md:border-t-0">
            {active ? (
              <>
                <div className="relative h-[180px] w-full shrink-0 overflow-hidden" style={{ backgroundColor: active.bgColor }}>
                  <DetailStripDecor kind={active.id as SafariPackage['id']} />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.22)]" />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`${styles.fontSans} rounded-full bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm`}
                    >
                      {active.country}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <span
                      className={`${styles.fontSans} rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white`}
                      style={{ background: '#A0714F' }}
                    >
                      {active.days} days
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p
                      className={`${styles.fontSerif} text-[30px] leading-tight text-white`}
                      style={{ fontStyle: 'italic' }}
                    >
                      {active.name}
                    </p>
                  </div>
                </div>

                <div className={`${styles.detailScroll} min-h-0 flex-1 overflow-y-auto px-[18px] pb-0 pt-4`}>
                  <p
                    className={`${styles.fontSans} text-[13px] font-light leading-[1.55] text-[#7a7268]`}
                  >
                    {active.tagline}
                  </p>

                  <p
                    className={`${styles.fontSans} mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A0714F]`}
                    style={{ letterSpacing: '0.14em' }}
                  >
                    PACE &amp; STYLE
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.pace.map((t) => (
                      <span
                        key={t}
                        className={`${styles.fontSans} rounded-full border border-[rgba(42,37,32,0.22)] bg-[#f3efe8] px-2.5 py-1 text-[11px] text-[#5c564e]`}
                        style={{ borderWidth: 0.5 }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p
                    className={`${styles.fontSans} mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#A0714F]`}
                    style={{ letterSpacing: '0.14em' }}
                  >
                    ITINERARY
                  </p>
                  <ol className="mt-3 list-none space-y-4 p-0">
                    {active.itinerary.map((step) => (
                      <li key={`${step.day}-${step.text.slice(0, 12)}`} className="flex gap-3">
                        <div
                          className="flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full border-[1.5px] border-[#A0714F]"
                          style={{ width: 18, height: 18 }}
                        >
                          <span className={`${styles.fontSans} text-[9px] font-semibold text-[#A0714F]`}>
                            {step.day}
                          </span>
                        </div>
                        <p className={`${styles.fontSans} m-0 text-[12px] leading-[1.55] text-[#7a7268]`}>
                          {step.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                <footer
                  className={`${styles.fontSans} mt-auto flex shrink-0 items-center justify-between gap-3 border-t border-black/10 px-[18px] py-4`}
                >
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#9a9288]">
                      From
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                      <span className={`${styles.fontSerif} text-[24px] text-[#2a2520]`}>{active.price}</span>
                      <span className="text-[11px] text-[#9a9288]">/ person</span>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/safaris/contact`}
                    className={`${styles.bookBtn} inline-flex shrink-0 items-center justify-center rounded-lg px-[18px] py-[9px] text-[11px] font-semibold uppercase tracking-[0.1em] text-white no-underline`}
                  >
                    Book now
                  </Link>
                </footer>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8d0c6] text-[#A0714F]"
                  aria-hidden
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                  </svg>
                </div>
                <p className={`${styles.fontSans} text-[13px] font-light leading-relaxed text-[#7a7268]`}>
                  Tap any pin on the map to explore that destination&apos;s safari package.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
