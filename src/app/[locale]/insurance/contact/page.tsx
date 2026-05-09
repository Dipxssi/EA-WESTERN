"use client";

import { InsuranceNavigation } from '@/components/InsuranceNavigation';
import { InsuranceFooter } from '@/components/InsuranceFooter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Mail, Phone, CalendarCheck2 } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteContact';
import { CONTACT_SUBMIT_URL } from '@/lib/contactSubmitUrl';

export default function InsuranceContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    try {
      const response = await fetch(CONTACT_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'insurance-contact',
          locale,
          ...data,
          subject: `Insurance Inquiry: ${String(data.interest || 'General')}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Failed to send your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="theme-insurance bg-[#f7f5f0] text-[#4a5568] min-h-screen font-sans w-full overflow-x-hidden selection:bg-[#c9a96e] selection:text-[#1a2e45]">
      <InsuranceNavigation locale={locale} />
      
      <main className="w-full pb-[80px]">
        {/* Header */}
        <section className="bg-[#f7f5f0] pt-[140px] pb-[60px] md:pt-[180px] md:pb-[80px] relative overflow-hidden mb-12">
           <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-[#f7f5f0]/90 to-[#f7f5f0] z-10" />
           <img src="/images/insurancebg.png" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover object-center opacity-25" />
           <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-20">
             <Link 
               href={`/${locale}/insurance`}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] font-semibold text-[#4a7fa5] hover:text-[#1e3a5f] transition-colors"
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
              <h1 className="text-[40px] md:text-[48px] font-bold text-[var(--color-navy)] leading-[1.1] mb-6">
                Connect with an Advisor.
              </h1>
              <p className="text-[15px] text-[var(--color-charcoal)]/70 leading-[1.8] mb-12 max-w-[400px]">
                Whether you need a quick quote or an in-depth review of your corporate liability needs, our certified experts are here to help.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[#4a7fa5] border border-[#dcd8cf] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.1em] text-[#4a7fa5] font-semibold mb-1">Phone</div>
                    <a href={`tel:${SITE_CONTACT.phoneHref}`} className="text-[18px] font-bold text-[#1a2e45] hover:text-[#a8823d] transition-colors">{SITE_CONTACT.phoneDisplay}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[#4a7fa5] border border-[#dcd8cf] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.1em] text-[#4a7fa5] font-semibold mb-1">Email</div>
                    <a href={`mailto:${SITE_CONTACT.email}`} className="text-[18px] font-bold text-[#1a2e45] hover:text-[#a8823d] transition-colors break-all">{SITE_CONTACT.email}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-[48px] h-[48px] rounded-full bg-white shadow-sm flex items-center justify-center text-[#4a7fa5] border border-[#dcd8cf] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] uppercase tracking-[0.1em] text-[#4a7fa5] font-semibold mb-1">Location</div>
                    <p className="text-[15px] font-medium text-[#1a2e45] leading-relaxed">
                      {SITE_CONTACT.addressLine1}
                      <br />
                      {SITE_CONTACT.addressLine2}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Corporate Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-[12px] shadow-[0_30px_60px_rgba(11,27,61,0.06)] border border-[rgba(11,27,61,0.05)] p-8 md:p-12">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-[80px] h-[80px] rounded-full bg-[#f7f5f0] border border-[#dcd8cf] flex items-center justify-center text-[#4a7fa5] mb-6">
                      <CalendarCheck2 size={36} />
                    </div>
                    <h3 className="text-[28px] font-bold text-[#1a2e45] mb-4">Request Received</h3>
                    <p className="text-[15px] text-[var(--color-charcoal)]/70 max-w-[340px] leading-[1.7]">
                      Thank you for trusting eawestern. A licensed advisor will review your details and contact you within one business day with a customized quote overview.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-10 border-b border-[rgba(11,27,61,0.05)] pb-6">
                      <h3 className="text-[24px] font-bold text-[#1a2e45]">Request a Secure Quote</h3>
                      <p className="text-[14px] text-[var(--color-charcoal)]/60 mt-2">All information submitted is encrypted and strictly confidential.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="firstName" className="block text-[12px] font-bold text-[#1a2e45] uppercase tracking-[0.1em] mb-2">First Name</label>
                          <input type="text" id="firstName" name="firstName" required
                            className="w-full bg-[#f7f5f0] border border-[rgba(11,27,61,0.1)] rounded-[4px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-[12px] font-bold text-[#1a2e45] uppercase tracking-[0.1em] mb-2">Last Name</label>
                          <input type="text" id="lastName" name="lastName" required
                            className="w-full bg-[#f7f5f0] border border-[rgba(11,27,61,0.1)] rounded-[4px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label htmlFor="email" className="block text-[12px] font-bold text-[#1a2e45] uppercase tracking-[0.1em] mb-2">Email Address</label>
                          <input type="email" id="email" name="email" required
                            className="w-full bg-[#f7f5f0] border border-[rgba(11,27,61,0.1)] rounded-[4px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-[12px] font-bold text-[#1a2e45] uppercase tracking-[0.1em] mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" required
                            className="w-full bg-[#f7f5f0] border border-[rgba(11,27,61,0.1)] rounded-[4px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-[12px] font-bold text-[#1a2e45] uppercase tracking-[0.1em] mb-2">Area of Interest</label>
                        <select id="interest" name="interest" defaultValue="" required
                          className="w-full bg-[#f7f5f0] border border-[rgba(11,27,61,0.1)] rounded-[4px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all appearance-none"
                        >
                          <option value="" disabled>Select Insurance Type...</option>
                          <option value="life">Life Insurance</option>
                          <option value="health">Health & Medical</option>
                          <option value="auto">Auto & Transit</option>
                          <option value="property">Home & Property</option>
                          <option value="business">Business Liability</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[12px] font-bold text-[#1a2e45] uppercase tracking-[0.1em] mb-2">Additional Details (Optional)</label>
                        <textarea id="message" name="message" rows={4}
                          className="w-full bg-[#f7f5f0] border border-[rgba(11,27,61,0.1)] rounded-[4px] px-4 py-3 text-[15px] font-sans text-[#1a2e45] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all resize-none"
                          placeholder="Please provide any brief details about your assets or family structure..."
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#c9a96e] text-[#1e3a5f] px-[24px] py-[16px] text-[13px] uppercase tracking-[0.1em] font-bold hover:bg-[#a8823d] hover:text-[#1a2e45] transition-colors rounded-[4px] shadow-lg shadow-[#c9a96e]/20 disabled:opacity-70 mt-4 flex items-center justify-center"
                      >
                        {isSubmitting ? 'Processing Securely...' : 'Submit Request'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <InsuranceFooter />
    </div>
  );
}
