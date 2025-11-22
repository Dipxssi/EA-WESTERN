"use client";

import { useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Headphones, MapPin, FileCheck, UserCheck } from 'lucide-react';

export function WhyChooseSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const points = [
    {
      title: 'Licensed & accredited',
      description: 'We operate with full compliance and corporate standards.',
      icon: Shield
    },
    {
      title: 'End-to-end support',
      description: 'From travel planning to claims processing, we stand with you.',
      icon: Headphones
    },
    {
      title: 'Deep regional expertise',
      description: 'Local knowledge you can rely on.',
      icon: MapPin
    },
    {
      title: 'Transparent processes',
      description: 'No hidden fees, no guesswork.',
      icon: FileCheck
    },
    {
      title: 'Personalized service',
      description: 'Solutions tailored to your exact needs.',
      icon: UserCheck
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="text-sm tracking-[0.3em] text-gray-500 font-light mb-4 uppercase">
              WHY CHOOSE EAWESTERN
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black leading-tight">
              Why Individuals, Families, and Businesses Trust Us
            </h2>
            <div className="w-24 h-px bg-black mx-auto"></div>
          </div>

          {/* Points Grid - 3 cards top row, 2 cards bottom row centered */}
          <div className="mt-12">
            {/* First Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {points.slice(0, 3).map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <IconComponent className="text-blue-600" size={24} strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {point.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Second Row - 2 Cards Centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {points.slice(3, 5).map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div 
                    key={index + 3} 
                    className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                          <IconComponent className="text-blue-600" size={24} strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {point.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

