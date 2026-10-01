import React from 'react';
import { Sparkles, Utensils, Flame, Users } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/restaurantData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'ChefHat':
        return <Utensils className="w-6 h-6 text-[#c5a059]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-red-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section className="py-24 bg-[#0d0d10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-red-500 font-bold mb-2">
            The Top Sushi Standard
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Why Choose Top Sushi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Our commitment to culinary precision and heartfelt hospitality in every single dish.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#141418] border border-white/5 hover:border-red-600/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-red-950/40 group-hover:border-red-700/40 transition-colors">
                {getIcon(item.icon)}
              </div>

              <h3 className="font-serif text-lg font-bold tracking-wide text-white mb-3 group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
