"use client";

import { VehiclesNavigation } from '@/components/VehiclesNavigation';
import { VehiclesFooter } from '@/components/VehiclesFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Mail, Phone, CalendarCheck2 } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteContact';
import { CONTACT_SUBMIT_URL } from '@/lib/contactSubmitUrl';

export default function VehiclesContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    try {
      const response = await fetch(CONTACT_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'vehicles-contact',
          locale,
          ...data,
          subject: `Vehicle Inquiry: ${String(data.vehicle || 'General')}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert('Failed to send your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="theme-automotive bg-[#f7f5f0] text-[#4a5568] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[#c9a96e] selection:text-[#1a2e45]">
      <VehiclesNavigation locale={locale} />
      
      <main className="w-full pb-[80px]">
        {/* Header */}
        <section className="bg-[#f7f5f0] pt-[160px] pb-[60px] md:pt-[200px] md:pb-[80px] relative overflow-hidden mb-12">
           <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-[#f7f5f0]/90 to-[#f7f5f0] z-10" />
           <img src="/images/car3.png" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover object-center opacity-25" />
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-20">
             <Link 
               href={`/${locale}/vehicles`}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#4a7fa5] hover:text-[#1e3a5f] transition-colors"
             >
               <ArrowLeft size={16} /> Return to Home
             </Link>
           </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col pt-4"
            >
              <h1 className="text-[40px] md:text-[48px] font-extrabold text-[#1a2e45] leading-[1.1] mb-6 uppercase">
                Secure Your <br/> Reservation.
              </h1>
              <p className="text-[15px] text-neutral-600 leading-[1.8] mb-12 max-w-[400px]">
                Whether you need immediate dispatch or are planning a corporate trip months in advance, our booking team is ready to assist.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#1e3a5f] shadow-sm flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.2em] text-[#4a7fa5] font-bold mb-1">Direct Line / 24-7 Rescue</div>
                    <a href={`tel:${SITE_CONTACT.phoneHref}`} className="text-[18px] font-bold text-[#1a2e45] hover:text-[#a8823d] transition-colors">{SITE_CONTACT.phoneDisplay}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#1e3a5f] shadow-sm flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.2em] text-[#4a7fa5] font-bold mb-1">Booking Desk</div>
                    <a href={`mailto:${SITE_CONTACT.email}`} className="text-[18px] font-bold text-[#1a2e45] hover:text-[#a8823d] transition-colors">{SITE_CONTACT.email}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-[#1e3a5f] shadow-sm flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.2em] text-[#4a7fa5] font-bold mb-1">Fleet Hub</div>
                    <div className="text-[15px] font-medium text-[#1a2e45]">Utalii House, Utalii Street<br/>Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Booking Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-[4px] shadow-xl border border-neutral-200 p-8 md:p-12">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-[80px] h-[80px] rounded-full bg-[#c9a96e] flex items-center justify-center text-[#1e3a5f] mb-6 shadow-lg">
                      <CalendarCheck2 size={36} />
                    </div>
                    <h3 className="text-[28px] font-extrabold text-[#1a2e45] mb-4 uppercase">Request Received</h3>
                    <p className="text-[15px] text-neutral-600 max-w-[340px] leading-[1.7]">
                      Thank you for choosing eawestern. A booking specialist will contact you within the hour to confirm your vehicle and itinerary details.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-10 border-b border-black/5 pb-6">
                      <h3 className="text-[24px] font-extrabold text-[#1a2e45] uppercase tracking-wide">Vehicle Request Form</h3>
                      <p className="text-[14px] text-neutral-600 mt-2">Provide your trip details to check fleet availability immediately.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="firstName" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">First Name</label>
                          <input type="text" id="firstName" name="firstName" required
                            className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Last Name</label>
                          <input type="text" id="lastName" name="lastName" required
                            className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="email" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Email Address</label>
                          <input type="email" id="email" name="email" required
                            className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" required
                            className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="pickupDate" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Pick-up Date</label>
                          <input type="date" id="pickupDate" name="pickupDate" required
                            className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="returnDate" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Return Date</label>
                          <input type="date" id="returnDate" name="returnDate" required
                            className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="vehicle" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Requested Vehicle Category</label>
                        <select id="vehicle" name="vehicle" defaultValue="" required
                          className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all appearance-none"
                        >
                          <option value="" disabled>Select Category...</option>
                          <option value="sedan">Executive Sedan</option>
                          <option value="4x4">Safari 4x4 Off-Road</option>
                          <option value="van">Corporate Van / Shuttle</option>
                          <option value="other">Unsure / Need Recommendation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[11px] font-bold text-[#1a2e45] uppercase tracking-[0.2em] mb-2">Trip Details / Requirements</label>
                        <textarea id="message" name="message" rows={4}
                          className="w-full bg-neutral-100 border border-black/5 rounded-[2px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] transition-all resize-none"
                          placeholder="Please provide any destinations, chauffeur requirements, or special requests..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#c9a96e] text-[#1e3a5f] px-[24px] py-[18px] text-[13px] uppercase tracking-[0.15em] font-bold hover:bg-[#a8823d] hover:text-[#1a2e45] transition-colors rounded-[2px] shadow-lg disabled:opacity-70 mt-4 flex items-center justify-center"
                      >
                        {isSubmitting ? 'Processing Request...' : 'Submit Inquiry'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <VehiclesFooter />
    </div>
  );
}
