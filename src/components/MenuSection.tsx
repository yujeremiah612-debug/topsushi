import React, { useState, useMemo } from 'react';
import { Plus, Search, Flame, Sparkles, Filter } from 'lucide-react';
import { FULL_MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  activeCategory,
  setActiveCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllItems, setShowAllItems] = useState(false);

  // Filtered menu logic
  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Display subset or all depending on showAllItems
  const displayedItems = showAllItems
    ? filteredItems
    : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-24 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Culinary Selection</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Our Favorites
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl font-light">
              Explore our chef's hand-crafted sushi, fresh sashimi, savory ramen, and sizzling Korean barbecue.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full bg-[#141418] border border-white/10 focus:border-red-600 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented Buttons allowed by frontend design skill for interactive filtering) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-700 text-white shadow-md shadow-red-950/40'
                    : 'bg-[#141418] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {displayedItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#141418]/50 rounded-2xl border border-white/5">
            <Filter className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-white mb-1">No items found</h3>
            <p className="text-xs text-zinc-400">
              Try adjusting your search query or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#141418] hover:bg-[#1a1a20] border border-white/10 hover:border-red-600/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Fallback */}
                <div className="relative h-44 overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback gradient if any asset glitch
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent opacity-70" />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 text-[10px] font-semibold tracking-wider">
                    {item.popular && (
                      <span className="px-2 py-0.5 bg-red-600 text-white rounded">
                        Popular
                      </span>
                    )}
                    {item.spicy && (
                      <span className="px-2 py-0.5 bg-amber-600 text-white rounded flex items-center gap-0.5">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  {item.pieces && (
                    <span className="absolute bottom-2.5 right-2.5 text-[10px] text-zinc-300 font-mono bg-black/70 px-1.5 py-0.5 rounded">
                      {item.pieces}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <span className="font-mono text-sm font-semibold text-[#c5a059] tabular-nums shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 mb-4 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Add to order action */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                      Freshly prepared
                    </span>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white/10 hover:bg-red-700 text-white text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
                      aria-label={`Add ${item.name} to order`}
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Full Menu CTA Button */}
        {filteredItems.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="px-8 py-3.5 border border-white/20 hover:border-red-600 text-white text-xs uppercase tracking-widest font-semibold rounded bg-[#141418] hover:bg-white/5 transition-all shadow-lg cursor-pointer"
            >
              {showAllItems ? 'Show Fewer Items' : 'View Full Menu'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
