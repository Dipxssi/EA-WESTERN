"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ShieldCheck, ChevronDown, HeartPulse, Car, Home, ShieldAlert, Stethoscope, GraduationCap, Plane, WalletCards, Building2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SITE_CONTACT } from '@/lib/siteContact';

export function InsuranceNavigation({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryHoverMenu, setCategoryHoverMenu] = useState<null | 'personal' | 'corporate' | 'medical'>(null);

  const navLinks = [
    { name: 'Home', href: `/${locale}/insurance` },
    { name: 'Main Home', href: `/${locale}` },
    { name: 'Solutions', href: `/${locale}/insurance/solutions` },
    { name: 'Claims', href: `/${locale}/insurance/claims` },
  ];

  const personalSolutions = [
    { name: 'Health & Wellness', icon: HeartPulse, href: `/${locale}/insurance/solutions/health-wellness` },
    { name: 'Life & Legacy', icon: ShieldCheck, href: `/${locale}/insurance/solutions/life-legacy` },
    { name: 'Motor & Travel', icon: Car, href: `/${locale}/insurance/solutions/motor-travel` }
  ];

  const businessSolutions = [
    { name: 'Corporate Health', icon: Stethoscope, href: `/${locale}/insurance/solutions/corporate-health` },
    { name: 'Professional Liability', icon: ShieldAlert, href: `/${locale}/insurance/solutions/professional-liability` },
    { name: 'Business Assets', icon: Home, href: `/${locale}/insurance/solutions/business-assets` }
  ];

  const medicalSolutions = [
    { name: 'Individual & Family Medical', icon: Stethoscope, href: `/${locale}/insurance/solutions/health-wellness` },
    { name: 'SME Medical Cover', icon: Building2, href: `/${locale}/insurance/solutions/corporate-health` },
    { name: 'Corporate Medical Cover', icon: ShieldCheck, href: `/${locale}/insurance/solutions/corporate-health` },
  ];

  const otherSolutions = [
    { name: 'Education Plans', icon: GraduationCap, href: `/${locale}/insurance/solutions/life-legacy` },
    { name: 'Last Expense Cover', icon: WalletCards, href: `/${locale}/insurance/solutions/life-legacy` },
    { name: 'Travel Add-ons', icon: Plane, href: `/${locale}/insurance/solutions/motor-travel` },
  ];

  return (
    <header className="fixed w-full z-50 font-sans transition-all duration-300 shadow-sm">
      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 h-[72px] flex justify-between items-center gap-3">
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
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`) ||
                (link.href.includes('/insurance/solutions') &&
                  pathname.includes('/insurance/solutions'));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.16em] font-bold transition-colors relative group py-7 ${
                    isActive ? 'text-[var(--color-blue)]' : 'text-[var(--color-navy)] hover:text-[var(--color-blue)]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-6 left-0 w-full h-0.5 bg-[var(--color-blue)] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Link>
              );
            })}
            
            <div className="flex items-center gap-4 pl-5 border-l border-slate-200">
              <div className="hidden lg:flex flex-col items-end">
                 <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Call our experts</span>
                 <a href={`tel:${SITE_CONTACT.phoneHref}`} className="text-[var(--color-navy)] font-bold hover:text-[var(--color-blue)] transition-colors">{SITE_CONTACT.phoneDisplay}</a>
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

      {/* Secondary category navbar (desktop) */}
      <div className="hidden md:block border-b border-[var(--color-navy)]/10 bg-[var(--color-slate)]">
        <div className="mx-auto flex h-[30px] max-w-[1300px] items-center justify-center gap-10 px-4 sm:px-6 md:px-10">
          <div
            className="relative"
            onMouseEnter={() => setCategoryHoverMenu('personal')}
            onMouseLeave={() => setCategoryHoverMenu((v) => (v === 'personal' ? null : v))}
          >
            <Link
              href={`/${locale}/insurance/solutions#personal`}
              className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--color-navy)] transition-colors hover:text-[var(--color-blue)]"
            >
              Personal Solutions <ChevronDown size={12} />
            </Link>
            <AnimatePresence>
              {categoryHoverMenu === 'personal' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-[14px] border border-slate-100 bg-white shadow-xl p-4 z-50"
                >
                  <div className="space-y-2">
                    {personalSolutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 group/item"
                      >
                        <item.icon size={16} className="text-[var(--color-blue)]/90 group-hover/item:text-[var(--color-blue)] transition-colors" />
                        <span className="text-[14px] font-semibold text-[var(--color-navy)]">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCategoryHoverMenu('corporate')}
            onMouseLeave={() => setCategoryHoverMenu((v) => (v === 'corporate' ? null : v))}
          >
            <Link
              href={`/${locale}/insurance/solutions#business`}
              className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--color-navy)] transition-colors hover:text-[var(--color-blue)]"
            >
              Corporate Solutions <ChevronDown size={12} />
            </Link>
            <AnimatePresence>
              {categoryHoverMenu === 'corporate' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[340px] rounded-[14px] border border-slate-100 bg-white shadow-xl p-4 z-50"
                >
                  <div className="space-y-2">
                    {businessSolutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 group/item"
                      >
                        <item.icon size={16} className="text-[var(--color-blue)]/90 group-hover/item:text-[var(--color-blue)] transition-colors" />
                        <span className="text-[14px] font-semibold text-[var(--color-navy)]">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setCategoryHoverMenu('medical')}
            onMouseLeave={() => setCategoryHoverMenu((v) => (v === 'medical' ? null : v))}
          >
            <Link
              href={`/${locale}/insurance/solutions`}
              className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--color-navy)] transition-colors hover:text-[var(--color-blue)]"
            >
              Medical Solutions <ChevronDown size={12} />
            </Link>
            <AnimatePresence>
              {categoryHoverMenu === 'medical' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] rounded-[14px] border border-slate-100 bg-white shadow-xl p-4 z-50"
                >
                  <div className="space-y-2">
                    {medicalSolutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 group/item"
                      >
                        <item.icon size={16} className="text-[var(--color-blue)]/90 group-hover/item:text-[var(--color-blue)] transition-colors" />
                        <span className="text-[14px] font-semibold text-[var(--color-navy)]">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col pt-10 px-6 space-y-6 transition-all duration-300 ease-in-out border-t border-slate-100 ${mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        {navLinks.map((link) => (
          <div key={link.name} className="border-b border-slate-100 pb-4">
            <Link
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-[20px] font-bold text-[var(--color-navy)]"
            >
              {link.name}
            </Link>
          </div>
        ))}
        <div className="pt-6">
          <div className="mb-6">
             <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold block mb-1">Call our experts</span>
             <a href={`tel:${SITE_CONTACT.phoneHref}`} className="text-[24px] font-bold text-[var(--color-navy)]">{SITE_CONTACT.phoneDisplay}</a>
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
