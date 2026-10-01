/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { MenuItem } from './data/restaurantData';
import { PageType } from './types/navigation';
import { ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync state with URL hash on load and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = ['home', 'menu', 'about', 'gallery', 'location', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add item to cart with visual toast feedback
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    setToastMessage(`Added ${item.name} to order`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  // Render current active page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onOpenOrder={() => setIsCartOpen(true)}
          />
        );
      case 'menu':
        return (
          <MenuPage
            onAddToCart={handleAddToCart}
            onNavigate={navigateTo}
          />
        );
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage />;
      case 'location':
        return <LocationPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            onOpenOrder={() => setIsCartOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 flex flex-col font-sans selection:bg-red-800 selection:text-white">
      {/* 1. Global Navigation Bar with active page tab */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Dynamic Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Footer with page navigation */}
      <Footer onNavigate={navigateTo} />

      {/* Persistent Shopping Cart / Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Quick Order Cart Button */}
      {totalCartCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-red-700 hover:bg-red-600 text-white p-4 rounded-full shadow-2xl shadow-red-950 flex items-center gap-3 border border-red-500/40 transition-transform active:scale-95 animate-in fade-in slide-in-from-bottom-6 cursor-pointer"
          aria-label="Open Cart"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-white text-red-700 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            View Order
          </span>
        </button>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#16161c] border border-red-600/50 text-white px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
