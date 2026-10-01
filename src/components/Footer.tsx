import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PageType } from '../types/navigation';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] text-zinc-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-red-700/20 border border-red-600/40 flex items-center justify-center text-red-500 font-serif font-bold text-lg">
                頂
              </div>
              <span className="font-serif tracking-widest text-2xl font-bold text-white hover:text-red-400 transition-colors">
                TOP SUSHI
              </span>
            </button>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light max-w-sm">
              Authentic Japanese sushi artistry and vibrant Korean BBQ tabletop grilling. Crafted fresh for every order with the highest-grade ingredients.
            </p>

            {/* Social Media Links: Facebook, Instagram, TikTok */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-700/80 hover:text-white border border-white/10 flex items-center justify-center text-zinc-300 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-700/80 hover:text-white border border-white/10 flex items-center justify-center text-zinc-300 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-700/80 hover:text-white border border-white/10 flex items-center justify-center text-zinc-300 transition-colors font-bold text-xs cursor-pointer"
                aria-label="TikTok"
              >
                <span>TT</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links to Different Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('location')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-red-400 transition-colors text-left cursor-pointer"
                >
                  Contact & Book
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block mb-0.5">Address: {RESTAURANT_INFO.addressPlaceholder}</span>
                  <span className="text-zinc-300">{RESTAURANT_INFO.addressDisplay}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block mb-0.5">Phone: {RESTAURANT_INFO.phonePlaceholder}</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneDisplay}`} className="text-zinc-300 hover:text-white">
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 block mb-0.5">Email: {RESTAURANT_INFO.emailPlaceholder}</span>
                  <a href={`mailto:${RESTAURANT_INFO.emailDisplay}`} className="text-zinc-300 hover:text-white break-all">
                    {RESTAURANT_INFO.emailDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Overview (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">
              Hours of Operation
            </h4>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Mon – Thu:</span>
                <span className="text-zinc-300 font-mono">11:30 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Friday:</span>
                <span className="text-zinc-300 font-mono">11:30 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Saturday:</span>
                <span className="text-zinc-300 font-mono">12:00 PM – 11:00 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Sunday:</span>
                <span className="text-zinc-300 font-mono">12:00 PM – 9:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Top Sushi. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500">
            <button onClick={() => handleNav('about')} className="hover:text-zinc-400 cursor-pointer">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => handleNav('about')} className="hover:text-zinc-400 cursor-pointer">
              Terms of Service
            </button>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-zinc-400 cursor-pointer">
              Reservations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
