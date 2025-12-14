"use client";

import { useEffect, useRef, useState } from 'react';
import { Route, ShieldCheck, Award } from 'lucide-react';
import { CredentialsSection } from './CredentialsSection';

export function WhatYouGetSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Initialize with all cards visible for mobile
  const [visibleCards, setVisibleCards] = useState<boolean[]>([true, true, true]);

  useEffect(() => {
    // Fallback: Show content immediately on mobile or if observer doesn't trigger
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, show content immediately
      if (contentRef.current) {
        contentRef.current.classList.add('opacity-100', 'translate-y-0');
      }
      // Ensure all cards are visible on mobile
      setVisibleCards([true, true, true]);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px' } // Lower threshold and add margin for better mobile detection
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Observe each card individually for staggered animation (only on desktop)
    if (!isMobile) {
      const cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150); // Stagger by 150ms per card
            }
          });
        },
        { threshold: 0.01, rootMargin: '50px' } // Lower threshold for mobile
      );

      cardRefs.current.forEach((card) => {
        if (card) {
          cardObserver.observe(card);
        }
      });

      return () => {
        if (contentRef.current) {
          observer.unobserve(contentRef.current);
        }
        cardRefs.current.forEach((card) => {
          if (card) {
            cardObserver.unobserve(card);
          }
        });
      };
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: 'Seamless Adventure',
      description: 'Your itinerary, logistics, and ground transport are managed by a single, expert team. No gaps. No delays.',
      icon: Route,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Assurance',
      description: 'We don\'t just recommend insurance; we are the licensed experts managing your policies and advocating for your claims.',
      icon: ShieldCheck,
      iconColor: 'text-blue-600'
    },
    {
      title: 'Local Authority',
      description: '15+ years of East African expertise, giving you the best rates, best routes, and deepest insight.',
      icon: Award,
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 sm:mb-10 lg:mb-12 text-center text-black">
            What you get
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`group bg-blue-50 p-5 sm:p-6 md:p-8 rounded-lg hover:shadow-xl transition-all duration-500 hover:scale-105 shadow-md transform cursor-pointer ${
                    visibleCards[index] 
                      ? 'opacity-100 translate-y-0 rotate-0' 
                      : 'opacity-0 translate-y-8 rotate-1'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className={`${benefit.iconColor} bg-white p-3 sm:p-4 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg`}>
                      <IconComponent size={24} strokeWidth={2} className="sm:w-8 sm:h-8 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center transition-all duration-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Credentials between benefits and CTA */}
          <div className="mt-12">
            <CredentialsSection />
          </div>

          {/* Call to Action Section */}
          <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 rounded-xl p-6 sm:p-8 lg:p-16 text-center overflow-hidden shadow-xl border border-gray-200">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-100 rounded-full -mr-16 sm:-mr-24 lg:-mr-32 -mt-16 sm:-mt-24 lg:-mt-32 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-blue-100 rounded-full -ml-12 sm:-ml-18 lg:-ml-24 -mb-12 sm:-mb-18 lg:-mb-24 opacity-20"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900 leading-tight px-2">
                Ready to Experience the Eawestern Difference?
              </h3>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-light px-2">
                Join the thousands of clients who choose guaranteed excellence over settling for less. Let our experts craft your next adventure, secure your future, or organize your next trip&apos;s logistics.
              </p>
              <button className="bg-blue-900 hover:bg-red-900 active:bg-red-900 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

