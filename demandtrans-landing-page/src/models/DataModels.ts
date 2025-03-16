// Data Models for the application
// These models represent the core data structures used throughout the application

export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: string;
  product: string;
  screenshot: string;
  features: string[];
  benefits: string[];
  keyFeatures: KeyFeature[];
  screenshots: Screenshot[];
  technicalSpecs: TechnicalSpecs;
  caseStudies: CaseStudy[];
  faqs: FAQ[];
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: string;
  relatedSolutions: string[];
  screenshot: string;
  features: string[];
  keyFeatures: KeyFeature[];
  screenshots: Screenshot[];
  technicalSpecs: TechnicalSpecs;
  caseStudy: CaseStudy[];
  faqs: FAQ[];
}

export interface KeyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Screenshot {
  image: string;
  caption: string;
}

export interface TechnicalSpecs {
  deployment: string[];
  integration: string[];
  security: string[];
  requirements: string[];
}

export interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SuccessStory {
  title: string;
  location: string;
  description: string;
  image: string;
  results: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}