export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Premium Navigation */}
      <nav className="bg-black/90 backdrop-blur-xl border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            {/* Premium Logo - Replace with actual logo */}
            <div className="flex items-center">             
              <img src="/logo/ea-western-logo.png" alt="EA Western" className="h-12 w-auto" />                        
            </div>
            
            {/* Minimal Navigation */}
            <div className="hidden md:flex space-x-12">
              <a href="#tours" className="text-gray-300 hover:text-white font-light tracking-wide transition-all duration-300 relative group">
                SAFARIS
                <span className="absolute bottom-0 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#insurance" className="text-gray-300 hover:text-white font-light tracking-wide transition-all duration-300 relative group">
                INSURANCE
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#cars" className="text-gray-300 hover:text-white font-light tracking-wide transition-all duration-300 relative group">
                VEHICLES
                <span className="absolute bottom-0 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            
            {/* Premium CTA */}
            <div className="flex items-center space-x-6">
              <select className="bg-transparent border border-gray-700 rounded-none px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-white">
                <option value="en" className="bg-black">EN</option>
                <option value="sw" className="bg-black">SW</option>
              </select>
              <button className="bg-transparent border border-white px-8 py-3 font-light tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Cinematic Hero with Stunning Background */}
      <section className="min-h-screen relative overflow-hidden py-32">
        {/* Stunning Kenya Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/hero-kenya-bg.png')" 
          }}
        ></div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        {/* Enhanced Overlay Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
          <div className="max-w-6xl mx-auto text-center px-6 py-16">
            {/* Premium Typography */}
            <div className="mb-16">
              <div className="text-sm tracking-[0.3em] text-gray-200 font-light mb-4">DISCOVER KENYA</div>
              <h1 className="text-6xl md:text-8xl font-extralight mb-6 leading-tight text-white drop-shadow-2xl">
                COMPLETE
                <br/>
                <span className="font-light bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                  EXPERIENCE
                </span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-8"></div>
              <p className="text-xl font-light text-gray-100 tracking-wide max-w-2xl mx-auto leading-relaxed mb-4 drop-shadow-lg">
                Premium safaris, comprehensive protection, luxury transport
              </p>
              {/* Clear Service Emphasis */}
              <div className="text-lg font-light text-gray-200 tracking-wide">
                <span className="text-red-400">SAFARI TOURS</span> • <span className="text-blue-400">INSURANCE</span> • <span className="text-red-400">CAR HIRE</span>
              </div>
            </div>

            {/* Enhanced Service Cards with Properly Aligned Icons */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 pb-8">
              
              {/* Safari Card - Enhanced with Safari Imagery */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-red-500 p-8 transition-all duration-500 hover:bg-red-900/20 shadow-2xl h-full">
                  {/* Safari Icon with Background */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 616 0z"/>
                      </svg>
                    </div>
                    <div className="text-xs tracking-[0.3em] text-red-400 font-light">01 • ADVENTURE</div>
                  </div>
                  <h3 className="text-xl font-semibold tracking-wide mb-4 text-white">SAFARI EXPEDITIONS</h3>
                  <div className="text-sm text-gray-100 mb-6 font-light leading-relaxed">
                    <div className="mb-3 flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-red-400 flex-shrink-0"
                      >
                        <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/>
                        <path d="M8 14v.5"/>
                        <path d="M16 14v.5"/>
                        <path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/>
                      </svg>
                      <span>Big Five Wildlife</span>
                    </div>
                    <div className="mb-3 flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-blue-400 flex-shrink-0"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                      </svg>
                      <span>Maasai Mara • Amboseli • Tsavo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-yellow-400 flex-shrink-0"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                      <span>Expert Local Guides</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-400 pt-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">$299</div>
                    <div className="text-xs text-gray-200 tracking-wider uppercase">FROM / PERSON</div>
                  </div>
                </div>
              </div>
              
              {/* Insurance Card - Enhanced with Protection Imagery */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-blue-500 p-8 transition-all duration-500 hover:bg-blue-900/20 shadow-2xl h-full">
                  {/* Insurance Icon with Background */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div className="text-xs tracking-[0.3em] text-blue-400 font-light">02 • PROTECTION</div>
                  </div>
                  <h3 className="text-xl font-semibold tracking-wide mb-4 text-white">INSURANCE PLANS</h3>
                  <div className="text-sm text-gray-100 mb-6 font-light leading-relaxed">
                    <div className="mb-3 flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-green-400 flex-shrink-0"
                      >
                        <path d="M12 7v4"/>
                        <path d="M14 21v-3a2 2 0 0 0-4 0v3"/>
                        <path d="M14 9h-4"/>
                        <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/>
                        <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/>
                      </svg>
                      <span>Travel • Medical • Vehicle</span>
                    </div>
                    <div className="mb-3 flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-red-400 flex-shrink-0"
                      >
                        <path d="M7 18v-6a5 5 0 1 1 10 0v6"/>
                        <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/>
                        <path d="M21 12h1"/>
                        <path d="M18.5 4.5 18 5"/>
                        <path d="M2 12h1"/>
                        <path d="M12 2v1"/>
                        <path d="m4.929 4.929.707.707"/>
                        <path d="M12 12v6"/>
                      </svg>
                      <span>24/7 Emergency Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-blue-400 flex-shrink-0"
                      >
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                        <path d="M2 12h20"/>
                      </svg>
                      <span>Global Coverage</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-400 pt-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">$49</div>
                    <div className="text-xs text-gray-200 tracking-wider uppercase">FROM / POLICY</div>
                  </div>
                </div>
              </div>
              
              {/* Vehicle Card - Enhanced with Car Imagery */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-red-500 p-8 transition-all duration-500 hover:bg-red-900/20 shadow-2xl h-full">
                  {/* Vehicle Icon with Background */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2 2H8a2 2 0 01-2-2v0"/>
                      </svg>
                    </div>
                    <div className="text-xs tracking-[0.3em] text-red-400 font-light">03 • TRANSPORT</div>
                  </div>
                  <h3 className="text-xl font-semibold tracking-wide mb-4 text-white">CAR HIRE SERVICES</h3>
                  <div className="text-sm text-gray-100 mb-6 font-light leading-relaxed">
                    <div className="mb-3 flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-purple-400 flex-shrink-0"
                      >
                        <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/>
                        <path d="M7 14h.01"/>
                        <path d="M17 14h.01"/>
                        <rect width="18" height="8" x="3" y="10" rx="2"/>
                        <path d="M5 18v2"/>
                        <path d="M19 18v2"/>
                      </svg>
                      <span>4WD • Luxury • Executive</span>
                    </div>
                    <div className="mb-3 flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-orange-400 flex-shrink-0"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <span>Professional Chauffeurs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-green-400 flex-shrink-0"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                      </svg>
                      <span>Full Insurance Included</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-400 pt-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">$89</div>
                    <div className="text-xs text-gray-200 tracking-wider uppercase">FROM / DAY</div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Added Service Emphasis Section */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-sm tracking-[0.3em] text-gray-200 font-light mb-4">THREE ESSENTIAL SERVICES</div>
                <div className="flex justify-center items-center space-x-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200">PREMIUM SAFARIS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-200">COMPREHENSIVE INSURANCE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200">LUXURY CAR HIRE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Stats */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-extralight mb-3 text-red-500">15+</div>
              <div className="text-sm tracking-[0.2em] text-gray-400 font-light uppercase">YEARS</div>
            </div>
            <div>
              <div className="text-5xl font-extralight mb-3 text-blue-500">5K+</div>
              <div className="text-sm tracking-[0.2em] text-gray-400 font-light uppercase">TRAVELERS</div>
            </div>
            <div>
              <div className="text-5xl font-extralight mb-3 text-red-500">50+</div>
              <div className="text-sm tracking-[0.2em] text-gray-400 font-light uppercase">DESTINATIONS</div>
            </div>
            <div>
              <div className="text-5xl font-extralight mb-3 text-blue-500">24/7</div>
              <div className="text-sm tracking-[0.2em] text-gray-400 font-light uppercase">SUPPORT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section with Background Images */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-sm tracking-[0.3em] text-gray-400 font-light mb-6 uppercase">OUR EXPERTISE</div>
            <h2 className="text-5xl font-extralight mb-6 text-white">Premium Solutions</h2>
            <div className="w-24 h-px bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Safari Service with Background Image */}
            <div className="group">
              <div className="relative overflow-hidden mb-8 h-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                {/* Safari Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ 
                    backgroundImage: "url('/images/safari-bg.png')" 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="text-sm tracking-[0.2em] text-red-500 font-light">01</div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Safari Expeditions</h3>
                  <div className="text-sm text-gray-300 font-light">Exclusive wilderness encounters</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-3xl font-extralight text-red-500">FROM $299</span>
                  <span className="text-xs tracking-wide text-gray-400 uppercase">PER PERSON</span>
                </div>
                
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-light">Expert naturalist guides</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-light">Luxury safari lodges</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-light">All permits included</span>
                  </div>
                </div>
                
                <button className="w-full bg-transparent border border-red-500 py-4 font-light tracking-widest text-sm text-white hover:bg-red-500 transition-all duration-300 uppercase">
                  EXPLORE SAFARIS
                </button>
              </div>
            </div>
            
            {/* Insurance Service with Background Image */}
            <div className="group">
              <div className="relative overflow-hidden mb-8 h-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                {/* Insurance Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ 
                    backgroundImage: "url('/images/insurance-bg.png')" 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="text-sm tracking-[0.2em] text-blue-500 font-light">02</div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Protection Plans</h3>
                  <div className="text-sm text-gray-300 font-light">Comprehensive coverage</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-3xl font-extralight text-blue-500">FROM $49</span>
                  <span className="text-xs tracking-wide text-gray-400 uppercase">PER POLICY</span>
                </div>
                
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-light">Global medical coverage</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-light">24/7 emergency assistance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-light">Instant claim processing</span>
                  </div>
                </div>
                
                <button className="w-full bg-transparent border border-blue-500 py-4 font-light tracking-widest text-sm text-white hover:bg-blue-500 transition-all duration-300 uppercase">
                  GET COVERAGE
                </button>
              </div>
            </div>
            
            {/* Vehicle Service with Background Image */}
            <div className="group">
              <div className="relative overflow-hidden mb-8 h-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                {/* Vehicle Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ 
                    backgroundImage: "url('/images/vehicles-bg.jpg')" 
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="text-sm tracking-[0.2em] text-red-500 font-light">03</div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-light mb-2">Premium Fleet</h3>
                  <div className="text-sm text-gray-300 font-light">Executive transport</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-3xl font-extralight text-red-500">FROM $89</span>
                  <span className="text-xs tracking-wide text-gray-400 uppercase">PER DAY</span>
                </div>
                
                <div className="space-y-4 text-sm text-gray-300">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-light">Luxury 4WD vehicles</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-light">Professional chauffeurs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="font-light">Comprehensive insurance</span>
                  </div>
                </div>
                
                <button className="w-full bg-transparent border border-red-500 py-4 font-light tracking-widest text-sm text-white hover:bg-red-500 transition-all duration-300 uppercase">
                  VIEW FLEET
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-black border-t border-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-2xl font-light tracking-wider mb-6">
                <span style={{ color: "#dc2626" }} className="font-bold">EA</span>
                <span style={{ color: "#2563eb" }} className="font-thin">WESTERN</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                Curating exceptional Kenya experiences through premium safaris, 
                comprehensive protection, and luxury transport solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm tracking-[0.2em] text-gray-500 font-light mb-6 uppercase">CONTACT</h4>
                <div className="space-y-3 text-sm text-gray-400 font-light">
                  <div>+254 700 123 456</div>
                  <div>info@eawestern.com</div>
                  <div>Nairobi, Kenya</div>
                </div>
              </div>
              <div>
                <h4 className="text-sm tracking-[0.2em] text-gray-500 font-light mb-6 uppercase">FOLLOW</h4>
                <div className="space-y-3 text-sm text-gray-400 font-light">
                  <div>Instagram</div>
                  <div>LinkedIn</div>
                  <div>Facebook</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-900 mt-16 pt-8 text-center">
            <div className="text-xs tracking-[0.2em] text-gray-600 font-light uppercase">
              © 2025 EA WESTERN — ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
