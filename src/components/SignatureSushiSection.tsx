import React from 'react';
import { Sparkles, Plus, Flame } from 'lucide-react';
import { SIGNATURE_ROLLS, MenuItem } from '../data/restaurantData';

interface SignatureSushiSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const SignatureSushiSection: React.FC<SignatureSushiSectionProps> = ({ onAddToCart }) => {
  return (
    <section id="signature-rolls" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Knife Creations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
            Signature Sushi Rolls
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto font-light leading-relaxed">
            Handcrafted with sustainably sourced fish, seasoned sushi rice, and house-made artisan glazes. Prepared fresh for every order.
          </p>
        </div>

        {/* 6 Signature Rolls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_ROLLS.map((roll) => (
            <div
              key={roll.id}
              className="group bg-[#131317] hover:bg-[#18181f] border border-white/10 hover:border-red-600/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden bg-zinc-900">
                <img
                  src={roll.image}
                  alt={roll.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent opacity-80" />

                {/* Subtle text tags (NO static pill badges per anti-slop guidelines) */}
                <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-medium tracking-wide">
                  {roll.chefSpecial && (
                    <span className="px-2.5 py-1 bg-amber-500/90 text-black font-semibold rounded shadow-md backdrop-blur-sm">
                      Chef's Special
                    </span>
                  )}
                  {roll.spicy && (
                    <span className="px-2.5 py-1 bg-red-600/90 text-white font-semibold rounded shadow-md backdrop-blur-sm flex items-center gap-1">
                      <Flame className="w-3 h-3" /> Spicy
                    </span>
                  )}
                </div>

                {roll.pieces && (
                  <span className="absolute bottom-3 right-3 text-xs text-zinc-300 font-mono bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {roll.pieces}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {roll.name}
                    </h3>
                    <span className="font-mono text-lg font-semibold text-[#c5a059] tabular-nums">
                      {roll.price}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {roll.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-400">
                    Handcrafted to order
                  </div>

                  <button
                    onClick={() => onAddToCart(roll)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-white/10 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95"
                    aria-label={`Add ${roll.name} to order`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Callout */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-300 hover:text-white border-b border-red-500 pb-1 hover:border-white transition-all font-semibold"
          >
            <span>Explore All Sushi, Nigiri & Hot Dishes Below</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};
