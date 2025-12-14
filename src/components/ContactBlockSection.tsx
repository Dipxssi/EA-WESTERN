"use client";

import { useEffect, useRef } from 'react';

export function ContactBlockSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile fallback: show content immediately
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile && contentRef.current) {
      contentRef.current.classList.add('opacity-100', 'translate-y-0');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px' }
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

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Contact Block */}
          <div className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-center text-white relative overflow-hidden shadow-2xl" style={{ backgroundColor: '#1e3a8a' }}>
            <div className="relative z-10">
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 leading-tight px-2">
                We&apos;re Here to Support Your Journey
              </h2>
              
              {/* Decorative line */}
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
              
              {/* Description Text */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-light px-2">
                Whether you&apos;re planning your next safari, securing insurance, or booking a vehicle—our team is ready to help.
              </p>
              
              {/* CTA Button */}
              <button 
                className="text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform"
                style={{ backgroundColor: '#d92323', border: '2px solid white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c11e1e'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d92323'}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

