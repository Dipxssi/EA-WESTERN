"use client";

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Shield, Headphones, MapPin, FileCheck, UserCheck } from 'lucide-react';

export function WhyChooseSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setHighlightedIndex(0); // Reset when out of view
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

  // Auto-highlight cards one by one when section is visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % 5); // 5 cards total
    }, 2000); // Change highlighted card every 2 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

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
            <div className="text-lg lg:text-xl tracking-[0.3em] text-gray-500 font-light mb-4 uppercase">
              WHY CHOOSE EAWESTERN
            </div>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 text-black leading-tight">
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
                const isHighlighted = highlightedIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-500 border-2 group ${
                      isHighlighted 
                        ? 'border-blue-500 shadow-lg bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-lg transition-colors duration-300 ${
                          isHighlighted ? 'bg-blue-100' : 'bg-blue-50 group-hover:bg-blue-100'
                        }`}>
                          <IconComponent className={`transition-colors duration-300 ${
                            isHighlighted ? 'text-blue-700' : 'text-blue-600'
                          }`} size={24} strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isHighlighted ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
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
                const cardIndex = index + 3;
                const isHighlighted = highlightedIndex === cardIndex;
                return (
                  <div 
                    key={cardIndex} 
                    className={`bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-500 border-2 group ${
                      isHighlighted 
                        ? 'border-blue-500 shadow-lg bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className={`p-3 rounded-lg transition-colors duration-300 ${
                          isHighlighted ? 'bg-blue-100' : 'bg-blue-50 group-hover:bg-blue-100'
                        }`}>
                          <IconComponent className={`transition-colors duration-300 ${
                            isHighlighted ? 'text-blue-700' : 'text-blue-600'
                          }`} size={24} strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isHighlighted ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600'
                        }`}>
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

