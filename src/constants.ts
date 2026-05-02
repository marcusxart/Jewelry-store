import { Material, Category, Product, Testimonial, TeamMember, FAQItem, StyleCollection, CollectionInfo } from './types';

export const COLLECTIONS: CollectionInfo[] = [
  {
    id: StyleCollection.CELESTIAL,
    name: "The Celestial Collection",
    description: "Inspired by the architectural beauty of the night sky, featuring star-cut diamonds and deep blue sapphires.",
    image: "https://images.unsplash.com/photo-1573408302382-90cdc4446482?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: StyleCollection.MINIMALIST,
    name: "The Minimalist Series",
    description: "Quiet luxury defined by clean lines, geometric forms, and the purest 18k and 24k gold.",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: StyleCollection.HERITAGE,
    name: "Heritage Classics",
    description: "Timeless designs that celebrate traditional Goldsmithing techniques passed down through generations.",
    image: "https://images.unsplash.com/photo-1584305101035-7798369527e0?auto=format&fit=crop&q=80&w=1200",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Aurelian Solitaries",
    price: 1250,
    material: Material.GOLD,
    category: Category.RINGS,
    collection: StyleCollection.MINIMALIST,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    description: "A classic 18k gold band with a single brilliant-cut diamond.",
  },
  {
    id: "2",
    name: "Starlight Pendant",
    price: 850,
    material: Material.SILVER,
    category: Category.NECKLACES,
    collection: StyleCollection.CELESTIAL,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    description: "Sterling silver necklace featuring a celestial-inspired sapphire pendant.",
  },
  {
    id: "3",
    name: "Eternal Platinum Band",
    price: 2100,
    material: Material.PLATINUM,
    category: Category.RINGS,
    collection: StyleCollection.HERITAGE,
    image: "https://images.unsplash.com/photo-1544450173-0498305c7438?auto=format&fit=crop&q=80&w=800",
    description: "Pure platinum band, handcrafted for enduring elegance.",
  },
  {
    id: "4",
    name: "Golden Cascade",
    price: 1500,
    material: Material.GOLD,
    category: Category.NECKLACES,
    collection: StyleCollection.HERITAGE,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    description: "Intricately woven 24k gold chain necklace.",
  },
  {
    id: "5",
    name: "Custom Heirloom",
    price: 5000,
    material: Material.GOLD,
    category: Category.CUSTOM,
    collection: StyleCollection.BESPOKE,
    image: "https://images.unsplash.com/photo-1584305101035-7798369527e0?auto=format&fit=crop&q=80&w=800",
    description: "A bespoke creation tailored to your unique story.",
  },
  {
    id: "6",
    name: "Luna Crescent",
    price: 650,
    material: Material.SILVER,
    category: Category.NECKLACES,
    collection: StyleCollection.CELESTIAL,
    image: "https://images.unsplash.com/photo-1611085583191-a3b1a308c160?auto=format&fit=crop&q=80&w=800",
    description: "Silver pendant in the shape of a waxing moon.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Eleanor Vance",
    location: "Paris",
    content: "The level of detail in the Aurelian Solitaries ring is simply breathtaking. It feels like wearing a piece of history.",
    rating: 5,
  },
  {
    id: "2",
    name: "Julian Thorne",
    location: "London",
    content: "A truly bespoke experience. The custom piece they made for our anniversary was more than jewelry; it was an heirloom.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sophia Rossi",
    location: "Milan",
    content: "Exquisite craftsmanship and a remarkably personal service. I wouldn't trust anyone else with my collection.",
    rating: 5,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "owner",
    name: "Aurelia Vane",
    role: "Founder & Creative Director",
    bio: "With over 20 years in the jewelry industry, Aurelia brings a vision of 'quiet luxury' to every piece her boutique produces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "1",
    name: "Marcus Chen",
    role: "Master Goldsmith",
    bio: "Marcus specializes in traditional hand-forging techniques that date back centuries.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Elena Petrov",
    role: "Gemologist",
    bio: "Elena sources our stones ethically, ensuring every diamond and sapphire meets our rigorous standards.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "David Aris",
    role: "Bespoke Designer",
    bio: "David transforms your personal stories into initial sketches and 3D digital renders.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "1",
    question: "Do you offer international shipping?",
    answer: "Yes, we provide secure, fully insured international shipping to over 50 countries via DHL Express.",
  },
  {
    id: "2",
    question: "How should I care for my gold jewelry?",
    answer: "We recommend cleaning your pieces with a soft-bristled brush and warm, soapy water. Avoid wearing them in pools or during heavy exercise.",
  },
  {
    id: "3",
    question: "Can I customize a piece from your current collection?",
    answer: "Absolutely. Many of our rings and necklaces can be adjusted or engraved to your specifications.",
  },
  {
    id: "4",
    question: "What is your return policy?",
    answer: "We offer a 14-day return window for all non-bespoke pieces, provided they are in their original, unworn condition.",
  },
];
