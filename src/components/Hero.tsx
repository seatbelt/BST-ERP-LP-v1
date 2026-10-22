import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white" id="hero">
      {/* Subtle brand ambient accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-[#F6F9FE] to-transparent rounded-full blur-3xl opacity-70 -z-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#F6F9FE] rounded-full blur-2xl opacity-60 -z-10 pointer-events-none"></div>

      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pre-headline eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F9FE] text-[#0072EA] border border-[#0072EA]/20 text-[12px] font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Enterprise Resource Planning
            </div>

            {/* Primary Headline (H1: Line-height 1.2 at all breakpoints) */}
            <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-semibold leading-[1.2] text-[#40474F] tracking-tight mb-5">
              ERP for <span className="text-[#0072EA]">AECs</span>
            </h1>
            
            {/* H1 Sub-line (H5: 20px, LH 1.4, #40474F) */}
            <p className="text-[18px] md:text-[20px] font-semibold leading-[1.4] text-[#40474F] mb-4">
              Simplify the way you work, unify your business and unleash your potential.
            </p>

            {/* Default Body Copy (16px, LH 1.7, #5C6670, Flush Left, Max 680px) */}
            <p className="text-[16px] leading-[1.7] text-[#5C6670] mb-8 max-w-[680px]">
              BST11 ERP gets project managers and teams out of Excel and into the architecture, engineering and environmental consulting industry’s first consumer-grade, project-driven and collaborative ERP solution. Gain a live 360° view of all aspects of your business — projects, people, performance and more — to better guide project and business decisions.
            </p>

            {/* Dual CTAs (Section 2 Button Standards) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary Green Button (for "Request a Demo") */}
              <button
                onClick={() => onScrollTo('demo')}
                id="hero-primary-cta"
                className="bg-[#43B571] hover:bg-[#389e62] text-white font-semibold text-[14px] uppercase tracking-wider py-[10px] px-[28px] rounded-full min-h-[44px] transition-all duration-200 cursor-pointer shadow-xs inline-flex items-center justify-center text-center focus-visible:outline-2 focus-visible:outline-[#43B571] focus-visible:outline-offset-2"
              >
                Request a Demo
              </button>

              {/* Secondary Outline Button (1px #0072EA stroke) */}
              <button
                onClick={() => onScrollTo('video-section')}
                id="hero-secondary-cta"
                className="bg-white hover:bg-[#F6F9FE] text-[#0072EA] border border-[#0072EA] font-semibold text-[14px] uppercase tracking-wider py-[10px] px-[28px] rounded-full min-h-[44px] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 group focus-visible:outline-2 focus-visible:outline-[#0072EA] focus-visible:outline-offset-2"
              >
                Watch Event Video
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Right Visual: Optimized Static Picture */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <picture className="w-full max-w-[500px]">
              <source srcSet="images/bst11-hero-mobile.webp" media="(max-width: 768px)" type="image/webp" />
              <source srcSet="images/bst11-hero-desktop.webp" media="(min-width: 769px)" type="image/webp" />
              <img
                src="images/bst11-hero-desktop.webp"
                alt="BST11 ERP Dashboard Preview"
                width={812}
                height={842}
                fetchPriority="high"
                decoding="sync"
                className="w-full h-auto rounded-2xl shadow-xl border border-[#EEF0F1] object-contain bg-white"
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  );
};
