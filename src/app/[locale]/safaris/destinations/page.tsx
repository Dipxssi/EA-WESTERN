"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinned, Binoculars, Mountain, Camera, Flame, Users, Waves, Compass } from 'lucide-react';

const allDestinations = [
  {
    title: 'Maasai Mara Classic',
    icon: Binoculars,
    description: 'Experience the Big Five in Africa’s most iconic wildlife reserve. Deep into the heart of the Mara for breathtaking landscapes, sweeping savannahs, and the world-famous Great Migration.',
    image: '/images/masai mara.png',
    tag: 'Kenya',
    duration: '3 Days',
    slug: 'maasai-mara',
    bestFor: 'First-time safari',
    pace: 'Moderate',
    season: 'Seasonal highlight',
    activities: [
      'Morning and evening game drives for big cat sightings',
      'Great Migration river crossings in season (Jul-Oct)',
      'Maasai cultural village visits and storytelling',
      'Optional sunrise balloon safari and bush breakfast',
    ],
  },
  {
    title: 'Amboseli National Park',
    icon: Mountain,
    description: 'Home of legendary large tuskers and the most spectacular views of Mount Kilimanjaro. Enjoy stunning sceneries and epic herds traversing the dusty plains.',
    image: '/images/Amboseli.png',
    tag: 'Kenya',
    duration: '2 Days',
    slug: 'amboseli',
    bestFor: 'Photography',
    pace: 'Relaxed',
    season: 'Year-round',
    activities: [
      'Elephant-focused drives through open plains and marsh',
      'Kilimanjaro sunrise and sunset photography sessions',
      'Birding around seasonal wetlands',
      'Sundowner stops at scenic viewpoints',
    ],
  },
  {
    title: 'Serengeti Endless Plains',
    icon: Camera,
    description: 'The definitive East African safari. Witness the sweeping golden grasslands dotted with acacia trees, teeming organically with predators and prey in constant pursuit.',
    image: '/images/serengeti.png',
    tag: 'Tanzania',
    duration: '5 Days',
    slug: 'serengeti',
    bestFor: 'Wildlife depth',
    pace: 'Active',
    season: 'Seasonal highlight',
    activities: [
      'Full-day game loops across predator-rich plains',
      'Migration tracking with specialist naturalist guides',
      'Landscape and wildlife photography sessions',
      'Luxury camp evenings under clear skies',
    ],
  },
  {
    title: 'Ngorongoro Crater',
    icon: Flame,
    description: 'Descend into the world’s largest inactive volcanic caldera. A unique micro-climate supporting dense wildlife populations including the endangered black rhino.',
    image: '/images/Crater.png', // Placeholder for another image
    tag: 'Tanzania',
    duration: '2 Days',
    slug: 'ngorongoro',
    bestFor: 'Photography',
    pace: 'Moderate',
    season: 'Year-round',
    activities: [
      'Crater descent for dense wildlife encounters',
      'Black rhino tracking with expert guides',
      'Birdlife and hippo pool viewing stops',
      'Rim viewpoints and conservation history briefings',
    ],
  },
  {
    title: 'Uganda Gorilla Trekking',
    icon: Users,
    description: 'An intimate, soul-stirring encounter with wild mountain gorillas in the misty, dense canopy of the Bwindi Impenetrable Forest.',
    image: '/images/gorilla-trek.jpg',
    tag: 'Uganda',
    duration: '3 Days',
    slug: 'gorilla-trekking',
    bestFor: 'Adventure',
    pace: 'Active',
    season: 'Year-round',
    activities: [
      'Permitted mountain gorilla trekking experience',
      'Forest and waterfall guided nature walks',
      'Batwa community cultural exchange sessions',
      'Lodge recovery day with lake or highland views',
    ],
  },
  {
    title: 'Diani Beach Escape',
    icon: Waves,
    description: 'The perfect end to an intense safari. Where impossibly blue Indian Ocean waters meet pristine, powder-white sands. Pure relaxation and coastal luxury.',
    image: '/images/Diana Beach.jpg',
    tag: 'Kenya Beach',
    duration: '4 Days',
    slug: 'diani',
    bestFor: 'Relaxation',
    pace: 'Relaxed',
    season: 'Year-round',
    activities: [
      'Snorkeling and reef excursions on clear-water days',
      'Sunset dhow sailing and beachfront dining',
      'Kite surfing and paddle boarding (seasonal)',
      'Spa sessions and curated coastal day trips',
    ],
  },
];

export default function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
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
                  Destinations
                </span>
                <div className="h-[1px] w-[40px] bg-[var(--color-gold)]" />
              </div>
              <h1 className="font-playfair text-[44px] leading-[1.1] text-[var(--color-cream)] md:text-[56px]">
                Iconic Destinations, Thoughtfully Designed
              </h1>
              <p className="mx-auto mt-6 max-w-[560px] font-sans text-[16px] font-light leading-[1.75] text-white/80">
                Explore our curated safari collection across East Africa. Compare route pace, seasonality, and travel style, then open a destination to view the full details.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-[100px] md:px-10">
          <div className="mb-16 max-w-[640px]">
            <div className="mb-4 h-[1px] w-[48px] bg-[var(--color-terracotta)]" />
            <h2 className="font-playfair text-[32px] text-[var(--color-deep-green)] md:text-[40px]">Browse by Destination</h2>
            <p className="mt-4 font-sans text-[15px] font-light leading-[1.8] text-[#6a5040]">
              Each destination has a different atmosphere and travel rhythm. Use these overviews to choose your starting point, then open the full page for deeper itinerary details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {allDestinations.map((dest, idx) => {
              const Icon = dest.icon;
              return (
                <motion.article
                  key={dest.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.05 }}
                  className="group overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(11,31,46,0.7)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold)] backdrop-blur-md">
                        <MapPinned size={13} />
                        <span>{dest.tag}</span>
                      </div>
                      <div className="rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                        {dest.duration}
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep-green)]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <h3 className="font-playfair text-[24px] text-white md:text-[28px]">{dest.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="font-sans text-[15px] font-light leading-[1.75] text-[#6a5040]">{dest.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--color-cream)] px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-deep-green)] border border-black/10">Best For: {dest.bestFor}</span>
                      <span className="rounded-full bg-[var(--color-cream)] px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-deep-green)] border border-black/10">Pace: {dest.pace}</span>
                      <span className="rounded-full bg-[var(--color-cream)] px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-deep-green)] border border-black/10">Season: {dest.season}</span>
                    </div>
                    <div className="mt-5 border-t border-black/8 pt-5">
                      <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">Things to do</div>
                      <ul className="space-y-2.5">
                        {dest.activities.map((activity: string) => (
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
              <Compass className="mx-auto mb-6 text-[var(--color-gold)] lg:mx-0" size={36} strokeWidth={1} />
              <h2 className="font-playfair text-[30px] leading-tight md:text-[38px]">Start Planning Your Safari</h2>
              <p className="mt-4 font-sans text-[15px] font-light leading-[1.75] text-white/75">
                Choose a destination and we will design a complete plan around your travel dates, comfort level, and activity preferences.
                From transport to accommodation, every detail is coordinated by one team.
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
                href={`/${locale}/safaris/packages`}
                className="inline-flex items-center justify-center border border-[var(--color-cream)]/30 px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-cream)] transition-colors hover:bg-white/10"
              >
                View packages
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <SafariFooter />
    </div>
  );
}
