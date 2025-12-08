"use client";

import { Quote } from 'lucide-react';

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

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">What Our Travelers Say</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">Stories from Recent Travelers</h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-testimonial-slide gap-6">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={`${t.author}-${idx}`}
                className="w-80 shrink-0 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-semibold">
                    {t.author.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <Quote className="mx-auto mb-3 text-blue-600" size={20} strokeWidth={1.5} />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">“{t.quote}”</p>
                <div className="text-sm font-semibold text-gray-900">{t.author}</div>
                <div className="text-xs text-gray-500">{t.location}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes testimonial-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonial-slide {
            width: max-content;
            animation: testimonial-slide 18s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-testimonial-slide {
              animation-duration: 24s;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

