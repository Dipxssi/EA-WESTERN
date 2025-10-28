export function StatsSection() {
  const stats = [
    { number: '15+', label: 'YEARS' },
    { number: '5K+', label: 'TRAVELERS' },
    { number: '50+', label: 'DESTINATIONS' },
    { number: '24/7', label: 'SUPPORT' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-extralight mb-3 text-black">{stat.number}</div>
              <div className="text-sm tracking-[0.2em] text-gray-600 font-light uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
