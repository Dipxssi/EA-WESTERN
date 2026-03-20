"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

type SafariNavigationProps = {
  locale?: string;
};

export function SafariNavigation({ locale = 'en' }: SafariNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === `/${locale}` || path === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname?.startsWith(path);
  };

  const navLinkClass = (path: string) => `
    relative text-[10px] sm:text-[11px] tracking-[0.25em] font-medium uppercase transition-colors duration-500 py-2
    ${isActive(path) ? 'text-[#C8A96E]' : 'text-white/70 hover:text-[#C8A96E]'}
    before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-[#C8A96E] before:transition-transform before:duration-500 hover:before:origin-left hover:before:scale-x-100
  `;

  const NavLink = ({ path, label }: { path: string; label: string }) => (
    <Link href={path} className={navLinkClass(path)} onClick={() => setIsMenuOpen(false)}>
      {label}
    </Link>
  );

  const MobileNavLink = ({ path, label }: { path: string; label: string }) => (
    <Link
      href={path}
      className={`flex items-center gap-4 py-4 px-6 tracking-[0.15em] transition-colors duration-300 text-sm uppercase font-medium ${
        isActive(path)
          ? 'text-[#C8A96E] bg-white/5'
          : 'text-white/60 hover:text-white hover:bg-white/5'
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      <span>{label}</span>
    </Link>
  );

  return (
    <nav className="fixed w-full top-0 z-50 transition-colors duration-500 border-b border-[#C8A96E]/15 bg-[#08172E]/40 backdrop-blur-xl">
      <div className="mx-auto px-6 max-w-7xl md:px-10">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center gap-4 no-underline group">
              <div className="w-[35px] h-[35px] border border-[#C8A96E] flex items-center justify-center text-[14px] text-[#C8A96E] font-medium transition-all group-hover:bg-[#C8A96E] group-hover:text-[#08172E]">
                EW
              </div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-white font-medium">EA Western</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink path={`/${locale}`} label="MAIN HOME" />
            <NavLink path={`/${locale}/safaris`} label="HOME" />
            <NavLink path={`/${locale}/safaris/destinations`} label="DESTINATIONS" />
            <NavLink path={`/${locale}/safaris/experiences`} label="EXPERIENCES" />
            <NavLink path={`/${locale}/safaris/contact`} label="CONTACT" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button onClick={toggleMenu} className="text-[#C8A96E]">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[76px] bg-[#08172E] border-t border-[#C8A96E]/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isMenuOpen ? 'h-[calc(100vh-76px)] opacity-100 visible' : 'h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="flex flex-col h-full pt-6 pb-20 overflow-y-auto">
            <MobileNavLink path={`/${locale}`} label="MAIN HOME" />
            <MobileNavLink path={`/${locale}/safaris`} label="HOME" />
            <MobileNavLink path={`/${locale}/safaris/destinations`} label="DESTINATIONS" />
            <MobileNavLink path={`/${locale}/safaris/experiences`} label="EXPERIENCES" />
            <MobileNavLink path={`/${locale}/safaris/contact`} label="CONTACT" />
            <div className="mt-auto px-6 pt-10">
              <Link
                href={`/${locale}/contact`}
                className="w-full flex items-center justify-center py-4 border border-[#C8A96E] text-[#C8A96E] font-medium tracking-[0.2em] text-xs uppercase transition-all hover:bg-[#C8A96E] hover:text-[#08172E]"
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
