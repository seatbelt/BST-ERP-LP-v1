/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FormState, FormErrors } from './types';
import { testimonialsData, faqsData } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { VideoShowcase } from './components/VideoShowcase';
import { StatsBand } from './components/StatsBand';
import { SimplifySection } from './components/SimplifySection';
import { UnifySection } from './components/UnifySection';
import { UnleashSection } from './components/UnleashSection';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';

const TestimonialsSection = React.lazy(() =>
  import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection }))
);
const DemoFormSection = React.lazy(() =>
  import('./components/DemoFormSection').then(m => ({ default: m.DemoFormSection }))
);
const FinalCtaBanner = React.lazy(() =>
  import('./components/FinalCtaBanner').then(m => ({ default: m.FinalCtaBanner }))
);
const FaqSection = React.lazy(() =>
  import('./components/FaqSection').then(m => ({ default: m.FaqSection }))
);

export default function App() {
  // Navigation & Interactive states
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showStickyMobile, setShowStickyMobile] = useState<boolean>(false);
  const [logoError, setLogoError] = useState<boolean>(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  // Form state
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    interest: 'BST11 ERP'
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setShowStickyMobile(scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Form input handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid work email address';
    }

    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.jobTitle.trim()) errors.jobTitle = 'Job title is required';
    if (!formData.country) errors.country = 'Please select your country';
    if (!formData.interest) errors.interest = 'Please select a solution';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  // Testimonials auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#5C6670] font-sans selection:bg-[#0072EA]/20 selection:text-[#40474F]">
      {/* 1. Header Navigation */}
      <Header
        isScrolled={isScrolled}
        logoError={logoError}
        setLogoError={setLogoError}
        onScrollTo={handleScrollTo}
      />

      {/* 2. Hero Section */}
      <Hero onScrollTo={handleScrollTo} />

      {/* 3. Trust Strip / Client Logos */}
      <TrustStrip />

      {/* 4. Video Showcase Section */}
      <VideoShowcase
        isPlayingVideo={isPlayingVideo}
        setIsPlayingVideo={setIsPlayingVideo}
      />

      {/* 5. Gradient Blue Dark Stats Band */}
      <StatsBand />

      {/* 6. Simplify Section (BST Blue Light background) */}
      <SimplifySection />

      {/* 7. Unify Section (White background) */}
      <UnifySection />

      {/* 8. Unleash Section (BST Blue Light background) */}
      <UnleashSection onScrollTo={handleScrollTo} />

      <React.Suspense fallback={<div className="py-12 bg-white" />}>
        {/* 9. Testimonials Proof Band */}
        <TestimonialsSection
          testimonials={testimonialsData}
          activeTestimonial={activeTestimonial}
          setActiveTestimonial={setActiveTestimonial}
        />

        {/* 10. Dedicated Demo Request Form */}
        <DemoFormSection
          formData={formData}
          formErrors={formErrors}
          isSubmitting={isSubmitting}
          isSubmitted={isSubmitted}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />

        {/* 11. Final Gradient Blue Dark CTA Banner */}
        <FinalCtaBanner onScrollTo={handleScrollTo} />

        {/* 12. FAQ Section */}
        <FaqSection
          faqs={faqsData}
          openFAQ={openFAQ}
          setOpenFAQ={setOpenFAQ}
        />
      </React.Suspense>

      {/* 13. Brand Footer */}
      <Footer
        logoError={logoError}
        setLogoError={setLogoError}
      />

      {/* 14. Sticky Mobile CTA */}
      <StickyMobileCta
        show={showStickyMobile}
        onScrollTo={handleScrollTo}
      />
    </div>
  );
}
