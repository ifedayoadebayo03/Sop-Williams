import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ATELIER_CONTACTS } from '../data/products';
import { MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#08090b] text-[#a5a4a0] border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">
          
          {/* Brand Intro (2 Cols) */}
          <div className="lg:col-span-2">
            <BrandLogo size="md" className="mb-4" />
            <p className="text-xs text-[#8c8a84] leading-relaxed max-w-sm mb-4 font-light">
              Sop Williams crafts and retails distinctive luxury footwear, Blake-stitched bit loafers, exotic skins, and architectural commando treads for discerning gentlemen.
            </p>

            {/* Store Address & Contact Box */}
            <div className="text-xs space-y-2 text-[#b8b7b2] pt-2 border-t border-white/[0.06]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="font-mono text-[11.5px] leading-relaxed text-[#f5f4f0]">
                  {ATELIER_CONTACTS.storeAddress}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span className="font-mono text-[11.5px]">
                  {ATELIER_CONTACTS.phoneDisplay} / {ATELIER_CONTACTS.phoneDisplay2}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`mailto:${ATELIER_CONTACTS.email}`} className="font-mono text-[11.5px] text-[#f5f4f0] hover:text-[#d4af37]">
                  {ATELIER_CONTACTS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Silhouettes */}
          <div>
            <h4 className="font-display text-xs font-bold text-[#f5f4f0] uppercase tracking-wider mb-4">
              Silhouettes
            </h4>
            <ul className="text-xs space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Modern Lugs & Hybrids
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Exotic Croc & Python
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Bit & Tassel Loafers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Wholecut Oxfords
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Slides & Slingbacks
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Mandilas & Craft */}
          <div>
            <h4 className="font-display text-xs font-bold text-[#f5f4f0] uppercase tracking-wider mb-4">
              Showroom & Brand
            </h4>
            <ul className="text-xs space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('store-location')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Mandilas Flagship Store
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sartorial')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Sartorial Codes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('lookbook')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Sovereign Runway
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('concierge')}
                  className="hover:text-[#f5f4f0] transition-colors cursor-pointer text-left"
                >
                  Client Services
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Store Terms & Dispatch */}
          <div>
            <h4 className="font-display text-xs font-bold text-[#f5f4f0] uppercase tracking-wider mb-4">
              Store Terms & Dispatch
            </h4>
            <div className="space-y-1 mb-3 text-xs text-[#b8b7b2]">
              <p className="font-medium text-[#f5f4f0]">48-Hour Exchange Guarantee</p>
              <p className="text-[11px] text-[#8c8a84] leading-relaxed">
                Footwear is eligible for size or silhouette exchange within 48 hours in pristine, unworn condition.
              </p>
            </div>
            <ul className="text-xs space-y-2 text-[#8c8a84]">
              <li>Lagos Same-Day Dispatch</li>
              <li>Nationwide Express Delivery</li>
              <li>In-Store Try-On & Pickup</li>
              <li>DHL Express International</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Stamp */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666]">
          <div>
            © 2026 Sop Williams. Shop SF3 Santak Plaza, Mandilas Lagos Island. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Handmade & Curated in Nigeria</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
