export interface Testimonial {
  id: number;
  company: string;
  author: string;
  role: string;
  quote: string;
  logoText: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  country: string;
  interest: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  country?: string;
  interest?: string;
}
