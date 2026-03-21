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
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${
        scrolled ? 'bg-[var(--color-navy)] py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${locale}/insurance`} className="flex items-center gap-2 group z-50">
          <ShieldCheck className="text-[var(--color-blue)] group-hover:text-white transition-colors" size={28} />
          <div className="flex flex-col">
            <span className="font-playfair text-[18px] text-white font-bold leading-none tracking-wide">
              EA Western
            </span>
            <span className="text-[10px] uppercase text-[var(--color-slate)] tracking-[0.2em] font-medium opacity-80 mt-1">
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
                className={`text-[13px] uppercase tracking-[0.1em] font-medium transition-colors ${
                  isActive ? 'text-[var(--color-blue)]' : 'text-white hover:text-[var(--color-blue)]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link
            href={`/${locale}/insurance/contact`}
            className="flex items-center gap-2 bg-[var(--color-blue)] text-white px-[24px] py-[12px] text-[12px] uppercase tracking-[0.1em] font-semibold hover:bg-white hover:text-[var(--color-blue)] transition-colors rounded-[2px]"
          >
            <PhoneCall size={14} /> Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        <div className={`md:hidden fixed inset-0 bg-[var(--color-navy)] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
             <Link 
               key={link.name}
               href={link.href}
               onClick={() => setMobileMenuOpen(false)}
               className="text-[20px] uppercase tracking-[0.1em] font-medium text-white hover:text-[var(--color-blue)] transition-colors"
             >
               {link.name}
             </Link>
          ))}
          <Link
            href={`/${locale}/insurance/contact`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center gap-2 bg-[var(--color-blue)] text-white px-[32px] py-[16px] text-[14px] uppercase tracking-[0.1em] font-semibold hover:bg-white hover:text-[var(--color-blue)] transition-colors rounded-[2px]"
          >
            <PhoneCall size={16} /> Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
