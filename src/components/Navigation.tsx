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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === `/${locale}` || path === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname?.startsWith(path);
  };

  // Luxury nav link class (cool gray text, red active, minimal gold hover)
  const navLinkClass = (path: string) => {
    const active = isActive(path);
    return `
      relative text-[10px] sm:text-[11px] tracking-[0.25em] font-medium uppercase transition-colors duration-500 py-2
      ${active ? 'text-[var(--color-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--color-premium-gold)]'}
      before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:transition-transform before:duration-500
      ${active
        ? 'before:origin-left before:scale-x-100 before:bg-[var(--color-gold)]'
        : 'before:origin-right before:scale-x-0 before:bg-white/10 hover:before:origin-left hover:before:scale-x-100 hover:before:bg-[var(--color-premium-gold)]'
      }
    `;
  };

  const NavLink = ({ path, label }: { path: string, label: string }) => {
    return (
      <Link href={path} className={navLinkClass(path)} onClick={() => setIsMenuOpen(false)}>
        {label}
      </Link>
    );
  };

  const MobileNavLink = ({ path, label }: { path: string, label: string }) => {
    return (
      <Link
        href={path}
        className={`flex items-center gap-4 py-4 px-6 tracking-[0.15em] transition-colors duration-300 text-sm uppercase font-medium ${
          isActive(path)
            ? 'text-[var(--color-gold)] bg-white/5'
            : 'text-[var(--text-secondary)] hover:text-[var(--color-premium-gold)] hover:bg-white/5'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <nav className="fixed w-full top-0 z-50 transition-colors duration-500 border-b border-white/5 bg-[#0B1F2E]/30 backdrop-blur-xl">
      <div className="mx-auto px-6 max-w-7xl md:px-10">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center gap-4 no-underline group">
              <div className="w-[35px] h-[35px] border border-[var(--color-gold)] flex items-center justify-center text-[14px] text-[var(--color-gold)] font-medium transition-all group-hover:bg-[var(--color-gold)] group-hover:text-[#0d1b2e]">
                EW
              </div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-white font-medium">
                EA Western
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink path={`/${locale}`} label="HOME" />
            <NavLink path={`/${locale}/about`} label="ABOUT" />
            <NavLink path={`/${locale}/safaris`} label="SAFARIS" />
            <NavLink path={`/${locale}/insurance`} label="INSURANCE" />
            <NavLink path={`/${locale}/vehicles`} label="CAR HIRE" />
            
            {/* Desktop CTA */}
            <Link
              href={`/${locale}/contact`}
              className="relative overflow-hidden rounded-full bg-[linear-gradient(90deg,var(--color-gold)_0%,var(--color-gold-light)_100%)] text-[#0B1F2E] px-[24px] py-[10px] text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ml-4 hover:-translate-y-[1px] hover:brightness-105 shadow-[0_8px_18px_rgba(0,0,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            >
              <span className="relative z-10">TALK WITH US</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button onClick={toggleMenu} className="text-[var(--color-gold)]">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden fixed inset-x-0 top-[76px] bg-[#0B1F2E] border-t border-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMenuOpen ? 'h-[calc(100vh-76px)] opacity-100 visible' : 'h-0 opacity-0 invisible overflow-hidden'}`}>
          <div className="flex flex-col h-full pt-6 pb-20 overflow-y-auto">
            <MobileNavLink path={`/${locale}`} label="HOME" />
            <MobileNavLink path={`/${locale}/about`} label="ABOUT" />
            <MobileNavLink path={`/${locale}/safaris`} label="SAFARIS" />
            <MobileNavLink path={`/${locale}/insurance`} label="INSURANCE" />
            <MobileNavLink path={`/${locale}/vehicles`} label="CAR HIRE" />
            
            <div className="mt-auto px-6 pt-10">
              <Link
                href={`/${locale}/contact`}
                className="w-full flex items-center justify-center rounded-full py-4 bg-[linear-gradient(90deg,var(--color-gold)_0%,var(--color-gold-light)_100%)] text-[#0B1F2E] font-medium tracking-[0.2em] text-xs uppercase transition-all hover:-translate-y-[1px] hover:brightness-105 shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
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
