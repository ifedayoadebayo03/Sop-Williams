import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { Currency, formatPrice } from '../data/products';

interface RunwayLookbookProps {
  currency: Currency;
  onSelectProduct: (productId: string) => void;
}

const LOOKS = [
  {
    id: 'look-1',
    title: 'The Obsidian Gala Look',
    occasion: 'Gala & Black-Tie Formal',
    description: 'Crisp bespoke black trousers paired with high-shine patent monogram dress loafers. A commanding posture sculpted for galas, red carpets, and black-tie dinners.',
    image: '/assets/clean_shoes/sw_patent_on_model.png',
    featuredProduct: {
      id: 'sw-18',
      name: 'The Obsidian Sovereign on Model',
      priceNGN: 165000,
    },
  },
  {
    id: 'look-2',
    title: 'Executive Commando Authority',
    occasion: 'Modern Power Dressing',
    description: 'Charcoal wool trousers grounded by alligator-embossed calfskin with architectural lug tread and polished palladium hardware.',
    image: '/assets/clean_shoes/sw_black_croc_lug.png',
    featuredProduct: {
      id: 'sw-02',
      name: 'The Croc Bar Lug Bit Loafer',
      priceNGN: 185000,
    },
  },
  {
    id: 'look-3',
    title: 'The Mediterranean Intrecciato',
    occasion: 'Warm-Weather Leisure & Yachting',
    description: 'Cream tailored linen trousers styled with hand-woven dual-tone espresso and cognac intrecciato calf loafers and solid brass equestrian bits.',
    image: '/assets/clean_shoes/sw_intrecciato_brown_loafer.png',
    featuredProduct: {
      id: 'sw-08',
      name: 'The Two-Tone Intrecciato Horsebit',
      priceNGN: 175000,
    },
  },
  {
    id: 'look-4',
    title: 'The Sovereign Damask Evening',
    occasion: 'Regal Gala & Evening Slipper',
    description: 'Silk arabesque damask embroidery catching low chandelier illumination, grounded by an espresso calfskin saddle strap.',
    image: '/assets/clean_shoes/sw_turquoise_damask_slipper.png',
    featuredProduct: {
      id: 'sw-05',
      name: 'The Sovereign Damask Evening Slipper',
      priceNGN: 165000,
    },
  },
];

export const RunwayLookbook: React.FC<RunwayLookbookProps> = ({
  currency,
  onSelectProduct,
}) => {
  const [activeLook, setActiveLook] = useState(0);
  const look = LOOKS[activeLook];

  return (
    <section id="lookbook" className="w-full bg-[#0b0c10] py-16 lg:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-3 font-medium">
              <span>Maison Lookbook · Vol. VIII</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>On-Model Styling</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5f4f0] tracking-tight">
              The Sovereign Runway
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a5a4a0] max-w-md font-light leading-relaxed">
            Witness how Sop Williams footwear translates into real-world sartorial elegance across black tie, boardroom, and luxury leisure.
          </p>
        </div>

        {/* Lookbook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Visual Look Feature (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#121318] aspect-[16/10] sm:aspect-[16/9] shadow-2xl group">
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                    {look.occasion}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {look.title}
                  </h3>
                  <p className="text-xs text-[#b8b7b2] max-w-lg mt-1 font-light line-clamp-2">
                    {look.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectProduct(look.featuredProduct.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#e4bf47] transition-all shrink-0 cursor-pointer shadow-lg"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Shoe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Lookbook Selector Navigation (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {LOOKS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveLook(idx)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  activeLook === idx
                    ? 'border-[#d4af37] bg-[#12141c] shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                    : 'border-white/[0.08] bg-[#0e0f14] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono text-[#c5a880] uppercase tracking-wider">
                    Look 0{idx + 1} · {item.occasion}
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#f5f4f0] tabular-nums">
                    {formatPrice(item.featuredProduct.priceNGN, currency)}
                  </span>
                </div>
                <h4 className="font-display text-sm font-semibold text-[#f5f4f0] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8c8a84] line-clamp-2 font-light">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#d4af37] font-medium">
                  <span>Shoe: {item.featuredProduct.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
