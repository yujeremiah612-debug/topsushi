import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Calendar, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PageType } from '../types/navigation';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Menu', page: 'menu' },
    { label: 'About', page: 'about' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Location', page: 'location' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-[#0c0c0e]/85 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (clicking goes to Home) */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-red-700/20 border border-red-600/40 flex items-center justify-center text-red-500 font-serif font-bold text-lg group-hover:bg-red-700/30 transition-colors">
                頂
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  TOP SUSHI
                </span>
                <span className="text-[10px] tracking-wider uppercase text-zinc-400 -mt-1 font-medium">
                  Sushi & Korean Grill
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links (Different Pages) */}
            <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-medium text-zinc-300">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.page)}
                    className={`transition-colors relative py-1 cursor-pointer font-semibold ${
                      isActive
                        ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-600'
                        : 'text-zinc-400 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-200'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenCart}
                className="relative p-2.5 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                aria-label="View order cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0c0c0e]">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider border rounded transition-colors whitespace-nowrap cursor-pointer ${
                  currentPage === 'contact'
                    ? 'border-red-600 text-white bg-red-950/20'
                    : 'text-zinc-200 hover:text-white border-white/20 hover:border-white/50'
                }`}
              >
                Reserve a Table
              </button>

              <button
                onClick={() => handleNavClick('menu')}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 rounded transition-colors shadow-lg shadow-red-900/20 whitespace-nowrap cursor-pointer"
              >
                Order Online
              </button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenCart}
                className="relative p-2 text-zinc-200 hover:text-white cursor-pointer"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-200 hover:text-white focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#0c0c0e]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="space-y-6 text-center pt-6">
            <div className="font-serif text-2xl font-bold tracking-widest text-white mb-6">
              TOP SUSHI
              <div className="text-xs uppercase tracking-widest text-red-500 font-sans mt-1">
                Japanese Sushi & Korean Grill
              </div>
            </div>

            <nav className="flex flex-col space-y-4 text-base font-medium uppercase tracking-wider text-zinc-300">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.page)}
                  className={`py-2 transition-colors cursor-pointer ${
                    currentPage === link.page
                      ? 'text-red-500 font-bold border-b border-red-600/40 inline-block mx-auto'
                      : 'hover:text-red-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold text-white border border-white/20 rounded hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-red-400" />
              Reserve a Table
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold text-white bg-red-700 hover:bg-red-600 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Online ({cartCount})
            </button>
            <div className="text-center pt-2">
              <a
                href={`tel:${RESTAURANT_INFO.phonePlaceholder}`}
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                Call: {RESTAURANT_INFO.phonePlaceholder}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
