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
      focus: 'Explore East Africa'
    },
    {
      type: 'video',
      src: '/videos/luxury-car.mp4', 
      poster: '/images/luxury-car-background.jpg',
      title: 'Premium Transport',
      focus: 'Drive with Confidence'
    },
    {
      type: 'video',
      src: '/videos/happy-family.mp4',
      poster: '/images/happ-family-background.jpg', 
      title: 'Family Protection',
      focus: 'Insure what Matters'
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
          {/* Dynamic subtitle based on current video */}
          <div className="mb-4">
            <div className="text-sm tracking-[0.3em] text-gray-600 font-light uppercase transition-all duration-500">
              {slides[currentSlide].focus}
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-[0.9] text-black drop-shadow-lg">
              Explore. Insure.Drive.
              <br/>
              <span className="text-5xl md:text-6xl">— With Confidence.</span>
            </h1>
            <div className="w-24 h-px bg-black mx-auto mb-12"></div>
            <p className="text-xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow">
              At Eawestern, we make your next adventure effortless. From unforgettable East African tours 
              and safaris to reliable car rentals and trusted insurance solutions — we handle every detail 
              so you can live freely.
            </p>
          </div>

          {/* Main CTA Button Only */}
          <div>
            <button className="bg-blue-500 hover:bg-red-700 text-white px-12 py-4 font-light tracking-widest text-lg transition-all duration-300 uppercase shadow-lg">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
