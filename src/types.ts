export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  deliverables: string[];
  metrics: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  metrics: string;
  description: string;
  fullStory: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface MarketingGoal {
  niche: string;
  monthlyBudget: number;
  currentUsers: number;
  conversionRate: number; // in percentage e.g., 2.5
}
