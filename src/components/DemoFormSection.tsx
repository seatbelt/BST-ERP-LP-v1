import React, { useEffect, useRef, useState } from 'react';
import { Lock } from 'lucide-react';
import { FormState, FormErrors } from '../types';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string | HTMLElement;
          onFormReady?: ($form: unknown) => void;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

interface DemoFormSectionProps {
  formData?: FormState;
  formErrors?: FormErrors;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

export const DemoFormSection: React.FC<DemoFormSectionProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const formCreatedRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initForm = () => {
      if (typeof window !== 'undefined' && window.hbspt && !formCreatedRef.current) {
        const container = document.getElementById('hubspot-form-container');
        if (container) {
          container.innerHTML = '';
          window.hbspt.forms.create({
            portalId: "21265693",
            formId: "92875786-2cc3-4b38-b517-c0aaad04ce30",
            region: "na1",
            target: "#hubspot-form-container",
            onFormReady: () => {
              setIsLoading(false);
            }
          });
          formCreatedRef.current = true;
          // Fallback in case onFormReady doesn't fire
          setTimeout(() => setIsLoading(false), 1200);
        }
      }
    };

    const loadHubSpot = () => {
      if (window.hbspt) {
        initForm();
      } else {
        let script = document.querySelector('script[src="//js.hsforms.net/forms/embed/v2.js"]') as HTMLScriptElement;
        if (!script) {
          script = document.createElement('script');
          script.src = '//js.hsforms.net/forms/embed/v2.js';
          script.charset = 'utf-8';
          script.type = 'text/javascript';
          document.body.appendChild(script);
        }
        const handleLoad = () => {
          initForm();
        };
        script.addEventListener('load', handleLoad);
      }
    };

    const targetEl = sectionRef.current || document.getElementById('demo');
    if (!targetEl) {
      loadHubSpot();
      return;
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadHubSpot();
            observer.disconnect();
          }
        },
        { rootMargin: '300px' }
      );
      observer.observe(targetEl);
      return () => observer.disconnect();
    } else {
      loadHubSpot();
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 bg-[#F6F9FE] border-y border-[#EEF0F1]" id="demo">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        
        <div className="text-center mb-10">
          <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight mb-4">
            Request a <span className="text-[#0072EA]">Personalized Demo</span>
          </h2>
          
          <p className="text-[16px] leading-[1.7] text-[#5C6670] max-w-[620px] mx-auto">
            See firsthand how BST11 ERP can help your firm streamline project delivery, optimize resources and elevate business performance.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-[760px] mx-auto bg-white rounded-2xl shadow-xl border border-[#EEF0F1] overflow-hidden">
          
          {/* Trust ribbon */}
          <div className="bg-[#0072EA] px-6 py-3.5 text-center text-white text-[13px] font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Your Information is Safe &amp; Secure
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            {isLoading && (
              <div className="py-14 flex flex-col items-center justify-center text-[#8F99A3] gap-3">
                <svg className="animate-spin h-7 w-7 text-[#0072EA]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="text-sm font-medium">Loading form...</span>
              </div>
            )}
            
            <div
              id="hubspot-form-container"
              className={isLoading ? 'opacity-0 h-0 overflow-hidden' : 'w-full transition-opacity duration-300'}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
