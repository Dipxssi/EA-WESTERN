"use client";

import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <div className="flex items-center">             
            <img src="/logo/ea-western-logo.png" alt="EA Western" className="h-8 sm:h-10 w-auto" />                        
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 lg:space-x-16">
            <a href="#tours" className="text-gray-800 hover:text-black font-light tracking-wide transition-all duration-300 relative group text-sm uppercase">
              SAFARIS
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#insurance" className="text-gray-800 hover:text-black font-light tracking-wide transition-all duration-300 relative group text-sm uppercase">
              INSURANCE
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#cars" className="text-gray-800 hover:text-black font-light tracking-wide transition-all duration-300 relative group text-sm uppercase">
              VEHICLES
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector - Hidden on small mobile */}
            <select className="hidden sm:block bg-transparent border border-gray-300 rounded-none px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-black">
              <option value="en" className="bg-white">EN</option>
              <option value="sw" className="bg-white">SW</option>
            </select>
            
            {/* Desktop CTA Button - Hidden on mobile */}
            <button className="hidden md:block bg-blue-500 hover:bg-red-500 text-white px-6 lg:px-8 py-3 font-light tracking-widest text-sm transition-all duration-300 uppercase">
              BOOK NOW
            </button>
            
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Navigation Links */}
            <a 
              href="#tours" 
              className="block py-3 text-gray-800 hover:text-black font-light tracking-wide transition-colors duration-300 text-base uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paw-print-icon lucide-paw-print"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg> SAFARIS
            </a>
            <a 
              href="#insurance" 
              className="block py-3 text-gray-800 hover:text-black font-light tracking-wide transition-colors duration-300 text-base uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg> INSURANCE
            </a>
            <a 
              href="#cars" 
              className="block py-3 text-gray-800 hover:text-black font-light tracking-wide transition-colors duration-300 text-base uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg> VEHICLES
            </a>
            
            {/* Mobile Language Selector */}
            <div className="pt-2">
              <select className="w-full bg-transparent border border-gray-300 rounded-none px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-black">
                <option value="en" className="bg-white">English</option>
                <option value="sw" className="bg-white">Kiswahili</option>
              </select>
            </div>
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button 
                className="w-full bg-blue-500 hover:bg-red-700 text-white py-4 font-light tracking-widest text-sm transition-all duration-300 uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                TALK WITH US
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
