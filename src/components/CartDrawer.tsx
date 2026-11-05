import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageSquare, ArrowRight, CheckCircle, AlertTriangle, MapPin } from 'lucide-react';
import { Currency, formatPrice, buildWhatsAppLink, ATELIER_CONTACTS } from '../data/products';

export interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  subtitle: string;
  priceNGN: number;
  image: string;
  size: string;
  quantity: number;
  specNotes?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
  currency: Currency;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency,
}) => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  
  // Checkout Form State
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  if (!isOpen) return null;

  const totalNGN = items.reduce((acc, item) => acc + item.priceNGN * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let itemsList = '';
    items.forEach((item, index) => {
      itemsList += `${index + 1}. ${item.name} (${item.size}) x${item.quantity} — ${formatPrice(item.priceNGN * item.quantity, currency)}\n`;
      if (item.specNotes) {
        itemsList += `   Note: ${item.specNotes}\n`;
      }
    });

    const message = `*SOP WILLIAMS FOOTWEAR — CLIENT BAG*
---------------------------------------
${itemsList}
Total: ${formatPrice(totalNGN, currency)}
---------------------------------------
Fulfillment: ${fulfillmentType === 'pickup' ? 'Store Pickup at Shop SF3 Santak Plaza, Mandilas Lagos Island' : 'Express Doorstep Delivery'}
Exchange policy: 48-hour exchange window for unworn pairs
Hello Sop Williams, I want to finalize payment and dispatch for these shoes.`;

    window.open(buildWhatsAppLink(message, ATELIER_CONTACTS.whatsapp1), '_blank');
  };

  const handleOnlineReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `SW-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setOrderConfirmed(true);

    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-full sm:max-w-md bg-[#101116] border-l border-white/10 h-screen h-[100dvh] max-h-[100dvh] flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#d4af37] shrink-0" />
            <h3 className="font-display text-sm sm:text-base font-bold text-[#f5f4f0] uppercase tracking-wider">
              Shopping Bag ({items.reduce((sum, i) => sum + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
            title="Close Bag"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Item List (min-h-0 allows flex child to shrink and scroll properly on mobile) */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 overscroll-contain">
          {items.length === 0 ? (
            <div className="text-center py-16 sm:py-20 text-[#a5a4a0]">
              <ShoppingBag className="w-10 h-10 mx-auto text-[#444] mb-3" />
              <p className="text-sm font-medium text-[#f5f4f0] mb-1">Your Shopping Bag is Empty</p>
              <p className="text-xs text-[#777] mb-6 max-w-xs mx-auto">
                Explore our ready-to-wear runs available for pickup in Mandilas or express delivery.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] rounded hover:bg-[#e4bf47] transition-all cursor-pointer shadow-lg"
              >
                Browse Footwear
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartId}
                className="p-3 sm:p-3.5 rounded-lg border border-white/[0.08] bg-[#14161e] flex gap-3 sm:gap-3.5 relative group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded bg-[#0a0b0e] overflow-hidden shrink-0 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4 className="font-display text-xs font-bold text-[#f5f4f0] leading-snug truncate">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartId)}
                        className="text-[#666] hover:text-rose-400 transition-colors p-1 shrink-0 -mr-1 -mt-1 cursor-pointer"
                        title="Remove Item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#c5a880] mt-0.5 font-mono">
                      {item.size}
                    </p>

                    {item.specNotes && (
                      <p className="text-[10px] text-[#888] truncate mt-0.5">
                        {item.specNotes}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    <span className="font-mono text-xs font-semibold text-[#f5f4f0] tabular-nums whitespace-nowrap">
                      {formatPrice(item.priceNGN * item.quantity, currency)}
                    </span>

                    <div className="flex items-center border border-white/15 rounded bg-black/40 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.cartId, -1)}
                        className="px-2 py-0.5 text-xs text-[#a5a4a0] hover:text-white cursor-pointer touch-manipulation"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-mono text-[#f5f4f0] min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartId, 1)}
                        className="px-2 py-0.5 text-xs text-[#a5a4a0] hover:text-white cursor-pointer touch-manipulation"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout (Pinned to bottom, fits mobile viewport) */}
        {items.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0c0d10] space-y-3 sm:space-y-4 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))]">
            
            {/* Refined Sizing & Exchange note */}
            <div className="flex items-center justify-between text-[11px] text-[#8c8a84] border-t border-white/[0.06] pt-1.5 sm:pt-2">
              <span>Sizing guarantee</span>
              <span className="text-[#c5a880] font-mono text-[10px] sm:text-[11px]">48h exchange on unworn pairs</span>
            </div>

            <div className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs">
              <div className="flex justify-between text-[#a5a4a0]">
                <span>Footwear Subtotal:</span>
                <span className="font-mono text-[#f5f4f0] tabular-nums font-semibold">
                  {formatPrice(totalNGN, currency)}
                </span>
              </div>
              <div className="flex justify-between text-[#a5a4a0]">
                <span>Mandilas Store Pickup:</span>
                <span className="text-emerald-400 font-medium">Free (Instant)</span>
              </div>
              <div className="flex justify-between text-[#a5a4a0]">
                <span>Nationwide Courier Dispatch:</span>
                <span className="text-[#c5a880]">24–48h Doorstep</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-baseline justify-between">
              <span className="font-display text-xs sm:text-sm font-semibold text-[#f5f4f0]">Order Total:</span>
              <span className="font-mono text-lg sm:text-xl font-bold text-[#d4af37] tabular-nums">
                {formatPrice(totalNGN, currency)}
              </span>
            </div>

            {/* Dual Action Buttons */}
            <div className="space-y-2 sm:space-y-2.5">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#e4bf47] active:scale-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Instant WhatsApp Checkout</span>
              </button>

              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 px-4 rounded text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#f5f4f0] hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37]/60 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
              >
                <span>Reserve with Customer Details</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>

            <div className="text-center text-[10px] text-[#777] pt-0.5">
              Store Hotline: <span className="text-[#a5a4a0] font-mono">{ATELIER_CONTACTS.phoneDisplay}</span>
            </div>
          </div>
        )}

      </div>

      {/* Online Reservation Modal */}
      {checkoutModalOpen && (
        <div 
          className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
          onClick={() => setCheckoutModalOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-[#121318] border border-white/15 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl relative max-h-[92dvh] overflow-y-auto my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {!orderConfirmed ? (
              <>
                <button
                  onClick={() => setCheckoutModalOpen(false)}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a880] mb-2 font-semibold">
                  <span>Sop Williams</span>
                  <span aria-hidden="true">·</span>
                  <span>Mandilas Lagos Island</span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#f5f4f0] mb-1">
                  Customer Order Dossier
                </h3>
                <p className="text-xs text-[#a5a4a0] mb-4 sm:mb-5">
                  Confirm your delivery address or store pickup option. Our team will contact you directly to confirm.
                </p>

                {/* Fulfillment Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('pickup')}
                    className={`p-3 rounded border text-left transition-all ${
                      fulfillmentType === 'pickup'
                        ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#f5f4f0]'
                        : 'border-white/10 bg-[#0c0d10] text-[#a5a4a0]'
                    }`}
                  >
                    <span className="font-semibold text-xs block text-[#d4af37]">Mandilas Store Pickup</span>
                    <span className="text-[10px] block mt-0.5">Santak Plaza, Broad Street</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType('delivery')}
                    className={`p-3 rounded border text-left transition-all ${
                      fulfillmentType === 'delivery'
                        ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#f5f4f0]'
                        : 'border-white/10 bg-[#0c0d10] text-[#a5a4a0]'
                    }`}
                  >
                    <span className="font-semibold text-xs block text-[#d4af37]">Express Delivery</span>
                    <span className="text-[10px] block mt-0.5">Lagos & Nationwide Doorstep</span>
                  </button>
                </div>

                <form onSubmit={handleOnlineReservationSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs text-[#a5a4a0] block mb-1">Full Name:</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Adebayo Williams"
                      className="w-full bg-[#0c0d10] border border-white/20 rounded px-3 py-2 text-xs text-[#f5f4f0] focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-[#a5a4a0] block mb-1">WhatsApp / Phone:</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. +234 803 052 8119"
                        className="w-full bg-[#0c0d10] border border-white/20 rounded px-3 py-2 text-xs text-[#f5f4f0] focus:border-[#d4af37] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#a5a4a0] block mb-1">
                        {fulfillmentType === 'pickup' ? 'Preferred Pickup Time:' : 'Delivery Address:'}
                      </label>
                      <input
                        type="text"
                        required
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder={fulfillmentType === 'pickup' ? 'e.g. Today 3 PM' : 'e.g. Victoria Island, Lagos'}
                        className="w-full bg-[#0c0d10] border border-white/20 rounded px-3 py-2 text-xs text-[#f5f4f0] focus:border-[#d4af37] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#a5a4a0] block mb-1">Special Size / Delivery Notes (Optional):</label>
                    <textarea
                      rows={2}
                      value={customNotes}
                      onChange={(e) => setCustomNotes(e.target.value)}
                      placeholder="e.g. Broad fit foot, please bring EU 43 and 44 for trial..."
                      className="w-full bg-[#0c0d10] border border-white/20 rounded px-3 py-2 text-xs text-[#f5f4f0] focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>

                  {/* Policy Acknowledgement */}
                  <p className="text-[11px] text-[#8c8a84] leading-relaxed">
                    Note: Complimentary size exchange honored within 48 hours for unworn pairs.
                  </p>

                  <div className="p-3 bg-[#0a0b0e] border border-white/10 rounded text-xs flex justify-between items-center text-[#a5a4a0]">
                    <span>Order Value:</span>
                    <span className="font-mono text-sm font-bold text-[#d4af37] tabular-nums">
                      {formatPrice(totalNGN, currency)}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#e4bf47] transition-all cursor-pointer shadow-lg"
                  >
                    Confirm Order Reservation
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-[#d4af37] mx-auto mb-3" />
                <h3 className="font-display text-2xl font-bold text-[#f5f4f0] mb-2">
                  Order Reservation Placed
                </h3>
                <p className="text-xs text-[#c5a880] font-mono mb-4">
                  Order Ref: {orderRef}
                </p>
                <p className="text-xs text-[#a5a4a0] leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <span className="text-white font-medium">{customerName}</span>. Your order has been logged with our Mandilas store desk. We will reach you on <span className="text-white font-medium">{customerPhone}</span> to confirm your size and handover.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppLink(`Hello Sop Williams, I just completed order reservation ${orderRef} for ${customerName}. Here is my phone: ${customerPhone}.`, ATELIER_CONTACTS.whatsapp1)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#e4bf47] transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping Store on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setCheckoutModalOpen(false);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded text-xs text-[#a5a4a0] hover:text-white border border-white/20 hover:border-white/40 cursor-pointer"
                  >
                    Back to Store
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
