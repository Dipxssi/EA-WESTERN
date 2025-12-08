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
      <div className="rounded-lg border-2 bg-gray-50 border-gray-200 text-gray-900 p-8 hover:shadow-lg active:shadow-xl active:shadow-blue-200 transition-shadow duration-200 h-full flex flex-col items-center text-center select-none">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-blue-100">
            <IconComponent className="text-blue-600" size={32} strokeWidth={2} />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
        <p className="text-gray-700">{value.description}</p>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-gray-900">
            How We Deliver Value?
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {values.slice(0, 3).map((value) => (
              <div key={value.title}>{renderCard(value)}</div>
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {values.slice(3, 5).map((value) => (
              <div key={value.title} className="w-full md:w-[calc((100%-3rem)/3)]">
                {renderCard(value)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

