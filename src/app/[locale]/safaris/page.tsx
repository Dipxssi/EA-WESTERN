"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SafariTestimonials } from '@/components/SafariTestimonials';
import { BookingStepsSection } from '@/components/BookingStepsSection';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { AnimatedCard } from '@/components/AnimatedCard';
import { ExpandableCard } from '@/components/ExpandableCard';
import { DropdownCard } from '@/components/DropdownCard';
import { FlipCard } from '@/components/FlipCard';
import { ModalCard } from '@/components/ModalCard';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  Compass,
  ShieldCheck,
  Users,
  Clock3,
  MapPinned,
  PlaneTakeoff,
  Hotel,
  Headphones,
  CalendarDays,
  MapPin,
  Camera,
} from 'lucide-react';

const heroCollageImages = [
  '/images/tour1.jpg',
  '/images/tour2.jpg',
  '/images/tour3.jpg',
  '/images/tour4.jpg',
  '/images/tour5.jpg',
  '/images/tour6.webp',
  '/images/tour7.jpg',
  '/images/tour8.jpg',
  '/images/tanzania.jpg',
  '/images/maasai.jpg',
];

const popularDestinations = [
  {
    title: 'Maasai Mara Classic Safari — 3 Days',
    description: 'Experience the Big Five in Africa’s most iconic wildlife reserve. This safari takes you deep into the heart of the Mara for game drives, breathtaking landscapes, and unforgettable sightings.',
    location: 'Kenya • Maasai Mara',
    image: '/images/maasai.jpg',
    duration: '3 Days / 2 Nights',
    theme: 'Big Five & Culture',
    highlights: [
      'Game drives in the world-famous Mara',
      'Big Five viewing',
      'Optional Maasai cultural village visit',
      'Sunrise photography moments',
    ],
  },
  {
    title: 'Amboseli National Park — 2 Days',
    description: 'Home of elephants and Mt. Kilimanjaro views. Enjoy stunning sceneries, large elephant herds, and beautiful savannah plains.',
    location: 'Kenya • Amboseli',
    image: '/images/Amboseli.png',
    duration: '2 Days / 1 Night',
    theme: 'Elephants & Kilimanjaro',
    highlights: [
      'Up-close encounters with elephants',
      'Kilimanjaro viewing',
      'Perfect for short stays in Kenya',
      'Great for photography lovers',
    ],
  },
  {
    title: 'Diani Beach Escape — 4 Days',
    description: 'Where blue waters meet white sands. Relax and unwind on one of the top-ranked beaches in Africa.',
    location: 'Kenya • Diani Beach',
    image: '/images/Diana Beach.jpg',
    duration: '4 Days / 3 Nights',
    theme: 'Beach & Leisure',
    highlights: [
      'Beachfront hotel stay',
      'Water activities (snorkeling, dolphin watching)',
      'Romantic sunsets',
      'Perfect for couples & families',
    ],
  },
  {
    title: 'Nairobi City Experience — 1 Day',
    description: 'A perfect blend of wildlife, culture, and urban charm.',
    location: 'Kenya • Nairobi',
    image: '/images/nairobi-city.jpg',
    duration: '1 Day',
    theme: 'Urban & Culture',
    highlights: [
      'Nairobi National Park',
      'Giraffe Centre',
      'Karen Blixen Museum',
      'Local crafts & food',
    ],
  },
  {
    title: 'Serengeti & Ngorongoro Combo — 5 Days (Tanzania)',
    description: 'Two legendary destinations. One epic adventure.',
    location: 'Tanzania • Serengeti & Ngorongoro',
    image: '/images/tanzania.jpg',
    duration: '5 Days / 4 Nights',
    theme: 'Migration & Crater',
    highlights: [
      'Endless Serengeti plains',
      'Ngorongoro Crater safari',
      'Big Five viewing',
      'Comfortable accommodations',
    ],
  },
  {
    title: 'Uganda Gorilla Trekking — 3 Days',
    description: 'A rare encounter with mountain gorillas. A bucket-list experience through lush forests and stunning landscapes.',
    location: 'Uganda • Bwindi Forest',
    image: '/images/gorilla-trek.jpg',
    duration: '3 Days / 2 Nights',
    theme: 'Primate Encounter',
    highlights: [
      'Guided gorilla trek',
      'Local cultural interactions',
      'Stunning forest views',
      'Perfect for adventurers',
    ],
  },
];

const testimonials = [
  {
    name: 'Grace & Daniel',
    quote:
      'EA Western curated our Maasai Mara trip end-to-end. From seamless transport to incredible guides, we felt cared for every moment.',
    location: 'Kenya',
  },
  {
    name: 'Moses K.',
    quote:
      'We wanted a corporate retreat that mixed safari, culture, and downtime. The team delivered a flawless multi-country itinerary.',
    location: 'Uganda',
  },
  {
    name: 'Aisha & Family',
    quote:
      'Diani was paradise. All activities, meals, and transfers were handled. We just showed up and enjoyed.',
    location: 'Kenya',
  },
];

const blogPosts = [
  {
    title: '5 Ways to Maximize Your Maasai Mara Safari',
    excerpt: 'From sunrise drives to packing essentials, here\'s how to get the most out of every sighting.',
    date: 'Nov 2025',
    href: '#',
    accent: 'from-blue-100 via-blue-50 to-white',
    category: 'Safari Tips',
    image: '/images/maasai.jpg',
  },
  {
    title: 'Amboseli vs. Serengeti — Which Park is Right for You?',
    excerpt: 'Compare wildlife highlights, travel logistics, and budget considerations before you choose.',
    date: 'Oct 2025',
    href: '#',
    accent: 'from-blue-100 via-blue-50 to-white',
    category: 'Planning Advice',
    image: '/images/Amboseli.png',
  },
  {
    title: 'Planning a Multi-Country East Africa Adventure',
    excerpt: 'Tips for seamlessly combining Kenya, Tanzania, and Uganda into one unforgettable journey.',
    date: 'Sep 2025',
    href: '#',
    accent: 'from-blue-100 via-blue-50 to-white',
    category: 'Itinerary Design',
    image: '/images/tanzania.jpg',
  },
];

const journeyHighlights = [
  {
    title: 'Tailored Routes',
    copy: 'Curated itineraries that align with your pace, travel party, and wishlist.',
    icon: Compass,
    accent: 'from-blue-100 via-blue-50 to-white',
  },
  {
    title: 'Assured Safety',
    copy: 'Licensed guides, vetted partners, and compliance with park regulations.',
    icon: ShieldCheck,
    accent: 'from-blue-100 via-blue-50 to-white',
  },
  {
    title: 'People-Centric',
    copy: 'Families, solo adventurers, and corporate groups each get bespoke care.',
    icon: Users,
    accent: 'from-blue-100 via-blue-50 to-white',
  },
  {
    title: '24/7 Support',
    copy: 'Dedicated travel concierge stays on call from touchdown to farewell.',
    icon: Clock3,
    accent: 'from-blue-100 via-blue-50 to-white',
  },
];

const logisticsHighlights = [
  {
    label: 'Handpicked lodges, camps, and luxury stays',
    icon: Hotel,
  },
  {
    label: 'Certified local guides and multi-lingual hosts',
    icon: ShieldCheck,
  },
  {
    label: 'Flexible itineraries for families, couples, or solo travelers',
    icon: MapPinned,
  },
  {
    label: '24/7 support before and during your trip',
    icon: Headphones,
  },
];

export default function SafarisPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  const [magicVisible, setMagicVisible] = useState(false);
  const [destinationsVisible, setDestinationsVisible] = useState(false);
  const magicRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMagicVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (magicRef.current) {
      observer.observe(magicRef.current);
    }

    return () => {
      if (magicRef.current) {
        observer.unobserve(magicRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Fallback: Show content immediately on mobile or if observer doesn't trigger
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile) {
      setDestinationsVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDestinationsVisible(true);
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px' } // Lower threshold and add margin for better mobile detection
    );

    if (destinationsRef.current) {
      observer.observe(destinationsRef.current);
    }

    return () => {
      if (destinationsRef.current) {
        observer.unobserve(destinationsRef.current);
      }
    };
  }, []);

  const featuredMagic = [
    {
      title: 'Maasai Mara',
      description: 'Witness the Great Migration and incredible wildlife.',
      image: '/images/masai mara.png',
    },
    {
      title: 'Serengeti',
      description: 'Endless plains teeming with wildlife and nature.',
      image: '/images/serengeti.png',
    },
    {
      title: 'Ngorongoro Crater',
      description: 'A UNESCO World Heritage Site filled with wildlife diversity.',
      image: '/images/Crater.png',
    },
    {
      title: 'Amboseli',
      description: 'Elephant herds with Mount Kilimanjaro as a backdrop.',
      image: '/images/amboseli2.png',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero */}
        <section className="relative isolate">
          <div className="absolute inset-0">
            <div className="absolute inset-0 overflow-hidden">
              <div className="grid grid-cols-5 grid-rows-2 h-full w-full">
                {heroCollageImages.map((src, idx) => (
                  <div key={src + idx} className="relative">
                    <img
                      src={src}
                      alt="East Africa collage"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 text-white">
            <p className="tracking-[0.4em] text-xs sm:text-sm uppercase text-white/80 mb-4">
              TOURS & SAFARIS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Discover East Africa — One Unforgettable Adventure at a Time
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mb-8">
              From Kenya’s iconic wildlife to Tanzania’s breathtaking landscapes and Uganda’s lush
              escapes — explore East Africa with certified guides, curated itineraries, and
              worry-free planning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="#custom-tour"
                className="bg-blue-900 hover:bg-red-900 transition-all duration-300 border border-white/20 rounded-full px-6 sm:px-8 py-3 text-sm tracking-[0.2em] uppercase text-center w-full sm:w-auto flex items-center justify-center"
              >
                Start Planning Your Safari
              </Link>
            </div>
          </div>
        </section>

        {/* Uncover the Magic of East Africa */}
        <section className="py-12">
          <div ref={magicRef} className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className={`text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-8 transition-all duration-1000 ease-out ${
              magicVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Uncover the Magic of East Africa
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredMagic.map((spot, index) => (
                <article
                  key={spot.title}
                  className={`bg-white rounded-3xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-1000 ease-out ${
                    magicVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={spot.image}
                      alt={spot.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">{spot.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{spot.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="px-4 sm:px-6 py-10 sm:py-12 lg:py-16 bg-gradient-to-b from-white via-blue-50/40 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center mb-8 sm:mb-10 lg:mb-12">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-blue-800 mb-4">Your Journey</p>
                <h2 className="text-3xl font-light text-gray-900 mb-6">Your Journey of Adventure Begins Here</h2>
                <AnimatedParagraph>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Whether you&apos;re seeking a thrilling safari, a serene beach getaway, a cultural city tour,
                    or a once-in-a-lifetime expedition, EA Western crafts experiences that feel effortless,
                    safe, and unforgettable.
                  </p>
                </AnimatedParagraph>
              </div>
              <AnimatedParagraph direction="right" delay={200}>
                <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-gradient-to-br from-white via-blue-50/70 to-blue-100/30 shadow-xl shadow-blue-100/70">
                <div className="absolute -top-10 -right-6 w-40 h-40 bg-blue-200/40 blur-3xl" aria-hidden />
                <div className="absolute -bottom-12 -left-6 w-40 h-40 bg-blue-500/20 blur-3xl" aria-hidden />
                <div className="relative p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/80 text-blue-900 shadow-lg shadow-blue-200/70 border border-white/70">
                      <PlaneTakeoff size={20} className="sm:w-6 sm:h-6" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-900/70">Logistics & Care</p>
                      <p className="text-base sm:text-lg font-semibold text-gray-900">We handle everything</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We handle all logistics — transport, accommodation, park fees, and guided tours — so you can
                    focus on the adventure.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    {logisticsHighlights.map(({ label, icon: Icon }) => (
                      <div key={label} className="flex items-start gap-3 bg-white/60 rounded-2xl p-4 border border-white/70 shadow-sm">
                        <span className="w-9 h-9 rounded-xl bg-white text-blue-900 flex items-center justify-center border border-blue-100 shadow-sm">
                          <Icon size={18} />
                        </span>
                        <p className="leading-relaxed">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </AnimatedParagraph>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeyHighlights.map(({ title, copy, icon: Icon }, index) => (
                <AnimatedCard key={title} index={index} delay={300}>
                  <div className="bg-white border border-blue-100 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{copy}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-slate-50 py-8 sm:py-10 lg:py-16">
          <div ref={destinationsRef} className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className={`transition-all duration-1000 ease-out ${
              destinationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">Popular destinations</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-2xl sm:text-3xl font-light text-gray-900">Curated Tours You Can Book Today</h2>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-full border border-blue-900 px-6 py-2 text-sm uppercase tracking-[0.2em] text-blue-900 hover:bg-blue-900 hover:text-white transition"
                >
                  Talk to an expert
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {popularDestinations.map((destination, index) => {
                return (
                  <article
                    key={destination.title}
                    className={`group rounded-[36px] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 ${
                      destinationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full border border-white/30">
                          <span className="w-2 h-2 rounded-full bg-emerald-300" />
                          {destination.location}
                        </span>
                        <span className="text-xs uppercase tracking-[0.3em] text-white/80">EAWESTERN</span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 uppercase tracking-[0.3em]">
                        <span className="inline-flex items-center gap-2 text-gray-600 tracking-normal uppercase font-semibold">
                          {destination.theme}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-gray-900">{destination.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{destination.description}</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-white/80 shadow-sm">
                          <span className="w-10 h-10 rounded-2xl bg-white text-blue-900 flex items-center justify-center border border-blue-100 shadow-sm">
                            <MapPin size={18} />
                          </span>
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-1">Location</p>
                            <p className="font-medium text-gray-900 tracking-tight">{destination.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-white/80 shadow-sm">
                          <span className="w-10 h-10 rounded-2xl bg-white text-blue-900 flex items-center justify-center border border-blue-100 shadow-sm">
                            <CalendarDays size={18} />
                          </span>
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-1">Duration</p>
                            <p className="font-medium text-gray-900 tracking-tight">{destination.duration}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-[24px] p-5 border border-blue-50 shadow-inner shadow-blue-100/60">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-900 mb-3">
                          <Camera size={16} />
                          Highlights
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          {destination.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-3">
                              <span className="mt-1 w-2 h-2 rounded-full bg-blue-900"></span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <footer className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/60">
                        <div className="text-xs text-gray-500 uppercase tracking-[0.3em]">Secure your spot</div>
                        <Link
                          href={`/${locale}/contact`}
                          className="inline-flex items-center gap-2 text-blue-900 font-semibold"
                        >
                          Plan this tour
                          <span aria-hidden>→</span>
                        </Link>
                      </footer>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Custom Tour */}
        <section id="custom-tour" className="px-4 sm:px-6 py-8 sm:py-10 lg:py-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-[48px] border border-white shadow-[0_30px_80px_rgba(15,23,42,0.12)] relative overflow-hidden">
            <div className="absolute -top-10 -right-6 w-60 h-60 bg-blue-200/40 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-4 w-56 h-56 bg-indigo-200/40 blur-3xl" aria-hidden />
            <div className="relative px-8 sm:px-16 py-14 text-center space-y-6">
              <p className="text-xs tracking-[0.3em] uppercase text-blue-900/70">Custom Tour</p>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-900">Want a Personalized Experience?</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Tell us your dream adventure — honeymoon, solo expedition, family escape, corporate retreat, or
                multi-country safari — and we&apos;ll craft every transfer, stay, and immersive moment to match.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-left">
                {[
                  { title: 'Dedicated Curator', copy: 'One point of contact overseeing every detail.' },
                  { title: 'Flexible Pace', copy: 'Adjust travel speeds, upgrades, and experiences on the go.' },
                  { title: 'VIP Access', copy: 'Priority permits, exclusive lodges, and specialist guides.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/70 rounded-3xl p-5 border border-white">
                    <p className="text-sm font-semibold text-blue-900 mb-2">{item.title}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center pt-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center bg-blue-900 hover:bg-red-900 text-white px-6 sm:px-12 py-3 sm:py-4 rounded-full tracking-[0.2em] text-xs sm:text-sm uppercase border border-blue-900 shadow-lg shadow-blue-200/50 w-full sm:w-auto text-center"
                >
                  Request a Custom Tour
                </Link>
              </div>
            </div>
          </div>
        </section>

        <BookingStepsSection />

        <SafariTestimonials />

        {/* CTA */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#1e3a8a' }}>
              <div className="relative z-10">
                {/* Headline */}
                <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                  Ready to Explore East Africa?
                </h2>
                
                {/* Decorative line */}
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                
                {/* Description Text */}
                <p className="text-lg lg:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                  Your custom-designed, fully assured East African adventure is one conversation away. Join thousands of
                  travelers who trust EA Western to plan seamless safaris, retreats, and cultural escapes.
                </p>
                
                {/* CTA Button */}
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center text-white px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform w-full sm:w-auto text-center"
                  style={{ backgroundColor: '#d92323', border: '2px solid white' }}
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">Our Blog</p>
              <h2 className="text-3xl font-light text-gray-900">Latest Blog & Articles</h2>
            </div>
            <Link href="/#blog" className="text-sm tracking-[0.2em] uppercase text-blue-900">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className={`rounded-[28px] border border-white shadow-[0_15px_40px_rgba(15,23,42,0.08)] p-6 bg-gradient-to-b ${post.accent} relative overflow-hidden`}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/40 blur-3xl" aria-hidden />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
                    <span>{post.date}</span>
                    <span className="px-3 py-1 rounded-full bg-white/60 text-gray-700 tracking-[0.2em]">{post.category}</span>
                  </div>
                  {/* Blog Image */}
                  <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link href={post.href} className="inline-flex items-center gap-2 text-blue-900 text-sm tracking-[0.2em] uppercase">
                    Read Article
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

