"use client";

import { useEffect, useRef } from 'react';

export function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Image on the left */}
        <div className="relative h-full min-h-[500px] lg:min-h-screen">
          <img 
            src="/images/promise.png"
            alt="About EA Western"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text content on the right */}
        <div className="flex items-center px-8 lg:px-12 py-20" style={{ backgroundColor: '#1e3a8a' }}>
          <div 
            ref={contentRef}
            className="max-w-2xl opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            {/* Main heading */}
            <h2 className="text-4xl lg:text-5xl font-light mb-8 text-white leading-tight">
              Your Journey, Our Promise.
            </h2>
            
            {/* Content paragraphs */}
            <div className="space-y-6 text-base lg:text-lg font-normal text-white leading-relaxed mb-8">
              <p>
                At Eawestern, we believe every journey deserves confidence — whether you&apos;re exploring East Africa&apos;s wild beauty, protecting what matters most, or simply getting where you need to go.
              </p>
              
              <p>
                We began with one mission: to make travel, insurance, and mobility effortless for everyone. Today, we connect adventurers, families, and businesses to trusted experiences and reliable solutions across the region.
              </p>
              
              <p>
                Rooted in local expertise and guided by global standards, we&apos;ve earned a reputation for transparency, reliability, and personal care. From tailor-made safaris to car rentals and insurance support — we&apos;re with you every step of the way.
              </p>
            </div>
            
            {/* Red button */}
            <button 
              className="text-white px-8 py-3 font-medium tracking-wider text-sm transition-all duration-300 uppercase rounded-full"
              style={{ backgroundColor: '#d92323', border: '2px solid white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c11e1e'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#d92323'}
            >
              VIEW OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
