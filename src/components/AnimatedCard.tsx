"use client";

import { useEffect, useRef, useState } from 'react';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  index = 0
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  // Mobile fallback: show immediately on mobile
  const isMobileInitial = typeof window !== 'undefined' && window.innerWidth < 768;
  const [isVisible, setIsVisible] = useState(isMobileInitial);

  useEffect(() => {
    // Mobile fallback: show immediately
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation based on index
          const staggerDelay = delay + (index * 100);
          setTimeout(() => {
            setIsVisible(true);
          }, staggerDelay);
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay, index]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
}

