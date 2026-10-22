import React from 'react';

export const StatsBand: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="stats">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        {/* Container with top-to-bottom gradient: #0072EA to #004FA3 */}
        <div
          className="rounded-2xl shadow-xl py-12 px-8 md:px-12 text-white bg-gradient-to-b from-[#0072EA] to-[#004FA3]"
          style={{ background: 'linear-gradient(180deg, #0072EA 0%, #004FA3 100%)' }}
        >
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 text-center md:divide-x md:divide-white/15">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <span className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-white">120,000+</span>
              <span className="text-[14px] font-semibold text-[#EEF0F1] uppercase tracking-wider">Global AEC Professionals</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-white">65</span>
              <span className="text-[14px] font-semibold text-[#EEF0F1] uppercase tracking-wider">Countries Worldwide</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <span className="text-4xl lg:text-5xl font-bold tracking-tight mb-2 text-white">18</span>
              <span className="text-[14px] font-semibold text-[#EEF0F1] uppercase tracking-wider">Years Average Client Tenure</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
