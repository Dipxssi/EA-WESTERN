"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type ServiceCardsSectionProps = {
  locale?: string;
};

export function ServiceCardsSection({ locale = 'en' }: ServiceCardsSectionProps) {
  const router = useRouter();

  useEffect(() => {
    console.log('ServiceCardsSection mounted, locale:', locale);
  }, [locale]);

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-white relative" style={{ pointerEvents: 'auto' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" style={{ pointerEvents: 'auto' }}>
        {/* Service Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6" style={{ pointerEvents: 'auto' }}>
          {/* Safari Card */}
          <a 
            href={`/${locale}/safaris`}
            onClick={(e) => {
              console.log('Safari card clicked!', `/${locale}/safaris`);
              e.preventDefault();
              e.stopPropagation();
              const path = `/${locale}/safaris`;
              console.log('Navigating to:', path);
              try {
                router.push(path);
              } catch (error) {
                console.error('Navigation error:', error);
                window.location.href = path;
              }
            }}
            onMouseDown={(e) => {
              console.log('Safari card mouse down');
            }}
            onMouseEnter={() => console.log('Safari card mouse enter')}
            className="block bg-white border border-gray-200 hover:border-blue-500 px-4 sm:px-5 md:px-6 py-5 sm:py-5 md:py-6 font-light tracking-wide text-xs sm:text-sm transition-all duration-300 hover:shadow-xl shadow-md group cursor-pointer no-underline relative z-10"
            style={{ textDecoration: 'none', color: 'inherit', pointerEvents: 'auto', position: 'relative' }}
          >
            <div className="flex justify-center items-center mb-4" style={{ pointerEvents: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                <circle cx="11" cy="4" r="2"/>
                <circle cx="18" cy="8" r="2"/>
                <circle cx="20" cy="16" r="2"/>
                <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
              </svg>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-center mb-3 sm:mb-4 text-black group-hover:text-blue-600 transition-colors duration-300" style={{ pointerEvents: 'none' }}>Explore Tours and Safaris</h3>
            
            {/* Centered Arrow with "Learn More" text */}
            <div className="flex items-center justify-center mt-4 group-hover:translate-x-1 transition-transform duration-300" style={{ pointerEvents: 'none' }}>
              <span className="text-[10px] sm:text-xs text-gray-600 group-hover:text-blue-600 mr-1 sm:mr-2 transition-colors duration-300">Visit Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </div>
          </a>
          
          {/* Insurance Card */}
          <a 
            href={`/${locale}/insurance`}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/${locale}/insurance`);
            }}
            className="block bg-white border border-gray-200 hover:border-blue-500 px-4 sm:px-5 md:px-6 py-5 sm:py-5 md:py-6 font-light tracking-wide text-xs sm:text-sm transition-all duration-300 hover:shadow-xl shadow-md group cursor-pointer no-underline relative z-10"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="flex justify-center items-center mb-4" style={{ pointerEvents: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-center mb-3 sm:mb-4 text-black group-hover:text-blue-600 transition-colors duration-300" style={{ pointerEvents: 'none' }}>Get Insurance Help</h3>
            
            {/* Centered Arrow with "Learn More" text */}
            <div className="flex items-center justify-center mt-4 group-hover:translate-x-1 transition-transform duration-300" style={{ pointerEvents: 'none' }}>
              <span className="text-[10px] sm:text-xs text-gray-600 group-hover:text-blue-600 mr-1 sm:mr-2 transition-colors duration-300">Visit Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </div>
          </a>
          
          {/* Car Rental Card */}
          <a 
            href={`/${locale}/vehicles`}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/${locale}/vehicles`);
            }}
            className="block bg-white border border-gray-200 hover:border-blue-500 px-4 sm:px-5 md:px-6 py-5 sm:py-5 md:py-6 font-light tracking-wide text-xs sm:text-sm transition-all duration-300 hover:shadow-xl shadow-md group cursor-pointer no-underline relative z-10"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="flex justify-center items-center mb-4" style={{ pointerEvents: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-center mb-3 sm:mb-4 text-black group-hover:text-blue-600 transition-colors duration-300" style={{ pointerEvents: 'none' }}>Book a car</h3>
            
            {/* Centered Arrow with "Learn More" text */}
            <div className="flex items-center justify-center mt-4 group-hover:translate-x-1 transition-transform duration-300" style={{ pointerEvents: 'none' }}>
              <span className="text-[10px] sm:text-xs text-gray-600 group-hover:text-blue-600 mr-1 sm:mr-2 transition-colors duration-300">Visit Page</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
