import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: '2',
    tableType: 'korean-bbq',
    specialRequest: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    bookingCode: string;
    name: string;
    date: string;
    time: string;
    guests: string;
    tableType: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = 'TS-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmation({
        bookingCode: randomCode,
        name: formData.name,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        tableType:
          formData.tableType === 'korean-bbq'
            ? 'Korean BBQ Table'
            : formData.tableType === 'sushi-bar'
            ? 'Sushi Bar Counter'
            : 'Main Dining Room',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-bold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Reserve Your Table
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            Reserve your sushi bar seats or Korean BBQ grill table in advance. For parties larger than 8, please call us directly.
          </p>
        </div>

        {/* Confirmation State */}
        {confirmation ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#141418] border border-red-600/30 text-center animate-in zoom-in-95 duration-300 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-red-950/50 border border-red-600/50 flex items-center justify-center text-red-400 mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-red-400 font-bold block mb-1">
              Reservation Requested
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Thank you, {confirmation.name}!
            </h3>

            <p className="text-zinc-300 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
              We have received your table request. A confirmation SMS and email summary have been dispatched.
            </p>

            {/* Receipt Box */}
            <div className="max-w-md mx-auto p-5 rounded-xl bg-black/40 border border-white/10 text-left space-y-2.5 text-xs mb-8">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Confirmation Code:</span>
                <span className="text-white font-mono font-bold tracking-wider">{confirmation.bookingCode}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Date & Time:</span>
                <span className="text-white font-medium">{confirmation.date} at {confirmation.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-400">Guests & Seating:</span>
                <span className="text-white font-medium">{confirmation.guests} Guests · {confirmation.tableType}</span>
              </div>
            </div>

            <button
              onClick={() => setConfirmation(null)}
              className="px-6 py-2.5 rounded bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Book Another Table
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-2xl bg-[#141418] border border-white/10 shadow-2xl space-y-6"
          >
            {/* Row 1: Name, Phone, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Date, Time, Number of Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Time *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="13:00">1:00 PM (Lunch)</option>
                  <option value="17:00">5:00 PM (Dinner)</option>
                  <option value="17:30">5:30 PM (Dinner)</option>
                  <option value="18:00">6:00 PM (Dinner)</option>
                  <option value="18:30">6:30 PM (Dinner)</option>
                  <option value="19:00">7:00 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Dinner)</option>
                  <option value="20:00">8:00 PM (Dinner)</option>
                  <option value="20:30">8:30 PM (Dinner)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Number of Guests *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People (Max online)</option>
                </select>
              </div>
            </div>

            {/* Row 3: Seating Preference */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                Seating Experience
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, tableType: 'korean-bbq' })}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    formData.tableType === 'korean-bbq'
                      ? 'bg-amber-950/30 border-amber-600 text-white'
                      : 'bg-[#0e0e12] border-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold block mb-0.5">Korean BBQ Grill Table</span>
                  <span className="text-[11px] opacity-80 block">Tabletop grill for sizzling galbi & pork</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, tableType: 'sushi-bar' })}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    formData.tableType === 'sushi-bar'
                      ? 'bg-red-950/30 border-red-600 text-white'
                      : 'bg-[#0e0e12] border-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold block mb-0.5">Sushi Bar Counter</span>
                  <span className="text-[11px] opacity-80 block">Watch the sushi masters slice & prepare</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, tableType: 'main-dining' })}
                  className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                    formData.tableType === 'main-dining'
                      ? 'bg-zinc-800 border-white/40 text-white'
                      : 'bg-[#0e0e12] border-white/10 text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold block mb-0.5">Main Dining Room</span>
                  <span className="text-[11px] opacity-80 block">Relaxed booths & tables for mixed dining</span>
                </button>
              </div>
            </div>

            {/* Row 4: Special Request */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                Special Request (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Dietary allergies, birthday celebration, anniversary, high chair needed, etc."
                value={formData.specialRequest}
                onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                className="w-full bg-[#0e0e12] border border-white/10 focus:border-red-600 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg shadow-xl shadow-red-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing Request...
                  </span>
                ) : (
                  <span>Request Reservation</span>
                )}
              </button>
              <p className="text-[11px] text-zinc-500 text-center mt-3">
                No credit card required for standard parties. 15-minute grace period held for all bookings.
              </p>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};
