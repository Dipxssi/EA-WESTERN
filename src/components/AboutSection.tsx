"use client";
import { useState, useEffect } from 'react';

export function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/images/hero-kenya-bg.png",
      alt: "Safari Adventure - Explore East Africa",
      theme: "Guided Tours"
    },
    {
      src: "/images/happy-family-background.jpg",
      alt: "Insurance Protection - Family Security",
      theme: "Travel Insurance"
    },
    {
      src: "/images/luxury-car-background.jpg",
      alt: "Car Rental - Premium Transport",
      theme: "Reliable Car Hire"
    }
  ];

  // Auto-rotate images every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen">
      {/* Rotating Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-20">
          {/* Small label with rotating theme */}
          <div className="mb-6">
            <span className="text-sm tracking-[0.3em] text-blue-200 font-light uppercase transition-all duration-500">
              About Us • {images[currentImage].theme}
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-5xl lg:text-6xl font-light mb-8 text-white leading-tight">
            Rooted in Africa. Built on Connection.
          </h2>
          
          {/* Content paragraphs */}
          <div className="space-y-8 text-lg font-bold text-white  max-w-3xl">
            <p>
              What began as an unexpected friendship on the red earth of Kenya 
              has grown into something lasting—a safari company rooted not in 
              strategy, but in soul. From the start, EA Western has been about 
              connection: to place, to people, and to purpose. Our story started 
              with two individuals who saw Africa not just as a destination, but as 
              something sacred—a place that changes you.
            </p>
            
            <p>
              More than two decades later, that spirit still guides everything we do. 
              We design each journey by hand, shaped by deep local knowledge, 
              real relationships, and a belief that travel should feel meaningful. This 
              isn&apos;t just where we work—it&apos;s where we call home. And when you 
              travel with us, it becomes part of your story too.
            </p>
          </div>
          </div>
        </div>
      
      {/* Image Indicators (Optional dots) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white' : 'bg-white/40'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
