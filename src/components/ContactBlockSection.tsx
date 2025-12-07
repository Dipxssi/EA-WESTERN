"use client";

import { useEffect, useRef } from 'react';

export function ContactBlockSection() {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Contact Block */}
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
              <button 
                className="text-white px-12 py-4 text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform"
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

