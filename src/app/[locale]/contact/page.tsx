"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HomeTomatoTheme } from '@/components/HomeTomatoTheme';
import Link from 'next/link';
import { use, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteContact';

/** Light-page inputs (HomeTomatoTheme uses ivory `#f7f5f0` — avoid white text). */
const peerInput =
  "peer w-full border-0 border-b border-[#1a2e45]/25 bg-transparent pb-3 font-sans text-[15px] text-[#1a2e45] placeholder-transparent transition-colors focus:border-[var(--color-gold)] focus:outline-none focus:ring-0";

const peerLabel =
  "pointer-events-none absolute left-0 -top-4 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-[14px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#64748b] peer-focus:-top-4 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-[var(--color-gold)]";

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
            className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#1e3a5f] transition-colors hover:text-[var(--color-gold)]"
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
              <h1 className="serif mb-8 text-[40px] leading-[1.1] text-[#1a2e45] md:text-[56px]">
                We&apos;re Here to <br />
                <em className="font-serif italic text-[var(--color-gold)]">Help</em>
              </h1>
              <p className="mb-8 max-w-[400px] font-sans text-[15px] font-light leading-[1.8] text-[#4a5568]">
                Reach out for safaris, insurance, car hire, or partnerships. Share what you need and our team will get back to you.
              </p>

              <div className="space-y-6 border-t border-[#ede9e1] pt-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Phone</div>
                  <a
                    href={`tel:${SITE_CONTACT.phoneHref}`}
                    className="font-sans text-[16px] text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {SITE_CONTACT.phoneDisplay}
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Email</div>
                  <a
                    href={`mailto:${SITE_CONTACT.email}`}
                    className="font-sans text-[16px] text-[var(--text-primary)] hover:text-[var(--color-gold)] transition-colors break-all"
                  >
                    {SITE_CONTACT.email}
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">Location</div>
                  <p className="font-sans text-[16px] leading-relaxed text-[#1a2e45]">
                    {SITE_CONTACT.addressLine1}
                    <br />
                    {SITE_CONTACT.addressLine2}
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
              <div className="rounded-[12px] border border-[#e8e4dc] bg-white p-8 shadow-[0_12px_48px_rgba(30,58,95,0.08)] md:p-12">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--color-gold)] text-[#1e3a5f]">
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
                    <h3 className="serif mb-4 text-[28px] text-[#1a2e45]">Message Received</h3>
                    <p className="max-w-[300px] font-sans text-[14px] text-[#4a5568]">
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
                          Phone <span className="normal-case tracking-normal text-[#94a3b8]">(optional)</span>
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
                          className="w-full cursor-pointer appearance-none border-0 border-b border-[#1a2e45]/25 bg-transparent pb-3 font-sans text-[15px] text-[#1a2e45] transition-colors focus:border-[var(--color-gold)] focus:outline-none"
                        >
                          <option value="" className="bg-white text-[#64748b]">
                            Select an option
                          </option>
                          <option value="safari" className="bg-white text-[#1a2e45]">
                            Safari / Tour
                          </option>
                          <option value="insurance" className="bg-white text-[#1a2e45]">
                            Insurance
                          </option>
                          <option value="car-hire" className="bg-white text-[#1a2e45]">
                            Rent a Car / Vehicle
                          </option>
                          <option value="general" className="bg-white text-[#1a2e45]">
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
                        className="peer w-full resize-none border-0 border-b border-[#1a2e45]/25 bg-transparent pb-3 font-sans text-[15px] text-[#1a2e45] placeholder-transparent transition-colors focus:border-[var(--color-gold)] focus:outline-none focus:ring-0"
                        placeholder="Message"
                      />
                      <label
                        htmlFor="message"
                        className="pointer-events-none absolute left-0 top-0 text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold)] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[14px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#64748b] peer-focus:top-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px]"
                      >
                        Tell us more about your needs
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 w-full border border-[#1e3a5f] bg-[#1e3a5f] px-[24px] py-[18px] text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold)] transition-all duration-300 hover:bg-[#2c5282] disabled:opacity-50"
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
