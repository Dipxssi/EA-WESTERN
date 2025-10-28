"use client";

import { useState, useEffect } from 'react';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'video',
      src: '/videos/safari-adventure.mp4',
      poster: '/images/safari-background.png',
      title: 'Safari Adventure',
      focus: 'Guided Tours'
    },
    {
      type: 'video',
      src: '/videos/luxury-car.mp4', 
      poster: '/images/luxury-car-background.jpg',
      title: 'Premium Transport',
      focus: 'Reliable Car Hire'
    },
    {
      type: 'video',
      src: '/videos/happy-family.mp4',
      poster: '/images/happ-family-background.jpg', 
      title: 'Family Protection',
      focus: 'Travel Insurance'
    }
  ];

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
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
      
      <div className="relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          {/* Main Headline */}
          <div className="mb-16">
            <h1 className="text-sm font-light mb-8 leading-[0.9] text-white drop-shadow-lg">
              Explore. Insure. Drive.
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-12 "></div>
            <p className="text-4xl  text-white font-bold max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow">
              Your journey of adventure and security begins here
              <br/>
              Guided tours, reliable car hire, and travel insurance — all under one roof.
            </p>
          </div>

          {/* Dynamic subtitle based on current video - UPDATED */}
          <div className="mb-4">
            <div className="text-sm tracking-[0.3em] text-white font-light uppercase transition-all duration-500">
              {slides[currentSlide].focus}
            </div>
          </div>

          {/* Main CTA Button Only */}
          <div>
         <button className="bg-blue-900 hover:bg-red-900 text-white px-12 py-4 font-light tracking-widest text-lg transition-all duration-300 uppercase shadow-lg rounded-full border-2 border-white hover:border-red-200">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
