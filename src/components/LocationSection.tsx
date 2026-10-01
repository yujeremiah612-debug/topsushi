import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#0d0d11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-red-500 font-bold mb-2">
            Visit & Connect
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Location & Hours
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Conveniently situated with dedicated parking. Walk-ins and reservations are always welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact & Hours Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-2xl bg-[#141418] border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide mb-1">
                  TOP SUSHI
                </h3>
                <p className="text-xs text-red-400 uppercase tracking-widest font-semibold">
                  Japanese Sushi & Korean Grill
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 text-sm">
                <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Address: {RESTAURANT_INFO.addressPlaceholder}
                  </span>
                  <p className="text-white font-medium">
                    {RESTAURANT_INFO.addressDisplay}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 text-sm">
                <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Phone: {RESTAURANT_INFO.phonePlaceholder}
                  </span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneDisplay}`}
                    className="text-white font-medium hover:text-red-400 transition-colors"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 text-sm">
                <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-800/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                    Email: {RESTAURANT_INFO.emailPlaceholder}
                  </span>
                  <a
                    href={`mailto:${RESTAURANT_INFO.emailDisplay}`}
                    className="text-white font-medium hover:text-red-400 transition-colors break-all"
                  >
                    {RESTAURANT_INFO.emailDisplay}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneDisplay}`}
                  className="py-3 px-4 rounded bg-red-700 hover:bg-red-600 text-white font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors shadow-lg"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors border border-white/15"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card with [HOURS] placeholder tags */}
            <div className="p-8 rounded-2xl bg-[#141418] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 text-white font-serif font-bold text-lg mb-4">
                <Clock className="w-5 h-5 text-red-500" />
                <span>Weekly Hours</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {RESTAURANT_INFO.hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
                  >
                    <span className="text-zinc-400 font-medium">{item.day}: [HOURS]</span>
                    <span className="text-white font-mono font-semibold tabular-nums">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Placeholder (7 cols) */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="h-[480px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121217] relative shadow-2xl flex flex-col items-center justify-center text-center p-8 group">
              
              {/* Map grid lines mockup */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }}
              />

              {/* Stylized vector map streets */}
              <svg
                className="absolute inset-0 w-full h-full opacity-15 stroke-white/40"
                viewBox="0 0 600 600"
                fill="none"
              >
                <path d="M-50 150 L650 250" strokeWidth="6" />
                <path d="M-50 420 L650 380" strokeWidth="8" />
                <path d="M220 -50 L280 650" strokeWidth="10" />
                <path d="M450 -50 L390 650" strokeWidth="6" />
                <circle cx="300" cy="300" r="180" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Glowing Map Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="w-14 h-14 rounded-full bg-red-600/90 border-4 border-white shadow-2xl flex items-center justify-center text-white">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="w-8 h-2 bg-black/60 rounded-full blur-sm mt-1" />
              </div>

              {/* Location Marker Information Box */}
              <div className="relative z-10 mt-6 max-w-sm p-5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 shadow-2xl">
                <div className="font-serif font-bold text-white text-lg mb-1">
                  TOP SUSHI Restaurant
                </div>
                <p className="text-xs text-zinc-300 mb-3">
                  {RESTAURANT_INFO.addressDisplay}
                </p>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-700 hover:bg-red-600 text-white font-semibold text-xs uppercase tracking-wider rounded transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Interactive bottom bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-400 bg-[#0e0e12]/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span>Google Maps Placeholder · Live GPS Coordinates</span>
                <span className="text-zinc-500 font-mono">37.7749° N, 122.4194° W</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
