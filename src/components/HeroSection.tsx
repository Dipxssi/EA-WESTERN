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
      poster: '/images/safari-background.png',
      title: 'Elephant Encounter',
      focus: 'Tours and Safaris'
    },
    {
      type: 'video',
      src: '/videos/car.mp4', 
      poster: '/images/luxury-car-background.jpg',
      title: 'Premium Transport',
      focus: 'Reliable Car Hire'
    },
    {
      type: 'video',
      src: '/videos/happy-family.mp4',
      poster: '/images/happ-family-background.jpg', 
      title: 'Family Protection',
      focus: 'Insurance Solutions'
    }
  ];


  // Auto-rotate slides every 17 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 17000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="min-h-[70vh] relative overflow-hidden bg-white">
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
      
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] py-12">
        <div className="max-w-5xl mx-auto text-center px-6">

          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              <div className="whitespace-nowrap">Your journey of security and</div>
              <div className="whitespace-nowrap">adventure begins here</div>
            </h1>
            <p className="text-xl md:text-2xl text-white font-normal max-w-3xl mx-auto leading-relaxed drop-shadow mt-4 whitespace-nowrap">
              Guided tours, reliable car hire, and travel insurance – all under one roof.
            </p>
          </div>

          {/* Dynamic subtitle based on current video - UPDATED */}
          <div className="mb-4">
            <div className="text-2xl tracking-[0.3em] text-white font-light uppercase transition-all duration-500">
              {slides[currentSlide].focus}
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={`/${locale}/about`}
              className="bg-blue-900 hover:bg-red-900 active:bg-red-900 text-white px-12 py-4 font-medium tracking-widest text-lg transition-all duration-300 uppercase shadow-lg rounded-full border-2 border-white hover:border-white"
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
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30 rounded-full px-12 py-4 font-medium tracking-widest text-lg uppercase text-white"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
