import React from 'react';
import { ShoppingBag, ArrowRight, Clock, ShieldCheck, Bike } from 'lucide-react';
import heroSushiImg from '../assets/images/hero_sushi_platter_1790813366015.jpg';

interface OrderOnlineSectionProps {
  onOpenOrder: () => void;
}

export const OrderOnlineSection: React.FC<OrderOnlineSectionProps> = ({ onOpenOrder }) => {
  return (
    <section className="py-20 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#18181f] to-[#121215] shadow-2xl">
          
          {/* Subtle background image slice */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-40 pointer-events-none">
            <img
              src={heroSushiImg}
              alt="Top sushi delivery selection"
              className="w-full h-full object-cover object-right"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#18181f] via-[#18181f]/70 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-4">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Fast Pickup & Delivery</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 [text-wrap:balance]">
              Your Favorite Sushi, Just a Few Clicks Away
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Order your favorite sushi, rolls, and Japanese dishes online for pickup or delivery. Packed fresh in temperature-controlled sustainable packaging.
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0" />
                <span>Ready in 20–30 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-red-400 shrink-0" />
                <span>Contactless Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                <span>Freshness Guaranteed</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto px-8 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded transition-all shadow-xl shadow-red-950/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Order Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-widest rounded border border-white/20 hover:border-white/40 transition-colors text-center"
              >
                View Menu
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
