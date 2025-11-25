import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  ShieldCheck,
  Gauge,
  Car,
  Settings,
  Headphones,
  CheckCircle2,
  SteeringWheel,
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
    title: 'Integrated Insurance.',
    description:
      'Comprehensive insurance handled in-house by our Insurance team so you always know what is covered.',
    icon: CheckCircle2,
  },
  {
    title: 'Flexible Logistics & 24/7 Support.',
    description: 'Custom pick-up/drop-off points and on-call emergency assistance anywhere in East Africa.',
    icon: Headphones,
  },
];

const fleetCategories = [
  {
    title: 'Safari & 4x4 Adventures',
    description:
      'Rugged, fully kitted Land Cruisers, Prados, and Defenders for the toughest terrain and remote projects.',
    icon: Truck,
  },
  {
    title: 'Business & Executive Rentals',
    description:
      'Modern executive sedans and SUVs for airport transfers, corporate visits, and VIP movements.',
    icon: Car,
  },
  {
    title: 'Self-Drive Convenience',
    description:
      'Drive yourself with full documentation, roadside support, and quick approvals for Kenyan and foreign licenses.',
    icon: SteeringWheel,
  },
  {
    title: 'Chauffeured Expertise',
    description:
      'Professional, vetted drivers who know the routes, security considerations, and traffic nuances across East Africa.',
    icon: Users,
  },
  {
    title: 'Long-Term Corporate Leasing',
    description: 'Flexible monthly rentals for companies that need reliable fleets without capital expenditure.',
    icon: Gauge,
  },
];

const bookingSteps = [
  {
    title: 'Choose Your Car',
    copy: 'Browse our fleet and select a vehicle that fits your mission.',
  },
  {
    title: 'Make a Reservation',
    copy: 'Tell us your schedule, routes, and preferences for a tailored quote.',
  },
  {
    title: 'Enjoy Your Ride',
    copy: 'Drive with confidence, or opt for a professional chauffeur for added convenience.',
  },
];

const articles = [
  {
    title: 'Why Integrated Insurance Matters for Car Hire',
    date: 'Nov 2025',
    excerpt: 'Avoid hidden liabilities by choosing a provider that manages insurance in-house.',
  },
  {
    title: '5 Tips for Corporate Fleet Leasing in Nairobi',
    date: 'Oct 2025',
    excerpt: 'How to balance cost, compliance, and reliability for teams on the move.',
  },
  {
    title: 'Self-Drive Across Kenya: Permits & Preparation',
    date: 'Sep 2025',
    excerpt: 'Documentation and planning essentials for smooth road trips.',
  },
];

export default async function VehiclesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero */}
        <section className="relative isolate">
          <div className="absolute inset-0">
            <img
              src="/images/luxury-car-background.jpg"
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
              href="/#contact"
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-red-900 border border-white/30 rounded-full px-8 py-3 text-sm tracking-[0.2em] uppercase transition-all"
            >
              Get a Custom Booking Today
            </Link>
          </div>
        </section>

        {/* Advantage */}
        <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/40 to-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-blue-900 mb-4">
                The Eawestern Advantage
              </p>
              <h2 className="text-3xl font-light mb-4">
                Transparent Pricing. Unbeatable Value.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every rental includes clear insurance, compliant licensing, and proactive service. We operate under NTSA
                regulations, provide fully documented vehicles, and ensure each trip is backed by our 24/7 operations team.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {advantageHighlights.map((item) => {
                const Icon = item.icon ?? ShieldCheck;
                return (
                  <div
                    key={item.title}
                    className="bg-white/90 rounded-3xl border border-white/70 shadow-sm p-5 text-sm text-gray-700"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Intro */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-light">Kenya’s Reliable Car Hire Service — Tailored to You</h2>
            <p className="text-lg text-gray-700">
              Whether you’re travelling for work or leisure, our fleet is designed to meet every need. We offer SUVs,
              saloons, vans, shuttles, luxury cars, and long-term corporate rentals. Every vehicle is inspected, serviced,
              and sanitized for your safety and comfort.
            </p>
          </div>
        </section>

        {/* Fleet */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">Our Fleet</p>
              <h2 className="text-3xl font-light mb-3">Find the Perfect Ride</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose from a wide range of well-maintained vehicles for business, travel, and safari adventures. Enjoy
                flexible terms, honest pricing, and a service team that anticipates your needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fleetCategories.map((category) => {
                const Icon = category.icon ?? Car;
                return (
                  <div
                    key={category.title}
                    className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/#contact"
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

        {/* Process */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">How It Works</p>
            <h2 className="text-3xl font-light mb-3">Easy Booking Process</h2>
            <p className="text-gray-600">
              Three quick steps to get on the road. Need a driver, special equipment, or cross-border permits? Consider it
              handled.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {bookingSteps.map((step, index) => (
              <div key={step.title} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-semibold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-[48px] border border-blue-900 relative overflow-hidden text-center px-8 sm:px-16 py-14 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
            <div className="absolute inset-0">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-700/50 rounded-full blur-3xl" aria-hidden />
              <div className="absolute -bottom-16 -right-4 w-72 h-72 bg-indigo-500/40 rounded-full blur-3xl" aria-hidden />
            </div>
            <div className="relative space-y-6 text-white">
              <p className="text-xs tracking-[0.3em] uppercase text-white/70">Ready to Book Your Ride?</p>
              <h2 className="text-3xl sm:text-4xl font-light">Choose reliability, affordability, and comfort with Eawestern Car Hire.</h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                From short-term rentals to corporate fleets, we tailor every booking to your route, schedule, and risk profile.
              </p>
              <div className="flex items-center justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-white text-blue-900 px-12 py-4 rounded-full tracking-[0.2em] text-sm uppercase border border-white/70 shadow-xl shadow-blue-900/40"
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


