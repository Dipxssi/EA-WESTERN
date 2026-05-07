"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { SITE_CONTACT } from "@/lib/siteContact";

type NavigationProps = {
  locale?: string;
};

/** Main navbar height offset (fixed header; no utility bar) */
export const HOME_NAV_TOTAL_OFFSET_CLASS = "pt-[72px]";

export function Navigation({ locale = "en" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    if (path === `/${locale}` || path === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname?.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const active = isActive(path);
    return `border-b pb-2 text-[13px] font-medium uppercase tracking-[0.06em] transition-all duration-300 ease-[ease] ${
      active
        ? "border-[#c9a96e] text-[#1a2e45]"
        : "border-transparent text-[#1a2e45] hover:border-[#c9a96e] hover:text-[#c9a96e]"
    }`;
  };

  const NavLink = ({ path, label }: { path: string; label: string }) => (
    <Link href={path} className={navLinkClass(path)} onClick={() => setIsMenuOpen(false)}>
      {label}
    </Link>
  );

  const MobileNavLink = ({ path, label }: { path: string; label: string }) => (
    <Link
      href={path}
      className={`flex items-center gap-4 px-6 py-4 text-[13px] font-medium uppercase tracking-[0.06em] transition-colors duration-300 ease-[ease] ${
        isActive(path) ? "bg-[#f7f5f0] text-[#c9a96e]" : "text-[#1a2e45] hover:bg-[#f7f5f0]"
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="border-b border-[#ede9e1] bg-[#ffffff] shadow-[0_2px_12px_rgba(30,58,95,0.08)]">
        <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-[60px] py-4">
          <div className="flex min-w-0 items-center">
            <Link href={`/${locale}`} className="group flex min-w-0 items-center gap-2 sm:gap-4">
              <div className="flex h-[35px] w-[35px] items-center justify-center border border-[#c9a96e] text-[14px] font-medium text-[#1e3a5f] transition-all duration-300 ease-[ease]">
                EW
              </div>
              <span className="truncate text-[12px] font-medium tracking-[0.15em] text-[#1e3a5f]">
                eawestern
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-10 lg:flex">
            <NavLink path={`/${locale}`} label="HOME" />
            <NavLink path={`/${locale}/about`} label="ABOUT" />
            <NavLink path={`/${locale}/safaris`} label="TOURS & SAFARIS" />
            <NavLink path={`/${locale}/insurance`} label="INSURANCE SOLUTIONS" />
            <NavLink path={`/${locale}/vehicles`} label="CAR HIRE" />
            <div className="ml-2 flex items-center gap-3 xl:gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-[4px] bg-[#1e3a5f] px-7 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffffff] shadow-sm transition-all duration-300 ease-[ease] hover:bg-[#2c5282]"
              >
                TALK WITH US
              </Link>
              <a
                href={`tel:${SITE_CONTACT.phoneHref}`}
                className="group flex max-w-[220px] shrink-0 items-center gap-2.5 rounded-lg py-1 pl-0.5 pr-1 transition-opacity hover:opacity-90"
                aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dcd8cf] bg-white text-[#c9a96e] shadow-[0_1px_3px_rgba(30,58,95,0.08)] transition-colors group-hover:border-[#c9a96e]/80">
                  <Phone className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="text-[13px] font-semibold tracking-tight text-[#1a2e45]">{SITE_CONTACT.phoneDisplay}</span>
                  <span className="mt-0.5 text-[11px] font-normal leading-snug text-[#6b7280]">Call Our Experts</span>
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-[#1a2e45]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/25 lg:hidden"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-x-0 top-[72px] z-50 max-h-[min(calc(100vh-72px),560px)] overflow-y-auto border-t border-[#ede9e1] bg-white pb-12 pt-2 shadow-xl lg:hidden">
            <MobileNavLink path={`/${locale}`} label="HOME" />
            <MobileNavLink path={`/${locale}/about`} label="ABOUT" />
            <MobileNavLink path={`/${locale}/safaris`} label="TOURS & SAFARIS" />
            <MobileNavLink path={`/${locale}/insurance`} label="INSURANCE SOLUTIONS" />
            <MobileNavLink path={`/${locale}/vehicles`} label="CAR HIRE" />
            <div className="mt-8 flex flex-col gap-3 px-6">
              <Link
                href={`/${locale}/contact`}
                className="flex w-full items-center justify-center rounded-[4px] bg-[#1e3a5f] py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 ease-[ease] hover:bg-[#2c5282]"
                onClick={() => setIsMenuOpen(false)}
              >
                TALK WITH US
              </Link>
              <a
                href={`tel:${SITE_CONTACT.phoneHref}`}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#ede9e1] bg-[#fafaf8] px-4 py-3.5 shadow-[0_1px_3px_rgba(30,58,95,0.06)] transition-colors hover:border-[#dcd8cf]"
                aria-label={`Call ${SITE_CONTACT.phoneDisplay}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dcd8cf] bg-white text-[#c9a96e] shadow-[0_1px_3px_rgba(30,58,95,0.08)]">
                  <Phone className="h-[20px] w-[20px]" strokeWidth={2} aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col text-left leading-tight">
                  <span className="text-[14px] font-semibold tracking-tight text-[#1a2e45]">{SITE_CONTACT.phoneDisplay}</span>
                  <span className="mt-1 text-[12px] font-normal text-[#6b7280]">Call Our Experts</span>
                </span>
              </a>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
