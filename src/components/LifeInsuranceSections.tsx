"use client";

import { useEffect, useRef, useState } from 'react';

export function LifeInsuranceSections() {
  const termSectionRef = useRef<HTMLElement>(null);
  const wholeSectionRef = useRef<HTMLElement>(null);
  const [termVisible, setTermVisible] = useState(false);
  const [wholeVisible, setWholeVisible] = useState(false);

  useEffect(() => {
    const termObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTermVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const wholeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWholeVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (termSectionRef.current) {
      termObserver.observe(termSectionRef.current);
    }
    if (wholeSectionRef.current) {
      wholeObserver.observe(wholeSectionRef.current);
    }

    return () => {
      if (termSectionRef.current) {
        termObserver.unobserve(termSectionRef.current);
      }
      if (wholeSectionRef.current) {
        wholeObserver.unobserve(wholeSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Term Life Insurance Section */}
      <section ref={termSectionRef} className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">LIFE INSURANCE</p>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Life Insurance – Secure Your Loved Ones' Future</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                termVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Term Life Insurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Provides financial protection for a specific period, ensuring your beneficiaries receive a lump sum in case of an unfortunate event.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div
              className={`relative transition-all duration-1000 ease-out ${
                termVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <img
                src="/images/term life.png"
                alt="Term Life Insurance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Whole Life Insurance Section */}
      <section ref={wholeSectionRef} className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <div
              className={`relative transition-all duration-1000 ease-out ${
                wholeVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <img
                src="/images/whole life.png"
                alt="Whole Life Insurance"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            {/* Right Column - Text Content */}
            <div
              className={`transition-all duration-1000 ease-out ${
                wholeVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-left">Whole Life Insurance</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Whole Life Insurance provides lifelong coverage, ensuring your loved ones receive financial support whenever needed. Unlike term insurance, it builds cash value over time, which you can borrow or withdraw for emergencies or major expenses.
                </p>
                <p>
                  With fixed premiums, your costs remain stable, offering predictability and peace of mind. Ideal for long-term security and estate planning, this policy guarantees a lasting legacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

