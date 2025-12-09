"use client";

import { useState, useEffect, useRef } from 'react';
import { Building2, GraduationCap, Clock, Car, ShieldCheck, Home, HeartPulse, PiggyBank } from 'lucide-react';

type Product = {
  title: string;
  description: string;
  iconName: string;
};

type AnimatedSolutionsGridProps = {
  products: Product[];
  locale: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  GraduationCap,
  Clock,
  Car,
  ShieldCheck,
  Home,
  HeartPulse,
  PiggyBank,
};

export function AnimatedSolutionsGrid({ products, locale }: AnimatedSolutionsGridProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(products.map(() => false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger animation for cards
            products.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [products.length]);

  return (
    <div ref={sectionRef} className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const Icon = iconMap[product.iconName] || Building2;
          const isVisible = visibleCards[index];

          return (
            <div
              key={product.title}
              className={`group bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[240px] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '500ms',
                transitionTimingFunction: 'ease-out',
              }}
            >
              {/* Icon and Title Header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-900">
                  {product.title}
                </h3>
              </div>
              
              {/* Description below */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

