"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function SafariContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="theme-safari bg-[var(--color-deep-green)] text-[var(--color-cream)] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-[var(--color-deep-green)]">
      <SafariNavigation locale={locale} />
      
      <main className="w-full pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          
          <Link 
            href={`/${locale}/safaris`}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Back to Safaris
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="h-[1px] w-[40px] bg-[var(--color-terracotta)] mb-6"></div>
              <h1 className="font-playfair text-[40px] md:text-[56px] leading-[1.1] mb-8">
                Begin Your <br/> <em className="text-[var(--color-gold)] italic font-serif">Journey</em>
              </h1>
              <p className="font-sans text-[15px] text-[rgba(245,237,216,0.7)] leading-[1.8] font-light mb-8 max-w-[400px]">
                Share your vision, preferred travel dates, and any specific dreams you have for your African adventure. Our luxury designers will carefully craft an itinerary perfectly suited to you.
              </p>
              
              <div className="space-y-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Email</div>
                  <a href="mailto:info@eawestern.com" className="font-sans text-[16px] hover:text-[var(--color-terracotta)] transition-colors">info@eawestern.com</a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Call Us</div>
                  <a href="tel:+254123456789" className="font-sans text-[16px] hover:text-[var(--color-terracotta)] transition-colors">+254 123 456 789</a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Office</div>
                  <p className="font-sans text-[16px] text-white/85 leading-relaxed">
                    Utalii House, Utalii Street
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-[4px] p-8 md:p-12">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-[60px] h-[60px] rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-deep-green)] mb-6">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h3 className="font-playfair text-[28px] text-[var(--color-cream)] mb-4">Inquiry Received</h3>
                    <p className="font-sans text-[14px] text-white/70 max-w-[300px]">
                      A luxury travel designer will review your vision and contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Name */}
                      <div className="relative">
                        <input type="text" id="name" required
                          className="w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors peer placeholder-transparent"
                          placeholder="Name"
                        />
                        <label htmlFor="name" className="absolute left-0 -top-4 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[var(--color-gold)]">
                          Full Name
                        </label>
                      </div>
                      
                      {/* Email */}
                      <div className="relative">
                        <input type="email" id="email" required
                          className="w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors peer placeholder-transparent"
                          placeholder="Email"
                        />
                        <label htmlFor="email" className="absolute left-0 -top-4 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[var(--color-gold)]">
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Dates */}
                      <div className="relative">
                        <input type="text" id="dates"
                          className="w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors peer placeholder-transparent"
                          placeholder="Dates"
                        />
                        <label htmlFor="dates" className="absolute left-0 -top-4 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[var(--color-gold)]">
                          Estimated Travel Dates
                        </label>
                      </div>
                      
                      {/* Party Size */}
                      <div className="relative">
                        <select id="party"
                          className="w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none"
                        >
                          <option value="" className="bg-[var(--color-deep-green)] text-white/50">Party Size...</option>
                          <option value="1" className="bg-[var(--color-deep-green)] text-white">1 Person</option>
                          <option value="2" className="bg-[var(--color-deep-green)] text-white">2 People</option>
                          <option value="3-4" className="bg-[var(--color-deep-green)] text-white">3-4 People</option>
                          <option value="5+" className="bg-[var(--color-deep-green)] text-white">5+ People</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative pt-6">
                      <textarea id="message" rows={4} required
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors peer placeholder-transparent resize-none"
                        placeholder="Message"
                      ></textarea>
                      <label htmlFor="message" className="absolute left-0 top-0 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-[var(--color-gold)]">
                        Tell us about your dream safari
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-deep-green)] border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] px-[24px] py-[18px] text-[10px] uppercase tracking-[0.2em] transition-all duration-700 disabled:opacity-50 mt-4"
                    >
                      {isSubmitting ? 'Sending inquiry...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>
      
      <SafariFooter />
    </div>
  );
}
