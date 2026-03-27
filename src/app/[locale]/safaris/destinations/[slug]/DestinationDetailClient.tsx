"use client";

import { SafariNavigation } from '@/components/SafariNavigation';
import { SafariFooter } from '@/components/SafariFooter';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type DestinationDetail = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  heroHeadline: string;
  heroSubtext: string;
  quickInfo: {
    location: string;
    bestTime: string;
    idealFor: string;
  };
  overview: string;
  itinerary: { day: string; items: string[] }[];
  wildlife: string[];
  accommodation: string[];
  logistics: string[];
  responsible: string[];
  included: string[];
  notIncluded: string[];
  customization: string[];
  faq: { q: string; a: string }[];
  gallery?: string[];
};

const destinationDetails: DestinationDetail[] = [
  {
    slug: 'maasai-mara',
    title: 'Maasai Mara Classic Safari',
    duration: '3 Days / 2 Nights',
    image: '/images/masai mara.png',
    gallery: ['/images/masai mara.png', '/images/card1.png', '/images/card2.png'],
    heroHeadline: 'Experience the Maasai Mara with Clarity and Precision',
    heroSubtext:
      'A well-structured safari through one of Africa\'s most iconic wildlife reserves-designed for optimal game viewing, comfort, and seamless logistics.',
    quickInfo: {
      location: 'Maasai Mara, Kenya',
      bestTime: 'July-October (Migration), Year-round wildlife',
      idealFor: 'First-time visitors · Wildlife enthusiasts · Short getaways',
    },
    overview:
      'This 3-day Maasai Mara safari is designed to maximize wildlife viewing within a short timeframe. With structured game drives and carefully selected routes, you experience the reserve efficiently without unnecessary travel fatigue.',
    itinerary: [
      { day: 'Day 1 - Nairobi to Maasai Mara', items: ['Early departure from Nairobi', 'Scenic drive through the Rift Valley', 'Arrival at lodge/camp for lunch', 'Afternoon game drive', 'Dinner and overnight stay'] },
      { day: 'Day 2 - Full-Day Game Drives', items: ['Morning and afternoon game drives', 'Optional full-day safari with packed lunch', 'Focus on Big Five tracking and migration routes', 'Guided by experienced local professionals'] },
      { day: 'Day 3 - Return to Nairobi', items: ['Optional early morning game drive', 'Breakfast and departure', 'Return to Nairobi by afternoon'] },
    ],
    wildlife: ['Lions, elephants, buffalo, giraffes', 'Cheetahs and hyenas', 'Seasonal wildebeest migration', 'Diverse birdlife'],
    accommodation: ['Mid-range lodges', 'Luxury tented camps', 'Premium eco-lodges'],
    logistics: ['4x4 safari Land Cruiser (pop-up roof)', 'Professional driver-guide', 'Fuel, park fees, and logistics managed'],
    responsible: ['Respect for wildlife viewing distances', 'Use of designated park routes', 'Support for local communities and conservation-aligned lodges'],
    included: ['Transport in 4x4 safari vehicle', 'Accommodation (2 nights)', 'Meals (Full Board)', 'Park entry fees', 'Professional guide'],
    notIncluded: ['International flights', 'Personal expenses', 'Optional activities (e.g., balloon safari)', 'Tips and gratuities'],
    customization: ['Extend duration', 'Upgrade accommodation', 'Add a beach extension (e.g., Diani)', 'Combine with other destinations'],
    faq: [
      { q: 'Is this safari suitable for first-time visitors?', a: 'Yes, it is one of the best short safaris for first-time travelers.' },
      { q: 'When is the best time to visit?', a: 'July to October for the Great Migration, with wildlife visible year-round.' },
      { q: 'Can I customize this itinerary?', a: 'Yes, all our safaris can be tailored to your preferences.' },
    ],
  },
  {
    slug: 'serengeti',
    title: 'Serengeti Explorer Safari',
    duration: '5 Days / 4 Nights',
    image: '/images/serengeti.png',
    gallery: ['/images/serengeti.png', '/images/Crater.png', '/images/card3.png'],
    heroHeadline: 'Explore the Serengeti with Structured Flow and Comfort',
    heroSubtext: 'A balanced safari across the Serengeti ecosystem, built for strong wildlife encounters, practical pacing, and reliable execution.',
    quickInfo: {
      location: 'Serengeti, Tanzania',
      bestTime: 'June-October for peak game viewing',
      idealFor: 'Wildlife-focused travelers · Repeat safari guests',
    },
    overview: 'This safari combines long-view game drives and strategic lodge positioning to reduce backtracking while increasing viewing quality.',
    itinerary: [
      { day: 'Day 1 - Arrival and transfer', items: ['Arrival and road/air transfer', 'Check-in and briefing', 'Sunset game drive'] },
      { day: 'Day 2-4 - Guided game circuits', items: ['Morning and afternoon drives', 'Migration and predator tracking', 'Flexible route adjustments'] },
      { day: 'Day 5 - Departure', items: ['Breakfast and checkout', 'Transfer to onward destination'] },
    ],
    wildlife: ['Lions, cheetahs, leopards', 'Large herbivore herds', 'Seasonal migration corridors'],
    accommodation: ['Mid-range and premium camps', 'Eco-lodges in key wildlife zones'],
    logistics: ['4x4 game vehicle', 'Professional guide', 'All core coordination included'],
    responsible: ['Conservation-aligned routing', 'Low-impact lodge partners', 'Regulation-compliant game driving'],
    included: ['Transport and game drives', 'Accommodation', 'Meals', 'Park fees', 'Guide services'],
    notIncluded: ['International flights', 'Visa and insurance', 'Personal expenses'],
    customization: ['Add Ngorongoro extension', 'Upgrade camp level', 'Adjust pace by adding rest night'],
    faq: [
      { q: 'Can this include Ngorongoro?', a: 'Yes, we can combine Serengeti with Ngorongoro seamlessly.' },
      { q: 'Is this family-friendly?', a: 'Yes, with age-appropriate pacing and suitable camps.' },
    ],
  },
  {
    slug: 'amboseli',
    title: 'Amboseli Scenic Safari',
    duration: '2 Days / 1 Night',
    image: '/images/Amboseli.png',
    gallery: ['/images/Amboseli.png', '/images/caar.png', '/images/fam.png'],
    heroHeadline: 'See Amboseli with Clear Views and Efficient Timing',
    heroSubtext: 'A short safari built around elephant herds, Kilimanjaro backdrops, and practical route planning.',
    quickInfo: {
      location: 'Amboseli, Kenya',
      bestTime: 'Year-round with best mountain visibility in dry periods',
      idealFor: 'Photography travelers · Short weekend escapes',
    },
    overview: 'Amboseli is ideal for short-format safaris. We focus on the best viewing windows to deliver strong sightings without unnecessary transit.',
    itinerary: [
      { day: 'Day 1 - Transfer and afternoon drive', items: ['Morning departure', 'Check-in and lunch', 'Sunset game drive'] },
      { day: 'Day 2 - Morning drive and return', items: ['Early game drive', 'Breakfast and return transfer'] },
    ],
    wildlife: ['Elephant herds', 'Buffalo, giraffe, zebra', 'Wetland birdlife'],
    accommodation: ['Comfort lodges', 'Premium safari camps'],
    logistics: ['4x4 vehicle', 'Guide and park logistics managed'],
    responsible: ['Park-route compliance', 'Wildlife-distance protocol'],
    included: ['Transport', 'Accommodation', 'Meals', 'Park fees', 'Guide'],
    notIncluded: ['Flights', 'Tips', 'Optional activities'],
    customization: ['Add extra night', 'Connect to Maasai Mara or Diani'],
    faq: [{ q: 'Is two days enough?', a: 'Yes, for a focused scenic and elephant-centered safari.' }],
  },
  {
    slug: 'gorilla-trekking',
    title: 'Uganda Gorilla Trekking Safari',
    duration: '3 Days / 2 Nights',
    image: '/images/gorilla-trek.jpg',
    gallery: ['/images/gorilla-trek.jpg', '/images/contact.png', '/images/card2.png'],
    heroHeadline: 'Track Mountain Gorillas with Expert Local Coordination',
    heroSubtext: 'A guided trekking experience designed for safety, compliance, and meaningful wildlife encounters.',
    quickInfo: {
      location: 'Bwindi Highlands, Uganda',
      bestTime: 'Year-round with ideal trekking windows in drier months',
      idealFor: 'Adventure travelers · Bucket-list wildlife seekers',
    },
    overview: 'This itinerary focuses on permit-backed gorilla trekking supported by experienced local teams and practical logistics.',
    itinerary: [
      { day: 'Day 1 - Arrival and transfer', items: ['Regional transfer', 'Lodge check-in', 'Trek preparation briefing'] },
      { day: 'Day 2 - Gorilla trekking day', items: ['Early briefing', 'Guided gorilla trek', 'Return and recovery'] },
      { day: 'Day 3 - Departure', items: ['Optional nature walk', 'Transfer to onward destination'] },
    ],
    wildlife: ['Mountain gorillas', 'Forest birdlife', 'Primates and highland fauna'],
    accommodation: ['Forest lodges', 'Comfort and premium eco-camps'],
    logistics: ['Permit handling', 'Ground transport', 'Guide support'],
    responsible: ['Strict trekking guidelines', 'Minimal group impact', 'Community-aligned partners'],
    included: ['Ground transport', 'Accommodation', 'Meals', 'Guide support', 'Permit coordination assistance'],
    notIncluded: ['International flights', 'Permit fee where applicable', 'Personal items'],
    customization: ['Add Rwanda or Kenya extension', 'Upgrade lodge category'],
    faq: [
      { q: 'How difficult is the trek?', a: 'Difficulty varies by gorilla family location, and guides adapt pace to group needs.' },
      { q: 'Do I need a permit?', a: 'Yes, permits are required and should be secured in advance.' },
    ],
  },
  {
    slug: 'diani',
    title: 'Diani Coast Extension',
    duration: '4 Days / 3 Nights',
    image: '/images/Diana Beach.jpg',
    gallery: ['/images/Diana Beach.jpg', '/images/card3.png', '/images/map.png'],
    heroHeadline: 'Unwind on the Coast with Flexible, Light Activities',
    heroSubtext: 'A beach extension that complements your safari with recovery time, optional excursions, and seamless transfers.',
    quickInfo: {
      location: 'Diani, Kenya Coast',
      bestTime: 'Year-round',
      idealFor: 'Relaxation · Honeymooners · Post-safari recovery',
    },
    overview: 'Diani provides a calm close to a safari circuit, with optional activity layers depending on your preferred pace.',
    itinerary: [
      { day: 'Day 1 - Arrival and check-in', items: ['Transfer to coast', 'Resort check-in and leisure'] },
      { day: 'Day 2-3 - Flexible beach days', items: ['Snorkeling or reef trip', 'Sunset dhow option', 'Spa and downtime'] },
      { day: 'Day 4 - Departure', items: ['Breakfast and transfer'] },
    ],
    wildlife: ['Coastal marine life', 'Coral reef ecosystems'],
    accommodation: ['Beach resorts', 'Boutique coastal lodges'],
    logistics: ['Airport/rail transfers', 'Local activity support'],
    responsible: ['Reef-friendly activity partners', 'Coastal community support'],
    included: ['Transfers', 'Accommodation', 'Selected meals'],
    notIncluded: ['Optional water activities', 'Personal expenses'],
    customization: ['Shorten/extend stay', 'Add private excursions'],
    faq: [{ q: 'Can this be added after any safari?', a: 'Yes, Diani can be integrated after Kenya or regional safari routes.' }],
  },
];

export default function DestinationDetailClient({ locale, slug }: { locale: string; slug: string }) {
  const destination = destinationDetails.find((d) => d.slug === slug);
  if (!destination) notFound();
  const gallery = (destination.gallery && destination.gallery.length > 0)
    ? destination.gallery
    : [destination.image, '/images/safari-pg.jpg', '/images/tour1.jpg'];
  const cardImages = [
    '/images/caar.png',
    '/images/fam.png',
    '/images/contact.png',
    '/images/card1.png',
    '/images/card2.png',
    '/images/card3.png',
    '/images/Crater.png',
  ];
  const detailSections = [
    { title: 'What You\'ll See', items: destination.wildlife },
    { title: 'Where You\'ll Stay', items: destination.accommodation },
    { title: 'How You\'ll Travel', items: destination.logistics },
    { title: 'Our Approach', items: destination.responsible },
    { title: 'Included', items: destination.included },
    { title: 'Not Included', items: destination.notIncluded },
    { title: 'Make It Your Own', items: destination.customization },
  ];

  return (
    <div className="theme-safari bg-[var(--color-cream)] text-[#333] min-h-screen font-sans w-full overflow-x-hidden">
      <SafariNavigation locale={locale} />
      <main className="w-full pt-20">
        <section className="relative bg-[var(--color-deep-green)] text-[var(--color-cream)]">
          <img src={destination.image} alt={destination.title} className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[var(--color-deep-green)]/95" />
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-[110px]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">{destination.title}</p>
            <h1 className="font-playfair text-[38px] md:text-[56px] leading-tight max-w-[780px] mb-6">{destination.heroHeadline}</h1>
            <p className="max-w-[760px] text-[15px] text-white/85 leading-[1.8] font-light mb-8">{destination.heroSubtext}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/safaris/contact`} className="border border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] transition-colors">
                Request a Consultation
              </Link>
              <a href="#itinerary" className="border border-white/30 text-white px-6 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-white/10 transition-colors">
                View Full Itinerary
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[13px]">
            <div className="bg-white border border-black/10 p-4"><b>Duration:</b> {destination.duration}</div>
            <div className="bg-white border border-black/10 p-4"><b>Location:</b> {destination.quickInfo.location}</div>
            <div className="bg-white border border-black/10 p-4"><b>Best Time:</b> {destination.quickInfo.bestTime}</div>
            <div className="bg-white border border-black/10 p-4"><b>Ideal For:</b> {destination.quickInfo.idealFor}</div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-14">
          <h2 className="font-playfair text-[28px] md:text-[34px] text-[var(--color-deep-green)] mb-5">Visual Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {gallery.map((image, idx) => (
              <div key={`${image}-${idx}`} className="relative h-[220px] rounded-[8px] overflow-hidden border border-black/10 bg-[var(--color-deep-green)]">
                <img
                  src={image}
                  alt={`${destination.title} highlight ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/map.png'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16">
          <h2 className="font-playfair text-[32px] text-[var(--color-deep-green)] mb-4">What This Safari Offers</h2>
          <p className="text-[15px] text-[#6a5040] leading-[1.8] font-light">{destination.overview}</p>
        </section>

        <section id="itinerary" className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16">
          <h2 className="font-playfair text-[32px] text-[var(--color-deep-green)] mb-6">Itinerary</h2>
          <div className="space-y-6">
            {destination.itinerary.map((d) => (
              <div key={d.day} className="bg-white border border-black/10 p-6">
                <h3 className="font-playfair text-[24px] text-[var(--color-deep-green)] mb-3">{d.day}</h3>
                <ul className="space-y-2">
                  {d.items.map((item) => (
                    <li key={item} className="text-[14px] text-[#6a5040]">- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[280px] rounded-[8px] overflow-hidden border border-black/10 bg-[var(--color-deep-green)]">
            <img
              src={gallery[1] || destination.image}
              alt={`${destination.title} wildlife`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = destination.image; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-playfair text-[26px] text-white mb-1">Wildlife & Experience</h3>
              <p className="text-white/85 text-[14px]">Designed for stronger sightings with practical pacing and expert guiding.</p>
            </div>
          </div>
          <div className="relative h-[280px] rounded-[8px] overflow-hidden border border-black/10 bg-[var(--color-deep-green)]">
            <img
              src={gallery[2] || destination.image}
              alt={`${destination.title} accommodation`}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = destination.image; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-playfair text-[26px] text-white mb-1">Accommodation & Comfort</h3>
              <p className="text-white/85 text-[14px]">Handpicked stays aligned to route flow, comfort, and responsible operations.</p>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {detailSections.map((section, idx) => (
            <div key={section.title} className="bg-white border border-black/10 p-6">
              <div className="relative h-[140px] rounded-[6px] overflow-hidden border border-black/10 bg-[var(--color-deep-green)] mb-5">
                <img
                  src={cardImages[idx % cardImages.length]}
                  alt={`${destination.title} ${section.title}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = destination.image; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <h3 className="font-playfair text-[24px] text-[var(--color-deep-green)] mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-[14px] text-[#6a5040]">- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="max-w-[1200px] mx-auto px-6 md:px-10 pb-20">
          <h2 className="font-playfair text-[32px] text-[var(--color-deep-green)] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {destination.faq.map((item) => (
              <div key={item.q} className="bg-white border border-black/10 p-5">
                <h4 className="font-medium text-[16px] text-[var(--color-deep-green)] mb-2">{item.q}</h4>
                <p className="text-[14px] text-[#6a5040]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--color-deep-green)] text-center py-16 px-6">
          <h2 className="font-playfair text-[36px] text-[var(--color-cream)] mb-4">Start Planning Your Safari</h2>
          <p className="text-[var(--color-sand)] max-w-[680px] mx-auto mb-8 text-[15px] font-light">
            Let us help you plan a seamless safari experience tailored to your schedule and travel style.
          </p>
          <Link href={`/${locale}/safaris/contact`} className="inline-block border border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-3 text-[10px] uppercase tracking-[0.18em] hover:bg-[var(--color-gold)] hover:text-[var(--color-deep-green)] transition-colors">
            Request a Consultation
          </Link>
        </section>
      </main>
      <SafariFooter />
    </div>
  );
}
