import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationSection } from '../components/ReservationSection';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need a reservation for the Korean BBQ grill tables?',
      a: 'While we hold several tables for walk-in guests daily, reserving in advance is strongly recommended for Friday, Saturday, and Sunday dinner services to guarantee a grill table.',
    },
    {
      q: 'Is there a dress code at Top Sushi?',
      a: 'We welcome smart casual attire. We ask that guests refrain from beachwear, athletic swimwear, or sleeveless undershirts in the dining room.',
    },
    {
      q: 'Can you accommodate gluten-free and shellfish allergies?',
      a: 'Yes, absolutely. We offer gluten-free tamari soy sauce, and our sushi chefs take extreme precautions with dedicated prep boards for shellfish and nut allergies. Please mention any dietary restrictions in your reservation notes.',
    },
    {
      q: 'What is your corkage fee policy?',
      a: 'We allow up to two 750ml bottles of wine or sake per party not currently on our beverage list. Our corkage fee is $25 per bottle.',
    },
    {
      q: 'Do you host private events, corporate buyouts, or birthday celebrations?',
      a: 'Yes, we have an intimate private dining tatami room that seats up to 16 guests, as well as full dining room buyout options. Please contact our events team at our email placeholder.',
    },
  ];

  return (
    <div className="pt-20 bg-[#0a0a0c] min-h-screen text-slate-100">
      {/* Page Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Bookings & Contact</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Reserve Your Experience
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Book your sushi bar seat or Korean BBQ grill table online, or reach out to our guest relations team for private gatherings.
          </p>
        </div>
      </section>

      {/* Main Reservation Section */}
      <ReservationSection />

      {/* Direct Contact & Event Inquiry Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Quick Contact & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Direct Contact
            </h3>
            
            <div className="p-6 rounded-2xl bg-[#131317] border border-white/5 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block font-semibold">Address: {RESTAURANT_INFO.addressPlaceholder}</span>
                  <span className="text-white">{RESTAURANT_INFO.addressDisplay}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block font-semibold">Phone: {RESTAURANT_INFO.phonePlaceholder}</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneDisplay}`} className="text-white hover:text-red-400">
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-400 block font-semibold">Email: {RESTAURANT_INFO.emailPlaceholder}</span>
                  <a href={`mailto:${RESTAURANT_INFO.emailDisplay}`} className="text-white hover:text-red-400 break-all">
                    {RESTAURANT_INFO.emailDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#131317] border border-white/5">
              <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                <Clock className="w-4 h-4 text-red-500" />
                <span>Operating Hours: [HOURS]</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Open seven days a week. Kitchen closes 30 minutes before stated closing times.
              </p>
            </div>
          </div>

          {/* Frequently Asked Questions Accordion (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-xl bg-[#131317] border border-white/5 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-red-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
