export function AboutSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-5xl font-extralight mb-8 text-black">
              Your Journey, Our Promise.
            </h2>
            <div className="w-24 h-px bg-black mb-8"></div>
            
            <div className="space-y-6 text-lg font-light text-gray-700 leading-relaxed">
              <p>
                At Eawestern, we believe every journey deserves confidence — whether you&apos;re exploring 
                East Africa&apos;s wild beauty, protecting what matters most, or simply getting where you need to go.
              </p>
              
              <p>
                We began with one mission: to make travel, insurance, and mobility effortless for everyone. 
                Today, we connect adventurers, families, and businesses to trusted experiences and reliable 
                solutions across the region.
              </p>
              
              <p>
                Rooted in local expertise and guided by global standards, we&apos;ve earned a reputation for 
                transparency, reliability, and personal care. From tailor-made safaris to car rentals and 
                insurance support — we&apos;re with you every step of the way.
              </p>
            </div>
            
          </div>

          {/* Hero Image Side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] bg-gray-200 overflow-hidden rounded-sm">
              <img 
                src="/images/eawestern-hero.jpg"
                alt="EA Western - Your Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-sm shadow-lg">
                <div className="text-black font-light text-sm">
                  🏆 Trusted by 5,000+ travelers across East Africa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
