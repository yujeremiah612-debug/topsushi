import React from 'react';
import { Flame, Utensils, Sparkles, Check, ArrowRight } from 'lucide-react';
import kbbqImg from '../assets/images/korean_bbq_grill_spread_1790813391188.jpg';

interface KoreanBbqSectionProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenReservation: () => void;
}

export const KoreanBbqSection: React.FC<KoreanBbqSectionProps> = ({
  onSelectCategory,
  onOpenReservation,
}) => {
  return (
    <section id="korean-bbq" className="py-24 bg-[#0e0e12] relative overflow-hidden border-y border-white/5">
      {/* Decorative fiery ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features (6 Cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-bold mb-3">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Tabletop Culinary Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
              Japanese Sushi Meets Korean Grill
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Experience the best of both worlds. Top Sushi pairs delicate, cold-cut artisanal sushi with sizzling, hot-off-the-flame Korean barbecue for an unmatched feast of textures and flavors.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Gather around our state-of-the-art smokeless tabletop grill tables. Savor 48-hour marinated Galbi short ribs, prime ribeye bulgogi, and thick-cut Kurobuta pork belly, accompanied by complimentary house-made banchan side dishes and fresh perilla wraps.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Utensils className="w-4 h-4 text-amber-400" />
                  <span>Prime Marinated Cuts</span>
                </div>
                <p className="text-xs text-zinc-400">
                  USDA Prime beef short ribs & tender Berkshire pork belly sliced fresh daily.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Artisan Banchan Sides</span>
                </div>
                <p className="text-xs text-zinc-400">
                  House-fermented Napa kimchi, seasoned bean sprouts, pickled radish, and ssamjang.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Check className="w-4 h-4 text-red-500" />
                  <span>Sushi & BBQ Combos</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Custom pairing sets featuring signature rolls alongside sizzling grill platters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Smokeless Technology</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Downdraft ventilation keeps your dining environment fresh, elegant, and odor-free.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onSelectCategory('korean-bbq');
                  const menuEl = document.getElementById('menu');
                  if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-black font-bold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-amber-950/40 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore BBQ Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenReservation}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-widest rounded border border-white/20 hover:border-white/40 transition-colors cursor-pointer"
              >
                Reserve Grill Table
              </button>
            </div>
          </div>

          {/* Right Column: Large BBQ Feast Photo (6 Cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={kbbqImg}
                alt="Tabletop Korean BBQ feast with galbi beef and side dishes"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  Communal Tabletop Feast
                </div>
                <div className="text-sm font-medium text-white">
                  Galbi Short Ribs, Bulgogi, Crispy Pork Belly & Fresh Japanese Sushi
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
