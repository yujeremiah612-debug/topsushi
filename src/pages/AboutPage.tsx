import React from 'react';
import { Award, Compass, HeartHandshake, ShieldCheck, Sparkles, Flame, Users, ArrowRight } from 'lucide-react';
import interiorImg from '../assets/images/restaurant_ambiance_interior_1790813378775.jpg';
import heroSushiImg from '../assets/images/hero_sushi_platter_1790813366015.jpg';
import kbbqImg from '../assets/images/korean_bbq_grill_spread_1790813391188.jpg';
import { PageType } from '../types/navigation';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-[#0a0a0c] min-h-screen text-slate-100">
      {/* Page Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={interiorImg}
            alt="Top Sushi restaurant interior"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/90 to-[#0a0a0c]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Two Culinary Traditions In One Sanctuary</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            The Story of Top Sushi
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Where centuries of revered Japanese sushi knife artistry harmonize with the spirited, convivial warmth of Korean tabletop barbecue.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              A Balance of Silence & Sizzle
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Top Sushi was founded with a single uncompromising vision: to create a dining haven where lovers of precision Japanese sushi and enthusiasts of Korean tabletop barbecue never have to compromise.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              At one end of our dining room, master sushi chefs practice the silent, meditative precision of <em className="text-zinc-200">Edomae</em> sushi, hand-slicing bluefin tuna with single-stroke Yanagiba knives and hand-pressing seasoned warm rice. At the other end, guests gather around custom smokeless tabletop grills, enjoying the crackle of marinated Galbi short ribs and the savory perfume of toasted sesame oil.
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <span className="text-xs font-semibold text-[#c5a059] block">
                  Our Culinary Motto
                </span>
                <p className="text-xs italic text-zinc-300">
                  "Respect the ocean's freshness; honor the grill's flame; delight every guest who sits at our table."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={heroSushiImg}
                alt="Sushi platter knife craft"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <span className="text-xs uppercase tracking-wider text-red-400 font-bold block">
                  Handcrafted Daily
                </span>
                <span className="text-sm font-medium text-white">
                  Sustainable market fish sliced fresh for every single order.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-red-500 font-bold block mb-2">
              Our Principles
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Pillars Behind Every Plate
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Pristine Sourcing
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fish flown in from Tokyo's Toyosu market and sustainable North Pacific fisheries. Sliced with surgical knife precision.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-600/40 flex items-center justify-center text-amber-400 mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                48-Hour Marinades
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Our Korean barbecue marinades simmer with grated Asian pears, roasted garlic, and toasted sesame to tenderize prime cuts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-zinc-200 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Koshihikari Rice
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Cooked in dashi-infused water, lightly seasoned with aged red vinegar, and served at human body temperature (hada-hada).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
              <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Omotenashi Hospitality
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Heartfelt Japanese hospitality that anticipates your dining needs before you even ask, whether solo or in group celebrations.
              </p>
            </div>
          </div>
        </div>

        {/* Korean BBQ & Ambiance Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={kbbqImg}
                alt="Korean BBQ tabletop spread"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block">
              Smokeless Dining Comfort
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              State-of-the-Art Tabletop Grilling
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed font-light">
              We invested in premium Japanese downdraft smokeless grills that pull all fumes downward through high-performance filtration before smoke can ever enter the dining room.
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              This means you enjoy the full flavor and joy of live grilling with your clothes remaining fresh and the air crisp, serene, and clean throughout your entire meal.
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => {
                  onNavigate('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer"
              >
                View Menu
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-widest rounded border border-white/20 transition-all cursor-pointer"
              >
                Book a Table
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
