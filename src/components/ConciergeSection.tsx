import React, { useState } from 'react';
import { PhoneCall, MessageSquare, MapPin, Clock, ShieldCheck, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { ATELIER_CONTACTS, buildWhatsAppLink } from '../data/products';

const FAQS = [
  {
    q: 'Where is your physical store located?',
    a: 'Our flagship store is located at SHOP SF3 SANTAK PLAZA, 134/136 BROAD STREET, MANDILAS, LAGOS ISLAND. You are welcome to visit Monday through Saturday from 08:30 to 18:30 for in-person fitting and instant purchase.',
  },
  {
    q: 'What is your exchange and sizing policy?',
    a: 'We offer size or silhouette exchanges within 48 hours of purchase or delivery, provided the footwear is in unworn condition with pristine soles and original packaging. For the best fit, we also welcome clients to try on pairs directly at our Mandilas showroom.',
  },
  {
    q: 'Do you deliver nationwide and internationally?',
    a: 'Yes. We offer same-day dispatch across Lagos and rapid 24–48 hour express door delivery to Abuja, Port Harcourt, Ibadan, and all 36 states, as well as DHL express worldwide (UK, US, Canada, Europe).',
  },
  {
    q: 'Are your python and crocodile hides authentic?',
    a: 'Yes. All our exotic hides (Nile crocodile texture, genuine python scales, Italian calfskin, and French pebble grain) are carefully selected for grain depth, symmetry, and suppleness with reinforced channeled outsoles.',
  },
];

export const ConciergeSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="concierge" className="w-full bg-[#0d0e12] py-16 lg:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-3 font-medium">
            <span>Direct Client Services</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5f4f0] tracking-tight mb-4">
            Sop Williams Client Concierge
          </h2>
          <p className="text-xs sm:text-sm text-[#a5a4a0] font-light leading-relaxed">
            Need sizing advice, urgent dispatch to your doorstep, or want to check stock at our Mandilas boutique? Reach us directly on our hotlines.
          </p>
        </div>

        {/* 2-Column Split: Contact Channels on Left, FAQs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary WhatsApp Card */}
            <div className="p-6 rounded-lg border border-[#d4af37]/30 bg-[#12141c] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#c5a880] font-semibold block">
                    Priority WhatsApp Line
                  </span>
                  <span className="font-mono text-base font-bold text-[#f5f4f0]">
                    {ATELIER_CONTACTS.phoneDisplay}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#a5a4a0] mb-4 font-light">
                Direct hotline for instantaneous order placement, size verification, and immediate courier dispatch.
              </p>
              <a
                href={buildWhatsAppLink('Hello Sop Williams, I want to inquire about footwear availability and pricing.', ATELIER_CONTACTS.whatsapp1)}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#e4bf47] transition-all"
              >
                <span>Chat on WhatsApp (+234 803 052 8119)</span>
              </a>
            </div>

            {/* Secondary WhatsApp / Calling Card */}
            <div className="p-6 rounded-lg border border-white/10 bg-[#121318]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c5a880]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#a5a4a0] font-semibold block">
                    Secondary WhatsApp Line
                  </span>
                  <span className="font-mono text-base font-bold text-[#f5f4f0]">
                    {ATELIER_CONTACTS.phoneDisplay2}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#a5a4a0] mb-4 font-light">
                Available for phone calls, bulk orders, and Mandilas store directions.
              </p>
              <a
                href={buildWhatsAppLink('Hello Sop Williams, I want to inquire about store hours and footwear stock.', ATELIER_CONTACTS.whatsapp2)}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-[#f5f4f0] hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37]/50 bg-white/[0.02] transition-all"
              >
                <span>Connect via Line 2 (+234 806 601 0750)</span>
              </a>
            </div>

            {/* Studio Hours & Email */}
            <div className="p-5 rounded-lg border border-white/[0.08] bg-[#0e0f14] space-y-3 text-xs text-[#a5a4a0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f5f4f0] font-medium block">Showroom:</span>
                  <span>{ATELIER_CONTACTS.storeAddress}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f5f4f0] font-medium block">Email:</span>
                  <a href={`mailto:${ATELIER_CONTACTS.email}`} className="text-[#d4af37] hover:underline">
                    {ATELIER_CONTACTS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f5f4f0] font-medium block">Opening Hours:</span>
                  <span>{ATELIER_CONTACTS.hours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* FAQs Accordion (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-display text-sm font-semibold text-[#f5f4f0] uppercase tracking-wider mb-4">
              Frequently Asked Questions
            </h3>

            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-lg border border-white/[0.08] bg-[#121318] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="font-display text-xs lg:text-sm font-semibold text-[#f5f4f0] leading-snug">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#777] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#a5a4a0] leading-relaxed border-t border-white/[0.06] font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Client Guarantee & Exchange Note */}
            <div className="p-4 rounded-lg border border-white/[0.08] bg-[#12131a] text-xs text-[#a5a4a0] mt-6">
              <div className="flex items-center gap-2 font-medium text-[#f5f4f0] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span className="capitalize">{ATELIER_CONTACTS.policyNotice}</span>
              </div>
              <p className="text-[11.5px] text-[#8c8a84] leading-relaxed">
                {ATELIER_CONTACTS.policyDetails}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
