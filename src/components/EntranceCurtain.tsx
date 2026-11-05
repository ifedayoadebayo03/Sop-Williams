import React, { useEffect, useState } from 'react';

export const EntranceCurtain: React.FC = () => {
  const [stage, setStage] = useState<'intro' | 'fadeout' | 'unmounted'>('intro');

  useEffect(() => {
    // Stage 1: Display cinematic brand crest and typography for 1.4s
    const timer1 = setTimeout(() => {
      setStage('fadeout');
    }, 1400);

    // Stage 2: Complete the smooth curtain reveal transition
    const timer2 = setTimeout(() => {
      setStage('unmounted');
    }, 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (stage === 'unmounted') return null;

  const handleSkip = () => {
    setStage('fadeout');
    setTimeout(() => {
      setStage('unmounted');
    }, 350);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#07080a] text-[#f5f4f0] cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        stage === 'fadeout'
          ? 'opacity-0 scale-[1.03] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      aria-label="Welcome to Sop Williams"
    >
      {/* Background radial gold aura */}
      <div className="absolute w-[600px] h-[600px] bg-[#d4af37]/[0.06] rounded-full blur-[140px] pointer-events-none animate-pulse" />

      {/* Atmospheric noise / texture layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.04),transparent_70%)] pointer-events-none" />

      {/* Centerpiece Showcase */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        
        {/* Monogram Crest */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#0d0f14] shadow-[0_0_30px_rgba(212,175,55,0.15)] relative group">
            {/* Inner diamond accent */}
            <div className="w-8 h-8 rotate-45 border border-[#d4af37]/30 absolute" />
            <span className="font-display text-xl font-bold text-[#d4af37] tracking-wider relative z-10">
              SW
            </span>
          </div>
          {/* Subtle spinning ring */}
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#d4af37]/20 animate-[spin_12s_linear_infinite]" />
        </div>

        {/* Brand Display Wordmark with Staggered Fade */}
        <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.32em] text-[#f5f4f0] uppercase mb-3">
          SOP WILLIAMS
        </h1>

        {/* Golden Hairline Divider that expands */}
        <div className="w-32 sm:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

        {/* Secondary Title & Mandilas Heritage */}
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#c5a880] mb-2 font-medium">
          Haute Cordwainerie · Mandilas
        </p>

        <p className="text-[10px] text-[#777] uppercase tracking-[0.2em] font-light">
          Broad Street, Lagos Island
        </p>

        {/* Skip hint */}
        <span className="absolute bottom-[-80px] text-[10px] text-[#555] tracking-widest uppercase hover:text-[#888] transition-colors">
          Click anywhere to enter
        </span>
      </div>
    </div>
  );
};
