import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { AnimatedStorySection } from '@/components/AnimatedStorySection';
import { AnimatedPhilosophySection } from '@/components/AnimatedPhilosophySection';
import { AnimatedPillarsSection } from '@/components/AnimatedPillarsSection';
import { AnimatedValuesSection } from '@/components/AnimatedValuesSection';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;


  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden">
          <div className="grid grid-cols-4 lg:grid-cols-6 h-full min-h-[500px] lg:min-h-[600px]">
            {/* Image 1 */}
            <div className="relative">
              <img 
                src="/images/tanzania.jpg" 
                alt="Tanzania" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 2 */}
            <div className="relative">
              <img 
                src="/images/fam.png" 
                alt="Family" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 3 */}
            <div className="relative">
              <img 
                src="/images/caar.png" 
                alt="Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 4 */}
            <div className="relative">
              <img 
                src="/images/tours.png" 
                alt="Tours" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 5 */}
            <div className="relative">
              <img 
                src="/images/Amboseli.png" 
                alt="Amboseli" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 6 */}
            <div className="relative">
              <img 
                src="/images/gorilla-trek.jpg" 
                alt="Gorilla Trek" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 7 */}
            <div className="relative">
              <img 
                src="/images/maasai.jpg" 
                alt="Maasai" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 8 */}
            <div className="relative">
              <img 
                src="/images/safari-pg.jpg" 
                alt="Safari" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 9 */}
            <div className="relative">
              <img 
                src="/images/nairobi-city.jpg" 
                alt="Nairobi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 10 */}
            <div className="relative">
              <img 
                src="/images/Diana Beach.jpg" 
                alt="Diana Beach" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 11 */}
            <div className="relative">
              <img 
                src="/images/car image.jpg" 
                alt="Car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            {/* Image 12 */}
            <div className="relative">
              <img 
                src="/images/insurance-family.jpg" 
                alt="Insurance Family" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="text-center text-white z-10">
              <h1 className="text-4xl lg:text-6xl font-light mb-6 leading-tight drop-shadow-lg">
                About Us
              </h1>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            </div>
          </div>
        </section>

        {/* The Eawestern Story */}
        <AnimatedStorySection />

        {/* Our Philosophy */}
        <AnimatedPhilosophySection />

        {/* The Eawestern Pillars of Trust */}
        <AnimatedPillarsSection />

        {/* Our Credentials & Licensing */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
                Our Credentials & Licensing
              </h2>
              <p className="text-gray-600">(will have logos for this)</p>
            </div>
            <div className="bg-white p-12 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-500">Logos placeholder - to be added</p>
            </div>
          </div>
        </section>

        {/* How We Deliver Value */}
        <AnimatedValuesSection />

      </main>
      <Footer />
    </div>
  );
}

