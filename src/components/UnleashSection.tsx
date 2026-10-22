import React from 'react';
import { Sparkles, ShieldAlert, Sliders, ArrowRight } from 'lucide-react';

interface UnleashSectionProps {
  onScrollTo: (id: string) => void;
}

export const UnleashSection: React.FC<UnleashSectionProps> = ({ onScrollTo }) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#F6F9FE] relative" id="unleash">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px] text-center">
        
        {/* H2 Headline: 56px at 993px+, 48px from 768-992px, 40px at 767px and below */}
        <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight mb-5">
          A Data-Driven <span className="text-[#0072EA]">AI Ready</span> Platform
        </h2>

        {/* Section Intro: 16px, LH 1.7, #5C6670, Max 760px */}
        <p className="text-[16px] leading-[1.7] text-[#5C6670] max-w-[760px] mx-auto mb-16">
          Transform project data into actionable foresight that drives profitability.
        </p>

        <div className="grid lg:grid-cols-12 gap-12 items-center text-left mb-14">
          
          {/* Left Column: 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Column 1 */}
            <div className="flex gap-4 items-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.25] font-semibold text-[#40474F] mb-1.5">
                  AI-Powered Predictions
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                  <strong className="font-semibold text-[#40474F]">Switch from a reactive to proactive mindset.</strong> Leverage advanced machine learning algorithms to spot trends, predict project outcomes and mitigate risks before they impact margins.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex gap-4 items-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.25] font-semibold text-[#40474F] mb-1.5">
                  Anomaly Detection
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                  <strong className="font-semibold text-[#40474F]">Catch issues before they escalate.</strong> Detect project variances and anomalies early to protect project budgets and firm-wide profitability.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex gap-4 items-start">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0072EA] mt-2.5 md:mt-3 lg:mt-3.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.25] font-semibold text-[#40474F] mb-1.5">
                  Generative AI Capabilities
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#5C6670]">
                  <strong className="font-semibold text-[#40474F]">Unlock new levels of productivity.</strong> Empower your teams with AI assistants that draft summaries, synthesize project updates and surface relevant answers in seconds.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Prediction Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-80 h-80 bg-[#0072EA]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

            <div className="relative w-full max-w-[380px] bg-white rounded-2xl shadow-xl border border-[#EEF0F1] p-5 flex flex-col gap-4">
              
              <div className="flex items-center justify-between border-b border-[#EEF0F1] pb-3">
                <div className="flex items-center gap-1.5 text-[#0072EA]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-[#40474F]">Prediction Center</span>
                </div>
                <span className="text-[10px] bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded-full border border-amber-200 uppercase">
                  Live
                </span>
              </div>

              {/* Card 1 */}
              <div className="p-4 bg-[#FAFAFA] rounded-xl border border-[#EEF0F1] shadow-2xs flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="text-[18px] md:text-[20px] leading-[1.4] font-semibold text-[#40474F] mb-0.5">Anomaly Detected</h5>
                  <p className="text-[12px] text-[#5C6670] leading-relaxed">
                    Projected cost overrun: <span className="font-semibold text-red-600">($76,489)</span>
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-4 bg-[#FAFAFA] rounded-xl border border-[#EEF0F1] shadow-2xs flex items-start gap-3">
                <Sliders className="w-5 h-5 text-[#0072EA] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="text-[18px] md:text-[20px] leading-[1.4] font-semibold text-[#40474F] mb-0.5">Recommended Adjustment</h5>
                  <p className="text-[12px] text-[#5C6670] leading-relaxed">
                    Recommended resource adjustment: <span className="font-semibold text-[#40474F]">($16,858)</span>
                  </p>
                </div>
              </div>

              <div className="mt-1 text-center">
                <span className="text-[11px] text-[#8F99A3] italic">
                  Sample project data shown for illustration.
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Mid-page Primary Blue Button (Section 2 Button Standards) */}
        <div className="flex justify-center">
          <button
            onClick={() => onScrollTo('demo')}
            id="mid-page-cta"
            className="bg-[#0072EA] hover:bg-[#0055AF] text-white font-semibold text-[14px] uppercase tracking-wider py-[10px] px-[28px] rounded-full min-h-[44px] shadow-sm transition-all duration-200 cursor-pointer inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#0072EA] focus-visible:outline-offset-2"
          >
            Schedule a Custom Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
