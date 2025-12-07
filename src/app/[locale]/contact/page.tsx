"use client";

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, use } from 'react';
import { Phone, Mail, MapPin, Car } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    helpType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here to send the form data
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/contact.png"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                CONTACT US
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <h2 className="text-3xl lg:text-4xl font-light mb-8">
                We&apos;re Here to Help — Anytime
              </h2>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-light mb-8 text-gray-900">CONTACT DETAILS</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="text-gray-500" size={20} />
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Phone</p>
                    </div>
                    <a href="tel:+254798217201" className="text-lg text-gray-900 hover:text-blue-600 transition-colors ml-8">
                      +254 798 217 201
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="text-gray-500" size={20} />
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Email</p>
                    </div>
                    <a href="mailto:info@eawestern.com" className="text-lg text-gray-900 hover:text-blue-600 transition-colors ml-8">
                      info@eawestern.com
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="text-gray-500" size={20} />
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                    </div>
                    <p className="text-lg text-gray-900 ml-8">
                      Utalii House, Utalii Street<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-light mb-8 text-gray-900">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                      Phone Number <span className="text-gray-500 text-xs">(Optional but Recommended)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* How Can We Help */}
                  <div>
                    <label htmlFor="helpType" className="block text-sm text-gray-700 mb-2">
                      How Can We Help You? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="helpType"
                      name="helpType"
                      required
                      value={formData.helpType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="safari">Safari/Tour</option>
                      <option value="insurance">Insurance</option>
                      <option value="car-hire">Rent a Car/Vehicle</option>
                      <option value="general">General Inquiry / Partnership</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      Tell Us More About Your Needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-red-900 text-white px-8 py-4 font-light tracking-widest text-sm transition-all duration-300 uppercase"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

