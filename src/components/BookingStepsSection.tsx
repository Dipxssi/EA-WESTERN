"use client";

import { useEffect, useRef, useState } from 'react';
import { ClipboardList, MessagesSquare, CreditCard, SunMedium } from 'lucide-react';

const steps = [
  {
    title: 'Step 1 — Choose Your Tour',
    description: 'Explore our packages or request a custom itinerary.',
    icon: ClipboardList,
  },
  {
    title: 'Step 2 — Talk to Our Team',
    description: 'We confirm travel dates, pricing, preferences, and special needs.',
    icon: MessagesSquare,
  },
  {
    title: 'Step 3 — Secure Your Booking',
    description: 'Send a deposit and receive instant confirmation.',
    icon: CreditCard,
  },
  {
    title: 'Step 4 — Show Up & Enjoy the Journey',
    description: 'We handle transport, hotels, guides, park fees, and every detail.',
    icon: SunMedium,
  },
];

export function BookingStepsSection() {
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
    <section className="bg-white py-16">
      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">Booking Process</p>
          <h2 className="text-3xl font-light text-gray-900">How Booking Works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`group relative cursor-pointer rounded-3xl shadow-sm hover:shadow-xl transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 120}ms`, perspective: '1200px' }}
                onClick={() =>
                  setFlipped((prev) => prev.map((val, idx) => (idx === index ? !val : val)))
                }
              >
                <div
                  className="relative h-full min-h-[320px] rounded-3xl border border-gray-200 bg-white p-6 text-center transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 rounded-2xl border-2 border-blue-200 text-blue-600 flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">Tap to reveal</p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
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
      </div>
    </section>
  );
}

