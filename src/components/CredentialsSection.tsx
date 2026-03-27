"use client";

export function CredentialsSection() {
  const logos = [
    { src: "/images/Insurance eawestern image.webp", alt: "Insurance credential" },
    { src: "/images/tour eawestern logo.png", alt: "Tours credential" },
    { src: "/images/car about logo.png", alt: "Car hire credential" },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent border-t border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="uppercase-label mb-4 opacity-50">
            Licensed, Certified & Trusted
          </div>
          <h2 className="serif text-[22px] md:text-[34px] text-white">
            We operate under full regulatory compliance across insurance, transport, and tourism-ensuring every service meets the highest standards of safety, compliance, and accountability.
          </h2>
        </div>

        <div className="relative overflow-hidden w-full max-w-[800px] mx-auto">
          {/* Fading edges for the slider */}
          <div className="absolute top-0 left-0 w-[50px] md:w-[150px] h-full bg-gradient-to-r from-[#0d1b2e] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[50px] md:w-[150px] h-full bg-gradient-to-l from-[#0d1b2e] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-[logo-slide_20s_linear_infinite] gap-16 md:gap-24 items-center w-max">
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-[70px] md:h-[100px] w-auto object-contain shrink-0 opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
