"use client";
import { useState, useEffect, useRef } from 'react';

export function StatsSection() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const finalValues: number[] = [15, 5000, 50, 0]; // 0 for support (24/7 is static)
  const labels: string[] = ['Years Experience', 'Corporate Clients', 'Global Destinations', 'Dedicated Support'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          finalValues.forEach((finalValue: number, index: number) => {
            if (index === 3) {
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = 1;
                return newCounters;
              });
              return;
            }

            const duration = 2000;
            const steps = 60;
            const increment = finalValue / steps;
            let currentStep = 0;
            
            const timer = setInterval(() => {
              currentStep++;
              const currentValue = Math.min(increment * currentStep, finalValue);
              
              setCounters((prev) => {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated, finalValues]);

  const formatNumber = (num: number, index: number): string => {
    switch (index) {
      case 0: return `${num}+`;
      case 1: return `${Math.round(num / 1000)}K+`;
      case 2: return `${num}+`;
      case 3: return '24/7';
      default: return num.toString();
    }
  };

  return (
    <section ref={sectionRef} className="py-[120px] md:py-[180px] bg-[#0B1F2E] text-white overflow-hidden border-t border-[var(--color-gold)]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-x-0 md:divide-x divide-[var(--color-gold)]/10">
          {counters.map((counter: number, index: number) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <div className="serif text-[48px] md:text-[72px] mb-4 text-[var(--color-gold)] tabular-nums tracking-tighter font-light">
                {formatNumber(counter, index)}
              </div>
              <div className="uppercase-label text-white/50 text-[10px] md:text-[11px] max-w-[160px]">
                {labels[index]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
