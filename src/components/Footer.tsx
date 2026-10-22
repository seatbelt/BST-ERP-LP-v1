import React from 'react';
import bstLogo from '../assets/BST-Global-logo.svg';

interface FooterProps {
  logoError: boolean;
  setLogoError: (val: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({ logoError, setLogoError }) => {
  return (
    <footer className="bg-[#FAFAFA] py-12 border-t border-[#EEF0F1] text-center" id="main-footer">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px] flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center" id="footer-brand-logo">
          {!logoError ? (
            <div className="flex items-center select-none opacity-85 hover:opacity-100 transition-opacity">
              <img 
                src={bstLogo} 
                alt="BST Global" 
                height={24}
                loading="lazy"
                decoding="async"
                className="h-[24px] w-auto object-contain" 
                referrerPolicy="no-referrer"
                onError={() => {
                  const el = document.getElementById('bst-footer-img') as HTMLImageElement;
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
                id="bst-footer-img"
              />
            </div>
          ) : (
            <div className="flex items-center">
              <span className="font-semibold text-lg text-[#40474F] tracking-tight">BST Global</span>
            </div>
          )}
        </div>

        {/* Links and Copyright */}
        <div className="text-[14px] text-[#5C6670] flex flex-wrap items-center justify-center gap-4">
          <span>&copy; {new Date().getFullYear()} BST Global. All rights reserved.</span>
          <span className="text-[#8F99A3]">&middot;</span>
          <a
            href="https://bstglobal.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0072EA] hover:underline focus-visible:underline font-medium cursor-pointer transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-[#8F99A3]">&middot;</span>
          <a
            href="https://bstglobal.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0072EA] hover:underline focus-visible:underline font-medium cursor-pointer transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
