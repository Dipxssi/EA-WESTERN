export function ServicesSection() {
  const services = [
    {
      id: '01',
      category: 'Adventure',
      title: 'Tours & Safaris',
      headline: 'Your East African Adventure Starts Here.',
      description: 'Imagine waking up to the roar of lions, walking the white beaches of Zanzibar, or watching the Great Migration unfold. With Eawestern, every journey is crafted with local expertise and personalized care.',
      ctaText: 'Tour with Us',
      backgroundImage: '/images/safari-background.png'
    },
    {
      id: '02', 
      category: 'Protection',
      title: 'Insurance',
      headline: 'Protection That\'s Personal.',
      description: 'Insurance isn\'t just about policies — it\'s about peace of mind. At Eawestern, we simplify the process by partnering with Kenya\'s most trusted insurers to bring you clear, affordable, and reliable coverage.',
      ctaText: 'Insure with Us',
      backgroundImage: '/images/happy-family-background.jpg'
    },
    {
      id: '03',
      category: 'Mobility',
      title: 'Car Rentals',
      headline: 'Drive with Confidence.',
      description: 'Whether you need reliable transport for business, family adventures, or exploring Kenya\'s stunning landscapes, our fleet of well-maintained vehicles and professional service ensure you travel safely.',
      ctaText: 'Rent with Us',
      backgroundImage: '/images/luxury-car-background.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm tracking-[0.3em] text-gray-500 font-light mb-6 uppercase">Our Services</div>
          <h2 className="text-5xl font-extralight mb-6 text-black">What We Do Best</h2>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>
        
        {/* Horizontal Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="group cursor-pointer">
              {/* Card with Background Image */}
              <div className="relative h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={service.backgroundImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-blue-900/80 group-hover:via-blue-900/40 group-hover:to-blue-900/20 transition-all duration-500"></div>
                
                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="text-xs tracking-[0.2em] text-blue-200 font-light uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 leading-tight">
                    {service.headline}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-100 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <button className="bg-white/20 hover:bg-white hover:text-black text-white px-6 py-3 text-sm font-light tracking-wider transition-all duration-300 uppercase rounded-full backdrop-blur-sm border border-white/30 hover:border-white">
                      {service.ctaText}
                    </button>
                    
                    {/* Arrow */}
                    <div className="w-10 h-10 bg-white/20 hover:bg-white group-hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white transition-colors duration-300">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
