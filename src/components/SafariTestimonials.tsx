"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const safariTestimonials = [
  {
    quote:
      'EA Western curated our Maasai Mara trip end-to-end. From seamless transport to incredible guides, we felt cared for every moment.',
    author: 'Grace & Daniel',
    location: 'Kenya',
    initials: 'GD',
  },
  {
    quote:
      'We wanted a corporate retreat that mixed safari, culture, and downtime. The team delivered a flawless multi-country itinerary.',
    author: 'Moses K.',
    location: 'Uganda',
    initials: 'MK',
  },
  {
    quote:
      'Diani was paradise. All activities, meals, and transfers were handled. We just showed up and enjoyed.',
    author: 'Aisha & Family',
    location: 'Kenya',
    initials: 'AF',
  },
];

export function SafariTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % safariTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
    setCurrentIndex((prev) => (prev - 1 + safariTestimonials.length) % safariTestimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % safariTestimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={contentRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4">What Our Clients Say</p>
            <h2 className="text-3xl font-light text-gray-900">Stories from Recent Travelers</h2>
          </div>
          <div className="relative">
            <div className="overflow-hidden px-2 sm:px-6">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {safariTestimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto px-4">
                      <div className="bg-gray-50 rounded-[32px] p-8 lg:p-10 border border-gray-200 shadow-sm h-full">
                        <div className="mb-6 text-blue-900">
                          <Quote size={36} strokeWidth={1.5} />
                        </div>
                        <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed italic">
                          “{testimonial.quote}”
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                            {testimonial.initials}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <div className="flex justify-center gap-2 mt-8">
            {safariTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
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

