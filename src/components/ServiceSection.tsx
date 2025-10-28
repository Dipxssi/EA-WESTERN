import { ServiceCard } from './ServiceCard';

export function ServicesSection() {
  const services = [
    {
      id: '01',
      category: 'Adventure',
      title: 'Tours & Safaris',
      headline: 'Your East African Adventure Starts Here.',
      description: 'Imagine waking up to the roar of lions, walking the white beaches of Zanzibar, or watching the Great Migration unfold. With Eawestern, every journey is crafted with local expertise and personalized care — so you can explore East Africa without worry.',
      ctaText: 'Tour with Us',
      image: '/images/hero-kenya-bg.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paw-print-icon lucide-paw-print"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>
    },
    {
      id: '02', 
      category: 'Protection',
      title: 'Insurance',
      headline: 'Protection That\'s Personal.',
      description: 'Insurance isn\'t just about policies — it\'s about peace of mind. At Eawestern, we simplify the process by partnering with Kenya\'s most trusted insurers to bring you clear, affordable, and reliable coverage. Whether it\'s protecting your loved ones with life insurance, securing your vehicle, safeguarding your business, or staying covered wherever you travel — we help you choose what truly fits your life and walk with you through every step, including claims and renewals.',
      ctaText: 'Insure with Us',
      image: '/images/insurance-bg.png',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    },
    {
      id: '03',
      category: 'Mobility',
      title: 'Car Rentals',
      headline: 'Drive with Confidence.',
      description: 'Whether you need reliable transport for business, family adventures, or exploring Kenya\'s stunning landscapes, our fleet of well-maintained vehicles and professional service ensure you travel safely and comfortably.',
      ctaText: 'Rent with Us',
      image: '/images/luxury-car-background.jpg',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-sm tracking-[0.3em] text-gray-500 font-light mb-6 uppercase">Our Services</div>
          <h2 className="text-5xl font-extralight mb-6 text-black">What We Do Best</h2>
          <div className="w-24 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
