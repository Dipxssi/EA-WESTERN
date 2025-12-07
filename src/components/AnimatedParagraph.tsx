"use client";

import { useEffect, useRef, useState } from 'react';

type AnimatedParagraphProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right';
  delay?: number;
};

export function AnimatedParagraph({ 
  children, 
  className = '', 
  direction = 'left',
  delay = 0 
}: AnimatedParagraphProps) {
  const paragraphRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, [delay]);

  const getInitialTransform = () => {
    if (direction === 'right') {
      return 'opacity-0 translate-x-12';
    }
    return 'opacity-0 -translate-x-12';
  };

  return (
    <div
      ref={paragraphRef}
      className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : getInitialTransform()
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

