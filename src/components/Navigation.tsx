"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type NavigationProps = {
  locale?: string;
};

export function Navigation({ locale = 'en' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === `/${locale}` || path === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname?.startsWith(path);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center">
              <img src="/logo/ea-western-logo.png" alt="EA Western" className="h-8 sm:h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 lg:space-x-16">
            <Link
              href={`/${locale}`}
              className={`font-light tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                isActive(`/${locale}`)
                  ? 'text-blue-900 font-medium'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              HOME
              <span className={`absolute bottom-0 left-0 h-px bg-blue-900 transition-all duration-300 ${
                isActive(`/${locale}`) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href={`/${locale}/about`}
              className={`font-light tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                isActive(`/${locale}/about`)
                  ? 'text-blue-900 font-medium'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              ABOUT US
              <span className={`absolute bottom-0 left-0 h-px bg-blue-900 transition-all duration-300 ${
                isActive(`/${locale}/about`) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href={`/${locale}/safaris`}
              className={`font-light tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                isActive(`/${locale}/safaris`)
                  ? 'text-blue-900 font-medium'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              TOURS AND SAFARIS
              <span className={`absolute bottom-0 left-0 h-px bg-blue-900 transition-all duration-300 ${
                isActive(`/${locale}/safaris`) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href={`/${locale}/insurance`}
              className={`font-light tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                isActive(`/${locale}/insurance`)
                  ? 'text-blue-900 font-medium'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              INSURANCE SOLUTIONS
              <span className={`absolute bottom-0 left-0 h-px bg-blue-900 transition-all duration-300 ${
                isActive(`/${locale}/insurance`) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link
              href={`/${locale}/vehicles`}
              className={`font-light tracking-wide transition-all duration-300 relative group text-sm uppercase ${
                isActive(`/${locale}/vehicles`)
                  ? 'text-blue-900 font-medium'
                  : 'text-gray-800 hover:text-black'
              }`}
            >
              CAR HIRE
              <span className={`absolute bottom-0 left-0 h-px bg-blue-900 transition-all duration-300 ${
                isActive(`/${locale}/vehicles`) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button - Hidden on mobile */}
            <Link
              href={`/${locale}/contact`}
              className="hidden md:block bg-blue-900 hover:bg-red-900 text-white px-6 lg:px-8 py-3 font-light tracking-widest text-sm transition-all duration-300 uppercase rounded-full border-2 border-white hover:border-white shadow-lg flex items-center justify-center min-h-[48px]"
            >
              TALK WITH US
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-800 hover:text-black transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
            ? 'max-h-[calc(100vh-80px)] opacity-100 visible overflow-y-auto'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}>
          <div className="py-4 px-4 space-y-2 border-t border-gray-200">
            {/* Mobile Navigation Links */}
            <Link
              href={`/${locale}`}
              className={`flex items-center gap-3 py-3 px-2 font-light tracking-wide transition-colors duration-300 text-sm sm:text-base uppercase ${
                isActive(`/${locale}`)
                  ? 'text-blue-900 font-medium bg-blue-50 pl-4 border-l-4 border-blue-900'
                  : 'text-gray-800 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>
              <span>HOME</span>
            </Link>
            <Link
              href={`/${locale}/about`}
              className={`flex items-center gap-3 py-3 px-2 font-light tracking-wide transition-colors duration-300 text-sm sm:text-base uppercase ${
                isActive(`/${locale}/about`)
                  ? 'text-blue-900 font-medium bg-blue-50 pl-4 border-l-4 border-blue-900'
                  : 'text-gray-800 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="16" y2="12" /><line x1="12" x2="12.01" y1="8" y2="8" /></svg>
              <span>ABOUT US</span>
            </Link>
            <Link
              href={`/${locale}/safaris`}
              className={`flex items-center gap-3 py-3 px-2 font-light tracking-wide transition-colors duration-300 text-sm sm:text-base uppercase ${
                isActive(`/${locale}/safaris`)
                  ? 'text-blue-900 font-medium bg-blue-50 pl-4 border-l-4 border-blue-900'
                  : 'text-gray-800 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle cx="20" cy="16" r="2" /><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" /></svg>
              <span>TOURS AND SAFARIS</span>
            </Link>
            <Link
              href={`/${locale}/insurance`}
              className={`flex items-center gap-3 py-3 px-2 font-light tracking-wide transition-colors duration-300 text-sm sm:text-base uppercase ${
                isActive(`/${locale}/insurance`)
                  ? 'text-blue-900 font-medium bg-blue-50 pl-4 border-l-4 border-blue-900'
                  : 'text-gray-800 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
              <span>INSURANCE SOLUTIONS</span>
            </Link>
            <Link
              href={`/${locale}/vehicles`}
              className={`flex items-center gap-3 py-3 px-2 font-light tracking-wide transition-colors duration-300 text-sm sm:text-base uppercase ${
                isActive(`/${locale}/vehicles`)
                  ? 'text-blue-900 font-medium bg-blue-50 pl-4 border-l-4 border-blue-900'
                  : 'text-gray-800 hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
              <span>CAR HIRE</span>
            </Link>

            {/* Mobile CTA Button */}
            <div className="pt-6 pb-4">
              <Link
                href={`/${locale}/contact`}
                className="w-full bg-blue-900 hover:bg-red-900 text-white py-3.5 px-6 font-light tracking-widest text-xs sm:text-sm transition-all duration-300 uppercase rounded-full border-2 border-white hover:border-white shadow-lg flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                TALK WITH US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
