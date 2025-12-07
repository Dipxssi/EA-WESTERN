"use client";

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Building2, GraduationCap, Clock, Car, ShieldCheck, Home, Heart } from 'lucide-react';

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
  Heart,
};

export function AnimatedSolutionsGrid({ products, locale }: AnimatedSolutionsGridProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(products.map(() => false));
  const [expandedCards, setExpandedCards] = useState<boolean[]>(products.map(() => false));
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

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => {
        const Icon = iconMap[product.iconName] || Building2;
        const isVisible = visibleCards[index];
        const isExpanded = expandedCards[index];
        const shouldTruncate = product.description.length > 120;
        const displayText = isExpanded || !shouldTruncate ? product.description : truncateText(product.description);

        return (
          <div
            key={product.title}
            className={`group bg-white border-2 border-gray-100 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
              transitionDuration: '500ms',
              transitionTimingFunction: 'ease-out',
            }}
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:via-blue-400/5 group-hover:to-blue-600/10 transition-all duration-300 pointer-events-none"></div>
            
            {/* Subtle pattern background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-3xl" 
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/40 group-hover:to-blue-100/20 transition-all duration-500 rounded-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon with pulse animation on hover */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
                <Icon className="w-10 h-10 group-hover:rotate-6 transition-transform duration-300" />
              </div>
              
              {/* Title with better hierarchy */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                {product.title}
              </h3>
              
              {/* Description with better line-height */}
              <p 
                className="text-gray-600 text-sm leading-relaxed flex-grow mb-4 group-hover:text-gray-700 transition-colors duration-300"
                style={{ lineHeight: '1.75' }}
              >
                {displayText}
              </p>

              {/* Learn more button that fades in on hover */}
              {shouldTruncate && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-blue-800 flex items-center gap-2 mt-auto"
                >
                  {isExpanded ? 'Show less' : 'Learn more'}
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

