export const safariPackages = [
  {
    id: '1',
    title: {
      en: 'Maasai Mara Classic Safari',
      sw: 'Safari ya Kawaida ya Maasai Mara',
      fr: 'Safari Classique du Maasai Mara'
    },
    description: {
      en: 'Experience the Great Migration and Big Five in Kenya\'s most famous reserve',
      sw: 'Ona Uhamiaji Mkuu na Wanyamapori Wakuu katika hifadhi maarufu zaidi ya Kenya'
    },
    price: 299,
    duration: 3,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
    difficulty: 'Easy',
    includes: ['Professional guide', 'Park fees', 'Accommodation', 'All meals']
  },
  {
    id: '2',
    title: {
      en: 'Amboseli Elephant Safari',
      sw: 'Safari ya Tembo Amboseli',
      fr: 'Safari des Éléphants d\'Amboseli'
    },
    description: {
      en: 'Get up close with elephants with Mount Kilimanjaro backdrop',
      sw: 'Karibu na tembo na mandhari ya Mlima Kilimanjaro'
    },
    price: 399,
    duration: 4,
    maxGuests: 4,
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
    difficulty: 'Moderate',
    includes: ['Expert guide', 'Park fees', 'Lodge accommodation', 'Game drives']
  },
  {
    id: '3',
    title: {
      en: 'Tsavo Adventure Safari',
      sw: 'Safari ya Uchunguzi Tsavo',
      fr: 'Safari d\'Aventure Tsavo'
    },
    description: {
      en: 'Explore Kenya\'s largest national park with red elephants',
      sw: 'Chunguza hifadhi kubwa zaidi ya Kenya na tembo wekundu'
    },
    price: 459,
    duration: 5,
    maxGuests: 8,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
    difficulty: 'Challenging',
    includes: ['Wildlife expert', 'All park fees', 'Camping', 'Equipment provided']
  }
];

export const insurancePlans = [
  {
    id: '1',
    type: 'Travel Insurance',
    coverage: {
      en: 'Medical emergencies, trip cancellation, lost luggage',
      sw: 'Dharura za kimatibabu, kufutwa kwa safari, mizigo iliyopotea'
    },
    price: 49,
    duration: 30,
    features: [
      'Medical coverage up to $100,000',
      'Trip cancellation protection',
      '24/7 emergency assistance',
      'Lost luggage compensation'
    ]
  },
  {
    id: '2',
    type: 'Vehicle Insurance',
    coverage: {
      en: 'Collision, theft, roadside assistance',
      sw: 'Ajali, wizi, msaada wa barabarani'
    },
    price: 25,
    duration: 7,
    features: [
      'Comprehensive coverage',
      'Roadside assistance',
      'Theft protection',
      'Accident coverage'
    ]
  },
  {
    id: '3',
    type: 'Health Insurance',
    coverage: {
      en: 'Medical treatment, hospital stays, medication',
      sw: 'Matibabu, kulala hospitalini, dawa'
    },
    price: 89,
    duration: 30,
    features: [
      'Full medical coverage',
      'Hospital stays covered',
      'Prescription medications',
      'Emergency evacuation'
    ]
  }
];

export const vehicles = [
  {
    id: '1',
    name: 'Toyota Land Cruiser 4WD',
    type: 'Safari Vehicle',
    pricePerDay: 89,
    capacity: 7,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    features: [
      'Pop-up roof for game viewing',
      'GPS navigation',
      'First aid kit',
      'Unlimited mileage'
    ]
  },
  {
    id: '2',
    name: 'Toyota Corolla',
    type: 'City Car',
    pricePerDay: 45,
    capacity: 5,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800',
    features: [
      'Air conditioning',
      'GPS navigation',
      'Fuel efficient',
      'Airport pickup available'
    ]
  },
  {
    id: '3',
    name: 'Toyota Hiace Van',
    type: 'Group Transport',
    pricePerDay: 120,
    capacity: 14,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
    features: [
      'Large group capacity',
      'Comfortable seating',
      'Air conditioning',
      'Professional driver included'
    ]
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'USA',
    service: 'Safari Tours',
    rating: 5,
    review: 'Amazing Maasai Mara experience! Professional guides and seamless booking process.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    country: 'Singapore',
    service: 'Insurance',
    rating: 5,
    review: 'Quick claim processing when I needed medical assistance. Excellent coverage!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: '3',
    name: 'Emma Brown',
    country: 'UK',
    service: 'Car Hire',
    rating: 5,
    review: 'Reliable 4WD for our self-drive safari. Well-maintained and great support!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  }
];
