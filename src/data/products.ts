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
      "An iconic luxury timepiece representing elegance, success, achievement and timeless love.",

    reason:
      "A timeless choice for someone who appreciates luxury, sophistication and classic design.",

    story:
      "First introduced in 1917, the Cartier Tank has become one of the world's most celebrated luxury watches.",

    meaning:
      "Represents achievement, commitment and unforgettable milestones.",

    interests: [
      "fashion",
      "luxury",
      "business",
      "success",
      "achievement",
      "classic"
    ],

    personalities: [
      "elegant",
      "classic",
      "ambitious",
      "professional"
    ],

    occasions: [
      "birthday",
      "anniversary",
      "promotion",
      "milestone"
    ],

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
      "A luxury writing instrument symbolizing creativity, knowledge and personal achievement.",

    reason:
      "Perfect for someone who values growth, success and meaningful achievements.",

    story:
      "Montblanc pens represent excellence, craftsmanship and lifelong accomplishments.",

    meaning:
      "A reminder of ambition, dreams and important life moments.",

    interests: [
      "writing",
      "reading",
      "business",
      "knowledge",
      "learning"
    ],

    personalities: [
      "professional",
      "classic",
      "thoughtful"
    ],

    occasions: [
      "birthday",
      "graduation",
      "promotion",
      "achievement"
    ],

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
      "A handcrafted journal designed for creative minds, memories, art, ideas and personal reflections.",

    reason:
      "Ideal for creative personalities who enjoy expressing thoughts and preserving memories.",

    story:
      "Inspired by timeless British craftsmanship and luxury stationery traditions.",

    meaning:
      "Encourages creativity, emotional expression and unforgettable memories.",

    interests: [
      "journaling",
      "writing",
      "reading",
      "art",
      "painting",
      "creativity",
      "travel"
    ],

    personalities: [
      "creative",
      "artistic",
      "thoughtful",
      "emotional"
    ],

    occasions: [
      "birthday",
      "anniversary",
      "thank you",
      "personal"
    ],

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
      "A romantic luxury fragrance creating feelings of love, elegance and unforgettable memories.",

    reason:
      "A sophisticated fragrance for someone who enjoys beauty, romance and luxury experiences.",

    story:
      "One of the world's most admired luxury fragrances known for its unique identity.",

    meaning:
      "Creates a lasting emotional impression and a memorable connection.",

    interests: [
      "fashion",
      "beauty",
      "luxury",
      "style",
      "romance"
    ],

    personalities: [
      "confident",
      "elegant",
      "romantic"
    ],

    occasions: [
      "birthday",
      "anniversary",
      "valentine",
      "romantic"
    ],

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
      "A handcrafted tea experience designed for peaceful moments, relaxation and meaningful conversations.",

    reason:
      "Perfect for someone who values calmness, culture and quality time.",

    story:
      "Created by artisans inspired by Japanese traditions and mindfulness.",

    meaning:
      "Represents warmth, peace and togetherness.",

    interests: [
      "tea",
      "culture",
      "home",
      "relaxation",
      "tradition"
    ],

    personalities: [
      "calm",
      "minimalist",
      "thoughtful"
    ],

    occasions: [
      "birthday",
      "housewarming",
      "anniversary"
    ],

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
      "Premium cashmere accessory representing warmth, elegance, comfort and affection.",

    reason:
      "A luxurious everyday gift that expresses care and sophistication.",

    story:
      "Loro Piana is known worldwide for exceptional craftsmanship and premium fabrics.",

    meaning:
      "Symbolizes warmth, love and thoughtful care.",

    interests: [
      "fashion",
      "travel",
      "style",
      "luxury"
    ],

    personalities: [
      "elegant",
      "minimalist",
      "fashionable"
    ],

    occasions: [
      "birthday",
      "christmas",
      "anniversary"
    ],

    delivery: "3–5 Business Days",
    rating: 4.9,
  },


  {
    id: "photo-frame",
    name: "Personalized Memory Photo Frame",
    brand: "CHARIS Exclusive",
    category: "Personalized Gift",
    price: 4500,
    image: "/products/photo-frame.jpg",

    description:
      "A personalized emotional gift designed to preserve love, memories and special moments.",

    reason:
      "Perfect for romantic occasions and people who value meaningful memories.",

    story:
      "Created to transform personal moments into timeless keepsakes.",

    meaning:
      "Represents love, connection and unforgettable memories.",

    interests: [
      "photography",
      "art",
      "memories",
      "creativity",
      "romance"
    ],

    personalities: [
      "creative",
      "emotional",
      "romantic"
    ],

    occasions: [
      "birthday",
      "anniversary",
      "valentine"
    ],

    delivery: "5–7 Business Days",
    rating: 4.8,
  },


];