import { Testimonial, FAQItem } from './types';

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    company: "Arcadis",
    author: "Heather Polinsky",
    role: "Global Operations Director",
    quote: "BST11 ERP provides our project managers with clear, real-time visibility across our global portfolio. Having predictive insights into resource demands and project milestones has transformed our delivery confidence.",
    logoText: "ARCADIS"
  },
  {
    id: 2,
    company: "Ramboll",
    author: "Søren Holm",
    role: "Chief Technology Officer",
    quote: "The consumer-grade interface makes adoption painless across all our offices. Our teams spend less time entering data and more time delivering high-value engineering solutions for our clients.",
    logoText: "RAMBOLL"
  },
  {
    id: 3,
    company: "Stantec",
    author: "Susan Reisbord",
    role: "Executive Vice President",
    quote: "Transitioning to BST Global has unified our project financials and resource forecasting into a single source of truth. The platform gives our leadership proactive foresight rather than retrospective reports.",
    logoText: "STANTEC"
  }
];

export const faqsData: FAQItem[] = [
  {
    id: 1,
    question: "What makes BST11 ERP different from traditional ERP systems?",
    answer: "BST11 ERP is purpose-built exclusively for the architecture, engineering and environmental consultancy industry. Rather than adapting generic manufacturing or retail ERP software, BST11 is designed around project lifecycles, resource workflows and consumer-grade usability that PMs actually want to use."
  },
  {
    id: 2,
    question: "How does BST11 ERP integrate with our existing business systems?",
    answer: "BST11 features an open architecture built on Microsoft Fabric, enabling near real-time data synchronization with your existing ecosystem. Standard APIs and connectors facilitate seamless integration with CRM, HR, payroll and third-party analytics platforms."
  },
  {
    id: 3,
    question: "How long does a typical BST11 implementation take?",
    answer: "Implementation timelines vary depending on firm size and data complexity, but our structured methodology and AEC-specific best practices allow most firms to go live in phases over 4 to 9 months, minimizing disruption to ongoing project work."
  },
  {
    id: 4,
    question: "Is BST11 ERP cloud-hosted and secure?",
    answer: "Yes, BST11 ERP is hosted in the secure cloud on Microsoft Azure with enterprise-grade data encryption, multi-tenant isolation, role-based access controls, and compliance with SOC 2, ISO 27001 and GDPR standards."
  },
  {
    id: 5,
    question: "How does AI and anomaly detection work in BST11?",
    answer: "BST11 continuously evaluates project progress, timesheets and billing variances against historical firm benchmarks and predictive models. When potential budget or schedule drift is detected, proactive alerts notify project managers before profit margins are impacted."
  }
];
