import React from 'react';
import { ArrowRight, Sparkles, Flame, Clock } from 'lucide-react';
import heroSushiImg from '../assets/images/hero_sushi_platter_1790813366015.jpg';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrder,
  onOpenReservation,
}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroSushiImg}
          alt="Artisanal sushi platter at Top Sushi"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim & Japanese Aesthetic Overlay for WCAG AA 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]/90 pointer-events-none" />
      </div>

      {/* Decorative Traditional Japanese Lattice / Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-zinc-300 font-medium">
            Artisanal Sushi & Korean Table Grill
          </span>
        </div>

        {/* Primary Headline with balanced wrap */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl mx-auto [text-wrap:balance]">
          Fresh Sushi. Bold Flavors.{' '}
          <span className="italic font-normal text-red-500">Unforgettable</span>{' '}
          Experience.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light mb-10 [text-wrap:balance]">
          {RESTAURANT_INFO.heroSubheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-14">
          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-8 py-4 bg-red-700 hover:bg-red-600 text-white text-xs uppercase tracking-widest font-bold rounded shadow-xl shadow-red-950/50 hover:shadow-red-800/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Order Online</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold rounded border border-white/20 hover:border-white/40 backdrop-blur-md transition-all flex items-center justify-center cursor-pointer"
          >
            View Menu
          </a>
        </div>

        {/* Proof / Quality Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 backdrop-blur-sm">
            <div className="w-9 h-9 rounded-md bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                Daily Fresh Fish
              </div>
              <div className="text-[11px] text-zinc-400">
                Direct sustainable market arrivals
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 backdrop-blur-sm">
            <div className="w-9 h-9 rounded-md bg-amber-950/60 border border-amber-600/40 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                Korean BBQ Tables
              </div>
              <div className="text-[11px] text-zinc-400">
                Smokeless tabletop searing
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-white/5 backdrop-blur-sm">
            <div className="w-9 h-9 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white uppercase tracking-wider">
                Open 7 Days
              </div>
              <div className="text-[11px] text-zinc-400">
                Lunch, Dinner & Late Dining
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-red-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
