"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

export function VehiclesNavigation({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Car Hire Home', href: `/${locale}/vehicles` },
    { name: 'Fleet', href: `/${locale}/vehicles/fleet` },
    { name: 'Services', href: `/${locale}/vehicles/services` },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${
        scrolled ? 'bg-white py-4 shadow-xl border-b border-[#ede9e1]' : 'bg-white py-4 border-b border-[#ede9e1]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center gap-3 min-w-0">
        
        <div className="flex items-center gap-5 min-w-0">
          <Link
            href={`/${locale}`}
            className="hidden md:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] font-bold text-[#1a2e45] transition-colors hover:text-[#1e3a5f]"
          >
            <ArrowLeft size={16} aria-hidden />
            <span>Main Home</span>
          </Link>
          {/* LOGO */}
          <Link href={`/${locale}/vehicles`} className="flex items-center gap-2 sm:gap-3 group z-50 min-w-0">
            <div className="flex h-[35px] w-[35px] items-center justify-center rounded-[6px] border border-[#c9a96e] text-[14px] font-semibold text-[#1e3a5f] transition-all duration-300 ease-[ease] group-hover:scale-105 shrink-0">
              EW
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] sm:text-[18px] md:text-[20px] font-bold text-[#1a2e45] tracking-wide sm:tracking-wider leading-none truncate sm:overflow-visible sm:whitespace-normal">
                eawestern
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#4a7fa5] font-bold mt-0.5 sm:mt-1 truncate">Car Hire & Leasing</span>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[13px] uppercase tracking-[0.1em] font-bold transition-colors ${
                isActive
                  ? 'text-[#1e3a5f]'
                  : 'text-[#1a2e45] hover:text-[#1e3a5f]'
              }`}
            >
              {link.name}
            </Link>
            );
          })}
          <Link
            href={`/${locale}/vehicles/contact`}
            className="bg-[#1e3a5f] text-white px-[26px] py-[12px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-[#2c5282] transition-colors rounded-[2px]"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden z-50 text-[#1a2e45]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE NAV OVERLAY */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Link
            href={`/${locale}`}
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.1em] font-bold text-[#1a2e45] transition-colors hover:text-[#1e3a5f]"
          >
            <ArrowLeft size={16} aria-hidden />
            <span>Main Home</span>
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[24px] uppercase tracking-[0.1em] font-bold transition-colors ${
                isActive ? 'text-[#1e3a5f]' : 'text-[#1a2e45] hover:text-[#4a7fa5]'
              }`}
            >
              {link.name}
            </Link>
            );
          })}
          <Link
            href={`/${locale}/vehicles/contact`}
            onClick={() => setIsOpen(false)}
            className="mt-6 border-2 border-[#1e3a5f] text-[#1e3a5f] px-[40px] py-[16px] text-[16px] uppercase tracking-[0.15em] font-bold hover:bg-[#1e3a5f] hover:text-white transition-all rounded-[2px]"
          >
            Book Now
          </Link>
        </div>

      </div>
    </nav>
  );
}
