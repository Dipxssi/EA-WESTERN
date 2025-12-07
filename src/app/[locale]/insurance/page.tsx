import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SafariTestimonials } from '@/components/SafariTestimonials';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSolutionsGrid } from '@/components/AnimatedSolutionsGrid';
import Link from 'next/link';
import {
  ShieldCheck,
  TrendingDown,
  MessageSquare,
  Users,
  Heart,
  Car,
  Building2,
  FileCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Home,
  Clock,
} from 'lucide-react';
import { InsuranceProcessSection } from '@/components/InsuranceProcessSection';

const whyChooseUs = [
  {
    title: 'Expert Rate Negotiation',
    description: 'As a high-volume agency, we secure better policy terms and rates than you can find on your own.',
    icon: TrendingDown,
  },
  {
    title: 'Zero-Jargon Consultation',
    description: 'We translate complex policies into plain English, ensuring you fully understand what you are covered for.',
    icon: MessageSquare,
  },
  {
    title: 'Personalized, Local Support',
    description: 'When you call, you speak to a local, dedicated Eawestern expert who knows your policy and your needs.',
    icon: Users,
  },
];

const products = [
  {
    title: 'Business',
    description: 'Every business faces risks, from property damage to legal liabilities. Our business insurance solutions provide coverage for financial losses, ensuring business continuity by protecting assets, employees, and operations from unforeseen setbacks.',
    iconName: 'Building2',
  },
  {
    title: 'Education',
    description: 'Secure your child\'s future with an education plan that guarantees uninterrupted learning. Our education insurance provides financial support for tuition fees and other school expenses, ensuring that your child\'s dreams remain on track even in unforeseen circumstances.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Retirement',
    description: 'Enjoy peace of mind in your golden years with a well-structured retirement insurance plan. Our solutions help you build a financial cushion through savings and investments, ensuring you maintain your lifestyle and financial independence after retirement.',
    iconName: 'Clock',
  },
  {
    title: 'Motor Insurance',
    description: 'Protect your vehicle from accidental damage, theft, and third-party liabilities with our comprehensive motor insurance solutions. Whether for personal or commercial use, we provide policies tailored to keep you covered on the road, minimizing financial setbacks.',
    iconName: 'Car',
  },
  {
    title: 'Health',
    description: 'Quality healthcare should never be a burden. Our medical insurance ensures that you and your loved ones have access to the best treatment without financial strain. Covering hospital bills, doctor consultations, and emergency care. We make healthcare affordable and accessible.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Home',
    description: 'Safeguard your home and possessions from unexpected disasters like fire, theft, and natural calamities. Our home insurance ensures financial protection against structural damage and loss of valuables, helping you rebuild and recover without unnecessary stress.',
    iconName: 'Home',
  },
  {
    title: 'Term Life Insurance',
    description: 'Provides financial protection for a specific period, ensuring your beneficiaries receive a lump sum in case of an unfortunate event.',
    iconName: 'Heart',
  },
  {
    title: 'Whole Life Insurance',
    description: 'Whole Life Insurance provides lifelong coverage, ensuring your loved ones receive financial support whenever needed. Unlike term insurance, it builds cash value over time, which you can borrow or withdraw for emergencies or major expenses. With fixed premiums, your costs remain stable, offering predictability and peace of mind. Ideal for long-term security and estate planning, this policy guarantees a lasting legacy.',
    iconName: 'Heart',
  },
];

const claimsFeatures = [
  'Guide you step-by-step on required documents',
  'Liaise directly with insurance companies to speed up your claim',
  'Assist in filling and submitting claim forms',
  'Follow up until settlement — avoiding unnecessary delays',
  'Provide updates at every stage',
  'Help negotiate or escalate claims when needed',
  'Support for motor, medical, life, corporate & travel claims',
];

const blogPosts = [
  {
    title: 'Understanding Comprehensive Motor Insurance in Kenya',
    excerpt: 'Learn what comprehensive coverage really means and how to choose the right policy for your vehicle.',
    date: 'Nov 2025',
    href: '#',
    image: '/images/insurance-bg.png',
  },
  {
    title: 'Health Insurance: Individual vs Family Plans',
    excerpt: 'Compare the benefits and costs of individual and family health insurance policies.',
    date: 'Oct 2025',
    href: '#',
    image: '/images/fam.png',
  },
  {
    title: 'Life Insurance: Securing Your Family\'s Future',
    excerpt: 'A guide to choosing the right life insurance policy for your needs and budget.',
    date: 'Sep 2025',
    href: '#',
    image: '/images/insurance-family.jpg',
  },
];

const personalizedCoverageHighlights = [
  {
    title: 'Dedicated Advocate',
    description: 'One expert handles every detail of your policy and claims.',
  },
  {
    title: 'Flexible Coverage',
    description: 'Adjust benefits, upgrades, and riders as your life evolves.',
  },
  {
    title: 'VIP Access',
    description: 'Priority underwriting, exclusive products, and direct insurer access.',
  },
];

export default async function InsurancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero Section */}
        <section className="relative isolate">
          <div className="absolute inset-0">
            <img
              src="/images/insurancebg.png"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-32 sm:py-40 lg:py-48 text-white flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Insurance That Protects What Matters Most
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-4xl drop-shadow-lg">
              We are not just brokers; we are your dedicated, licensed advocates. Find the most competitive rates for Life, Health, Motor, and Business insurance with an expert team committed to one thing: making claims effortless.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/#contact"
                className="bg-blue-900 hover:bg-red-900 transition-all duration-300 border border-white/20 rounded-full px-8 py-3 text-sm tracking-[0.2em] uppercase"
              >
                Request a Quote
              </Link>
              <Link
                href="/#contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 rounded-full px-8 py-3 text-sm tracking-[0.2em] uppercase text-white"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">WHY CHOOSE US</p>
              <h2 className="text-3xl font-light text-gray-900 mb-4">Your Peace of Mind is Our Priority</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedCard key={item.title} index={index} delay={200}>
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">our solutions</p>
              <h2 className="text-3xl font-light text-gray-900 mb-4">Comprehensive Coverage for Every Kenyan Need</h2>
            </div>
            <AnimatedSolutionsGrid products={products} locale={locale} />
          </div>
        </section>

        {/* Personalized Coverage CTA */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-[0_25px_80px_rgba(15,23,42,0.15)] px-6 sm:px-10 lg:px-16 py-14">
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.4em] text-blue-700 uppercase mb-4">Custom Coverage</p>
                <h2 className="text-3xl font-light text-gray-900 mb-4">Want a Personalized Experience?</h2>
                <p className="text-lg text-gray-600">
                  Tell us the protection you need—family security, business continuity, or global health—and we&apos;ll craft every policy detail, benefit, and claim moment to match.
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {personalizedCoverageHighlights.map((item) => (
                  <div key={item.title} className="bg-white/90 shadow-sm rounded-3xl px-6 py-5 text-left">
                    <h3 className="text-base font-semibold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-blue-900 text-white px-10 py-4 rounded-full tracking-[0.3em] text-sm uppercase font-semibold hover:bg-blue-800 transition-all shadow-lg"
                >
                  Request Custom Coverage
                </Link>
              </div>
            </div>
          </div>
        </section>

        <InsuranceProcessSection />

        {/* Claims Assistance */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
              <div className="mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-4">Claims Assistance</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Insurance is only as good as the support you receive during a loss. Eawestern Insurance provides end-to-end claims assistance to ensure you are never alone when something goes wrong.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do for You:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {claimsFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Claims Promise:</h3>
                <p className="text-lg font-semibold text-blue-700 mb-2">Fast. Transparent. Stress-free.</p>
                <p className="text-gray-700">
                  We ensure your claim is handled professionally and with urgency so you can get back to normal life quickly.
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-red-900 text-white px-8 py-3 rounded-full tracking-[0.2em] text-sm uppercase transition-all"
                >
                  Request Claims Assistance
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#1e3a8a' }}>
              <div className="relative z-10">
                {/* Headline */}
                <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                  We&apos;re Here to Support Your Journey
                </h2>
                
                {/* Decorative line */}
                <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
                
                {/* Description Text */}
                <p className="text-lg lg:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                  Whether you&apos;re planning your next safari, securing insurance, or booking a vehicle—our team is ready to help.
                </p>
                
                {/* CTA Button */}
                <Link
                  href={`/${locale}/contact`}
                  className="inline-block text-white px-12 py-4 text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform"
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
              <article key={post.title} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">{post.date}</p>
                {/* Blog Image */}
                <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={post.href} className="text-blue-900 text-sm tracking-[0.2em] uppercase font-semibold">
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

