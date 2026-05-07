"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

type SafariNavigationProps = {
  locale?: string;
};

export function SafariNavigation({ locale = "en" }: SafariNavigationProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navClass = (href: string, exactOnly?: boolean) => {
    if (!pathname) return "sp-nav-link";
    const isExact = pathname === href || pathname === `${href}/`;
    const isPrefix = pathname.startsWith(`${href}/`);
    const active = exactOnly ? isExact : isExact || isPrefix;
    return active ? "sp-nav-link sp-nav-active" : "sp-nav-link";
  };

  const mainHref = `/${locale}`;
  const safariHome = `/${locale}/safaris`;

  return (
    <header className="sp-nav" style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #ede9e1" }}>
      <style>{`
        .sp-nav { position: fixed; top: 0; z-index: 50; width: 100%; }
        .sp-nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; justify-content: space-between; min-height: 68px; }
        .sp-left { display: flex; align-items: center; gap: 16px; }
        .sp-main-home { display: none; align-items: center; gap: 6px; text-decoration: none; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #1a2e45; transition: color 0.3s; }
        .sp-main-home:hover { color: #c9a96e; }
        @media (min-width: 768px) { .sp-main-home { display: inline-flex; } }
        .sp-logo { text-decoration: none; display: flex; align-items: center; }
        .sp-logo-box { width: 38px; height: 38px; border: 1px solid #c9a96e; color: #1a2e45; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; letter-spacing: 0.02em; }
        .sp-nav-links { display: none; gap: 1.75rem; align-items: center; }
        @media (min-width: 768px) { .sp-nav-links { display: flex; } }
        .sp-nav-link { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #1a2e45; text-decoration: none; transition: color 0.3s; }
        .sp-nav-link:hover { color: #c9a96e; }
        .sp-nav-active { color: #c9a96e; }
        .sp-nav-toggle { display: flex; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; }
        @media (min-width: 768px) { .sp-nav-toggle { display: none; } }
        .sp-nav-toggle span { display: block; width: 22px; height: 2px; background: #1a2e45; }
        .sp-mobile-panel { display: none; flex-direction: column; padding: 0 20px 20px; gap: 0; background: #ffffff; border-top: 1px solid #ede9e1; }
        .sp-mobile-panel a { color: #1a2e45; text-decoration: none; padding: 14px 0; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid #ede9e1; }
        .sp-mobile-panel-open { display: flex; }
        @media (min-width: 768px) { .sp-mobile-panel, .sp-mobile-panel-open { display: none !important; } }
      `}</style>
      <div className="sp-nav-inner">
        <div className="sp-left">
          <Link href={mainHref} className="sp-main-home" aria-label="Main home">
            <ArrowLeft size={14} aria-hidden />
            <span>Main Home</span>
          </Link>
          <Link href={mainHref} className="sp-logo" aria-label="eawestern home">
            <span className="sp-logo-box">EW</span>
          </Link>
        </div>
        <nav className="sp-nav-links" aria-label="Safari microsite">
          <Link className={pathname === safariHome || pathname === `${safariHome}/` ? "sp-nav-link sp-nav-active" : "sp-nav-link"} href={safariHome}>
            Home
          </Link>
          <Link className={navClass(`/${locale}/safaris/destinations`)} href={`/${locale}/safaris/destinations`}>
            Destinations
          </Link>
          <Link className={navClass(`/${locale}/safaris/philosophy`)} href={`/${locale}/safaris/philosophy`}>
            Philosophy
          </Link>
          <Link className={navClass(`/${locale}/safaris/packages`)} href={`/${locale}/safaris/packages`}>
            Packages
          </Link>
          <Link className={navClass(`/${locale}/safaris/contact`)} href={`/${locale}/safaris/contact`}>
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="sp-nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`sp-mobile-panel ${mobileOpen ? "sp-mobile-panel-open" : ""}`}>
        <Link href={mainHref} onClick={() => setMobileOpen(false)} className="!inline-flex !items-center !gap-2">
          <ArrowLeft size={14} aria-hidden />
          Main Home
        </Link>
        <Link href={safariHome} onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href={`/${locale}/safaris/destinations`} onClick={() => setMobileOpen(false)}>
          Destinations
        </Link>
        <Link href={`/${locale}/safaris/philosophy`} onClick={() => setMobileOpen(false)}>
          Philosophy
        </Link>
        <Link href={`/${locale}/safaris/packages`} onClick={() => setMobileOpen(false)}>
          Packages
        </Link>
        <Link href={`/${locale}/safaris/contact`} onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
}
