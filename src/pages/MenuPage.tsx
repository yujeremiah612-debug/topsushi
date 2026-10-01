import React, { useState, useMemo } from 'react';
import { Search, Filter, Flame, Sparkles, Plus, Check, Info } from 'lucide-react';
import { FULL_MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/restaurantData';
import { PageType } from '../types/navigation';
import heroSushiImg from '../assets/images/hero_sushi_platter_1790813366015.jpg';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
  onNavigate: (page: PageType) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSpicyOnly, setFilterSpicyOnly] = useState(false);
  const [filterChefSpecialOnly, setFilterChefSpecialOnly] = useState(false);

  const filteredItems = useMemo(() => {
    return FULL_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpicy = !filterSpicyOnly || item.spicy;
      const matchesChef = !filterChefSpecialOnly || item.chefSpecial;

      return matchesCategory && matchesSearch && matchesSpicy && matchesChef;
    });
  }, [activeCategory, searchQuery, filterSpicyOnly, filterChefSpecialOnly]);

  return (
    <div className="pt-20 bg-[#0a0a0c] min-h-screen text-slate-100">
      {/* Page Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroSushiImg}
            alt="Top Sushi culinary spread"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/85 to-[#0a0a0c]/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Knife Creations & Sizzling Table Grills</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Our Culinary Menu
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From pristine Bluefin otoro sashimi and handcrafted signature rolls to sizzling tabletop Galbi short ribs, each dish is prepared fresh for every order.
          </p>
        </div>
      </section>

      {/* Menu Controls & Filters */}
      <section className="py-8 bg-[#0e0e12] border-b border-white/5 sticky top-[72px] z-30 backdrop-blur-md bg-[#0e0e12]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Segmented Scroll */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? FULL_MENU_ITEMS.length
                    : FULL_MENU_ITEMS.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-red-700 text-white shadow-md shadow-red-950/40'
                        : 'bg-[#15151b] text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] font-mono opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Search & Toggles */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sushi, meat, ramen..."
                  className="w-full bg-[#15151b] border border-white/10 focus:border-red-600 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              {/* Spicy filter */}
              <button
                onClick={() => setFilterSpicyOnly(!filterSpicyOnly)}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors border cursor-pointer shrink-0 ${
                  filterSpicyOnly
                    ? 'bg-red-950/60 border-red-600 text-red-400'
                    : 'bg-[#15151b] border-white/10 text-zinc-400 hover:text-white'
                }`}
                title="Filter Spicy Only"
              >
                <Flame className="w-4 h-4" />
                <span className="hidden sm:inline">Spicy</span>
              </button>

              {/* Chef special filter */}
              <button
                onClick={() => setFilterChefSpecialOnly(!filterChefSpecialOnly)}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors border cursor-pointer shrink-0 ${
                  filterChefSpecialOnly
                    ? 'bg-amber-950/60 border-amber-600 text-amber-400'
                    : 'bg-[#15151b] border-white/10 text-zinc-400 hover:text-white'
                }`}
                title="Filter Chef Special"
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">Chef's Picks</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Dish Catalog Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results summary without pill badge */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-8 border-b border-white/5 pb-4">
          <span>
            Showing <strong className="text-white font-semibold">{filteredItems.length}</strong> culinary items
          </span>
          <span className="font-mono text-zinc-500">
            Freshly prepared upon ordering
          </span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#121217] rounded-2xl border border-white/5 p-8">
            <Filter className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">No matching items found</h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto mb-6">
              Try clearing your search query or removing the filters to see our full culinary selection.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setFilterSpicyOnly(false);
                setFilterChefSpecialOnly(false);
              }}
              className="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-[#131317] hover:bg-[#18181f] border border-white/10 hover:border-red-600/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold">
                    {item.chefSpecial && (
                      <span className="px-2 py-0.5 bg-amber-500 text-black font-bold rounded shadow">
                        Chef's Special
                      </span>
                    )}
                    {item.popular && (
                      <span className="px-2 py-0.5 bg-red-600 text-white font-bold rounded shadow">
                        Popular
                      </span>
                    )}
                    {item.spicy && (
                      <span className="px-2 py-0.5 bg-red-900 text-red-200 border border-red-500/50 rounded flex items-center gap-0.5">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  {item.pieces && (
                    <span className="absolute bottom-3 right-3 text-xs text-zinc-300 font-mono bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm">
                      {item.pieces}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-lg font-semibold text-[#c5a059] tabular-nums shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-500">
                      Made to order
                    </span>

                    <button
                      onClick={() => onAddToCart(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Korean BBQ Table Reservation Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-950/30 via-[#18181f] to-[#121216] border border-amber-600/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">
              Dine-In Feast Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Craving Sizzling Tabletop BBQ?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Reserve our dedicated Korean BBQ grill tables with downdraft ventilation. Savor prime beef short ribs and crispy Kurobuta pork belly straight from the flame.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-black font-bold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-amber-950/40 whitespace-nowrap cursor-pointer shrink-0"
          >
            Reserve Grill Table
          </button>
        </div>

      </section>
    </div>
  );
};
