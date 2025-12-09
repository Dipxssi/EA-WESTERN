"use client";

export function CredentialsSection() {
  const logos = [
    { src: "/images/Insurance eawestern image.webp", alt: "Insurance credential" },
    { src: "/images/tour eawestern logo.png", alt: "Tours credential" },
    { src: "/images/car about logo.png", alt: "Car hire credential" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            Our Credentials & Licensing
          </h2>
          <p className="text-gray-600">Partners and licenses we proudly hold</p>
        </div>
        <div className="bg-white p-10 rounded-lg border border-gray-200">
          <div className="relative overflow-hidden">
            <div className="flex animate-logo-slide gap-12 items-center">
              {[...logos, ...logos].map((logo, idx) => (
                <img
                  key={`${logo.alt}-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes logo-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-slide {
          width: max-content;
          animation: logo-slide 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-logo-slide {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}

