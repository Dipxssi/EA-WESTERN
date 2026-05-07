"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteContact';

export function Footer() {
  return (
    <footer className="border-t-[3px] border-[#c9a96e] bg-[#f7f5f0] pt-[100px] font-jost text-[#4a5568] shadow-[0_-4px_24px_rgba(30,58,95,0.06)]">
      <div className="mx-auto max-w-[1200px] px-6 pb-16 md:px-10">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#ede9e1]">
          <div className="lg:col-span-1 lg:pr-10">
            <Link href="/" className="group mb-8 flex items-center gap-4 no-underline">
              <div className="flex h-[35px] w-[35px] items-center justify-center border border-[#c9a96e] text-[14px] font-medium text-[#1e3a5f] transition-colors duration-200">
                EW
              </div>
              <span className="text-[12px] font-medium tracking-[0.15em] text-[#1e3a5f]">
                eawestern
              </span>
            </Link>
            <p className="max-w-[280px] text-[14px] font-light leading-[1.8] text-[#4a5568]">
              A trusted partner in safaris, mobility, and insurance solutions across East Africa.
            </p>
          </div>

          <div className="lg:px-10">
            <h4 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1a2e45]">
              Portfolios
            </h4>
            <ul className="space-y-4 text-[13px] font-medium uppercase tracking-[0.1em]">
              <li>
                <Link
                  href="/en/safaris"
                  className="flex items-center text-[#4a5568] transition-colors duration-200 hover:text-[#c9a96e] group"
                >
                  Safaris{' '}
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 -translate-x-2 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/en/vehicles"
                  className="flex items-center text-[#4a5568] transition-colors duration-200 hover:text-[#c9a96e] group"
                >
                  Car Hire{' '}
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 -translate-x-2 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/en/insurance"
                  className="flex items-center text-[#4a5568] transition-colors duration-200 hover:text-[#c9a96e] group"
                >
                  Insurance{' '}
                  <ArrowUpRight
                    size={14}
                    className="ml-1 opacity-0 -translate-x-2 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:px-10">
            <h4 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1a2e45]">
              Corporate
            </h4>
            <ul className="space-y-4 text-[13px] font-medium uppercase tracking-[0.1em]">
              <li>
                <Link href="/en/about" className="text-[#4a5568] transition-colors duration-200 hover:text-[#c9a96e]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/en/blog" className="text-[#4a5568] transition-colors duration-200 hover:text-[#c9a96e]">
                  Resources & Insights
                </Link>
              </li>
              <li>
                <Link href="/en/contact" className="text-[#4a5568] transition-colors duration-200 hover:text-[#c9a96e]">
                  Global Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:pl-10">
            <h4 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1a2e45]">
              Global Office
            </h4>
            <div className="space-y-4 text-[15px] font-light">
              <a
                href={`tel:${SITE_CONTACT.phoneHref}`}
                className="block font-medium text-[#c9a96e] transition-colors duration-200 hover:text-[#a8823d]"
              >
                {SITE_CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONTACT.email}`}
                className="block text-[#4a5568] transition-colors duration-200 hover:text-[#2c5282]"
              >
                {SITE_CONTACT.email}
              </a>
              <div className="leading-relaxed text-[#4a5568]">
                {SITE_CONTACT.addressLine1}
                <br />
                {SITE_CONTACT.addressLine2}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ede9e1] bg-[#ede9e1] py-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b8299] md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} eawestern group — all rights reserved</div>
          <div className="tracking-[0.1em]">
            ENGINEERED BY{' '}
            <a
              href="https://diginowsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2c5282] transition-colors duration-200 hover:text-[#c9a96e] hover:underline"
            >
              DIGINOW SOLUTIONS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
