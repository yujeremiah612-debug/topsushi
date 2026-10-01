import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0e0e12] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-red-500 font-bold mb-2">
              Guest Testimonials
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              What Our Guests Say
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Real dining experiences from our valued guests. Replaceable with live Google Reviews.
            </p>
          </div>

          {/* Google Review Badge Simulation */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm self-start md:self-auto">
            <div className="w-10 h-10 rounded-lg bg-red-700/20 border border-red-600/40 flex items-center justify-center text-red-500 font-bold text-lg font-serif">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-mono font-bold text-white text-sm">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-[11px] text-zinc-400">
                Based on 480+ Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* 4 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#141418] border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all duration-300 relative group"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-red-600/30 mb-4 group-hover:text-red-500/50 transition-colors" />

                {/* Star rating */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-light italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Visit Metadata without pill wrappers */}
              <div className="pt-4 border-t border-white/5">
                <div className="font-serif font-bold text-white text-base">
                  {review.author}
                </div>
                <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <span>{review.visitType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Developer / Owner note for easy Google review integration */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          <span>Note: Customer reviews above are structured placeholder cards ready to link directly to your Google My Business profile.</span>
        </div>

      </div>
    </section>
  );
};
