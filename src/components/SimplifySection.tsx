import React from 'react';
import consumerGradeImg from '../assets/U2-ERP-Product-Call-Out-ConsumerGrade.png';

export const SimplifySection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FE]" id="simplify">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Call-out Visual */}
          <div className="lg:col-span-5 order-last lg:order-first relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-[#0072EA]/10 rounded-full blur-2xl -z-10 pointer-events-none"></div>
            
            <div className="relative w-full max-w-[500px]">
              <img
                src={consumerGradeImg}
                alt="Consumer-Grade ERP Software Solution"
                width={619}
                height={371}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl shadow-xl border border-[#EEF0F1] object-contain bg-white"
              />
            </div>
          </div>

          {/* Right Column: Headlines & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* H2 Headline: 56px at 993px+, 48px from 768-992px, 40px at 767px and below */}
            <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight mb-8">
              <span className="text-[#0072EA]">Consumer-Grade</span> ERP Software Solution
            </h2>

            {/* Three Pillars */}
            <div className="grid gap-6 md:gap-8 w-full">
              
              {/* Pillar 1 */}
              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.25] text-[#40474F] mb-1.5">
                    User-Friendly Interface
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                    <strong className="font-semibold text-[#40474F]">Get out of Excel and into ERP.</strong> Experience a consumer-grade user experience with a modern interface, smart alerts, role-based workflows and intuitive navigation.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.25] text-[#40474F] mb-1.5">
                    Micro-Focused Applications
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                    <strong className="font-semibold text-[#40474F]">Give your team the right tools for the job.</strong> Equip each team member with lightweight, intuitive apps purpose-built for the tasks they do every day.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4 items-start">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.25] text-[#40474F] mb-1.5">
                    Built for Collaboration
                  </h3>
                  <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                    <strong className="font-semibold text-[#40474F]">Keep everyone on the same page.</strong> Foster seamless collaboration across your entire organization with unified project workspaces and shared digital views.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
