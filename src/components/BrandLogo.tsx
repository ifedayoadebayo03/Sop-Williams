import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 44 : 32;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Crest Monogram */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded border border-[#d4af37]/40 bg-gradient-to-br from-[#1c1d22] to-[#0c0d10] p-1.5 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#d4af37]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        >
          {/* Outer Octagonal Guilloché Border */}
          <polygon
            points="50,5 82,18 95,50 82,82 50,95 18,82 5,50 18,18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />
          {/* Subtle Inner Diamond */}
          <polygon
            points="50,15 85,50 50,85 15,50"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 3"
            strokeOpacity="0.4"
          />
          {/* Interlocking S and W Monogram */}
          {/* Letter S */}
          <path
            d="M58 32 C54 26, 42 26, 38 31 C34 36, 37 42, 50 46 C64 50, 66 58, 62 65 C58 72, 42 73, 36 66"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Letter W */}
          <path
            d="M34 40 L44 68 L52 50 L60 68 L70 40"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.9"
          />
          {/* Little shoemaker needle dot */}
          <circle cx="50" cy="20" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className="font-display font-bold tracking-[0.22em] text-[#f5f4f0] text-sm md:text-base leading-none uppercase">
          Sop Williams
        </span>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a880] mt-1 font-sans font-medium">
            Haute Cordwainerie
          </span>
        )}
      </div>
    </div>
  );
};
