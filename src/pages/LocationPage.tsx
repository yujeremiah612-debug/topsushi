import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Train, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { LocationSection } from '../components/LocationSection';
import { PageType } from '../types/navigation';

interface LocationPageProps {
  onNavigate: (page: PageType) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-[#0a0a0c] min-h-screen text-slate-100">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us In Person</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Location & Operating Hours
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Conveniently situated in the city culinary district with dedicated complimentary customer parking and easy transit access.
          </p>
        </div>
      </section>

      {/* Main Location & Hours interactive component */}
      <LocationSection />

      {/* Transit, Parking & Accessibility Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-red-950/60 border border-red-700/40 flex items-center justify-center text-red-400 mb-4">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              Parking Information
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Complimentary 2-hour parking available directly behind the building and in the attached garage. Valet service offered on Friday and Saturday evenings starting at 6:00 PM.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-600/40 flex items-center justify-center text-amber-400 mb-4">
              <Train className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              Public Transit
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Just a 4-minute walk from the Central Metro Station. Bus lines 14, 22, and 45 stop directly in front of Sakura Boulevard.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-zinc-200 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              Walk-Ins & Policies
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Walk-ins are warmly accepted for both the sushi bar and main dining room. For Korean BBQ grill tables during peak weekend dinner hours, advance booking is recommended.
            </p>
          </div>
        </div>

        {/* CTA to Book */}
        <div className="mt-14 p-8 rounded-2xl bg-[#16161d] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-1">
              Ready to dine with us?
            </h4>
            <p className="text-xs text-zinc-400">
              Reserve your sushi bar seats or Korean BBQ grill table online in seconds.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded transition-colors whitespace-nowrap cursor-pointer"
          >
            Book a Table Now
          </button>
        </div>
      </section>
    </div>
  );
};
