"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CarHireBookingSteps } from '@/components/CarHireBookingSteps';
import { AnimatedCard } from '@/components/AnimatedCard';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  Gauge,
  Car,
  Settings,
  Headphones,
  CheckCircle2,
  CircleGauge,
  MapPin,
  Users,
  Truck,
} from 'lucide-react';

const advantageHighlights = [
  {
    title: 'Transparent Pricing. Unbeatable Value.',
    description: 'All-inclusive quotes with no hidden fees, fuel rules, or surprise penalties.',
    icon: Gauge,
  },
  {
    title: 'Regulated & Compliant.',
    description:
      'Fully licensed by NTSA and compliant with Kenya’s top transport standards for safety and reliability.',
    icon: ShieldCheck,
  },
  {
    title: 'Maintenance Guarantee.',
    description: 'Late-model vehicles only, each inspected using a 50-point mechanical and safety checklist.',
    icon: Settings,
  },
  {
    title: 'Flexible Logistics & 24/7 Support.',
    description: 'Custom pick-up/drop-off points and on-call emergency assistance anywhere in East Africa.',
    icon: Headphones,
  },
  {
    title: 'Chauffeured Expertise',
    description: 'Professional, vetted drivers who know the routes, security considerations, and traffic nuances across East Africa.',
    icon: Users,
  },
  {
    title: 'Long-Term Corporate Leasing',
    description: 'Flexible monthly rentals for companies that need reliable fleets without capital expenditure.',
    icon: Gauge,
  },
];

const fleetCategories = [
  {
    title: 'Safari & 4x4 Adventures',
    description:
      'Rugged, fully kitted Land Cruisers, Prados, and Defenders for the toughest terrain and remote projects.',
    icon: Truck,
    image: '/images/carCard1.png',
  },
  {
    title: 'Business & Executive Rentals',
    description:
      'Modern executive sedans and SUVs for airport transfers, corporate visits, and VIP movements.',
    icon: Car,
    image: '/images/carCard2.png',
  },
  {
    title: 'Self-Drive Convenience',
    description:
      'Drive yourself with full documentation, roadside support, and quick approvals for Kenyan and foreign licenses.',
    icon: CircleGauge,
    image: '/images/carCard3.png',
  },
];

const articles = [
  {
    title: 'Why Integrated Insurance Matters for Car Hire',
    date: 'Nov 2025',
    excerpt: 'Avoid hidden liabilities by choosing a provider that manages insurance in-house.',
    image: '/images/car image.jpg',
  },
  {
    title: '5 Tips for Corporate Fleet Leasing in Nairobi',
    date: 'Oct 2025',
    excerpt: 'How to balance cost, compliance, and reliability for teams on the move.',
    image: '/images/luxury-car-background.jpg',
  },
  {
    title: 'Self-Drive Across Kenya: Permits & Preparation',
    date: 'Sep 2025',
    excerpt: 'Documentation and planning essentials for smooth road trips.',
    image: '/images/nairobi-city.jpg',
  },
];

export default function VehiclesPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState('en');
  const [collageVisible, setCollageVisible] = useState(false);
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    params.then((p) => setLocale(p.locale));
  }, [params]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCollageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (collageRef.current) {
      observer.observe(collageRef.current);
    }

    return () => {
      if (collageRef.current) {
        observer.unobserve(collageRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero */}
        <section className="relative isolate">
          <div className="absolute inset-0">
            <img
              src="/images/caar.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 text-white">
            <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-4">CAR HIRE</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
              Drive Confidently — Wherever Your Journey Takes You
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8">
              Clean, well-maintained vehicles for business travel, self-drive, airport transfers, and every transport
              requirement. We match you with the right car, driver, and insurance in one call.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-red-900 border border-white/30 rounded-full px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all"
            >
              Get a Custom Booking Today
            </Link>
          </div>
        </section>

        {/* Car Hire Service Intro */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-[48px] border border-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] relative overflow-hidden">
              <div className="absolute -top-10 -right-8 w-60 h-60 bg-blue-200/40 blur-3xl" aria-hidden />
              <div className="absolute -bottom-16 -left-6 w-56 h-56 bg-indigo-200/40 blur-3xl" aria-hidden />
              <div className="relative grid md:grid-cols-2 gap-8 items-center px-8 sm:px-16 py-14">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                  <p className="text-xs tracking-[0.3em] uppercase text-blue-900/70">Car Hire</p>
                  <h2 className="text-3xl font-light text-gray-900">Kenya's Reliable Car Hire Service — Tailored to You</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Whether you're travelling for work or leisure, our fleet is designed to meet every need. We offer SUVs,
                    saloons, vans, shuttles, luxury cars, and long-term corporate rentals. Every vehicle is inspected, serviced,
                    and sanitized for your safety and comfort.
                  </p>
                </div>
                
                {/* Right Column - Image Collage */}
                <div
                  ref={collageRef}
                  className={`relative transition-all duration-1000 ease-out ${
                    collageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {/* Top-left: SUV */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="/images/car3.png"
                        alt="SUV vehicle"
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    {/* Top-right: Red hatchback */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="/images/car3.png"
                        alt="Hatchback vehicle"
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    {/* Bottom: White van - spans 2 columns */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg col-span-2">
                      <img
                        src="/images/car3.png"
                        alt="Van vehicle"
                        className="w-full h-full object-cover aspect-[2/1]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantage */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/40 to-white">
          <div className="max-w-6xl mx-auto">
            {/* Centered Text Section */}
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.4em] uppercase text-blue-900 mb-5">
                The Eawestern Advantage
              </p>
              <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Transparent Pricing. Unbeatable Value.
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
                Every rental includes clear insurance, compliant licensing, and proactive service. We operate under NTSA
                regulations, provide fully documented vehicles, and ensure each trip is backed by our 24/7 operations team.
              </p>
            </div>
            {/* Cards Below Text */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {advantageHighlights.map((item, index) => {
                const Icon = item.icon ?? ShieldCheck;
                return (
                  <AnimatedCard key={item.title} index={index} delay={200}>
                    <div className="bg-white rounded-3xl border border-blue-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-700 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-light mb-3">Find the Perfect Ride</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose from a wide range of well-maintained vehicles for business, travel, and safari adventures. Enjoy
                flexible terms, honest pricing, and a service team that anticipates your needs.
              </p>
            </div>
            <div className="space-y-6">
              {/* First 3 cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fleetCategories.slice(0, 3).map((category, index) => {
                  const Icon = category.icon ?? Car;
                  return (
                    <AnimatedCard key={category.title} index={index} delay={200}>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col overflow-hidden">
                        {/* Image */}
                        {category.image && (
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed flex-grow">{category.description}</p>
                        </div>
                      </div>
                    </AnimatedCard>
                  );
                })}
              </div>
              {/* Last 2 cards - centered */}
              <div className="flex flex-wrap justify-center gap-6">
                {fleetCategories.slice(3).map((category, index) => {
                  const Icon = category.icon ?? Car;
                  return (
                    <AnimatedCard key={category.title} index={index + 3} delay={200}>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-12px)] lg:w-[320px] h-full flex flex-col">
                        <div className="w-12 h-12 rounded-xl bg-white border-2 border-blue-500 text-blue-600 flex items-center justify-center mb-6 flex-shrink-0">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed flex-grow">{category.description}</p>
                      </div>
                    </AnimatedCard>
                  );
                })}
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-full tracking-[0.2em] text-sm uppercase font-semibold hover:bg-blue-800 transition-all"
              >
                Inquire About Booking
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[32px] p-10 shadow-[0_20px_50px_rgba(15,23,42,0.1)] text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-blue-900 mb-3">Trusted by Corporate & Individual Clients</p>
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              “I needed a reliable 4x4 for a remote project. The vehicle was immaculate, the price was transparent, and
              knowing the comprehensive insurance was handled by their own team gave me complete peace of mind.”
            </p>
            <p className="text-sm font-semibold text-gray-900">S. Patel, Project Manager</p>
          </div>
        </section>

        <CarHireBookingSteps />

        {/* CTA */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-center text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#1e3a8a' }}>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 leading-tight px-2">
                  Ready to Book Your Ride?
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-light px-2">
                  Choose reliability, affordability, and comfort with Eawestern Car Hire. From short-term rentals to corporate fleets, we tailor every booking to your route, schedule, and risk profile.
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-block text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform bg-[#d92323] hover:!bg-[#c11e1e] border-2 border-white whitespace-nowrap"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-2">Insights & Updates</p>
              <h2 className="text-3xl font-light text-gray-900">Articles</h2>
            </div>
            <Link href="/#blog" className="text-sm tracking-[0.2em] uppercase text-blue-900">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-gradient-to-b from-blue-50 via-white to-white border border-blue-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">{article.date}</p>
                {/* Article Image */}
                <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                <Link href="/#blog" className="text-blue-900 text-sm tracking-[0.2em] uppercase font-semibold">
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


