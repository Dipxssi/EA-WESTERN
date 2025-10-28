export function ServiceCardsSection() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Service Cards - Now outside video background */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 hover:border-blue-500 px-8 py-10 font-light tracking-wide text-sm transition-all duration-300 hover:shadow-xl shadow-md group">
            <div className="flex justify-center items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                <circle cx="11" cy="4" r="2"/>
                <circle cx="18" cy="8" r="2"/>
                <circle cx="20" cy="16" r="2"/>
                <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center mb-4 text-black group-hover:text-blue-600 transition-colors duration-300">Plan My Safari</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Discover East Africa&apos;s wildlife and breathtaking landscapes with our expertly crafted safari experiences.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 hover:border-blue-500 px-8 py-10 font-light tracking-wide text-sm transition-all duration-300 hover:shadow-xl shadow-md group">
            <div className="flex justify-center items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center mb-4 text-black group-hover:text-blue-600 transition-colors duration-300">Get Insurance Help</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Protect what matters most with our comprehensive insurance solutions tailored to your needs.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 hover:border-blue-500 px-8 py-10 font-light tracking-wide text-sm transition-all duration-300 hover:shadow-xl shadow-md group">
            <div className="flex justify-center items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center mb-4 text-black group-hover:text-blue-600 transition-colors duration-300">Book a Car</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Reliable and comfortable transportation for all your travel needs across Kenya and East Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
