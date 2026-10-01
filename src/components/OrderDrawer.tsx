import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Bike, Store } from 'lucide-react';
import { MenuItem, SIGNATURE_ROLLS } from '../data/restaurantData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearCart: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
  onAddToCart,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // Customer info state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, ci) => sum + ci.item.rawPrice * ci.quantity,
    0
  );
  const tax = subtotal * 0.0825;
  const deliveryFee = orderType === 'delivery' ? 4.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = 'ORD-' + Math.floor(10000 + Math.random() * 90000);
    setOrderSuccess(orderNum);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#111116] border-l border-white/10 shadow-2xl flex flex-col h-full z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-red-700/20 border border-red-600/40 flex items-center justify-center text-red-500">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Your Order</h3>
              <p className="text-[11px] text-zinc-400">
                Top Sushi Online Ordering
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Success State */}
        {orderSuccess ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-red-950/60 border border-red-600 flex items-center justify-center text-red-400 mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
              Order Confirmed!
            </span>
            <h4 className="font-serif text-2xl font-bold text-white mb-2">
              Receipt #{orderSuccess}
            </h4>
            <p className="text-zinc-300 text-xs leading-relaxed mb-6 font-light">
              Your order has been sent to our kitchen chefs. Estimated {orderType === 'pickup' ? 'pickup' : 'delivery'} time is{' '}
              <strong className="text-white font-semibold">25–35 minutes</strong>.
            </p>
            <div className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-left text-xs space-y-2 mb-6 text-zinc-300">
              <div className="flex justify-between">
                <span>Method:</span>
                <span className="font-semibold text-white capitalize">{orderType}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact:</span>
                <span className="text-white">{customerName || 'Guest'}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Paid:</span>
                <span className="font-mono font-bold text-[#c5a059]">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setOrderSuccess(null);
                setIsCheckingOut(false);
                onClose();
              }}
              className="w-full py-3 bg-red-700 hover:bg-red-600 text-white text-xs uppercase tracking-widest font-bold rounded transition-colors"
            >
              Done & Close
            </button>
          </div>
        ) : isCheckingOut ? (
          /* Checkout Details Form */
          <div className="flex-1 overflow-y-auto p-6">
            <button
              onClick={() => setIsCheckingOut(false)}
              className="text-xs text-zinc-400 hover:text-white mb-4 flex items-center gap-1"
            >
              ← Back to order list
            </button>

            <h4 className="font-serif text-xl font-bold text-white mb-4">
              Checkout & Delivery Details
            </h4>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#0a0a0d] border border-white/10 focus:border-red-600 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full bg-[#0a0a0d] border border-white/10 focus:border-red-600 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Street address, apartment/suite number"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-[#0a0a0d] border border-white/10 focus:border-red-600 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Kitchen Notes & Utensils
                </label>
                <input
                  type="text"
                  placeholder="Extra chopsticks, soy sauce, no wasabi, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#0a0a0d] border border-white/10 focus:border-red-600 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              {/* Order total recap */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1.5 text-xs pt-3 mt-4">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-zinc-200">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Tax (8.25%):</span>
                  <span className="font-mono text-zinc-200">${tax.toFixed(2)}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-zinc-400">
                    <span>Delivery Fee:</span>
                    <span className="font-mono text-zinc-200">$4.99</span>
                  </div>
                )}
                <div className="flex justify-between text-white font-bold pt-2 border-t border-white/10 text-sm">
                  <span>Total:</span>
                  <span className="font-mono text-[#c5a059]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors shadow-lg cursor-pointer mt-4"
              >
                Place Order (${total.toFixed(2)})
              </button>
            </form>
          </div>
        ) : (
          /* Normal Cart List View */
          <>
            {/* Pickup / Delivery Toggle */}
            <div className="p-4 bg-[#0a0a0d] border-b border-white/5">
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#18181f] rounded-lg">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    orderType === 'pickup'
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Pickup (20m)</span>
                </button>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-red-700 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Delivery (35m)</span>
                </button>
              </div>
            </div>

            {/* Cart Items Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 mx-auto mb-3">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Your cart is empty
                  </h4>
                  <p className="text-xs text-zinc-400 mb-6 font-light">
                    Add handcrafted sushi rolls or Korean grill favorites from our menu.
                  </p>

                  {/* Quick Suggestions */}
                  <div className="text-left border-t border-white/5 pt-4">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-3">
                      Recommended Specials:
                    </span>
                    <div className="space-y-2">
                      {SIGNATURE_ROLLS.slice(0, 3).map((sug) => (
                        <div
                          key={sug.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5"
                        >
                          <div className="text-xs">
                            <span className="text-white font-medium block">
                              {sug.name}
                            </span>
                            <span className="text-zinc-400 font-mono text-[11px]">
                              {sug.price}
                            </span>
                          </div>
                          <button
                            onClick={() => onAddToCart(sug)}
                            className="px-2.5 py-1 rounded bg-red-700/80 hover:bg-red-600 text-white text-[10px] font-bold uppercase transition-colors"
                          >
                            + Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-white truncate">
                          {ci.item.name}
                        </h4>
                        <div className="text-[11px] font-mono text-[#c5a059]">
                          ${(ci.item.rawPrice * ci.quantity).toFixed(2)}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-[#18181f] px-2 py-1 rounded-lg border border-white/10 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, -1)}
                          className="text-zinc-400 hover:text-white p-0.5"
                          aria-label="Decrease quantity"
                        >
                          {ci.quantity === 1 ? (
                            <Trash2 className="w-3.5 h-3.5 text-red-400" />
                          ) : (
                            <Minus className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <span className="text-xs font-mono font-semibold text-white px-1">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, 1)}
                          className="text-zinc-400 hover:text-white p-0.5"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer Total & Checkout CTA */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#0c0c0e] space-y-3">
                <div className="space-y-1 text-xs text-zinc-400">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-mono text-zinc-200">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8.25%):</span>
                    <span className="font-mono text-zinc-200">${tax.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span className="font-mono text-zinc-200">$4.99</span>
                    </div>
                  )}
                  <div className="flex justify-between text-white font-bold pt-2 border-t border-white/10 text-sm">
                    <span>Total:</span>
                    <span className="font-mono text-[#c5a059]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-3.5 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};
