"use client";

import { useEffect, useRef, useState } from 'react';

export function AnimatedPhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [introVisible, setIntroVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimatingIndex, setCurrentAnimatingIndex] = useState<number | null>(null);

  const cards = [
    {
      title: 'A-to-Z Logistics',
      description: 'Total control over the traveler\'s experience.',
      direction: 'left'
    },
    {
      title: 'Risk Mitigation',
      description: 'Every service benefits from the deep risk knowledge of our insurance division.',
      direction: 'right'
    },
    {
      title: 'Unwavering Support',
      description: 'A single, dedicated team answers your call, whether you\'re stranded on a safari road or filing a complex claim.',
      direction: 'left'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // First show intro card
            setIntroVisible(true);
            
            // Then animate cards one by one when section comes into view
            setTimeout(() => {
              setIsAnimating(true);
              setCurrentAnimatingIndex(0);
              setVisibleCards([true, false, false]);
            }, 300);
            
            setTimeout(() => {
              setCurrentAnimatingIndex(1);
              setVisibleCards([true, true, false]);
            }, 800);
            
            setTimeout(() => {
              setCurrentAnimatingIndex(2);
              setVisibleCards([true, true, true]);
            }, 1300);
            
            setTimeout(() => {
              setIsAnimating(false);
              setCurrentAnimatingIndex(null);
            }, 2300);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/philosophy.png"
          alt="Philosophy background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            Our Philosophy: Your Confidence is Our Currency.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Intro Text */}
          <div
            className={`transform transition-all duration-700 ease-out mb-8 relative z-10 ${
              introVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              We built Eawestern to be the single point of accountability for your most critical needs. Every service—Tours, Insurance, Car Hire—is a pillar of our commitment to your Confidence. This isn&apos;t just cross-selling; it&apos;s a strategic, integrated model that ensures:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ease-out relative z-10 ${
                  visibleCards[index]
                    ? 'opacity-100 translate-x-0 scale-100'
                    : card.direction === 'left'
                    ? 'opacity-0 -translate-x-24 scale-95'
                    : 'opacity-0 translate-x-24 scale-95'
                }`}
                style={{ transitionDelay: `${index * 500}ms` }}
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border-l-4 border-blue-600 shadow-lg h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

