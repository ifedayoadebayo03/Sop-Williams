import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { ATELIER_CONTACTS, buildWhatsAppLink } from '../data/products';

export const FloatingConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#121318] border border-[#d4af37]/30 rounded-xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#c5a880] font-semibold block">
                Sop Williams Concierge
              </span>
              <span className="text-xs text-[#f5f4f0] font-medium">Mandilas & WhatsApp Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#777] hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href={buildWhatsAppLink('Hello Sop Williams, I want to check footwear availability and arrange delivery or store pickup.', ATELIER_CONTACTS.whatsapp1)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded border border-white/10 bg-[#0c0d10] hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all text-xs"
            >
              <div>
                <span className="text-[#f5f4f0] font-medium block">Priority WhatsApp Line</span>
                <span className="text-[11px] font-mono text-[#c5a880]">{ATELIER_CONTACTS.phoneDisplay}</span>
              </div>
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            </a>

            <a
              href={buildWhatsAppLink('Hello Sop Williams, I want to check footwear availability and arrange delivery or store pickup.', ATELIER_CONTACTS.whatsapp2)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded border border-white/10 bg-[#0c0d10] hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all text-xs"
            >
              <div>
                <span className="text-[#f5f4f0] font-medium block">Secondary Line</span>
                <span className="text-[11px] font-mono text-[#c5a880]">{ATELIER_CONTACTS.phoneDisplay2}</span>
              </div>
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/10 text-[10px] text-[#777] text-center">
            {ATELIER_CONTACTS.policyNotice}
          </div>
        </div>
      )}

      {/* Main Floating Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#12141c] hover:bg-[#181a24] text-[#f5f4f0] border border-[#d4af37]/40 shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-all cursor-pointer group"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <MessageSquare className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold tracking-wider uppercase pr-1 font-display">
          WhatsApp Desk
        </span>
      </button>
    </div>
  );
};
