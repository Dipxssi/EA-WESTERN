"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Binoculars, Camera, Flame, MapPin, Mountain, Tent, Users, Waves, Plane } from 'lucide-react';

const destinationPackages = [
  {
    destination: 'Maasai Mara',
    icon: Binoculars,
    image: '/images/masai mara.png',
    country: 'Kenya',
    duration: '3 Days',
    description: 'Open savannahs, big cat action, and world-class guiding make this the most iconic Kenya safari base.',
    overview:
      'This 3-day Maasai Mara safari is structured to maximize wildlife viewing in a short window, with practical pacing and minimal transit fatigue.',
    itinerary: [
      { day: 'Day 1', plan: 'Arrive from Nairobi, check in, and start with an afternoon game drive.' },
      { day: 'Day 2', plan: 'Full-day game circuits with strong Big Five and migration corridor focus.' },
      { day: 'Day 3', plan: 'Optional sunrise drive, then return transfer to Nairobi.' },
    ],
    activities: [
      'Morning and evening game drives tracking lion, cheetah, and elephant',
      'Great Migration river crossings in season (Jul-Oct)',
      'Maasai village visits and local cultural storytelling',
      'Sunrise hot-air balloon safari with bush breakfast',
    ],
    arrivalHub: 'Land at Nairobi (NBO)',
    flightPlan: 'Fly Wilson (WIL) to Maasai Mara airstrip',
    bestFor: 'First-time safari',
    pace: 'Moderate',
    season: 'Seasonal highlight',
  },
  {
    destination: 'Amboseli',
    icon: Mountain,
    image: '/images/Amboseli.png',
    country: 'Kenya',
    duration: '2 Days',
    description: 'Known for giant tuskers and dramatic Kilimanjaro views, ideal for scenic wildlife photography.',
    overview:
      'A short, high-impact safari centered on elephant herds and mountain views, designed for weekend escapes and photography-focused travel.',
    itinerary: [
      { day: 'Day 1', plan: 'Transfer from Nairobi, lodge check-in, and sunset game drive.' },
      { day: 'Day 2', plan: 'Early morning drive and return transfer after breakfast.' },
    ],
    activities: [
      'Elephant-focused drives across open marsh and dry plains',
      'Kilimanjaro sunrise and sunset photo sessions',
      'Birding around wetlands and seasonal swamps',
      'Sundowner stops overlooking the mountain line',
    ],
    arrivalHub: 'Land at Nairobi (NBO)',
    flightPlan: 'Road transfer or short hop to Amboseli',
    bestFor: 'Photography',
    pace: 'Relaxed',
    season: 'Year-round',
  },
  {
    destination: 'Serengeti & Ngorongoro',
    icon: Camera,
    image: '/images/Crater.png',
    country: 'Tanzania',
    duration: '5 Days',
    description: 'A Tanzania classic that combines vast predator-rich plains with the unique crater ecosystem.',
    overview:
      'This route combines broad Serengeti game loops with Ngorongoro crater depth for a balanced, high-value Tanzania safari arc.',
    itinerary: [
      { day: 'Day 1', plan: 'Arrival transfer and evening game orientation.' },
      { day: 'Day 2-4', plan: 'Serengeti and Ngorongoro circuits with flexible wildlife tracking.' },
      { day: 'Day 5', plan: 'Breakfast and onward departure transfer.' },
    ],
    activities: [
      'Full-day Serengeti game loops for predator sightings',
      'Ngorongoro crater descent for dense wildlife encounters',
      'Migration trail tracking with specialist naturalist guides',
      'Luxury tented camp evenings under clear night skies',
    ],
    arrivalHub: 'Land at Arusha/Kilimanjaro (JRO)',
    flightPlan: 'Regional bush flight to Serengeti airstrip',
    bestFor: 'Wildlife depth',
    pace: 'Active',
    season: 'Seasonal highlight',
  },
  {
    destination: 'Uganda Gorilla Highlands',
    icon: Users,
    image: '/images/gorilla-trek.jpg',
    country: 'Uganda',
    duration: '3 Days',
    description: 'Forest trekking and intimate primate encounters for travelers seeking deep, once-in-a-lifetime moments.',
    overview:
      'A permit-based gorilla experience with careful logistical support, balancing trekking intensity with recovery and comfort.',
    itinerary: [
      { day: 'Day 1', plan: 'Arrive, transfer to lodge, and pre-trek briefing.' },
      { day: 'Day 2', plan: 'Guided gorilla trekking with controlled pace and return recovery.' },
      { day: 'Day 3', plan: 'Optional short nature walk and onward departure.' },
    ],
    activities: [
      'Permitted mountain gorilla trekking in Bwindi region',
      'Waterfall and rainforest nature walks',
      'Batwa community history and cultural exchange sessions',
      'Recovery day with lake views and lodge wellness options',
    ],
    arrivalHub: 'Land at Entebbe (EBB)',
    flightPlan: 'Domestic flight to Kihihi/Kisoro, then lodge transfer',
    bestFor: 'Adventure',
    pace: 'Active',
    season: 'Year-round',
  },
  {
    destination: 'Diani Coast Extension',
    icon: Waves,
    image: '/images/Diana Beach.jpg',
    country: 'Kenya Coast',
    duration: '4 Days',
    description: 'The perfect post-safari reset, balancing Indian Ocean leisure with soft adventure.',
    overview:
      'A coastal extension built for decompression after safari, with optional activity layers based on your preferred pace.',
    itinerary: [
      { day: 'Day 1', plan: 'Arrive on the coast, check in, and settle into beach time.' },
      { day: 'Day 2-3', plan: 'Flexible days: reef trips, dhow options, spa, or pure rest.' },
      { day: 'Day 4', plan: 'Breakfast and departure transfer.' },
    ],
    activities: [
      'Snorkeling and reef excursions on clear-water days',
      'Sunset dhow sailing and beachfront dining',
      'Kite surfing and paddle boarding (seasonal)',
      'Spa, relaxation, and curated coastal day trips',
    ],
    arrivalHub: 'Land at Nairobi (NBO)',
    flightPlan: 'Fly to Ukunda (UKA) or Mombasa (MBA)',
    bestFor: 'Relaxation',
    pace: 'Relaxed',
    season: 'Year-round',
  },
  {
    destination: 'Nairobi City Add-on',
    icon: Flame,
    image: '/images/nairobi-city.jpg',
    country: 'Kenya',
    duration: '1 Day',
    description: 'A short but meaningful urban stop that blends conservation, history, and easy logistics.',
    overview:
      'A compact urban extension ideal before departure or after safari, combining conservation sites with light city exploration.',
    itinerary: [
      { day: 'Day 1', plan: 'Nairobi National Park, conservation visits, and curated local experiences.' },
    ],
    activities: [
      'Nairobi National Park half-day game drive',
      'Giraffe Centre and elephant orphanage visit',
      'Curio market walk and local coffee tasting',
      'Flexible rest day before international departure',
    ],
    arrivalHub: 'Land at Nairobi (NBO)',
    flightPlan: 'No domestic flight needed for this add-on',
    bestFor: 'Short stays',
    pace: 'Relaxed',
    season: 'Year-round',
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
                What You Can Experience
              </h1>
              <p className="mx-auto mt-6 max-w-[560px] font-sans text-[16px] font-light leading-[1.75] text-white/80">
                You&apos;ve explored the destinations. This page answers the next question: what exactly can you do in each one? Browse the
                destination packages below for a practical view of daily experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-[80px] md:py-[110px]">
          <div className="mx-auto mb-12 max-w-[1200px] px-6 md:px-10">
            <div className="mb-4 h-[1px] w-[48px] bg-[var(--color-terracotta)]" />
            <h2 className="font-playfair text-[32px] text-[var(--color-deep-green)] md:text-[42px]">Editorial Journey Plans</h2>
            <p className="mt-4 max-w-[680px] font-sans text-[15px] font-light leading-[1.8] text-[#6a5040]">
              A full-bleed itinerary format focused on what matters first: image, duration and pace, then your route and day-by-day plan.
            </p>
          </div>

          <div className="space-y-16">
            {destinationPackages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.destination}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.05 }}
                  className="overflow-hidden border-y border-black/10 bg-white/90 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-[52%_48%] ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                    <div className="relative min-h-[320px] lg:min-h-[620px]">
                      <img src={item.image} alt={item.destination} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
                      <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-[rgba(11,31,46,0.62)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold)] backdrop-blur-md">
                        <MapPin size={13} />
                        <span>{item.country}</span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="mb-4 flex flex-wrap gap-2">
                          <span className="inline-block rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                            {item.duration}
                          </span>
                          <span className="inline-block rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                            Pace: {item.pace}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep-green)] shadow-sm">
                            <Icon size={18} strokeWidth={1.8} />
                          </div>
                          <h3 className="font-playfair text-[28px] leading-tight md:text-[38px]">{item.destination}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F8F3E8] p-7 md:p-10 lg:p-14">
                      <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">Itinerary Snapshot</div>
                      <p className="font-sans text-[16px] md:text-[18px] font-light leading-[1.85] text-[#6a5040]">{item.description}</p>

                      <div className="mt-7 rounded-[10px] border border-black/10 bg-white/70 px-5 py-5 md:px-6">
                        <div className="mb-3 text-[11px] uppercase tracking-[0.15em] text-[var(--color-terracotta)]">Travel Flow</div>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <MapPin size={15} className="text-[var(--color-terracotta)]" />
                            <span className="font-sans text-[14px] md:text-[15px] text-[#6a5040]">{item.arrivalHub}</span>
                          </div>
                          <div className="ml-[7px] h-4 w-[1px] bg-[var(--color-terracotta)]/35" />
                          <div className="flex items-center gap-3">
                            <div className="flex items-center text-[var(--color-terracotta)]">
                              <span className="w-8 border-t border-dashed border-[var(--color-terracotta)]/70" />
                              <Plane size={13} className="mx-2" />
                              <span className="w-8 border-t border-dashed border-[var(--color-terracotta)]/70" />
                            </div>
                            <span className="font-sans text-[14px] md:text-[15px] text-[#6a5040]">{item.flightPlan}</span>
                          </div>
                          <div className="ml-[7px] h-4 w-[1px] bg-[var(--color-terracotta)]/35" />
                          <div className="flex items-center gap-3">
                            <MapPin size={15} className="text-[var(--color-terracotta)]" />
                            <span className="font-sans text-[14px] md:text-[15px] text-[#6a5040]">Arrive and settle in {item.destination}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-deep-green)] border border-black/10">Best For: {item.bestFor}</span>
                        <span className="rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[0.08em] text-[var(--color-deep-green)] border border-black/10">Season: {item.season}</span>
                      </div>

                      <div className="mt-7 border-t border-black/10 pt-6">
                        <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">Overview</div>
                        <p className="font-sans text-[15px] md:text-[16px] font-light leading-[1.85] text-[#6a5040]">{item.overview}</p>
                      </div>

                      <div className="mt-5 border-t border-black/10 pt-6">
                        <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-terracotta)]">Day-by-Day</div>
                        <div className="space-y-2.5">
                          {item.itinerary.map((step) => (
                            <div key={`${item.destination}-${step.day}`} className="flex items-start gap-3 font-sans text-[15px] md:text-[16px] font-light leading-[1.85] text-[#6a5040]">
                              <span className="mt-[10px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[var(--color-terracotta)]" />
                              <p>
                                <span className="font-medium text-[var(--color-deep-green)]">{step.day}:</span> {step.plan}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
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
              <h2 className="font-playfair text-[30px] leading-tight md:text-[38px]">Build Your Own Rhythm</h2>
              <p className="mt-4 font-sans text-[15px] font-light leading-[1.75] text-white/75">
                These are sample activity structures. Your final itinerary is fully customized based on travel duration, preferred pace, season
                and wildlife movement, and accommodation level. We provide transparent pricing across park fees, transport options, and lodge tiers.
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
