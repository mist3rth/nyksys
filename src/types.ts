export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  materials: string[];
  area: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  xPercent: number; // percentage from left
  yPercent: number; // percentage from top
  description: string;
}
