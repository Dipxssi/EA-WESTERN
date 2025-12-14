"use client";

import { Shield, Award, Heart, CheckCircle2 } from 'lucide-react';

export function AnimatedValuesSection() {
  const values = [
    { title: 'Integrity', description: 'We keep our promises.', icon: Shield },
    { title: 'Excellence', description: 'Quality service — every time.', icon: Award },
    { title: 'Safety', description: 'Your security comes first.', icon: Shield },
    { title: 'Customer Care', description: 'We serve with heart.', icon: Heart },
    { title: 'Reliability', description: 'We deliver what we say we will.', icon: CheckCircle2 }
  ];

  const renderCard = (value: typeof values[number]) => {
    const IconComponent = value.icon;
    return (
      <div className="rounded-lg border-2 bg-gray-50 border-gray-200 text-gray-900 p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-lg active:shadow-xl active:shadow-blue-200 transition-shadow duration-200 h-full flex flex-col items-center text-center select-none">
        <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
          <div className="p-3 sm:p-3.5 md:p-4 rounded-full bg-blue-100">
            <IconComponent className="text-blue-600 sm:w-7 sm:h-7 md:w-8 md:h-8" size={24} strokeWidth={2} />
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
        <p className="text-sm sm:text-base text-gray-700">{value.description}</p>
      </div>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 text-gray-900 px-2">
            How We Deliver Value?
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {values.slice(0, 3).map((value) => (
              <div key={value.title}>{renderCard(value)}</div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row justify-center gap-4 sm:gap-5 md:gap-6">
            {values.slice(3, 5).map((value) => (
              <div key={value.title} className="w-full md:w-[calc((100%-1.5rem)/2)]">
                {renderCard(value)}
                        </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

