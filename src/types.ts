export enum Material {
  GOLD = "Gold",
  SILVER = "Silver",
  PLATINUM = "Platinum",
}

export enum Category {
  RINGS = "Rings",
  NECKLACES = "Necklaces",
  CUSTOM = "Custom",
}

export enum StyleCollection {
  CELESTIAL = "Celestial",
  MINIMALIST = "Minimalist",
  HERITAGE = "Heritage",
  BESPOKE = "Bespoke",
}

export interface CollectionInfo {
  id: StyleCollection;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  material: Material;
  category: Category;
  collection: StyleCollection;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
