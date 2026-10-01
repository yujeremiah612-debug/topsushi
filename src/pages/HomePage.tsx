import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { IntroSection } from '../components/IntroSection';
import { SignatureSushiSection } from '../components/SignatureSushiSection';
import { KoreanBbqSection } from '../components/KoreanBbqSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { OrderOnlineSection } from '../components/OrderOnlineSection';
import { MenuItem } from '../data/restaurantData';
import { PageType } from '../types/navigation';
import { ArrowRight, UtensilsCrossed, Calendar } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onAddToCart: (item: MenuItem) => void;
  onOpenOrder: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onOpenOrder,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenOrder={onOpenOrder}
        onOpenReservation={() => onNavigate('contact')}
      />

      {/* 2. Restaurant Introduction */}
      <IntroSection />

      {/* 3. Signature Sushi Showcase */}
      <SignatureSushiSection onAddToCart={onAddToCart} />

      {/* 4. Korean BBQ Section */}
      <KoreanBbqSection
        onSelectCategory={() => onNavigate('menu')}
        onOpenReservation={() => onNavigate('contact')}
      />

      {/* 5. Menu Teaser Banner */}
      <section className="py-14 bg-[#121216] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Explore Our Full Culinary Catalog
            </h3>
            <p className="text-zinc-400 text-sm mb-6 font-light">
              Over 25+ chef-curated sushi rolls, sashimi cuts, hot tonkotsu ramen bowls, and tabletop BBQ platters.
            </p>
            <button
              onClick={() => {
                onNavigate('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-red-950/40 inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View Dedicated Menu Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Top Sushi */}
      <WhyChooseSection />

      {/* 7. Guest Reviews */}
      <ReviewsSection />

      {/* 8. Order Online CTA */}
      <OrderOnlineSection onOpenOrder={onOpenOrder} />
    </div>
  );
};
