"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

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
    { name: 'Main Home', href: `/${locale}` },
    { name: 'Car Hire Home', href: `/${locale}/vehicles` },
    { name: 'Fleet', href: `/${locale}/vehicles/fleet` },
    { name: 'Services', href: `/${locale}/vehicles/services` },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${
        scrolled ? 'bg-[var(--color-black)] py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center gap-3 min-w-0">
        
        {/* LOGO */}
        <Link href={`/${locale}/vehicles`} className="flex items-center gap-2 sm:gap-3 group z-50 min-w-0">
          <div className="w-9 h-9 sm:w-[40px] sm:h-[40px] rounded-full bg-white flex items-center justify-center text-black shadow-lg overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <Car size={20} className="relative z-10" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[14px] sm:text-[18px] md:text-[20px] font-bold text-white tracking-wide sm:tracking-wider leading-none truncate sm:overflow-visible sm:whitespace-normal">
              eawestern
            </span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-white/60 font-bold mt-0.5 sm:mt-1 truncate">Car Hire & Leasing</span>
          </div>
        </Link>

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
                  ? 'text-[var(--color-red)]'
                  : scrolled
                    ? 'text-white/80 hover:text-white'
                    : 'text-white hover:text-white/90'
              }`}
            >
              {link.name}
            </Link>
            );
          })}
          <Link
            href={`/${locale}/vehicles/contact`}
            className="bg-[var(--color-red)] text-white px-[26px] py-[12px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-white hover:text-black transition-colors rounded-[2px]"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MOBILE NAV OVERLAY */}
        <div 
          className={`fixed inset-0 bg-[var(--color-black)] z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[24px] uppercase tracking-[0.1em] font-bold transition-colors ${
                isActive ? 'text-[var(--color-red)]' : 'text-white hover:text-white/80'
              }`}
            >
              {link.name}
            </Link>
            );
          })}
          <Link
            href={`/${locale}/vehicles/contact`}
            onClick={() => setIsOpen(false)}
            className="mt-6 border-2 border-[var(--color-red)] text-[var(--color-red)] px-[40px] py-[16px] text-[16px] uppercase tracking-[0.15em] font-bold hover:bg-[var(--color-red)] hover:text-white transition-all rounded-[2px]"
          >
            Book Now
          </Link>
        </div>

      </div>
    </nav>
  );
}
