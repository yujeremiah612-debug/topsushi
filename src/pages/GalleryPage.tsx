import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera, Instagram } from 'lucide-react';
import { GALLERY_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Sushi', 'Korean Grill', 'Interior', 'Japanese Dishes'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter;
  });

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="pt-20 bg-[#0a0a0c] min-h-screen text-slate-100">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Take a culinary tour of our fresh sashimi platters, sizzling tabletop Korean barbecue, and warm modern dining room.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-red-700 text-white shadow-md shadow-red-950/40'
                    : 'bg-[#15151b] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Instagram Prompt */}
        <div className="mt-20 p-8 rounded-2xl bg-[#131317] border border-white/10 text-center max-w-xl mx-auto">
          <Instagram className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <h3 className="font-serif text-xl font-bold text-white mb-1">
            Share Your Experience
          </h3>
          <p className="text-xs text-zinc-400 mb-4">
            Tag us in your food photos with <strong className="text-zinc-200">#TopSushiGrill</strong> for a chance to be featured in our monthly guest spotlight.
          </p>
          <a
            href={RESTAURANT_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Follow @topsushigrill</span>
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="text-center mt-4">
              <h4 className="font-serif text-2xl font-bold text-white">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-xs text-zinc-400 mt-1">
                {filteredItems[selectedImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
