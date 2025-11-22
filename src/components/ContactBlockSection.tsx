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
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full -mr-48 -mt-48 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 rounded-full -ml-40 -mb-40 opacity-20"></div>
            
            <div className="relative z-10">
              {/* Headline */}
              <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                We&apos;re Here to Support Your Journey
              </h2>
              
              {/* Decorative line */}
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              
              {/* Description Text */}
              <p className="text-lg lg:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                Whether you&apos;re planning your next safari, securing insurance, or booking a vehicle—our team is ready to help.
              </p>
              
              {/* CTA Button */}
              <button className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-4 text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:shadow-xl uppercase tracking-wide hover:scale-105 transform">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

