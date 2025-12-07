"use client";

import { useEffect, useRef, useState } from 'react';

export function AnimatedStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleParagraphs, setVisibleParagraphs] = useState<boolean[]>([false, false, false]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentAnimatingIndex, setCurrentAnimatingIndex] = useState<number | null>(null);

  const backgroundImages = [
    '/images/tanzania.jpg',
    '/images/fam.png',
    '/images/caar.png',
    '/images/tours.png',
    '/images/Amboseli.png',
    '/images/gorilla-trek.jpg',
    '/images/maasai.jpg',
    '/images/safari-pg.jpg',
    '/images/nairobi-city.jpg',
    '/images/Diana Beach.jpg',
    '/images/car image.jpg',
    '/images/insurance-family.jpg'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
            // Animate paragraphs with staggered delay
            setCurrentAnimatingIndex(0);
            setVisibleParagraphs([true, false, false]);
            
            setTimeout(() => {
              setCurrentAnimatingIndex(1);
              setVisibleParagraphs([true, true, false]);
            }, 300);
            
            setTimeout(() => {
              setCurrentAnimatingIndex(2);
              setVisibleParagraphs([true, true, true]);
            }, 600);
            
            setTimeout(() => {
              setIsAnimating(false);
              setCurrentAnimatingIndex(null);
            }, 1600);
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

  const paragraphs = [
    {
      text: "At Eawestern, we believe every journey deserves confidence — whether you're exploring East Africa's wild beauty, protecting what matters most, or simply getting where you need to go.",
      direction: 'left'
    },
    {
      text: "We began with one mission: to make travel, insurance, and mobility effortless for everyone. Today, we connect adventurers, families, and businesses to trusted experiences and reliable solutions across the region.",
      direction: 'right'
    },
    {
      text: "Rooted in local expertise and guided by global standards, we've earned a reputation for transparency, reliability, and personal care. From tailor-made safaris to car rentals and insurance support — we're with you every step of the way.",
      direction: 'left'
    }
  ];

  const getImageAnimation = (imageIndex: number) => {
    if (isAnimating && currentAnimatingIndex !== null) {
      const para = paragraphs[currentAnimatingIndex];
      if (para.direction === 'left') {
        return 'animate-slide-left';
      } else {
        return 'animate-slide-right';
      }
    }
    return 'animate-float';
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${
                isAnimating && currentAnimatingIndex !== null
                  ? paragraphs[currentAnimatingIndex].direction === 'left'
                    ? 'animate-slide-left'
                    : 'animate-slide-right'
                  : 'animate-float'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: isAnimating ? '1s' : '3s'
              }}
            >
              <img
                src={image}
                alt={`Background ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            The Eawestern Story
          </h2>
          <h3 className="text-2xl lg:text-3xl font-light mb-8 text-gray-700">
            Your Trusted Partner in Travel, Car Hire & Insurance
          </h3>
        </div>

        <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
          {paragraphs.map((para, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ease-out relative z-10 ${
                visibleParagraphs[index]
                  ? 'opacity-100 translate-x-0 scale-100'
                  : para.direction === 'left'
                  ? 'opacity-0 -translate-x-24 scale-95'
                  : 'opacity-0 translate-x-24 scale-95'
              }`}
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className={`${
                para.direction === 'left' 
                  ? 'text-left pr-8 lg:pr-16 border-l-4 border-blue-600 pl-6 py-4 bg-blue-50/80 backdrop-blur-sm rounded-r-lg shadow-lg' 
                  : 'text-right pl-8 lg:pl-16 border-r-4 border-blue-600 pr-6 py-4 bg-blue-50/80 backdrop-blur-sm rounded-l-lg shadow-lg'
              }`}>
                <p className="leading-relaxed">
                  {para.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

