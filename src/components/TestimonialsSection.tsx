import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';
import arcadisLogo from '../assets/Logos/Arcadis_logo.svg.webp';
import rambollLogo from '../assets/Logos/Ramboll_logo.svg';
import stantecLogo from '../assets/Logos/Stantec-Logo.wine.png';

const clientLogos: Record<string, string> = {
  Arcadis: arcadisLogo,
  Ramboll: rambollLogo,
  Stantec: stantecLogo,
};

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  activeTestimonial: number;
  setActiveTestimonial: React.Dispatch<React.SetStateAction<number>>;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  activeTestimonial,
  setActiveTestimonial
}) => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white" id="testimonials">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-10 min-[993px]:px-[60px]">
        
        <div className="text-center mb-12">
          <span className="text-[13px] uppercase tracking-wider font-semibold text-[#8F99A3] mb-2 block">
            Client Voices
          </span>
          <h2 className="text-[40px] md:text-[48px] min-[993px]:text-[56px] font-semibold leading-[1.12] text-[#40474F] tracking-tight">
            Proven Results Across the AEC Industry
          </h2>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="relative min-h-[300px] bg-[#F6F9FE] rounded-2xl border border-[#EEF0F1] p-8 md:p-12 shadow-sm flex flex-col justify-between overflow-hidden">
          
          <div className="relative z-10">
            {/* Header with client logo */}
            <div className="flex items-center mb-6">
              <img
                src={clientLogos[testimonials[activeTestimonial].company]}
                alt={testimonials[activeTestimonial].company}
                className="max-h-[28px] w-auto object-contain filter grayscale opacity-75"
                style={{ maxHeight: '28px', width: 'auto' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Quote verbatim */}
            <blockquote className="text-[16px] md:text-[18px] text-[#40474F] font-normal leading-[1.7] italic mb-8">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
          </div>

          {/* Testimonial Author Detail */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#EEF0F1] pt-6 gap-4">
            <div className="text-left">
              <h4 className="text-[21px] md:text-[22px] lg:text-[24px] leading-[1.32] font-semibold text-[#40474F]">{testimonials[activeTestimonial].author}</h4>
              <p className="text-[14px] md:text-[15px] text-[#5C6670]">{testimonials[activeTestimonial].role} at <span className="font-semibold text-[#40474F]">{testimonials[activeTestimonial].company}</span></p>
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 rounded-full border border-[#EEF0F1] bg-white hover:bg-[#F6F9FE] text-[#5C6670] hover:text-[#0072EA] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0072EA] focus-visible:outline-offset-2"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5 px-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0072EA] focus-visible:outline-offset-2 ${idx === activeTestimonial ? 'w-5 bg-[#0072EA]' : 'w-2 bg-[#EEF0F1]'}`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="p-2 rounded-full border border-[#EEF0F1] bg-white hover:bg-[#F6F9FE] text-[#5C6670] hover:text-[#0072EA] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0072EA] focus-visible:outline-offset-2"
                title="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
