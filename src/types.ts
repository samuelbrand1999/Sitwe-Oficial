export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  tag: string;
  year: string;
  image: string;
  fallbackImage?: string;
  scrollable?: boolean;
  shortDescription: string;
  gridSpan: string; // for asymmetric layout
  aspectRatio: string;
  details: {
    challenge: string;
    solution: string;
    deliverables: string[];
    typography: string;
    highlight: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  highlightQuote: string;
  fullQuote: string;
  project: string;
  projectId?: string;
  year: string;
  videoDuration: string;
  videoUrl?: string;
  videoFallbackUrl?: string;
  posterUrl?: string;
  aspect: string;
}
