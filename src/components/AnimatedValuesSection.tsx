"use client";

import { useEffect, useRef, useState } from 'react';
import { Shield, Award, Heart, CheckCircle2 } from 'lucide-react';

export function AnimatedValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const values = [
    {
      title: 'Integrity',
      description: 'We keep our promises.',
      icon: Shield
    },
    {
      title: 'Excellence',
      description: 'Quality service — every time.',
      icon: Award
    },
    {
      title: 'Safety',
      description: 'Your security comes first.',
      icon: Shield
    },
    {
      title: 'Customer Care',
      description: 'We serve with heart.',
      icon: Heart
    },
    {
      title: 'Reliability',
      description: 'We deliver what we say we will.',
      icon: CheckCircle2
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setHighlightedIndex(0); // Reset when out of view
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-highlight cards one by one when section is visible
  useEffect(() => {
    if (!isVisible) {
      setHighlightedIndex(0);
      setFlippedCards(new Set());
      return;
    }

    // Start with first card
    setHighlightedIndex(0);
    setFlippedCards(new Set());

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const flipNextCard = () => {
      // Update highlighted index
      setHighlightedIndex(currentIndex);
      
      // Flip the card after a short delay to show the flip animation
      timeoutId = setTimeout(() => {
        setFlippedCards(prev => new Set([...prev, currentIndex]));
        
        // Move to next card after showing text for 3 seconds
        timeoutId = setTimeout(() => {
          currentIndex = (currentIndex + 1) % values.length;
          flipNextCard();
        }, 3000); // Show text for 3 seconds
      }, 500); // Delay before flipping
    };

    // Start with first card after initial delay
    const initialTimeout = setTimeout(() => {
      flipNextCard();
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isVisible, values.length]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            How We Deliver Value?
          </h2>
        </div>

        <div className="space-y-6">
          {/* Top Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.slice(0, 3).map((value, index) => {
              const IconComponent = value.icon;
              const isHighlighted = highlightedIndex === index;
              const shouldShowText = flippedCards.has(index);
              return (
                <div
                  key={index}
                  className="relative h-[200px]"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 ease-in-out"
                    style={{ 
                      transformStyle: 'preserve-3d',
                      transform: shouldShowText ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front side - Logo only */}
                    <div
                      className={`absolute inset-0 rounded-lg border-2 text-center flex items-center justify-center ${
                        isHighlighted
                          ? 'bg-blue-600 border-blue-700 shadow-xl'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        zIndex: shouldShowText ? 1 : 2
                      }}
                    >
                      <div className={`p-4 rounded-full transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-white/20'
                          : 'bg-blue-100'
                      }`}>
                        <IconComponent 
                          className={isHighlighted ? 'text-white' : 'text-blue-600'} 
                          size={32} 
                          strokeWidth={2} 
                        />
                      </div>
                    </div>
                    
                    {/* Back side - Text */}
                    <div
                      className={`absolute inset-0 rounded-lg border-2 p-6 ${
                        isHighlighted
                          ? 'bg-blue-600 border-blue-700 shadow-xl text-white'
                          : 'bg-gray-50 border-gray-200 text-gray-900'
                      }`}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex justify-center mb-4">
                          <div className={`p-4 rounded-full transition-all duration-300 ${
                            isHighlighted
                              ? 'bg-white/20'
                              : 'bg-blue-100'
                          }`}>
                            <IconComponent 
                              className={isHighlighted ? 'text-white' : 'text-blue-600'} 
                              size={32} 
                              strokeWidth={2} 
                            />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-center">
                          {value.title}
                        </h3>
                        <p className={`text-center ${
                          isHighlighted ? 'text-white/90' : 'text-gray-700'
                        }`}>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center gap-6">
            {values.slice(3, 5).map((value, index) => {
              const IconComponent = value.icon;
              const cardIndex = index + 3;
              const isHighlighted = highlightedIndex === cardIndex;
              const shouldShowText = flippedCards.has(cardIndex);
              return (
                <div
                  key={cardIndex}
                  className="relative h-[200px] w-full md:w-[calc((100%-3rem)/3)]"
                    style={{ perspective: '1000px' }}
                  >
                    <div
                      className="relative w-full h-full transition-transform duration-700 ease-in-out"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: shouldShowText ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      {/* Front side - Logo only */}
                      <div
                        className={`absolute inset-0 rounded-lg border-2 text-center flex items-center justify-center ${
                          isHighlighted
                            ? 'bg-blue-600 border-blue-700 shadow-xl'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                        style={{ 
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          zIndex: shouldShowText ? 1 : 2
                        }}
                      >
                        <div className={`p-4 rounded-full transition-all duration-300 ${
                          isHighlighted
                            ? 'bg-white/20'
                            : 'bg-blue-100'
                        }`}>
                          <IconComponent 
                            className={isHighlighted ? 'text-white' : 'text-blue-600'} 
                            size={32} 
                            strokeWidth={2} 
                          />
                        </div>
                      </div>
                      
                      {/* Back side - Text */}
                      <div
                        className={`absolute inset-0 rounded-lg border-2 p-6 ${
                          isHighlighted
                            ? 'bg-blue-600 border-blue-700 shadow-xl text-white'
                            : 'bg-gray-50 border-gray-200 text-gray-900'
                        }`}
                        style={{ 
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="flex justify-center mb-4">
                            <div className={`p-4 rounded-full transition-all duration-300 ${
                              isHighlighted
                                ? 'bg-white/20'
                                : 'bg-blue-100'
                            }`}>
                              <IconComponent 
                                className={isHighlighted ? 'text-white' : 'text-blue-600'} 
                                size={32} 
                                strokeWidth={2} 
                              />
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-center">
                            {value.title}
                          </h3>
                          <p className={`text-center ${
                            isHighlighted ? 'text-white/90' : 'text-gray-700'
                          }`}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

