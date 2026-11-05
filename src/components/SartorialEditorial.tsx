import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { formatPrice, Currency } from '../data/products';

interface SartorialEditorialProps {
  currency: Currency;
  onSelectProduct: (id: string) => void;
}

const STYLING_EDITS = [
  {
    id: 'edit-1',
    productId: 'sw-01',
    title: 'The Power Silhouette',
    pairing: 'Cropped Wool Trousers & Heavy Double-Breasted Wool',
    accent: 'Solid Palladium Monogram Keeper',
    vibe: 'Boardroom Gravitas · Lagos & London',
    description: 'The heavyweight commando sole anchors modern tailoring. Cut your trousers with zero break to expose the hand-finished leather welt and the chiseled apron profile.',
    image: '/assets/clean_shoes/sw_black_lug_penny.png',
    leather: 'French Pebble Grain',
    priceNGN: 165000,
  },
  {
    id: 'edit-2',
    productId: 'sw-02',
    title: 'The Sovereign Alligator Bit',
    pairing: 'Bespoke Senator Attire or Italian Mohair Suiting',
    accent: 'Mirror-Polished Palladium Harness Plate',
    vibe: 'Private Dinners · Ikoyi Club & Eko Atlantic',
    description: 'High-gloss crocodile hide catches low interior amber lighting. The mirror palladium ring bar provides just enough metal to replace the need for loud jewelry.',
    image: '/assets/clean_shoes/sw_black_croc_lug.png',
    leather: 'Glazed Croc Scale',
    priceNGN: 185000,
  },
  {
    id: 'edit-3',
    productId: 'sw-04',
    title: 'The Cerulean Mamba',
    pairing: 'Raw Silk Trousers & Velvet Midnight Dinner Jacket',
    accent: 'Hand-Selected Python Symmetry',
    vibe: 'Gala Premiere · Black Tie With Swagger',
    description: 'Unapologetically rare. Dyed deep midnight cerulean python scale hide presented in velvet. Worn by patrons who know that entering a room should be an arrival, not an entry.',
    image: '/assets/clean_shoes/sw_blue_python_box.png',
    leather: 'Midnight Python',
    priceNGN: 195000,
  },
  {
    id: 'edit-4',
    productId: 'sw-05',
    title: 'The Arabesque Slipper',
    pairing: 'Crisp White Linen or Heavy Silk Loungewear',
    accent: 'Turquoise Woven Damask & Glazed Saddle',
    vibe: 'Resort Sanctuaries · Penthouse Entertaining',
    description: 'Intricate woven turquoise damask grounded by an obsidian calfskin saddle. Soft enough to slip on barefoot, regal enough to host royalty.',
    image: '/assets/clean_shoes/sw_turquoise_damask_slipper.png',
    leather: 'Damask Jacquard & Calfskin',
    priceNGN: 165000,
  },
];

export const SartorialEditorial: React.FC<SartorialEditorialProps> = ({
  currency,
  onSelectProduct,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = STYLING_EDITS[activeTab];

  return (
    <section id="sartorial" className="w-full bg-[#08090c] py-20 lg:py-28 border-b border-white/[0.08] relative overflow-hidden">
      {/* Subtle Warm Amber Gradient in Backdrop */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d4af37]/[0.025] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2a1a0e]/[0.1] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Top Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] mb-3 font-medium">
              <span>Sartorial Codes</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>The Dressing Room</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5f4f0] tracking-tight leading-[1.15]">
              How To Command A Room.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#8c8a84] max-w-md font-light leading-relaxed">
            The difference between dressing well and leaving an unforgettable impression is where your footwear anchors the outfit. Four curated styling masterclasses.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {STYLING_EDITS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded text-left transition-all cursor-pointer border ${
                activeTab === idx
                  ? 'bg-[#14161f] border-[#d4af37] shadow-[0_4px_25px_rgba(212,175,55,0.12)]'
                  : 'bg-[#0f1015] border-white/[0.06] hover:border-white/20 text-[#777]'
              }`}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase block text-[#c5a880] mb-1">
                Edit 0{idx + 1}
              </span>
              <h3 className={`font-display text-sm font-bold truncate ${activeTab === idx ? 'text-[#f5f4f0]' : 'text-[#a5a4a0]'}`}>
                {item.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Main Editorial Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#101218] border border-white/[0.08] rounded-xl p-6 lg:p-10 shadow-2xl">
          
          {/* Visual Showcase (7 Cols) */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => onSelectProduct(current.productId)}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#07080a] border border-white/10 group cursor-pointer"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] block mb-1">
                    {current.leather}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {current.title}
                  </h4>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(current.productId);
                  }}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e4bf47] rounded transition-all shrink-0 cursor-pointer shadow-lg"
                >
                  <span>Inspect Piece</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Copy & Breakdown (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Vibe / Occasion */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c5a880] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{current.vibe}</span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#f5f4f0] mb-4 leading-tight">
                {current.pairing}
              </h3>

              <p className="text-sm text-[#b8b7b2] leading-relaxed font-light mb-6">
                {current.description}
              </p>

              {/* Styling Key Note */}
              <div className="p-4 rounded bg-[#0b0c10] border border-white/[0.06] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#777] uppercase tracking-wider text-[10px]">The Signature Detail</span>
                  <span className="text-[#f5f4f0] font-medium">{current.accent}</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-white/[0.04]">
                  <span className="text-[#777] uppercase tracking-wider text-[10px]">Atelier Price</span>
                  <span className="font-mono text-base font-bold text-[#d4af37] tabular-nums">
                    {formatPrice(current.priceNGN, currency)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => onSelectProduct(current.productId)}
              className="w-full py-3.5 px-5 rounded text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e4bf47] active:scale-95 transition-all text-center cursor-pointer shadow-[0_4px_16px_rgba(212,175,55,0.2)]"
            >
              Order This Look
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
