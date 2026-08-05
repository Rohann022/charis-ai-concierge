export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  reason: string;
  story: string;
  meaning: string;
  interests: string[];
  personalities: string[];
  occasions: string[];
  delivery: string;
  rating: number;
};

export const products: Product[] = [
  {
    id: "cartier-watch",
    name: "Cartier Tank Watch",
    brand: "Cartier",
    category: "Luxury Watch",
    price: 345000,
    image: "/products/cartier-watch.jpg",
    description:
      "An iconic luxury timepiece crafted with timeless elegance and precision.",
    reason:
  "A timeless choice for someone who appreciates elegance and enduring craftsmanship.",
    story:
      "First introduced in 1917, the Cartier Tank has become one of the world's most celebrated luxury watches.",
    meaning:
      "Represents timeless love, achievement, and unforgettable memories.",
    interests: ["fashion", "luxury", "business"],
    personalities: ["elegant", "classic"],
    occasions: ["birthday", "anniversary"],
    delivery: "2–4 Business Days",
    rating: 4.9,
  },

  {
    id: "montblanc-pen",
    name: "Montblanc Pen",
    brand: "Montblanc",
    category: "Writing Instrument",
    price: 58000,
    image: "/products/montblanc.jpg",
    description:
      "Luxury handcrafted fountain pen with premium black resin finish.",
    reason:
  "Perfect for someone who values achievement, knowledge, and personal growth.",
    story:
      "Montblanc pens symbolize excellence, achievement, and lifelong success.",
    meaning:
      "Perfect for celebrating milestones, promotions, and graduation.",
    interests: ["writing", "business", "reading"],
    personalities: ["professional", "classic"],
    occasions: ["promotion", "birthday", "graduation"],
    delivery: "3–5 Business Days",
    rating: 4.8,
  },

  {
    id: "leather-journal",
    name: "Luxury Leather Journal",
    brand: "Smythson",
    category: "Lifestyle",
    price: 18000,
    image: "/products/journal.jpg",
    description:
      "Handcrafted leather journal designed to preserve meaningful memories.",
      reason:
  "Ideal for reflective personalities who enjoy capturing memories and ideas.",
    story:
      "Inspired by timeless British craftsmanship and luxury stationery.",
    meaning:
      "Encourages creativity, gratitude, and lifelong reflection.",
    interests: ["journaling", "travel", "reading"],
    personalities: ["creative", "thoughtful"],
    occasions: ["birthday", "thank you"],
    delivery: "2–3 Business Days",
    rating: 4.7,
  },

  {
    id: "perfume",
    name: "Maison Francis Kurkdjian Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    category: "Fragrance",
    price: 42000,
    image: "/products/perfume.jpg",
    description:
      "A luxurious fragrance known for its rich, unforgettable signature scent.",
      reason:
  "A luxurious fragrance for someone who enjoys sophisticated and unforgettable experiences.",
    story:
      "One of the world's most admired luxury perfumes, celebrated for sophistication.",
    meaning:
      "A memorable gift that leaves a lasting emotional impression.",
    interests: ["fashion", "beauty"],
    personalities: ["confident", "elegant"],
    occasions: ["birthday", "anniversary"],
    delivery: "2–4 Business Days",
    rating: 4.9,
  },

  {
    id: "tea-set",
    name: "Japanese Artisan Tea Set",
    brand: "Kyoto Crafts",
    category: "Home",
    price: 15000,
    image: "/products/tea-set.jpg",
    description:
      "Handcrafted ceramic tea set inspired by traditional Japanese artistry.",
      reason:
  "A meaningful gift that encourages relaxation and quality time together.",
    story:
      "Designed by master artisans to celebrate calmness and meaningful conversations.",
    meaning:
      "Represents peace, warmth, and togetherness.",
    interests: ["tea", "home", "culture"],
    personalities: ["calm", "minimalist"],
    occasions: ["housewarming", "birthday"],
    delivery: "4–6 Business Days",
    rating: 4.8,
  },

  {
    id: "cashmere-scarf",
    name: "Cashmere Luxury Scarf",
    brand: "Loro Piana",
    category: "Fashion",
    price: 32000,
    image: "/products/scarf.jpg",
    description:
      "Ultra-soft premium cashmere scarf crafted in Italy.",
      reason:
  "A luxurious everyday accessory that symbolizes warmth, comfort, and affection.",
    story:
      "Loro Piana has long been known for exceptional craftsmanship and luxurious fabrics.",
    meaning:
      "A symbol of warmth, comfort, and affection.",
    interests: ["fashion", "travel"],
    personalities: ["elegant", "minimalist"],
    occasions: ["birthday", "christmas"],
    delivery: "3–5 Business Days",
    rating: 4.9,
  }
];