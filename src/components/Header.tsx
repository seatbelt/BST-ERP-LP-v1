import React from 'react';
import bstLogo from '../assets/BST-Global-logo.svg';

interface HeaderProps {
  isScrolled: boolean;
  logoError: boolean;
  setLogoError: (val: boolean) => void;
  onScrollTo: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled,
  logoError,
  setLogoError,
  onScrollTo
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EEF0F1] py-3'
          : 'bg-white/90 backdrop-blur-xs border-b border-[#EEF0F1]/60 py-4'
      }`}
      id="main-header"
    >
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px] flex items-center justify-between gap-3">
        {/* Logo container */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer transition-opacity hover:opacity-90 py-1"
          id="header-brand-logo"
        >
          {!logoError ? (
            <div className="flex items-center select-none">
              <img
                src={bstLogo}
                alt="BST Global"
                height={24}
                className="h-[24px] w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={() => {
                  // Fallback hierarchy if needed
                  const el = document.getElementById('bst-header-img') as HTMLImageElement;
                  if (el && el.src !== '/BST-Global-logo.svg') {
                    el.src = '/BST-Global-logo.svg';
                  } else if (el && el.src !== '/bst_global_logo.png') {
                    el.src = '/bst_global_logo.png';
                  } else if (el && el.src !== '/BST_Global_Logo.jpg') {
                    el.src = '/BST_Global_Logo.jpg';
                  } else {
                    setLogoError(true);
                  }
                }}
                id="bst-header-img"
              />
            </div>
          ) : (
            <div className="flex items-center">
              <span className="font-bold text-xl md:text-2xl text-[#0072EA] tracking-tight">BST Global</span>
            </div>
          )}
        </div>

        {/* Primary Green Button (for "Request a Demo" - Brand Standards Section 2) */}
        <button
          onClick={() => onScrollTo('demo')}
          id="header-cta-btn"
          className="bg-[#43B571] hover:bg-[#389e62] text-white font-semibold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer shadow-xs inline-flex items-center justify-center whitespace-nowrap shrink-0 text-[12px] py-[8px] px-[14px] min-h-[40px] min-[401px]:text-[14px] min-[401px]:py-[10px] min-[401px]:px-[28px] min-[401px]:min-h-[44px] focus-visible:outline-2 focus-visible:outline-[#43B571] focus-visible:outline-offset-2"
        >
          Request a Demo
        </button>
      </div>
    </header>
  );
};
