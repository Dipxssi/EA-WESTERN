"use client";

import { useEffect, useRef, useState } from 'react';
import { Globe, Shield, Heart } from 'lucide-react';

export function AnimatedPillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const pillars = [
    {
      title: 'Integrated Local Expertise',
      description: 'Our team combines F&B (Travel), Finance (Insurance), and Logistics (Car Hire) experts—all locally fluent—to give you an advantage no single-service company can match.',
      icon: Globe
    },
    {
      title: 'Proactive Claims & Support',
      description: 'When others stall, we advocate. We see our role as actively securing your peace of mind, not passively providing a service.',
      icon: Shield
    },
    {
      title: 'Commitment to East Africa',
      description: 'We are a licensed Kenyan company, deeply invested in sustainable tourism, community support, and providing local employment.',
      icon: Heart
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setHighlightedIndex(0); // Reset when out of view
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

  // Auto-highlight cards one by one when section is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % pillars.length);
    }, 2000); // Change highlighted card every 2 seconds

    return () => clearInterval(interval);
  }, [isVisible, pillars.length]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            The Eawestern Pillars of Trust
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isHighlighted = highlightedIndex === index;
            return (
              <div
                key={index}
                className={`p-8 rounded-lg transition-all duration-500 border-2 ${
                  isHighlighted
                    ? 'bg-blue-600 border-blue-700 shadow-xl scale-105 text-white'
                    : 'bg-blue-50 border-blue-200 hover:shadow-lg text-gray-900'
                }`}
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                  isHighlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {pillar.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  isHighlighted ? 'text-white/90' : 'text-gray-700'
                }`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

