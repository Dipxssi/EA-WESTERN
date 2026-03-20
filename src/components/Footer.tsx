"use client";

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1F2E] text-white pt-[100px] pb-12 font-jost border-t border-[var(--color-gold)]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 no-underline group mb-8">
              <div className="w-[35px] h-[35px] border border-[var(--color-gold)] flex items-center justify-center text-[14px] text-[var(--color-gold)] font-medium transition-all group-hover:bg-[var(--color-gold)] group-hover:text-[#0B1F2E]">
                EW
              </div>
              <span className="text-[12px] uppercase tracking-[0.4em] text-white font-medium">
                EA Western
              </span>
            </Link>
            <p className="text-[15px] text-white/50 font-light leading-[1.8] max-w-[280px]">
              The uncompromising standard in luxury safe-travel, specialized corporate transport, and comprehensive risk mitigation across East Africa.
            </p>
          </div>
          
          <div>
            <h4 className="uppercase-label text-[var(--color-gold)] mb-8 pb-4 border-b border-[var(--color-gold)]/10 inline-block">Portfolios</h4>
            <ul className="space-y-4 text-[13px] font-medium tracking-[0.1em] uppercase">
              <li><Link href="/en/safaris" className="text-white/60 hover:text-[var(--color-gold)] transition-colors flex items-center group">Safaris & Expeditions <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/en/vehicles" className="text-white/60 hover:text-[var(--color-gold)] transition-colors flex items-center group">Automotive & Leasing <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="/en/insurance" className="text-white/60 hover:text-[var(--color-gold)] transition-colors flex items-center group">Insurance Solutions <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase-label text-[var(--color-gold)] mb-8 pb-4 border-b border-[var(--color-gold)]/10 inline-block">Corporate</h4>
            <ul className="space-y-4 text-[13px] font-medium tracking-[0.1em] uppercase">
              <li><Link href="/en/about" className="text-white/60 hover:text-[var(--color-gold)] transition-colors">About Us</Link></li>
              <li><Link href="/en/blog" className="text-white/60 hover:text-[var(--color-gold)] transition-colors">Resources & Insights</Link></li>
              <li><Link href="/en/contact" className="text-white/60 hover:text-[var(--color-gold)] transition-colors">Global Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase-label text-[var(--color-gold)] mb-8 pb-4 border-b border-[var(--color-gold)]/10 inline-block">Global Office</h4>
            <div className="space-y-4 text-[15px] text-white/60 font-light">
              <div>+254 700 123 456</div>
              <div>corporate@eawestern.com</div>
              <div className="leading-relaxed">Westlands Innovation Hub<br/>Nairobi, Kenya</div>
            </div>
            <div className="mt-8 flex gap-4">
               {['IN', 'TW', 'IG'].map(social => (
                 <a key={social} href="#" className="w-[36px] h-[36px] border border-white/10 flex items-center justify-center text-[11px] font-medium text-white/40 hover:bg-[var(--color-gold)] hover:text-[#0B1F2E] hover:border-[var(--color-gold)] transition-all">{social}</a>
               ))}
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] tracking-[0.2em] text-white/30 font-medium uppercase">
            © {new Date().getFullYear()} EA WESTERN GROUP — ALL RIGHTS RESERVED
          </div>
          
          <div className="text-[10px] tracking-[0.1em] text-white/30 font-medium uppercase">
            ENGINEERED BY{' '}
            <a href="https://diginowsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] hover:underline transition-colors font-semibold">
              DIGINOW SOLUTIONS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
