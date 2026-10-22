import React from 'react';

interface FinalCtaBannerProps {
  onScrollTo: (id: string) => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onScrollTo }) => {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 text-white overflow-hidden bg-gradient-to-b from-[#0072EA] to-[#004FA3]"
      style={{ background: 'linear-gradient(180deg, #0072EA 0%, #004FA3 100%)' }}
      id="final-cta"
    >
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px] text-center relative z-10 flex flex-col items-center">
        
        {/* Eyebrow */}
        <span className="text-[12px] uppercase font-semibold tracking-wider bg-white/15 px-3.5 py-1 rounded-full text-[#EEF0F1] mb-4 inline-block">
          Get Started Today
        </span>

        {/* Headline: H2 56px at 993px+, 48px from 768-992px, 40px at 767px and below */}
        <h2
          className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold tracking-tight mb-4 max-w-2xl leading-[1.12] text-white !text-white"
          style={{ color: '#FFFFFF' }}
        >
          Ready to Transform Your Business?
        </h2>

        {/* Subtitle: 16px, LH 1.7, #EEF0F1 */}
        <p className="text-[16px] leading-[1.7] text-[#EEF0F1] max-w-lg mb-8">
          See how BST11 ERP helps AEC leaders gain visibility, improve collaboration and drive predictable project performance.
        </p>

        {/* Dark/Overlay CTA Button (Web Standards Section 2) */}
        <button
          onClick={() => onScrollTo('demo')}
          id="final-banner-cta"
          className="bg-[#3191FF] hover:bg-[#257fe6] text-white font-semibold text-[14px] uppercase tracking-wider py-[10px] px-[28px] rounded-full min-h-[44px] shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Request a Demo
        </button>
      </div>
    </section>
  );
};
