interface ServiceCardProps {
  id: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  ctaText: string;
  image: string;
  icon:  React.ReactNode;
  reversed?: boolean;
}

export function ServiceCard({ 
  id, 
  category, 
  title, 
  headline, 
  description, 
  ctaText, 
  image, 
  icon, 
  reversed = false 
}: ServiceCardProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}>
      {/* Content */}
      <div className={`${reversed ? 'lg:col-start-2' : ''}`}>
        <div className="mb-6">
          <div className="text-6xl mb-4">{icon}</div>
          <div className="text-sm tracking-[0.3em] text-gray-500 font-light uppercase mb-4">
            {id} • {category}
          </div>
          <h3 className="text-4xl font-extralight mb-6 text-black">{headline}</h3>
        </div>
        
        <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
          {description}
        </p>
        
        <button className="bg-blue-900 hover:bg-red-900 text-white px-8 py-3 font-light tracking-widest text-sm transition-all duration-300 uppercase">
          {ctaText}
        </button>
      </div>
      
      {/* Image */}
      <div className={`relative h-96 bg-gray-100 overflow-hidden ${reversed ? 'lg:col-start-1' : ''}`}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${image}')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <div className="text-sm tracking-[0.2em] text-white font-light">{id}</div>
        </div>
      </div>
    </div>
  );
}
