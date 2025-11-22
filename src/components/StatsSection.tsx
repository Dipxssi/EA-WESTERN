"use client";
import { useState, useEffect, useRef } from 'react';

export function StatsSection() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const finalValues: number[] = [15, 5000, 50, 0]; // 0 for support (24/7 is static)
  const labels: string[] = ['YEARS', 'TRAVELERS', 'DESTINATIONS', 'SUPPORT'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          finalValues.forEach((finalValue: number, index: number) => {
            // Skip animation for support (index 3) as it's static "24/7"
            if (index === 3) {
              setCounters((prev: number[]) => {
                const newCounters = [...prev];
                newCounters[index] = 1; // Mark as animated
                return newCounters;
              });
              return;
            }

            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = finalValue / steps;
            let currentStep = 0;
            
            const timer = setInterval(() => {
              currentStep++;
              const currentValue = Math.min(increment * currentStep, finalValue);
              
              setCounters((prev: number[]) => {
                const newCounters = [...prev];
                newCounters[index] = Math.round(currentValue);
                return newCounters;
              });

              if (currentStep >= steps) {
                clearInterval(timer);
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, finalValues]);

  const formatNumber = (num: number, index: number): string => {
    switch (index) {
      case 0: return `${num}+`; // Years
      case 1: return `${Math.round(num / 1000)}K+`; // Travelers
      case 2: return `${num}+`; // Destinations  
      case 3: return '24/7'; // Support
      default: return num.toString();
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {counters.map((counter: number, index: number) => (
            <div key={index} className="group">
              <div className={`text-5xl font-extralight mb-3 transition-colors duration-300 ${
                index === 2 ? 'text-blue-600' : 'text-black group-hover:text-blue-600'
              }`}>
                {formatNumber(counter, index)}
              </div>
              <div className="text-sm tracking-[0.2em] text-gray-600 font-light uppercase">
                {labels[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
