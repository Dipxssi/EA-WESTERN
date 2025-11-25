"use client";

import { useEffect, useRef, useState } from 'react';
import { Car, CalendarDays, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Choose Your Car',
    description: 'Browse our fleet and select a vehicle that fits your mission.',
    icon: Car,
  },
  {
    title: 'Make a Reservation',
    description: 'Share your schedule, routes, and special requirements for a tailored quote.',
    icon: CalendarDays,
  },
  {
    title: 'Enjoy Your Ride',
    description: 'Drive with confidence or opt for a professional chauffeur for added convenience.',
    icon: Sparkles,
  },
];

export function CarHireBookingSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(steps.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">How It Works</p>
        <h2 className="text-3xl font-light mb-3">Easy Booking Process</h2>
        <p className="text-gray-600">
          Three quick steps to get on the road. Need a driver, special equipment, or cross-border permits? Consider it handled.
        </p>
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={`group relative cursor-pointer rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 140}ms`, perspective: '1200px' }}
              onClick={() =>
                setFlipped((prev) => prev.map((val, idx) => (idx === index ? !val : val)))
              }
            >
              <div
                className="relative h-full min-h-[280px] rounded-[32px] border border-gray-200 bg-gray-50 p-6 text-center transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-2xl border-2 border-blue-200 text-blue-600 flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="px-4">
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-[0.3em]">Tap to reveal</p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-500 mt-4">Tap to go back</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


