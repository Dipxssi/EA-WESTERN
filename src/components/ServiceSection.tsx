import Link from 'next/link';

type ServicesSectionProps = {
  locale?: string;
};

export function ServicesSection({ locale = 'en' }: ServicesSectionProps) {
  const services = [
    {
      id: '01',
      title: 'Tours & Safaris',
      headline: 'Your East African Adventure Starts Here.',
      subtitle: 'Explore the World\'s Greatest Wilderness',
      description: 'From the Great Migration in the Maasai Mara to the spice beaches of Zanzibar, our expertly curated safaris are planned for maximum thrill and minimum stress. We handle the logistics; you collect the memories.',
      ctaText: 'See All Tours & Safaris',
      backgroundImage: '/images/tours.png',
      href: `/${locale}/safaris`
    },
    {
      id: '02', 
      title: 'Insurance',
      headline: 'Protection for What Matters Most—Simplified',
      subtitle: '',
      description: 'End the policy confusion. As licensed Kenyan insurance experts, we provide tailored, transparent coverage for your life, health, business, and assets. We negotiate for you and manage your claims in-house.',
      ctaText: 'View Details',
      backgroundImage: '/images/fam.png',
      href: `/${locale}/insurance`
    },
    {
      id: '03',
      title: 'Car Rentals',
      headline: 'Drive East Africa with Uncompromised Reliability',
      subtitle: '',
      description: 'Whether you\'re landing in Kenya for business, need a weekend getaway ride, or want a long-term corporate lease, our cars are ready, safe, and fully maintained. Choose from SUVs, saloons, vans, and executive vehicles.',
      ctaText: 'View Available Fleet',
      backgroundImage: '/images/caar.png',
      href: `/${locale}/vehicles`
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-black leading-tight">
            <div>The Eawestern Guarantee</div>
            <div className="text-3xl lg:text-4xl">Three Services, One Unwavering Promise</div>
          </h2>
          <div className="w-24 h-px bg-black mx-auto mt-6"></div>
        </div>
        
        {/* Service Cards with Image on Top */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col">
              {/* Image on Top */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src={service.backgroundImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* White Background Text Section */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                {/* Service Title */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                
                {/* Headline */}
                <h4 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800 leading-tight">
                  {service.headline}
                </h4>
                
                {/* Subtitle if exists */}
                {service.subtitle && (
                  <p className="text-sm lg:text-base text-gray-500 mb-4 italic">
                    {service.subtitle}
                  </p>
                )}
                
                {/* Description */}
                <p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <div className="flex justify-center mt-auto">
                  <Link 
                    href={service.href}
                    className="bg-blue-900 hover:bg-red-900 active:bg-red-900 text-white px-6 py-3 text-base font-medium transition-all duration-300 rounded-full shadow-md uppercase tracking-wide inline-block text-center"
                  >
                    {service.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
