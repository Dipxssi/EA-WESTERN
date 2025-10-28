"use client";
import { useState, useEffect, useRef } from 'react';

export function StatsSection() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const finalValues: number[] = [15, 5000, 50, 247];
  const labels: string[] = ['YEARS', 'TRAVELERS', 'DESTINATIONS', 'SUPPORT'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          finalValues.forEach((finalValue: number, index: number) => {
            let currentValue = 0;
            const increment = finalValue / 100;
            
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
              }
              
              setCounters((prev: number[]) => {
                const newCounters = [...prev];
                newCounters[index] = Math.round(currentValue);
                return newCounters;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {counters.map((counter: number, index: number) => (
            <div key={index} className="group">
              <div className="text-5xl font-extralight mb-3 text-black group-hover:text-blue-600 transition-colors duration-300">
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
