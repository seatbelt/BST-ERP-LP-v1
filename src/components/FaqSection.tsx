import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface FaqSectionProps {
  faqs: FAQItem[];
  openFAQ: number | null;
  setOpenFAQ: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  openFAQ,
  setOpenFAQ
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-[#EEF0F1]" id="faqs">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        
        <div className="text-center mb-12">
          <span className="text-[13px] uppercase tracking-wider font-semibold text-[#8F99A3] mb-2 block">
            Common Questions
          </span>
          <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFAQ === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#0072EA] bg-[#F6F9FE]/60 shadow-xs' : 'border-[#EEF0F1] bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0072EA] focus-visible:outline-offset-2"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="text-[16px] sm:text-[18px] font-semibold text-[#40474F] pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 text-[#0072EA] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                
                {/* Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-[#EEF0F1]' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5">
                    <p className="text-[16px] text-[#5C6670] leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
