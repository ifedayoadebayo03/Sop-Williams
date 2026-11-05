import React, { useState } from 'react';
import { ShoppingBag, ChevronDown } from 'lucide-react';
import { Currency, CURRENCIES } from '../data/products';

interface TopBarProps {
  cartCount: number;
  onOpenCart: () => void;
  currency: Currency;
  onSelectCurrency: (c: Currency) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  cartCount,
  onOpenCart,
  currency,
  onSelectCurrency,
  onNavigate,
}) => {
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#090a0c]/90 border-b border-white/[0.08] transition-all">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
        
        {/* Zone 1: Single element wordmark (Display face, uppercase, whitespace-nowrap) */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <span className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-[0.16em] sm:tracking-[0.24em] text-[#f5f4f0] group-hover:text-[#d4af37] transition-colors whitespace-nowrap uppercase">
            SOP WILLIAMS
          </span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium tracking-wider uppercase text-[#a5a4a0]">
          <button
            onClick={() => onNavigate('collection')}
            className="hover:text-[#f5f4f0] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Collection
          </button>
          <button
            onClick={() => onNavigate('sartorial')}
            className="hover:text-[#f5f4f0] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Sartorial Codes
          </button>
          <button
            onClick={() => onNavigate('store-location')}
            className="hover:text-[#f5f4f0] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Mandilas Store
          </button>
          <button
            onClick={() => onNavigate('lookbook')}
            className="hover:text-[#f5f4f0] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Runway
          </button>
          <button
            onClick={() => onNavigate('concierge')}
            className="hover:text-[#f5f4f0] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1"
          >
            Concierge
          </button>
        </nav>

        {/* Zone 3: 1 primary action with currency selector (Compact on mobile) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Subtle Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 text-[11px] sm:text-xs text-[#c5a880] hover:text-[#f5f4f0] border border-white/10 rounded hover:border-[#c5a880]/40 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title="Select Currency"
            >
              <span className="font-mono tabular-nums">{currency}</span>
              <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-70" />
            </button>

            {currencyOpen && (
              <div className="absolute right-0 mt-1.5 w-32 bg-[#12141a] border border-white/10 rounded shadow-2xl py-1 z-50">
                {(Object.keys(CURRENCIES) as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      onSelectCurrency(cur);
                      setCurrencyOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                      currency === cur
                        ? 'text-[#d4af37] bg-white/5 font-semibold'
                        : 'text-[#a5a4a0] hover:text-[#f5f4f0] hover:bg-white/5'
                    }`}
                  >
                    <span>{CURRENCIES[cur].label}</span>
                    <span className="font-mono">{CURRENCIES[cur].symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Action Button: Bag Drawer */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-black bg-[#d4af37] hover:bg-[#e4bf47] active:scale-95 rounded transition-all whitespace-nowrap shrink-0 shadow-[0_2px_12px_rgba(212,175,55,0.25)] cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span>Bag</span>
            {cartCount > 0 && (
              <span className="ml-0.5 sm:ml-1 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold bg-black text-[#d4af37] rounded-full font-mono shrink-0 leading-none min-w-[18px] text-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
