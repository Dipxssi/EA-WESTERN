import Link from 'next/link';
import { ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteContact';

export function InsuranceFooter() {
  return (
    <footer className="bg-[#050D1D] w-full py-[60px] md:py-[80px] text-white font-sans border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <ShieldAlert className="text-[var(--color-blue)]" size={28} />
              <div className="flex flex-col">
                <span className="font-playfair text-[20px] font-bold leading-none tracking-wide text-white">
                  eawestern
                </span>
                <span className="text-[10px] uppercase text-[var(--color-slate)] tracking-[0.2em] font-medium opacity-80 mt-1">
                  Insurance Solutions
                </span>
              </div>
            </Link>
            <p className="text-[14px] text-white/60 leading-[1.7] max-w-[280px]">
              Providing structured, reliable insurance solutions across Kenya and East Africa. Our focus is simple: clarity, compliance, and consistent support.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
             <h4 className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-6">Quick Links</h4>
             <ul className="space-y-4">
               <li><Link href="/en/insurance" className="text-[14px] text-white/70 hover:text-white transition-colors">Home</Link></li>
               <li><Link href="/en/insurance/solutions" className="text-[14px] text-white/70 hover:text-white transition-colors">Our Plans & Solutions</Link></li>
               <li><Link href="/en/insurance/claims" className="text-[14px] text-white/70 hover:text-white transition-colors">File a Claim</Link></li>
               <li><Link href="/en/insurance/contact" className="text-[14px] text-white/70 hover:text-white transition-colors">Contact Support</Link></li>
             </ul>
          </div>
          
          {/* Support */}
          <div>
             <h4 className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-6">24/7 Support</h4>
             <ul className="space-y-5">
               <li className="flex items-start gap-3">
                 <Phone size={18} className="text-white/40 mt-[2px]" />
                 <div>
                   <div className="text-[11px] uppercase tracking-[0.1em] text-white/40 mb-1">Phone</div>
                   <a href={`tel:${SITE_CONTACT.phoneHref}`} className="text-[15px] font-medium hover:text-[var(--color-blue)] transition-colors">{SITE_CONTACT.phoneDisplay}</a>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <Mail size={18} className="text-white/40 mt-[2px]" />
                 <div>
                   <div className="text-[11px] uppercase tracking-[0.1em] text-white/40 mb-1">Email</div>
                   <a href={`mailto:${SITE_CONTACT.email}`} className="text-[14px] hover:text-[var(--color-blue)] transition-colors break-all">{SITE_CONTACT.email}</a>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <MapPin size={18} className="text-white/40 mt-[2px]" />
                 <div className="text-[14px] text-white/70 leading-relaxed">
                   {SITE_CONTACT.addressLine1}<br />{SITE_CONTACT.addressLine2}
                 </div>
               </li>
             </ul>
          </div>

          {/* Legal/Disclaimer */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[var(--color-blue)] mb-6">Compliance</h4>
            <div className="p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-[4px]">
              <p className="text-[12px] text-white/60 leading-[1.6]">
                eawestern is fully licensed and regulated by the Insurance Regulatory Authority (IRA). All policies are issued in accordance with current regulatory standards.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[11px] uppercase tracking-[0.1em] text-white font-semibold">
                <ShieldAlert size={14} className="text-[var(--color-green)]" />
                <span>Licensed & Regulated</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[12px] text-white/40 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} eawestern insurance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[12px] text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
