"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Binoculars, Camera, Flame, Mountain, Tent, Users, Waves } from 'lucide-react';

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

  const featuredPackages = destinationPackages.slice(0, 3);

  return (
    <div className="theme-safari bg-[#f7f5f0] text-[#4a5568] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[#c9a96e] selection:text-[#1a2e45]">
      <SafariNavigation locale={locale} />

      <main className="w-full pt-20">
        <section className="relative w-full overflow-hidden bg-[#f7f5f0] pb-[100px] pt-[100px] md:pt-[120px]">
          <div className="absolute inset-0">
            <img
              src="/images/masai mara.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-[800px] rounded-[14px] bg-white/55 px-6 py-8 text-center shadow-[0_10px_35px_rgba(0,0,0,0.18)] backdrop-blur-[3px] md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-[1px] w-[40px] bg-[#8a6430]" />
                <span className="rounded-full bg-white/70 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8a6430]">
                  Packages
                </span>
                <div className="h-[1px] w-[40px] bg-[#8a6430]" />
              </div>
              <h1 className="font-playfair text-[44px] font-semibold leading-[1.1] text-[#10233a] [text-shadow:0_2px_8px_rgba(255,255,255,0.5)] md:text-[56px]">
                What You Can Experience
              </h1>
              <p className="mx-auto mt-6 max-w-[560px] font-sans text-[16px] font-normal leading-[1.75] text-[#1f3046] [text-shadow:0_1px_6px_rgba(255,255,255,0.4)]">
                You&apos;ve explored the destinations. This page answers the next question: what exactly can you do in each one? Browse the
                destination packages below for a practical view of daily experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-[80px] md:py-[110px]">
          <div className="mx-auto mb-12 max-w-[1200px] px-6 md:px-10">
            <div className="mb-4 h-[1px] w-[48px] bg-[#c9a96e]" />
            <h2 className="font-playfair text-[32px] text-[#1a2e45] md:text-[42px]">Editorial Journey Plans</h2>
            <p className="mt-4 max-w-[680px] font-sans text-[15px] font-light leading-[1.8] text-[#4a5568]">
              Tap a card to flip it and preview what you can do there.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-10">
            {featuredPackages.map((item) => (
              <div
                key={item.destination}
                className="flip-card h-[460px] w-full text-left"
              >
                <div className="flip-card-inner">
                  <div
                    className="flip-card-face flip-card-front relative h-full w-full overflow-hidden rounded-[14px]"
                    style={{ backgroundImage: `url('${item.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {item.country}
                    </div>
                    <div className="absolute right-4 top-4 rounded-full bg-[#c9a96e] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#1e3a5f]">
                      {item.duration}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="font-playfair text-[36px] leading-[1.03]">{item.destination}</h3>
                      <p className="mt-2 font-sans text-[14px] font-light leading-[1.6] text-white/85">{item.description}</p>
                      <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold)]">Tap to flip</p>
                    </div>
                  </div>

                  <div className="flip-card-face flip-card-back flex h-full w-full flex-col rounded-[14px] border border-[#dcd8cf] bg-[#f7f5f0] p-6 text-[#1a2e45]">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon size={20} className="text-[#c9a96e]" />
                        <h3 className="font-playfair text-[28px] leading-none">{item.destination}</h3>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#4a5568] border border-[#ede9e1]">{item.duration}</span>
                    </div>
                    <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] text-[#4a7fa5]">What you can do here</p>
                    <ul className="space-y-3 font-sans text-[14px] leading-[1.5] text-[#4a5568]">
                      {item.activities.slice(0, 4).map((activity) => (
                        <li key={activity} className="flex gap-2">
                          <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#c9a96e]" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${locale}/safaris/contact`}
                      className="mt-auto inline-flex items-center justify-center border border-[#c9a96e] bg-[#c9a96e] px-5 py-3 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e3a5f] transition-colors hover:bg-[#a8823d] hover:text-[#1a2e45]"
                    >
                      Plan this package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f5f0] px-6 py-[100px] text-[#1a2e45] md:px-10">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-[520px]">
              <Tent className="mx-auto mb-6 text-[var(--color-gold)] lg:mx-0" size={36} strokeWidth={1} />
              <h2 className="font-playfair text-[30px] leading-tight md:text-[38px]">Build Your Own Rhythm</h2>
              <p className="mt-4 font-sans text-[15px] font-light leading-[1.75] text-[#4a5568]">
                These are sample activity structures. Your final itinerary is fully customized based on travel duration, preferred pace, season
                and wildlife movement, and accommodation level. We provide transparent pricing across park fees, transport options, and lodge tiers.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/safaris/contact`}
                className="inline-flex items-center justify-center border border-[#c9a96e] bg-[#c9a96e] px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e3a5f] transition-colors hover:bg-[#a8823d] hover:text-[#1a2e45]"
              >
                Plan a trip
              </Link>
              <Link
                href={`/${locale}/safaris/destinations`}
                className="inline-flex items-center justify-center border border-[#1e3a5f]/30 px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#1e3a5f] transition-colors hover:bg-[#ede9e1]"
              >
                View destinations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SafariFooter />
      <style jsx>{`
        .flip-card {
          perspective: 1200px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s ease;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
