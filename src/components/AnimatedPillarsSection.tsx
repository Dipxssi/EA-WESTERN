"use client";

export function AnimatedPillarsSection() {
  const pillars = [
    {
      title: 'Integrated Local Expertise',
      description: 'Our team combines F&B (Travel), Finance (Insurance), and Logistics (Car Hire) experts—all locally fluent—to give you an advantage no single-service company can match.',
      image: '/images/card1.png'
    },
    {
      title: 'Proactive Claims & Support',
      description: 'When others stall, we advocate. We see our role as actively securing your peace of mind, not passively providing a service.',
      image: '/images/card2.png'
    },
    {
      title: 'Commitment to East Africa',
      description: 'We are a licensed Kenyan company, deeply invested in sustainable tourism, community support, and providing local employment.',
      image: '/images/card3.png'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            The Eawestern Pillars of Trust
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border-2 bg-blue-50 border-blue-200 hover:shadow-lg text-gray-900 transition-all duration-300"
            >
              <div className="mb-6">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{pillar.title}</h3>
              <p className="leading-relaxed text-gray-700">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

