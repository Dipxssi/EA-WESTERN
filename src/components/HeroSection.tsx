"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type HeroSectionProps = {
  locale?: string;
};

export function HeroSection({ locale = 'en' }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'video',
      src: '/videos/elephant.mp4',
      poster: '/images/tours.png',
      title: 'Elephant Encounter',
      focus: 'Tours and Safaris',
      duration: 15000 // 15 seconds
    },
    {
      type: 'video',
      src: '/videos/car.mp4', 
      poster: '/images/tours.png',
      title: 'Premium Transport',
      focus: 'Reliable Car Hire',
      duration: 8000 // 8 seconds
    },
    {
      type: 'video',
      src: '/videos/happy-family.mp4',
      poster: '/images/tours.png', 
      title: 'Family Protection',
      focus: 'Insurance Solutions',
      duration: 10000 // 10 seconds
    }
  ];


  // Auto-rotate slides based on individual video durations
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slides[currentSlide].duration);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides]);

  return (
    <section className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] relative overflow-hidden bg-white">
      {/* Rotating Video Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={slide.poster}
            preload="metadata"
          >
            <source src={slide.src} type="video/mp4" />
            <img 
              src={slide.poster} 
              alt={slide.title} 
              className="w-full h-full object-cover" 
            />
          </video>
        </div>
      ))}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center w-full">

          {/* Main Headline */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white drop-shadow-lg px-2 sm:px-4">
              <span className='block sm:inline'>Your journey of security and </span>
              <span className='block sm:inline'>adventure begins here</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-normal max-w-3xl mx-auto leading-relaxed drop-shadow mt-2 sm:mt-3 md:mt-4 px-2 sm:px-4 text-center">
              <span className='block sm:inline'>Guided tours, reliable car hire, and travel insurance – all under one roof.</span>
            </p>
          </div>

          {/* Dynamic subtitle based on current video */}
          <div className="mb-3 sm:mb-4 md:mb-6">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] text-white font-light uppercase transition-all duration-500 px-2 sm:px-4">
              {slides[currentSlide].focus}
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center px-2 sm:px-4">
            <Link 
              href={`/${locale}/about`}
              className="w-full sm:w-auto bg-blue-900 hover:bg-red-900 active:bg-red-900 text-white px-4 sm:px-6 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 font-medium tracking-wider sm:tracking-widest text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 uppercase shadow-lg rounded-full border-2 border-white hover:border-white text-center"
            >
              Get Started Today
            </Link>
            <button 
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('eawestern-guarantee');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 rounded-full px-4 sm:px-6 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 font-medium tracking-wider sm:tracking-widest text-xs sm:text-sm md:text-base lg:text-lg uppercase text-white"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
