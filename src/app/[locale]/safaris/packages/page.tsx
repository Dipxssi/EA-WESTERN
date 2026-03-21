"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Binoculars, Camera, Flame, MapPinned, Mountain, Tent, Users, Waves } from 'lucide-react';

const destinationPackages = [
  {
    destination: 'Maasai Mara',
    icon: Binoculars,
    image: '/images/masai mara.png',
    country: 'Kenya',
    duration: '3 Days',
    description: 'Open savannahs, big cat action, and world-class guiding make this the most iconic Kenya safari base.',
    activities: [
      'Morning and evening game drives tracking lion, cheetah, and elephant',
      'Great Migration river crossings in season (Jul-Oct)',
      'Maasai village visits and local cultural storytelling',
      'Sunrise hot-air balloon safari with bush breakfast',
    ],
  },
  {
    destination: 'Amboseli',
    icon: Mountain,
    image: '/images/Amboseli.png',
    country: 'Kenya',
    duration: '2 Days',
    description: 'Known for giant tuskers and dramatic Kilimanjaro views, ideal for scenic wildlife photography.',
    activities: [
      'Elephant-focused drives across open marsh and dry plains',
      'Kilimanjaro sunrise and sunset photo sessions',
      'Birding around wetlands and seasonal swamps',
      'Sundowner stops overlooking the mountain line',
    ],
  },
  {
    destination: 'Serengeti & Ngorongoro',
    icon: Camera,
    image: '/images/Crater.png',
    country: 'Tanzania',
    duration: '5 Days',
    description: 'A Tanzania classic that combines vast predator-rich plains with the unique crater ecosystem.',
    activities: [
      'Full-day Serengeti game loops for predator sightings',
      'Ngorongoro crater descent for dense wildlife encounters',
      'Migration trail tracking with specialist naturalist guides',
      'Luxury tented camp evenings under clear night skies',
    ],
  },
  {
    destination: 'Uganda Gorilla Highlands',
    icon: Users,
    image: '/images/gorilla-trek.jpg',
    country: 'Uganda',
    duration: '3 Days',
    description: 'Forest trekking and intimate primate encounters for travelers seeking deep, once-in-a-lifetime moments.',
    activities: [
      'Permitted mountain gorilla trekking in Bwindi region',
      'Waterfall and rainforest nature walks',
      'Batwa community history and cultural exchange sessions',
      'Recovery day with lake views and lodge wellness options',
    ],
  },
  {
    destination: 'Diani Coast Extension',
    icon: Waves,
    image: '/images/Diana Beach.jpg',
    country: 'Kenya Coast',
    duration: '4 Days',
    description: 'The perfect post-safari reset, balancing Indian Ocean leisure with soft adventure.',
    activities: [
      'Snorkeling and reef excursions on clear-water days',
      'Sunset dhow sailing and beachfront dining',
      'Kite surfing and paddle boarding (seasonal)',
      'Spa, relaxation, and curated coastal day trips',
    ],
  },
  {
    destination: 'Nairobi City Add-on',
    icon: Flame,
    image: '/images/nairobi-city.jpg',
    country: 'Kenya',
    duration: '1 Day',
    description: 'A short but meaningful urban stop that blends conservation, history, and easy logistics.',
    activities: [
      'Nairobi National Park half-day game drive',
      'Giraffe Centre and elephant orphanage visit',
      'Curio market walk and local coffee tasting',
      'Flexible rest day before international departure',
    ],
  },
];

export default function SafariPackagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="theme-safari bg-[var(--color-cream)] text-[#333] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-terracotta)] selection:text-[var(--color-cream)]">
      <SafariNavigation locale={locale} />

      <main className="w-full pt-20">
        <section className="relative w-full overflow-hidden bg-[var(--color-deep-green)] pb-[100px] pt-[100px] md:pt-[120px]">
          <div className="absolute inset-0">
            <img
              src="/images/safari-pg.jpg"
              alt=""
              className="h-full w-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-deep-green)] via-[var(--color-deep-green)]/90 to-[var(--color-cream)]" />
          </div>
          <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-[1px] w-[40px] bg-[var(--color-gold)]" />
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  Packages
                </span>
                <div className="h-[1px] w-[40px] bg-[var(--color-gold)]" />
              </div>
              <h1 className="font-playfair text-[44px] leading-[1.1] text-[var(--color-cream)] md:text-[56px]">
                What you can do <em className="pr-1 font-serif italic text-[var(--color-gold)]">here</em>
              </h1>
              <p className="mx-auto mt-6 max-w-[560px] font-sans text-[16px] font-light leading-[1.75] text-white/80">
                You already saw our destinations. This page answers the next question: what exactly can you do in each one? Browse the
                destination packages below for a practical view of daily experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-[100px] md:px-10">
          <div className="mb-16 max-w-[640px]">
            <div className="mb-4 h-[1px] w-[48px] bg-[var(--color-terracotta)]" />
            <h2 className="font-playfair text-[32px] text-[var(--color-deep-green)] md:text-[40px]">Things to do by destination</h2>
            <p className="mt-4 font-sans text-[15px] font-light leading-[1.8] text-[#6a5040]">
              Each destination has a different rhythm. Use this as your quick guide to what your days can look like in each place, then we
              tailor the final route to your pace and season.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {destinationPackages.map((item, idx) => {
              const Icon = item.icon;
              return (
              <motion.article
                key={item.destination}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="group overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.destination}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(11,31,46,0.7)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold)] backdrop-blur-md">
                      <MapPinned size={13} />
                      <span>{item.country}</span>
                    </div>
                    <div className="rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {item.duration}
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep-green)]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-playfair text-[24px] text-white md:text-[28px]">{item.destination}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <p className="font-sans text-[15px] font-light leading-[1.75] text-[#6a5040]">{item.description}</p>
                  <div className="mt-5 border-t border-black/8 pt-5">
                    <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">Things to do</div>
                    <ul className="space-y-2.5">
                      {item.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-3 font-sans text-[14px] font-light leading-[1.7] text-[#6a5040]">
                          <span className="mt-[9px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[var(--color-terracotta)]" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
              );
            })}
          </div>
        </section>

        <section className="bg-[var(--color-deep-green)] px-6 py-[100px] text-[var(--color-cream)] md:px-10">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-[520px]">
              <Tent className="mx-auto mb-6 text-[var(--color-gold)] lg:mx-0" size={36} strokeWidth={1} />
              <h2 className="font-playfair text-[30px] leading-tight md:text-[38px]">Build your own rhythm</h2>
              <p className="mt-4 font-sans text-[15px] font-light leading-[1.75] text-white/75">
                Longer stays allow rest days between heavy drive schedules, or a split between two ecosystems. We quote transparently—
                park fees, flying vs driving, and camp tier—so you know what shapes the final package.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/safaris/contact`}
                className="inline-flex items-center justify-center border border-[var(--color-gold)] bg-[var(--color-gold)] px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-deep-green)] transition-colors hover:bg-transparent hover:text-[var(--color-gold)]"
              >
                Plan a trip
              </Link>
              <Link
                href={`/${locale}/safaris/destinations`}
                className="inline-flex items-center justify-center border border-[var(--color-cream)]/30 px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-cream)] transition-colors hover:bg-white/10"
              >
                View destinations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SafariFooter />
    </div>
  );
}
