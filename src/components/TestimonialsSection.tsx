"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Professional, friendly, and reliable. Eawestern made our Maasai Mara trip unforgettable!",
      author: "Sarah",
      location: "UK"
    },
    {
      quote: "The best car hire service I've used in Nairobi. Clean cars, fair pricing, and great support.",
      author: "James",
      location: "Kenya"
    },
    {
      quote: "Fast motor insurance and zero stress. Highly recommended.",
      author: "Michelle",
      location: "Nairobi"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={contentRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="text-sm tracking-[0.3em] text-gray-500 font-light mb-4 uppercase">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-black leading-tight">
              What Our Clients Say
            </h2>
            <div className="w-24 h-px bg-black mx-auto"></div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full px-4 flex-shrink-0"
                  >
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-10 h-full border border-gray-200 hover:shadow-lg transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="text-blue-600" size={32} strokeWidth={1.5} />
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10 border border-gray-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-700" size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10 border border-gray-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-700" size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

