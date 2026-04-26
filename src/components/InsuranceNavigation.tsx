"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, PhoneCall } from 'lucide-react';

export function InsuranceNavigation({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Main Home', href: `/${locale}` },
    { name: 'Insurance Home', href: `/${locale}/insurance` },
    { name: 'Solutions', href: `/${locale}/insurance/solutions` },
    { name: 'Claims', href: `/${locale}/insurance/claims` },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 font-sans ${
        scrolled ? 'bg-[var(--color-navy)] py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center gap-3 min-w-0">
        {/* Logo */}
        <Link href={`/${locale}/insurance`} className="flex items-center gap-3 group z-50 min-w-0">
          <div className="w-10 h-10 rounded-[12px] bg-[var(--color-blue)] flex items-center justify-center group-hover:scale-110 transition-transform">
             <ShieldCheck className="text-white" size={24} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-playfair text-[18px] sm:text-[22px] text-white font-bold leading-none tracking-tight">
              eawestern
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase text-[var(--color-slate)] tracking-[0.25em] font-bold opacity-70 mt-1 truncate">
              Insurance Solutions
            </span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-[12px] uppercase tracking-[0.15em] font-bold transition-all ${
                  isActive ? 'text-[var(--color-blue)]' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link
            href={`/${locale}/insurance/contact`}
            className="flex items-center gap-2 bg-[var(--color-blue)] text-white px-[24px] py-[12px] text-[11px] uppercase tracking-[0.15em] font-bold hover:bg-white hover:text-[var(--color-blue)] transition-all rounded-[4px] shadow-lg shadow-black/10"
          >
            <PhoneCall size={14} /> Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        <div className={`md:hidden fixed inset-0 bg-[var(--color-navy)] z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
           <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-blue)]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           
          {navLinks.map((link) => (
             <Link 
               key={link.name}
               href={link.href}
               onClick={() => setMobileMenuOpen(false)}
               className="text-[24px] uppercase tracking-[0.2em] font-bold text-white hover:text-[var(--color-blue)] transition-colors font-playfair"
             >
               {link.name}
             </Link>
          ))}
          <Link
            href={`/${locale}/insurance/contact`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 flex items-center gap-3 bg-[var(--color-blue)] text-white px-[40px] py-[18px] text-[14px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-[var(--color-blue)] transition-all rounded-[4px]"
          >
            <PhoneCall size={18} /> Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
