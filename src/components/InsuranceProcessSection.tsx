"use client";

import { useEffect, useRef, useState } from 'react';
import { Phone, Search, UserCheck, Zap } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Needs Analysis',
    description: 'A 15-minute call to understand your exact risk profile.',
    icon: Phone,
  },
  {
    number: '2',
    title: 'Policy Comparison',
    description: 'We compare the top and trusted insurers for you.',
    icon: Search,
  },
  {
    number: '3',
    title: 'Expert Recommendation',
    description: 'A clear, unbiased policy recommendation.',
    icon: UserCheck,
  },
  {
    number: '4',
    title: 'Seamless Activation & Advocacy',
    description: 'We activate the policy and stand by you for any claims.',
    icon: Zap,
  },
];

export function InsuranceProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [flipped, setFlipped] = useState(steps.map(() => false));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setVisible(true);
            setHasAnimated(true);
            
            // Wait a bit for cards to fade in, then start flipping
            setTimeout(() => {
              // Automatically flip cards one by one with delay
              steps.forEach((_, index) => {
                setTimeout(() => {
                  setFlipped((prev) => {
                    const newFlipped = [...prev];
                    newFlipped[index] = true;
                    return newFlipped;
                  });
                }, index * 500); // 500ms delay between each card
              });
            }, 300); // Wait 300ms after section becomes visible
            
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="bg-white py-16">
      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">INSURANCE PROCESS</p>
          <h2 className="text-3xl font-light text-gray-900 mb-4">Get Insured with Confidence in 4 Simple Steps</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`group relative rounded-3xl shadow-sm hover:shadow-xl transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 120}ms`, perspective: '1200px' }}
              >
                <div
                  className="relative h-full min-h-[320px] rounded-3xl border border-gray-200 bg-white p-6 text-center transition-transform duration-[1200ms] ease-in-out"
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
                      {step.number}
                    </div>
                    <div className="w-12 h-12 rounded-2xl border-2 border-blue-200 text-blue-600 flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
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


