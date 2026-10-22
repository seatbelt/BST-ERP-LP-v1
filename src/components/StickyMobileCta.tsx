import React from 'react';

interface StickyMobileCtaProps {
  show: boolean;
  onScrollTo: (id: string) => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ show, onScrollTo }) => {
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-[#EEF0F1] shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-4 py-3 z-40 md:hidden flex justify-center items-center transition-all duration-300 ease-out ${
        show ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      aria-hidden={!show}
    >
      {/* Primary Green Button (for "Request a Demo" - Section 2) */}
      <button
        onClick={() => onScrollTo('demo')}
        id="sticky-mobile-cta"
        className="w-full py-[10px] px-[28px] bg-[#43B571] hover:bg-[#389e62] text-white text-[14px] font-semibold uppercase tracking-wider rounded-full min-h-[44px] shadow-sm text-center cursor-pointer inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#43B571] focus-visible:outline-offset-2"
      >
        Request a Demo
      </button>
    </div>
  );
};

