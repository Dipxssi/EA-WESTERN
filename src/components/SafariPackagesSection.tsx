'use client';

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
  priceFrom: string;
  image: string;
};

const packages: SafariPackage[] = [
  {
    id: 0,
    name: 'Maasai Mara',
    country: 'Kenya',
    days: 3,
    tagline:
      'Open savannahs, big cat action, and world-class guiding — the most iconic Kenya safari base.',
    priceFrom: '$1,490',
    image: '/images/safari-experience.jpg',
  },
  {
    id: 1,
    name: 'Amboseli',
    country: 'Kenya',
    days: 4,
    tagline:
      'Photograph vast elephant herds with Kilimanjaro towering above — unhurried and year-round.',
    priceFrom: '$1,890',
    image: '/images/tour3.jpg',
  },
  {
    id: 2,
    name: 'Serengeti',
    country: 'Tanzania',
    days: 6,
    tagline:
      "Six immersive days on Tanzania's endless plains — calving season, balloon flights and Ngorongoro.",
    priceFrom: '$3,200',
    image: '/images/tours.png',
  },
  {
    id: 3,
    name: 'Zanzibar',
    country: 'Tanzania',
    days: 7,
    tagline: 'Bush thrills paired with powder-white beaches and turquoise Indian Ocean waters.',
    priceFrom: '$2,750',
    image: '/images/maasai.jpg',
  },
];

export function SafariPackagesSection({ locale }: { locale: string }) {
  const scrollingPackages = [...packages, ...packages];

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

        <div className={styles.scrollerViewport}>
          <div className={styles.scrollerTrack}>
            {scrollingPackages.map((pkg, idx) => (
              <Link
                key={`${pkg.id}-${idx}`}
                href={`/${locale}/safaris/contact`}
                className={`${styles.packageCard} no-underline`}
                style={{ backgroundImage: `url("${pkg.image}")` }}
              >
                <div className={styles.packageOverlay} />
                <div className={styles.packageMetaTop}>
                  <span className={styles.packagePill}>{pkg.country}</span>
                  <span className={styles.packagePillAccent}>{pkg.days} days</span>
                </div>
                <div className={styles.packageMetaBottom}>
                  <h3 className={`${styles.fontSerif} ${styles.packageTitle}`}>{pkg.name}</h3>
                  <p className={`${styles.fontSans} ${styles.packageTagline}`}>{pkg.tagline}</p>
                  <p className={`${styles.fontSans} ${styles.packagePrice}`}>From {pkg.priceFrom} / person</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
