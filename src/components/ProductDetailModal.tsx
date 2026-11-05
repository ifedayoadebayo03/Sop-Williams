import React, { useState } from 'react';
import { X, Check, MessageSquare, ShoppingBag, Ruler, MapPin } from 'lucide-react';
import { Product, Currency, formatPrice, buildWhatsAppLink, ATELIER_CONTACTS } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currency: Currency;
  onAddToCart: (product: Product, size: string) => void;
}

const SIZES = ['39', '40', '41', '42', '43', '44', '45', '46', '47', '48'];

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  currency,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState('42');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [zoomPos, setZoomPos] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!product) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    setZoomPos((prev) => ({ ...prev, active: false }));
  };

  const handleWhatsApp = () => {
    const msg = `*SOP WILLIAMS FOOTWEAR ORDER*
---------------------------------------
Product: ${product.name}
Category: ${product.category}
Leather: ${product.leather}
Sole: ${product.sole}
Size: EU ${selectedSize}
Price: ${formatPrice(product.priceNGN, currency)}
---------------------------------------
Showroom: Shop SF3 Santak Plaza, 134/136 Broad Street, Mandilas Lagos Island.
Hello Sop Williams, I want to order this pair. Please confirm store pickup or delivery to my address.`;

    window.open(buildWhatsAppLink(msg, ATELIER_CONTACTS.whatsapp1), '_blank');
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#101116] border border-white/15 rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Dismiss Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
          title="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal 2-Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Interactive Image & Loupe */}
          <div className="relative bg-[#0c0d10] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative">
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-2 left-2 z-10 bg-black/80 backdrop-blur-sm border border-[#d4af37]/50 px-2.5 py-1 rounded text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                  {product.badge}
                </div>
              )}

              {/* Interactive Zoom Stage */}
              <div
                className="relative w-full aspect-square rounded overflow-hidden cursor-crosshair border border-white/10"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-200 ${
                    zoomPos.active ? 'scale-150' : 'scale-100'
                  }`}
                  style={
                    zoomPos.active
                      ? {
                          transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                        }
                      : undefined
                  }
                  referrerPolicy="no-referrer"
                />

                {!zoomPos.active && (
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] text-[#a5a4a0] border border-white/10 pointer-events-none">
                    Hover to Magnify Texture
                  </div>
                )}
              </div>
            </div>

            {/* In-the-Box Inclusions & Store Pickup */}
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#a5a4a0] space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] text-[#c5a880] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Shop SF3 Santak Plaza, Mandilas Lagos Island</span>
              </div>
              <div className="space-y-1 text-[11.5px]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Sop Williams signature protective dust covers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Complimentary master fit check at Mandilas showroom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Spec & Ordering */}
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Leather Tag */}
              <div className="flex items-center gap-2 text-xs text-[#a5a4a0] font-mono uppercase tracking-wider mb-2">
                <span>{product.category}</span>
                <span aria-hidden="true" className="opacity-40">·</span>
                <span className="text-[#c5a880]">{product.leather}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl font-bold text-[#f5f4f0] leading-tight mb-2">
                {product.name}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-[#b8b7b2] mb-4">
                {product.subtitle}
              </p>

              {/* Price */}
              <div className="mb-5 pb-4 border-b border-white/10 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#777] block">In-Stock Price</span>
                  <span className="font-mono text-2xl font-bold text-[#f5f4f0] tabular-nums">
                    {formatPrice(product.priceNGN, currency)}
                  </span>
                </div>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available at Mandilas Boutique
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#a5a4a0] leading-relaxed mb-5 font-light">
                {product.description}
              </p>

              {/* Craft Details */}
              <div className="mb-6 space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                  Artisanal Specifications
                </span>
                <ul className="text-xs text-[#f5f4f0] space-y-1">
                  {product.craftDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#d4af37] mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-[#f5f4f0]">
                    Select European Size (EU)
                  </span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-xs text-[#c5a880] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>{showSizeGuide ? 'Hide Sizing' : 'Size Chart'}</span>
                  </button>
                </div>

                {/* Sizing Chart Preview */}
                {showSizeGuide && (
                  <div className="mb-3 p-3 bg-black/60 border border-white/10 rounded text-[11px] font-mono text-[#a5a4a0] overflow-x-auto">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="text-[#c5a880] border-b border-white/10">
                          <th className="pb-1">EU</th>
                          <th className="pb-1">UK</th>
                          <th className="pb-1">US</th>
                          <th className="pb-1">Foot (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>39</td><td>5.5</td><td>6.5</td><td>25.0</td></tr>
                        <tr><td>40</td><td>6.5</td><td>7.5</td><td>25.5</td></tr>
                        <tr><td>41</td><td>7.5</td><td>8.5</td><td>26.2</td></tr>
                        <tr><td>42</td><td>8.0</td><td>9.0</td><td>27.0</td></tr>
                        <tr><td>43</td><td>9.0</td><td>10.0</td><td>27.8</td></tr>
                        <tr><td>44</td><td>9.5</td><td>10.5</td><td>28.5</td></tr>
                        <tr><td>45</td><td>10.5</td><td>11.5</td><td>29.2</td></tr>
                        <tr><td>46</td><td>11.5</td><td>12.5</td><td>30.0</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="grid grid-cols-5 gap-2">
                  {SIZES.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs font-mono font-semibold rounded border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'border-[#d4af37] bg-[#d4af37] text-black shadow-md'
                          : 'border-white/10 bg-[#0c0d10] text-[#f5f4f0] hover:border-white/30'
                      }`}
                    >
                      EU {sz}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded text-xs font-bold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e4bf47] active:scale-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.2)] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>

                <button
                  onClick={handleAdd}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded text-xs font-semibold tracking-wider uppercase text-[#f5f4f0] hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37]/60 bg-white/[0.04] transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                  <span>{addedSuccess ? 'Added to Bag ✓' : 'Add to Bag'}</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-[#777]">
                WhatsApp: <span className="text-[#a5a4a0] font-mono">{ATELIER_CONTACTS.phoneDisplay}</span> · Email: <span className="text-[#a5a4a0] font-mono">{ATELIER_CONTACTS.email}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
