"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { AnimatedStorySection } from '@/components/AnimatedStorySection';
import { AnimatedPhilosophySection } from '@/components/AnimatedPhilosophySection';
import { AnimatedPillarsSection } from '@/components/AnimatedPillarsSection';
import { AnimatedValuesSection } from '@/components/AnimatedValuesSection';
import { useEffect, useState } from 'react';

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);


  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero Section */}
        <section className="relative min-h-[220px] lg:min-h-[300px] overflow-hidden">
          <div className="grid grid-cols-4 lg:grid-cols-6 h-full min-h-[220px] lg:min-h-[300px]">
            {/* Image 1 */}
            <div className="relative">
              <img 
                src="/images/tanzania.jpg" 
                alt="Tanzania" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 2 */}
            <div className="relative">
              <img 
                src="/images/fam.png" 
                alt="Family" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 3 */}
            <div className="relative">
              <img 
                src="/images/caar.png" 
                alt="Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 4 */}
            <div className="relative">
              <img 
                src="/images/tours.png" 
                alt="Tours" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 5 */}
            <div className="relative">
              <img 
                src="/images/Amboseli.png" 
                alt="Amboseli" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 6 */}
            <div className="relative">
              <img 
                src="/images/gorilla-trek.jpg" 
                alt="Gorilla Trek" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 7 */}
            <div className="relative">
              <img 
                src="/images/maasai.jpg" 
                alt="Maasai" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 8 */}
            <div className="relative">
              <img 
                src="/images/safari-pg.jpg" 
                alt="Safari" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 9 */}
            <div className="relative">
              <img 
                src="/images/nairobi-city.jpg" 
                alt="Nairobi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 10 */}
            <div className="relative">
              <img 
                src="/images/Diana Beach.jpg" 
                alt="Diana Beach" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 11 */}
            <div className="relative">
              <img 
                src="/images/car image.jpg" 
                alt="Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 12 */}
            <div className="relative">
              <img 
                src="/images/insurance-family.jpg" 
                alt="Insurance Family" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="text-center text-white z-10">
              <h1 className="text-4xl lg:text-6xl font-light mb-6 leading-tight drop-shadow-lg">
                About Us
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            </div>
          </div>
        </section>

        {/* The Eawestern Story */}
        <AnimatedStorySection />

        {/* Our Philosophy */}
        <AnimatedPhilosophySection />

        {/* The Eawestern Pillars of Trust */}
        <AnimatedPillarsSection />

        {/* Our Credentials & Licensing */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
                Our Credentials & Licensing
              </h2>
              <p className="text-gray-600">Partners and licenses we proudly hold</p>
            </div>
            <div className="bg-white p-10 rounded-lg border border-gray-200">
              <div className="relative overflow-hidden">
                <div className="flex animate-logo-slide gap-12 items-center">
                  {[
                    { src: "/images/insurance%20eawestern%20image.webp", alt: "Insurance credential" },
                    { src: "/images/tour%20eawestern%20logo.png", alt: "Tours credential" },
                    { src: "/images/car%20about%20logo.png", alt: "Car hire credential" },
                  ].map((logo, idx) => (
                    <img
                      key={`${logo.alt}-${idx}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-20 w-auto object-contain shrink-0"
                    />
                  ))}
                  {[
                    { src: "/images/insurance%20eawestern%20image.webp", alt: "Insurance credential" },
                    { src: "/images/tour%20eawestern%20logo.png", alt: "Tours credential" },
                    { src: "/images/car%20about%20logo.png", alt: "Car hire credential" },
                  ].map((logo, idx) => (
                    <img
                      key={`${logo.alt}-dup-${idx}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-20 w-auto object-contain shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes logo-slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-logo-slide {
              width: max-content;
              animation: logo-slide 20s linear infinite;
            }
            @media (max-width: 768px) {
              .animate-logo-slide {
                animation-duration: 25s;
              }
            }
          `}</style>
        </section>

        {/* How We Deliver Value */}
        <AnimatedValuesSection />

      </main>
      <Footer />
    </div>
  );
}

