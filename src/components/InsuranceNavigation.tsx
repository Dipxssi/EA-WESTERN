"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, PhoneCall, Mail, UserCircle, ChevronDown, HeartPulse, Car, Home, Briefcase, Users, ShieldAlert } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function InsuranceNavigation({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: `/${locale}/insurance` },
    { 
      name: 'Solutions', 
      href: `/${locale}/insurance/solutions`,
      hasDropdown: true 
    },
    { name: 'Claims', href: `/${locale}/insurance/claims` },
  ];

  const personalSolutions = [
    { name: 'Health & Wellness', icon: HeartPulse, href: `/${locale}/insurance/solutions/health-wellness` },
    { name: 'Life & Legacy', icon: ShieldCheck, href: `/${locale}/insurance/solutions/life-legacy` },
    { name: 'Motor & Travel', icon: Car, href: `/${locale}/insurance/solutions/motor-travel` }
  ];

  const businessSolutions = [
    { name: 'Corporate Health', icon: Users, href: `/${locale}/insurance/solutions/corporate-health` },
    { name: 'Professional Liability', icon: ShieldAlert, href: `/${locale}/insurance/solutions/professional-liability` },
    { name: 'Business Assets', icon: Home, href: `/${locale}/insurance/solutions/business-assets` }
  ];

  return (
    <header className="fixed w-full z-50 font-sans transition-all duration-300 shadow-sm">
      {/* Top Bar (Contact & Portals) - Hides on scroll */}
      <div className={`bg-[var(--color-navy)] text-white/90 text-[11px] font-medium tracking-wide transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden py-0 opacity-0' : 'h-10 py-2.5 opacity-100'}`}>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center h-full">
          <div className="flex items-center gap-6">
            <a href="mailto:info@eawestern.com" className="flex items-center gap-2 hover:text-[var(--color-blue)] transition-colors">
              <Mail size={14} className="text-[var(--color-blue)]" /> info@eawestern.com
            </a>
            <a href="tel:+254700000000" className="hidden sm:flex items-center gap-2 hover:text-[var(--color-blue)] transition-colors">
              <PhoneCall size={14} className="text-[var(--color-blue)]" /> +254 700 000 000
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="hover:text-[var(--color-blue)] transition-colors">
              Main eawestern Home
            </Link>
            <Link href={`/${locale}/insurance/portals`} className="flex items-center gap-1.5 hover:text-[var(--color-blue)] transition-colors">
              <UserCircle size={14} /> Self Service Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 h-20 flex justify-between items-center gap-3">
          {/* Logo */}
          <Link href={`/${locale}/insurance`} className="flex items-center gap-3 group z-50 min-w-0">
            <div className="w-12 h-12 rounded-[12px] bg-[var(--color-blue)] flex items-center justify-center group-hover:scale-105 transition-transform shadow-md shadow-[var(--color-blue)]/20">
               <ShieldCheck className="text-white" size={28} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-playfair text-[20px] sm:text-[24px] text-[var(--color-navy)] font-bold leading-none tracking-tight">
                eawestern
              </span>
              <span className="text-[9px] uppercase text-[var(--color-blue)] tracking-[0.25em] font-bold mt-1 truncate">
                Insurance Solutions
              </span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.hasDropdown && pathname.includes('/insurance/solutions'));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <Link 
                      href={link.href}
                      className={`flex items-center gap-1 text-[13px] uppercase tracking-[0.1em] font-bold transition-colors relative group py-8 ${
                        isActive || solutionsOpen ? 'text-[var(--color-blue)]' : 'text-[var(--color-navy)] hover:text-[var(--color-blue)]'
                      }`}
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute bottom-6 left-0 w-full h-0.5 bg-[var(--color-blue)] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </Link>

                    {/* Desktop Dropdown Mega Menu */}
                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden flex z-50 p-6 gap-8"
                        >
                          <div className="flex-1">
                            <h4 className="text-[var(--color-blue)] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                              <HeartPulse size={14} /> Personal Insurance
                            </h4>
                            <div className="space-y-2">
                              {personalSolutions.map((item) => (
                                <Link 
                                  key={item.name} 
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                >
                                  <div className="w-10 h-10 rounded-full bg-[var(--color-slate)] flex items-center justify-center text-[var(--color-navy)] group-hover/item:bg-[var(--color-blue)] group-hover/item:text-white transition-colors">
                                    <item.icon size={18} />
                                  </div>
                                  <span className="font-bold text-[14px] text-[var(--color-navy)]">{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          <div className="w-px bg-slate-100"></div>

                          <div className="flex-1">
                            <h4 className="text-[var(--color-blue)] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                              <Briefcase size={14} /> Business Solutions
                            </h4>
                            <div className="space-y-2">
                              {businessSolutions.map((item) => (
                                <Link 
                                  key={item.name} 
                                  href={item.href}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                >
                                  <div className="w-10 h-10 rounded-full bg-[var(--color-slate)] flex items-center justify-center text-[var(--color-navy)] group-hover/item:bg-[var(--color-blue)] group-hover/item:text-white transition-colors">
                                    <item.icon size={18} />
                                  </div>
                                  <span className="font-bold text-[14px] text-[var(--color-navy)]">{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] uppercase tracking-[0.1em] font-bold transition-colors relative group py-8 ${
                    isActive ? 'text-[var(--color-blue)]' : 'text-[var(--color-navy)] hover:text-[var(--color-blue)]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-6 left-0 w-full h-0.5 bg-[var(--color-blue)] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              );
            })}
            
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <div className="hidden lg:flex flex-col items-end">
                 <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Call our experts</span>
                 <a href="tel:+254700000000" className="text-[var(--color-navy)] font-bold hover:text-[var(--color-blue)] transition-colors">+254 700 000 000</a>
              </div>
              <Link
                href={`/${locale}/insurance/contact`}
                className="flex items-center gap-2 bg-[var(--color-blue)] text-white px-[28px] py-[14px] text-[12px] uppercase tracking-[0.15em] font-bold hover:bg-[var(--color-navy)] transition-colors rounded-[6px] shadow-lg shadow-[var(--color-blue)]/20"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[var(--color-navy)] z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`md:hidden fixed inset-0 top-[120px] bg-white z-40 flex flex-col pt-10 px-6 space-y-6 transition-all duration-300 ease-in-out border-t border-slate-100 ${mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-100 pb-4">
              <Link 
                href={link.href}
                onClick={() => {
                  if (link.hasDropdown) {
                    setSolutionsOpen(!solutionsOpen);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-[20px] font-bold text-[var(--color-navy)] flex justify-between items-center"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={20} className={`transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                )}
              </Link>
              
              {/* Mobile Dropdown Submenu */}
              {link.hasDropdown && solutionsOpen && (
                <div className="mt-4 space-y-6 pl-2">
                  <div>
                    <h4 className="text-[var(--color-blue)] font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Personal Insurance</h4>
                    <div className="space-y-3">
                      {personalSolutions.map(item => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 text-[15px] font-medium text-slate-600"
                        >
                          <item.icon size={16} className="text-[var(--color-blue)]" /> {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[var(--color-blue)] font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Business Solutions</h4>
                    <div className="space-y-3">
                      {businessSolutions.map(item => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 text-[15px] font-medium text-slate-600"
                        >
                          <item.icon size={16} className="text-[var(--color-blue)]" /> {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
        ))}
        <div className="pt-6">
          <div className="mb-6">
             <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Call our experts</span>
             <a href="tel:+254700000000" className="text-[24px] font-bold text-[var(--color-navy)]">+254 700 000 000</a>
          </div>
          <Link
            href={`/${locale}/insurance/contact`}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 bg-[var(--color-blue)] text-white w-full py-[18px] text-[14px] uppercase tracking-[0.2em] font-bold rounded-[6px]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
