"use client";

import Link from 'next/link';
import { Car, Mail, Phone, MapPin, SearchCheck, CheckCircle2 } from 'lucide-react';

export function VehiclesFooter() {
  return (
    <footer className="bg-[#050505] text-white pt-[100px] pb-8 font-sans border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[80px]">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href={`/`} className="flex items-center gap-3 mb-6 inline-block">
              <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-black shadow-lg overflow-hidden">
                <Car size={20} className="relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] md:text-[20px] font-bold text-white tracking-widest uppercase leading-none">
                  EA Western
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mt-1">Car Hire & Leasing</span>
              </div>
            </Link>
            <p className="text-[14px] text-white/50 leading-[1.8] mb-8 pr-4">
              Premium automotive solutions. Whether for luxury events, challenging corporate site visits, or independent self-drive adventures.
            </p>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.15em] font-bold text-white mb-6">Operations Desk</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:1-800-CAR-HIRE" className="flex items-center gap-3 text-[14px] text-white/60 hover:text-white transition-colors group">
                  <Phone size={16} className="text-white/40 group-hover:text-white" /> 1-800-CAR-HIRE
                  <span className="ml-2 text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-[2px] font-mono">24/7 Rescue</span>
                </a>
              </li>
              <li>
                <a href="mailto:booking@eawestern.com" className="flex items-center gap-3 text-[14px] text-white/60 hover:text-white transition-colors group">
                  <Mail size={16} className="text-white/40 group-hover:text-white" /> booking@eawestern.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[14px] text-white/60 group">
                  <MapPin size={16} className="text-white/40 mt-1" />
                  <span className="leading-[1.6]">Automotive Hub, Westlands<br/>Nairobi, Kenya</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h4 className="text-[13px] uppercase tracking-[0.15em] font-bold text-white mb-6">Fleet Access</h4>
             <ul className="space-y-3">
               {['Luxury Sedans', 'Off-Road 4x4', 'Corporate Vans', 'Self-Drive Rules', 'Chauffeur Protocol'].map((link) => (
                 <li key={link}>
                   <Link href="#" className="text-[14px] text-white/60 hover:text-white hover:translate-x-1 inline-block transition-transform">
                     {link}
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Compliance */}
          <div>
             <h4 className="text-[13px] uppercase tracking-[0.15em] font-bold text-white mb-6">Trust & Compliance</h4>
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 border border-white/10 p-3 rounded-[4px] bg-white/5">
                 <SearchCheck size={20} className="text-white" />
                 <div>
                   <div className="text-[11px] uppercase tracking-[0.1em] text-white/80 font-bold">NTSA Inspected</div>
                   <div className="text-[12px] text-white/40">100% Road Compliant</div>
                 </div>
               </div>
               <div className="flex items-center gap-3 border border-white/10 p-3 rounded-[4px] bg-white/5">
                 <CheckCircle2 size={20} className="text-white" />
                 <div>
                   <div className="text-[11px] uppercase tracking-[0.1em] text-white/80 font-bold">Full Insurance Standard</div>
                   <div className="text-[12px] text-white/40">Zero Hidden Liabilities</div>
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} EA Western Automotive. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">Rental Agreements</Link>
            <Link href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">Privacy Data</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
