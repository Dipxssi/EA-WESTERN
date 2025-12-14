"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type AboutSectionProps = {
  locale?: string;
};

export function AboutSection({ locale = 'en' }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="relative min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Image on the left */}
        <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-screen order-2 lg:order-1">
          <img 
            src="/images/promise.png"
            alt="About EA Western"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text content on the right */}
        <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 order-1 lg:order-2" style={{ backgroundColor: '#1e3a8a' }}>
          <div className="max-w-2xl w-full">
            {/* Main heading */}
            <h2 
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 text-white leading-tight transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
            >
              Your Journey, Our Promise.
            </h2>
            
            {/* Content paragraphs */}
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg font-normal text-white leading-relaxed mb-6 sm:mb-8">
              <p 
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
              >
                At Eawestern, we believe every journey deserves confidence — whether you&apos;re exploring East Africa&apos;s wild beauty, protecting what matters most, or simply getting where you need to go.
              </p>
              
              <p 
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
              >
                We began with one mission: to make travel, insurance, and mobility effortless for everyone. Today, we connect adventurers, families, and businesses to trusted experiences and reliable solutions across the region.
              </p>
              
              <p 
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
              >
                Rooted in local expertise and guided by global standards, we&apos;ve earned a reputation for transparency, reliability, and personal care. From tailor-made safaris to car rentals and insurance support — we&apos;re with you every step of the way.
              </p>
            </div>
            
            {/* Red button */}
            <Link 
              href={`/${locale}/about`}
              className={`inline-block text-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium tracking-wider text-xs sm:text-sm transition-all duration-1000 ease-out uppercase rounded-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                backgroundColor: '#d92323', 
                border: '2px solid white',
                transitionDelay: isVisible ? '800ms' : '0ms',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c11e1e'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d92323'}
            >
              VIEW OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
