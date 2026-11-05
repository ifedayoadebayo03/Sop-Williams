import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Mail, Navigation, Check } from 'lucide-react';
import { ATELIER_CONTACTS, buildWhatsAppLink } from '../data/products';

export const StoreLocationSection: React.FC = () => {
  return (
    <section id="store-location" className="w-full bg-[#0d0f14] py-16 lg:py-24 border-b border-white/[0.08] relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#c5a880] mb-2 font-medium">
              <span>Showroom & Headquarters</span>
              <span aria-hidden="true">·</span>
              <span>Lagos Island</span>
            </div>
            <h2 className="font-display text-2xl lg:text-4xl font-bold text-[#f5f4f0] tracking-tight">
              Visit The Mandilas Boutique
            </h2>
          </div>
          <p className="text-sm text-[#a5a4a0] max-w-md font-light leading-relaxed">
            Experience the footwear in person. Try on sizes, inspect the grain and hardware, and pick up your chosen pair directly at our Santak Plaza boutique.
          </p>
        </div>

        {/* 2-Column Store Layout: In-Store Showcase Left, Location & Policy Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Live In-Store Showcase Photo */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-lg overflow-hidden border border-white/[0.1] bg-[#14161f] shadow-2xl h-full flex flex-col">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:h-[420px] w-full overflow-hidden">
                <img
                  src="/assets/clean_shoes/sw_black_intrecciato_store.png"
                  alt="Sop Williams Boutique Mandilas Lagos Island"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                    Direct From The Showroom Shelves
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f5f4f0]">
                    Sop Williams Mandilas Boutique
                  </h3>
                  <p className="text-xs text-[#c5a880] mt-1 font-mono">
                    Santak Plaza, Broad Street · Over 500+ pairs in ready-to-wear stock
                  </p>
                </div>
              </div>

              {/* Quick Perks Strip Below Image */}
              <div className="grid grid-cols-3 divide-x divide-white/[0.08] p-4 bg-[#101217] text-xs text-[#a5a4a0]">
                <div className="px-3 text-center">
                  <span className="block text-[#f5f4f0] font-semibold text-sm">Walk-in</span>
                  <span className="text-[11px]">Instant Showroom Fitting</span>
                </div>
                <div className="px-3 text-center">
                  <span className="block text-[#f5f4f0] font-semibold text-sm">24-48h</span>
                  <span className="text-[11px]">Nationwide Dispatch</span>
                </div>
                <div className="px-3 text-center">
                  <span className="block text-[#d4af37] font-semibold text-sm">48hr</span>
                  <span className="text-[11px]">Size Exchange Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Contacts & Exchange Policy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Address Card */}
            <div className="p-6 rounded-lg border border-white/[0.12] bg-[#12141a] shadow-xl">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-9 h-9 rounded bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                    Physical Store Address
                  </span>
                  <h4 className="font-display text-base font-bold text-[#f5f4f0] mt-0.5 leading-snug">
                    {ATELIER_CONTACTS.storeAddress}
                  </h4>
                  <p className="text-xs text-[#a5a4a0] mt-1">
                    Located on Broad Street in Mandilas, Lagos Island commercial district.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#a5a4a0]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{ATELIER_CONTACTS.hours}</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Santak Plaza 134/136 Broad Street Mandilas Lagos Island')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#d4af37] hover:underline text-xs font-medium"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Instant Contact Channels */}
            <div className="p-6 rounded-lg border border-white/[0.12] bg-[#12141a] shadow-xl flex flex-col gap-4">
              <span className="text-[11px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                Direct WhatsApp Hotlines
              </span>

              {/* WhatsApp Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={buildWhatsAppLink('Hello Sop Williams, I want to confirm store location and availability.', ATELIER_CONTACTS.whatsapp1)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] rounded text-xs font-semibold tracking-wide transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Line 1</span>
                </a>
                <a
                  href={buildWhatsAppLink('Hello Sop Williams, I want to confirm store location and availability.', ATELIER_CONTACTS.whatsapp2)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] rounded text-xs font-semibold tracking-wide transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Line 2</span>
                </a>
              </div>

              {/* Phone & Email Rows */}
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center justify-between text-[#a5a4a0] py-1 border-b border-white/[0.04]">
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> Mobile:
                  </span>
                  <a href={`tel:${ATELIER_CONTACTS.phoneDisplay}`} className="font-mono text-[#f5f4f0] hover:text-[#d4af37]">
                    {ATELIER_CONTACTS.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center justify-between text-[#a5a4a0] py-1">
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#d4af37]" /> Email:
                  </span>
                  <a href={`mailto:${ATELIER_CONTACTS.email}`} className="font-mono text-[#f5f4f0] hover:text-[#d4af37]">
                    {ATELIER_CONTACTS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quiet, Refined Customer Policy Card */}
            <div className="p-5 rounded-lg border border-white/[0.08] bg-[#101217] text-xs">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#f5f4f0] tracking-wide text-xs mb-1">
                    Store Sizing & Exchange Policy
                  </h4>
                  <p className="text-[#a5a4a0] leading-relaxed text-[11.5px] font-light">
                    {ATELIER_CONTACTS.policyDetails}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
