export type PortfolioCategory = 'all' | 'logos' | 'social-media' | 'branding' | 'posters';

export interface CaseStudy {
  challenge: string;
  strategy: string;
  deliverables: string[];
  results: string;
  palette?: string[];
  fontPairing?: string;
  targetAudience?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'logos' | 'social-media' | 'branding' | 'posters';
  imageSrc: string;
  client?: string;
  description?: string;
  tags?: string[];
  caseStudy?: CaseStudy;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  project?: string;
  rating: number;
  verified?: boolean;
}

export interface ProjectScopeSelection {
  services: string[];
  urgency: 'standard' | 'priority' | 'express';
  scale: 'starter' | 'growth' | 'enterprise';
  budgetBracket?: string;
}
