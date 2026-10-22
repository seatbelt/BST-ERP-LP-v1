import React from 'react';
import unifyPng from '../assets/U2-ERP-2026-Unify-360-visibility.png';

export const UnifySection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white" id="unify">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines and Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* H2 Headline: 56px at 993px+, 48px from 768-992px, 40px at 767px and below */}
            <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight mb-8">
              <span className="text-[#0072EA]">360° Visibility</span> With Automation
            </h2>

            <div className="grid gap-8 w-full">
              {/* Pillar 1 */}
              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.25] text-[#40474F] mb-1.5">
                    360° Business Visibility
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                    <strong className="font-semibold text-[#40474F]">Make confident business decisions.</strong> Access real-time project health, resource utilization, billing and profitability metrics from one central system.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.25] text-[#40474F] mb-1.5">
                    Automated Workflows
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                    <strong className="font-semibold text-[#40474F]">Streamline operations and eliminate silos.</strong> Automate core processes from time entry and expense capture to invoicing, resource planning and billing reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 360° Visibility Graphic */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-[#0072EA]/10 rounded-full blur-2xl -z-10 pointer-events-none"></div>

            <div className="relative w-full max-w-[500px]">
              <img
                src={unifyPng}
                alt="360° Visibility With Automation"
                width={653}
                height={425}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl shadow-xl border border-[#EEF0F1] bg-white object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
