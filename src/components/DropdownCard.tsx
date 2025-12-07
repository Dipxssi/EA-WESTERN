"use client";

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, CalendarDays, Camera, ChevronDown } from 'lucide-react';

type Destination = {
  title: string;
  description: string;
  location: string;
  image: string;
  duration: string;
  theme: string;
  highlights: string[];
};

type DropdownCardProps = {
  destination: Destination;
  locale: string;
};

export function DropdownCard({ destination, locale }: DropdownCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="group rounded-[36px] overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 border border-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full border border-white/30">
            <span className="w-2 h-2 rounded-full bg-emerald-300" />
            {destination.location}
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-white/80">EAWESTERN</span>
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 uppercase tracking-[0.3em]">
          <span className="inline-flex items-center gap-2 text-gray-600 tracking-normal uppercase font-semibold">
            {destination.theme}
          </span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900">{destination.title}</h3>
          <p className="text-gray-600 leading-relaxed">{destination.description}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 text-blue-900 font-semibold py-3 px-4 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
          >
            <span>View Details</span>
            <ChevronDown 
              size={18} 
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isOpen && (
            <div className="mt-4 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-white/80 shadow-sm">
                  <span className="w-10 h-10 rounded-2xl bg-white text-blue-900 flex items-center justify-center border border-blue-100 shadow-sm">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-1">Location</p>
                    <p className="font-medium text-gray-900 tracking-tight">{destination.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-white/80 shadow-sm">
                  <span className="w-10 h-10 rounded-2xl bg-white text-blue-900 flex items-center justify-center border border-blue-100 shadow-sm">
                    <CalendarDays size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-1">Duration</p>
                    <p className="font-medium text-gray-900 tracking-tight">{destination.duration}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-5 border border-blue-50 shadow-inner shadow-blue-100/60">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-900 mb-3">
                  <Camera size={16} />
                  Highlights
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {destination.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-blue-900"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <footer className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/60">
                <div className="text-xs text-gray-500 uppercase tracking-[0.3em]">Secure your spot</div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold"
                >
                  Plan this tour
                  <span aria-hidden>→</span>
                </Link>
              </footer>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

