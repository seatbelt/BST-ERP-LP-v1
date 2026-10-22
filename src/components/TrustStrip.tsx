import React from 'react';
import arcadisLogo from '../assets/Logos/Arcadis_logo.svg.webp';
import rambollLogo from '../assets/Logos/Ramboll_logo.svg';
import stantecLogo from '../assets/Logos/Stantec-Logo.wine.png';
import wspLogo from '../assets/Logos/WSP_logo.svg';
import colliersLogo from '../assets/colliers_logo_gray.svg';
import ghdLogo from '../assets/ghd_logo_gray.svg';
import moffattLogo from '../assets/Logos/Moffatt_Nichole_Stacked_Preferred.webp';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 md:py-12 border-y border-[#EEF0F1]" id="trust">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        <p className="text-center text-[13px] uppercase tracking-wider font-semibold text-[#8F99A3] mb-8">
          Trusted by Leading Architecture and Engineering Firms
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 gap-y-6">
          {/* ARCADIS */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={arcadisLogo}
              alt="Arcadis"
              width={138}
              height={20}
              loading="lazy"
              decoding="async"
              className="h-[18px] md:h-[20px] w-auto max-w-[125px] md:max-w-[138px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* RAMBOLL */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={rambollLogo}
              alt="Ramboll"
              width={102}
              height={24}
              loading="lazy"
              decoding="async"
              className="h-[22px] md:h-[24px] w-auto max-w-[90px] md:max-w-[102px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* STANTEC */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={stantecLogo}
              alt="Stantec"
              width={104}
              height={24}
              loading="lazy"
              decoding="async"
              className="h-[22px] md:h-[24px] w-auto max-w-[92px] md:max-w-[104px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* WSP */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={wspLogo}
              alt="WSP"
              width={70}
              height={29}
              loading="lazy"
              decoding="async"
              className="h-[26px] md:h-[29px] w-auto max-w-[62px] md:max-w-[70px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* COLLIERS */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={colliersLogo}
              alt="Colliers"
              width={95}
              height={25}
              loading="lazy"
              decoding="async"
              className="h-[22px] md:h-[25px] w-auto max-w-[85px] md:max-w-[95px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* GHD */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={ghdLogo}
              alt="GHD"
              width={42}
              height={32}
              loading="lazy"
              decoding="async"
              className="h-[28px] md:h-[32px] w-auto max-w-[36px] md:max-w-[42px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>

          {/* Moffatt & Nichol */}
          <div className="flex items-center justify-center select-none py-1 h-10">
            <img
              src={moffattLogo}
              alt="Moffatt & Nichol"
              width={86}
              height={27}
              loading="lazy"
              decoding="async"
              className="h-[25px] md:h-[27px] w-auto max-w-[76px] md:max-w-[86px] object-contain select-none opacity-85 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
