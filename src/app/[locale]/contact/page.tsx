"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HomeTomatoTheme } from '@/components/HomeTomatoTheme';
import Link from 'next/link';
import { use, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const peerInput =
  'peer w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-transparent';

const peerLabel =
  'absolute left-0 -top-4 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-0 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[var(--color-gold)]';

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log('Form submitted:', data);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden text-[var(--text-primary)] font-jost"
      style={{ background: 'var(--background-gradient)' }}
    >
      <HomeTomatoTheme />
      <Navigation locale={locale} />

      <main className="w-full pt-[120px] pb-[80px]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="h-[1px] w-[40px] bg-[var(--color-gold)] mb-6" />
              <h1 className="serif text-[40px] md:text-[56px] leading-[1.1] mb-8 text-white">
                We&apos;re Here to <br />
                <em className="text-[var(--color-gold)] italic font-serif">Help</em>
              </h1>
              <p className="font-sans text-[15px] text-white/65 leading-[1.8] font-light mb-8 max-w-[400px]">
                Reach out for safaris, insurance, car hire, or partnerships. Share what you need and our team will get back to you.
              </p>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Phone</div>
                  <a
                    href="tel:+254751216699"
                    className="font-sans text-[16px] text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    +254 751 216 699
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Email</div>
                  <a
                    href="mailto:info@eawestern.com"
                    className="font-sans text-[16px] text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors break-all"
                  >
                    info@eawestern.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Location</div>
                  <p className="font-sans text-[16px] text-white/80 leading-relaxed">
                    Utalii House, Utalii Street
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-[4px] p-8 md:p-12">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-[60px] h-[60px] rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[#0B1F2E] mb-6">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="serif text-[28px] text-white mb-4">Message Received</h3>
                    <p className="font-sans text-[14px] text-white/70 max-w-[300px]">
                      Our team will review your request and respond as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className={peerInput}
                          placeholder="First name"
                        />
                        <label htmlFor="firstName" className={peerLabel}>
                          First Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className={peerInput}
                          placeholder="Last name"
                        />
                        <label htmlFor="lastName" className={peerLabel}>
                          Last Name
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className={peerInput}
                          placeholder="Email"
                        />
                        <label htmlFor="email" className={peerLabel}>
                          Email Address
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className={peerInput}
                          placeholder="Phone"
                        />
                        <label htmlFor="phone" className={peerLabel}>
                          Phone <span className="normal-case tracking-normal text-white/40">(optional)</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="helpType" className="block text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-2">
                          How can we help? <span className="text-red-400/90">*</span>
                        </label>
                        <select
                          id="helpType"
                          name="helpType"
                          required
                          className="w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0B1F2E] text-white/50">
                            Select an option
                          </option>
                          <option value="safari" className="bg-[#0B1F2E] text-white">
                            Safari / Tour
                          </option>
                          <option value="insurance" className="bg-[#0B1F2E] text-white">
                            Insurance
                          </option>
                          <option value="car-hire" className="bg-[#0B1F2E] text-white">
                            Rent a Car / Vehicle
                          </option>
                          <option value="general" className="bg-[#0B1F2E] text-white">
                            General / Partnership
                          </option>
                        </select>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className={peerInput}
                          placeholder="Subject"
                        />
                        <label htmlFor="subject" className={peerLabel}>
                          Subject
                        </label>
                      </div>
                    </div>

                    <div className="relative pt-6">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="peer w-full bg-transparent border-b border-white/20 pb-3 text-[15px] font-sans text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors placeholder-transparent resize-none"
                        placeholder="Message"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 top-0 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-white/50 peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-[11px] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px]"
                      >
                        Tell us more about your needs
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0B1F2E] border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[#0B1F2E] px-[24px] py-[18px] text-[10px] uppercase tracking-[0.2em] transition-all duration-700 disabled:opacity-50 mt-4"
                    >
                      {isSubmitting ? 'Sending…' : 'Submit Request'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
