import React, { useState } from 'react';
import { Award, Compass, HeartHandshake, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import interiorImg from '../assets/images/restaurant_ambiance_interior_1790813378775.jpg';

export const IntroSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#0e0e11] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Restaurant Photography & Visual Accent (7 Cols on desktop) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={interiorImg}
                alt="Top Sushi modern dining room and sushi bar"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Bottom Caption Pill-less overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-1">
                  Authentic Hospitality
                </div>
                <div className="text-sm font-medium text-white">
                  Intimate sushi bar seating & modern smokeless Korean grill tables.
                </div>
              </div>
            </div>

            {/* Decorative Gold Border Badge */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c5a059]/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c5a059]/40 rounded-br-xl pointer-events-none" />
          </div>

          {/* Right Column: Text & Culinary Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
              <span>Our Culinary Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
              Welcome to Top Sushi
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              At Top Sushi, culinary passion meets master craftsmanship. We honor the deep traditions of Japanese knife techniques and rice seasoning while celebrating the vibrant, communal warmth of Korean barbecue grill tables.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Every cut of sashimi is carefully inspected for pristine quality, every roll is rolled to order, and every marinade is slow-simmered in-house. Whether you are joining us for an intimate omakase-style sushi dinner, a lively family feast around our sizzling Korean grills, or enjoying takeout at home, our mission is pure culinary delight.
            </p>

            {/* Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    Fresh Ingredients
                  </h4>
                  <p className="text-xs text-zinc-400 leading-snug">
                    Highest-grade fish, crisp produce, and premium Koshihikari sushi rice.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    Carefully Prepared
                  </h4>
                  <p className="text-xs text-zinc-400 leading-snug">
                    Artisan knife craft ensuring perfect texture, temperature, and savor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    Authentic Flavors
                  </h4>
                  <p className="text-xs text-zinc-400 leading-snug">
                    Traditional dashi, aged nikiri soy, house banchan, and balanced sauces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    Friendly Atmosphere
                  </h4>
                  <p className="text-xs text-zinc-400 leading-snug">
                    Attentive, welcoming service for date nights, celebrations, and families.
                  </p>
                </div>
              </div>
            </div>

            {/* Expandable Philosophy details */}
            {expanded && (
              <div className="p-5 rounded-xl bg-zinc-900/90 border border-white/10 mb-8 space-y-3 text-sm text-zinc-300 animate-in fade-in slide-in-from-top-4 duration-300">
                <h4 className="font-serif text-lg text-white font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-400" /> The Top Sushi Philosophy
                </h4>
                <p className="text-xs leading-relaxed text-zinc-400">
                  Our head chef brings over two decades of culinary mastery across Tokyo and Seoul. We believe great food begins with respect: respect for the ocean, respect for the fire, and respect for our guests who honor us with their table.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-red-400 font-semibold block mb-0.5">Sushi Principle</span>
                    Strict temperature control so fish melts smoothly upon tasting.
                  </div>
                  <div className="p-2.5 rounded bg-black/40 border border-white/5">
                    <span className="text-amber-400 font-semibold block mb-0.5">Grill Principle</span>
                    Prime beef cut to ideal thickness for fast tabletop caramelization.
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-xs font-semibold uppercase tracking-widest text-white rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>{expanded ? 'Show Less' : 'Learn More'}</span>
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
