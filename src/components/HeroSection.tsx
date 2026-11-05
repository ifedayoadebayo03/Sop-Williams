import React, { useState } from 'react';
import { Sparkles, ArrowRight, Store, ArrowUpRight } from 'lucide-react';
import { Currency, formatPrice, ATELIER_CONTACTS } from '../data/products';

interface HeroSectionProps {
  onExploreCollection: () => void;
  onOpenStoreLocation: () => void;
  currency: Currency;
  onSelectProduct: (productId: string) => void;
}

const HERO_FEATURED = [
  {
    id: 'sw-01',
    name: 'The Imperial Lug Penny Loafer',
    leather: 'French Pebble Grain & Palladium Buckle',
    sole: 'Architectural Commando Lug',
    priceNGN: 165000,
    image: '/assets/clean_shoes/sw_black_lug_penny.png',
    tag: 'Flagship Masterpiece',
    craftTime: '32 Hand Operations',
  },
  {
    id: 'sw-02',
    name: 'The Croc Bar Lug Bit Loafer',
    leather: 'High-Gloss Croc Hide & Palladium Bar',
    sole: 'Double Storm-Welted Lug',
    priceNGN: 185000,
    image: '/assets/clean_shoes/sw_black_croc_lug.png',
    tag: 'Haute Exotic',
    craftTime: '28 Hand Operations',
  },
  {
    id: 'sw-04',
    name: 'The Cerulean Mamba Bit Loafer',
    leather: 'Midnight Blue Python in Atelier Box',
    sole: 'Hand-Beveled Italian Leather',
    priceNGN: 195000,
    image: '/assets/clean_shoes/sw_blue_python_box.png',
    tag: 'Collector Presentation',
    craftTime: 'Presentation Case Included',
  },
  {
    id: 'sw-05',
    name: 'The Sovereign Damask Slipper',
    leather: 'Turquoise Arabesque Jacquard & Calfskin',
    sole: 'Vegetable-Tanned Hand-Dyed Sole',
    priceNGN: 165000,
    image: '/assets/clean_shoes/sw_turquoise_damask_slipper.png',
    tag: 'Gala Edition',
    craftTime: 'Channeled Stitch Waist',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollection,
  onOpenStoreLocation,
  currency,
  onSelectProduct,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeShoe = HERO_FEATURED[activeIdx];

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#090a0c] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-white/[0.08]">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/[0.035] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#3a2f1b]/[0.08] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main 2-Column Split: Editorial on Left, Architectural Gallery on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Editorial & Action) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Atelier Heritage Kicker (Clean unboxed typography) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-4 font-medium flex-wrap">
              <span>SOP WILLIAMS</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>Broad Street, Mandilas</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>Lagos Island</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#f5f4f0] leading-[1.12] mb-6 [text-wrap:balance]">
              Sculpted For Men Who Walk Like Kings.
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-[#b8b7b2] leading-relaxed max-w-xl mb-8 font-light">
              Nigeria’s pre-eminent luxury footwear house. From our flagship showroom on Broad Street in Mandilas, we craft hand-lasted exotic python, alligator-embossed calfskin, and architectural commando loafers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreCollection}
                className="flex items-center gap-3 px-6 py-3.5 text-xs lg:text-sm font-semibold tracking-wider uppercase text-black bg-[#d4af37] hover:bg-[#e4bf47] active:scale-95 rounded transition-all shadow-[0_4px_20px_rgba(212,175,55,0.2)] whitespace-nowrap cursor-pointer"
              >
                <span>Explore Footwear</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenStoreLocation}
                className="flex items-center gap-2.5 px-6 py-3.5 text-xs lg:text-sm font-medium tracking-wider uppercase text-[#f5f4f0] hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37]/60 rounded transition-all bg-white/[0.02] hover:bg-white/[0.05] whitespace-nowrap cursor-pointer"
              >
                <Store className="w-4 h-4 text-[#d4af37]" />
                <span>Visit Mandilas Showroom</span>
              </button>
            </div>

            {/* Showroom Direct Info Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/[0.08] text-xs text-[#a5a4a0]">
              <span className="text-[#c5a880] font-mono uppercase tracking-wider text-[11px]">Showroom:</span>
              <span className="font-mono text-xs text-[#f5f4f0]">
                Santak Plaza, Broad Street
              </span>
              <span aria-hidden="true" className="opacity-30">·</span>
              <span className="text-[#c5a880] font-mono uppercase tracking-wider text-[11px]">Direct WhatsApp:</span>
              <span className="font-mono text-xs text-[#f5f4f0]">
                {ATELIER_CONTACTS.phoneDisplay}
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg border border-white/[0.12] bg-[#121318] p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              
              {/* Top Tag & Price Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    {activeShoe.tag}
                  </span>
                  <span className="text-[#a5a4a0] font-light">· {activeShoe.craftTime}</span>
                </div>
                <div className="font-mono font-semibold text-sm text-[#f5f4f0] tabular-nums">
                  {formatPrice(activeShoe.priceNGN, currency)}
                </div>
              </div>

              {/* Main Image Stage */}
              <div 
                onClick={() => onSelectProduct(activeShoe.id)}
                className="relative w-full aspect-[4/3] rounded overflow-hidden bg-[#0c0d10] cursor-pointer group/img"
              >
                <img
                  src={activeShoe.image}
                  alt={activeShoe.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity" />

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-[#f5f4f0]">
                      {activeShoe.name}
                    </h3>
                    <p className="text-xs text-[#c5a880] mt-0.5">
                      {activeShoe.leather} · {activeShoe.sole}
                    </p>
                  </div>
                  <span className="px-3 py-1.5 text-[11px] font-medium tracking-wider uppercase bg-[#d4af37] text-black rounded font-sans shrink-0 flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Interactive Thumbnail Carousel */}
              <div className="grid grid-cols-4 gap-2.5 mt-4 pt-4 border-t border-white/[0.08]">
                {HERO_FEATURED.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative rounded overflow-hidden aspect-[4/3] border text-left transition-all cursor-pointer ${
                      activeIdx === idx
                        ? 'border-[#d4af37] ring-1 ring-[#d4af37]'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/75 p-1 text-[9px] text-[#f5f4f0] truncate text-center font-medium">
                      {item.name.split(' ')[1]}
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Proof & Brand Values Strip */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#c5a880] font-semibold tracking-wider uppercase mb-1">
              01. Mandilas Boutique
            </span>
            <h4 className="font-display text-sm font-semibold text-[#f5f4f0] mb-1">
              Shop SF3 Santak Plaza
            </h4>
            <p className="text-xs text-[#a5a4a0] leading-relaxed font-light">
              134/136 Broad Street. Walk in, try on sizes, and purchase directly.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#c5a880] font-semibold tracking-wider uppercase mb-1">
              02. Exotic & Rare Hides
            </span>
            <h4 className="font-display text-sm font-semibold text-[#f5f4f0] mb-1">
              Ethical Precision Hide
            </h4>
            <p className="text-xs text-[#a5a4a0] leading-relaxed font-light">
              Certified python scales, alligator-embossed calfskin, and French pebble grain.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#c5a880] font-semibold tracking-wider uppercase mb-1">
              03. Sole Architecture
            </span>
            <h4 className="font-display text-sm font-semibold text-[#f5f4f0] mb-1">
              Commando & Channeled Welts
            </h4>
            <p className="text-xs text-[#a5a4a0] leading-relaxed font-light">
              High-traction architectural commando lugs alongside beveled leather waists.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs text-[#c5a880] font-semibold tracking-wider uppercase mb-1">
              04. Fast Dispatch
            </span>
            <h4 className="font-display text-sm font-semibold text-[#f5f4f0] mb-1">
              Same-Day Lagos & Courier
            </h4>
            <p className="text-xs text-[#a5a4a0] leading-relaxed font-light">
              Swift doorstep courier delivery across Lagos, nationwide, and international.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
