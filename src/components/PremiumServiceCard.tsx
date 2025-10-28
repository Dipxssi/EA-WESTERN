interface PremiumServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: string;
  priceLabel: string;
  features: string[];
  buttonText: string;
}

export function PremiumServiceCard({
  id,
  title,
  subtitle,
  image,
  price,
  priceLabel,
  features,
  buttonText
}: PremiumServiceCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-8 h-80 bg-gray-100 border border-gray-200 hover:border-gray-400 transition-all duration-300">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity duration-300"
          style={{ 
            backgroundImage: `url('${image}')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <div className="text-sm tracking-[0.2em] text-white font-light">{id}</div>
        </div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-light mb-2">{title}</h3>
          <div className="text-sm text-gray-200 font-light">{subtitle}</div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <span className="text-3xl font-extralight text-black">{price}</span>
          <span className="text-xs tracking-wide text-gray-500 uppercase">{priceLabel}</span>
        </div>
        
        <div className="space-y-4 text-sm text-gray-600">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <span className="font-light">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Updated button - solid blue hover red */}
        <button className="w-full bg-blue-500 hover:bg-red-700 text-white py-4 font-light tracking-widest text-sm transition-all duration-300 uppercase">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
